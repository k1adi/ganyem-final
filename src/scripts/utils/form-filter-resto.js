import '../views/component/resto-wrapper';
import RestoSource from '../data/resto-source-api';
import FavoriteRestoIdb from '../data/favorite-resto-idb';

const FormFilterResto = {
  init({ formFilter, formPage }) {
    this._queryResto = '';
    this._formPage = formPage;
    this._restoWrapper = document.querySelector('resto-wrapper');

    formFilter.addEventListener('submit', async (event) => {
      event.preventDefault();
      this._queryResto = event.target.querySelector('input[name="resto-name"]').value;

      try {
        if (this._queryResto || this._queryResto.trim()) {
          this._getFilterResto();
          return;
        }

        this._getAllResto();
      } catch(err) {
        console.error(err);
        this._handleError(`
          <p>Failed to search resto with keyword "${restoName}"</p>
        `);
      }
    });
  },

  async _getFilterResto() {
    let result;
    
    if (this._formPage === 'restaurants') {
      result = await RestoSource.searchResto(this._queryResto);
      this._handleSuccess(result.restaurants);
      return;
    }

    result = await FavoriteRestoIdb.searchResto(this._queryResto);
    this._handleSuccess(result);
  },

  async _getAllResto() {
    let result;

    if (this._formPage === 'restaurants') {
      result = await RestoSource.getAllResto();
      this._handleSuccess(result.restaurants);
      return;
    }

    result = await FavoriteRestoIdb.getAllResto();
    this._handleSuccess(result);
  },

  _handleSuccess(data) {
    if (data.length) {
      this._restoWrapper.restoList = data;
    } else {
      this._handleError(`
        <p>Can't found resto with keyword "${this._queryResto}"</p>
        <small>Try another keyword</small>
      `);
    }
  },

  _handleError(msg) {
    this._restoWrapper.renderError(msg);
  }
};

export default FormFilterResto;
