import React from "react";
import './CreateAccount.css';

function CreateAccount() {
  return (
    <>
      <header>
        <h1>Create an account</h1>
      </header>
      <section className="create-account">
        <form action='#' className='create-account__form'>
          <label for='first-name'>First Name:</label>
          <input type='text' id='first-name' name='first-name' />

          <label for='last-name'>Last Name:</label>
          <input type='text' id='last-name' name='last-name' />

          <label for='email'>Email:</label>
          <input type='email' id='email' name='email' />

          <label for='password'>Password:</label>
          <input type='password' id='password' name='password' />

          <label for='verify-password'>Repeat Password:</label>
          <input type='password' id='verify-password' name='verify-password' />

          <div className='create-account__buttons'>
            <button>Cancel</button>
            <button>Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default CreateAccount;