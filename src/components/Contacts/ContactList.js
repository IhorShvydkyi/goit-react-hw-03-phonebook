import ContactItem from "./ContatctItem";
import PropTypes from "prop-types";
import { ContactListStyled } from "./ContactList.styled";
function ContactList({ contacts, onDeleteContact }) {
  return (
    <ContactListStyled>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ContactListStyled>
  );
}

export default ContactList;

ContactList.propTypes = { contacts: PropTypes.array };
