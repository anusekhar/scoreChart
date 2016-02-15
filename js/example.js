$(document).ready(function() {

  var exampleBarChartData = {
    "datasets": {
      "values": [],
      "labels": [],
      "color": "red"
    },
    "title": "Example Bar Chart",
    "noY": true,
    "height": "300px",
    "width": "500px",
    "background": "gold",
    "shadowDepth": "3"
  };
  $.getJSON("js/drivers.json", function(data) {
    for (var i = 0; i < data.length; i++) {
      exampleBarChartData.datasets.labels[i] = data[i].driver_name; // set all labels for drivers
    }
  });
  $.getJSON("js/data.json", function(data) {
    for (var i = 0; i < exampleBarChartData.datasets.labels.length; i++) {
      var total = 0;
      var a = i + 1;
      for (var j = 0; j < data.length; j++) {
        var b = parseInt(data[j].driver_id);
        if (a == b) {
          total += parseInt(data[j].breaking) +
            parseInt(data[j].accelerate) +
            parseInt(data[j].stop) +
            parseInt(data[j].crash) +
            parseInt(data[j].curve);
        }
      }
      exampleBarChartData.datasets.values[i] = total; // set the scores of each driver
    }
    MaterialCharts.bar("#bar-chart-example", exampleBarChartData)
  });
});
