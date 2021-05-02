BIG ME

This will allow your sensory challenged child to show you how they are feeling with the expressions. Alongside there will be a form to fill out that you can provide to your therapist or keep for personal records. A user will be able to login and fill out their charts daily and save them. 

*User*

has_many :charts
has_many :feelings

username:string
email:string
password:password_digest
child_name:string

*Chart*

belongs_to :user

name:string
content




*Chart Form*

1. What special power are we feeling today?
2. What could we do today to be our best BigMe?
3. What would be an awesome BigMe Reward?
4. What is a green zone feeling today?
5. What is a yellow zone feeling today?
6. What is a blue zone feeling today?
7. What is a red zone feeling today?
8. What is the hardest thing you had to do yesterday?
9. What is the best thing you did yesterday?
10. 
