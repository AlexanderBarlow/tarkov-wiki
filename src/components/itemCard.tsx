import React, { Component } from 'react'
import { log } from 'console';
import { gql, useQuery } from '@apollo/client';
const https = require('https');

type Props = {}

type State = {} 


const query = JSON.stringify({
query: `{
  items(name: "Assault Rifle") {
    id
    shortName
  sellFor {
    price
    currency
    priceRUB
    source
  }
  avg24hPrice
	description
 	category {
    id
    name
 	}
  }
}`

})



const options = {
    method: 'POST',
    hostname: 'api.tarkov.dev/graphql',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': query.length,
    },

  };

const request = https.request(options, (res: any) => {
  let data = '';
  console.log(`statusCode: ${res}`);

  res.on('data', (d: any) => {
    data += d;
  });
  res.on('end', () => {
    // console.log(JSON.parse(data));
    const returnData = JSON.parse(data)
    console.log(returnData.data.items);
    
  })
})
request.on('error', (error: any) => {
  console.error(error);
});

request.write(query);
request.end();
 

// fetch(request)
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     console.log('Data:', data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

export class ItemCard extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>itemCard</div>
    )
  }
}

export default ItemCard;