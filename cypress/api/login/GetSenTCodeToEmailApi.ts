import User from '../../models/User'
import BrowserUtils from '../../utils/BrowserUtils';

export default class GetSentCodeToEmailApi {
    
    getCode(user : User){
        const browserUtils=new BrowserUtils();
       return cy.request({
            method:'GET',
            url: 'https://api.mail7.io/inbox',
            qs:{"apikey": "35cf48ac-5a39-449f-b552-fd432ffa77cc",
            "mail7apisecret": "df8d9483-3305-43d4-996a-91cc7562ffcf",
            "to":browserUtils.getNameOfEmail(user.getEmail())}
        });
    }
}