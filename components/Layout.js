import Navbar from './navbar';
import { Container } from "@material-ui/core";
import SearchAppBar from './Appbar';
import Box from '@material-ui/core/Box';
import Footer from './footer';
const Layout = ({ children }) => {
    return (












        <Box>

            <Navbar />




            <div>
                {children}
            </div>


        </Box>




    );
}
export default Layout;