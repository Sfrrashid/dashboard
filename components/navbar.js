//import Link from 'next/link';
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import { Box } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import SearchAppBar from './Appbar';


const drawerWidth = 100;
const color = purple[800];
const Font_color = purple[50]


export default function Navbar() {


    return (
        <Box sx={{
            display: 'flex'
        }}>
            <Box position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
                <SearchAppBar />

            </Box>

            <Drawer sx={{
                drawer: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    background: color,
                    width: drawerWidth



                }

            }}


                variant="permanent"
                anchor="left">
                <div>
                    <Typography variant="h6" sx={{
                        color: Font_color
                    }}>

                        Test
                    </Typography>



                </div>
            </Drawer>
        </Box>


    );
}
