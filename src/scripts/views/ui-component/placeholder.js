const createRestoPlaceholder = () => {
  let restoCardItem = '';
  let placeholderDesc = '';

  // eslint-disable-next-line no-plusplus
  for (let maxDesc = 0; maxDesc < 6; maxDesc++) {
    placeholderDesc += `
      <span>
        <div class="placeholder">
          <div class="animation"></div>
        </div>
      </span>
    `;
  }

  // eslint-disable-next-line no-plusplus
  for (let maxCard = 0; maxCard < 6; maxCard++) {
    restoCardItem += `
      <div class="card--resto">
        <div class="card--resto__image">
          <div class="placeholder">
            <div class="animation"></div>
          </div>
        </div>

        <div class="card--resto__body">
          <div class="card--resto__placeholder--title">
            <div class="placeholder">
              <div class="animation"></div>
            </div>
          </div>

          <div class="card--resto__placeholder--desc">
            ${placeholderDesc}
          </div>
        </div>
      </div>
    `;
  }

  return restoCardItem;
};

const createRestoDetailPlaceholder = () => {
  let placeholderDesc = '';
  let placeholderMenu = '';
  let placeholderMenuList = '';

  // eslint-disable-next-line no-plusplus
  for (let maxDesc = 0; maxDesc < 8; maxDesc++) {
    placeholderDesc += `
      <span>
        <div class="placeholder">
          <div class="animation"></div>
        </div>
      </span>
    `;
  }

  // eslint-disable-next-line no-plusplus
  for (let maxMenuList = 0; maxMenuList < 6; maxMenuList++) {
    placeholderMenuList += `
      <span>
        <div class="placeholder">
          <div class="animation"></div>
        </div>
      </span>
    `;
  }

  // eslint-disable-next-line no-plusplus
  for (let maxMenu = 0; maxMenu < 2; maxMenu++) {
    placeholderMenu += `
      <div class="detail-card__section">
        <div class="detail-card__placeholder--menu-title">
          <div class="placeholder">
            <div class="animation"></div>
          </div>
        </div>

        <div class="detail-card__placeholder--menu-list">
          ${placeholderMenuList}
        </div>
      </div>
    `;
  }

  return `
  <div class="detail-wrapper__info">
    <div class="detail-card">
      <div class="detail-card__image">
        <div class="placeholder">
          <div class="animation"></div>
        </div>
      </div>

      <div class="detail-card__placeholder--name">
        <div class="placeholder">
          <div class="animation"></div>
        </div>
      </div>

      <div class="detail-card__placeholder--desc">
        ${placeholderDesc}
      </div>
    </div>
  </div>
  <div class="detail-wrapper__desc">
    <div class="detail-wrapper__card">
      ${placeholderMenu}
    </div>

    <div class="detail-wrapper__card">
      <div class="detail-card__placeholder--review">
        <span>
          <div class="placeholder">
            <div class="animation"></div>
          </div>
        </span>
        <span>
          <div class="placeholder">
            <div class="animation"></div>
          </div>
        </span>
      </div>

      <div class="detail-card__placeholder--section">
        <div class="placeholder">
          <div class="animation"></div>
        </div>
      </div>
    </div>
  </div>
  `;
};

const removeCurrentPlaceholder = (parentElement) => {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
};

export { createRestoPlaceholder, createRestoDetailPlaceholder, removeCurrentPlaceholder };
