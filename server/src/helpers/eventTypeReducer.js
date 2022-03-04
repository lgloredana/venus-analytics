const test = () => {
  console.log('test');
};

const noEventType = () => {
  console.log('noEventType');
};

exports.eventReducer = async (req, res, next) => {
  switch (req.body.eventType) {
    case 'test':
      test();
    default:
      noEventType();
  }

  next();
};
