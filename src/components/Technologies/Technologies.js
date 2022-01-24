import React from 'react';
import { DiBootstrap, DiCss3, DiDjango, DiGit, DiHtml5, DiJavascript, DiMaterializecss, DiMongodb, DiNodejs, DiPostgresql, DiPython, DiReact, DiVisualstudio } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Front-End
          </ListTitle>
          <ListParagraph>
            <DiReact size="3rem" /> React.js <br />
            <DiHtml5 size="3rem" /> HTML5 <br />
            <DiCss3 size="3rem" /> CSS3 <br />
            <DiJavascript size="3rem" /> JavaScript <br />
            <DiBootstrap size="3rem" /> Bootstrap <br />
            <DiMaterializecss size="3rem" /> Materialize
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            <DiNodejs size="3rem" /> Node.js <br />
            <DiPython size="3rem" /> Python <br />
            <DiDjango size="3rem" /> Django <br />
            <DiPostgresql size="3rem" /> PostgreSQL <br />
            <DiMongodb size="3rem" /> MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>IDE and SCM</ListTitle>
          <ListParagraph>
          <DiVisualstudio size="3rem" /> VSCode <br />
          <DiGit size="3rem" />Git
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
