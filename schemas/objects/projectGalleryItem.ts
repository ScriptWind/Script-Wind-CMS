import { defineField, defineType } from 'sanity'
import { CharacterCountInput } from '../../components/CharacterCountInput'

export const projectGalleryItem = defineType({
  name: 'projectGalleryItem',
  title: 'Gallery Item',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Important for accessibility and SEO.',
      components: {
        input: CharacterCountInput,
      },
      options: {
        maxLength: 120,
      },
      validation: (Rule) => Rule.required().min(10).max(120),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional text shown below the image.',
    }),
  ],
  preview: {
    select: {
      media: 'image',
      title: 'alt',
      subtitle: 'caption',
    },
  },
})
