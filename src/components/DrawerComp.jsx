import React from 'react'
import { Drawer,IconButton,List, ListItemButton, ListItemText} from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from 'react';
const navItems = ["How We Work", "About Us", "Developers", "Contact Us"];
const DrawerComp = () => {
 
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(!openDrawer)}>
              <List> 
                  {navItems.map((items, index) => (
                    <ListItemButton onClick={() => setOpenDrawer(!openDrawer)} key={index}>
                      <ListItemText>{items}</ListItemText>
                  </ListItemButton>
                  ))
                }
        </List>
      </Drawer>
          <IconButton sx={{color: "white", marginLeft: "auto"}}
       onClick={() => setOpenDrawer(!openDrawer)} >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
}

export default DrawerComp
