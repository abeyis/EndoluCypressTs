
import GetUserOrders from "../api/login/GetUserOrders";
import LoginByEmailApi from "../api/login/LoginByEmailApi";
import User from "../models/User";


describe('get user order (siparişlerim)', () => {

    const login=new LoginByEmailApi();
    const user=new User();
    const order=new GetUserOrders();

    beforeEach( ()=>{
        cy.fixture('LoginEmail').as('data');
    })

    it('login and get token', function(){
        login.createToken(user,this.data.email)
        .then((response)=>{
            expect(response.status).to.be.eqls(200)
            user.setToken(response.body.data.token)
            cy.log(response.body.data.token)
        })

    });

    it('orders(siparişlerim)', () => {
        order.orderUser(user)
        .then((response)=>{
             expect(response.status).to.be.equal(200)
             cy.log(response.body)
        })
    });
});