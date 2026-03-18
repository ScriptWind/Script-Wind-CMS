import { defineArrayMember, defineField, defineType } from 'sanity'
import { CharacterCountInput } from '../components/CharacterCountInput'

export const post = defineType({
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            components: { input: CharacterCountInput as any },
            options: { maxLength: 70 } as any,
            validation: (Rule) => Rule.required().max(70),
            description: 'Recommended max: 70 characters',
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
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3,
            components: { input: CharacterCountInput as any },
            options: { maxLength: 160 } as any,
            validation: (Rule) => Rule.required().max(160),
            description: 'Recommended max: 160 characters',
        }),

        defineField({
            name: 'mainImage',
            title: 'Featured Image',
            type: 'image',
            options: { hotspot: true },
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
                defineField({
                    name: 'caption',
                    title: 'Caption',
                    type: 'string',
                    components: { input: CharacterCountInput as any },
                    options: { maxLength: 180 } as any,
                    validation: (Rule) => Rule.max(180),
                    description: 'Recommended max: 180 characters',
                }),
            ],
        }),

        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'author',
            title: 'Author',
            type: 'string',
            initialValue: 'Script Wind Team',
            components: { input: CharacterCountInput as any },
            options: { maxLength: 60 } as any,
            validation: (Rule) => Rule.required().max(60),
            description: 'Recommended max: 60 characters',
        }),

        defineField({
            name: 'featured',
            title: 'Featured Post',
            type: 'boolean',
            initialValue: false,
        }),

        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (Rule) => Rule.max(3),
            options: {
                list: [
                    { title: 'AI & Automation', value: 'ai-automation' },
                    { title: 'Web Development', value: 'web-development' },
                    { title: 'Mobile App Development', value: 'mobile-app-development' },
                    { title: 'Cloud & DevOps', value: 'cloud-devops' },
                    { title: 'UI/UX Design', value: 'ui-ux-design' },
                    { title: 'SaaS Product Development', value: 'saas-product-development' },
                    { title: 'Security & Performance', value: 'security-performance' },
                    { title: 'Case Studies', value: 'case-studies' },
                    { title: 'Business & Digital Transformation', value: 'business-digital-transformation' },
                ],
            },
        }),

        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
            validation: (Rule) => Rule.max(10),
        }),

        defineField({
            name: 'body',
            title: 'Content',
            type: 'array',
            validation: (Rule) => Rule.required().min(1),
            of: [
                defineArrayMember({
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'Heading 2', value: 'h2' },
                        { title: 'Heading 3', value: 'h3' },
                        { title: 'Heading 4', value: 'h4' },
                        { title: 'Quote', value: 'blockquote' },
                    ],
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Numbered', value: 'number' },
                    ],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Underline', value: 'underline' },
                            { title: 'Code', value: 'code' },
                        ],
                        annotations: [
                            defineArrayMember({
                                name: 'link',
                                title: 'Link',
                                type: 'object',
                                fields: [
                                    defineField({
                                        name: 'href',
                                        title: 'URL',
                                        type: 'url',
                                        validation: (Rule) =>
                                            Rule.uri({
                                                scheme: ['http', 'https', 'mailto', 'tel'],
                                            }),
                                    }),
                                    defineField({
                                        name: 'openInNewTab',
                                        title: 'Open in new tab',
                                        type: 'boolean',
                                        initialValue: true,
                                    }),
                                ],
                            }),
                        ],
                    },
                }),

                defineArrayMember({
                    type: 'postLead',
                }),

                defineArrayMember({
                    type: 'contentImage',
                }),

                defineArrayMember({
                    type: 'calloutBlock',
                }),

                defineArrayMember({
                    type: 'codeBlock',
                }),

                defineArrayMember({
                    type: 'dividerBlock',
                }),
                
                defineArrayMember({
                    type: 'tableBlock',
                }),
            ],
        }),

        defineField({
            name: 'seoTitle',
            title: 'SEO Title',
            type: 'string',
            components: { input: CharacterCountInput as any },
            options: { maxLength: 60 } as any,
            validation: (Rule) => Rule.max(60),
            description: 'Recommended max: 60 characters',
        }),

        defineField({
            name: 'seoDescription',
            title: 'SEO Description',
            type: 'text',
            rows: 3,
            components: { input: CharacterCountInput as any },
            options: { maxLength: 160 } as any,
            validation: (Rule) => Rule.max(160),
            description: 'Recommended max: 160 characters',
        }),

        defineField({
            name: 'seoImage',
            title: 'SEO / Social Share Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    components: { input: CharacterCountInput as any },
                    options: { maxLength: 120 } as any,
                    validation: (Rule) => Rule.max(120),
                    description: 'Recommended max: 120 characters',
                }),
            ],
        }),
    ],

    preview: {
        select: {
            title: 'title',
            subtitle: 'author',
            media: 'mainImage',
        },
        prepare({ title, subtitle, media }) {
            return {
                title,
                subtitle: subtitle ? `By ${subtitle}` : 'Blog Post',
                media,
            }
        },
    },
})