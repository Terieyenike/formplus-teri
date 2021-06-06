import { Field } from './Navbar.style';

export const Category = () => {
  return (
    <>
      <Field>
        <fieldset>
          <legend htmlFor="category">Category</legend>
          <select id="category">
            <option value="All">All</option>
            <option value="E-commerce">
              E-commerce
            </option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
          </select>
        </fieldset>
      </Field>
    </>
  );
};
