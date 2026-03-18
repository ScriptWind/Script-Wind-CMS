import { defineField, defineType } from 'sanity'

export const projectLink = defineType({
  name: 'projectLink',
  title: 'Project Link',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
      placeholder: 'e.g. View Live Site, GitHub Repo',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Live Site', value: 'live' },
          { title: 'Website', value: 'website' },
          { title: 'Case Study', value: 'case-study' },
          { title: 'App Store', value: 'app-store' },
          { title: 'Google Play', value: 'google-play' },
          { title: 'GitHub', value: 'github' },
          { title: 'Figma', value: 'figma' },
          { title: 'Admin Panel', value: 'admin' },
          { title: 'API Documentation', value: 'api-docs' },
          { title: 'Video Demo', value: 'video' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
      initialValue: 'website',
    }),
    defineField({
      name: 'primary',
      title: 'Primary Link',
      type: 'boolean',
      description: 'Highlight this as the main call-to-action link.',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'url',
    },
  },
})
