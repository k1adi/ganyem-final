import RestoSource from '../data/resto-source-api';
import ToastComponent from '../views/ui-component/toast';
import '../views/component/review-wrapper';

const PostRestoReview = {
  init({ formReview }) {
    formReview.addEventListener('submit', async (event) => {
      event.preventDefault();
      try {
        const formData = new FormData(event.target);
        this._checkValueInput({
          formData,
          formWrapper: event.target,
        });
      } catch (err) {
        console.error(err);
        ToastComponent.init({
          toastStatus: 'toastify--failed',
          toastMessage: 'Review failed to submit',
        });
      }
    });
  },

  async _checkValueInput({ formData, formWrapper }) {
    /**
     * Souce code
     * https://stackoverflow.com/questions/41431322/how-to-convert-formdata-html5-object-to-json
    */
    const formObject = Array.from(formData.entries()).reduce((data, [key, value]) => ({
      ...data,
      [key]: value,
    }), {});

    if (formObject.name.trim() || formObject.review.trim()) {
      const reviewWrapper = document.querySelector('review-wrapper');

      const result = await RestoSource.postRestoReview(formObject);
      reviewWrapper.item = result.customerReviews;

      ToastComponent.init({
        toastStatus: 'toastify--success',
        toastMessage: 'Review sent successfully',
      });

      formWrapper.reset();
    } else {
      ToastComponent.init({
        toastStatus: 'toastify--failed',
        toastMessage: 'Please insert correct value',
      });
    }
  }
};

export default PostRestoReview;
