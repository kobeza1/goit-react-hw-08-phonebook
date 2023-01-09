import { Section } from 'components/Section/Section';
import css from './Login.module.css';

const Login = () => {
  return (
    <>
      <Section title="Login">
        <form className={css.form} autoComplete="off">
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
