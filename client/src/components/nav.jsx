import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

function NavBar(props) {
   const [modalShow, setModalShow] = useState(false);
   return (
      <>
         <Navbar bg='secondary'>
            <Button variant='dark mr-2' onClick={() => props.open()}>
               <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </Button>

            <MyVerticallyCenteredModal
               show={props.modal}
               onIDChange={(id) => {
                  props.onIDChange(id);
               }}
               onHide={() => props.close()}
            />
            <Navbar.Brand>Shopping List</Navbar.Brand>
         </Navbar>
      </>
   );
}

function MyVerticallyCenteredModal(props) {
   return (
      <Modal
         text='white'
         {...props}
         size='sm'
         aria-labelledby='contained-modal-title-vcenter'
         centered
      >
         <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title-vcenter'>
               User ID
            </Modal.Title>
         </Modal.Header>
         <Modal.Body bg='dark'>
            <h6>
               Change this ID so that you can request different data from the
               server. E.G. Change it to you're freinds Jhons ID to use and
               change his
            </h6>
         </Modal.Body>
         <input
            type='text'
            name=''
            id=''
            className='m-4'
            onChange={(e) => {
               props.onIDChange(e.target.value);
            }}
         />
         <Modal.Footer>
            <Button
               onClick={() => {
                  props.onHide();
               }}
            >
               Close
            </Button>
         </Modal.Footer>
      </Modal>
   );
}

export default NavBar;
