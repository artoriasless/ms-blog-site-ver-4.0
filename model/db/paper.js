'use strict';

const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    const Paper = sequelize.define('Paper', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'title',
            comment: '文章标题',
        },
        tag: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'tag',
            comment: '文章所属分类',
        },
        subtag: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'subtag',
            comment: '文章所属子分类',
        },
        brief: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: 'brief',
            comment: '文章简介',
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: 'content',
            comment: '文章主体内容',
        },
        yearTag: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: 'year_tag',
            comment: '文章所属年份标签',
        },
        monthTag: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: 'month_tag',
            comment: '文章所属年月标签',
        },
        isDeleted: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            field: 'is_deleted',
            comment: '文章是否删除（逻辑删除）',
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
        tableName: 'paper',
        timestamps: true,
        underscored: true,

        createdAt: 'gmtCreate',
        updatedAt: 'gmtModified',

        classMethods: {
            // associate(models) {
            // example on how to add relations
            // Article.hasMany(models.Comments)
            // },
        },
    });

    return Paper;
};
