import Link from 'next/link';
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Box } from '@material-ui/core';
import { blue, purple, red } from '@material-ui/core/colors';
import SearchAppBar from './Appbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faAddressCard, faTable, faUserCircle, faFolder, faClipboard, faChartLine } from "@fortawesome/free-solid-svg-icons";



const drawerWidth = 100;
const color = purple[800];
const Font_color = purple[50];
const icon_color = blue[300];
const my_color = red[900];


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
                        color: Font_color,
                        textAlign: 'center'
                    }}>

                        Test
                    </Typography>



                </div>

                <Divider />
                <div>
                    <List>
                        <Link href="/dashboard">
                            <a>
                                <ListItem>
                                    <ListItemIcon sx={{
                                        ':hover': {
                                            color: icon_color,

                                        },
                                        ":active": {
                                            color: my_color,
                                            borderStyle: "2px solid black"

                                        }
                                    }}>
                                        <FontAwesomeIcon icon={faChartLine} size="3x" />


                                    </ListItemIcon>

                                </ListItem>
                            </a>
                        </Link>
                        <Link href="/list">
                            <a>
                                <ListItem>
                                    <ListItemIcon sx={{
                                        ':hover': {
                                            color: icon_color
                                        }
                                    }}>

                                        <FontAwesomeIcon icon={faTable} size="3x" />

                                    </ListItemIcon>

                                </ListItem>
                            </a>
                        </Link>
                        <ListItem>
                            <ListItemIcon sx={{
                                ':hover': {
                                    color: icon_color
                                }
                            }}>

                                <FontAwesomeIcon icon={faAddressCard} size="3x" />
                            </ListItemIcon>

                        </ListItem>

                        <ListItem>
                            <ListItemIcon sx={{
                                ':hover': {
                                    color: icon_color
                                }
                            }}>
                                <FontAwesomeIcon icon={faAddressBook} size="3x" />

                            </ListItemIcon>

                        </ListItem>
                        <ListItem>
                            <ListItemIcon sx={{
                                ':hover': {
                                    color: icon_color
                                }
                            }}>
                                <FontAwesomeIcon icon={faUserCircle} size="3x" />

                            </ListItemIcon>

                        </ListItem>
                        <ListItem>
                            <ListItemIcon sx={{
                                ':hover': {
                                    color: icon_color
                                }
                            }}>
                                <FontAwesomeIcon icon={faFolder} size="3x" />

                            </ListItemIcon>

                        </ListItem>
                        <ListItem>
                            <ListItemIcon sx={{
                                ':hover': {
                                    color: icon_color,

                                },
                                ':active': {
                                    color: color
                                }
                            }}>
                                <FontAwesomeIcon icon={faClipboard} size="3x" />

                            </ListItemIcon>

                        </ListItem>

                    </List>


                </div>


            </Drawer>

        </Box>


    );
}
