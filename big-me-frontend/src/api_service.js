 class ApiService {
     constructor() {
        this.baseUrl = "http://localhost:3000/api/v1"
    }

    newChart(charts) {
        return fetch(this.baseUrl + "/charts", {
            method: "POST",
            body: charts
        })
        .then(response => response.json())
        .then(charts => {
            console.log("charts")
        })
    }


}