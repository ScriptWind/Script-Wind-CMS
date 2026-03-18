import { defineField, defineType } from 'sanity'

/**
 * Portfolio Project Categories
 * 
 * Seed data for initial setup (create these in the Studio):
 * 1. Mobile App Development (mobile-app-development)
 * 2. Website Development (website-development)
 * 3. Custom Web Application (custom-web-application)
 * 4. UI/UX Design (ui-ux-design)
 * 5. Enterprise Solutions (enterprise-solutions)
 * 6. AI & Automation (ai-automation)
 */

export const projectCategory = defineType({
  name: 'projectCategory',
  title: 'Project Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional short summary for this category.',
    }),
    defineField({
      name: 'coreService',
      title: 'Core Service',
      type: 'boolean',
      description: 'Mark this if it aligns with one of our main service pages.',
      initialValue: false,
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Used for ordering categories in filters and listings.',
      initialValue: 100,
    }),
    defineField({
      name: 'servicePagePath',
      title: 'Service Page Path',
      type: 'string',
      description: 'Optional relative path to the service page (e.g. /services/web-development).',
    }),
    defineField({
      name: 'iconKey',
      title: 'Icon Key',
      type: 'string',
      description: 'Optional key for frontend icon mapping (e.g. "smartphone", "globe").',
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Hide this category from the frontend if disabled.',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Sort Order, Title',
      name: 'sortOrderAsc',
      by: [
        { field: 'sortOrder', direction: 'asc' },
        { field: 'title', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      core: 'coreService',
    },
    prepare({ title, subtitle, core }) {
      return {
        title: title,
        subtitle: `${subtitle}${core ? ' (Core)' : ''}`,
      }
    },
  },
})
