/* chart.js chart examples */

// chart colors
var colors = ['#007bff','#28a745','#444444','#c3e6cb','#dc3545','#6c757d'];

var chBar = document.getElementById("chBar");
var chartData = {
  labels: ["Hp", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed", "Total"],
  datasets: [{
    data: [45, 49, 49, 65, 65, 45, 318],
    backgroundColor: colors[0]
  },
  {
    data: [200, 92, 92, 121, 121, 85, 0],
    backgroundColor: colors[1]
  },
  {
    data: [294, 216, 216, 251, 251, 207, 0],
    backgroundColor: colors[4]
  },
  {
    data: [0, 0, 0, 0, 0, 0, 0],
    backgroundColor: colors[2]
  }]
};

if (chBar) {
  new Chart(chBar, {
  type: 'bar',
  data: chartData,
  options: {
    scales: {
      xAxes: [{
        barPercentage: 0.4,
        categoryPercentage: 0.5
      }],
      yAxes: [{
        ticks: {
          beginAtZero: false
        }
      }]
    },
    legend: {
      display: false
    }
  }
  });
}
var colors = ['#007bff','#28a745','#444444','#c3e6cb','#dc3545','#6c757d'];

var chBar = document.getElementById("chBar004");
var chartData = {
  labels: ["Hp", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed", "Total"],
  datasets: [{
    data: [38, 52, 43, 60, 50, 65, 309],
    backgroundColor: colors[0]
  },
  {
    data: [188, 98, 81, 112, 94, 121, 0],
    backgroundColor: colors[1]
  },
  {
    data: [282, 223, 203, 240, 218, 251, 0],
    backgroundColor: colors[4]
  },
  {
    data: [0, 0, 0, 0, 0, 0, 0],
    backgroundColor: colors[2]
  }]
};

if (chBar) {
  new Chart(chBar, {
  type: 'bar',
  data: chartData,
  options: {
    scales: {
      xAxes: [{
        barPercentage: 0.4,
        categoryPercentage: 0.5
      }],
      yAxes: [{
        ticks: {
          beginAtZero: false
        }
      }]
    },
    legend: {
      display: false
    }
  }
  });
}