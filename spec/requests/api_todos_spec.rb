require 'rails_helper'

RSpec.describe 'apiTodos', type: :request do
  before { FactoryBot.create_list(:todo, 3) }

  describe 'GET /api/todos' do
    let(:todos) { Todo.all }

    it '全てのtodoを取得できていること' do
      get api_todos_path
      expect(response).to have_http_status(200)
      json = JSON.parse(response.body)
      expect(json['todos'].size).to eq todos.size
    end
  end

  describe 'POST /api/todos' do
    it 'todoが登録できていること' do
      todos = Todo.all

      expect do
        post api_todos_path, params: { todo: { name: 'todo100' } }
      end.to change { todos.size }.by(1)
      expect(response).to have_http_status(201)
    end
  end

  describe 'DELETE /api/todo' do
    let(:get_todos) do
      get api_todos_path
      JSON.parse(response.body)['todos']
    end

    it 'todoが削除できていること' do
      todos = Todo.all

      expect  do
        delete api_todo_path(get_todos[0]['id'])
      end.to change { todos.size }.by(-1)
      expect(response).to have_http_status(204)
    end
  end

  describe 'PUT /api/todo' do
    let(:todo) { FactoryBot.create(:todo, name: 'old_name') }
    it 'todoの名前が更新できていること' do
      put api_todo_path(todo.id), params: { todo: { name: 'new_name' } }
      json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(json['todo']['name']).to eq 'new_name'
    end
  end
end
