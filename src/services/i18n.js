import { derived } from "svelte/store";
import { dictionary, locale, _ } from "svelte-i18n";

const MESSAGE_FILE_URL_TEMPLATE = 'http://localhost:3000/lang/{locale}.json';

let cachedLocale;

async function setupI18n({ withLocale: _locale } = { withLocale: 'en' }) {
    const messsagesFileUrl = MESSAGE_FILE_URL_TEMPLATE.replace('{locale}', _locale);
    console.log(messsagesFileUrl);

    return await fetch(messsagesFileUrl)
        .then(response => response.json())
        .then((messages) => {
            dictionary.set({ [_locale]: messages });
            cachedLocale = _locale;
            locale.set(_locale);
        });
}

const isLocaleLoaded = derived(locale, $locale => typeof $locale === 'string');

export { _, locale, setupI18n, isLocaleLoaded };