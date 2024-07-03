import { Properties } from 'csstype';
import { PluginAPI, CSSRuleObject } from 'tailwindcss/types/config';

type CSSRulesType = CSSRuleObject & Properties;

export const customUtilities = (plugin: PluginAPI) => {
  const { addUtilities } = plugin;

  const utilities: { [key: string]: CSSRulesType } = {
    '.custom-box-shadow': {
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
    },
  };

  addUtilities(utilities);
};
