const base = import.meta.env.BASE_URL;

// ─── Személyes adatok ──────────────────────────────────────────────
// Az üresen hagyott mezők egyszerűen nem jelennek meg az oldalon.
export const profile = {
  name: 'Bartha István Zénó',
  initials: 'BZ',
  email: 'zenoka14@gmail.com',
  phone: '+36 20 263 7679',
  github: 'https://github.com/juanmiguelaasg',
  linkedin: 'https://www.linkedin.com/in/z%C3%A9n%C3%B3-bartha-a9814b354',
  photo: `${base}images/zeno.png`, // üresen monogram jelenik meg
  cv: '',           // pl. `${base}BarthaZeno_CV.pdf` – üresen nincs letöltés gomb
};

// Wikimedia Commons képek (szabad licenc). Közvetlenül a Wikimedia szerveréről töltődnek be.
const wm = (path) => `https://upload.wikimedia.org/wikipedia/commons/${path}`;

// Projektek strukturális adatai. A szövegek a src/i18n/translations.js-ben vannak,
// ugyanebben a sorrendben.
export const projects = [
  {
    id: 'process-monitor',
    category: 'ops',
    tags: ['Python', 'SQL', 'Time series', 'Anomaly detection', 'Webhooks', 'Docker'],
    ops: true,
    github: 'https://github.com/juanmiguelaasg/SystemProcessMonitor',
    image: `${base}images/projects/process-monitor.jpg`,
    credit: 'leokoivulehto, CC BY 2.0, Flickr',
  },
  {
    id: 'api-health-checker',
    category: 'ops',
    tags: ['Python', 'REST API', 'YAML', 'Azure DevOps', 'SLA', 'HTML/CSS'],
    ops: true,
    github: 'https://github.com/juanmiguelaasg/api-health-checker',
    image: `${base}images/projects/api-health-checker.jpg`,
    credit: 'ProjectManhattan, CC BY-SA 3.0, Wikimedia Commons',
  },
  {
    id: 'ai-log-analyzer',
    category: 'ops',
    tags: ['Python', 'LLM', 'RAG', 'Clustering', 'Human-in-the-loop'],
    ops: true,
    github: 'https://github.com/juanmiguelaasg/ai-log-analyzer',
    image: `${base}images/projects/ai-log-analyzer.jpg`,
    credit: 'Christiaan Colen, CC BY-SA 2.0, Flickr',
  },
  {
    id: 'bizplan',
    category: 'ops',
    tags: ['Projekttervezés', 'Folyamatok', 'Költségvetés', 'Kockázatkezelés'],
    university: true,
    image: `${base}images/projects/business-plan.jpg`,
    credit: 'plantoo47, CC BY-SA 2.0, Flickr',
  },
  {
    id: 'raycaster',
    category: 'software',
    tags: ['C#', '.NET', 'Raycasting', 'Console'],
    university: true,
    github: 'https://github.com/juanmiguelaasg/DOOMgame',
    image: `${base}images/projects/raycaster.jpg`,
    credit: 'dvanzuijlekom, CC BY-SA 2.0, Flickr',
  },
  {
    id: 'smartbin',
    category: 'hardware',
    tags: ['C', 'Arduino', 'AVR registers', 'Interrupts', 'Sensors'],
    university: true,
    github: '',
    image: `${base}images/projects/smart-bin.jpg`,
    credit: 'Eileen M. Kane, CC BY 2.0, Flickr',
  },
  {
    id: 'ros2vacuum',
    category: 'hardware',
    tags: ['ROS2', 'Python', 'Robotics', 'Simulation'],
    university: true,
    github: '',
    image: `${base}images/projects/robot-vacuum.jpg`,
    imagePosition: 'object-left',
    credit: 'Mamirobothk, CC BY-SA 3.0, Wikimedia Commons',
  },
];

// Iskolaképek – sorrend: Óbudai Egyetem, MATE, Szent Margit Gimnázium, Ádám Jenő Általános Iskola.
// Sorrend: Óbudai Egyetem, MATE, Szent Margit Gimnázium, Ádám Jenő Általános Iskola.
// Ha egy fájl hiányzik, az oldal egy ikont mutat helyette.
export const educationLogos = [
  `${base}images/schools/obuda.jpg`,
  `${base}images/schools/mate.png`,
  `${base}images/schools/szent-margit.jpg`,
  `${base}images/schools/adam-jeno.jpg`,
];
export const educationImagePositions = ['object-center', 'object-center', 'object-center', 'object-left'];

// Képek forrása – a láblécben jelenik meg.
const flickr = (id) => `https://www.flickr.com/photo.gne?id=${id}`;
export const imageCredits = [
  { title: 'Google early server rack', author: 'leokoivulehto', license: 'CC BY 2.0', url: flickr('2437695125') },
  { title: 'Network cables and switch', author: 'ProjectManhattan', license: 'CC BY-SA 3.0', url: 'https://commons.wikimedia.org/wiki/File:Network_cables_and_switch.jpg' },
  { title: 'Source code security plugin', author: 'Christiaan Colen', license: 'CC BY-SA 2.0', url: flickr('20607701226') },
  { title: 'Business planning cards', author: 'plantoo47', license: 'CC BY-SA 2.0', url: flickr('5125497355') },
  { title: 'Retro Gaming TV sets', author: 'dvanzuijlekom', license: 'CC BY-SA 2.0', url: flickr('8060015821') },
  { title: 'Arduino board', author: 'Eileen M. Kane', license: 'CC BY 2.0', url: flickr('9292046985') },
  { title: 'Mopping vacuum cleaner robotic', author: 'Mamirobothk', license: 'CC BY-SA 3.0', url: 'https://commons.wikimedia.org/wiki/File:Mopping_vacuum_cleaner_robotic.jpg' },
];
