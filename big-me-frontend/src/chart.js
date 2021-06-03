class Chart {

    constructor(id, chartAttributes) {
        this.id = id
        this.title = chartAttributes.title
        this.content = chartAttributes.content
        this.date = chartAttributes.date
        this.mood = chartAttributes.mood
        Chart.all.push(this)
    }

    renderChartCard() {
        return `
            <div data-id=${this.id} class="bg-blue-300 rounded-lg border shadow-lg p-10">
                <strong>${this.date}: ${this.title}</strong>
                <p>${this.content}</p>
                <br>
                <p hidden>${this.mood_id}</p>
                <img src=${this.mood.image_url} height= 100 width=100></img>
                <button data-id=${this.id} class="submit bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-full"> Edit </button>
            </div>`;
    }


}

Chart.all = [];
