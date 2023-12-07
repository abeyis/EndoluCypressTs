import LoginByEmailApi from "../api/login/LoginByEmailApi";
import StoreApplicationAdd from "../api/login/StoreApplicationAdd";
import User from "../models/User";
import Store from "../models/Store";
import SchemaUtils from "../utils/SchemaUtils";
import Schemas from "../models/Schemas";

describe('Store Application Add (Mağaza Oluşturma)', () => {
    
    const login=new LoginByEmailApi();
    const user=new User();
    const store=new Store();
    const add=new StoreApplicationAdd()
    const util=new SchemaUtils()
    const schema=new Schemas()
    
    it('Login and Token', () => {
        
        login.createToken(user,user.getEmail())
        .then((response)=>{
            expect(response.status).to.be.equal(200)
            store.setToken(response.body.data.token)
            cy.log(response.body.data.token)
        })

    });

    it('Store Add', () => {
        
        add.storeAdd(store)
        .then((response)=>{
            expect(response.status).to.be.equal(200)
            expect(response.body.message).to.equal('Mağaza başvurunuz alındı')
            cy.log(response.body)
            expect(util.getSchema(schema.getStoreAddResponseSchema(),response)).to.be.true
        })

    });

});