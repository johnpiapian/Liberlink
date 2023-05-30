import { Schema, model, models } from 'mongoose';

const LinkSchema = new Schema({
    ownerId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Owner ID is required!'],
    },
    link: {
        type: String,
        required: [true, 'Link is required!'],
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
    },
    // Additional fields you may consider adding
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Link = models.Link || model('Link', LinkSchema);

export default Link;