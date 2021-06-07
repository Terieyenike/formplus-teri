import styled from 'styled-components';

import { Section, Grid, Bg, H1, P } from './HomePage.style';
export const HomePage = ({ filteredTemplates }) => {
  return (
    <>
      <Section>
        <Grid>
          {filteredTemplates.map((template, id) => (
            <Bg key={id}>
              <H1>{template.name}</H1>
              <P>{template.description}</P>
              <Button href={template.link} target="_blank" rel="noopener">
                Use Template
              </Button>
            </Bg>
          ))}
        </Grid>
      </Section>
    </>
  );
};

const Button = styled.a`
  /* display: inline-block; */
  color: #08bd37;
  background: #f9f9f9;
  /* padding: 1em; */
  width: 100%;
  height: 2.56em;
  align-self: flex-end;
  align-content: flex-end;
  margin-top: 2.56em;
`;
