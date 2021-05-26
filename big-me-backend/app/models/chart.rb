class Chart < ApplicationRecord
belongs_to :mood, dependent: :destroy
end
