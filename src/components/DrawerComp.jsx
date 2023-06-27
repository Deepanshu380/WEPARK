import React from 'react'
import { Drawer,IconButton,List, ListItemButton, ListItemText} from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from 'react';

import { Link } from "react-router-dom";
const navItems = ["Home", "About Us", "Contact Us"];
const navigate = ["/", "/aboutUs", "/contactUs"];

const DrawerComp = () => {
 
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(!openDrawer)}
      >
        <List
          style={{
            backgroundColor: "black",
            width: "10rem",
            height: "100vh",
            margin: "0rem",
          }}
        >
          { navItems.map( (items, index) => (
            <ListItemButton
              onClick={() => setOpenDrawer(!openDrawer)}
              key={index}
            >
              <Link
                  to={navigate[index]}
                  style={{ textDecoration: "none" }}
                >
              <ListItemText
                style={{
                  color: "white",
                  borderBottom: "1px solid white",
                  paddingBottom: "0.5rem",

                  width: "8rem"
                }}
              >
                      {items}
                </ListItemText>
                </Link>
            </ListItemButton>
       
       ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
}

export default DrawerComp
