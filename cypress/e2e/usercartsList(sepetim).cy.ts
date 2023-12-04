import LoginBy_sametendoluEmail from "../api/login/LoginBy_sametendoluEmail";
import UsercartsList from "../api/login/UsercartsList";
import User from "../models/User";

describe('login and usercarts (sepetim)', () => {
    
    const login=new LoginBy_sametendoluEmail();
    const user =new User();
    const carts=new UsercartsList();

    it('login and token', () => {
        login.createToken(user)
        .then((response)=>{
            expect(response.status).to.be.equal(200)
            user.setToken(response.body.data.token)
            cy.log(response.body.data.token)
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