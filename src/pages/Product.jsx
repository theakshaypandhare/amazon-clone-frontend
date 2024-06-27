import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  List,
  ListItem,
  Menu,
  MenuItem,
  Rating,
  Typography,
  image,
} from "@mui/material";
import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import badge from "../assests/amazonchoiceBadge.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export const Product = () => {
  return (
    <div>
      <Grid container spacing={2} columnSpacing={2} sx={{ px: 3, pt: 5 }}>
        <Grid
          item
          md={5}
          sm={6}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box width={400}>
            <img
              src="https://m.media-amazon.com/images/I/61Id6WJDWqL._SX679_.jpg"
              style={{ height: "100%", width: "100%" }}
            />
          </Box>
        </Grid>
        <Grid item md={5} sm={6} xs={12}>
          <Box>
            <Typography variant="h5">
              iQOO Z7 Pro 5G (Blue Lagoon, 8GB RAM, 256GB Storage) | 3D Curved
              AMOLED Display | 4nm MediaTek Dimesity 7200 5G Processor | 64MP
              Aura Light OIS Camera | Segment's Slimmest & Lightest Smartphone
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
              <span style={{ color: "#CC0C39" }}>-14% </span>₹23,998
            </Typography>
            <Typography variant="body2">
              M.R.P.:
              <Box component="span" sx={{ textDecoration: "line-through" }}>
                ₹27,999
              </Box>
            </Typography>
            <Typography variant="body1">
              Inclusive of all taxes You Save:
              <Box component="span" sx={{ fontWeight: "bold" }}>
                <br />
                EMI
              </Box>
              starts at ₹1,163. No Cost EMI available
            </Typography>
            <Divider sx={{ marginTop: "1rem" }} />
            <Grid container>
              <Grid item xs={6} md={6} sm={6} sx={{ fontWeight: "bold" }}>
                Brand
              </Grid>
              <Grid item xs={6} md={6} sm={6}>
                iQOO
              </Grid>
              <Grid item xs={6} md={6} sm={6} sx={{ fontWeight: "bold" }}>
                Operating System
              </Grid>
              <Grid item xs={6} md={6} sm={6}>
                Funtouch OS 13 Based On Android 13
              </Grid>
              <Grid item xs={6} md={6} sm={6} sx={{ fontWeight: "bold" }}>
                RAM
              </Grid>
              <Grid item xs={6} md={6} sm={6}>
                Memory Installed Size 8 GB
              </Grid>
              <Grid item xs={6} md={6} sm={6} sx={{ fontWeight: "bold" }}>
                CPU Model
              </Grid>
              <Grid item xs={6} md={6} sm={6}>
                Snapdragon
              </Grid>
              <Grid item xs={6} md={6} sm={6} sx={{ fontWeight: "bold" }}>
                CPU Speed
              </Grid>
              <Grid item xs={6} md={6} sm={6}>
                2.8 GHz
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
                <li>
                  Dimensity 7200 5g processor based on the latest 4nm
                  energy-efficient process
                </li>
                <li>
                  3D Curved Super-vision Display with 17.22 cm (6.78 inches)
                  screen size, 93.3% Screen-to-body ratio, 120 Hz AMOLED FHD+,
                  1.07 Billion Colors, 1300 nits Peak Local Brightness
                </li>
                <li>
                  64 MP AURA Light OIS Camera, 4K video recording, Hybrid Image
                  Stabilization, Super Night Mode, Aura Light Portrait, Camera
                  Panning Portrait
                </li>
                <li>
                  66W FlashCharge with 4600mAh large battery | 8GB RAM + 8GB
                  Extended RAM
                </li>
              </ul>
            </Typography>
          </Box>
        </Grid>
        <Grid item md={2} sm={6} xs={12}>
          <Box pl={1}>
            <Card variant="outlined" sx={{ p: 1 }}>
              <Typography variant="h5" mt={1} sx={{ fontWeight: "bold" }}>
                ₹23,998
              </Typography>
              <Typography variant="body2" pt={2}>
                FREE delivery
                <Box component="span" sx={{ fontWeight: "bold" }}>
                  Tuesday, 2 July.
                  <br />
                </Box>
                Order within
                <Box component="span" sx={{ color: "#007600" }}>
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
