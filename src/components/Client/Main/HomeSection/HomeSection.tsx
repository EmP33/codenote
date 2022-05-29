import styled from "styled-components";
import DraftElement from "../../../elements/DraftElement/DraftElement";
import Notes from "./HomeNotes/Notes";
import Tasks from "./HomeTasks/Tasks";

const HomeWrapper = styled.div`
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, max-content);
  grid-row-gap: 3rem;
  grid-column-gap: 1rem;

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

const HomeSection: React.FC = () => {
  return (
    <HomeWrapper>
      <Notes />
      <Tasks />
      <DraftElement />
    </HomeWrapper>
  );
};

export default HomeSection;
