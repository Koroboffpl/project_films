
'use strict';

document.addEventListener('DOMContentLoaded', () => {
    
const promoBlocks = document.querySelectorAll('.promo__adv img'),
      promoBG = document.querySelector(".promo__bg");

promoBlocks.forEach(item => {
    item.remove();
});

document.querySelector(".promo__genre").innerHTML = "драма";

promoBG.style.cssText = 'background: url(img/bg.jpg) center center/cover no-repeat;'


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
const promInter = document.querySelector('.promo__interactive-list');
//const newLi = document.getElementsByClassName('promo__interactive-list');
const sortMovie = movieDB.movies.sort();


let add = document.getElementById("btnflm");


add.addEventListener("click", function(event) {
    event.preventDefault();
    let input = document.querySelector('.adding__input').value;
   // movieDB.movies.push(input);
   
    if (input) {

        if (input.length > 21) {
            input = `${input.substring(0, 22)}...`;
        }

       
        movieDB.movies.push(input);
      
    }
    document.querySelector('.adding__input').value = "";
    createMovieList(movieDB.movies, promInter);
    });
    createMovieList(movieDB.movies, promInter);
    function createMovieList(films, parent) {
        parent.innerHTML = "";

        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
            `;
        });
        movieDB.movies.sort();

        document.querySelectorAll('.delete').forEach((btndel, i) => {
            btndel.addEventListener( "click" , () => {
              document.querySelector('.delete').parentElement.remove();
              movieDB.movies.splice(i, 1);
    
              createMovieList(movieDB.movies, promInter);
            });
        });
        let checkbox = document.querySelector("input[type='checkbox']");
        if (checkbox.checked) {
            console.log("Добавляем любимый фильм");
        } else {
           
        }
    }

});







