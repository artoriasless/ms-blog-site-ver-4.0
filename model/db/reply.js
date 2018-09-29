'use strict';

const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    const Reply = sequelize.define('Reply', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            field: 'user_id',
            comment: '评论的用户 id',
        },
        papgerId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            field: 'paper_id',
            comment: '评论所属文章 id',
        },
        replyId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
            defaultValue: 0,
            field: 'reply_id',
            comment: '该评论对应的上一级评论 id （该评论为子评论时）',
        },
        replyLevel: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            field: 'reply_level',
            defaultValue: 0,
            comment: '该条评论的层级，0 表示某个文章的直接子评论',
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: 'content',
            comment: '评论主体内容',
        },
        replyHistory: {
            type: DataTypes.TEXT,
            allowNull: true,
            field: 'reply_history',
            comment: '评论历史（包括date、content），逗号分隔的 json对象 字符串',
        },
        replyDate: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'reply_date',
            comment: '评论时间',
        },
        isDeleted: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            field: 'is_deleted',
            comment: '评论是否删除（逻辑删除）',
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
        tableName: 'reply',
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

    return Reply;
};
