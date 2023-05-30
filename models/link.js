import { Schema, model, models } from 'mongoose';

const LinkSchema = new Schema({
    ownerId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Owner ID is required!'],
    },
    url: {
        type: String,
        required: [true, 'Link is required!'],
        match: [/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/, "Link invalid, it should be a valid URL!"]
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
    },
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