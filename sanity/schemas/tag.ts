import { defineType } from "sanity";

export const tag = defineType({
    name: "tag",
    title: "Tag",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Tag name",
            type: "string",
            validation: (Rule) => Rule.required().error("Name is required"),
        },
        {
            name: "slug",
            title: "slug",
            type: "string",
            validation: (Rule) => Rule.required().error("Name is required"),
            options: { source: "name" },
        },
    ],
});