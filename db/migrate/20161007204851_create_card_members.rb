class CreateCardMembers < ActiveRecord::Migration[5.0]
  def change
    create_table :card_members do |t|
      t.references :member
      t.references :card
      t.timestamps
    end
  end
end
