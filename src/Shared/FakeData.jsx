import {faker} from '@faker-js/faker';

function createRandomCarList() {
    return {
        name:faker.vehicle.vehicle(),
        fuelType:faker.vehicle.fuel(),
        model:faker.vehicle.model(),
        type:faker.vehicle.type(),
        image:'https://www.bmw-special-sales.com/content/dam/bmw/marketBMWCOM/bmw-special-sales_com/common/authority/2022/bmw-css-authority-vehicle-ms-range-5-series.jpg',
        kilometers:10000,
        gearType:'Automatic',
        price:faker.finance.amount({min:3000,max:20000}),
    }
}

const carList=faker.helpers.multiple(createRandomCarList, {
    count:7
})

export default {
    carList
}