import axios from "axios";

const APIKey = "97f3c5f19940d6df628ee91735c520e7";

export const fetchWeatherData = async (city: string) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}&lang=pt_br`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
