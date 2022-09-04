const { body, validationResult } = require("express-validator");

exports.submitForm = [
  body('projectName').trim().isString().isLength({min: 4}).withMessage("Has to be more than 3 characters"),
  body('scanningMode').isString().toUpperCase().isIn(['GANTRY', 'CRAWLER', 'AUTO', 'MANUAL', 'ARM']). withMessage("Accepted input: 'GANTRY', 'CRAWLER', 'AUTO', 'MANUAL', 'ARM'"),
  body('scanDimensionsX').trim().isInt({ min: 1}).withMessage("Has to be integer >= 1"),
  body('scanDimensionsY').trim().isInt({ min: 1}).withMessage("Has to be integer >= 1"),
  body('scannerFrequency').trim().isFloat({ min: 1}).matches(/\d+(\.\d{1})$/).withMessage("Has to be >= 1, to 1 decimal place"),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    //create model
    try {
      //save to db
      return res.status(200).json({message: "success"});;
    } catch (err) {
      return next(err);
    }
  }
]

exports.getImage = [
    (req, res, next) => {
        return res.status(200).json({link: "https://drive.google.com/file/d/1dmtW4Rxx8aHNL2DxlXkxNnOONOiYhRO9/preview"})
    }
]