const plugin = require('tailwindcss/plugin')

const textStyles = plugin(function ({ addUtilities }) {
  const styles = {
    '.inclined-text-5xl-roboto-black': {
      '@apply text-5xl font-roboto font-black tracking-1': {},
    },
    '.inclined-text-4xl-roboto-black': {
      '@apply text-4xl font-roboto font-black tracking-1': {},
    },
    '.inclined-text-3xl-roboto-black': {
      '@apply text-3xl font-roboto font-black tracking-1': {},
    },
    '.inclined-text-3xl-roboto-regular': {
      '@apply text-3xl font-roboto font-normal tracking-3': {},
    },
    '.inclined-text-2xl-roboto-black': {
      '@apply text-2xl font-roboto font-black tracking-1': {},
    },
    '.inclined-text-2xl-roboto-regular': {
      '@apply text-2xl font-roboto font-normal tracking-3': {},
    },
    '.inclined-text-xl-proxima-bold': {
      '@apply text-xl font-proxima font-bold tracking-3': {},
    },
    '.inclined-text-xl-proxima-semibold': {
      '@apply text-xl font-proxima font-semibold tracking-3': {},
    },
    '.inclined-text-lg-proxima-semibold': {
      '@apply text-lg font-proxima font-semibold tracking-3': {},
    },
    '.inclined-text-base-proxima-bold': {
      '@apply text-base font-proxima font-bold tracking-3': {},
    },
    '.inclined-text-base-proxima-semibold': {
      '@apply text-base font-proxima font-semibold tracking-3': {},
    },
    '.inclined-text-base-roboto-mono-bold': {
      '@apply text-base font-mono font-bold': {},
    },
    '.inclined-text-base-roboto-mono-regular': {
      '@apply text-base font-mono font-normal': {},
    },
    '.inclined-text-sm-roboto-mono-bold': {
      '@apply text-sm font-mono font-bold': {},
    },
    '.inclined-text-sm-roboto-mono-regular': {
      '@apply text-sm font-mono font-normal': {},
    },
    '.inclined-text-xs-roboto-mono-bold': {
      '@apply text-xs font-mono font-bold': {},
    },
    '.inclined-text-xs-roboto-mono-medium': {
      '@apply text-xs font-mono font-medium': {},
    },
    '.inclined-text-xs-roboto-mono-medium-italic': {
      '@apply text-xs font-mono font-medium italic': {},
    },
    '.inclined-text-xs-roboto-mono-regular': {
      '@apply text-xs font-mono font-normal': {},
    },
  }
  addUtilities(styles, { variants: ['responsive'] })
})

module.exports = textStyles
