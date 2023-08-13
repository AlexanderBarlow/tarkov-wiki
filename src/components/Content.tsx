import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useState, useEffect } from 'react';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
const https = require("https");


export default function Content() {
  const [posts, setPosts]: any = useState([]);

  const query = JSON.stringify({
    query: `{
      items(name: "Assault Rifle") {
        id
        shortName
        image512pxLink
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
        const returnData = JSON.parse(data);
        const apiData = returnData.data.items;
        console.log(returnData);
        console.log(apiData);
        setPosts(apiData);
      });
    });
    request.on("error", (error: any) => {
      console.error(error);
    });

    request.write(query);
    request.end();
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      const post:any = posts[0];
      console.log(post);
      const traderSell = post.sellFor;
      console.log(traderSell);
    }
  }, [posts]);



  return (
      <Card style={{background: '#020617', alignContent: 'center', justifyContent: 'center',}}>
      {posts.map((item: any) => (
        <CardActionArea key={item.id}> 
        <CardMedia
        component='img'
        style={{height: "50%", width: "50%"}}
        image={item.image512pxLink}
        alt={item.shortName}
        />

        <CardContent >
          <Typography gutterBottom variant="h5" component="div" style={{color: '#FFF', alignContent: 'center', justifyContent: 'center'}}>
            {item.shortName}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{color: '#FFF', alignContent: 'center', justifyContent: 'center'}}>
            {item.avg24hPrice}RUB
          </Typography>
          </CardContent>
        </CardActionArea>
      ))}
      </Card>
  );
}