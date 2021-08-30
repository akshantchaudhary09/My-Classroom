import React, { useState } from 'react'
import './Body.css';
import Card from './Card.js';
import Button from '@material-ui/core/Button';
import ListAltIcon from '@material-ui/icons/ListAlt';
import CalendarTodaySharpIcon from '@material-ui/icons/CalendarTodaySharp';
import IconButton from '@material-ui/core/IconButton';
import { useAuth } from "./AuthContext"
import { Link, useHistory } from "react-router-dom"
import Alert from '@material-ui/lab/Alert';

function Body() {

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")
    
        try {
          await logout()
          history.push("/login")
        } catch {
          setError("Failed to log out")
        }
      }

    return (
        <div className="body">
            <div className="body__subHeader">
                <div>
                    <IconButton>
                        <ListAltIcon /><p className="body__subHeader__text">To do</p>
                    </IconButton>
                    <IconButton>
                        <CalendarTodaySharpIcon /><p className="body__subHeader__text">Calendar</p>
                    </IconButton>
                </div>
                <Button variant="contained" color="secondary" onClick={handleLogout}>
                    <p>Log Out</p>
                </Button>
            </div>
            {error && <Alert variant="filled" severity="error">{error}</Alert>}
            <div className="body__cards">
                <Card bgColor="blue"/>
                <Card />
                <Card bgColor="grey"/>
                <Card bgColor="yellow" />
                
            </div>
        </div>
    )
}

export default Body
