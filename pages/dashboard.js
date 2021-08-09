import React from "react";
import Grid from "@material-ui/core/Grid";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



export default function About() {
    return (

        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3} sx={{ textAlign: "center" }}>
                <Card sx={{
                    minWidth: "275",
                    borderRadius: '40px'
                }}>
                    <CardContent>
                        <Typography variant='h3'>
                            Profile
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} sx={{ textAlign: "center" }}>
                <Card sx={{
                    minWidth: "275",
                    borderRadius: '40px'
                }}>
                    <CardContent>
                        <Typography variant='h3'>
                            Table
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} sx={{ textAlign: "center" }}>
                <Card sx={{
                    minWidth: "275",
                    borderRadius: '40px'
                }}>
                    <CardContent>
                        <Typography variant='h3'>
                            Files
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} sx={{
                textAlign: "center",

            }}>
                <Card sx={{
                    minWidth: "275",
                    borderRadius: '40px'
                }}>
                    <CardContent>
                        <Typography variant='h3'>
                            Notes
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>

    );

}