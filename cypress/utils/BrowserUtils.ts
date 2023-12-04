export default class BrowserUtils {

    getCode(response) {
        let inputString = response.body.data[0].mail_source.headers.subject;
        const regex = /Endolu Giriş Kodu: (\d+)/;
        const match = inputString.match(regex);
        return match ? match[1] : null
    }

    getNameOfEmail(email : string ){
        email = "testendolu@mail7.io"
        return email.split('@')[0]
    }
}