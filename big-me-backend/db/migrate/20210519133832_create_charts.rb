class CreateCharts < ActiveRecord::Migration[6.0]
  def change
    create_table :charts do |t|
      t.string :title
      t.string :content
      t.datetime :datetime
      t.belongs_to :mood, null: false, foreign_key: true

      t.timestamps
    end
  end
end
