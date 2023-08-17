import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const CardItem = ({id, title, description, price, imageURL, category }) => {
    return (
            <Card sx={{ width: 280, height:330, display: 'flex', backgroundColor:'white', flexDirection:'column',alignItems:'center', textAlign:'center', padding:'2% 1%', boxShadow:'2px 2px 12px'}}>
                <CardActionArea>
                    <CardContent sx={{display:'flex', flexDirection:'column'}}>
                        <CardMedia
                            component="img"
                            height="195"
                            image={imageURL}
                            category={category}
                            alt={title}/>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>    
                        <Typography variant="body1" color="text.primary">
                            {'$'+price}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {description || ""}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{display:'flex', height:10}}>
                    <Link to={`/products/:${category}/${id}`} >
                        <Button sx={{border:'1px solid grey', backgroundColor:'grey', color:'white', fontFamily:'fantasy'}}>
                            Ver detalle
                        </Button>
                    </Link>
                </CardActions>
            </Card>
    )
}

