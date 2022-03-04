import { body, validationResult } from 'express-validator';

exports.registerEvent = [
  body('eventType').not().isEmpty().withMessage('Event Type is required'),
  body('eventName').not().isEmpty().withMessage('Event Name is required'),
  body('eventResponse')
    .not()
    .isEmpty()
    .withMessage('Event Response is required'),
  body('userId').not().isEmpty().withMessage('User id is required'),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else next();
  }
];
