const express = require('express');
const router = express.Router();
const phoneController = require('../controllers/phoneController');

router.post('/', phoneController.createPhone);
router.get('/:id', phoneController.getPhone);
router.put('/:id', phoneController.updatePhone);
router.delete('/:id', phoneController.deletePhone);

module.exports = router;
