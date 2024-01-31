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
          <ListItemText primary="View Plans" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Add Recharge" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Add Add-ons" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="View Add-ons" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="View Recharge" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Delete Recharge" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Recharge History" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Feedback" />
        </ListItem>
        </>
        )}
      </List>
      
    </Drawer>
    </>
  );
};

export default SidePanel;
