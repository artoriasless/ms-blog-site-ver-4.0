'use strict';

const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'title',
            comment: '一条消息的标题',
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: 'content',
            comment: '一条消息的主要内容',
        },
        paperId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            field: 'paper_id',
            comment: '评论所属文章 id',
        },
        replyId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            field: 'reply_id',
            comment: '对应消息来源的评论 id',
        },
        isRead: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            field: 'is_read',
            comment: '消息是否已读',
        },
        isDeleted: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            field: 'is_deleted',
            comment: '消息是否删除（逻辑删除）',
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
        tableName: 'message',
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

    return Message;
};
