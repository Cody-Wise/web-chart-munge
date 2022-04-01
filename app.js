import { purchaseFrequency } from './data-utils.js';

const purchases = purchaseFrequency();


const labels = 
    Object.keys(purchases);


const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: Object.values(purchases)
    }]
};

const config = {
    type: 'line',
    data: data,
    options: { maintainAspectRatio:true, responsive:true }
};

// eslint-disable-next-line
const myChart = new Chart( 


    document.getElementById('myChart'),
    config
);


