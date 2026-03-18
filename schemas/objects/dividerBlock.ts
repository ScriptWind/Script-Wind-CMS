import { defineField, defineType } from 'sanity'

export const dividerBlock = defineType({
  name: 'dividerBlock',
  title: 'Divider',
  type: 'object',
  fields: [
    defineField({
      name: 'style',
      title: 'Style',
      type: 'string',
      initialValue: 'line',
      options: {
        layout: 'radio',
        list: [
          { title: 'Line', value: 'line' },
          { title: 'Space', value: 'space' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { style: 'style' },
    prepare({ style }) {
      return {
        title: 'Divider',
        subtitle: `Style: ${style || 'line'}`,
      }
    },
  },
})
