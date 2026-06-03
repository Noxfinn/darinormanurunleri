export const productsQuery = `
  *[_type == "product"]{
    _id,
    titleTR,
    titleEN,
    "slug": slug.current,
    "category": category->titleTR,
    "categorySlug": category->slug.current,
    "showTechnicalDetails": category->showTechnicalDetails,
    subCategory,
    collection,
    model,
    descriptionTR,
    descriptionEN,
    "image": mainImage.asset->url,
    "gallery": gallery[].asset->url,
    thickness,
    surface,
    production,
    insulation
  }
`;

export const productBySlugQuery = `
  *[_type == "product" && slug.current == $slug][0]{
    _id,
    titleTR,
    titleEN,
    "slug": slug.current,
    "category": category->titleTR,
    "categorySlug": category->slug.current,
    "showTechnicalDetails": category->showTechnicalDetails,
    subCategory,
    collection,
    model,
    descriptionTR,
    descriptionEN,
    "image": mainImage.asset->url,
    "gallery": gallery[].asset->url,
    thickness,
    surface,
    production,
    insulation
  }
`;

export const categoriesQuery = `
  *[_type == "category"] | order(order asc){
    _id,
    titleTR,
    titleEN,
    "slug": slug.current,
    "image": image.asset->url,
    order,
    showTechnicalDetails
  }
`;

export const categoryBySlugQuery = `
  *[_type == "category" && slug.current == $slug][0]{
    _id,
    titleTR,
    titleEN,
    "slug": slug.current,
    "image": image.asset->url,
    order,
    showTechnicalDetails
  }
`;

export const productsByCategorySlugQuery = `
  *[_type == "product" && category->slug.current == $slug]{
    _id,
    titleTR,
    titleEN,
    "slug": slug.current,
    "category": category->titleTR,
    "categorySlug": category->slug.current,
    "showTechnicalDetails": category->showTechnicalDetails,
    subCategory,
    collection,
    model,
    descriptionTR,
    descriptionEN,
    "image": mainImage.asset->url,
    "gallery": gallery[].asset->url,
    thickness,
    surface,
    production,
    insulation
  }
`;

export const catalogsQuery = `
  *[_type == "catalog"]{
    _id,
    titleTR,
    titleEN,
    "coverImage": coverImage.asset->url,
    "pdf": pdfFile.asset->url
  }
`;