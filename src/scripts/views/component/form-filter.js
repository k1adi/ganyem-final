import FormFilterResto from '../../utils/form-filter-resto';

class FormFilter extends HTMLElement {
  connectedCallback() {
    this.placeholder = this.getAttribute('data-placeholder');
    this.page = this.getAttribute('data-page');
    this.render();
  }

  render() {
    this.innerHTML = `
      <form class="form--filter-wrapper">
        <input type="search" name="resto-name" class="form--filter__input" placeholder="${this.placeholder}">
        <input type="submit" class="form--filter__button" value="Search">
      </form>
    `;

    const formWrapper = this.querySelector('.form--filter-wrapper');
    FormFilterResto.init({
      formFilter: formWrapper,
      formPage: this.page,
    });
  }
}

customElements.define('form-filter', FormFilter);
