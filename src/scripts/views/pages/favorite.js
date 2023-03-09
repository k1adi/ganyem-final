import '../component/app-banner';
import '../component/resto-wrapper';

import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Favorite = {
  async render() {
    return `
      <app-banner data-title="Favorite Restaurant's" data-title-align="text-center" class="banner banner--favorite"></app-banner>

      <section class="container--wrap container--padding-y"  id="mainContent">
        <resto-wrapper class="card-wrapper--resto margin-top-none"></resto-wrapper>
      </section>
    `;
  },

  async afterRender() {
    const mainContent = document.querySelector('#mainContent');
    const restoWrapper = document.querySelector('resto-wrapper');
    const restos = await FavoriteRestoIdb.getAllResto();

    if (restos.length) {
      restoWrapper.restoList = restos;
    } else {
      restoWrapper.renderError(`
        <p>There are no restaurant on your favorite lists.</p>
        <small>To add your favorite restaurant lists, visit any of the restaurant detail pages and click the heart icon.</small><br>
        <small>If you have > 3 favorite restaurants, form filter will display to search restaurants by name</small>
      `);
    }

    if (restos.length >= 3) {
      mainContent.insertAdjacentHTML('afterbegin', '<form-filter class="form--filter" data-placeholder="Filter by Name ..." data-page="favorite"></form-filter>')
    }
  },
};

export default Favorite;
