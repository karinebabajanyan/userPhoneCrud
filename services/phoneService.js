const Phone = require('../models/phone');
const User = require('../models/user');

class PhoneService {
    async createPhone(phoneData) {
        const user = await User.findById(phoneData.userId);
        if (!user) {
            throw new Error('User not found');
        }
        const phone = new Phone(phoneData);
        await phone.save();
        return phone;
    }

    async getPhone(id) {
        return await Phone.findById(id);
    }

    async updatePhone(id, phoneData) {
        return await Phone.findByIdAndUpdate(id, phoneData, { new: true });
    }

    async deletePhone(id) {
        await Phone.findByIdAndDelete(id);
    }
}

module.exports = new PhoneService();
