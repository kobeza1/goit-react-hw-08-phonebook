import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/auth/operations';
import { selectContacts, selectFilter } from 'redux/selectors';
import css from './ContactsList.module.css';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const contactsFiltered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contacts__list}>
      {contactsFiltered.map(({ id, name, number }) => {
        return (
          <li className={css.contacts__item} key={id}>
            <p>
              <span className={css.contacts__name}>{name}</span>
              {number}
            </p>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
