/**
 * Page Metadata Configuration
 *
 * Centralized SEO metadata for all static pages.
 * This file defines page titles, SEO descriptions, visible headings,
 * and intro texts for the main sections of the portfolio.
 *
 * Dynamic pages, such as individual project pages, usually generate
 * their own metadata from their MDX frontmatter.
 *
 * @module pages.config
 */

/**
 * Page metadata interface
 */
interface PageMeta {
  /** Page title used in browser tab and SEO */
  title: string;

  /** Page description used in meta tags and SEO */
  description: string;

  /** Page heading displayed as h1 */
  heading?: string;

  /** Intro text displayed below heading */
  intro?: string;
}

/**
 * Pages configuration object
 *
 * Contains metadata for all static pages.
 */
export const pagesConfig = {
  /**
   * Home page (/)
   * The home page usually uses siteConfig for title and description.
   */
  home: {
    title: 'Home',
    description:
      'Professional portfolio focused on Business Intelligence, Data Engineering, and Analytics for business operations and digital transformation.',
  },

  /**
   * Projects listing page (/projects)
   */
  projects: {
    title: 'Projects - Data & Analytics Case Studies',
    description:
      'Case studies about Business Intelligence, Data Engineering, analytics, automation, and practical data solutions for business operations.',
    heading: 'Projects',
    intro:
      'A selection of projects where I document business problems, data architecture decisions, technical implementation, and the value delivered through data pipelines, analytical models, and dashboards.',
  },

  /**
   * Decisions listing page (/decisions)
   */
  decisions: {
    title: 'Technical Decisions - Data Engineering & BI',
    description:
      'Technical decisions about data architecture, ETL pipelines, analytical modeling, dashboards, and maintainable data solutions.',
    heading: 'Technical Decisions',
    intro:
      'A log of technical decisions made while building data and analytics solutions. Each entry explains the context, alternatives considered, reasoning, and trade-offs behind the decision.',
  },

  /**
   * Journey timeline page (/journey)
   */
  journey: {
    title: 'Journey - Career Growth in Data & Analytics',
    description:
      'A timeline of my professional development in Business Intelligence, Data Engineering, Analytics, and Digital Transformation.',
    heading: 'Journey',
    intro:
      'A timeline of my professional growth, from Physics and data analysis to real business projects involving BI, data engineering, automation, and digital transformation.',
  },

  /**
   * Writing/blog listing page (/writing)
   *
   * This section can stay configured even if it is not visible
   * in the navigation yet.
   */
  writing: {
    title: 'Writing - Data & Analytics Notes',
    description:
      'Technical notes and lessons learned about data engineering, business intelligence, analytics, and digital transformation.',
    heading: 'Writing',
    intro:
      'Notes and reflections about data engineering, BI, analytics, and the practical challenges of building useful data solutions in business environments.',
  },

  /**
   * Speaking engagements page (/speaking)
   *
   * Useful later if you want to include internal talks, presentations,
   * or conference participation.
   */
  speaking: {
    title: 'Speaking - Talks & Presentations',
    description:
      'Talks and presentations about digital transformation, data, business intelligence, and analytics.',
    heading: 'Speaking',
    intro:
      'A collection of talks and presentations related to data, business intelligence, analytics, and digital transformation.',
  },

  /**
   * Uses/tools page (/uses)
   *
   * Useful later if you want to document your technical stack.
   */
  uses: {
    title: 'Uses - Tools, Stack & Environment',
    description:
      'Tools and technologies I use for data engineering, business intelligence, analytics, and development workflows.',
    heading: 'Uses',
    intro:
      'A practical overview of the tools and technologies I use to build data pipelines, analytical models, dashboards, and automation workflows.',
  },

  /**
   * Contact page (/contact)
   */
  contact: {
    title: 'Contact - Get in Touch',
    description:
      'Get in touch to discuss data engineering, business intelligence, analytics, digital transformation, or professional opportunities.',
    heading: "Let's Talk",
  },
} as const;

/**
 * Type export for the pages configuration
 */
export type PagesConfig = typeof pagesConfig;

/**
 * Type export for a single page metadata
 */
export type PageConfig = PageMeta;