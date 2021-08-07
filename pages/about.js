import React from "react";
import { Container, Grid } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import '../styles/Home.module.css'


export default function About() {
    return (
        <Container>
            <Grid container spacing={2}
                sx={{ width: '100%', display: "flex", minWidth: '100%' }}>

                <Grid item xs={12} sm={6} md={4} lg={3} sx={{ width: "10px" }}>
                    <Paper>xs=8</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper>xs=4</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper>xs=8</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper>xs=4</Paper>
                </Grid>

            </Grid>
        </Container>

    );

}