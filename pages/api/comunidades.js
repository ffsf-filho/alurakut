//BFF
import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequest(request, response){
  if(request.method === 'POST'){
    const TOKEN = process.env.FULL_TOKEN; //meu full token
    const client = new SiteClient(TOKEN);
    
    const registroCriado = await client.items.create({
      itemType: "968773",  // ID do Model de "Communities" criado pelo Dato
      ...request.body,
      // "title": ,
      // "imageUrl": ,
      // "creatorSlug": 
    });
    
    //console.log(registroCriado);
    response.json({
      dados: 'Algum dado qualquer',
      registroCriado: registroCriado,
    })
    return;
  }

  response.status(404).json({
    message: 'Ainda não temos nada no GET, mas no POST tem!'
  })
}