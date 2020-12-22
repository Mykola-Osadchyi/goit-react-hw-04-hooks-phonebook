import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, removeContact }) => (
  <ul className={s.list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={s.item}>
        <p>{name}</p>
        <p>{number}</p>
        <button type="button" onClick={() => removeContact(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  removeContact: PropTypes.func.isRequired,
};

export default ContactList;
