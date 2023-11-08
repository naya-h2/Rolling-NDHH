import Button from "./Button.jsx";
import styled from "styled-components";
import { FONT18B } from "../styles/FontStyles.js";

function FixedButton({ children }) {
  return (
    <Container>
      <Button type="primary" height="xl">
        <ButtonText>{children}</ButtonText>
      </Button>
    </Container>
  );
}

export default FixedButton;

const ButtonText = styled.p`
  width: 23.2rem;
  ${FONT18B};

  @media (max-width: 1199px) {
    width: calc(100vw - 9.6rem);
  }
`;

const Container = styled.div`
  @media (max-width: 1199px) {
    position: fixed;
    bottom: 2.4rem;
    left: 2.4rem;
  }
`;
