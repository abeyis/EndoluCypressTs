import LoginByEmailApi from "../api/login/LoginByEmailApi";
import UsercartsList from "../api/login/UsercartsList";
import Schemas from "../models/Schemas";
import User from "../models/User";
import SchemaUtils from "../utils/SchemaValidationUtils";

describe('login and usercarts (sepetim)', () => {
    
    const login=new LoginByEmailApi()
    const user =new User();
    const carts=new UsercartsList();
    const schema=new Schemas()
    const utils=new SchemaUtils()
    it('login and token', () => {
        login.createToken(user,user.getEmail())
        .then((response)=>{
            expect(response.status).to.be.equal(200)
            user.setToken(response.body.data.token)
            cy.log(response.body.data.token)
            expect(utils.getSchema(schema.getLoginResponseSchema,response)).to.be.true
        })
    });

    it('usercarts list (sepetim)', () => {
        carts.usercarts(user)
        .then((response)=>{
            expect(response.status).to.be.equal(200)
            cy.log(response.body)
        })
    });

});