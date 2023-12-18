import LoginByEmailApi from "../api/login/LoginByEmailApi"
import GetAllStore from "../api/store/GetAllStore"
import CargoAdd from "../api/stores/CargoAdd";
import Schemas from "../models/Schemas";
import Store from "../models/Store"
import User from "../models/User"
import SchemaUtils from "../utils/SchemaValidationUtils";

describe('addCargo',()=>{
    const login=new LoginByEmailApi()
    const user=new User()
    const store=new Store()
    const allStore=new GetAllStore
    const cargo=new CargoAdd
    const utils=new SchemaUtils()
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
            store.setStoryToken(response.body.data[0].token)
        })
    });
    it('Cargo Add', () => {
        cargo.getCargoAdd(store)
        .then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.message).to.be.equal('Kargo ayarları güncellendi')
            expect(utils.getSchema(schema.getCargoAddResponseSchema(),response))
        })

       
        })
    });
