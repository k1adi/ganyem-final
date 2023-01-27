import likeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonPresenterWithResto = async (restaurant) => {
  await likeButtonInitiator.init({
    likeButtonWrapper: document.querySelector('.detail-like-button'),
    data: {
      restaurant
    }
  });
};

export { createLikeButtonPresenterWithResto };
