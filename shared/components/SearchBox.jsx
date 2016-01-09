'use strict';

import React, {Component, PropTypes} from 'react';
import cx                            from 'classnames';

if ( process.env.BROWSER ) {
    require('./SearchBox.less');
}

import IconButton from 'react-mdl/lib/IconButton';
import Icon       from 'react-mdl/lib/Icon';

const ENTER_KEY = 13;

export default class SearchBox extends Component {
    static contextTypes = { i18n: PropTypes.object };

    static propTypes = {
        search   : PropTypes.string,
        onSearch : PropTypes.func
    };

    state = {
        isFocused: false
    };

    handleKeyDown = (e) => {
        if (e.keyCode === ENTER_KEY) {
            this.props.onSearch(e.target.value);
        }
    };

    handleSearchChange = (value) => {
        if (!value) {
            this.props.onSearch(value);
        }
    };

    render() {
        const { search, onSearch } = this.props;
        const { l } = this.context.i18n;

        const rootClassNames = cx('SearchBox', {
            'SearchBox--focused' : this.state.isFocused
        });

        return (
            <div className={rootClassNames}>
                <div
                    className='SearchBox__box'
                    onClick={() => this.refs.input.focus()}>
                    <Icon name='search' className='SearchBox__search-icon'/>

                </div>


            </div>
        );
    }
}

