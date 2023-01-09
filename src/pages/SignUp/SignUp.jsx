import { Section } from 'components/Section/Section';
import css from './SignUp.module.css';

const SignUp = () => {
  return (
    <Section title="Sign Up">
      <form className={css.form} autoComplete="off">
        <label className={css.form__label}>
          Username
          <input className={css.form__input} type="text" name="name" />
        </label>
        <label className={css.form__label}>
          Email
          <input className={css.form__input} type="email" name="email" />
        </label>
        <label className={css.form__label}>
          Password
          <input className={css.form__input} type="password" name="password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </Section>
  );
};

export default SignUp;
