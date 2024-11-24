const UserService = require('../services/userService');
const asyncHandler = require('../utils/asyncHandler');

exports.createUser = asyncHandler(async (req, res) => {
    return await UserService.createUser(req.body);
});

exports.getUser = asyncHandler(async (req, res) => {
    return await UserService.getUser(req.params.id);
});

exports.updateUser = asyncHandler(async (req, res) => {
    return await UserService.updateUser(req.params.id, req.body);
});

exports.deleteUser = asyncHandler(async (req, res) => {
    return await UserService.deleteUser(req.params.id);
});
