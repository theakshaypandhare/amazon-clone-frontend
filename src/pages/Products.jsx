import {
  Grid,
  Box,
  Card,
  CardMedia,
  CardActions,
  Typography,
  Button,
  Rating,
} from "@mui/material";
import React from "react";
import products from "../services/products";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <div>
      <Box>
        <Grid container spacing={1} columnSpacing={1} sx={{ px: 3, pt: 5 }}>
          {/* mapped */}
          {Object.keys(products).map((productId) => {
            const item = products[productId];
            let A =
              item.brand +
              " " +
              item.modelName +
              "  5G (" +
              item.color +
              ", " +
              item.ram +
              " RAM, " +
              item.storage +
              " Storage) | " +
              item.displayType +
              " Display | " +
              item.processor +
              "5G Processor |" +
              item.cameraPixel +
              " Camera | " +
              item.specialty;
            let prodId = item.id;
            {
              /* mapped */
            }
            return (
              <Grid item sm={6} md={2} lg={2} xs={12}>
                <Card>
                  <CardMedia sx={{ px: 5, pt: 1 }}>
                    <img
                      src="https://m.media-amazon.com/images/I/712qzWNmjFL._AC_UL480_FMwebp_QL65_.jpg"
                      alt="random"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </CardMedia>
                  <Link 
                to="/product" 
                state={{ id: prodId }}
                style={{textDecoration:"none",color:'inherit'}}
            >

                    <Box sx={{ px: 2 }}>
                      <Typography
                        variant="body2"
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 5,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          lineHeight: "1.2", // Adjust line height as needed
                          maxHeight: "calc(1.2em * 5)", // line-height * number of lines
                        }}
                      >
                        {A}
                      </Typography>
                      <Typography variant="body2">
                        <Rating
                          name="read-only"
                          value={item.rating}
                          readOnly
                          sx={{ mt: 1 }}
                        />{" "}
                        <Box component={"span"} sx={{ mt: -2 }}>
                          {item.buyerCount}
                        </Box>
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        ₹{item.price}
                        <Typography
                          variant="caption"
                          color={"slategray"}
                          component={"span"}
                        >
                          &nbsp; M.R.P: ₹
                          {Math.floor((14 / 100) * item.price + item.price)}
                        </Typography>
                        <Typography variant="body1" component="span">
                          (17% off)
                        </Typography>
                      </Typography>

                      <Typography variant="body2">
                        <Typography
                          variant="body2"
                          component={"span"}
                          sx={{ backgroundColor: "#7FDA69" }}
                        >
                          Save ₹1,500
                        </Typography>
                        &nbsp;with coupon Get it as soon as &nbsp;
                        <Typography
                          variant="body2"
                          component={"span"}
                          sx={{ fontWeight: "bold" }}
                        >
                          Tomorrow 8 am - 12 pm
                        </Typography>{" "}
                        FREE Delivery by Amazon
                      </Typography>
                      <Typography variant="body2" color={"slategray"}>
                        Service: Installation
                      </Typography>
                    </Box>
                  </Link>
                  <CardActions>
                    {" "}
                    <Button
                      variant="contained"
                      size="small"
                      color="inherit"
                      sx={{ backgroundColor: "#F7CA00", borderRadius: 5 }}
                    >
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default Products;
