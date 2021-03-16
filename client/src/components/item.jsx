import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import itemSyle from '../css/itemStyle.css';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';

function Item(props) {
   const item = {
      name: props.obj.name,
      count: props.obj.count,
   };

   const itemCopy = Object.assign({}, item);

   return (
      <div className='m-2'>
         <button
            onClick={() => {
               props.onInc(props.obj);
            }}
            className='btn btn-outline-success '
         >
            <FontAwesomeIcon icon={faPlus} />
         </button>
         <span className='badge badge-primary m-1 p-1'>
            <h5>{item.count}</h5>
         </span>
         <button
            onClick={() => {
               if (item.count > 0) {
                  props.onDec(props.obj);
               }
            }}
            className='btn btn-outline-success mr-1'
         >
            <FontAwesomeIcon icon={faMinus} />
         </button>
         <input
            id='nameIn'
            placeholder='𝘐𝘵𝘦𝘮'
            onChange={(e) => {
               props.onNameChange(e.target.value);
            }}
            value={props.obj.name}
            type='text'
         />
         <button
            onClick={() => {
               props.delete();
            }}
            className='btn btn-outline-danger ml-1'
         >
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
         </button>
      </div>
   );
}

export default Item;
