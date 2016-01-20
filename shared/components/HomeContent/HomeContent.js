import React from 'react';
import Grid, {Cell} from 'react-mdl/lib/Grid';
import Button      from 'react-mdl/lib/Button';
import HomeList from '../HomeList/HomeList.js';

if (process.env.BROWSER) {
    require('./HomeContent.less');
}

export default class HomeContent extends React.Component {

    render() {
        return (
            <div className='HomePage'>
                <div className="HomePage__top">
                    <div className="HomePage__content--centered">
                        <h1>React with Redux 201</h1>
                        <h2>Best Practices for Production Applications</h2>
                    </div>

                    <div className="HomePage__videoContent">
                        <a href="https://www.youtube.com/watch?v=DKUimZvRyqg" target="_blank">
                            <img className="HomePage__youtube"
                                 src={"https://img.youtube.com/vi/DKUimZvRyqg/0.jpg"}/>
                        </a>
                    </div>
                    <div className="HomePage__container--centered">
                        <Button className='HomePage__btn' accent raised ripple>
                            Sign Up for Free
                        </Button>
                    </div>
                </div>
                <div className="HomePage_iconsContainer">
                    <HomeList></HomeList>
                </div>
                <div className="HomePage_sliderContainer">
                    <div className="HomePage_slider">
                        <HomeList></HomeList>
                    </div>
                </div>
            </div>
        );
    }
}
