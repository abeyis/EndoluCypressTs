import User from "../../models/User";

export default class SendSecurityCodeForRegister{

    sendCode(user:User){
        
        return cy.request({
            method:'POST',
            url:"/api/Auth/sendsecuritycodeaftercheckingmailforregister",
            body:{
                email:user.getEmail(),
                test:user.getTest()
            }

        })
    }
}