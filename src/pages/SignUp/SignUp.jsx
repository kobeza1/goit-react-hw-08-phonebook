import { Section } from 'components/Section/Section';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/operations';
import css from './SignUp.module.css';

const SignUp = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      signUp({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Section title="Sign Up">
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
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
