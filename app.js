import { purchaseFrequency, coolFactor, customersByGender } from './data-utils.js';

const purchases = purchaseFrequency();


console.log(purchases);


const labels = 
    Object.keys(purchases);


const data = {
    labels: labels,
    datasets: [{
        label: 'Purchase Frequency of customers',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: Object.values(purchases)
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: { maintainAspectRatio:true, responsive:true }
};

// eslint-disable-next-line
const purchaseChart = new Chart( 


    document.getElementById('purchaseChart'),
    config
);

const cool = coolFactor();

console.log(cool);



const labels2 = 
    Object.keys(cool);


const data2 = {
    labels: labels2,
    datasets: [{
        label: 'Cool Factor per customer',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: Object.values(cool)
    }]
};

const config2 = {
    type: 'line',
    data: data2,
    options: { maintainAspectRatio:true, responsive:true }
};

// eslint-disable-next-line
const coolChart = new Chart( 


    document.getElementById('coolChart'),
    config2
);

const gender = customersByGender();

console.log(gender);



const labels3 = 
    Object.keys(gender);


const data3 = {
    labels: labels3,
    datasets: [{
        label: 'Gender of Customers',
        backgroundColor: ['beige', 'orange', 'yellow', 'green', 'purple', 'blue', 'violet', 'red'], 
        borderColor: 'rgb(255, 99, 132)',
        data: Object.values(gender)
    }]
};

const config3 = {
    type: 'pie',
    data: data3,
    options: { maintainAspectRatio:true, responsive:true }
};

// eslint-disable-next-line
const genderChart = new Chart( 


    document.getElementById('genderChart'),
    config3
);


