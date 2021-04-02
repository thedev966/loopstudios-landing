import styled from "styled-components";
import Header from "./components/Header";
import heroImage from "./assets/image-hero.jpg";
import featureImage from "./assets/image-interactive.jpg";
import Creation from "./components/Creation";
import { useEffect, useState } from "react";
import creationsArr from "./creations";
import Footer from "./components/Footer";
import heroImageMobile from "./assets/mobile/image-hero.jpg";

function App() {
  const [creations, setCreations] = useState();

  useEffect(() => {
    // load creations
    setCreations(creationsArr);
  }, [creationsArr]);

  return (
    <div className="App">
      <HeroSection>
        <Overlay></Overlay>
        <HeroWrapper>
          <Header />
          <HeroTextContainer>
            <HeroText>
              <h3>Immersive experiences that deliver</h3>
            </HeroText>
          </HeroTextContainer>
        </HeroWrapper>
      </HeroSection>
      <Wrapper>
        <FeaturesSection>
          <FeatureImage src={featureImage} />
          <FeatureText>
            <h3>The leader in interactive vr</h3>
            <p>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning have transformed businesses through
              digital experiences that bind to their brand.
            </p>
          </FeatureText>
        </FeaturesSection>
        <CreationsSection>
          <CreationsHeader>
            <h3>Our creations</h3>
            <button>See all</button>
          </CreationsHeader>
          <CreationsBodyGrid>
            {creations &&
              creations.map((creation, key) => (
                <Creation
                  key={key}
                  text={creation.text}
                  image={creation.image}
                  largeImage={creation.largeImage}
                />
              ))}
          </CreationsBodyGrid>
        </CreationsSection>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;

const HeroSection = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background-image: ${`url(${heroImage})`};
  overflow: hidden;

  @media only screen and (max-width: 530px) {
    height: 100vh;
  }

  @media only screen and (max-width: 530px) {
    background-image: ${`url(${heroImageMobile})`};
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const HeroWrapper = styled.div`
  width: 85%;
  height: 100%;
  margin: auto;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
`;

const HeroTextContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  z-index: 2;
`;

const HeroText = styled.div`
  width: 50%;
  min-width: 500px;
  padding: 27px;
  border: 1px solid white;

  @media only screen and (max-width: 910px) {
    min-width: 430px;
  }

  @media only screen and (max-width: 530px) {
    width: 100%;
  }

  @media only screen and (max-width: 510px) {
    min-width: unset;
  }

  h3 {
    font-size: 3.1rem;
    font-weight: 300;
    text-transform: uppercase;
    color: var(--white);
    line-height: 53px;

    @media only screen and (max-width: 910px) {
      font-size: 2.5rem;
    }

    @media only screen and (max-width: 530px) {
      padding-right: 20px;
    }

    @media only screen and (max-width: 440px) {
      font-size: 2.2rem;
    }
  }
`;

const Wrapper = styled.div`
  width: 75%;
  margin: 20vh auto;

  @media only screen and (max-width: 675px) {
    width: 88%;
    margin: 10vh auto;
  }
`;

const FeaturesSection = styled.div`
  position: relative;
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  overflow: hidden;

  @media only screen and (max-width: 996px) {
    flex-direction: column;
  }
`;

const FeatureImage = styled.img`
  width: 50%;
  min-width: 600px;
  object: contain;

  @media only screen and (max-width: 1244px) {
    min-width: 500px;
  }

  @media only screen and (max-width: 996px) {
    width: 100%;
    max-height: 340px;
  }

  @media only screen and (max-width: 530px) {
    min-width: unset;
    width: 94%;
  }
`;

const FeatureText = styled.div`
  width: 55%;
  max-height: 280px;
  min-width: 500px;
  position: absolute;
  right: 5vw;
  bottom: 0;
  background-color: white;
  padding: 70px 0 0 70px;

  @media only screen and (max-width: 1244px) {
    padding: 50px 0 0 50px;
    right: 0;
  }

  @media only screen and (max-width: 1084px) {
    right: -8vw;
  }

  @media only screen and (max-width: 996px) {
    position: relative;
    right: 0;
    margin-top: 30px;
    padding: 0;
    width: 90%;
  }

  h3 {
    font-size: 2rem;
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 20px;
    color: var(--black);
    padding-right: 50px;

    @media only screen and (max-width: 996px) {
      padding-right: 0;
    }

    @media only screen and (max-width: 763px) {
      font-size: 1.8rem;
    }

    @media only screen and (max-width: 675px) {
      font-size: 1.6rem;
      text-align: center;
    }

    @media only screen and (max-width: 530px) {
      font-size: 1.5rem;
    }

    @media only screen and (max-width: 440px) {
      font-size: 1.3rem;
    }

    @media only screen and (max-width: 395px) {
      font-size: 1.3rem;
      padding: 0 28vw;
      line-height: 26px;
    }
  }

  p {
    font-size: 15px;
    font-weight: 400;
    color: var(--dark-gray);
    line-height: 22px;
    padding-right: 60px;

    @media only screen and (max-width: 996px) {
      padding-right: 0;
    }

    @media only screen and (max-width: 675px) {
      font-size: 14px;
      text-align: center;
      padding: 0 10px;
    }

    @media only screen and (max-width: 530px) {
      padding: 0 50px;
    }

    @media only screen and (max-width: 440px) {
      padding: 0 90px;
    }

    @media only screen and (max-width: 395px) {
      padding: 0 124px;
    }
  }
`;

const CreationsSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 17vh;

  @media only screen and (max-width: 1074px) {
    margin-top: 22vh;
  }

  @media only screen and (max-width: 675px) {
    padding-bottom: 20vh;
  }

  @media only screen and (max-width: 530px) {
    margin-top: 13vh;
    padding-bottom: 18vh;
  }
`;

const CreationsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 675px) {
    justify-content: center;
  }

  h3 {
    font-size: 2rem;
    font-weight: 300;
    text-transform: uppercase;
    color: var(--black);

    @media only screen and (max-width: 675px) {
      font-size: 1.6rem;
      text-align: center;
    }

    @media only screen and (max-width: 440px) {
      font-size: 1.4rem;
    }
  }

  button {
    min-width: 130px;
    padding: 10px;
    border: 1px solid var(--black);
    background: transparent;
    cursor: pointer;
    color: var(--black);
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 4px;
    transition: all 0.3s ease;

    @media only screen and (max-width: 675px) {
      position: absolute;
      bottom: 2vh;
      min-width: 150px;
    }

    @media only screen and (max-width: 530px) {
      bottom: 0;
    }

    :hover {
      background-color: var(--black);
      color: var(--white);
    }
  }
`;

const CreationsBodyGrid = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  row-gap: 24px;
  margin-top: 10vh;

  @media only screen and (max-width: 1074px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 782px) {
    grid-template-columns: 1fr;
  }
`;
