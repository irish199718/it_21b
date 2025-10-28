class LineChart {
      constructor(canvasId, dataUrl) {
        this.canvasId = canvasId;
        this.dataUrl = dataUrl;
        this.chart = null;
      }

      renderChart(data) {
        const ctx = document.getElementById(this.canvasId).getContext("2d");

        this.chart = new Chart(ctx, {
          type: "line",
          data: {
            labels: data.labels,
            datasets: [{
              label: "Monthly Data",
              data: data.values,
              borderWidth: 1 
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }

      async fetchData() {
        try {
          const response = await fetch(this.dataUrl);
          if (!response.ok) throw new Error(`Failed to load data: ${response.statusText}`);
          const data = await response.json();
          return data;
        } catch (error) {
          console.error("Error fetching data:", error);
          return null;
        }
      }

      async init() { 
        const data = await this.fetchData();
        if (data) {
          this.renderChart(data);
        }
      }
    }

    document.addEventListener("DOMContentLoaded", () => { 
      const chart = new LineChart("myChart", "linedata.json");
      chart.init();
    });


     class radarchart {
        constructor(canvasId, dataUrl) {
            this.canvasId = canvasId;
            this.dataUrl = dataUrl;
            this.chart = null;
        }

        renderChart(data) {
            const ctx = document.getElementById(this.canvasId).getContext("2d");

            this.chart = new Chart(ctx, {
                type: "radar",
                data: {
                    // Labels
                    labels: data.labels,
                    // Datasets
                    datasets: data.datasets
                },
                options: {  // Fixed capitalization here
                    responsive: true,
                    plugins: {
                        legend: {
                            position: "top"
                        },
                        title: {
                            display: true,
                            // Title text
                            text: "Radar Chart"
                        }
                    },
                    scales: {
                        r: {
                            angleLines: { display: true },  // Fixed capitalization here
                            suggestedMin: 0,
                            suggestedMax: 100
                        }
                    }
                }
            });
        }

        async fetchData() {
            try {
                const response = await fetch(this.dataUrl);
                if (!response.ok) throw new Error(`Failed to load data: ${response.statusText}`);  // Fixed the template literal syntax

                const data = await response.json();
                return data;
            } catch (error) {
                console.error("Error fetching data: ", error);
                return null;
            }
        }

        async init() {
            const data = await this.fetchData();
            if (data) this.renderChart(data);
        }
    }
        
    document.addEventListener("DOMContentLoaded", () => {
        const chart = new radarchart("radarChart", "radarData.json");
        chart.init();
    });