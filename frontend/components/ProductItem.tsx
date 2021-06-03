import React from 'react';
import {IProduct} from "../types/product";

//material-ui
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface TrackItemProps {
    product: IProduct;
}

const ProductItem: React.FC<TrackItemProps> = ({product}) => {
    
    return (
        <Card className="product-card">
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="product picture"
                    height="140"
                    className="product-card__picture"
                    image="/asets/default-box.svg"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {product.origin}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductItem;
