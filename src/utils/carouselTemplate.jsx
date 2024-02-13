const getImagesData = async (templateName, numberOfImages) => {
  const imagesData = []
  for (let i = 1; i <= numberOfImages; i++) {
    const image = await import(`../assets/templates/${templateName}/image${i}.png`)
    imagesData.push(image.default)
  }
  return imagesData
}

const templateFolders = [
  { name: 'template1', numberOfImages: 13 },
  { name: 'template2', numberOfImages: 11 },
  { name: 'template3', numberOfImages: 11 },
  { name: 'template4', numberOfImages: 14 },
  { name: 'template5', numberOfImages: 5 },
  { name: 'template6', numberOfImages: 15 }
]

export const images = await Promise.all(templateFolders.map(async (template, index) => ({
  main: (await import(`../assets/templates/${template.name}/home.png`)).default,
  imagesData: await getImagesData(template.name, template.numberOfImages)
})))
