import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

    

const SidePanel = () => {

    const [isPanelOpen, setPanelOpen] = useState(true);

    const togglePanel = () => {
      setPanelOpen(!isPanelOpen);
    };
    

  return (
    <>
    
     <Drawer variant="permanent" anchor="left" open={isPanelOpen}>
     
     <List>
        <ListItem>
          {isPanelOpen ? (
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={togglePanel}>
              <ChevronLeftIcon />
            </IconButton>
          ) : (
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={togglePanel}>
              <MenuIcon />
            </IconButton>
          )}
        </ListItem>
        {isPanelOpen && (
          <>
        <ListItem button>
          <ListItemText primary="Add Plans" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Add Add-ons" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="View Plans" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Edit Plans" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Delete Plans" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Recharge History" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Reviews" />
        </ListItem>
        </>
        )}
      </List>
      
    </Drawer>
    </>
  );
};

export default SidePanel;
