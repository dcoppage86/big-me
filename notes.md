BIG ME

This will allow your sensory challenged child to show you how they are feeling with the expressions. Alongside there will be a form to fill out that you can provide to your therapist or keep for personal records. A user will be able to login and fill out their charts daily and save them. 

*User*

has_many :charts

username:string
email:string
password:password_digest
child_name:string

*Chart*

has_many :moods

name:string
content:text

*Mood*

belongs_to :chart

feeling:string
image_url:string

*Chart Form*

What special power are we feeling today?
What did you dream about?
What could we do today to be our best BigMe?
What would be an awesome BigMe Reward?
What is a green zone feeling today?
What is a yellow zone feeling today?
What is a blue zone feeling today?
What is a red zone feeling today?
What is the hardest thing you had to do yesterday?
What is the best thing you did yesterday?

