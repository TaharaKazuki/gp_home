import { Properties } from 'csstype';
import { PluginAPI, CSSRuleObject } from 'tailwindcss/types/config';

type CSSRulesType = CSSRuleObject & Properties;

export const customUtilities = (plugin: PluginAPI) => {
  const { addUtilities } = plugin;

  const utilities: { [key: string]: CSSRulesType } = {
    '.custom-box-shadow': {
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
    },
    '.custom-hoge': {
      fontSize: '10rem',
    },
    '.h10': {
      fontSize: '100rem',
      animationTimeline: 'view()',
    },
  };

  addUtilities(utilities);
};

export const customUtilities2 = (plugin: PluginAPI) => {
  const { addUtilities } = plugin;

  addUtilities({
    '.custom-box': {
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
    },
    '.custom-fuga': {
      fontSize: '10rem',
    },
  });
};
