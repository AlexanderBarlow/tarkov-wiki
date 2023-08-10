import React, { use } from "react";
import { useState, useEffect } from 'react';
import { log } from "console";
import { gql, useQuery } from "@apollo/client";
const https = require("https");

// interface Data {
//   id: number
//   shortName: string
// }


 
  

function ItemCard() {
  const [posts, setPosts] = useState([]);

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
    }`,
  });

  const options = {
    method: "POST",
    hostname: "api.tarkov.dev/graphql",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": query.length,
    },
  };

  useEffect(() => {
    
  const request = https.request(options, (res: any) => {
    let data = "";

    res.on("data", (d: any) => {
      data += d;
    });
    res.on("end", () => {
      // console.log(JSON.parse(data));
      const returnData = JSON.parse(data)
      const apiData = returnData.data.items
      console.log(returnData);
      console.log(apiData);
      setPosts(apiData)
    });
  });
  request.on("error", (error: any) => {
    console.error(error);
  });

  request.write(query);
  request.end(); 
}, []);



  return (
    <main>
      <div>
        {posts.map((item) => (
          <ul key={item.id} style={{color: "#000", display: 'inline-flex'}}>
            <li style={{display: "flex"}}>{item.id}</li>
          </ul>
        ))}
      </div>
    </main>
  );
}

export default ItemCard;
