import { useState, useEffect } from "react";
import {
  Wrapper,
  Header_Wrapper,
  Header_Infos,
  Wrapper_Section_Purpose,
  Title,
  Title_lv2,
  Text,
  Registration_Button,
  Services_Container,
  Character_Img,
} from "./Styles/Home_Styles/Home_Styles.tsx";
import Character from "../public/Imgs/frame.png";
import SearchCep from "./Components/Search_Cep/Search_Cep.tsx";
import { fetchCEP } from "./Services/CEP_API.tsx";

export default function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);
  let showTimer: NodeJS.Timeout | undefined = undefined;
  let hideTimer: NodeJS.Timeout | undefined = undefined;

  useEffect(() => {
    showTimer = setTimeout(() => {
      setIsVisible(true);

      hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 6000);
    }, 5000);

    return () => {
      if (showTimer) clearTimeout(showTimer);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, []);

  const handleAnimationEnd = () => {
    if (!isVisible) {
      setAnimationComplete(true);
    }
  };

  return (
    <Wrapper>
      <Header_Wrapper>
        <Header_Infos>
          <Title>Register your email to receive storm forecasts</Title>
          <Registration_Button>
            Receive the news by your email
          </Registration_Button>
        </Header_Infos>
      </Header_Wrapper>

      <Wrapper_Section_Purpose>
        <Title_lv2>Purpose of the page</Title_lv2>
        <br />
        <Text>
          We created this page with the focus on gathering climate and zip code
          queries in the same place, so that you can stay on top of the places
          where the worst storms occur, avoiding them on your trip
        </Text>
      </Wrapper_Section_Purpose>

      <br></br>
      <Services_Container>
        <SearchCep RequestCEP={fetchCEP} />
      </Services_Container>

      <Character_Img
        src={Character}
        isVisible={isVisible}
        animationDuration="6s"
        onAnimationEnd={handleAnimationEnd}
        cursorPointer={true}
      />
    </Wrapper>
  );
}
