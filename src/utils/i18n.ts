import i18n from "../locales";

export function t(s: string, namespace?: object): string {
    return i18n.t(s, namespace);
}

const i18nTyped = { t };

export default i18nTyped;
