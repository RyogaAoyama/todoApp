class Api::TodosController < ApplicationController
  before_action :current_todo, only: [:update, :destroy]
  # GET /todos
  def index
    @todos = Todo.order('created_at DESC')
  end

  # POST /todos
  def create
    @todo = Todo.new(todo_params)

    if @todo.save
      render :show status: :created
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # PUT /todos/:id
  def update
    if @todo.update(todo_params)
      render :show, status: :ok
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # DELETE /todos/:id
  def destroy
    @todo.destroy
  end

  private

  def todo_params
    params.fetch(:todo, {}).permit(:name, :isDone)
  end

  def current_todo
    @todo = Todo.find(params[:id])
  end
end
