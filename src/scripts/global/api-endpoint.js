import CONFIG from './config';

const API_ENDPOINT = {
  GET_ALL_RESTO: `${CONFIG.API_BASE_URL}/list`,
  POST_REVIEW: `${CONFIG.API_BASE_URL}/review`,
  SEARCH_RESTO: `${CONFIG.API_BASE_URL}/search`,
  GET_DETAIL_RESTO: (id) => `${CONFIG.API_BASE_URL}/detail/${id}`,
  GET_IMG_RESTO: (size) => `${CONFIG.API_BASE_URL}/images/${size}`,
};

export default API_ENDPOINT;
