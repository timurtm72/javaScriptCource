const numberOfFilms = +prompt('Сколько фильмов Вы уже просмотрели?','');
const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private:false
};
const   a = prompt('Один из послдених просмотренных фильмов?',''),
        b = prompt('На сколько оцение его?','')
        c = prompt('Один из послдених просмотренных фильмов?',''),
        d = prompt('На сколько оцение его?','');

        personalMovieDB.movies[a] = b;
        personalMovieDB.movies[c] = d;

        console.log(personalMovieDB);