import React from "react";
import './Login.css';

function Login() {
  return (
    <>
      <header>
        <h1>Login</h1>
      </header>
      <section className="login">
        <form action='#' className='login__form'>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' name='email' />

          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' name='password' />

          <div className='login__buttons'>
            <button>Cancel</button>
            <button>Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;