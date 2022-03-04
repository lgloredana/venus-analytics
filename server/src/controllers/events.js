import Event from '../models/Event';

// Register Events
exports.registerEvent = async (req, res) => {
  try {
    const { eventType, eventName, eventResponse, userId } = req.body;

    const event = new Event({ eventType, eventName, eventResponse, userId });
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
