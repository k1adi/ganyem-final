import RestoSource from '../data/resto-source-api';
import '../views/component/resto-wrapper';

const FormFilterResto = {
  init({ formFilter }) {
    this._queryResto = '';
    this._restoWrapper = document.querySelector('resto-wrapper');

    formFilter.addEventListener('submit', async (event) => {
      event.preventDefault();
      const restoName = event.target.querySelector('input[name="resto-name"]').value;
      this._queryResto = restoName;
      let result;

      try {
        if (restoName || restoName.trim()) {
          result = await RestoSource.searchResto(restoName);
          this._handleSuccess(result.restaurants);
        } else {
          result = await RestoSource.getAllResto();
          this._handleSuccess(result.restaurants);
        }
      } catch(err) {
        console.error(err);
        this._handleError(`
          <p>Failed to search resto with name "${restoName}"</p>
        `);
      }
    });
  },

  _handleSuccess(data) {
    if (data.length) {
      this._restoWrapper.restoList = data;
    } else {
      this._handleError(`
        <p>Can't found resto with name "${this._queryResto}"</p>
        <small>Try another resto name</small>
      `);
    }
  },

  _handleError(msg) {
    this._restoWrapper.renderError(msg);
  }
};

export default FormFilterResto;
