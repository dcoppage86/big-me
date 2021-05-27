class ChartSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :content, :datetime, :mood, :mood_id
end
