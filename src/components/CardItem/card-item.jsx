import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

export const CardItem = ({id, title, description, price, imgURL, category }) => {
    return (
            <Card sx={{ maxWidth: 400, display: 'flex'}}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <CardMedia 
                            component="img"
                            height="140"
                            image={imgURL}
                            alt={title}/>
                        <Typography variant="body1" color="text.secondary">
                            {price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description || ""}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{backgroundColor:'grey'}}>
                    <Link to={`/products/${category}/${id}`}>
                        Ver detalle
                    </Link>
                </CardActions>
            </Card>
    )
}

