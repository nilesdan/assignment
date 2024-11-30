function renderChart(data) {
var options = {
    chart: {
      type: 'line'
    },
    series: [{
      name: 'Index',
      data: data.values
    }],
    xaxis: {
      categories: data.years
    },
    title: {
        text: 'World Development Index',
        align: 'center'
    }
};

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();
}


 
