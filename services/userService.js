const User = require('../models/user');

class UserService {
    async createUser(userData) {
        const user = new User(userData);
        await user.save();
        return user;
    }

    async getUser(id) {
        return await User.findById(id);
    }

    async updateUser(id, userData) {
        return await User.findByIdAndUpdate(id, userData, { new: true });
    }

    async deleteUser(id) {
        return await User.findByIdAndDelete(id);
    }
}

module.exports = new UserService();
