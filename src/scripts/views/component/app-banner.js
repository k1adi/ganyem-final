class AppBanner extends HTMLElement {
  connectedCallback() {
    this.ctaStatus = this.getAttribute('data-cta');
    this.ctaText = this.getAttribute('data-cta-text');
    this.bannerTitle = this.getAttribute('data-title');
    this.titleAlign = this.getAttribute('data-title-align') || '';

    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container--wrap">
        <h1 class="banner__title ${this.titleAlign}">${this.bannerTitle}</h1>
        ${this.ctaStatus ? `
          <button class="btn btn--primary" data-target="#mainContent">${this.ctaText}</button>
        ` : ''}
      </div>
    `;

    if (this.ctaStatus) {
      const bannerButton = this.querySelector('.btn--primary');
      bannerButton.addEventListener('click', (event) => {
        const attrTarget = event.target.getAttribute('data-target');
        const elemTarget = document.querySelector(attrTarget);
        elemTarget.tabIndex = 0;
        elemTarget.focus();
      });
    }
  }
}

customElements.define('app-banner', AppBanner);
