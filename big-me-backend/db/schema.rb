# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_05_19_134007) do

  create_table "charts", force: :cascade do |t|
    t.text "content_1"
    t.text "content_2"
    t.text "content_3"
    t.text "content_4"
    t.text "content_5"
    t.text "content_6"
    t.text "content_7"
    t.text "content_8"
    t.text "content_9"
    t.text "content_10"
    t.string "question_1"
    t.string "question_2"
    t.string "question_3"
    t.string "question_4"
    t.string "question_5"
    t.string "question_6"
    t.string "question_7"
    t.string "question_8"
    t.string "question_9"
    t.string "question_10"
    t.integer "mood_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["mood_id"], name: "index_charts_on_mood_id"
  end

  create_table "moods", force: :cascade do |t|
    t.string "feeling"
    t.string "image_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "charts", "moods"
end
