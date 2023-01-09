import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <ul className={css.authnav__list}>
      <li className={css.authnav__item}>
        <NavLink className={css.authnav__link} to={'signup'}>
          Sign Up
        </NavLink>
      </li>
      <li className={css.authnav__item}>
        <NavLink className={css.authnav__link} to={'login'}>
          Login
        </NavLink>
      </li>
    </ul>
  );
};
