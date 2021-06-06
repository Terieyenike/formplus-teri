import styled from 'styled-components';

export const Div = styled.div`
  padding: 1.5em 0 0;

  input {
    width: 100%;
    background: url('https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png');
    background-repeat: no-repeat;
    background-position: right;
    background-origin: content-box;
    background-size: 25px 26px;
    appearance: none;
    border: 1px solid #bdbdbd;
    color: #fdfffc;
    padding: 1.3em;
    border-radius: 2px;
    font-size: 0.875rem;
    font-weight: 400;
  }
`;

export const DivRight = styled.div`
  margin-top: 1.5em;
  p {
    font-size: 0.875rem;
    margin-bottom: 1em;
  }
`;
// Category
export const Field = styled.div`
  fieldset {
    border: 0.5px solid #c4c4c4;
    border-radius: 2px;
    margin-bottom: 2em;
  }

  legend {
    font-size: 0.625rem;
  }

  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    background: url('https://www.pngrepo.com/png/155474/512/down-arrow.png');
    background-repeat: no-repeat;
    background-size: 16px 17px;
    background-position: right;
    background-origin: content-box;
    width: 100%;
    padding: 0.75em;
    border-radius: 2px;
    color: #3f3f3f;
    background-color: #fff;
    border: unset;
  }
`;
