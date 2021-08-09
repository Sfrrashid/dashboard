import Navbar from './navbar';
import { Container } from "@material-ui/core";
import SearchAppBar from './Appbar';
import Box from '@material-ui/core/Box';
import Footer from './footer';
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