class Api::V1::MoodsController < ApplicationController
    def index
        moods = Mood.all
        render json: MoodSerializer.new(moods)
    end
    
end
