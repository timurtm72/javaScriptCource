"use strict";
const numberOfFilms = +prompt('Сколько фильмов Вы уже просмотрели?','');
const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private:false
};
for(let i = 0;i < 2; i++){
    const   a = prompt('Один из послдених просмотренных фильмов?',''),
    b = prompt('На сколько оцение его?','')

    if(a != nuul && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('Done!');
    }else{
        console.log('Error');
        i--;
    }
}
if(personalMovieDB.count < 10){
    console.log('Просмотренно мало фильмов');
}else if(personalMovieDB.count >= 10 && personalMovieDB.count > 30){
    console.log('Вы классический зритель.');
}else if(personalMovieDB.count >= 30){
    console.log('Вы киноман.');
}else{
    console.log('Произошла ошибка.');
}
console.log(personalMovieDB);


   