/* Задания на урок: 30

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания на урок: 33

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const adv = document.querySelectorAll('.promo__adv img'),
        genre = document.querySelector('.promo__genre'),
        poster = document.querySelector('.promo__bg'),
        moviesList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector(".adding__input"),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Перезагрузку старнички

        const newFilm = addInput.value;
        if (newFilm) {
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMoviesList(movieDB.movies, moviesList);
        }

        const favorite = checkbox.checked;

        event.target.reset();

    });

    // movies = movieDB.movies;
    const deleteAdv = (arr) => {
        arr.forEach(function(item) {
            item.remove();
        });
    };

    deleteAdv(adv);

    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = "url('img/bg.jpg')";
    };
    makeChanges();

    const sortArr = (arr) => {
        arr.sort();
    }
    sortArr(movieDB.movies);



    // genre.innerHTML = '<div class="promo__genre">ДРАМА</div>'; // мой вариант

    // poster.style.cssText = 'background: url("img/bg.jpg") center center/cover no-repeat;'; // мой вариант

    // console.log(moviesList);

    // movieDB.movies.sort();

    function createMoviesList(films, parent) {
        parent.innerHTML = '';


        console.log(movieDB.movies);

        films.forEach((film, i) => {
            parent.innerHTML += `
        <li class="promo__interactive-item">${i+1}.  ${film};
        <div class="delete"></div>
        </li>
        `;
        });
    };
    createMoviesList(movieDB.movies, moviesList);
})