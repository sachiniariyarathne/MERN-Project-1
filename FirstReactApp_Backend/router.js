const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/users', controller.getUsers);
router.post('/createusers', controller.addUser);
router.put('/updateusers', controller.updateUser);
router.delete('/deleteusers', controller.deleteUser);

module.exports = router;