# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180420141000) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "algorithms", force: :cascade do |t|
    t.text "problem"
    t.text "solution"
    t.bigint "interview_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["interview_id"], name: "index_algorithms_on_interview_id"
  end

  create_table "companies", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "interactions", force: :cascade do |t|
    t.string "question"
    t.string "answer"
    t.bigint "interview_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["interview_id"], name: "index_interactions_on_interview_id"
  end

  create_table "interviews", force: :cascade do |t|
    t.string "contact"
    t.string "format"
    t.integer "round"
    t.bigint "user_id"
    t.bigint "company_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_interviews_on_company_id"
    t.index ["user_id"], name: "index_interviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "algorithms", "interviews"
  add_foreign_key "interactions", "interviews"
  add_foreign_key "interviews", "companies"
  add_foreign_key "interviews", "users"
end
