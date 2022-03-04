import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  page: {
    type: String,
    required: true
  },
  elementName: {
    type: String,
    required: true
  },
  eventType: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  username: {
    type: String,
    required: true
  }
  // userId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'user'
  // }
});

EventSchema.set('toJSON', {
  versionKey: false,
  transform: function (doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
  }
});

export default mongoose.model('event', EventSchema);
