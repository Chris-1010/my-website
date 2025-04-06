import type { SiteConfig } from '$src/types/Config';

const config: SiteConfig = {
  title: 'Christopher Ahern',
  description: '',
  source: 'https://github.com/Chris-1010/my-website',
  baseUrl: 'https://cs1.ucc.ie/~ca3/',
  routeLinks: [
    { label: 'Home', route: '/', color: 'var(--accent-1, #ff0099)' },
    {
      label: 'Projects',
      route: '/projects',
      color: 'var(--accent-3, #01c0f0)',
      description: 'Personal projects',
    },
    {
      label: 'About',
      route: '/about',
      color: 'var(--accent-4, #1de691)',
      description: 'Bio and professional experience',
    },
  ],
  footerInfo: {
    author: 'Alicia Sykes',
    authorSite: 'https://github.com/lissy93',
    license: 'MIT',
    licenseLink: '',
    copyright: true,
  },
  githubUser: 'Chris-1010',
  defaultTheme: 'callisto',
  defaultLanguage: 'en',
  colorSchemes: {
    dark: {
      // background: '#101010',
      // foreground: '#fafafa',
      // 'dimmed-text': '#808080',
      // 'card-background': '#1b1b1b',
      // 'card-border': '1px solid #2a2a2a',
      // 'code-background': '#333',
      // accent: '#01c0f0',
      // 'accent-1': '#ff0099',
      // 'accent-2': '#b45eff',
      // 'accent-3': '#01c0f0',
      // 'accent-4': '#1de691',
      // 'home-accent-background': '#2a3367',
      // 'home-accent-foreground': 'var(--foreground)',
    },
    light: {
      // background: '#ededed',
      // foreground: '#2a3367',
      // 'card-background': '#F8F8FF',
      // 'card-border': '1px solid #0000001a',
      // 'home-accent-background': '#2a3367',
      // 'home-accent-foreground': 'var(--foreground)',
      // 'home-animated-gradient-outer': '#ffe7f500',
      // 'home-animated-gradient-inner': '#ff8ed05c',
    },
    callisto: {
      // background: '#020617',
      // foreground: '#dcdcdc',
      // 'dimmed-text': '#8892b0',
      // 'card-background': '#0b1021',
      // 'card-border': '1px solid #ffffff1a',
      // 'accent-1': '#00ccb4',
      // 'accent-2': '#00ccb4',
      // 'accent-3': '#00ccb4',
      // 'accent-4': '#00ccb4',
      // 'voronoi-background': '#0a192f',
      // 'home-accent-background': '#fff',
      // 'home-tile-background': '#0B1021',
      // 'home-animated-gradient-outer': '#0361f700',
      // 'home-animated-gradient-inner': '#2e2d40',
    },
  },
  workExperience: [
    {
      company: 'EMBL',
      companyUrl: 'https://www.embl.org/',
      companyLogo:
        'https://assets.emblstatic.net/vf/v2.5.0/assets/embl-favicon/assets/apple-touch-icon.png',
      jobTitle: 'Desktop Support Intern',
      datesWorked: 'March 2025 - Present',
      responsibilities: '',
      technologies: ['Java', 'Python', 'Bash'],
    },
  ],
  projectComplimentaryData: [
    {
      name: 'Tunaro',
      thumbnail: '',
      featured: true,
    },
  ],
  contact: {
    name: 'Christopher Ahern',
    email: '',
    website: '',
    socials: {
      GitHub: 'Chris-1010',
      LinkedIn: 'in/christopher1010',
    },
    socialButtonLimit: 2,
    mailerConfig: {
      service_id: 'gmail',
      template_id: 'website-contact-form',
      user_id: 'user_K6F041q1dQvz8SJLSOZCR',
      template_params: {},
    }
  },
  about: {
    intro: "",
    bio: [
      `As you can see from the minimal amount of information on this site, I am not too far into my career journey yet.`,
      `As of May 2025, I have completed three out of four years of my Computer Science honours degree in UCC, Cork Ireland.`,
      `While learning valuable material in my course, I regularly keep myself busy with side projects which interest me.`,
      `When choosing a tech stack for these projects, I usually like to challenge myself by choosing a technology or framework I haven't used in the past, ensuring I'm always building upon my experience!`  
    ],
    picture: 'C_Logo.png',
  },
  techStack: {
    backend: [
      {
        language: 'Python',
        projects: [],
      },
      {
        language: 'Java',
        projects: ['raytracing'],
      }
    ],
    frontend: [
      {
        language: 'React',
        projects: ['calendar-stats-viewer'],
      },
      {
        language: 'HTML',
        projects: [
          '',
        ],
      },
    ],
    mobile: [
      {
        language: 'Android',
        projects: [
          'Tunaro',
        ],
      }
    ],
  }
};

export default config;
