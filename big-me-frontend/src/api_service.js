 class ApiService {
     constructor() {
        this.baseUrl = "http://localhost:3000/api/v1"
        this.chartsUrl = "http://localhost:3000/api/v1/charts"
    }

    getCharts() {
        return fetch(this.chartsUrl)
            .then(response => response.json())
            .then(charts => {
                // let charts = Chart.all
                charts.forEach(chart => {
                
                    const newChart = new Chart(chart)
    
                    document.querySelector('#chart-container').innerHTML += newChart.renderChartCard();
                })
                return charts
        })
    }


}