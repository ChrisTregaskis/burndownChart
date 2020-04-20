var ctx = document.getElementById('burndownCanvas').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        datasets: [{
            label: 'Best Case',
            backgroundColor: 'rgb(255, 99, 132, 0.1)',
            borderColor: 'rgb(255, 99, 132)',
            data: [83, 55, 27, 0]
        },
        {
            label: 'Actual',
            backgroundColor: 'rgb(39, 174, 96, 0.4)',
            borderColor: 'rgb(39, 174, 96)',
            data: [83, 61]
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    min: 0, // minimum value
                    max: 100 // maximum value
                }
            }]
        }
    }

});

