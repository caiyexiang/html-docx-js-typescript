import { mhtDocumentTemplate, mhtPartTemplate } from './templates'

export function getMHTdocument(htmlSource: string) {
  const ref = _prepareImageParts(htmlSource)
  const imageContentPartsString = ref.imageContentParts.join('\n')
  htmlSource = ref.htmlSource.replace(/\=/g, '=3D')
  return mhtDocumentTemplate(htmlSource, imageContentPartsString)
}

function _prepareImageParts(htmlSource: string) {
  const imageContentParts: string[] = []
  const inlinedSrcPattern = /"data:(\w+\/\w+);(\w+),(\S+)"/g
  const inlinedReplacer = (match: string, contentType: string, contentEncoding: string, encodedContent: string) => {
    const index = imageContentParts.length
    const extension = contentType.split('/')[1]
    const contentLocation = `file:///C:/fake/image${index}.${extension}`
    imageContentParts.push(mhtPartTemplate(contentType, contentEncoding, contentLocation, encodedContent))
    return `\"${contentLocation}\"`
  }
  if (!/<img/g.test(htmlSource)) {
    return { htmlSource, imageContentParts }
  }
  htmlSource = htmlSource.replace(inlinedSrcPattern, inlinedReplacer)
  return { htmlSource, imageContentParts }
}
