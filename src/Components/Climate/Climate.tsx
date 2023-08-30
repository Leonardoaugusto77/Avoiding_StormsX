import React, { useState, useEffect } from "react";
import {
  ClimateContainer,
  Card,
  Title,
  SearchContainer,
  WeatherInfoContainer,
  SearchInput,
  SearchButton,
  WeatherConditions,
  WeatherImage,
} from "../../Styles/Climate_Styles/Climate_Styles";

interface ClimateProps {
  RequestClimate: (city: string) => Promise<any>;
}

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
  sys: {
    country: string;
  };
}

export default function Climate({ RequestClimate }: ClimateProps): JSX.Element {
  const [city, setCity] = useState<string | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const handleSearch = async () => {
    if (!city) {
      console.warn("Cidade não detectada. Aguardando dados de localização.");
      return;
    }

    try {
      const data = await RequestClimate(city);
      setWeatherData(data);
    } catch (error) {
      console.error("Erro ao buscar informações do clima:", error);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    const getUserLocation = async () => {
      try {
        const position = await new Promise<GeolocationPosition>(
          (resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          }
        );

        const { latitude, longitude } = position.coords;

        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );
        const data = await response.json();

        if (data.address && (data.address.city || data.address.town)) {
          const userCity = data.address.city || data.address.town;
          setCity(userCity);
          console.log("Cidade atual do usuário:", userCity);
          handleSearch();
        } else {
          console.warn("Cidade não encontrada na resposta da API.");
        }
      } catch (error) {
        console.error("Erro ao obter a localização do usuário:", error);
      }
    };

    const id = setInterval(getUserLocation, 600000);
    getUserLocation();
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <ClimateContainer>
      <Card>
        <Title>Verifique o clima na sua cidade</Title>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Aguardando localização..."
            value={city || ""}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <SearchButton onClick={handleSearch} disabled={!city}>
            Buscar
          </SearchButton>
        </SearchContainer>
        <WeatherInfoContainer isVisible={!!weatherData}>
          {weatherData ? (
            <>
              <h2>
                {weatherData?.name}, {weatherData?.sys.country}
              </h2>
              <p>Temperatura: {weatherData?.main.temp}°C</p>
              <p>Umidade: {weatherData?.main.humidity}%</p>
              <WeatherConditions>
                Condições: {weatherData?.weather[0].description}
                <WeatherImage
                  src={`http://openweathermap.org/img/wn/${weatherData?.weather[0].icon}.png`}
                  alt={weatherData?.weather[0].description}
                />
              </WeatherConditions>
              <p>Velocidade do Vento: {weatherData?.wind.speed} km/h</p>
            </>
          ) : (
            <p>Aguardando dados do clima...</p>
          )}
        </WeatherInfoContainer>
      </Card>
    </ClimateContainer>
  );
}
