import User1 from "../../models/User1";

export default class CheckCode{

    confirmUser(user:User1){
        return cy.request({
            method:'POST',
            url:'/api/Auth/check-code',
            body:{
                identifier:user.getIdentifier(),
                isMail:user.getIsmail(),
                countryId:user.getCountryId(),
                securityCode:user.getSecurityCode()
            }
        })
    }
}