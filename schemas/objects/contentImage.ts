import { defineField, defineType } from 'sanity'
import { CharacterCountInput } from '../../components/CharacterCountInput'

export const contentImage = defineType({
  name: 'contentImage',
  title: 'Content Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          components: { input: CharacterCountInput as any },
          options: { maxLength: 120 } as any,
          validation: (Rule) => Rule.required().max(120),
          description: 'Recommended max: 120 characters',
        }),
      ],
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      components: { input: CharacterCountInput as any },
      options: { maxLength: 180 } as any,
      validation: (Rule) => Rule.max(180),
      description: 'Recommended max: 180 characters',
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      initialValue: 'contained',
      options: {
        layout: 'radio',
        list: [
          { title: 'Contained', value: 'contained' },
          { title: 'Wide', value: 'wide' },
          { title: 'Full Width', value: 'full' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      media: 'image',
      title: 'caption',
      layout: 'layout',
    },
    prepare({ media, title, layout }) {
      return {
        title: title || 'Content Image',
        subtitle: `Layout: ${layout || 'contained'}`,
        media,
      }
    },
  },
})
