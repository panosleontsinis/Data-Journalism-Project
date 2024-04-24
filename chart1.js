
const data = {
    labels: ['United States', 'China', 'Japan', 'Brazil', 'France', 'India'],
    datasets: [{
        label: 'Inflation rate Amongst Global Economies',
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Red
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: [2.8, 1, 2.2, 4.1, 2.4, 4.6]
    }]
};


const options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};


const ctx = document.getElementById('myChart').getContext('2d');


const myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});

