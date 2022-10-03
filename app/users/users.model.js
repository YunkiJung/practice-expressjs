import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        id: String,
        password: String,
        name: String,
        address: String,
        phone: String,
        email: String
    }, {
        timestamps: true,
        collection: 'users'
    }
)

export default mongoose.model('User', UserSchema);

