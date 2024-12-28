import { Rule } from 'sanity'
export const post = {
    name: 'post',
    title: 'Post',
    type: 'document',

    fields: [{
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule: Rule) => Rule.required().error('Title is required'),
    },
    {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: "title" },
        validation: (Rule: Rule) => Rule.required().error('Slug is required'),
    },
    {
        name: 'PublishedAt',
        title: 'Published At',
        type: 'datetime',
        validation: (Rule: Rule) => Rule.required().error('Published At is required'),
        initialValue: () => new Date().toISOString(),

    },
    {
        name: 'excerpt',
        title: 'Excerpt',
        type: 'text',
        validation: (Rule: Rule) => Rule.max(200).error('Excerpt should be less than 200 characters'),
    },
    {
        name: 'body',
        title: 'Body',
        type: 'array',
        of: [{ type: 'block' }, {
            type: 'image',
            fields: [{
                name: 'caption',
                title: 'Caption',
                type: 'string',
            }]
        }]

    },
    {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'tag' }] }],
    },

    ]
}