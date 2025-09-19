export type Project = {
  name: string;
  description: string;
  url: string;
};

export const projects: Project[] = [
  { 
    name: 'Auditory Pareidolia', 
    description: 'An experiment in pattern recognition in sounds',
    url: 'https://AuditoryPareidolia.com' 
  },
  { 
    name: 'Fake Job Spotter', 
    description: 'AI-powered job scam detection and prevention',
    url: 'https://fakejobspotter.com' 
  },
  { 
    name: 'Frehab', 
    description: 'Free, anonymous online drug and alcohol treatment',
    url: 'https://frehab.org' 
  },
  { 
    name: 'InvisAbilities', 
    description: 'Empowering and connecting individuals with invisible disabilities',
    url: 'https://invisabilities.com' 
  },
  { 
    name: 'Resume Butler', 
    description: 'AI-powered resume optimization',
    url: 'https://resume-butler.com' 
  },
  { 
    name: 'Unit Shopper', 
    description: 'Smart unit-value search engine',
    url: 'https://unitshopper.com' 
  },
];


