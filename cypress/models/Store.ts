
import { fa, faker } from '@faker-js/faker';
export default class Store{

    private storeName : string
    private typeOfProduct : string
    private appInstagram : string
    private appFacebook : string
    private appTiktok : string
    private appTwitter: string
    private appYoutube: string
    private adress :string
    private city :string
    private companyName: string
    private companyType: string
    private domesticMarketPlaces: boolean
    private eMail:string
    private foreignMarketPlaces:boolean
    private iban : string
    private identityNumber : string
    private other : false
    private ourBrandStory : string
    private ownWebsite: boolean
    private retailStore : boolean
    private slogan : string
    private socialMedia : boolean
    private storeLogo: string
    private taxNumber :string
    private taxOffice : string
    private telephone : string
    private town :string
    private token:string
    private storyToken:string

    constructor(){
        this.storeName=faker.internet.userName()
        this.typeOfProduct='Nescafe bile üçü bir arada ben ise hala yanlızım...'
        this.appInstagram='endolu@instagram.com'
        this.appFacebook='endolu@facebook.com'
        this.appTiktok='endolu@tiktok.com'
        this.appTwitter='endolu@twitter.com'
        this.appYoutube='endolu@youtube.com'
        this.adress='Demetevler mahallesi'
        this.city='ANKARA'
        this.companyName=faker.person.firstName()
        this.companyType='Bireysel'
        this.domesticMarketPlaces=false
        this.eMail=faker.internet.email()
        this.foreignMarketPlaces=false
        this.iban='TR33 0006 1005 1978 6457 8413 26'
        this.identityNumber='60145076054'
        this.other=false
        this.ourBrandStory='Ben  senin  gibi  çok  rüya  görürüm  ama  sen  benim  gibi  bir  gerçek  yaşayamazsın...    Otopsi  istiyorum  hayallerim  kendi  eceli  ile  ölmüş  olamaz...            '
        this.ownWebsite=false
        this.retailStore=false
        this.slogan='Her Şey Çok Güzel Olacak'
        this.socialMedia=true
        this.storeLogo=""
        this.taxNumber=null
        this.taxOffice=null
        this.telephone="5456574043"
        this.town="YENİMAHALLE"
        
    
    }

    getStoryToken(){
        return this.storyToken
    }
    setStoryToken(){
        this.storyToken=this.storyToken
    }

    getToken() {
        return this.token;
    }

    setToken(token: string) {
        this.token = token;
    }
    getStoreLogo(){
        return this.storeLogo
    }
    getTaxNumber(){
        return this.taxNumber
    }
    getTaxOffice(){
        return this.taxOffice
    }
    getTelephone(){
        return this.telephone
    }
    getTown(){
        return this.town
    }
    
    getRetailStore(){
        return this.retailStore
    }
    getSlogan(){
        return this.slogan
    }
    getSocialMedia(){
        return this.socialMedia
    }
    getOther(){
        return this.other
    }
    getOurBrandStore(){
        return this.ourBrandStory
    }
    getownWebsite(){
        return this.ownWebsite
    }
    getCompanyName(){
        return this.companyName
    }
    getCompanyType(){
        return this.companyType
    }
    getDomesticMarketPlaces(){
        return this.domesticMarketPlaces
    }
    getEmail(){
        return  this.eMail
    }
    getForeignMarketPlaces(){
        return this.foreignMarketPlaces
    }
    getIban(){
        return this.iban
    }
    getIdentityNumber(){
        return this.identityNumber
    }
    getStoreName(){
       return this.storeName
    }
    getTypeOfProduct(){
        return this.typeOfProduct
    }
    getAppInstagram(){
        return this.appInstagram
    }
    getAppFacebook(){
        return this.appFacebook
    }
    getAppTikTok(){
        return this.appTiktok
    }
    getAppTwitter(){
        return this.appTwitter
    }
    getAppYoutube(){
        return this.appYoutube
    }
    getAdress(){
        return this.adress
    }
    getCity(){
        return this.city
    }






















}

