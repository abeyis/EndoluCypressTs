import User from "../../models/User";


export default class LoginBy_sametendoluEmail{

    createToken(user:User){
        return cy.request({
            method:'POST',
            url:'/api/Auth/loginbymail',
            body:{
                "email": "sametendolu@mail7.io",
                "securityCode": "",
                test:user.getTest()
            }
        })
    }

}