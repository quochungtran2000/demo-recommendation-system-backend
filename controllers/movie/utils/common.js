const { forEach } = require("mathjs");

const getKeys = (str) => {
    const listKeys = []
    
    // const keyWords = str.reduce((a, b) => a + ' ' + b.keywords, '').trim().split(' ');
    const keyWords = str.trim().replace("  ", " ").split(' ');
    keyWords.map((word, index) => {
        if(index === keyWords.indexOf(word)){
            listKeys.push(word);
        }})
    return { listKeys };
}

const getListMoive = (movies) => {
    const listMovies = []
    // const listMoviesFeild = []
    // console.log(movies)
    movies.map((movie, index ) => {
        listMovies[index] = movie.keywords;
        // listMoviesFeild[index] = {
        //     keyWords: movie.keywords,
        //     title: movie.title,

        // }
    })
    return { listMovies, totalMovie : listMovies.length}
}

// const getLikeMovieTitle = (likeMovies) => {
//     return likeMovies.map(movie => movie.title)
// }

// const {
//     listMovies,
//     totalMovie
// } = getListMoiveTitle(movies2)

// const {
//     listKeys
// } = getKeys(likeMovies2)

// const listLikeMovies = getLikeMovieTitle(likeMovies2)

// console.table(listMovies);
// console.log(listLikeMovies);
// console.table(listKeys);

const getMatrixCountWord = (movies, keywords) => {
    const matrix = [];
    movies.map((movie,i) => {
        const countByKey = []
        
        const movieTitle = movie ? movie.split(' ') : false
        
        // const movieTitle = movie.split(' ');
        // console.table(movieTitle);
        keywords.map((key, index) => {
            if(!countByKey[index]){
                countByKey[index] = 0;
            }

            movieTitle ?  movieTitle.map((word) => {
                if(word === key) {
                    countByKey[index]+=1;
                }
            }) :  countByKey[index] = countByKey[index]
            // movieTitle.map((word) => {
            //     if(word === key) {
            //         countByKey[index]+=1;
            //     }
            // })
            // if(movie.)
        })
        const ifRow = countByKey.map(count => movieTitle ? roundUp((count/movieTitle.length), 3) : 0 )
        matrix.push([...ifRow])
    })
    return matrix
}

const getLogNumber = (number) => {
    if(number <= 0 ){
        return 0
    }
    return Math.log(number)
}


const getMatrixCountDoc = (movies, keywords,totalMovie) => {
    const matrix = [];
    keywords.map((key, index) => {
        matrix[index] = 0
        movies.map((movie) => {
            if(movie){
                if(movie.split(' ').includes(key)){
                    matrix[index] += 1
                }
            }
        })
    })
    const result = matrix.map(x => {
        const number = x !==  0 ? totalMovie/x : 1 
        const roundNumber = roundUp(number, 3)
        const logNumber = getLogNumber(roundNumber)
        return roundUp(logNumber,3)
    })
    return result
}

function roundUp(num, precision) {
    precision = Math.pow(10, precision)
    return Math.round(num * precision) / precision
}

// console.log(`get matrix count word...`);

// const matrixCountWord = getMatrixCountWord(listMovies, listKeys)

// console.log(`done~`);
// console.table(matrixCountWord);



// console.log(`get matrix count doc...`);

// const matrixCountDoc = getMatrixCountDoc(listMovies, listKeys)

// console.log(`done~`)
// console.table(matrixCountDoc)

const getMatrixSimilar = (matrixCountWord, matrixCountDoc) => {
    const result = [];
    matrixCountWord.map((row) => {
        const similarRow = [];
        row.map((value, index) => {
            const multi = value * matrixCountDoc[index]
            similarRow[index] = roundUp(multi, 3)
        })
        result.push(similarRow)
    })
    return result
}

// console.log(`get Matrix Similar`)
// const matrixSimilar = getMatrixSimilar(matrixCountWord, matrixCountDoc)

// console.log(`done`)
// console.table(matrixSimilar)

// const getSimilarMovies = (matrixSimilar, listMovies, listLikeMovies) => {
//     const similarMoviesArray = [];
//     matrixSimilar.map((row, index) => {
//         const score = row.reduce((total, sco) => total + sco, 0)
//         similarMoviesArray[index] = { title: listMovies[index], score: roundUp(score, 3) }
//     })
//     const filterSimilarMovie = similarMoviesArray.filter(movie => !listLikeMovies.includes(movie.title))
//     const similarMovie = filterSimilarMovie.sort((movie1, movie2) => parseFloat(movie2.score) - parseFloat(movie1.score))
//     return similarMovie
// }

const getSimilarMovies = (matrixSimilar, listMovies) => {
    const similarMoviesArray = [];
    matrixSimilar.map((row, index) => {
        const score = row.reduce((total, sco) => total + sco, 0)
        const movie = { 
            title: listMovies[index].title, 
            vote_average: listMovies[index].vote_average,
            vote_count: listMovies[index].vote_count,
            popularity: roundUp(listMovies[index].popularity,6),
            id: listMovies[index]._id,
            // overview: listMovies[index].overview,
            release_date: listMovies[index].release_date,
            score: roundUp(score, 3),

        }
        similarMoviesArray[index] = movie
    })
    // const filterSimilarMovie = similarMoviesArray.filter(movie => !listLikeMovies.includes(movie.title))
    const similarMovie = similarMoviesArray.sort((movie1, movie2) => parseFloat(movie2.score) - parseFloat(movie1.score))
    return similarMovie
}


// console.log(`getting recommender movie...`);
// console.log(`done.`)

// const recommderMovies =  getSimilarMovies(matrixSimilar, listMovies, listLikeMovies)

// console.table(recommderMovies);

module.exports = {
    getKeys,
    getListMoive,
    getMatrixCountWord,
    roundUp,
    getMatrixCountDoc,
    getMatrixSimilar,
    getSimilarMovies
}