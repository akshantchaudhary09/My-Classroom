import React from 'react';
import './Home.css';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';
import Shake from 'react-reveal/Shake';

function Home() {
    return (
        <div className="home">
            {/* <div style="padding-top:126.667%;position:relative;"><iframe src="https://gifer.com/embed/FLRx" width="100%" height="100%" style='position:absolute;top:0;left:0;' frameBorder="0" allowFullScreen></iframe></div><p><a href="https://gifer.com">via GIFER</a></p> */}
            <div className="home__img">
                <Zoom left>
                    <img src="./images/studentStudying.png" alt="studentStuding" />
                </Zoom>
            </div>
            <div className="home__wrapper">
                <div className="home__wrapper__div1">
                    <Zoom left>
                        <h2>Welcome to <span>My-Classroom.</span></h2>
                    </Zoom>
                    <Zoom left>
                        <h2>Log In to Get Started!</h2>
                    </Zoom>
                </div>
                <div className="home__wrapper__div2">
                    <Link to='/login' className="home__btn">
                        <Zoom left>
                            <Shake>
                                <Button variant="contained" color="secondary" className="shk" >
                                    <p className="home__btnText">Log in As a Teacher</p>
                                </Button>
                            </Shake>
                        </Zoom>
                    </Link>
                    <br />
                    <Link to='/login' className="home__btn">
                        <Zoom left>
                            <Shake>
                                <Button variant="contained" color="secondary" className="shk">
                                    <p className="home__btnText">Log in As a Student</p>
                                </Button>
                            </Shake>
                        </Zoom>
                    </Link>
                </div>
                <p>One place destination for all your Classroom needs.</p>
            </div>
           
        </div>
    )
}

export default Home
