import { addFiles, generateDocument, DocumentOptions } from './internal'

export async function asBlob(html: string, options: Partial<DocumentOptions> = {}) {
  const zip = addFiles(html, options)
  return await generateDocument(zip)
}
