import { Toast } from 'react-bootstrap';

function UserToast(props) {
   return (
      <Toast
         onClose={() => props.close()}
         show={props.show}
         delay={3000}
         className='m-2 fixed-top'
         // autohide
      >
         <Toast.Header>
            <img src='cloud.png' className='rounded mr-2' alt='' />
            <strong className='mr-auto'>Server</strong>
            <small>Now</small>
         </Toast.Header>
         <Toast.Body>{props.content}</Toast.Body>
      </Toast>
   );
}

export default UserToast;
