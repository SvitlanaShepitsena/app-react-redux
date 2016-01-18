'use strict';

import Jed from 'jed';
import { sprintf } from '../utils';

export default class Tools {
    constructor({localeData, locale}) {
        this.jed = new Jed(localeData);
        this.locale = locale;
    }

    l = (text) => {
        return this.jed.gettext(text);
    }

    ngettext = (singular, plural, amount) => {
        return this.jed.ngettext(singular, plural, amount);
    }

    getLocale = () => {
        return this.locale.toLowerCase();
    }


}
