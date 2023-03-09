import * as WorkBoxWindow from 'workbox-window';
import ToastComponent from '../views/ui-component/toast';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.error('Service Worker not supported in the browser');
    return;
  }

  if (!navigator.onLine) {
    ToastComponent.init({
      toastStatus: 'toastify--muted',
      toastMessage: 'You\'re offline. Check your connection.',
      toastGravity: 'bottom',
      toastPosition: 'center',
    });
  }

  const wb = new WorkBoxWindow.Workbox('./sw.js');

  try {
    await wb.register();
    navigator.serviceWorker.register('./sw.js');
    console.log('Service Worker registered');
  } catch (error) {
    console.error('Failed to register service workder', error);
  }
};

export default swRegister;
