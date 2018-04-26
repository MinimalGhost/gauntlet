class CreateInterviews < ActiveRecord::Migration[5.1]
  def change
    create_table :interviews do |t|
      t.string :contact
      t.string :format
      t.integer :round
      t.references :user, foreign_key: true
      t.references :company, foreign_key: true

      t.timestamps
    end
  end
end
