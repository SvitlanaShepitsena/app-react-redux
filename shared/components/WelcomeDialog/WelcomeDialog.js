import React, {Component, PropTypes} from 'react';
import cx                            from 'classnames';

import Dialog      from './../common/Dialog/Dialog.js';
import Button      from 'react-mdl/lib/Button';
import IconButton  from 'react-mdl/lib/IconButton';
import Checkbox    from 'react-mdl/lib/Checkbox';

import Isvg from 'react-inlinesvg';

if (process.env.BROWSER) {
    require('./WelcomeDialog.less');
}

export default class WelcomeDialog extends Component {

    static contextTypes = {i18n: PropTypes.object};

    static propTypes = {
        isOpen: PropTypes.bool.isRequired,
        onDismiss: PropTypes.func.isRequired
    };

    state = {
        currentSlide: 0,
        needToSkip: false
    };

    handleNextSlide = () => {
        const { currentSlide } = this.state;

        this.setState({
            currentSlide: currentSlide + 1
        });
    };

    handlePrevSlide = () => {
        const { currentSlide } = this.state;

        this.setState({
            currentSlide: currentSlide - 1
        });
    };

    handleSkipToggle = () => {
        const { needToSkip } = this.state;

        this.setState({
            needToSkip: !needToSkip
        });
    };

    handleClose = () => {
        const { needToSkip } = this.state;

        this.props.onDismiss(needToSkip);
    };

    render() {
        const { l } = this.context.i18n;
        const { onCreateTest, onDiscoverTests, onLearnMoreAboutCompany } = this.props;
        const { currentSlide, needToSkip } = this.state;

        const slides = [
            <div className='WelcomeDialog__slide'>
                <div className="WelcomeDialog__slide-image">
                    <div className="svg-primary">
                        <Isvg src="/static/images/welcome/01.svg" alt="Welcome Dialog Image"></Isvg>
                    </div>
                </div>

                <div className='WelcomeDialog__slide-content'>
                    <h1 className="color-brown-app"> {l('Welcome Slider')} </h1>
                    <p > {l('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac sapien id mauris.')} </p>
                    <Button className='WelcomeDialog__btn ' accent raised ripple onClick={this.handleNextSlide}>
                        {l('Learn more')}
                    </Button>
                </div>
            </div>,

            <div className='WelcomeDialog__slide'>
                <div className='WelcomeDialog__slide-image'>
                    <div className="svg-primary">
                        <span style={{display:"none"}}>text</span>
                        <Isvg src="/static/images/welcome/02.svg" alt="image"></Isvg>
                    </div>
                </div>

                <div className='WelcomeDialog__slide-content'>
                    <h1>{l('Page 2')}</h1>
                    <p> {l('Blandit orci sodales vel. Nam imperdiet felis eget quam aliquam, sit amet.')}</p>
                    <Button className='WelcomeDialog__btn ' primary raised onClick={onDiscoverTests}>
                        {l('Discover tests')}
                    </Button>
                </div>
            </div>,

            <div className='WelcomeDialog__slide'>
                <div className='WelcomeDialog__slide-image'>
                    <div className="svg-primary">
                        <Isvg src="/static/images/welcome/03.svg" alt="image"></Isvg>
                    </div>
                </div>

                <div className='WelcomeDialog__slide-content'>
                    <h1>{l('Page 3')}</h1>
                    <p> {l('Blandit orci sodales vel. Nam imperdiet felis eget quam aliquam, sit amet.')}</p>
                    <Button className='WelcomeDialog__btn btn-primary' raised onClick={onCreateTest}>
                        {l('Create a vacancy')}
                    </Button>
                </div>
            </div>,

            <div className='WelcomeDialog__slide'>
                <div className='WelcomeDialog__slide-image svg-primary'>
                    <Isvg src="/static/images/welcome/05.svg" alt="image"></Isvg>
                </div>

                <div className='WelcomeDialog__slide-content'>
                    <h1>{l('Page 4')}</h1>
                    <p> {l('Blandit orci sodales vel. Nam imperdiet felis eget quam aliquam, sit amet.')}</p>
                    <Button className='WelcomeDialog__btn btn-primary' raised onClick={onCreateTest}>
                        {l('Create a test')}
                    </Button>
                </div>
            </div>
        ];

        const currentSlideIndex = currentSlide % slides.length;

        return (
            <div className='WelcomeDialog'>
                <Dialog
                    className='WelcomeDialog__dialog'
                    onRequestClose={this.handleClose}
                    {...this.props}>
                    <div className='WelcomeDialog__content'>
                        <IconButton ripple
                                    className='WelcomeDialog__close'
                                    name='close'
                                    onClick={this.handleClose}
                        />

                        <div className='WelcomeDialog__carousel'>
                            <IconButton ripple
                                        name='keyboard_arrow_left'
                                        disabled={currentSlide === 0}
                                        onClick={this.handlePrevSlide}
                            />

                            <div className='WelcomeDialog__slide-wrapper'>
                                {slides[currentSlideIndex]}
                            </div>

                            <IconButton ripple
                                        className="btn-icon-grey"
                                        name='keyboard_arrow_right'
                                        onClick={this.handleNextSlide}
                            />
                        </div>

                        <span className='WelcomeDialog__skip'>
                            <Checkbox ripple
                                      label={l('Do not show me this message again')}
                                      checked={needToSkip}
                                      onChange={this.handleSkipToggle}
                            />
                        </span>
                    </div>
                </Dialog>
            </div>
        );
    }
}
