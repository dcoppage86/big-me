 class ApiService {
     constructor() {
        this.baseUrl = "http://localhost:3000"
    }

     fetchChart() {
        return fetch(this.baseUrl + "/charts")
        .then(response => response.json())
        .then(charts => {
            console.log(charts);
        })
    }


}