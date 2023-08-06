import React, { Component } from 'react'
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/client";
import { log } from 'console';

type Props = {}

type State = {} 


const query = gql`
{
    items(name: "m855a1") {
        id
        name
        shortName
    }
}
`

// items(name: "Assault Rifle") {
//     id
//     shortName
//   sellFor {
//     price
//     currency
//     priceRUB
//     source
//   }
//   avg24hPrice
// 	description
//  	category {
//     id
//     name
//  	}
//   }
// }

const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        query
    })
  };

const request = new Request('https://api.tarkov.dev/graphql', options)

fetch(request)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

export class ItemCard extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>itemCard</div>
    )
  }
}

export default ItemCard;