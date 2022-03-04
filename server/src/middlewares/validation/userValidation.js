import { body, validationResult } from 'express-validator';

exports.registerUser = [
  body('name').not().isEmpty().withMessage('Name is required'),
  body('userId').isEmail().withMessage('User Id is required'),
  body('email').isEmail().withMessage('Please include a valid email'),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else next();
  }
];
