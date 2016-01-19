import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
export const fields = ['name', 'email', 'message'];

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

    handleSubmit(e){
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
        return (<form>
                <div>
                    <label>Name</label>
                    <div>
                        <input type="text" placeholder="Name" {...name}/>
                    </div>
                </div>

                <div>
                    <label>Email</label>
                    <div>
                        <input type="email" placeholder="Email" {...email}/>
                    </div>
                    {email.touched && email.error && <div>{email.error}</div>}
                </div>
                <div>
                    <label>Message</label>
                    <div>
            <textarea
                {...message}
                value={message.value || ''}
            />
                        {message.touched && message.error && <div>{message.error}</div>}
                    </div>
                </div>
                <div>
                    <button disabled={submitting} onClick={this.handleSubmit.bind(this)}>
                        {submitting ? <i/> : <i/>} Submit
                    </button>
                    <button disabled={submitting} onClick={resetForm}>
                        Clear Values
                    </button>
                </div>
            </form>
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