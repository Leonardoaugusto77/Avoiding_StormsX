// ResponseCEP.tsx
import { Card } from "../../Styles/Search_Cep_Styles/Search_Cep_styles";

export interface ResponseCEPProps {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  // Outros campos, se houver
}

export default function ResponseCEP({
  locationData,
}: {
  locationData: ResponseCEPProps;
}): JSX.Element {
  return (
    <>
      <Card>
        <h2>Location Information:</h2>
        <br></br>
        <p>CEP: {locationData.cep}</p>
        <br></br>
        <p>Street: {locationData.logradouro}</p>

        <br></br>
        <p>Neighborhood: {locationData.bairro}</p>
        <br></br>
        <p>City: {locationData.localidade}</p>
        <br></br>
        <p>State: {locationData.uf}</p>
      </Card>
    </>
  );
}
