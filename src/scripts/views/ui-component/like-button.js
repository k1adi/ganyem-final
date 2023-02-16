const createLikeButton = () => `
  <button class="like-button" aria-label="Like this resto" aria-pressed="false">
    <i class="fa-heart-outline" aria-hidden="true"></i>
  </button>
`;

const createLikedButton = () => `
  <button class="like-button" aria-label="Unlike this resto" aria-pressed="true">
    <i class="fa-heart" aria-hidden="true"></i>
  </button>
`;

export { createLikeButton, createLikedButton };
