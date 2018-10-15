'use strict';

const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        uuid: {
            type: DataTypes.STRING(100),
            allowNull: false,
            field: 'uuid',
            comment: '不同于 id ，生成的唯一 uuid',
        },
        userName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: 'user_name',
            comment: '用户名，用于显示的用户名称',
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'password',
            comment: '密码，存入数据库的为经过哈希计算的密码',
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'email',
            comment: '用户邮箱，用于后续修改密码，也可用作登录',
        },
        gender: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'gender',
            comment: '用户性别：0 - male，1 - female, 2 - transgender',
        },
        isEnabled: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 1,
            field: 'is_enabled',
            comment: '该用户账号是否启用：0 - 不启用，无法回复、发表评论，1 - 启用，默认启用，正常回复、评论',
        },
        registerIp: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: 'register_ip',
            comment: '用来注册的机器 ip 地址',
        },
        gmtCreate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            field: 'gmt_create',
            get: function() {
                const gmtCreate = this.getDataValue('gmtCreate');

                return moment(gmtCreate).format('YYYY-MM-DD HH:mm:ss');
            },
        },
        gmtModified: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            field: 'gmt_modified',
            get: function() {
                const gmtModified = this.getDataValue('gmtModified');

                return moment(gmtModified).format('YYYY-MM-DD HH:mm:ss');
            },
        },
    }, {
        tableName: 'user',
        timestamps: true,
        underscored: true,

        createdAt: 'gmtCreate',
        updatedAt: 'gmtModified',

        classMethods: {
            associate(models) {
                // associate Message
                User.hasMany(models.Message, {
                    foreignKey: 'userId',
                    sourceKey: 'id',
                });
                // associate Reply
                User.hasMany(models.Reply, {
                    foreignKey: 'userId',
                    sourceKey: 'id',
                });
            },
        },
    });

    return User;
};
