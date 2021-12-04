// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios')

const interval = (delay: number, callback: CallableFunction) => {
  return new Promise(resolve => {
    const task1 = setInterval(() => {
      callback(task1, resolve)
    }, delay)
  })
}

const sleep = (delay: number) => new Promise<void>(resolve => {
  setTimeout(() => {
    resolve()
  }, delay)
})

async function obtainResult (token: string): Promise<string> {
  const url = `http://152.136.139.114:8002/res/${token}`
  const resp = await axios({
    method: 'get',
    url
  })
  return resp.data
}

export async function loopQuery (token: string): Promise<string> {
  const result = await obtainResult(token)
  if (result === JSON.stringify({})) {
    await sleep(10000)
    console.log('waiting')
    return loopQuery(token)
  }
  return result
}
