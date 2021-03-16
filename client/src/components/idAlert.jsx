import { Modal, Button, Alert } from 'react-bootstrap';

function AlertModal(props) {
   return (
      <Modal
         {...props}
         size='sm'
         bg='dark'
         aria-labelledby='contained-modal-title-vcenter'
         centered
      >
         <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title-vcenter'>NO ID</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Alert variant='danger'>
               <h6>
                  You do not have an ID set. Set one or generate a random one to
                  use this feature.
               </h6>
            </Alert>
         </Modal.Body>
         <Modal.Footer>
            <Button
               variant='danger'
               onClick={() => {
                  props.onHide();
               }}
            >
               Close
            </Button>
            <Button
               variant='outline-warning'
               onClick={() => {
                  props.generateID();
                  props.onHide();
               }}
            >
               Generate
            </Button>
            <Button
               variant='outline-warning'
               onClick={() => {
                  props.setID();
                  props.onHide();
               }}
            >
               Add
            </Button>
         </Modal.Footer>
      </Modal>
   );
}

export default AlertModal;
