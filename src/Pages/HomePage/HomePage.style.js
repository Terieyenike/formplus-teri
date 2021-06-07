import styled from 'styled-components'

export const Section = styled.section`
  padding: 1em 0;

`

export const Grid = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4.4em 3.2em
  }
`;

export const Bg = styled.div`
  background: #fff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  height: 14.3em;
  padding: 1em 1.5em 2em;
  margin-top: 1.5em;
  display: flex;
  flex-direction: column;
`;
export const H1 = styled.h1`
  font-size: 1.5rem;
`;

export const P = styled.p`
  margin-top: 1.1em;
`
