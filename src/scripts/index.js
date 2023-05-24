import 'regenerator-runtime';
import '../styles/main.scss';

import App from './views/app';
import swRegister from './utils/sw-register';

// Components
import './views/component/app-navbar';
import './views/component/app-footer';

import ToastComponent from './views/ui-component/toast';

const app = new App({
  appBody: document.querySelector('body'),
  skipButton: document.querySelector('#skip-to-content'),
  themeButton: document.querySelector('.toggle-theme'),
  navToggle: document.querySelector('.nav__toggle'),
  navToggleBtn: document.querySelector('.nav__toggle-btn'),
  navToggleLabel: document.querySelector('#toggleLabel'),
  navList: document.querySelector('.nav__list'),
  mainContent: document.querySelector('.app__content'),
});

window.addEventListener('hashchange', async () => {
  await app.renderPage();
});

window.addEventListener('DOMContentLoaded', async () => {
  await app.renderPage();
  await swRegister();
});

window.addEventListener('offline', () => {
  ToastComponent.init({
    toastStatus: 'toastify--muted',
    toastMessage: 'You\'re offline. Check your connection.',
    toastGravity: 'bottom',
    toastPosition: 'center',
  });
});

window.addEventListener('online', () => {
  ToastComponent.init({
    toastStatus: 'toastify--success',
    toastMessage: 'Yeay you\'re online.',
    toastGravity: 'bottom',
    toastPosition: 'center',
  });
});
