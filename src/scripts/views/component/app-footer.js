class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <p>Made with <span class="visually-hidden hide-text">love</span> <i class="fa-heart footer__icon"></i> by Rizki Adi</p>
      <small>Final Submission Dicoding <a href="https://www.dicoding.com/academies/219" class="footer__link">Front-End Expert</a> </small>
    `;
  }
}

customElements.define('app-footer', AppFooter);
