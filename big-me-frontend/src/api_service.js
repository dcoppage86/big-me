 class ApiService {
     constructor() {
        this.baseUrl = "http://localhost:3000/api/v1"
    }

    getCharts() {
        return fetch(this.baseUrl + "/charts")
        .then(response => response.json())
        .then(charts => {
            console.log(charts)
        })
    }


}