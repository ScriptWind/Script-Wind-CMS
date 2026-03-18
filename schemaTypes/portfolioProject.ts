import { defineArrayMember, defineField, defineType } from 'sanity'
import { CharacterCountInput } from '../components/CharacterCountInput'

export const portfolioProject = defineType({
  name: 'portfolioProject',
  title: 'Portfolio Project',
  type: 'document',
  groups: [
    { name: 'overview', title: 'Overview' },
    { name: 'classification', title: 'Classification' },
    { name: 'media', title: 'Media' },
    { name: 'content', title: 'Case Study Content' },
    { name: 'results', title: 'Results & Metrics' },
    { name: 'seo', title: 'SEO & Social' },
    { name: 'publishing', title: 'Publishing' },
  ],
  fieldsets: [
    { name: 'clientInfo', title: 'Client Information', options: { collapsible: true, collapsed: false } },
    { name: 'timeline', title: 'Timeline & Duration', options: { columns: 2 } },
  ],
  fields: [
    // --- OVERVIEW GROUP ---
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      group: 'overview',
      components: { input: CharacterCountInput as any },
      options: { maxLength: 80 } as any,
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'overview',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Summary / Excerpt',
      type: 'text',
      rows: 3,
      group: 'overview',
      components: { input: CharacterCountInput as any },
      options: { maxLength: 180 } as any,
      validation: (Rule) => Rule.required().max(180),
      description: 'Shown on the portfolio listing cards.',
    }),
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      group: 'overview',
      fieldset: 'clientInfo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'clientWebsite',
      title: 'Client Website',
      type: 'url',
      group: 'overview',
      fieldset: 'clientInfo',
    }),
    defineField({
      name: 'companyLogo',
      title: 'Client / Company Logo',
      type: 'image',
      group: 'overview',
      fieldset: 'clientInfo',
      options: { hotspot: true },
    }),
    defineField({
      name: 'projectLogo',
      title: 'Project Specific Logo',
      type: 'image',
      group: 'overview',
      description: 'Used if the project has its own branding/icon.',
      options: { hotspot: true },
    }),

    // --- CLASSIFICATION GROUP ---
    defineField({
      name: 'categories',
      title: 'Service Categories',
      type: 'array',
      group: 'classification',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'projectCategory' }] })],
      validation: (Rule) => Rule.required().min(1).max(3).unique(),
      description: 'Link this project to one or more services.',
    }),
    defineField({
      name: 'solutionScopes',
      title: 'Solution Scope',
      type: 'array',
      group: 'classification',
      of: [defineArrayMember({ type: 'string' })],
      options: {
        list: [
          { title: 'Frontend', value: 'frontend' },
          { title: 'Backend', value: 'backend' },
          { title: 'Mobile App', value: 'mobile-app' },
          { title: 'Web App', value: 'web-app' },
          { title: 'Full-Stack', value: 'full-stack' },
          { title: 'UI/UX Design', value: 'ui-ux' },
          { title: 'API Integration', value: 'api-integration' },
          { title: 'DevOps', value: 'devops' },
          { title: 'AI Automation', value: 'ai-automation' },
        ],
      },
      validation: (Rule) => Rule.required().min(1).unique(),
    }),
    defineField({
      name: 'status',
      title: 'Project Status',
      type: 'string',
      group: 'classification',
      options: {
        list: [
          { title: 'Planned', value: 'planned' },
          { title: 'In Progress', value: 'in-progress' },
          { title: 'Completed', value: 'completed' },
          { title: 'Ongoing', value: 'ongoing' },
          { title: 'Maintenance', value: 'maintenance' },
        ],
      },
      initialValue: 'completed',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
      group: 'classification',
      placeholder: 'e.g. Fintech, Healthcare, E-commerce',
    }),
    defineField({
      name: 'platforms',
      title: 'Platforms',
      type: 'array',
      group: 'classification',
      of: [defineArrayMember({ type: 'string' })],
      options: {
        list: [
          { title: 'Web', value: 'web' },
          { title: 'iOS', value: 'ios' },
          { title: 'Android', value: 'android' },
          { title: 'Admin Panel', value: 'admin-panel' },
          { title: 'Dashboard', value: 'dashboard' },
          { title: 'API', value: 'api' },
          { title: 'CMS', value: 'cms' },
        ],
      },
    }),
    defineField({
      name: 'technologies',
      title: 'Tech Stack',
      type: 'array',
      group: 'classification',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'technology' }] })],
      validation: (Rule) => Rule.unique(),
    }),

    // --- MEDIA GROUP ---
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      group: 'media',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          components: { input: CharacterCountInput as any },
          options: { maxLength: 120 } as any,
          validation: (Rule) => Rule.required().max(120),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Project Gallery',
      type: 'array',
      group: 'media',
      of: [{ type: 'projectGalleryItem' }],
      description: 'Add screenshots or photos of the finished product.',
    }),

    // --- CONTENT GROUP ---
    defineField({
      name: 'caseStudyContent',
      title: 'Case Study Content',
      type: 'array',
      group: 'content',
      description: 'Tell the story of how you built this project.',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        }),
        defineArrayMember({ type: 'postLead' }),
        defineArrayMember({ type: 'contentImage' }),
        defineArrayMember({ type: 'calloutBlock' }),
        defineArrayMember({ type: 'codeBlock' }),
        defineArrayMember({ type: 'dividerBlock' }),
        defineArrayMember({ type: 'tableBlock' }),
      ],
    }),

    // --- RESULTS GROUP ---
    defineField({
      name: 'keyFeatures',
      title: 'Key Features',
      type: 'array',
      group: 'results',
      of: [{ type: 'projectFeature' }],
    }),
    defineField({
      name: 'keyMetrics',
      title: 'Key Metrics / Results',
      type: 'array',
      group: 'results',
      of: [{ type: 'projectMetric' }],
    }),
    defineField({
        name: 'links',
        title: 'Project Links',
        type: 'array',
        group: 'results',
        of: [{ type: 'projectLink' }],
    }),

    // --- PUBLISHING GROUP ---
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      group: 'publishing',
      fieldset: 'timeline',
    }),
    defineField({
      name: 'completionDate',
      title: 'Completion Date',
      type: 'date',
      group: 'publishing',
      fieldset: 'timeline',
      validation: (Rule) => Rule.custom((completionDate, context: any) => {
        const startDate = context.document.startDate
        if (startDate && completionDate && completionDate < startDate) {
          return 'Completion date cannot be before start date'
        }
        return true
      }),
    }),
    defineField({
      name: 'durationLabel',
      title: 'Duration Label',
      type: 'string',
      group: 'publishing',
      description: 'e.g. "6 months", "Ongoing"',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      group: 'publishing',
      initialValue: false,
    }),
    defineField({
      name: 'confidential',
      title: 'Confidential / NDA',
      type: 'boolean',
      group: 'publishing',
      description: 'Hide client name or specific details if protected by NDA.',
      initialValue: false,
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      group: 'publishing',
      initialValue: 100,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      group: 'publishing',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),

    // --- SEO GROUP ---
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      group: 'seo',
      components: { input: CharacterCountInput as any },
      options: { maxLength: 60 } as any,
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      group: 'seo',
      components: { input: CharacterCountInput as any },
      options: { maxLength: 160 } as any,
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: 'seoImage',
      title: 'SEO / Social Image',
      type: 'image',
      group: 'seo',
      options: { hotspot: true },
    }),

    // Editorial Fields
    defineField({
        name: 'internalNotes',
        title: 'Internal Notes',
        type: 'text',
        rows: 3,
        description: 'Private notes for the team. Not shown on the website.',
    }),
  ],
  orderings: [
    {
      title: 'Featured First, Newest',
      name: 'featuredNewest',
      by: [
        { field: 'featured', direction: 'desc' },
        { field: 'publishedAt', direction: 'desc' },
      ],
    },
    {
      title: 'Published Date: Newest',
      name: 'publishNewest',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
        title: 'Completion Date: Newest',
        name: 'completionNewest',
        by: [{ field: 'completionDate', direction: 'desc' }],
    },
    {
      title: 'Title: A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
    {
      title: 'Sort Order',
      name: 'sortOrderAsc',
      by: [{ field: 'sortOrder', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      client: 'clientName',
      status: 'status',
      featured: 'featured',
      media: 'coverImage',
    },
    prepare({ title, client, status, featured, media }) {
      return {
        title,
        subtitle: `${client} | ${status}${featured ? ' ⭐' : ''}`,
        media,
      }
    },
  },
})
