class Chart {

    static all = []

    constructor(chart) {
        this.id = chart.id
        this.title = chart.attributes.title
        this.content = chart.attributes.content
        this.date = chart.attributes.date
        this.mood = chart.attributes.mood
        this.mood_id = chart.attributes.mood_id
        this.showAllCharts()
        Chart.all.push(this)

    };

    static findById(id) {
        return this.all.find(chart => chart.id === id)
    };

    static filterMood() {
        return this.all.filter(chart => chart.mood_id === parseInt(e.target.value))
    }

    

    showAllCharts() {
        return document.querySelector('#chart-container').innerHTML += this.renderChartCard();
    }

    showEdit() {
        return document.querySelector('#edit-chart-container').innerHTML += this.renderEditChart();
    }

    renderChartCard() {
        return `
            <div data-id=${this.id} id="chart-${this.id}" class="bg-blue-300 rounded-lg border shadow-lg p-10">
                <strong>${this.date}: ${this.title}</strong>
                <p>${this.content}</p>
                <br>
                <img src=${this.mood.image_url} height=50 width=50>
                <br>
                <p>${this.mood.feeling}</p>
                <br>
                <p hidden>${this.mood_id}</p>
                <button data-id=${this.id} class="edit-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-full"> Edit </button><button data-id=${this.id} class="dlt-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-full">Delete</button>
            </div>`;
    };

    renderEditChart() {
        return `
        <form data-id=${this.id} >
                <strong>Edit Your Chart</strong>
                <br>
                <br>
                <strong>Title:</strong>
                <br>
                <input id='input-title' type="text" name="title" value="${this.title}" placeholder="Fill in title..." class="input-text">
                <br>
                <br>
                <strong>Date</strong>
                <p>${this.date}</p>
                <br>
                <strong>How Was Your Day?</strong>
                <br>
                <textarea id='input-content' type="text" name="content" value="" cols="80" rows="8" placeholder="Tell us about your day..." class="input-text">${this.content}</textarea>
                <br>
                <br>
                <strong>${this.mood.feeling}</strong>
                <br>
                <br>
                <input id='edit-btn' type="submit" name="submit" value="Edit Chart" class="submit bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                
            </form>
        `
    }



}