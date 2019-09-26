const movies = require('../controllers/movies.js');
const path = require('path');

module.exports = function(app){
    app.post('/api/movies/new', movies.CreateMovie_and_Review);
    app.put('/api/movies/:id/review', movies.AddReview);
    app.get('/api/movies',movies.getAll);
    app.get('/api/movies/:id',movies.getOne);
    app.post('/api/movies/:id/review',movies.deleteReview),
    app.delete('/api/movies/:id',movies.deleteMovie)
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve('./public/dist/public/index.html'))
    })
}