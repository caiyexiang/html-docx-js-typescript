/**
 * @jest-environment node
 */
import { asBlob } from '../index'

const HTML_CASE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <h1>jest test</h1>
</body>
</html>`

describe('arguments test', () => {
  test(`html`, async () => {
    const data = await asBlob(HTML_CASE)
    expect(data).toBeInstanceOf(Buffer)
  })
})
