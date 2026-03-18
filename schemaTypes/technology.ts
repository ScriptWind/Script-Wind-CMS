import { defineField, defineType } from 'sanity'

export const technology = defineType({
  name: 'technology',
  title: 'Technology',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      placeholder: 'e.g. React, Node.js, TensorFlow',
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
      name: 'category',
      title: 'Tech Category',
      type: 'string',
      options: {
        list: [
          { title: 'Frontend', value: 'frontend' },
          { title: 'Backend', value: 'backend' },
          { title: 'Mobile', value: 'mobile' },
          { title: 'Database', value: 'database' },
          { title: 'Cloud', value: 'cloud' },
          { title: 'DevOps', value: 'devops' },
          { title: 'AI & Automation', value: 'ai' },
          { title: 'Design', value: 'design' },
          { title: 'CMS', value: 'cms' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Vector SVG is preferred for sharp display.',
    }),
    defineField({
      name: 'websiteUrl',
      title: 'Website URL',
      type: 'url',
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      initialValue: 100,
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Category, Sort Order',
      name: 'categorySortAsc',
      by: [
        { field: 'category', direction: 'asc' },
        { field: 'sortOrder', direction: 'asc' },
        { field: 'title', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'logo',
    },
  },
})
