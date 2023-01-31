import FormFilterResto from '../../utils/form-filter-resto';

class FormFilter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <form class="form--filter-wrapper">
        <input type="search" name="resto-name" class="form--filter__input" placeholder="Filter by Name, Category or Menu...">
        <input type="submit" class="form--filter__button" value="Search">
      </form>
    `;

    const formWrapper = this.querySelector('.form--filter-wrapper');
    FormFilterResto.init({
      formFilter: formWrapper,
    });
  }
}

customElements.define('form-filter', FormFilter);
