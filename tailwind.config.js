const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,ts}"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Inter", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        "desktop": "500px",
        "mobile": "450px",
      },
      backgroundColor: {
        '1': {
          'static': '#ffffffff',
          'hover': '#f5f6f7ff',
        },
        '2': {
          'static': '#edf0f3ff',
          'hover': '#e1e5e8ff',
        },
        'divider': '#000d1a14',
        'button-primary': {
          'static': '#0055ffff',
          'hover': '#3177ffff',
          'active': '#003cb5ff',
        },
        'button-secondary': {
          'static': '#ffffff00',
          'hover': '#000d1a0f',
          'active': '#000d1a1f',
        },
      },
      textColor: {
        'color-label': {
          '1': '#000000ff',
          '2': '#000000b3',
          '3': '#00000080',
          '4': '#0000004d',
        },
        'color-link': {
          'static': '#0055ffff',
          'hover': '#3177ffff',
          'active': '#003cb5ff',
        },
        'color-button-primary': '#ffffffff',
        'color-button-secondary': '#0055ffff',
        'color-error': '#da0000ff',
        'color-warning': '#EAAD12',
        'color-success': '#30BF24EE',
       
      },
      borderColor: {
        'primary': '#ffffff1a',
        'secondary': '#000d1a0f',
        'button-primary': '#ffffff1a',
        'button-secondary': '#000d1a0f',
        'divider': '#000d1a14',
      },
      colors: {
        "light-blue": "#90B8F6",
        "navy-blue": "#0055FF",
        "dark-blue": "#003CB5",
        "black-blue": "#001033",
        "light-green": "#F5FFF3",
        "dark-green": "#005F00",
        "white": "#FFFFFF",
        "black": "#000000",
        "primary": "#0055FF",
        "secondary": "#F8F9FD",
        "link-static": "#0055FF",
        "link-hover": "#3177FF",
        "link-active": "#003CB5",
        "semantic-error": "#DA0000",        
        "divider": "rgba(0, 13, 26, 0.08)",
        "static": "#0055FF",
        "hover": "#3177FF",
        "active": "#003CB5",
        "error": "#DA0000",
      },
      dropShadow: {
        "tr-shadow" : "0px 0px 40px rgba(0, 0, 0, 0.04)"
      },
      fontWeight: {
        'normal': 450,
        'semi-bold': 600,
        'bold': 700,
      },
      fontSize: {
        'heading-1': ['44px', { lineHeight: '56px', fontWeight: 700 }],
        'heading-2': ['32px', { lineHeight: '40px',fontWeight: 700 }],
        'heading-3': ['20px', { lineHeight: '24px',fontWeight: 700 }],
        'label-bold-1': ['16px', { lineHeight: '20px',fontWeight: 600 }],
        'label-bold-2': ['14px', { lineHeight: '20px',fontWeight: 600 }],
        'label-bold-3': ['12px', { lineHeight: '16px',fontWeight: 600 }],
        'label-1': ['16px', { lineHeight: '20px',fontWeight: 450 }],
        'label-2': ['14px', { lineHeight: '20px',fontWeight: 450 }],
        'label-3': ['12px', { lineHeight: '16px',fontWeight: 450 }],
        'caption-1': ['12px', { lineHeight: '16px',fontWeight: 450 }],
        'caption-2': ['10px', { lineHeight: '12px',fontWeight: 450 }],
      },
      boxShadow: {
        'hovering': '0 4px 8px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.08), 0 0 1px rgba(0,0,0,0.02)',
        'resting': '0 1px 4px rgba(0,0,0,0.08), 0 0 1px rgba(0,0,0,0.02)',
        'flying': '0 8px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.08), 0 0 1px rgba(0,0,0,0.02)'
      },
      backgroundImage: {
        'welcome-gradient': 'linear-gradient(90deg, rgba(0, 8, 54, 0.56) 0%, rgba(0, 8, 54, 0.56) 100%), url("/img/bg-img.png")',
      },
      maxWidth: {
        '96': '96%',
      },
    },
    
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}','./src/**/*.css'],
  darkMode: false,
  variants: {},
}
