const Recipe = require('../models').Recipe;

module.exports = {
    index(req, res) {
        return Recipe
            .all()
            .then(recipes => res.status(200).send(recipes))
            .catch(error => res.status(400).send(error));
    },
    show(req, res) {
        Recipe.findById(req.params.id)
            .then(function (recipe) {
                res.status(200).json(recipe);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },
    create(req, res) {
        return Recipe
            .create({
                name: req.body.name,
                servings: req.body.servings,
                ingredientId: req.body.ingredientId

            })
            .then(recipes => res.status(200).send(recipes))
            .catch(error => res.status(400).send(error))
    },
    update(req, res) {
        Recipe.update(req.body, {
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
        Recipe.destroy({
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