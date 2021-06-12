class ChartSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :content, :date, :mood_id, :mood
end
