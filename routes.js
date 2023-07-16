const router = require('express').Router();
const { createAdmin, createTask, getAllTask, clearCookie } = require('./controller');
const verifyToken = require('./middleware');


router.post('/admin', createAdmin);

router.post('/createTask', verifyToken, createTask);

router.get('/getTask', getAllTask);

router.post("/clearCookie", clearCookie);

module.exports = router;
