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
      break
    case 'DNN(ECfp4)':
      site = 'ppb2-1'
      break
    case 'NB(ECfp4)':
      site = 'ppb2-2'
      break
    case 'NN(MQN) & NB(ECfp4)':
      site = 'ppb2-3'
      break
    case 'NN(Xfp) & NB(ECfp4)':
      site = 'ppb2-4'
      break
    case 'NN(ECfp4) & NB(ECfp4)':
      site = 'ppb2-5'
      break
    case 'NN(MQN)':
      site = 'ppb2-6'
      break
    case 'NN(Xfp)':
      site = 'ppb2-7'
      break
    case 'NN(ECfp4)':
      site = 'ppb2-8'
      break
  }

  const url = `http://152.136.139.114:8002/${site}`
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
