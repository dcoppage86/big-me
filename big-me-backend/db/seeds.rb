# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Mood.destroy_all

mood = Mood.create([
    {feeling: "Happy", image_url: "https://ibb.co/KjVSs1H"},
    {feeling: "Sad", image_url: "https://ibb.co/tCmkgxY "},
    {feeling: "Frustrated", image_url: "https://ibb.co/C7b5Z4r"},
    {feeling: "Angry", image_url: "https://ibb.co/MDb1cQD, image_url:"},
    {feeling: "Excited", image_url: "https://ibb.co/JmdNkCT"},
    {feeling: "Nervous", image_url: "https://ibb.co/wKsMGbG"},
    {feeling: "Unwell", image_url: "https://ibb.co/QvgYztK"},
    {feeling: "Standoffish", image_url: "https://ibb.co/0Q4zwrM"}])
   
