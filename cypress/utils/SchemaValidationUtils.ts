import Schemas from "../models/Schemas";

export default class SchemaUtils{

    getSchema(schema:object,response){
        const Ajv = require('ajv');
        const ajv = new Ajv();
        const validate = ajv.compile(schema);
        const isValid = validate(response.body);
        return isValid
    }   
}