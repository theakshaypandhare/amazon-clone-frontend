import {
  Container,
  Grid,
  Paper,
  Box,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Button,
  Rating,
} from "@mui/material";
import React from "react";
import products from "../services/products";
import { green } from "@mui/material/colors";
import { Product } from "./Product";

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
                        value={3}
                        readOnly
                        sx={{ mt: 1 }}
                      />{" "}
                      <Box component={"span"} sx={{ mt: -2 }}>
                        6,408
                      </Box>
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      ₹12,498
                      <Typography
                        variant="caption"
                        color={"slategray"}
                        component={"span"}
                      >
                        &nbsp; M.R.P: ₹14,999
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

          <Grid item sm={6} md={2} lg={2} xs={12}>
            <Card>
              <CardMedia sx={{ px: 5, pt: 1 }}>
                <img
                  src="https://m.media-amazon.com/images/I/712qzWNmjFL._AC_UL480_FMwebp_QL65_.jpg"
                  alt="random"
                  style={{ width: "100%", height: "auto" }}
                />
              </CardMedia>
              <Box sx={{ px: 2 }}>
                <Typography
                  variant="body2"
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 4,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    lineHeight: "1.2", // Adjust line height as needed
                    maxHeight: "calc(1.2em * 4)", // line-height * number of lines
                  }}
                >
                  Apple iPhone 13 5G (Space Gray , 4GB RAM, 128GB Storage)
                  |Super Retina XDR OLED Display | Apple A15 Bionic 5G Processor
                  | 12MP Camera | Super Retina XDR Display
                </Typography>
                <Typography variant="body2">
                  <Rating name="read-only" value={3} readOnly sx={{ mt: 1 }} />{" "}
                  <Box component={"span"} sx={{ mt: -2 }}>
                    6,408
                  </Box>
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  ₹12,498
                  <Typography
                    variant="caption"
                    color={"slategray"}
                    component={"span"}
                  >
                    &nbsp; M.R.P: ₹14,999
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
          <Grid item sm={6} md={2} lg={2} xs={12}>
            <Card>
              <CardMedia sx={{ px: 5, pt: 1 }}>
                <img
                  src="https://m.media-amazon.com/images/I/712qzWNmjFL._AC_UL480_FMwebp_QL65_.jpg"
                  alt="random"
                  style={{ width: "100%", height: "auto" }}
                />
              </CardMedia>
              <Box sx={{ px: 2 }}>
                <Typography variant="body2">
                  Apple iPhone 13 5G (Space Gray , 4GB RAM, 128GB Storage)
                  |Super Retina XDR OLED Display | Apple A15 Bionic 5G Processor
                  | 12MP Camera | Super Retina XDR Display
                </Typography>
                <Typography variant="body2">
                  <Rating name="read-only" value={3} readOnly sx={{ mt: 1 }} />{" "}
                  <Box component={"span"} sx={{ mt: -2 }}>
                    6,408
                  </Box>
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  ₹12,498
                  <Typography
                    variant="caption"
                    color={"slategray"}
                    component={"span"}
                  >
                    &nbsp; M.R.P: ₹14,999
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
          <Grid item sm={6} md={2} lg={2} xs={12}>
            <Card>
              <CardMedia sx={{ px: 5, pt: 1 }}>
                <img
                  src="https://m.media-amazon.com/images/I/712qzWNmjFL._AC_UL480_FMwebp_QL65_.jpg"
                  alt="random"
                  style={{ width: "100%", height: "auto" }}
                />
              </CardMedia>
              <Box sx={{ px: 2 }}>
                <Typography variant="body2">
                  Apple iPhone 13 5G (Space Gray , 4GB RAM, 128GB Storage)
                  |Super Retina XDR OLED Display | Apple A15 Bionic 5G Processor
                  | 12MP Camera | Super Retina XDR Display
                </Typography>
                <Typography variant="body2">
                  <Rating name="read-only" value={3} readOnly sx={{ mt: 1 }} />{" "}
                  <Box component={"span"} sx={{ mt: -2 }}>
                    6,408
                  </Box>
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  ₹12,498
                  <Typography
                    variant="caption"
                    color={"slategray"}
                    component={"span"}
                  >
                    &nbsp; M.R.P: ₹14,999
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
          <Grid item sm={6} md={2} lg={2} xs={12}>
            <Card>
              <CardMedia sx={{ px: 5, pt: 1 }}>
                <img
                  src="https://m.media-amazon.com/images/I/712qzWNmjFL._AC_UL480_FMwebp_QL65_.jpg"
                  alt="random"
                  style={{ width: "100%", height: "auto" }}
                />
              </CardMedia>
              <Box sx={{ px: 2 }}>
                <Typography variant="body2">
                  Apple iPhone 13 5G (Space Gray , 4GB RAM, 128GB Storage)
                  |Super Retina XDR OLED Display | Apple A15 Bionic 5G Processor
                  | 12MP Camera | Super Retina XDR Display
                </Typography>
                <Typography variant="body2">
                  <Rating name="read-only" value={3} readOnly sx={{ mt: 1 }} />{" "}
                  <Box component={"span"} sx={{ mt: -2 }}>
                    6,408
                  </Box>
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  ₹12,498
                  <Typography
                    variant="caption"
                    color={"slategray"}
                    component={"span"}
                  >
                    &nbsp; M.R.P: ₹14,999
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
          <Grid item sm={6} md={2} lg={2} xs={12}>
            <Card>
              <CardMedia sx={{ px: 5, pt: 1 }}>
                <img
                  src="https://m.media-amazon.com/images/I/712qzWNmjFL._AC_UL480_FMwebp_QL65_.jpg"
                  alt="random"
                  style={{ width: "100%", height: "auto" }}
                />
              </CardMedia>
              <Box sx={{ px: 2 }}>
                <Typography variant="body2">
                  Apple iPhone 13 5G (Space Gray , 4GB RAM, 128GB Storage)
                  |Super Retina XDR OLED Display | Apple A15 Bionic 5G Processor
                  | 12MP Camera | Super Retina XDR Display
                </Typography>
                <Typography variant="body2">
                  <Rating name="read-only" value={3} readOnly sx={{ mt: 1 }} />{" "}
                  <Box component={"span"} sx={{ mt: -2 }}>
                    6,408
                  </Box>
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  ₹12,498
                  <Typography
                    variant="caption"
                    color={"slategray"}
                    component={"span"}
                  >
                    &nbsp; M.R.P: ₹14,999
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
          <Grid item sm={6} md={2} lg={2} xs={12}>
            <Card>
              <CardMedia sx={{ px: 5, pt: 1 }}>
                <img
                  src="https://m.media-amazon.com/images/I/712qzWNmjFL._AC_UL480_FMwebp_QL65_.jpg"
                  alt="random"
                  style={{ width: "100%", height: "auto" }}
                />
              </CardMedia>
              <Box sx={{ px: 2 }}>
                <Typography variant="body2">
                  Apple iPhone 13 5G (Space Gray , 4GB RAM, 128GB Storage)
                  |Super Retina XDR OLED Display | Apple A15 Bionic 5G Processor
                  | 12MP Camera | Super Retina XDR Display
                </Typography>
                <Typography variant="body2">
                  <Rating name="read-only" value={3} readOnly sx={{ mt: 1 }} />{" "}
                  <Box component={"span"} sx={{ mt: -2 }}>
                    6,408
                  </Box>
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  ₹12,498
                  <Typography
                    variant="caption"
                    color={"slategray"}
                    component={"span"}
                  >
                    &nbsp; M.R.P: ₹14,999
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
        </Grid>
      </Box>
    </div>
  );
};

export default Products;
