class Api::V1::ChartsController < ApplicationController
    # before_action :set_chart, only: [:update, :destroy]

    def index
        charts = Chart.all
        render json: charts
    end

    def create
        chart = Chart.new(chart_params)
        if chart.save
            render json: chart, status: :accepted
        else
            render json: {errors: chart.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        chart = Chart.find_by(id: params[:id])
        render json: chart
    end
    
    def update
        chart = Chart.find_by(id: params[:id])
        if chart && chart.update(chart_params)
          render json: chart, status: :accepted
        else
          render json: {errors: chart.errors.full_messages}
        end
    end

    def destroy
        chart = Chart.find_by(id: params[:id])
        if chart.destroy
            render json: chart, status: :accepted
        else
            render json: {errors: chart.errors.full_messages}
        end
    end
    
    

    private 
    
    def chart_params
        params.require(:chart).permit(:id, :title, :content, :date, :mood, :mood_id)
    end

    def set_chart
        chart = Chart.find_by(params[:id])
    end
    
    
end
