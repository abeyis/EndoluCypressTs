import User from '../../models/User'
import { faker } from '@faker-js/faker';

export default class RegisterByEmail{
    confirmUser(user : User){
        return cy.request({
            method:'POST',
            url:'/api/Auth/registerbymail',
            headers:{
                "Authorization" : `Bearer ${user.getToken()}`,
                "Content-Type" : "application/json"
            },
            body:{
                email:faker.internet.email(),
                username:user.getUsername(),
                firstName:user.getFirstName(),
                lastName:user.getLastName(),
                securityCode:user.getSecurityCode(),
                test:user.getTest()
            },
          

        })
    }
}