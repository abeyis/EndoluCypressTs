import LoginByEmailApi from "../api/login/LoginByEmailApi";
import GetAllStore from "../api/stores/GetAllStore";
import Schemas from "../models/Schemas";
import Store from "../models/Store";
import User from "../models/User";
import SchemaUtils from "../utils/SchemaValidationUtils";



describe('Get All Store (Magazalarım)', () => {

    const login=new LoginByEmailApi()
    const user=new User()
    const store=new Store()
    const allStore=new GetAllStore()
    const util=new SchemaUtils()
    const schema=new Schemas()
    
    beforeEach(function(){
        cy.fixture('LoginEmail').as('data');
    });

    it('Login and Token', function(){
        login.createToken(user, this.data.email)
        .then((response)=>{
            expect(response.status).to.be.equal(200)
            store.setToken(response.body.data.token)
        })
    });

    it('Get Store (Mağazam)', () => {
        allStore.getStore(store)
        .then((response)=>{
            expect(response.status).to.be.eql(200)
            console.log(response)
            expect(response.body.data[0].storeName).to.be.equals('Klasik Araba Tutkunları')
            expect(util.getSchema(schema.getStoreResponseSchema(),response))
        })
    });

});