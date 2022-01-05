import PropTypes from "prop-types";
import { ContactItemStyled, Number, DeleteBtn } from "./ContatctItem.styled";

function ContactItem({ name, number, id, onDeleteContact }) {
  return (
    <ContactItemStyled>
      {name}: <Number>{number}</Number>
      <DeleteBtn
        onClick={() => {
          onDeleteContact(id);
        }}
        type="button"
      >
        Delete
      </DeleteBtn>
    </ContactItemStyled>
  );
}
export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
