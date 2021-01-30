import { Grid } from '@material-ui/core';
import React from'react';
import CardImages from './Card';
import CardImageList from './constants'

const Content = () => {

    const getImageCard = (getimageObject) => {        
        return(
            <Grid item xs={12} sm={4}>
             <CardImages {...getimageObject} />
            </Grid>
        );
    }


    return ( /* Insert Images in the imgSrc prop of Grid */
        <Grid container spacing={5}>             
                {CardImageList.map(getimageObject => getImageCard(getimageObject)) }
           
        </Grid>
    
    ); 
};

export default Content;  