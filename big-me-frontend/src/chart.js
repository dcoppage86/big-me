class Chart {
    static all = []

    constructor(chart) {
        this.id = chart.id
        this.title = chart.title
        this.content = chart.content
        this.date = chart.date
        this.mood = chart.mood
        Chart.all.push(this)
    };

    static findById(id) {
        return this.all.find(chart => chart.id === id)
    };

    renderChartCard() {
        return `
            <div data-id=${this.id} class="bg-blue-300 rounded-lg border shadow-lg p-10">
                <strong>${this.date}: ${this.title}</strong>
                <p>${this.content}</p>
                <br>
                <p hidden>${this.mood_id}</p>
                <button data-id=${this.id} class="submit bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-full"> Edit </button>
            </div>`;
    };


}
