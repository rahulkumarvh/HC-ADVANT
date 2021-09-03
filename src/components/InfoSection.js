import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

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
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
`;
const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
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
  order: ${({ reverse }) => (reverse ? "1" : "2")};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
`;
const ColumnRightR = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
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
        <Container>
          <ColumnLeft>
            <h1>House For Rent</h1>
            <p> {paragraphOne} </p>
            <p> {paragraphTwo} </p>
            <Button className="mt-5" to="/rent" primary="true">
              View Rent
            </Button>
          </ColumnLeft>
          <ColumnRight reverse={reverse}>
            <img src={image} alt="home" />
          </ColumnRight>
        </Container>
      </Section>

      <Section>
        <Container>
          <ColumnLeftR>
            <h1>House and Land For Sale</h1>
            <p> {paragraphOne} </p>
            <p> {paragraphTwo} </p>
            <Button className="mt-5" to="/sales" primary="true">
              View Sales
            </Button>
          </ColumnLeftR>
          <ColumnRightR reverse={reverse}>
            <img src={image} alt="home" />
          </ColumnRightR>
        </Container>
      </Section>

      <Section>
        <Container>
          <ColumnLeft>
            <h1>HR Consultancy</h1>
            <p> {paragraphOne} </p>
            <p> {paragraphTwo} </p>
            <Button className="mt-5" to="/hr-consultancy" primary="true">
              View HR Consultancy
            </Button>
          </ColumnLeft>
          <ColumnRight reverse={reverse}>
            <img src={image} alt="home" />
          </ColumnRight>
        </Container>
      </Section>
    </>
  );
};

export default InfoSection;
