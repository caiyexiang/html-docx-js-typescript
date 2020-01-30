import { asBlob } from '../index'

const HTML_CASE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <h1>Use node.js enviroment</h1>
</body>
</html>`

describe('arguments test', () => {
  test(`html`, async () => {
    const data = await asBlob(HTML_CASE)
    expect(data).toBeInstanceOf(Blob)
  })
  test(`html,options={orientation}`, async () => {
    const data = await asBlob(HTML_CASE, { orientation: 'landscape' })
    expect(data).toBeInstanceOf(Blob)
  })
  test(`html,options={margins}`, async () => {
    const data = await asBlob(HTML_CASE, { margins: { top: 1000, bottom: 100 } })
    expect(data).toBeInstanceOf(Blob)
  })
  test(`html,options={orientation,margins}`, async () => {
    const data = await asBlob(HTML_CASE, { orientation: 'portrait', margins: { left: 1000 } })
    expect(data).toBeInstanceOf(Blob)
  })
  test(`html,options:Options`, async () => {
    const opt = {
      orientation: 'portrait' as const,
      margins: {
        bottom: 10,
      },
    }
    const data = await asBlob(HTML_CASE, opt)
    expect(data).toBeInstanceOf(Blob)
  })
})
