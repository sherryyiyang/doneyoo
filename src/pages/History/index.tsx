import React from "react";
import styled from "styled-components";
import FinishedTasksList from "../../components/History/FinishedTasksList";
import BadgeWall from "../../components/History/BadgeWall";

const Container = styled.div`
  padding: 32px;
  max-width: 1400px;
  margin: 0 auto;
`;

const HistoryPage: React.FC = () => {
  return (
    <Container>
      <BadgeWall />
      <FinishedTasksList />
    </Container>
  );
};

export default HistoryPage;
