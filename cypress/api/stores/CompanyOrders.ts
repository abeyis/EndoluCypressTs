import Store from "../../models/Store";

export default class CompanyOrders{
    
      getOrders(store:Store){
        return cy.request({
            method:"POST",
            url:("/api/Orders/get-filter-fields"),
            headers:{
                "Authorization" : `Bearer ${store.getStoryToken()}`,
                "Content-Type" : "application/json"
            },
            body:{
                "dateFrom": "2023-12-16 00:00:00.000",
                "dateTo": "2023-12-18 17:19:56.702"
            }
           })
    }
}