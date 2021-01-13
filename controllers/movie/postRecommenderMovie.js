const DataMoive = require('../../models/DataMovie.model')
const {
    getKeys,
    getListMoive,
    getMatrixCountWord,
    getMatrixCountDoc,
    getMatrixSimilar,
    getSimilarMovies
} = require('./utils/common')

const postRecommenderMovie = async(req, res) => {
    try{
        const { keyWords, pageSize = 10, page = 1 } = req.body;
        if(keyWords){
            const {listKeys} = getKeys(keyWords);
            const dataMovies = []
            await DataMoive.find()
                .limit(300)
                .then(res => dataMovies.push(...res))
            const { listMovies, totalMovie } = await getListMoive(dataMovies)
            const tfMatrix = getMatrixCountWord(listMovies, listKeys)
            console.log(`getting matrix tf`)
            // console.table(tfMatrix)
            console.log(`getiing matrix idf`)
            const idfMatrix = getMatrixCountDoc(listMovies, listKeys, totalMovie)
            // console.table(idfMatrix)
            console.log(`getting matrix similar`)
            const similarMatrix = getMatrixSimilar(tfMatrix, idfMatrix)
            // console.table(similarMatrix)
            console.log(`getting movie recommender`)
            const recommderMovies = getSimilarMovies(similarMatrix, dataMovies)
            // console.table(recommderMovies)
            const filterMovies = recommderMovies.slice((page-1)*pageSize,pageSize*page)
            console.table(filterMovies)
            res.json(filterMovies)
        }        
    }
    catch(err) {
        console.log(err)
        res.status(400).json(err);
    }
}

module.exports = postRecommenderMovie;