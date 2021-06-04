# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Mood.destroy_all

mood = Mood.create([
    {feeling: "Happy"},
    {feeling: "Sad"},
    {feeling: "Frustrated"},
    {feeling: "Angry"},
    {feeling: "Excited"},
    {feeling: "Nervous"},
    {feeling: "Unwell"},
    {feeling: "Standoffish"}])
   
chart = Chart.create([
    {title: "Today was a fantastic day!", content: "We rode our bikes in the park and Fynleigh was looked amazing and bright, The look of pure happiness on her face was incredible. These are the days that make me feeling like im doing a great job", date: "2021-05-31", mood_id: 1}
])