class Api::V1::MoodsController < ApplicationController
    def index
        moods = Mood.all
        render json: MoodSerializer.new(moods)
    end

    def create 
        mood = Mood.new(mood_params)
        if mood.save
            render json: mood, status: :accepted
        else
            render json: {errors: mood.errors.full_messages}, status: :unprocessible_entity
        end
    end

    private

    def mood_params
        params.require(:mood).permit(:feeling, :image_url)
    end
end
