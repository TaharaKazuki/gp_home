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
    : 'sans-serif';

  const utilities: { [key: string]: CSSRulesType } = {
    '.btn': {
      backgroundColor: accentColor || '#f19687',
      minWidth: '178px',
      borderTopLeftRadius: '30px',
      borderBottomLeftRadius: '30px',
      borderTopRightRadius: '4px',
      borderBottomRightRadius: '24px',
      fontFamily: fontFamilyPrimaryString,
      textTransform: 'uppercase',
      letterSpacing: '1px',
      height: '58px',
      paddingLeft: '2rem',
      paddingRight: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
    },
  };
  addUtilities(utilities);
};
