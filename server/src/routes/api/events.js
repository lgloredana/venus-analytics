import express from 'express';

// Controllers
const eventController = require('../../controllers/events');

// Middlewares
const validate = require('../../middlewares/validation/eventValidation');

const router = express.Router();

// @route    POST api/event
// @desc     Register Event
// @access   Public
router.post('/', validate.registerEvent, eventController.registerEvent);

// @route    GET api/events
// @desc     Get Events
// @access   Public
router.get('/', eventController.fetchEvents);

module.exports = router;
