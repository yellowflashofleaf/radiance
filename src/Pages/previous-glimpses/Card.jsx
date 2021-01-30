import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import "./Glimpses.css"



const CardImages = (props) => {

    const {imageUrl} = props;
    return (
        <Card className="box">
          <CardContent>
          <CardMedia style={{height:"250px", margin:"-30px"}}  
          image={imageUrl}
        />
          </CardContent>          
        </Card>
      );
}
export default CardImages;