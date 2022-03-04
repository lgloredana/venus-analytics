import express from 'express';

// Controllers
const eventController = require('../../controllers/events');

// Middlewares
const validate = require('../../middlewares/validation/eventValidation');
const helpers = require('../../helpers/eventTypeReducer');

const router = express.Router();

// @route    POST api/event
// @desc     Register Event
// @access   Public
router.post('/', validate.registerEvent, eventController.registerEvent);

// @route    GET api/events
// @desc     Get Events
// @access   Public
router.get('/', eventController.fetchEvents);

// @route    GET api/events/event-count-allusers
// @desc     Returns button count for every event and all users
// @access   Public
router.get('/event-count-allusers', eventController.countEvents);

module.exports = router;
