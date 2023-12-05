import LoginBy_sametendoluEmail from "../api/login/LoginBy_sametendoluEmail";
import GetAllStore from "../api/store/GetAllStore";
import Store from "../models/Store";
import User from "../models/User";


describe('Get All Store (Magazalarım)', () => {

    const login=new LoginBy_sametendoluEmail()
    const user=new User()
    const store=new Store()
    const allStore=new GetAllStore()

    it('Login and Token', () => {

        login.createToken2(user)
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
            
        })
    });

});