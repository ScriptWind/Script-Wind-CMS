import { defineField, defineType } from 'sanity'

export const calloutBlock = defineType({
  name: 'calloutBlock',
  title: 'Callout Box',
  type: 'object',
  fields: [
    defineField({
      name: 'tone',
      title: 'Tone',
      type: 'string',
      initialValue: 'info',
      options: {
        layout: 'radio',
        list: [
          { title: 'Info', value: 'info' },
          { title: 'Success', value: 'success' },
          { title: 'Warning', value: 'warning' },
          { title: 'Danger', value: 'danger' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().max(400),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      tone: 'tone',
    },
    prepare({ title, tone }) {
      return {
        title: title || 'Callout Box',
        subtitle: `Tone: ${tone || 'info'}`,
      }
    },
  },
})
