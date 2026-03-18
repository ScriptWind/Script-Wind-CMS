import { defineField, defineType } from 'sanity'

export const projectMetric = defineType({
  name: 'projectMetric',
  title: 'Project Metric',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'e.g. "Faster operations", "Users reached"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      description: 'e.g. "30%", "10k+"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'note',
      title: 'Note',
      type: 'string',
      description: 'Optional context for the metric.',
    }),
  ],
  preview: {
    select: {
      label: 'label',
      value: 'value',
    },
    prepare({ label, value }) {
      return {
        title: `${value} - ${label}`,
      }
    },
  },
})
