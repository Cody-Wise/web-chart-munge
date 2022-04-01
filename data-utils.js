import { customers } from './data.js';

export function purchaseFrequency(){

    const countMap = {

    };

    for (let customer of customers) {
        const frequency = customer.purchase_frequency;

        if (countMap[frequency]){

            countMap[frequency]++;

        } else {
            countMap[frequency] = 1;
        }
    }

    return countMap;

}

export function coolFactor(){

    const countMap = {

    };

    for (let customer of customers) {
        const frequency = customer.cool_factor;

        if (countMap[frequency]){

            countMap[frequency]++;

        } else {
            countMap[frequency] = 1;
        }
    }

    return countMap;

}

export function customersByGender(){

    const countMap = {

    };

    for (let customer of customers) {
        let frequency = customer.gender;

        if (frequency === 'Non-binary'){
            frequency = 'nonBinary';
        }

        if (countMap[frequency]){

            countMap[frequency]++;

        } else {
            countMap[frequency] = 1;
        }
    }

    return countMap;

}






