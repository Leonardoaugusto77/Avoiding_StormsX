import { useState } from "react";
import {
  Card,
  Title_Cep,
  Search_input,
  IconContainer,
  ModalContainer,
  ModalContent,
  CloseButton,
  SearchCep_Container,
} from "../../Styles/Search_Cep_Styles/Search_Cep_styles";
import { BsArrowsFullscreen } from "react-icons/bs";
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
    try {
      const data = await RequestCEP(cep);

      // Se a solicitação for bem-sucedida, armazene os dados do CEP no estado
      setCepData(data);

      // Abra o modal para exibir os dados
      toggleModal();
    } catch (error) {
      console.error("Erro ao buscar informações de CEP:", error);
    }
  };

  return (
    <div>
      <Card>
        <IconContainer className="expand-icon">
          <BsArrowsFullscreen onClick={toggleModal} />
        </IconContainer>
        <Title_Cep>Get location information:</Title_Cep>
        <SearchCep_Container>
          <Search_input
            type="text"
            placeholder="Search your zip code here!"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
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
