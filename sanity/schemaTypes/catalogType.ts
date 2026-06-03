import { defineField, defineType } from "sanity";

export const catalogType = defineType({
  name: "catalog",
  title: "Catalogs",
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
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true
      }
    }),

    defineField({
      name: "pdfFile",
      title: "PDF File",
      type: "file",
      options: {
        accept: ".pdf"
      }
    })
  ],

  preview: {
    select: {
      title: "titleTR",
      media: "coverImage"
    }
  }
});
