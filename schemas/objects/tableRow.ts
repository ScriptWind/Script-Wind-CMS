import { defineField, defineType } from 'sanity'

export const tableRow = defineType({
  name: 'tableRow',
  title: 'Table Row',
  type: 'object',
  fields: [
    defineField({
      name: 'cells',
      title: 'Cells',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1).max(6),
    }),
  ],
  preview: {
    select: {
      cells: 'cells',
    },
    prepare({ cells }) {
      return {
        title: 'Row',
        subtitle: Array.isArray(cells) ? cells.join(' | ').slice(0, 120) : 'No cells',
      }
    },
  },
})
