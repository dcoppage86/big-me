class Api::V1::ChartsController < ApplicationController
    def index
        charts = Chart.all
        render json: ChartSerializer.new(charts)
    end

    def create
        chart = Chart.new(chart_params)
        if chart.save! 
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
        chart = Chart.find(params[:id])
        if chart.update_attributes(params[chart])
          render json: chart, status: :accepted
        else
          render json: {errors: chart.errors.full_messages}
        end
    end

    def destroy
        chart = Chart.find(params[:id])
        if chart.destroy
            render json: chart, status: :accepted
        else
            render json: {errors: chart.errors.full_messages}
        end
    end
    
    

    private 
    
    def chart_params
        params.require(:chart).permit(:title, :content, :date, :mood, :mood_id)
    end

    def set_chart
        chart = Chart.find(params[:id])
    end
    
    
end
