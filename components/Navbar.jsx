import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import logo from "../public/logoBranding.png";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import LoginButton from "./LoginButton";

const NavMenu = [
  { title: "Home", url: "/" },
  { title: "Events", url: "/" },
  { title: "About us", url: "/" },
  { title: "Community", url: "/" },
  { title: "Gallery", url: "/" },
  { title: "Contact us", url: "/" },
];

export const useStyles = makeStyles((theme) => ({
  menu: {
    "& .MuiPaper-root": {
      background:
        "linear-gradient(241.86deg, #C249FF 0.95%, #AA1EF1 34.48%, #9611D9 56.15%, #7A00B8 86.07%)",
      padding: "20px 10px",
    },
  },
}));

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  // const [state, setState] = React.useState({
  //   open: false,
  //   vertical: 'top',
  //   horizontal: 'center',
  // });

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(true);
  };

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(false);
  };

  return (
    <div>
      <AppBar
        sx={{
          background: "rgb(24, 24, 24) !important",
          color: "white !important",
        }}
        position="static"
      >
        <Toolbar>
          <Link href="/">
            <Box sx={{ flexGrow: { lg: 0, md: 0, sm: 1, xs: 1 } }}>
              <Typography>
                <img
                  className="logoNavBar"
                  src={logo.src}
                  alt="Logo"
                  style={{ height: "45px" }}
                />
              </Typography>
            </Box>
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              display: { sm: "block", md: "none" },
              textAlign: "right",
              alignItems: "end",
            }}
          >
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{ display: { sm: "block", md: "none" }, padding: 0 }}
            >
              {NavMenu.map((item, i) => (
                <MenuItem
                  key={i}
                  sx={{
                    backgroundColor: "#18082E",
                    color: "white !important",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#18082E",
                      color: "white",
                    },
                  }}
                  onClick={handleCloseNavMenu}
                >
                  <Typography sx={{ padding: 3, lineHeight: "50px" }}>
                    <Link
                      className="text-decoration-none text-white"
                      href={`/${item.url}`}
                    >
                      {item.title}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}

              <MenuItem
                sx={{
                  backgroundColor: "#18082E",
                  color: "white",
                  display: "block",
                  alignItems: "center",
                  textAlign: "center",
                  justifyItems: "center",
                  "&:hover": {
                    backgroundColor: "#18082E",
                    color: "white",
                  },
                }}
                onClick={handleCloseNavMenu}
              >
                {
                  <Button
                    //   onClick={openOauth}
                    sx={{
                      borderRadius: "40px",
                      borderColor: "#ffffffba",
                      color: "#ffffffba",
                    }}
                    variant="contained"
                  // disabled={true}
                  >
                    Log In
                  </Button>
                }
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "none", md: "flex" },
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: "500",
              color: "#ffffffba",
            }}
          >
            {NavMenu.map((item, i) => (
              <Typography
                sx={{ padding: 3, cursor: "pointer", lineHeight: "50px" }}
                key={i}
              >
                <Link
                  className="text-decoration-none text-white"
                  href={`/${item.url}`}
                >
                  {item.title}
                </Link>
              </Typography>
            ))}
          </Box>
          {/* <Box
            sx={{
              fontSize: "24px",
              flexGrow: 0,
              display: { xs: "none", sm: "none", md: "flex" },
            }}
          >
            {
              <Button
                // onClick={openOauth}
                sx={{
                  borderRadius: "40px",
                  borderColor: "#ffffffba",
                  color: "#ffffffba",
                }}
                variant="outlined"
                // disabled={true}
              >
                Log In
              </Button>
            }
          </Box> */}
          <LoginButton />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
