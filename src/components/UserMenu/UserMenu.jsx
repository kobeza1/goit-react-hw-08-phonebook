import css from './UserMenu.module.css';

export const UserMenu = () => {
  return (
    <div className={css.user__menu}>
      <p className={css.user__name}>mango@mail.com</p>
      <button>Logout</button>
    </div>
  );
};
