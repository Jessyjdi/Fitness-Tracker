const { Model, DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/connection");
const bcrpyt = require("bcrypt");

class User extends Model {
    checkPw(loginPw) {
        return bcrpyt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        email: {
            types: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            },
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [5] },
        },
        trainer: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrpyt.hash(newUserData.password, 10);
                return newUserData;
            },
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrpyt.hash(updatedUserData.password, 10);
                return updatedUserData;
            },
        },
    },
    {
        
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "user",
        sequelize,
    }
);

module.exports = User;