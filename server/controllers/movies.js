const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

Movie = mongoose.model('Movie');
Review = mongoose.model('Review')
app.use(bodyParser.json());

module.exports = {
    CreateMovie_and_Review : function(req,res){
        Movie.create(req.body, function(err,movie){
            if(err){
                res.json({error:err});
            }else{
                Review.create(req.body, function(err,review){
                    if(err){
                        Movie.remove({title: req.body.title}, function(err){
                            if(err){
                                res.json({error:err});
                            }
                        });
                        res.json({error: err});
                    }else{
                        Movie.findOneAndUpdate({title: req.body.title},{$push: {reviews: review}}, function(err,movie){
                            if(err){
                                res.json({error:err});
                            }else{
                                res.json({movie:movie});
                            }
                        })
                    }
                })
            }
        })
    },
    AddReview : function(req,res){
        Review.create(req.body, function(err,review){
            if(err){
                res.json({error:err});
            }else{
                Movie.findOneAndUpdate({_id:req.params.id}, {$push: {reviews: review}},function(err,movie){
                    console.log("added movie review");
                    res.json({movie:movie})
                })
            }
        })
    },
    getAll: function(req,res){
        Movie.find({},function(err,movies){
            if(err){
                res.json({error:err});
            }else{
                res.json({movies: movies})
            }
        })
    },
    getOne: function(req,res){
        Movie.find({_id: req.params.id},function(err,movie){
            if(err){
                res.json({error:err});
            }else{
                res.json({movie:movie})
            }
        })
    },
    deleteReview: function(req,res){
        console.log(req.body);
        Review.findOne({_id: req.body.review_id},function(err, review){
            console.log(review);
            if(err){
                res.json({error:err});
            }else{
                console.log(review);
                Movie.findOneAndUpdate({_id: req.params.id},{$pull: {reviews: review}},function(err){
                    if(err){
                        res.json({error:err});
                    }else{
                        res.json({success: "success"})
                    }
                })
            }
        })
    },
    deleteMovie: function(req,res){
        Movie.remove({_id:req.params.id},function(err){
            if(err){
                res.json({error:err});
            }else{
                res.json({success: "deleted Movie"})
            }
        })
    }

}