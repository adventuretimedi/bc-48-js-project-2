"use strict";
import { localFavorites } from './localfavorites';
import { header } from './header';
import { modalcocktails } from './modalcocktails';
import { modalingredients } from './modalingredients';
import { renderPagination } from './pagination-show'
import './auth'


const favCoctNothing = document.querySelector('.favorite-cocktails__text');

 function favoritecocktails(){
    
    const data = {
        drinks:localFavorites.getLocal('favcockt')
    };
    let localCounter = data.drinks.length;

    try{
    if(data.drinks.length !== 0){
    favCoctNothing.textContent = '';
    renderPagination(data);
    }
    else {
        favCoctNothing.textContent = `You haven't added any favorite cocktails yet`;
    }

    }
    catch{}
// let galList = document.querySelector('.gallery__list')
// galList.addEventListener('change',ev=>{
//     console.log(ev.target)
//     if(ev.target.closest('gallery__figcaption--storage')){
//     ev.target.closest('.gallery__item').classList.add('is-hidden-card');
//     localCounter--
// }
//     if(!localCounter){
//         favCoctNothing.textContent = `You haven't added any favorite cocktails yet`;}
    

// })

}

export default favoritecocktails()
