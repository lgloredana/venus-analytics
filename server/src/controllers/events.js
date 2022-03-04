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
    console.log(req.query)
    const { analyticsType } = req.query;
    let payload = {};
    let type = '';

    switch (analyticsType) {
      case 'allEvents':
        payload = await Event.aggregate([
          { $group: { _id: '$username', count: { $sum: 1 } } }
        ]);
        type = 'allEvents';

        break;
      case 'pages':
        payload = await Event.aggregate([
          { $group: { _id: '$page', count: { $sum: 1 } } }
        ]);
        type = 'pages';

        break;
      case 'elements':
        payload = await Event.aggregate([
          { $group: { _id: '$elementName', count: { $sum: 1 } } }
        ]);
        type = 'elements';

        break;

      default:
        res.status(400).send({
          errors: [{ msg: 'Bad Request, send a valid analytics type' }]
        });
        break;
    }

    res.status(200).json({ status: 200, type, data: payload });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
