import { Searchbar } from './Searchbar';
import { Div } from './Navbar.style';
import Container from '../Container';

export const Navbar = () => {
  return (
    <>
      <Container>
        <Div>
          <Searchbar />
        </Div>
      </Container>
    </>
  );
};
