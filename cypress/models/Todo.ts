import { fa, faker } from '@faker-js/faker';
export default class Todo{
    private firstName:string
    private lastName:string
    private email:string
    private password:string
    private confirmPassword:string
    
    constructor(){
        this.firstName = 'SAMET',
        this.lastName ='Code'
        this.email=faker.internet.email()
        this.password= 'ab142790'
        this.confirmPassword = 'ab142790'
    }
    getfirstName(){
        return this.firstName
    }
    getlastname(){
        return this.lastName
    }
    getEmail(){
        return this.email
    }
    getPassword(){
        return this.password
    }
    getConfirmPassword(){
        return this.confirmPassword
    }
    


    


    
}