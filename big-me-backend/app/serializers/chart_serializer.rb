class ChartSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :content, :date, :mood, :mood_id
end
