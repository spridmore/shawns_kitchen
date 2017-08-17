const SearchHistory = require('../models').SearchHistory;

module.exports = {
    index(req, res) {
        return SearchHistory
            .all()
            .then(searchhistory => res.status(200).send(searchhistory))
            .catch(error => res.status(400).send(error));
    },
    show(req, res) {
        SearchHistory.findById(req.params.id)
            .then(function (searchhistory) {
                res.status(200).json(searchhistory);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },
    create(req, res) {
        return SearchHistory
            .create({
                id: req.body.id,
                name: req.body.name,
                url: req.body.url,
                userId: req.body.userId,
            })
            .then(searchhistory => res.status(200).send(searchhistory))
            .catch(error => res.status(400).send(error))
    },
    update(req, res) {
        SearchHistory.update(req.body, {
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
        SearchHistory.destroy({
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