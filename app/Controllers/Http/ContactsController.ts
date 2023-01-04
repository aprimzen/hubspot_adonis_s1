import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
const hubspot = require('@hubspot/api-client')
const hubspotClient = new hubspot.Client({ accessToken: "pat-na1-5caa08f4-0cec-4d38-8494-5810cfb799d1" })




export default class ContactsController {

    public async index (ctx: HttpContextContract){
        const limit = 10;
        const after = undefined;
        const properties = undefined;
        const propertiesWithHistory = undefined;
        const associations = undefined;
        const archived = false;

        const apiResponse = await hubspotClient.crm.contacts.basicApi.getPage(limit, after, properties, propertiesWithHistory, associations, archived);
        return (JSON.stringify(apiResponse, null, 2));

    }



    public async add (ctx: HttpContextContract){


        const properties = {
            "company": "mrlan",
            "email": "arlandon@net2.com",
            "firstname": "Arlandon",
            "lastname": "regero",
            "phone": "(877) 929-0687",
            "website": "myarlan.net"
        };
        const SimplePublicObjectInput = { properties };
        
        try{
            const apiResponse = await hubspotClient.crm.contacts.basicApi.create(SimplePublicObjectInput);

        return (JSON.stringify(apiResponse, null, 2));
        }catch(e){

        }
    }

}






