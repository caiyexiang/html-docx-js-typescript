export const mhtPartTemplate = (
  contentType: string,
  contentEncoding: string,
  contentLocation: string,
  encodedContent: string,
) => {
  return `------=mhtDocumentPart
Content-Type: ${contentType}
Content-Transfer-Encoding: ${contentEncoding}
Content-Location: ${contentLocation}

${encodedContent}
`
}
