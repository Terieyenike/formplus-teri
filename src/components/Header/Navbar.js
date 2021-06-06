import { Searchbar } from './Searchbar';
import { Div, DivRight } from './Navbar.style';
import {Category} from '../Header/Category'
import {Order} from '../Header/Order'
import {Date} from '../Header/Date'

export const Navbar = ({handleChange}) => {
  return (
    <>
        <Div>
          <Searchbar search={handleChange} />
          <DivRight>
            <p>Sort By:</p>
            <Category/>
            <Order />
            <Date />
          </DivRight>
        </Div>
    </>
  );
};
