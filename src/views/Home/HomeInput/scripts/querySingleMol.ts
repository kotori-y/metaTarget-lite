// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { v4 } = require('uuid')

export function query (smiles: string, website: string): string {
  const url = `http://0.0.0.0:8001/${website}`
  const token: string = v4()
  try {
    axios({
      method: 'post',
      url: url,
      data: { smiles: smiles },
      headers: {
        'x-token': token
      }
    })
    return token
  } catch (err) {
    console.log(err)
    return ''
  }
}

(() => query('CCCC', 'sea'))()
