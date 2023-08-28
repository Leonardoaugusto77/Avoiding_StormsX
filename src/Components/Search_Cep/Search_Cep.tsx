import { Card } from "../../Styles/Home_Styles/Home_Styles";

export default function Search_Cep(props: { CEP_API: any }): JSX.Element {
  console.log(JSON.stringify(props.CEP_API));

  return (
    <>
      <Card />
    </>
  );
}
