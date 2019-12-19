import TodosRepository from "../repositories/todosRepository.js";

const repositories = {
  todos: TodosRepository
};

export const RepositoryFactory = {
  get: name => repositories[name]
};
