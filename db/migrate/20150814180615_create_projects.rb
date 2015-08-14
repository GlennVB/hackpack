class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.string :image
      t.string :punchline
      t.text :description
      t.integer :status
      t.integer :owner_id
      t.integer :assignee_id
      t.integer :parent_id
      t.integer :difficulity

      t.timestamps null: false
    end
  end
end
