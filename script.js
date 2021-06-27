const number0Films = +prompt('Сколько вы уже фильмов посмотели?', '');

const persinalMovieDB = {
    count: number0Films,
    movies: {},
    actors: {},
    generes: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов', ''),
      d = prompt('На сколько оцените его?', ''); 

persinalMovieDB.movies[a] = b;
persinalMovieDB.movies[c] = d;

console.log(persinalMovieDB);