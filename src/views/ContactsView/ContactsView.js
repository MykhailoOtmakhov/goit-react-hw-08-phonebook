import { useState, useEffect } from 'react';
import React, { Component } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Container/Container';
import Contacts from '../../components/Contacts/Contacts';
import ContactForm from '../../components/ContactForm/ContactForm';
// import Filter from '../components/Filter/Filter.js';
// import IconButton from '../components/IconButton';
// import { ReactComponent as AddIcon } from '../icons/add.svg';
// import { contactsOperations, contactsSelectors } from '../redux/contacts';
import styles from './ContactsView.module.css'
import { CSSTransition } from 'react-transition-group'
import Header from '../../components/Header/Header.js';
import Filter from '../../components/Filter/Filter';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors'

// const ContactsView = (params) => {
//   const dispatch = useDispatch();
//   const isLoadingTodos = useSelector(todosSelectors.getLoading);

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const toggleModal = () => setIsModalOpen(state => !state);

//   useEffect(() => dispatch(todosOperations.fetchTodos()), [dispatch]);
class ContactsView extends Component {  

  componentDidMount(){
    this.props.fetchContact()
  }
  
  render() {
  return (
    <Container>
      <Header />
        <ContactForm />
        <CSSTransition 
          in={this.props.contacts.length>1}
          timeout={250}
          classNames="container"
          unmountOnExit>
            <Filter/>
        </CSSTransition>
        <CSSTransition 
          in={this.props.contacts.length>0}
          timeout={250}
          classNames="container"
          unmountOnExit>
            <Contacts />
        </CSSTransition>   
      {/* <div style={barStyles}>
        <Filter />
        <Stats />
        <IconButton onClick={toggleModal} aria-label="Добавить todo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>

        {isLoadingTodos && <h1>Загружаем...</h1>}
      </div>

      <TodoList />

      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <TodoEditor onSave={toggleModal} />
        </Modal>
      )} */}
    </Container>
  );
}
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
  isLoadingContacts: contactsSelectors.getLoading(state),
})

const mapDispatchToProps = dispatch => ({
  fetchContact: () => dispatch(contactsOperations.fetchContact())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView)