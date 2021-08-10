import Navbar from './navbar';
import { Container } from "@material-ui/core";

import Box from '@material-ui/core/Box';

const Layout = ({ children }) => {
    return (












        <Box sx={{

        }}>
            <Navbar />


            <Container>
                <Box sx={{


                    ml: '100px',
                    mt: '100px'
                }}>

                    <div>
                        {children}
                    </div>
                </Box>
            </Container>

        </Box>




    );
}
export default Layout;