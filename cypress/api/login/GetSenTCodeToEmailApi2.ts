import User1 from '../../models/User1'

export default class GetSentCodeToEmailApi2 {
    getCode(user : User1){
       return cy.request({
            method:'GET',
            url: 'https://api.mail7.io/inbox',
            qs:{"apikey": "35cf48ac-5a39-449f-b552-fd432ffa77cc",
            "mail7apisecret": "df8d9483-3305-43d4-996a-91cc7562ffcf","to":"smtendolu"}
        });
    }
}