import User from "../../models/User";

export default class GetUserOrders{
    
    orderUser(user:User){

        return cy.request({
            method:'POST',
            url:'/api/orders/get-user-orders',
            body:{
                "page":1,
                "pageSize":20,
                "orderBy":1
            },
            headers:{
                "Authorization" : `Bearer ${user.getToken()}`,
                "Content-Type" : "application/json"
            }
        })
    }
}