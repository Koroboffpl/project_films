
'use strict';
// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
const promoBlocks = document.querySelector("div.promo__adv > img"),
      promoBG = document.querySelector(".promo__bg");
// 2) Изменить жанр фильма, поменять "комедия" на "драма" 
document.querySelector(".promo__genre").innerHTML = "драма";
// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
//Реализовать только при помощи JS
promoBG.style.cssText = 'background: url(img/bg.jpg) center center/cover no-repeat;'
// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
//  Отсортировать их по алфавиту 
// 5) Добавить нумерацию выведенных фильмов
promoBlocks.remove();
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
let html = '<ul>';
movieDB.forEach(function(item, i, arr) {
  html += '<li>'+item+'</li>';
});
html += '</ul>'

document.write(html);
/*let promInter = document.querySelectorAll(".promo__interactive-item");
movieDB.forEach(function(item, i, movieDB){ 
   
    promInter.insertAdjacentHTML("afterend", "<li>"+item+[i + 1]+"</li>");
});
*/






