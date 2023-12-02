import User1 from "../../models/User1";

export default class SendCode{

    createSecurityCode(user:User1){
        return cy.request({
            method:'POST',
            url:'/api/Auth/send-code',
            body:{
                identifier:user.getIdentifier(),
                isMail:user.getIsmail(),
                countryId:user.getCountryId()
            }
        });

    }

}