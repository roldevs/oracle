
import Bluebird from 'bluebird';
import i18next from 'i18next';
import R from 'ramda';
import YAML from 'yaml';
import {readFile} from '../file';

interface ILanguageOptions {
  locale: string;
  debug?: boolean;
}

type TLanguage = (options: ILanguageOptions) => {
  init: () => Bluebird<i18next.TFunction>;
};

const filePath: (rootPath: string, locale: string) => string =
(rootPath, locale) => `${rootPath}/${locale}.yml`;

const init18Options: (options: ILanguageOptions) => (locales: any) => any =
(options) => (locales) => {
  return {
    lng: options.locale,
    debug: R.defaultTo(false, options.debug),
    resources: {
      [options.locale]: {translation: locales},
    },
  };
};

const init18: (initOptions: any) => Bluebird<i18next.TFunction> =
(initOptions) => {
  return new Bluebird(function(resolve: any, reject: any) {
    i18next.init(initOptions, (err, t: i18next.TFunction) => {
      if (err) {
        reject(err);
      }
      resolve(t);
    });
  });
};

const languageModule: TLanguage =
(options) => {
  const init: () => Bluebird<any> =
  () => {
    return readFile(
      filePath('./locales', options.locale),
    ).then(YAML.parse).then(init18Options(options)).then(init18);
  };

  return {
    init,
  };
};

export {
  TLanguage,
  ILanguageOptions,
  languageModule,
};
