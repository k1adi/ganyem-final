Feature('Liking Resto');

const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const emptyFavoriteMessage = 'Oops...\n\nYour Favorite Restaurant List is Empty';

Scenario('showing empty liked resto',  ({ I }) => {
  I.amOnPage('/#/favorite');
  I.see(emptyFavoriteMessage, '.card--resto__error');
});

Scenario('liking one resto', async ({ I }) => {
  I.see(emptyFavoriteMessage, '.card--resto__error');

  I.amOnPage('/');

  I.seeElement('.card__link a');
  const firstResto = locate('.card__link a').first();
  const firstRestoLink = await I.grabTextFrom(firstResto);
  I.click(firstResto)

  I.seeElement('.detail-like-button');
  I.click('.detail-like-button');

  I.amOnPage('/#/favorite');
  I.seeElement('card-resto');

  const likedResto = await I.grabTextFrom('.card__link a');

  assert.strictEqual(firstRestoLink, likedResto);
});

Scenario('unliking one resto', async ({ I }) => {
  I.see(emptyFavoriteMessage, '.card--resto__error');

  I.amOnPage('/');

  I.seeElement('.card__link a');
  const firstResto = locate('.card__link a').first();
  const firstRestoLink = await I.grabTextFrom(firstResto);
  I.click(firstResto)

  I.seeElement('.detail-like-button');
  I.click('.detail-like-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.card__link a');
  const likedResto = await I.grabTextFrom('.card__link a');

  assert.strictEqual(firstRestoLink, likedResto);

  I.click(likedResto);

  I.seeElement('.detail-like-button');
  I.click('.detail-like-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.card--resto__error');
  const noFavoriteResto = await I.grabTextFrom('.card--resto__error');
  
  assert.strictEqual(emptyFavoriteMessage, noFavoriteResto);
});

Scenario('post customer review success', async ({ I }) => {
  I.see(emptyFavoriteMessage, '.card--resto__error');

  I.amOnPage('/');

  I.seeElement('.card__link a');
  I.click(locate('.card__link a').first());

  I.seeElement('.form--review');

  I.fillField('input', 'Kiadi');
  I.fillField('textarea', 'Comment test for e2e testing');

  I.click('button[type="submit"]');

  const toastSuccessMessage = 'Review sent successfully✖';
  const toastMessage = locate('.toastify--success').first();
  const toastText = await I.grabTextFrom(toastMessage);

  assert.strictEqual(toastSuccessMessage, toastText);
});

Scenario('post customer review with incorrect value', async ({ I }) => {
  I.see(emptyFavoriteMessage, '.card--resto__error');

  I.amOnPage('/');

  I.seeElement('.card__link a');
  I.click(locate('.card__link a').first());

  I.seeElement('.form--review');

  I.fillField('input', '  ');
  I.fillField('textarea', '     ');

  I.click('button[type="submit"]');

  const toastSuccessMessage = 'Please insert correct value✖';
  const toastMessage = locate('.toastify--failed').first();
  const toastText = await I.grabTextFrom(toastMessage);

  assert.strictEqual(toastSuccessMessage, toastText);
});