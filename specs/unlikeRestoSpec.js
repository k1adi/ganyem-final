import * as TestFactories from './helpers/testFactories';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Unlikin A Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div class="detail-like-button"></div>';
  };
  
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoIdb.putResto({ id: 1 });
  });
  
  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto(1);
  });

  it('should display unlike widget when the resto has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    
    expect(document.querySelector('[aria-label="Unlike this resto"]'))
      .toBeTruthy();
  });

  it('should be able to remove like resto from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    
    document.querySelector('[aria-label="Unlike this resto"]')
      .dispatchEvent(new Event('click'));
    
    expect(await FavoriteRestoIdb.getAllResto())
      .toEqual([]);
  });

  it('should not throw error if unliked resto is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    
    await FavoriteRestoIdb.deleteResto(1);
    
    document.querySelector('[aria-label="Unlike this resto"]')
      .dispatchEvent(new Event('click'));
    
    expect(await FavoriteRestoIdb.getAllResto())
      .toEqual([]);
  });
});