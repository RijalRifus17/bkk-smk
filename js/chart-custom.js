  var chartColors = {
      red: 'rgb(255, 99, 132)',
      orange: 'rgb(255, 159, 64)',
      yellow: 'rgb(255, 205, 86)',
      green: 'rgb(75, 192, 192)',
      blue: 'rgb(54, 162, 235)',
      purple: 'rgb(153, 102, 255)',
      grey: 'rgb(201, 203, 207)'
  };
  $(document).ready(function () {
      var barChartData = {
          labels: [
              'Akuntansi', 'Administrasi Perkantoran', 'Pemasaran', 'Teknik Komputer Jaringan', 'Rekayasa Perankat Lunak'
          ],
          datasets: [{
              label: 'Bekerja',
              backgroundColor: chartColors.red,
              stack: 'Stack 0',
              data: [
                  6, 0, 1, 4, 1, 1
              ]
          }, {
              label: 'Kuliah',
              backgroundColor: chartColors.blue,
              stack: 'Stack 0',
              data: [
                  4, 0, 0, 1, 0, 0
              ]
          }, {
              label: 'Wirausaha',
              backgroundColor: chartColors.green,
              stack: 'Stack 0',
              data: [
                  0, 0, 0, 0, 0, 0
              ]
          }, {
              label: 'Tidak Bekerja',
              backgroundColor: chartColors.grey,
              stack: 'Stack 0',
              data: [
                  7, 0, 2, 0, 0, 1
              ]
          }]

      };
      window.onload = function () {
          var ctx = document.getElementById('canvas').getContext('2d');
          window.myBar = new Chart(ctx, {
              type: 'horizontalBar',
              data: barChartData,
              options: {
                  title: {
                      display: true,
                      text: 'Statistik Alumni SMKN 1 Purbalingga'
                  },
                  tooltips: {
                      mode: 'index',
                      intersect: false
                  },
                  responsive: true,
                  scales: {
                      xAxes: [{
                          stacked: true,
                          ticks: {
                              min: 0,
                              stepSize: 20
                          }
                      }],
                      yAxes: [{
                          stacked: true,
                      }]
                  }
              }
          });
      };
  });