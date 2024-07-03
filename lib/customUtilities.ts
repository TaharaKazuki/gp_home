import { Properties } from 'csstype';
import { PluginAPI, CSSRuleObject } from 'tailwindcss/types/config';

type CSSRulesType = CSSRuleObject & Properties;

export const customUtilities = (plugin: PluginAPI) => {
  const { addUtilities, theme } = plugin;

  const accentColor = theme('colors.accent.DEFAULT') as string | undefined;
  const fontFamilyPrimary = theme('fontFamily.primary');

  const fontFamilyPrimaryString = Array.isArray(fontFamilyPrimary)
    ? fontFamilyPrimary.join(', ')
    : typeof fontFamilyPrimary === 'string'
    ? fontFamilyPrimary
    : 'YourFontFamily';

  const utilities: { [key: string]: CSSRulesType } = {
    '.btn': {
      backgroundColor: accentColor || '#f19687',
      'min-width': '178px',
      'border-top-left-radius': '30px',
      'border-bottom-left-radius': '30px',
      'border-top-right-radius': '4px',
      'border-bottom-right-radius': '24px',
      'font-family': fontFamilyPrimaryString,
      'text-transform': 'uppercase',
      'letter-spacing': '1px',
      height: '58px',
      'padding-left': '2rem',
      'padding-right': '1.5rem',
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      color: '#fff',
    },
  };
  addUtilities(utilities);
};
