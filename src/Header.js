import React from 'react'
import './Header.css';
import DehazeIcon from '@material-ui/icons/Dehaze';
import AddIcon from '@material-ui/icons/Add';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


function Header() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
    const handleClose = () => {
    setAnchorEl(null);
    };

    return (
        <div className="header">
            <div className="header__boxLeft">
                <IconButton>
                    <DehazeIcon />
                </IconButton>
                <h2><span>My</span> Classroom</h2>
            </div>
            <div className="header__boxRight">
                <IconButton>
                    <AddIcon onClick={handleClick}/>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Create a new Class</MenuItem>
                        <MenuItem onClick={handleClose}>Join a new Class</MenuItem>
                    </Menu>
                </IconButton>
                <IconButton>
                    <Avatar /> 
                </IconButton>
            </div>
            
        </div>
    )
}

export default Header
