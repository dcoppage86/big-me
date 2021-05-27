# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Mood.destroy_all

mood = Mood.create([
    {feeling: "Happy", image_url: "https://i.ibb.co/d0kxphy/1-F601-color.png"},
    {feeling: "Sad", image_url: "https://i.ibb.co/cTgM0C2/1-F625-color.png"},
    {feeling: "Frustrated", image_url: "https://i.ibb.co/0MCjS1w/1-F616-color.png"},
    {feeling: "Angry", image_url: "https://i.ibb.co/VWdCg5W/1-F621-color.png"},
    {feeling: "Excited", image_url: "https://i.ibb.co/TYTZhrG/1-F62-C-color.png"},
    {feeling: "Nervous", image_url: "https://i.ibb.co/FnZdPzw/1-F610-color.png"},
    {feeling: "Unwell", image_url: "https://i.ibb.co/B2pTdFC/1-F912-color.png"},
    {feeling: "Standoffish", image_url: "https://i.ibb.co/rZs48L8/1-F627-color.png"}])

   
    chart = Chart.create([
        {title: "Today was a great day", content: "Today we woke up, had breakfast and got ready for school without a single issue. Since we bought the special edition ASD shoes from the vans store, things have be so much easier in that department. Fyn brushed her hair, brushed her teeth, and despite some light frustration with wearing jeans we were able to navigate better. She even helped make her lunch for school!", date: "May 25, 2021", mood_id: 1}
    ])