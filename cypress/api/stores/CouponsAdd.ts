import Store from "../../models/Store";
import { Faker, faker } from "@faker-js/faker";

export default class CouponsAdd{

    getCouponsAdd(store:Store){
        return cy.request({
            method:'POST',
            url:'/api/Coupons/add',
            headers:{
                Authorization:`Bearer ${store.getStoryToken()}`,
                "Content-Type" : "application/json"
            },
            body:{
                "Code": faker.datatype.number({min:10000000,max:99999999}),
                "Title": `samet ${faker.datatype.number({min:10,max:99})}`,
                "Guid": null,
                "DiscountType": 1,
                "DiscountAmount": 25,
                "PreRequirementType": 2,
                "PreRequirementAmount": 1000,
                "ApplyForWhom": null,
                "UsageLimitType": 2,
                "usageLimitAmount": 1,
                "StartDate": "2023-12-26 15:56:00.000",
                "EndDate": "2024-03-29 23:59:00.000",
                "Active": true
            }
        })
    }
}