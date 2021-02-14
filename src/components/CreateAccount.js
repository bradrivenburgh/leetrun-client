import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./CreateAccount.css";

function CreateAccount() {
  const [formData, setFormData] = useState({
    user_name: "",
    first: "",
    last: "",
    password: "",
    verify_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/");
  };

  const allFormValuesPresent = () => {
    const areEmptyInputs = Object.values(formData).some(
      (value) => value.trim().length === 0
    );
    return areEmptyInputs;
  };

  return (
    <>
      <header>
        <h1>Create an account</h1>
      </header>
      <section className='create-account'>
        <form
          action='#'
          className='create-account__form'
          onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor='user_name'>User Name:</label>
          <input
            type='text'
            id='user_name'
            name='user_name'
            value={formData.user_name}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor='first'>First Name:</label>
          <input
            type='text'
            id='first'
            name='first'
            value={formData.first}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor='last'>Last Name:</label>
          <input
            type='text'
            id='last'
            name='last'
            value={formData.last}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor='verify_password'>Repeat Password:</label>
          <input
            type='password'
            id='verify_password'
            name='verify_password'
            value={formData.verify_password}
            onChange={(e) => handleChange(e)}
          />

          <div className='create-account__buttons'>
            <button type='button' onClick={() => history.goBack()}>
              Cancel
            </button>
            <button
              disabled={allFormValuesPresent()}
              aria-disabled={allFormValuesPresent()}>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default CreateAccount;
