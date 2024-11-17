const PhoneService = require('../services/phoneService');

exports.createPhone = async (req, res) => {
    try {
        const phone = await PhoneService.createPhone(req.body);
        res.status(201).json(phone);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getPhone = async (req, res) => {
    try {
        const phone = await PhoneService.getPhone(req.params.id);
        res.status(200).json(phone);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

exports.updatePhone = async (req, res) => {
    try {
        const phone = await PhoneService.updatePhone(req.params.id, req.body);
        res.status(200).json(phone);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deletePhone = async (req, res) => {
    try {
        await PhoneService.deletePhone(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
