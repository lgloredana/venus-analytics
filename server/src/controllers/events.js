import Event from '../models/Event';
import User from '../models/User';

// Register Events
exports.registerEvent = async (req, res) => {
  try {
    const { eventType, elementName, page, username } = req.body;

    const event = new Event({ eventType, elementName, username, page });
    await event.save();

    res.status(200).json({ status: 200, data: { event } });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get Events
exports.fetchEvents = async (req, res) => {
  try {
    const events = await Event.find({});

    res.status(200).json({ status: 200, data: { events } });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get Event Count by User
exports.countEvents = async (req, res) => {
  try {
    const { analyticsType } = req.body;
    let payload = {};
    let type = '';

    switch (analyticsType) {
      case 'button':
        payload = await Event.aggregate([
          { $group: { _id: '$username', count: { $sum: 1 } } }
        ]);
        type = 'button';

        break;
      case 'page':

      default:
      // error
    }

    res.status(200).json({ status: 200, type, data: payload });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
