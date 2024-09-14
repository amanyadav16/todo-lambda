const getTodos = (req, res, next) => {
  try {
    res.send({ message: "get all todos" });
  } catch (error) {
    next(error);
  }
};
const addTodo = (req, res, next) => {
  console.log(req.body);
  try {
    res.send({ message: "add a todo" });
  } catch (error) {
    next(error);
  }
};
const updateTodo = (req, res, next) => {
  try {
    res.send({
      message: `update a todo with id ${req.params["id"]}`,
    });
  } catch (error) {
    next(error);
  }
};
const deleteTodo = (req, res, next) => {
  try {
    res.send({
      message: `delete a todo with id ${req.params.id}`,
    });
  } catch (err) {
    next(err);
  }
};

export { getTodos, addTodo, updateTodo, deleteTodo };
