module.exports = function (app) {
    app.get('/health-check', async (req, res) => {
        /*  #swagger.tags = ['Sample'] */
        res.status(200).send("Server is up and running 🚀");
    })
}