import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const CardItem = ({id, title, description, price, imgURL, category }) => {
    return (
            <Card sx={{ width: 350, height:350, display: 'flex', flexDirection:'column',alignItems:'center', textAlign:'center'}}>
                <CardActionArea>
                    <CardContent sx={{display:'flex', flexDirection:'column'}}>
                        <CardMedia 
                            component="img"
                            height="200"
                            image={imgURL}
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
                <CardActions sx={{display:'flex', height:40}}>
                    <Link to={`/products/:${category}/${id}`}>
                        <Button>
                            Ver detalle
                        </Button>
                    </Link>
                </CardActions>
            </Card>
    )
}

