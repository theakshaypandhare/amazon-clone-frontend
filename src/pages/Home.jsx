import React from 'react'
import homebanner1 from '../assests/bannerimg/homebanner1.jpg';
import m1 from '../assests/products/m1.jpg';
import m2 from '../assests/products/m2.jpg';
import m3 from '../assests/products/m3.jpg';
import m4 from '../assests/products/m4.jpg';
import styled from 'styled-components';
import { Grid, Card } from '@mui/material';

const Bannerimg = styled.img`
width:100%;
height:100%;
object-fit:cover;
`
export const Home = () => {
    return (
        <div style={{ position: 'relative',backgroundColor:"#E3E6E6" }}>
            <Bannerimg src={homebanner1} alt="logo" />
            <Grid container spacing={3} style={{ position: 'absolute', top: '20rem' ,padding:'1rem'}}  >
                <Grid item xs={6} md={4} sm={2}>
                    <Card style={{padding:'0 0 0 1em'}}>
                        <h3>Pick up where you left off</h3>
                        <Grid container rowGap={1} columnSpacing={1}>
                            <Grid item xs={6} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                <img src={m1} /> Oneplus 
                            </Grid>
                            <Grid item xs={6} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                <img src={m1} /> Oneplus 
                            </Grid>
                            <Grid item xs={6} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                <img src={m1} /> Oneplus 
                            </Grid>
                            <Grid item xs={6} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                <img src={m1} /> Oneplus 
                            </Grid>
                        </Grid>
                        <h6>See All...</h6>
                    </Card>
                </Grid>
                <Grid item xs={6} md={4} sm={2}>
                    <Card style={{padding:'0 0 0 1em'}}>
                        <h3>Pick up where you left off</h3>
                        <Grid container rowGap={1} columnSpacing={1}>
                            <Grid item xs={6} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                <img src={m1} /> Oneplus 
                            </Grid>
                            <Grid item xs={6} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                <img src={m1} /> Oneplus 
                            </Grid>
                            <Grid item xs={6} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                <img src={m1} /> Oneplus 
                            </Grid>
                            <Grid item xs={6} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                <img src={m1} /> Oneplus 
                            </Grid>
                        </Grid>
                        <h6>See All...</h6>
                    </Card>
                </Grid>
                <Grid item xs={6} md={4} sm={2}>
                    <Card style={{padding:'0 0 0 1em'}}>
                        <h3>Pick up where you left off</h3>
                        <Grid container rowGap={1} columnSpacing={1}>
                            <Grid item xs={6} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                <img src={m1} /> Oneplus 
                            </Grid>
                            <Grid item xs={6} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                <img src={m1} /> Oneplus 
                            </Grid>
                            <Grid item xs={6} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                <img src={m1} /> Oneplus 
                            </Grid>
                            <Grid item xs={6} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                <img src={m1} /> Oneplus 
                            </Grid>
                        </Grid>
                        <h6>See All...</h6>
                    </Card>
                </Grid>
            </Grid>
            <h1>Home</h1>  </div>
    )
}
