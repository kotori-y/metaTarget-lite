// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { v4 } = require('uuid')

export function query (smiles: string, website: string): string {
  let site = ''

  switch (website) {
    case 'SEA':
      site = 'sea'
      break
    case 'Swiss':
      site = 'swiss'
      break
    case 'PassOnline':
      site = 'passonline'
      break
    case 'TargetHunter':
      site = 'targethunter'
      break
    case 'TargetNet':
      site = 'targetnet'
  }

  const url = `http://0.0.0.0:8001/${site}`
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
