import * as TestFactories from './helpers/testFactories';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Liking A Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div class="detail-like-button"></div>';
  };
  
  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the resto has not liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    
    expect(document.querySelector('[aria-label="Like this resto"'))
      .toBeTruthy();
  });

  it('should be able to like the resto', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
    
    document.querySelector('.like-button').dispatchEvent(new Event('click'));
    const resto = await FavoriteRestoIdb.getResto(1);
    
    expect(resto).toEqual({ id: 1 });
    
    await FavoriteRestoIdb.deleteResto(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({});
    
    document.querySelector('.like-button').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});