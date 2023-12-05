
import GetUserOrders from "../api/user/GetUserOrders";
import LoginBy_sametendoluEmail from "../api/login/LoginBy_sametendoluEmail";
import User from "../models/User";


describe('get user order (siparişlerim)', () => {

    const login=new LoginBy_sametendoluEmail();
    const user=new User();
    const order=new GetUserOrders();

    it('login and get token', () => {
        login.createToken(user)
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