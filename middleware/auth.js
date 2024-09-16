const authHandler = (req, res, next) => {
  if (req.isAdmin) {
    next();
  } else {
    res.status(500).send("Not Authorised to perform action...!");
  }
};

export { authHandler };
