import VueI18n from 'vue-i18n';
import { Strings } from './strings';

export function createLocalization() {
    return new VueI18n({
        locale: 'en',
        messages: Strings
    })
}
