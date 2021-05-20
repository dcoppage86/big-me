 class ApiService {
     constructor() {
        this.baseUrl = "http://localhost:3000/api/v1"
    }

    getCharts() {
        return fetch(this.baseUrl + "/charts")
        .then(response => response.json())
        .then(charts => {
            charts.data.forEach(chart => {
                const chartMarkup = `
                    <div data-id=${chart.id}>
                        <h3>${chart.attributes.title}</h3>
                        <p>${chart.attributes.question_1}</p>
                        <br>
                        <p>${chart.attributes.question_2}</p>
                        <br>
                        <p>${chart.attributes.question_3}</p>
                        <br>
                        <p>${chart.attributes.question_4}</p>
                        <br>
                        <p>${chart.attributes.question_5}</p>
                        <br>
                        <p>${chart.attributes.question_6}</p>
                        <br>
                        <p>${chart.attributes.question_7}</p>
                        <br>
                        <p>${chart.attributes.question_8}</p>
                        <br>
                        <p>${chart.attributes.question_9}</p>
                        <br>
                        <p>${chart.attributes.question_10}</p>
                    </div>`;
    
                document.querySelector('#chart-container').innerHTML += chartMarkup
            
        })
    })


}}