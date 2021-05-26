class Api::V1::ChartsController < ApplicationController
    def index
        charts = Chart.all
        render json: ChartSerializer.new(charts)
    end

    def create
        chart = Chart.new(chart_params)
        if chart.save 
            render json: chart, status: :accepted
        else
            render json: {errors: chart.errors.full_messages}, status: :unprocessible_entity
        end
    end

    def show
        chart = Chart.find_by(id: params[:id])
        render json: chart
    end
    

    private 
    
    def chart_params
        params.require(:chart).permit(:content_1, :content_2, :content_3, :content_4, :content_5, :content_6, :content_7, :content_8, :content_9, :content_10, :question_1, :question_2, :question_3, :question_4, :question_5, :question_6, :question_7, :question_8, :question_9, :question_10, :mood_id)
    end
    
    
end
