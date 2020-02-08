module.exports = {
    //ubah DB yang sudah di bold dengan hos mongodb masing-masing

    DB: process.env.HOST ? process.env.HOST : 'localhost',
    APP_Port: process.env.APP_PORT ? process.env.APP_PORT : 80,
}