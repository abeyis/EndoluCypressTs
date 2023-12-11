import LoginByEmailApi from "../api/login/LoginByEmailApi";
import GetAllStore from "../api/stores/GetAllStore";
import UpdateStoreInformation from "../api/stores/UpdateStoreInformation";
import Schemas from "../models/Schemas";
import Store from "../models/Store";
import User from "../models/User";
import SchemaUtils from "../utils/SchemaValidationUtils";

describe('Update Store Information', () => {
    
    const login=new LoginByEmailApi()
    const user=new User()
    const store=new Store()
    const allStore=new GetAllStore()
    const util=new SchemaUtils()
    const schema=new Schemas()
    const update=new UpdateStoreInformation()
    
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
            store.setStoryToken(response.body.data[0].token)
            store.setCompanyGuid(response.body.data[0].companyGuid)
            store.setStoreGuid(response.body.data[0].storeGuid)
        })
    });
    
    it('Update Store Information', () => {
        update.getUpdate(store)
        .then((response)=>{
            expect(response.status).to.be.equal(200)
            expect(response.body.success).to.equal(true)
            expect(response.body.message).to.equal(null)
        })
    });
});