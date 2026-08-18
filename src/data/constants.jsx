import DoctorPreview from '../components/previews/DoctorPreview';
import VaccinationPreview from '../components/previews/VaccinationPreview';
import AIPreview from '../components/previews/AIPreview';
import SensitivePreview from '../components/previews/SensitivePreview';
import ComicsPreview from '../components/previews/ComicsPreview';
import MedicinePreview from '../components/previews/MedicinePreview';
import { DoctorIcon, HealthIcon, VoiceIcon, LockIcon, ComicIcon, MedicineIcon } from '../components/Icons';

export const features = [
  {
    id: 1,
    title: "Doctor Consultations",
    description: "Book appointments with doctors directly through the platform — no more switching between apps and websites.",
    icon: <DoctorIcon />,
    capabilities: [
      "Connect with specialists",
      "View available slots",
      "Simple booking flow"
    ],
    renderPreview: () => <DoctorPreview />
  },
  {
    id: 2,
    title: "Vaccination Planner",
    description: "Personalized vaccination schedule tracking, reminders, and knowledge base specifically tailored for women's key health stages.",
    icon: <HealthIcon />,
    capabilities: [
      "Schedule tracking",
      "Confidential reminders",
      "Vaccine schedule lookup"
    ],
    renderPreview: () => <VaccinationPreview />
  },
  {
    id: 3,
    title: "AI Health Assistant",
    description: "An adaptive, voice-interactive AI assistant designed to answer health questions and guide you to the right service.",
    icon: <VoiceIcon />,
    capabilities: [
      "Conversational guide",
      "Health information assistant",
      "Service navigator"
    ],
    renderPreview: () => <AIPreview />
  },
  {
    id: 4,
    title: "Sensitive Health Support",
    description: "A private space for questions about sexual and reproductive health, with confidential conversations and specialist guidance.",
    icon: <LockIcon />,
    capabilities: [
      "Confidential conversations",
      "Specialist consultations",
      "Private AI guidance"
    ],
    renderPreview: () => <SensitivePreview />
  },
  {
    id: 5,
    title: "Health Comics Section",
    description: "Engaging, easy-to-understand educational comics designed to explain complex health topics visually for younger audiences and first-time users.",
    icon: <ComicIcon />,
    capabilities: [
      "Engaging health topics",
      "Visual strip previews",
      "Friendly guidance"
    ],
    renderPreview: () => <ComicsPreview />
  },
  {
    id: 6,
    title: "Medicine Recommendations & Guidance",
    description: "Verified descriptions, purposes, and guidance for common medications, designed to prevent confusion and support health awareness.",
    icon: <MedicineIcon />,
    capabilities: [
      "Medicine search & details",
      "Confidential safety tips",
      "Interactive guidance cards"
    ],
    renderPreview: () => <MedicinePreview />
  }
];

export const helpOptions = [
  { id: 1, icon: '🌙', title: 'Understand my cycle', desc: 'Track and understand patterns' },
  { id: 2, icon: '📖', title: 'Learn about my health', desc: 'Explore approachable resources' },
  { id: 3, icon: '🩺', title: 'Talk to a doctor', desc: 'Find a consultation easily' },
  { id: 4, icon: '💬', title: 'Find a private community', desc: 'Ask questions anonymously' },
];

export const explorerSteps = [
  { id: 1, title: 'Track your cycle' },
  { id: 2, title: 'Learn what matters' },
  { id: 3, title: 'Consult when needed' },
  { id: 4, title: 'Connect privately' },
];
