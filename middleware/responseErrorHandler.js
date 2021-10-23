const errorHandler = (error, req, res, next) => {
    if(res.headersSent) {
        return;
    }

    res.status(error?.status ?? 500).send({errors: [{title: error?.message ?? 'Internal server error'}]});
}

module.exports = errorHandler;