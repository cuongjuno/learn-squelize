const db = require('../models');
const User = db.user;
const Op = db.Sequelize.Op;

// create new user
const create = (req, res) => {
    // Validate request
    console.log("============> "+req.body)

    if (!req.body.firstname || !req.body.age) {
        console.log('==========>' + req.body.lastname);
        res.status(400).send({
            message: 'Content can not be empty!',
        });
        return;
    }
    // Create a User
    const user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
    };


    User.create(user)
        .then((data) => {
            res.send(data);
            
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while creating the User.',
            });
        });
};
const show = (req, res) => {
    User.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while retrieving tutorials.',
            });
        });
}
const update = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: 'User was updated successfully.',
                });
            } else {
                res.send({
                    message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: 'Error updating User with id=' + id,
            });
        });
};

const deleteUser = (req, res) => {
    const id = req.params.id;

    User.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: 'User was deleted successfully!',
                });
            } else {
                res.send({
                    message: `Cannot delete User with id=${id}. Maybe User was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: 'Could not delete User with id=' + id,
            });
        });
};


const deleteAll = (req, res) => {
    User.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => {
            res.send({
                message: `${nums} Users were deleted successfully!`,
            });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    'Some error occurred while removing all user.',
            });
        });
};
module.exports = {
    create, deleteAll, deleteUser, update, show
}