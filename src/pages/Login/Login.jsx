import { Section } from 'components/Section/Section';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Section title="Login">
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
          <label className={css.form__label}>
            Email
            <input className={css.form__input} type="email" name="email" />
          </label>
          <label className={css.form__label}>
            Password
            <input
              className={css.form__input}
              type="password"
              name="password"
            />
          </label>
          <button type="submit">Log In</button>
        </form>
      </Section>
    </>
  );
};

export default Login;
