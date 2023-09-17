import { colors } from './colors';

export const newTypographyStyle = {
  textBase: {
    color: colors.basic.primary,
    letterSpacing: 0.3,
    flexWrap: 'wrap' as const,
    padding: 0,
  },
  h1: {
    lineHeight: 29,
    fontSize: 24,
  },
  h2: {
    lineHeight: 24,
    fontSize: 20,
  },
  h3: {
    lineHeight: 20,
    fontSize: 16,
  },

  text: {
    lineHeight: 20,
    fontSize: 16,
  },
  text2: {
    lineHeight: 18,
    fontSize: 12,
  },
  text3: {
    lineHeight: 16,
    fontSize: 12,
  },
  caption: {
    lineHeight: 10,
    fontSize: 8,
  },
  caption2: {
    lineHeight: 10,
    fontSize: 8,
  },
  textSurface: {
    color: colors.brand.surface,
  },
  textError: {
    color: colors.accent.criticalDark,
  },
  textSoft: {
    color: colors.basic.secondary,
  },
  textLight: {
    color: colors.basic.inverse,
  },
  textSuccess: {
    color: colors.brand.accent,
  },
};
