import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Categories",
  type: "document",

  fields: [
    defineField({
      name: "titleTR",
      title: "Title Turkish",
      type: "string"
    }),

    defineField({
      name: "titleEN",
      title: "Title English",
      type: "string"
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "titleTR",
        maxLength: 96
      }
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number"
    }),

    defineField({
      name: "showTechnicalDetails",
      title: "Show Technical Details",
      type: "boolean",
      initialValue: true,
      description:
        "Turn this off for categories like adhesives, hardware, edge band etc."
    }),

    defineField({
      name: "image",
      title: "Category Image",
      type: "image",
      options: {
        hotspot: true
      }
    })
  ],

  preview: {
    select: {
      title: "titleTR",
      media: "image"
    }
  }
});