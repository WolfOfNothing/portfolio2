import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import Fb from "./images/fb.svg";
import Aion from "./images/AION Logo.svg";
import Insta from "./images/Insta.svg";
import Cv from "./images/CV.svg";

export default function App() {
  return (
    <Wrapper>
      <Spline
        className="spline"
        scene="https://prod.spline.design/PxddF0A4-y0hMUdU/scene.splinecode"
      />
      <Content>
        <h1>Welcome to my portfolio</h1>
        <p> To know more about me, click on my links </p>
        <a links href="https://www.facebook.com/aioncollective">
          <img src={Fb} alt="Fb" />
        </a>
        <a links href="https://www.aioncollective.com/">
          <img src={Aion} alt="Aion" />
        </a>
        <a links href="https://www.instagram.com/frack_sound/">
          <img src={Insta} alt="Insta" />
        </a>
        <a
          links
          href="https://docs.google.com/document/d/1ygrB1ALNTZQhlMvZFObICelQPOO3QhOHjaCwipBtKek/edit?usp=sharing"
        >
          <img src={Cv} alt="Cv" />
        </a>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Spline Sans Mono", sans-serif;
  font-size: 16px;
  margin: 0 auto;
  color: white;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;

  .spline {
    position: absolute;
    margin: 0;
    right: 0;
    top: 0;
    @media (max-width: 1920px){
      transform: scale(1) translateX(-550px) translateY(0px)
  
    }
    @media (max-width: 1400px){
      transform: scale(1) translateX(50px) translateY(-200px)
  
    }

    @media (max-width: 1024px){
      transform: scale(0.8) translateX(-220px) translateY(200px)
    }
    @media (max-width: 800px){
      transform: scale(0.7) translateX(600px)
    }
    @media (max-width: 600px){
      transform: scale(0.5) translateX(-500px)
      right: auto;
      left: 50%;
      margin-left: -600px;
    }
    @media (max-width: 375px){
      transform: scale(0.2) translateX(-850px)
    }
    @media (max-width: 320px){
      transform: scale(0.4) translateX(-1300px) translateY(-200px)
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  h1 {
    font-weight: bold;
    font-size: 70px;
    margin: 0px;
    @media (max-width: 320px){
      transform: scale(0.4)  translateY(-200px)
    }
  }
  }
  p{
    
  }
  a {
    background-color: ;
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 20px;
    border: 1px solid rgba (255,255,255,0.1)
   
    
    
    
  
  
  
  :hover{
    border: 6px solid ;
    border-radius: 20px;
    
    transform: translate3d(1px,1px,1px);


  }
  
  }}
`;
