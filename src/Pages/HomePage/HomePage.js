import { Section, Grid, Bg, H1, P } from './HomePage.style';
export const HomePage = ({ filteredTemplates }) => {
  return (
    <>
      <Section>

          <Grid>
          {filteredTemplates.map((template, id) => (
            <Bg key={id}>
              <H1>
                {template.description}
              </H1>
              <P>{template.name}</P>
            </Bg>
          ))}
          </Grid>
      </Section>
    </>
  );
};
