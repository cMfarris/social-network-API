const {Schema, model } =require('mongoose');
const moment = require('moment');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true ,
        unique: true,
        trim: true,
        match: []
    },
    thoughts: [
        {
            type: Schema.type.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.type.ObjectId,
            ref: 'User'
        }
    ]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
}
);


const User = model('user', UserSchema);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

module.exports = User;