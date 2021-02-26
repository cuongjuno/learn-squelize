module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'cBs>^G<g',
    DB: 'testdb',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000, // max time, miliseconds, thoi gian toi da cua ket noi o trang thai cho truoc khi duoc giai phong
        idle: 10000, // thoi gian toi da de ket noi truoc khi throw error
    },
};
