import React from 'react';
import Grid, { Cell } from '../../../../node_modules/react-mdl/lib/Grid';
import HomeList from './HomeList';
import Button      from 'react-mdl/lib/Button';

if (process.env.BROWSER) {
    require('./HomePage.less');
}

export default class HomePage extends React.Component {

    render() {
        return (
            <div className='HomePage'>
                <div className="HomePage__top">
                    <div className="HomePage__VideoContainer">
                        <iframe className="HomePage__Frame"
                                src="https://www.youtube.com/embed/DKUimZvRyqg"
                        ></iframe>
                    </div>
                    <div className="HomePage__btnContainer">
                        <Button className='HomePage__btn' accent raised ripple>
                            Sign Up for Free
                        </Button>
                    </div>
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
