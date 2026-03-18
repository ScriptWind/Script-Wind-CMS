import { defineField, defineType } from 'sanity'

export const tableBlock = defineType({
  name: 'tableBlock',
  title: 'Table',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Table Title',
      type: 'string',
      validation: (Rule) => Rule.max(120),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      validation: (Rule) => Rule.max(180),
    }),
    defineField({
      name: 'hasHeaderRow',
      title: 'Has Header Row',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'columns',
      title: 'Number of Columns',
      type: 'number',
      initialValue: 3,
      validation: (Rule) => Rule.required().min(1).max(6),
    }),
    defineField({
      name: 'rows',
      title: 'Rows',
      type: 'array',
      of: [{ type: 'tableRow' }],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      rows: 'rows',
      columns: 'columns',
    },
    prepare({ title, rows, columns }) {
      return {
        title: title || 'Table',
        subtitle: `${rows?.length || 0} rows • ${columns || 0} columns`,
      }
    },
  },
})
