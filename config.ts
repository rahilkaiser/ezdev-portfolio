// A list of all locales that are supported
import {LocalePrefix} from 'next-intl/routing';


export const locales = ['en', 'de'] as const;

export const localePrefix = 'always' satisfies LocalePrefix;