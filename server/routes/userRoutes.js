const express = require ('express');
const router =  express.Router();
const userController = require ('../controllers/userController');


router.get('/api/users/list', userController.listUsers);
router.post('/api/users', userController.createUser);
router.patch('/api/users/:id', userController.updateUser);

module.exports = router;