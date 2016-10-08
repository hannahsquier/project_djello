class CreateCards < ActiveRecord::Migration[5.0]
  def change
    create_table :cards do |t|
      t.string :name
      t.text :description
      t.boolean :completed, default: false
      t.timestamps
    end
  end
end
