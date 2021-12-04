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

// export async function loopQuery (token: string): Promise<void> {
//   interval(10000, (task: NodeJS.Timeout, resolve: () => void) => {
//     obtainResult(token).then((result) => {
//       if (JSON.stringify(result) !== JSON.stringify({})) {
//         clearInterval(task)
//         resolve()
//         return 123
//       }
//     })
//     console.log('waiting')
//   }).then((result) => {
//     console.log('ok')
//     console.log(result)
//   })
// }

export async function loopQuery (token: string): Promise<string> {
  const result = await obtainResult(token)
  if (result === JSON.stringify({})) {
    await sleep(10000)
    console.log('waiting')
    return await loopQuery(token)
  }
  return result
}
