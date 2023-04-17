module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Refugio Libertad',
  siteDescription:
    'Refugio Libertad. Una experiencia de Tierra, Techo, Trabajo y Conectividad.',
  siteType: 'Person', // schema
  locale: 'es_AR',
  lang: 'es',
  skipContent: 'Skip to content',
  author: 'dbellomo', // author's name. Must be set.
  authorEmail: 'tjd8n42b@duck.com', // email of the author
  authorWebsite: '', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#8fce00', // '#DD4462', //  Manifest: defines the default theme color for the application
  themeBgColor: '#8fce00', // '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg',
    twitterSite: '@Traut_Cordoba', // i.e. @site - twitter profile of the site
    twitterCreator: '', // i.e. @author -  twitter profile of the site
    mastodonProfile: '' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'Refugio Libertad',
    description:
      'Trabajadores Unidos por la Tierra. Refugio Libertad - Una experiencia de Tierra, Techo y Trabajo.'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: 'Refugio Libertad',
    street: '',
    city: 'Villa Los Molinos',
    state: 'Córdoba',
    zip: '',
    mobileDisplay: '',
    mobileCall: '',
    email: 'TrabajadorasUnidasPorLaTierra@gmail.com',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
