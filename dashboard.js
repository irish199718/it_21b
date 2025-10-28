 class radarChart{
        constructor(canvasId, dataUrl){
            this.canvasId = canvasId;
            this.dataUrl = dataUrl;
            this.chart = null;
        }

        renderChart(data){
            const ctx = document.getElementById(this.canvasId).getContext("2d");
            
            //
            this.chart = new Chart(ctx,{
                type:"line",
                data:{
                    labels: data.labels,
                    datasets:[{
                        label:"Monthly Data",
                        data: data.values,
                        borderwidth:1
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
 
        async fetchData(){
            try{
                const response  = await fetch(this.dataUrl);

                if(!response.ok) throw new Error(`Failed to load data:${response.statusText}`);

                const data = await response.json();
                return data;


            }catch(error) {
                console.error("Error fetching data:", error);
                return null;

            }
        }

        asnyc init(){
            const data = await this.fetchData();
            if(data){
                this.renderChart(data);
            }
        }
    document.addEventListener("DOMcontentLoaded", () =>{
        const chart = new LineChart("lineChart","linedata.json");
        chart.init();
    });
</script>
    
</body>
</html>
      