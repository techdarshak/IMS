
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Input } from '@mui/icons-material';
import './Addsite.css' 

const AddSite = () => {
    const [state, setState] = React.useState({
    
        left: true,
        right: true,
        bootam: true,
        // top: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box 
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 430 }}
          role="presentation"
          onClick={ toggleDrawer(anchor, true)}
          onKeyDown={toggleDrawer(anchor, true)}
        >
          <div className='site'>
              <p className='large'>Add New Site</p>
          <div>
            <form className='addsite'>
              <h6 className='small'>Site Name</h6>
              <input className='textbox'
                type="text"
                placeholder='Enter Site Name'
              />
              <h6 className='small'>Address</h6>
              <input className='textbox'
                type="text"
                placeholder='Enter Address'
              />
              <h6 className='small'>Start Date</h6>
              <input className='textbox'
                type="date"
                placeholder='Select Start Date '
              />
              <h6 className='small'>End Date</h6>
              <input className='textbox'
                type="date"
                placeholder='Select End Date'
              />
              <button className='btn' type="submit">Save</button>
            </form>
                  
            </div>
            </div>
           {/* <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
        </Box> 
      );
    
      return (
        <div>
          {[ 'right'].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button className='btn' onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
               <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
              
            </React.Fragment>
          ))}
        </div>
      );
}

export default AddSite