class Mood < ApplicationRecord
has_many :charts, dependent: :destroy
end
