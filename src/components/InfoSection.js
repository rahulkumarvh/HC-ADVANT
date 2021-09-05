import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import consult from "../images/consult.jpg";
import emerging_market from "../images/emerging-market.jpg";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;
const Container = styled.div`
  padding: 3rem calc(100vw - 1300) / 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  } ;
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: 1;

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
  @media screen and (max-width: 768px) {
    order: 2;
  }
`;
const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const ColumnLeftR = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: 2;

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
`;
const ColumnRightR = styled.div`
  padding: 1rem 2rem;
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
}) => {
  return (
    <>
      <Section>
        <Container className="pl-10 pr-10">
          <ColumnLeft>
            <h1 className="text-3xl font-semibold">Real Estate</h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              We provide best choices with the right prices to get lands,
              <br></br>
              buy properties and provide rent services for our very esteemed{" "}
              <br></br>
              clients at very good prices. We also do building projects,
              <br></br>
              renovations and repairs and construction.
            </p>
            <Button className="mt-10" to="/real-estate" primary="true">
              View Real Estate
            </Button>
          </ColumnLeft>
          <ColumnRight reverse={reverse}>
            <img src={image} alt="home" />
          </ColumnRight>
        </Container>
      </Section>

      <Section>
        <Container className="pl-10 pr-10">
          <ColumnLeftR>
            <h1 className="text-3xl font-semibold">HR Consultancy</h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              {" "}
              Our services are second to none , as we engage our clients{" "}
              <br></br>
              with end to end processing of all HR needs ranging from
              recruitment,<br></br>
              training and development, and all other HR services.{" "}
            </p>
            <Button className="mt-10" to="/hr-consultancy" primary="true">
              HR Consultancy
            </Button>
          </ColumnLeftR>
          <ColumnRightR reverse={reverse}>
            <img src={consult} alt="home" />
          </ColumnRightR>
        </Container>
      </Section>

      <Section>
        <Container className="pl-10 pr-10">
          <ColumnLeft>
            <h1 className="text-3xl font-semibold">Emerging Markets</h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              We partner with the international companies and local ones alike
              <br></br>
              into providing very viable soft landing business services that is
              <br></br>
              all weathered and bound to succeed; especially in the areas of new
              <br></br>
              businesses and frontiers. From international companies wanting to
              <br></br>
              do business right, we can come as your local and your trusted
              <br></br>
              partner while smoothening your access to the markets whether new
              <br></br>
              or old.
            </p>
            <Button className="mt-10" to="/emerging-markets" primary="true">
              View Emerging Markets
            </Button>
          </ColumnLeft>
          <ColumnRight reverse={reverse}>
            <img src={emerging_market} alt="home" />
          </ColumnRight>
        </Container>
      </Section>
    </>
  );
};

export default InfoSection;
