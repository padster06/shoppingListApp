import NavBar from './nav.jsx';
import Item from './item.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import UserToast from './userToast.jsx';
import { Button, ButtonGroup } from 'react-bootstrap';
import AlertModal from './idAlert.jsx';
import {
   faUpload,
   faDownload,
   faCartPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
   let newUser;
   const [items, setItems] = useState([{ name: '', count: 0, id: 1 }]);
   const [modal, setModal] = useState(false);
   const [IDModal, setIDModal] = useState(false);
   const [id, setID] = useState(null);
   const [showToast, setShowToast] = useState(false);

   function dell(id) {
      const tempItems = items.filter((c) => c.id !== id);
      setItems(tempItems);
   }

   async function getItems() {
      const res = await fetch(`/api/${id}`, { method: 'GET', mode: 'cors' });
      console.log(res);
      const data = await res.json();
      console.log(data);
      // newUser = data.newUser;
      // setShowToast(true);
      setItems(data.items);
   }

   async function postItems() {
      const body = {
         items: items,
         id: id,
      };
      const options = {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(body),
      };

      fetch(`/api/${id}`, options);
      console.log(options);
   }

   function generateID() {
      let ret = '_' + Math.random().toString(36).substr(2, 9);
      setID(ret);
      console.log(id);
   }

   function handleInc(item) {
      const tempItems = [...items];
      tempItems[tempItems.indexOf(item)].count++;
      setItems(tempItems);
   }

   function handleDec(item) {
      const tempItems = [...items];
      tempItems[tempItems.indexOf(item)].count--;
      setItems(tempItems);
   }

   function handleNameChange(item, name) {
      const tempItems = [...items];
      tempItems[tempItems.indexOf(item)].name = name;
      setItems(tempItems);
   }

   function onIDChange(localId) {
      setID(localId);
   }

   function addItem() {
      const itemsTemp = [
         ...items,
         {
            name: '',
            count: 0,
            id: items.length + 1,
         },
      ];
      setItems(itemsTemp);
      console.log(items);
   }

   return (
      <>
         <AlertModal
            show={modal}
            onHide={() => setModal(false)}
            setID={() => {
               setIDModal(true);
            }}
            generateID={() => generateID()}
         />
         <UserToast
            content='server created new user with id of ...'
            close={() => setShowToast(false)}
            newUser={newUser}
            show={showToast}
         />
         <NavBar
            onIDChange={(id) => onIDChange(id)}
            modal={IDModal}
            close={() => setIDModal(false)}
            open={() => setIDModal(true)}
         ></NavBar>
         <div className='items'>
            {items.map((currItem) => (
               <Item
                  key={currItem.id}
                  obj={currItem}
                  delete={() => {
                     dell(currItem.id);
                  }}
                  onInc={() => {
                     handleInc(currItem);
                  }}
                  onDec={() => {
                     handleDec(currItem);
                  }}
                  onNameChange={(name) => {
                     handleNameChange(currItem, name);
                  }}
               />
            ))}
         </div>
         <ButtonGroup className='ml-3'>
            <Button
               size='lg'
               onClick={() => {
                  if (id == null) {
                     setModal(true);
                     console.log(id);
                  } else {
                     postItems();
                  }
               }}
            >
               <FontAwesomeIcon icon={faUpload} />
            </Button>
            <Button
               size='lg'
               onClick={() => {
                  if (id == null) {
                     setModal(true);
                     console.log(id);
                  } else {
                     getItems();
                  }
               }}
               className='btn btn-lg btn-primary'
            >
               <FontAwesomeIcon icon={faDownload} />
            </Button>
            <Button
               size='lg'
               onClick={() => {
                  addItem();
               }}
               className='btn btn-lg btn-primary'
            >
               <FontAwesomeIcon icon={faCartPlus} />
            </Button>
         </ButtonGroup>
      </>
   );
}

export default App;
