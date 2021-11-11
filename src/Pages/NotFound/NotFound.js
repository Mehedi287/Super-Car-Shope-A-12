import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import "./NoteFound.css"
const NotFound = () => {
    return (
        <div>
            <div className="not-found">
                <section class="notFound">
                    <div class="img">
                        <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage" />
                        <img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly" />
                    </div>
                    <div class="text">
                        <h1>404</h1>
                        <h2>PAGE NOT FOUND</h2>
                        <h3>BACK TO HOME?</h3>
                        <Button><Link to="/">Back TO Home </Link> </Button>
                        <a href="#" class="yes">YES</a>
                        <a href="https://www.youtube.com/watch?v=G3AfIvJBcGo">NO</a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default NotFound;