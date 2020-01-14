class AddColumnToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :game, :string
    add_column :users, :password, :string
    add_column :users, :playstyle, :string
    add_column :users, :senseOfHumor, :string
    add_column :users, :avatar, :string
    remove_column :users, :age
  end
end
