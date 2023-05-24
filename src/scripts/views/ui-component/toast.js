import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const ToastComponent = {
  // eslint-disable-next-line
  init({ toastStatus, toastMessage, toastGravity = 'top', toastPosition = 'right'}) {
    Toastify({
      close: true,
      text: toastMessage,
      gravity: toastGravity,
      position: toastPosition,
      duration: 5000,
      ariaLive: 'polite',
      className: toastStatus,
    }).showToast();
  },
};

export default ToastComponent;
