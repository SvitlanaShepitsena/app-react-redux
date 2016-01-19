import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
export const fields = ['name', 'email', 'message'];
import {Card, CardTitle, CardActions} from 'react-mdl/lib/Card';
import Button      from 'react-mdl/lib/Button';

if (process.env.BROWSER) {
    require('./ContactForm.less');
}
class ContactForm extends Component {
    constructor(props) {
        // Running constructor of Parent (React.Component) for binding this to object.
        // Dynamically assigned global property This is always a component itself.
        super(props);
    }

    static propTypes = {
        fields: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        resetForm: PropTypes.func.isRequired,
        submitting: PropTypes.bool.isRequired
    };

    handleSubmit(e) {
        e.preventDefault();
        console.log('Your message have been sent');
        this.props.resetForm();
    }

    render() {
        const {
            fields: {name, email, message},
            resetForm,
            submitting
        } = this.props;
        return (
            <Card shadow={1} className="ContactForm__Card">
                <form>
                    <div className="ContactForm__input-container">
                        <input className="mdl-textfield__input" type="text" placeholder="Name" {...name}/>
                    </div>

                    <div className="ContactForm__input-container">
                        <input className="mdl-textfield__input" type="email" placeholder="Email" {...email}/>
                        {email.touched && email.error &&
                        <span className="ContactForm__error">{email.error}</span>}
                    </div>
                    <div className="ContactForm__input-container">
                        <textarea className="mdl-textfield__input" rows="3" {...message}
                                  value={message.value || ''}/> {message.touched && message.error &&
                    <span className="ContactForm__error">{message.error}</span>}
                    </div>
                    <div>
                        <Button className='ContactForm__button' primary raised ripple
                                disabled={submitting}
                                onClick={this.handleSubmit.bind(this)}>
                            {submitting ? <i/> : <i/>}
                            Submit
                        </Button>
                        <Button miny raised ripple
                                className="ContactForm__button"
                                disabled={submitting}
                                onClick={resetForm}>
                            Clear
                        </Button>
                    </div>
                </form>
            </Card>
        );
    }
}

const validate = values => {

    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.message) {
        errors.message = 'Required';
    }

    return errors;
};

export default reduxForm({
    form: 'ContactForm',
    fields,
    validate
})(ContactForm);