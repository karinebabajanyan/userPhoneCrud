const PhoneService = require('../services/phoneService');
const asyncHandler = require('../utils/asyncHandler');

exports.createPhone = asyncHandler(async (req, res) => {
    return await PhoneService.createPhone(req.body)
});

exports.getPhone = asyncHandler(async (req, res) => {
    return await PhoneService.getPhone(req.params.id);
});

exports.updatePhone = asyncHandler(async (req, res) => {
    return await PhoneService.updatePhone(req.params.id, req.body);
});

exports.deletePhone = asyncHandler(async (req, res) => {
    return await PhoneService.deletePhone(req.params.id);
});
