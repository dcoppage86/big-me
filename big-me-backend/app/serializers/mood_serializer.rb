class MoodSerializer
  include FastJsonapi::ObjectSerializer
  attributes :feeling, :image_url
end
