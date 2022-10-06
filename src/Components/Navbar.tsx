import { Button, Container, Nav, Navbar as NavBarBs} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


export function Navbar(){
    return (
        <NavBarBs  sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
            <Nav className="me-auto">
                <Nav.Link to="/" as ={NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link to="/Store" as ={NavLink}>
                    Store
                </Nav.Link>
                <Nav.Link to="/About" as ={NavLink}>
                    About
                </Nav.Link>
            </Nav>

            <Button 
            style={{ width: "3rem", height: "3Rem", position: "relative"}}
            variant="outline-primary" className="rounded-circle"
            >
            <ShoppingBasketIcon />
            <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" 
            style={{ 
            color: "white",
            width:"1.5rem",
            height:"1.5rem",
            position:"absolute",
            bottom: 0,
            right: 0,
            transform: "translate(25%, 25)",
            
            }}>
                3
                </div>
            </Button>
            
        </Container>
        </NavBarBs>
    )
}