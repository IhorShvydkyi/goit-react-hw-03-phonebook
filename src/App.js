import { Component } from "react";
import { Container } from "./App.styled";
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/Contacts/ContactList";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  onSubmitContactForm = (data) => {
    if (this.state.contacts.find((contact) => contact.name === data.name)) {
      alert(`${data.name} is already in contacts.`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [data, ...contacts],
      }));
    }
  };

  handleContactsFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const filterNormalize = filter.toLowerCase();
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filterNormalize);
    });
  };

  onDeleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => {
        return contact.id !== contactId;
      }),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmit={this.onSubmitContactForm} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleContactsFilter} value={filter} />
        {visibleContacts.length === 0 && filter.length > 0 ? (
          <p>No results for your search</p>
        ) : (
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.onDeleteContact}
          />
        )}
      </Container>
    );
  }
}

export default App;
