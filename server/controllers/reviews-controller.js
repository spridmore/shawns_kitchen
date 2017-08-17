const Reviews = require('../models').Reviews;

module.exports = {
    index(req, res) {
        return Reviews
            .all()
            .then(reviews => res.status(200).send(reviews))
            .catch(error => res.status(400).send(error));
    },
    show(req, res) {
       Reviews.findById(req.params.id)
            .then(function (review) {
                res.status(200).json(review);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },
    create(req, res) {
        return Reviews
            .create({
                title: req.body.title,
                description: req.body.description,
                rating: req.body.rating,
                recipeId: req.body.recipeId,
                userId: req.body.userId,
            })
            .then(reviews => res.status(200).send(reviews))
            .catch(error => res.status(400).send(error))
    },
    update(req, res) {
       Reviews.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            .then(function (updatedRecords) {
                res.status(200).json(updatedRecords);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },

    delete(req, res) {
       Reviews.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(function (deletedRecords) {
                res.status(200).json(deletedRecords);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    }
};