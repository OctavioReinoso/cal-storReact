import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, CardMedia } from '@mui/material';

export const CardItem = ({ title, description, price, imgURL }) => {
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
                <CardActions>
                    <Button size="small" color="primary" sx={{border: '1px solid'}}> 
                        Ver detalle
                    </Button>        
                </CardActions>
            </Card>
    )
}

