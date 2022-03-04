import { body, validationResult } from 'express-validator';

exports.registerEvent = [
  body('page').not().isEmpty().withMessage('Page number is required'),
  body('eventType').not().isEmpty().withMessage('Event Type is required'),
  body('elementName').not().isEmpty().withMessage('Element Name is required'),
  body('username').not().isEmpty().withMessage('username is required'),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else next();
  }
];
