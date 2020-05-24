import { addFiles, generateDocument, DocumentOptions } from './internal'
import JSZip = require('jszip')

export async function asBlob(html: string, options: Partial<DocumentOptions> = {}) {
  const zip = new JSZip()
  addFiles(zip, html, options)
  return await generateDocument(zip)
}
