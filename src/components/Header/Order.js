import { Field } from './Navbar.style';

export const Order = () => {
  return (
    <>
      <Field>
        <fieldset>
          <legend htmlFor="order">Order</legend>
          <select id="order">
            <option value="Default">Default</option>
          </select>
        </fieldset>
      </Field>
    </>
  );
};
