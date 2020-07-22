module.exports = {
  siteTitle: 'Avinash Murugappan | Software Engineer',
  siteDescription:
    'Avinash Murugappan is a software engineer based in United States skilled in building (and occasionally designing) awesome websites, web applications, mobile applications and everything in between.',
  siteKeywords:
    'Avinash Murugappan, Avinash, Murugappan, avinash, software engineer, front-end engineer, web developer, javascript, gmu',
  siteUrl: 'https://avinashmurugappan.netlify.app/',
  siteLanguage: 'en_US',
  name: 'Avinash Murugappan',
  location: 'Aldie, VA',
  email: 'avinasharunachalam.am@gmail.com',
  github: 'https://github.com/Avinash-Murugappan',
  twitterHandle: '@avinash___27',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Avinash-Murugappan',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/avinash-murugappan-73b901164/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/avinash_arunachalam/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/avinash___27',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
