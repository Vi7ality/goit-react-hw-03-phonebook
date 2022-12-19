import { Contacts } from 'components/Contacts/Contacts';
import { Input } from 'components/Input/Input';
import { Component } from 'react';
import { Filter } from 'components/Filter/Filter';

export class Phonebook extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

      {
      return {contacts: [data, ...prevState.contacts]}
    this.setState({
      filter: event.currentTarget.value,
    })

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  }

    deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  formHandlerSubmit = data => {
    console.log(data);
    this.setState(prevState => {
      return { contacts: [data, ...prevState.contacts] };
    });
  };


  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <Input formHandlerSubmit={this.formHandlerSubmit}></Input>
        <Filter onChange={this.filterChange} value={this.state.filter}></Filter>
        <Contacts contacts={visibleContacts} onClick={this.deleteContact}></Contacts>
      </div>
    );
  }
}
