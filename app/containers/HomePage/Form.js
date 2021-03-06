import styled from 'styled-components';

const Form = styled.form`

  fieldset {
    border: 0px;
    padding: 10px 0;
    display: inline-block;
    margin-right: 12px;
    span, label {
      margin-right: 12px;
    }
  }

  label {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 600;
  }

  select {
    margin-right: 12px;
  }

  input[type="submit"] {
    background: #94c6f1;
    color: #fff;
    border: 1px solid #eee;
    border-radius: 3px;
    box-shadow: 5px 5px 5px #eee;
    text-shadow: none;
    padding: 5px 15px;
    margin-bottom: 12px;
    margin-left: 2px;
    cursor: pointer;
    display: block;
    &:hover {
      background: #016ABC;
      border: 1px solid #eee;
    }
  }



`;

export default Form;
