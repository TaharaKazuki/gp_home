import { Properties } from 'csstype';
import { PluginAPI, CSSRuleObject } from 'tailwindcss/types/config';

type CSSRulesType = CSSRuleObject & Properties;

const COLORS = {
  ACCENT: '#f19687',
  WHITE: '#fff',
};

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
      backgroundColor: accentColor || COLORS.ACCENT,
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
      color: COLORS.WHITE,
    },
    '.input': {
      height: '54px',
      backgroundColor: COLORS.WHITE,
      borderRadius: '9999px',
      padding: '0 1.5rem',
    },
    textarea: {
      height: '120px',
      backgroundColor: COLORS.WHITE,
    },
  };
  addUtilities(utilities);
};
