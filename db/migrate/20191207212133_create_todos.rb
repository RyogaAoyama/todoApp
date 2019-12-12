class CreateTodos < ActiveRecord::Migration[6.0]
  def change
    create_table :todos do |t|
      t.string :name, null: false
      t.boolean :is_done, default: false

      t.timestamps
    end
  end
end
