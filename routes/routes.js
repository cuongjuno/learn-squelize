const user = require('../Controller/user');

var router = require('express').Router();

// Show 
router.get('/', user.show)
// Create a new User
router.post('/', user.create);

// Update a User with id
router.put('/:id', user.update);

// Delete a User with id
router.delete('/:id', user.deleteUser);

// Delete all Users
router.delete('/', user.deleteAll);



module.exports = router;