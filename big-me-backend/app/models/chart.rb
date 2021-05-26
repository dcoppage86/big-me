class Chart < ApplicationRecord
belongs_to :mood, dependant => destroy
end
