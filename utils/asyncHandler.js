module.exports = (handler) => async (req, res, next) => {
    try {
        const result = await handler(req, res, next);

        if (result === null) {
            const error = new Error('Resource not found');
            error.statusCode = 404;
            throw error;
        }

        const statusCode = result.statusCode || 200;

        res.status(statusCode).json(result);
    } catch (err) {
        const statusCode = (err && err.statusCode) || 400;

        const message = (err && err.message) || 'An unknown error occurred';

        res.status(statusCode).json({ error: message });
    }
};
