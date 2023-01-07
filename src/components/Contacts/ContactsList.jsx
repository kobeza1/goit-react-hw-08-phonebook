import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';
import { List, Item, Name } from './ContactsList.styled';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const contactsFiltered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {contactsFiltered.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <p>
              <Name>{name}</Name>
              {number}
            </p>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </Item>
        );
      })}
    </List>
  );
};
