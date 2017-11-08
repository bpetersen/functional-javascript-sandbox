const R = require('ramda')
const { Future } = require('ramda-fantasy')
const axios = require('axios')

const githubUrl = 'https://api.github.com/users/bpetersen'

const logMsg = msg => val => {
  console.log(msg, val)
  return val
}

const log = console.log.bind(console)
const error = console.error.bind(console)

log('** Example 3: Futures **\n')

const get = url => {
  return new Future((reject, resolve) => {
    axios.get(url).then(resolve, reject)
  })
}

const getRepos = R.compose(
  R.compose(R.map(R.pluck('git_url')), R.map(R.prop('data'))),
  R.chain(get),
  R.compose(R.map(R.prop('repos_url')), R.map(R.prop('data'))),
  get
)

const repos = getRepos(githubUrl)
//console.log(repos)
//repos.fork(error, log)  //This is what actually kicks of the operation.  Futures are lazy compared to Promises which are eager.
