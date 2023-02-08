import '../component/app-banner';
import '../component/form-filter';
import '../component/resto-wrapper';

import RestoSource from '../../data/resto-source-api';

const Restaurants = {
  async render() {
    return `
      <app-banner data-title="Restaurants" data-title-align="text-center" class="banner banner--resto"></app-banner>

      <section class="container--wrap container--padding-y"  id="mainContent">
        <form-filter class="form--filter" data-placeholder="Filter by Name, Category or Menu ..." data-page="restaurants"></form-filter>
        <resto-wrapper class="card-wrapper--resto margin-top-none"></resto-wrapper>
      </section>
    `;
  },

  async afterRender() {
    const restoWrapper = document.querySelector('resto-wrapper');
    try {
      const getResto = await RestoSource.getAllResto();
      restoWrapper.restoList = getResto.restaurants;
    } catch (err) {
      console.error(err);
      restoWrapper.renderError(`
        <p>Failed to Get Restaurant Data</p>
        <small>You might try refreshing the page once again.</small>
      `);
    }
  },
};

export default Restaurants;
