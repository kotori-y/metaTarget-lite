import { ipcRenderer } from 'electron'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const converter = require('json-2-csv')

export function download (jsonData: JSON): void {
  converter.json2csv(jsonData, (err: Error | undefined, csv: string | undefined) => {
    if (err) {
      throw err
    }

    console.log(csv)

    ipcRenderer.send('saveFile', { content: csv })
    ipcRenderer.on('saved', () => {
      console.log('Saved')
    })
  })
}
