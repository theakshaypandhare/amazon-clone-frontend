import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

export const Cart = () => {
  return (
    <div style={{ background: "#EAEDED" }}>
      <Grid container columnSpacing={3} rowSpacing={1} p={3}>
        <Grid item xs={12} md={9} sm={9}>
          <Paper>
            <Box p={2}>
              <Typography variant="h5" fontWeight={"3"}>
                Shopping Cart
              </Typography>{" "}
              <Typography variant="body2" component={"p"}></Typography>
              <Divider sx={{ m: 1 }} />
              <Grid container columnSpacing={1} sx={{display:"flex",justifyContent:'center',alignItems:'center'}} >
                <Grid item xs={3} border={1}>
                <Box sx={{height:'auto',width:'50%'}}>
                  <img
                    src="https://m.media-amazon.com/images/I/712qzWNmjFL._AC_UL480_FMwebp_QL65_.jpg"
                    alt="random"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Box>
                </Grid>
                <Grid item xs={8} border={1}>
                  hiiasssssssssssssssss
                </Grid>
                <Grid item xs={1} border={1}>
                  hiissssaaaaaaaaaaaaaaaaaaaaaaaa
                </Grid>
              </Grid>
              <Divider sx={{ m: 1 }} />
              <Box display={"flex"} justifyContent={"center"} pt={1}>
                <Button
                  size="small"
                  sx={{
                    width: "80%",
                    backgroundColor: "#FFD814",
                    borderRadius: 5,
                  }}
                  variant="contained"
                  color="inherit"
                >
                  Process To Buy
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} sm={3}>
          <Paper>
            <Box p={2}>
              <Typography variant="h6">
                Subtotal (1 item): ₹
                <Typography variant="h6" fontWeight={"bold"} component={"span"}>
                  269.00
                </Typography>
              </Typography>
              <Box display={"flex"} justifyContent={"center"} pt={1}>
                <Button
                  size="small"
                  sx={{
                    width: "80%",
                    backgroundColor: "#FFD814",
                    borderRadius: 5,
                  }}
                  variant="contained"
                  color="inherit"
                >
                  Process To Buy
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
