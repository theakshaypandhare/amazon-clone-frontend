import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Menu,
  MenuItem,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import badge from "../assests/amazonchoiceBadge.png";
import products from "../services/products";
const item=products['mbl001'];
export const Product = () => {
  return (
    <div>

    {/*  */}
   
    {/*  */}
      <Grid container spacing={2} columnSpacing={2} sx={{ px: 3, pt: 5 }}>
        <Grid
          item
          md={5}
          sm={6}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box   width={400}>
            <img
              src="https://m.media-amazon.com/images/I/61Id6WJDWqL._SX679_.jpg"
              style={{ height: "auto", width: "100%" }}
            />
          </Box>
        </Grid>
        <Grid item md={5} sm={6} xs={12}>
          <Box>
            <Typography variant="h5">
              {item.brand+" "+item.modelName}  5G ({item.color } , {item.ram} RAM, {item.storage} Storage) | 
              {item.displayType} Display | {item.processor} 5G Processor | {item.cameraPixel} Camera | {item.specialty}
            </Typography>
            <Typography variant="subtitle1">Visit the iQOO Store</Typography>
            <Typography variant="subtitle1">
              <Rating name="read-only" value={3} readOnly /> 6,408 ratings |
              Search this page
            </Typography>
            <img src={badge} style={{ height: "30%", width: "30%" }} />
            <br />
            <Typography variant="caption">5K+ bought in past month</Typography>
            <Divider />
            <Typography variant="h5" mt={1}>
              <span style={{ color: "#CC0C39" }}>-14% </span>₹{item.price}
            </Typography>
            <Typography variant="body2">
              M.R.P.:
              <Box component="span" sx={{ textDecoration: "line-through" }}>
                ₹{Math.floor((14/100)*item.price+item.price)}
              </Box>
            </Typography>
            <Typography variant="body1">
              Inclusive of all taxes You Save:
              <Box component="span" sx={{ fontWeight: "bold" }}>
                <br />
                EMI 
              </Box>
              <char>&nbsp;</char>
 starts at ₹1,163. No Cost EMI available
            </Typography>
            <Divider sx={{ marginTop: "1rem" }} />
            <Grid container>
              <Grid item xs={6} md={6} sm={6} sx={{ fontWeight: "bold" }}>
                Brand
              </Grid>
              <Grid item xs={6} md={6} sm={6}>
                {item.brand}
              </Grid>
              <Grid item xs={6} md={6} sm={6} sx={{ fontWeight: "bold" }}>
                Processor
              </Grid>
              <Grid item xs={6} md={6} sm={6}>
                {item.processor}
              </Grid>
              <Grid item xs={6} md={6} sm={6} sx={{ fontWeight: "bold" }}>
                RAM
              </Grid>
              <Grid item xs={6} md={6} sm={6}>
                Memory Installed Size {item.ram}
              </Grid>
              <Grid item xs={6} md={6} sm={6} sx={{ fontWeight: "bold" }}>
                CPU Model
              </Grid>
              <Grid item xs={6} md={6} sm={6}>
                {item.cpuModel}
              </Grid>
              <Grid item xs={6} md={6} sm={6} sx={{ fontWeight: "bold" }}>
                CPU Speed
              </Grid>
              <Grid item xs={6} md={6} sm={6}>
                {item.cpuSpeed} 
              </Grid>
            </Grid>
            <Divider sx={{ marginTop: "1rem" }} />
          </Box>
          <Box>
            <Typography
              variant="h6"
              color="initial"
              sx={{ fontWeight: "bold" }}
            >
              About This Item
            </Typography>
            <Typography paragraph>
              <ul>
              {item.aboutItem.map((item,index)=>(  <li key={index}> {item}
                </li>))}
              
              </ul>
            </Typography>
          </Box>
        </Grid>
        <Grid item md={2} sm={12} xs={12}>
          <Box pl={1}>
            <Card variant="outlined" sx={{ p: 1 }}>
              <Typography variant="h5" mt={1} sx={{ fontWeight: "bold" }}>
              ₹{ item.price}
              </Typography>
              <Typography variant="body2" pt={2}>
                FREE delivery
                <Box component="span" sx={{ fontWeight: "bold" }}>
               {<char>&nbsp;</char>
               }Tuesday, 2 July.
                  <br />
                </Box>
                Order within
                <Box component="span" sx={{ color: "#007600" }}>
                &nbsp;
                2 hrs 17 mins.
                </Box>
                <br /> Details
              </Typography>
              <Typography variant="caption" sx={{ color: "blue" }}>
                <LocationOnOutlinedIcon fontSize="2" /> Deliver to Akshay - Pune
                412207‌
              </Typography>

              <Typography variant="h6" sx={{ color: "green" }}>
                In Stock
              </Typography>

              <Typography variant="body2">
                Quantity 1
                <Menu>
                  <MenuItem>{/* add later */}</MenuItem>
                </Menu>
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                gap={1}
                pt={2}
              >
                <Button
                  variant="contained"
                  sx={{
                    background: "#FFD814",
                    color: "black",
                    borderRadius: 5,
                  }}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    background: "#FFA41C",
                    color: "black",
                    borderRadius: 5,
                  }}
                >
                  Buy Now
                </Button>
              </Box>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
