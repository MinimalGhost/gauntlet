class CreateInteractions < ActiveRecord::Migration[5.1]
  def change
    create_table :interactions do |t|
      t.string :question
      t.string :answer
      t.references :interview, foreign_key: true

      t.timestamps
    end
  end
end
