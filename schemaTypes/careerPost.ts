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
      name: 'jobPoster',
      title: 'Job Poster',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Job poster shown inside the modal after description',
    }),
    // Hidden legacy field to prevent Sanity Studio error during field migration
    defineField({
      name: 'image',
      title: 'Legacy Image',
      type: 'image',
      hidden: true,
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
      validation: (Rule) => Rule.required(),
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
      media: 'jobPoster',
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
