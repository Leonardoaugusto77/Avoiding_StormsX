// ResponseCEP.tsx
import {
  Card,
  Title_Cep,
  Text,
} from "../../Styles/Search_Cep_Styles/Search_Cep_styles";

export interface ResponseCEPProps {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export default function ResponseCEP({
  locationData,
}: {
  locationData: ResponseCEPProps;
}): JSX.Element {
  return (
    <>
      <Card mobileWidth="285px">
        <Title_Cep>Location Information:</Title_Cep>
        <br></br>
        <Text>CEP: {locationData.cep}</Text>
        <br></br>
        <Text>Street: {locationData.logradouro}</Text>

        <br></br>
        <Text>Neighborhood: {locationData.bairro}</Text>
        <br></br>
        <Text>City: {locationData.localidade}</Text>
        <br></br>
        <Text>State: {locationData.uf}</Text>
      </Card>
    </>
  );
}
