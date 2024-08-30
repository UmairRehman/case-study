/* eslint-disable import/no-unused-modules */
export const useTranslation = (): {
  t: (str: string) => string;
  i18n: {
    changeLanguage: () => Promise<void>;
  };
} => {
  return {
    t: (str: string) => str,
    i18n: {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      changeLanguage: () => new Promise(() => {})
    }
  };
};

export const initReactI18next = {
  type: "3rdParty",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init: (): void => {}
};
