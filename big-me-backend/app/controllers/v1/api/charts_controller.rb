class V1::Api::ChartsController < ApplicationController
    def index
        charts = Chart.all
        render json: charts
    end

    def create
        chart = Chart.new(chart_params)
        if chart.save 
            render json: chart, status: :accepted
        else
            render json: {errors: chart.errors.full_messages}, status: :unprocessible_entity
        end
    end

    private 
    
    def chart_params
        params.require(chart).permit(:title, :content, :question_1, :question_2, :question_3, :question_4, :question_5, :question_6, :question_7, :question_8, :question_9, :question_10)
    end
    
    
end
