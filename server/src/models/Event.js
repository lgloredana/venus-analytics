import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  eventName: {
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
  }
});

export default mongoose.model('event', EventSchema);
