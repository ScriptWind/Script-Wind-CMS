import { defineField, defineType } from 'sanity'

export const postLead = defineType({
  name: 'postLead',
  title: 'Lead Paragraph',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().min(80).max(320),
      description: 'Intro paragraph shown after the hero section. Keep it sharp and readable.',
    }),
  ],
  preview: {
    select: { text: 'text' },
    prepare({ text }) {
      return {
        title: 'Lead Paragraph',
        subtitle: text?.slice(0, 90) || 'No content',
      }
    },
  },
})
