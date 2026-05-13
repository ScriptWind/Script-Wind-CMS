import { defineType, defineField } from 'sanity'

export const careerPost = defineType({
  name: 'careerPost',
  title: 'Career Posts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      placeholder: 'e.g. Frontend Developer',
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
      name: 'image',
      title: 'Job Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Used as job/card image or hero/card visual on frontend',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      validation: (Rule) => Rule.required().max(250),
      description: 'Max 250 characters for card preview',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Full job description',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      placeholder: 'e.g. Remote, Colombo, Sri Lanka',
    }),
    defineField({
      name: 'employmentType',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full Time', value: 'Full Time' },
          { title: 'Part Time', value: 'Part Time' },
          { title: 'Contract', value: 'Contract' },
          { title: 'Internship', value: 'Internship' },
          { title: 'Freelance', value: 'Freelance' },
          { title: 'Remote', value: 'Remote' },
        ],
      },
    }),
    defineField({
      name: 'experienceLevel',
      title: 'Experience Level',
      type: 'string',
      options: {
        list: [
          { title: 'Intern', value: 'Intern' },
          { title: 'Junior', value: 'Junior' },
          { title: 'Mid-Level', value: 'Mid-Level' },
          { title: 'Senior', value: 'Senior' },
          { title: 'Lead', value: 'Lead' },
        ],
      },
    }),
    defineField({
      name: 'applyUrl',
      title: 'Apply URL',
      type: 'url',
      description: 'If provided, frontend apply button opens this URL in new tab',
    }),
    defineField({
      name: 'applyEmail',
      title: 'Apply Email',
      type: 'string',
      description: 'If no applyUrl but applyEmail exists, frontend can use mailto link',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'closingDate',
      title: 'Closing Date',
      type: 'date',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      employmentType: 'employmentType',
      location: 'location',
      media: 'image',
    },
    prepare({ title, employmentType, location, media }) {
      const subtitle = [employmentType, location].filter(Boolean).join(' • ')
      return {
        title,
        subtitle: subtitle || 'No details provided',
        media,
      }
    },
  },
})
