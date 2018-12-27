module.exports = {
  coerce,
  color,
  parse
}

const c = require('@buzuli/color')
const {
  parse: parseUrl
} = require('url')

function coerce (uri) {
  if (uri.length < 4 || uri.slice(0, 4).toLowerCase() !== 'http') {
    return parse(`http://${uri}`)
  } else {
    return parse(uri)
  }
}

function color () {
  const {
    protocol,
    hostname: host,
    port,
    pathname: path,
    query
  } = urlParser.parse(url)

  const proto = protocol.replace(':', '')
  const protoStr = (proto === 'https' ? c.green(proto) : proto)
  const hostStr = c.blue(host)
  const portStr = port ? `:${c.orange(port)}` : ''
  const pathStr = path ? formatPath(path) : ''
  const queryStr = query ? formatQuery(query) : ''

  return `${protoStr}://${hostStr}${portStr}${pathStr}${queryStr}`
}

function parse (url) {
  return parseUrl(url)
}
