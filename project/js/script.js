
'use strict';
// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
const promoBlocks = document.querySelectorAll('.promo__adv img'),
      promoBG = document.querySelector(".promo__bg");

promoBlocks.forEach(item => {
    item.remove();
});
// 2) Изменить жанр фильма, поменять "комедия" на "драма" 
document.querySelector(".promo__genre").innerHTML = "драма";
// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
//Реализовать только при помощи JS
promoBG.style.cssText = 'background: url(img/bg.jpg) center center/cover no-repeat;'
// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
//  Отсортировать их по алфавиту 
// 5) Добавить нумерацию выведенных фильмов

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
promInter.innerHTML = "";
sortMovie.forEach((film, i) => {
    promInter.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>
    `;
});







