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
import { purple } from '@material-ui/core/colors';
import SearchAppBar from './Appbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faAddressBook, faAddressCard, faTable, faUserCircle, faFolder, faClipboard } from "@fortawesome/free-solid-svg-icons";



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
                        color: Font_color,
                        textAlign: 'center'
                    }}>

                        Test
                    </Typography>



                </div>

                <Divider />
                <div>
                    <List sx={{

                    }}>
                        <Link href="/contact">
                            <a>
                                <ListItem>
                                    <ListItemIcon>
                                        <FontAwesomeIcon icon={faHome} size="3x" />


                                    </ListItemIcon>

                                </ListItem>
                            </a>
                        </Link>
                        <ListItem>
                            <ListItemIcon>

                                <FontAwesomeIcon icon={faAddressBook} size="3x" />

                            </ListItemIcon>

                        </ListItem>
                        <ListItem>
                            <ListItemIcon>

                                <FontAwesomeIcon icon={faAddressCard} size="3x" />
                            </ListItemIcon>

                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faTable} size="3x" />

                            </ListItemIcon>

                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faUserCircle} size="3x" />

                            </ListItemIcon>

                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faFolder} size="3x" />

                            </ListItemIcon>

                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faClipboard} size="3x" />

                            </ListItemIcon>

                        </ListItem>

                    </List>


                </div>


            </Drawer>
        </Box>


    );
}
