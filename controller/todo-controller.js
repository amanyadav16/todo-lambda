const getTodos = (req, res, next) => {
  fetch(`${process.env.AZURE_FUNCTION_BASE_URL}/getTodos`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => res.status(200).send(response))
    .catch((error) => next(error));
};

const addTodo = (req, res, next) => {
  fetch(`${process.env.AZURE_FUNCTION_BASE_URL}/addTodo`, {
    method: "POST",
    body: JSON.stringify({
      ...req.body,
    }),
  })
    .then((response) => response.json())
    .then((response) => res.status(201).send(response))
    .catch((error) => next(error));
};

const updateTodo = (req, res, next) => {
  fetch(`${process.env.AZURE_FUNCTION_BASE_URL}/updateTodo`, {
    method: "PUT",
    body: JSON.stringify({
      id: req.params.id,
      ...req.body,
    }),
  })
    .then((response) => response.json())
    .then((response) => res.status(200).send(response))
    .catch((error) => next(error));
};

const deleteTodo = (req, res, next) => {
  fetch(
    `${process.env.AZURE_FUNCTION_BASE_URL}/deleteTodo?id=${req.params.id}`,
    {
      method: "DELETE",
    }
  )
    .then((response) => response.json())
    .then((response) => res.status(200).send(response))
    .catch((error) => next(error));
};

export { getTodos, addTodo, updateTodo, deleteTodo };
