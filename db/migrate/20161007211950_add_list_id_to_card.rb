class AddListIdToCard < ActiveRecord::Migration[5.0]
  def change
    add_column :cards, :list_id, :integer, foreign_key: true
  end
end
