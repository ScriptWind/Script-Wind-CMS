import { defineField, defineType } from 'sanity'

export const codeBlock = defineType({
  name: 'codeBlock',
  title: 'Code Block',
  type: 'object',
  fields: [
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      initialValue: 'bash',
      options: {
        list: [
          { title: 'Bash', value: 'bash' },
          { title: 'TypeScript', value: 'typescript' },
          { title: 'JavaScript', value: 'javascript' },
          { title: 'TSX', value: 'tsx' },
          { title: 'JSX', value: 'jsx' },
          { title: 'JSON', value: 'json' },
          { title: 'HTML', value: 'html' },
          { title: 'CSS', value: 'css' },
          { title: 'SQL', value: 'sql' },
          { title: 'Text', value: 'text' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'filename',
      title: 'Filename',
      type: 'string',
      validation: (Rule) => Rule.max(120),
    }),
    defineField({
      name: 'code',
      title: 'Code',
      type: 'text',
      rows: 14,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      language: 'language',
      filename: 'filename',
    },
    prepare({ language, filename }) {
      return {
        title: filename || 'Code Block',
        subtitle: `Language: ${language || 'text'}`,
      }
    },
  },
})
