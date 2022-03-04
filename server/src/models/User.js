import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

UserSchema.set('toJSON', {
  versionKey: false,
  transform: function (doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
  }
});

export default mongoose.model('user', UserSchema);
