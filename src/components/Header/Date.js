import { Field } from './Navbar.style';

export const Date = () => {
  return (
    <>
      <Field>
        <fieldset>
          <legend htmlFor="date">Date</legend>
          <select id="date">
            <option value="Default">Default</option>
          </select>
        </fieldset>
      </Field>
    </>
  );
};
