import Joi from "joi";

export const idValidator = (req, res, next) => {
  const id = req.params.id;
  const { error } = Joi.string().uuid().required().validate(id);
  if (error) {
    res.status(400).send("Provided id is invalid.");
  } else {
    next();
  }
};
