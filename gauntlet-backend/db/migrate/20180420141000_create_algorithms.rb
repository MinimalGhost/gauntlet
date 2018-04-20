class CreateAlgorithms < ActiveRecord::Migration[5.1]
  def change
    create_table :algorithms do |t|
      t.text :problem
      t.text :solution
      t.references :interview, foreign_key: true

      t.timestamps
    end
  end
end
