const { sequelize, Sequelize } = require('.');

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        firstname: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lastname: {
            type: Sequelize.STRING,
        },
        age: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    });
    return User;
};
