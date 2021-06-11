 class ApiService {
     constructor() {
        this.chartsUrl = "http://localhost:3000/api/v1/charts"
    }

    getCharts() {
        return fetch(this.chartsUrl)
            .then(response => response.json())
            .then(charts => {
                // let charts = Chart.all
                charts.data.forEach(chart => {
                
                    const newChart = new Chart(chart)
    
                    document.querySelector('#chart-container').innerHTML += newChart.renderChartCard();
                })
                return charts
        })
    }

    postCharts(title, content, date, mood_id) {
        const bodyData = {title, content, date, mood_id}
        return fetch(this.chartsUrl, {
                // POST request
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(bodyData)
            })
            .then(response => response.json())
            .then(chart => {
                let newChart = new Chart(chart)
    
                const newChartCard = document.querySelector('#chart-container').innerHTML += newChart.renderChartCard()
            })
    }

    patchChart(chart) {
        return fetch(this.chartsUrl + `/${chart.id}`,{
                method: 'PATCH',
                headers: {
                    "Content-Type": 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    chart
                })
            })
            .then(response => response.json())
    }

    deleteChart(id) {
        return fetch(this.chartsUrl + `/${id}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
    }

}