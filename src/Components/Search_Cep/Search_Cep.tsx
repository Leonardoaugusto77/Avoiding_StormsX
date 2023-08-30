import { useState } from "react";
import {
  Card,
  Title_Cep,
  SearchCep_Container,
  Search_input,
  Button,
  ModalContainer,
  ModalContent,
  CloseButton,
} from "../../Styles/Search_Cep_Styles/Search_Cep_styles";

import ResponseCEP, { ResponseCEPProps } from "./ResponseCEP";

interface SearchCepProps {
  RequestCEP: (cep: string) => Promise<ResponseCEPProps>;
}

export default function SearchCep({ RequestCEP }: SearchCepProps) {
  const [showModal, setShowModal] = useState(false);
  const [cep, setCep] = useState("");
  const [cepData, setCepData] = useState<ResponseCEPProps | null>(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSearch = async () => {
    if (cep === "") {
      return window.alert("Valor digitado incorretamente!");
    }

    try {
      const data = await RequestCEP(cep);
      setCepData(data);
      toggleModal();
    } catch (error) {
      console.error("Erro ao buscar informações de CEP:", error);
    }
  };

  return (
    <div>
      <Card mobileWidth="350px">
        <Title_Cep>Get location information:</Title_Cep>
        <SearchCep_Container>
          <Search_input
            type="text"
            placeholder="Search your zip code here!"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
          <Button onClick={handleSearch}>Search</Button>
        </SearchCep_Container>
      </Card>
      {showModal && (
        <ModalContainer>
          <ModalContent>
            <CloseButton onClick={toggleModal}>X</CloseButton>
            {cepData && <ResponseCEP locationData={cepData} />}
          </ModalContent>
        </ModalContainer>
      )}
    </div>
  );
}
