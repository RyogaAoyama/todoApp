import Repository from "./repository.js";

const resource = "/todos";

export default {
  // 要素全取得
  all() {
    return Repository.get(`${resource}`);
  },

  create(todo) {
    return Repository.post(`${resource}`, todo);
  },

  update(id, todo) {
    return Repository.put(`${resource}/${id}`, todo);
  },

  destroy(id) {
    return Repository.delete(`${resource}/${id}`);
  }
};
