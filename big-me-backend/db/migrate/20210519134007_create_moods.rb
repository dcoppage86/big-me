class CreateMoods < ActiveRecord::Migration[6.0]
  def change
    create_table :moods do |t|
      t.string :feeling
      t.string :image_url
    

      t.timestamps
    end
  end
end
