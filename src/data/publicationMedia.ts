import congressRoom from '../assets/publications/congress/congress-room.jpg';
import dataMaturityHero from '../assets/publications/data-maturity/data-maturity-hero.svg';
import dbtArchitectureHero from '../assets/publications/dbt-architecture/dbt-architecture-hero.svg';
import defaultCover from '../assets/publications/default/publication-data-grid.svg';
import type { Lang } from '../i18n';

const fallbackMedia = {
  image: defaultCover,
  mode: 'cover' as const,
  position: 'center',
  alt: {
    es: 'Ilustración abstracta de una arquitectura y un flujo de datos.',
    en: 'Abstract illustration of a data architecture and data flow.',
  },
};

const publicationMedia = {
  'communication-also-part-of-engineering': {
    image: congressRoom,
    mode: 'cover' as const,
    position: 'center 48%',
    alt: {
      es: 'Gregorio Valverde durante una ponencia en el Congreso Profesional de Grupo Hozono Global.',
      en: 'Gregorio Valverde speaking at Grupo Hozono Global Professional Congress.',
    },
  },
  'data-maturity-technology-culture': {
    image: dataMaturityHero,
    mode: 'contain' as const,
    position: 'center',
    alt: {
      es: 'Ilustración de la evolución desde sistemas de datos iniciales hasta una organización orientada por el dato.',
      en: 'Illustration of the evolution from early data systems to a data-led organisation.',
    },
  },
  'dbt-first-data-architecture': {
    image: dbtArchitectureHero,
    mode: 'contain' as const,
    position: 'center',
    alt: {
      es: 'Arquitectura conceptual con Airflow, dbt, SQL Server y una capa de consumo analítico.',
      en: 'Conceptual architecture with Airflow, dbt, SQL Server and an analytical consumption layer.',
    },
  },
} as const;

export function getPublicationMedia(slug: string, lang: Lang) {
  const mapped = publicationMedia[slug as keyof typeof publicationMedia];
  const media = mapped ?? fallbackMedia;

  return {
    image: media.image,
    mode: media.mode,
    position: media.position,
    alt: media.alt[lang],
  };
}
