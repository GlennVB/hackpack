class CreateAttachments < ActiveRecord::Migration
  def change
    create_table :attachments do |t|
      t.string :original
      t.string :file_type
      t.text :description
      t.integer :project_id

      t.timestamps null: false
    end
  end
end
