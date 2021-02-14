import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AuthApiService from '../services/auth-api-service';
import "./Login.css";

function Login() {
  const [loginError, setLoginError] = useState(null);
  const [formData, setFormData] = useState({
    user_name: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const allFormValuesPresent = () => {
    const areEmptyInputs = Object.values(formData).some(
      (value) => value.trim().length === 0
    );
    return areEmptyInputs;
  };

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginError(null);
    const { user_name, password } = e.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
    .then(response => {
      user_name.value = '';
      password.value = '';
      history.push('/summary');
    })
    .catch(response => {
      setLoginError({ loginError: response.error })
    })
  }
 

  return (
    <>
      {loginError && <p style={{color: "red"}}>{loginError}</p>}
      <header>
        <h1>Login</h1>
      </header>
      <section className='login'>
        <form
          action='#'
          className='login__form'
          onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor='user_name'>User Name:</label>
          <input
            type='text'
            id='user_name'
            name='user_name'
            value={formData.user_name}
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

          <div className='login__buttons'>
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

export default Login;
