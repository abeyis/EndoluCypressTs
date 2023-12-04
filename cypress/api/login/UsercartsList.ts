import User from "../../models/User";

export default class UsercartsList{

    usercarts(user:User){
        return cy.request({
            method:'POST',
            url:'/api/usercarts/list',
            body:{
                "uuid": "c27c6c30-91bb-11ee-8cb8-5d8b1224a5ed"
            },
            headers:{
                "Authorization":`Bearer ${user.getToken()}`,
                "Content-Type" : "application/json"
            }
        })
    }
}