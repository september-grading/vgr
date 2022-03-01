import './Loginform.css';
import React from 'react';
import useForm from '../../hooks/useForm';
import { Link } from 'react-router-dom';

export default function LoginForm({
  className = '',
  onSubmit,
  label = 'Authenticate',
}) {
  const { formState, formError, handleFormChange, setFormError } = useForm({

    email: '',

    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formState;

    try {
      setFormError('');
      if (!email || password.length < 8)
        throw new Error('email & Password has to be 8+ characters');
      await onSubmit(email, password);

    } catch (error) {
      setFormError(error.message);
    }
  };

  return (
    <>
      <form className={className} onSubmit={handleSubmit}>
        <legend>{label}</legend>
        <section>
          <label htmlFor="email">email: </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formState.email}
            onChange={handleFormChange}
          />
        </section>
        <section>

          <label htmlFor="password">Password: </label>
          <input
            id="password"
            type="password"
            name="password"
            value={formState.password}
            onChange={handleFormChange}
          />
        </section>
        <button className="formbutton">Sign In</button>
        {formError && <p>{formError}</p>}
      </form>
      <Link to="/">Back to Home</Link>
      <hr></hr>
    </>
  );
}
