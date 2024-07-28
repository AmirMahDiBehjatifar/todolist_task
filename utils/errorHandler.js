function ErrorHandler(err, req, res, next) {
    console.log(err);
    return res.json({
        statusCode: err.status || 500,
        message: err.message || "Internal Server Error"
    })
}

function NotFoundRoute(req, res, next) {
    res.json({
        message: `SORRY THE ROUTE ${req.url} IS NOT AVAILABLE `,
        error: 404,
    })
}

module.exports = {
    ErrorHandler,
    NotFoundRoute
}