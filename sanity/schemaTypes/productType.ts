import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Products",
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
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }]
    }),

    defineField({
      name: "subCategory",
      title: "Sub Category",
      type: "string",
      options: {
        list: [
          { title: "PVC", value: "PVC" },
          { title: "ABS", value: "ABS" },
          { title: "Other", value: "Other" }
        ]
      }
    }),

    defineField({
      name: "collection",
      title: "Collection",
      type: "string",
      options: {
        list: [
            { title: "Unicolour", value: "Unicolour" },

            { title: "Woodgrain", value: "Woodgrain" },

            { title: "High Gloss", value: "High Gloss" },

            { title: "Fantasy", value: "Fantasy" },

            { title: "Silvery", value: "Silvery" },

            { title: "Soft Touch", value: "Soft Touch" },

            { title: "Other", value: "Other" }
        ]
    }
    }),

    defineField({
      name: "model",
      title: "Model",
      type: "string"
    }),

    defineField({
      name: "descriptionTR",
      title: "Description Turkish",
      type: "text"
    }),

    defineField({
      name: "descriptionEN",
      title: "Description English",
      type: "text"
    }),

    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true
      }
    }),

    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true
          }
        }
      ]
    }),

    defineField({
      name: "thickness",
      title: "Thickness",
      type: "string"
    }),

    defineField({
      name: "surface",
      title: "Surface",
      type: "string"
    }),

    defineField({
      name: "production",
      title: "Production",
      type: "string"
    }),

    defineField({
      name: "insulation",
      title: "Insulation",
      type: "string"
    })
  ],

  preview: {
    select: {
      title: "titleTR",
      subtitle: "subCategory",
      media: "mainImage"
    }
  }
});