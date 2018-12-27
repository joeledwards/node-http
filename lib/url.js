module.exports = {
  coerce,
  color,
  formatPath,
  formatQuery,
  parse
}

const c = require('@buzuli/color')
const queryParser = require('querystring')
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

function color (url) {
  const {
    protocol,
    hostname: host,
    port,
    pathname: path,
    query
  } = parseUrl(url)

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

function formatPath (path) {
  return path
    .split('/')
    .map(pc => c.purple(pc))
    .join('/')
}

function formatQuery (query) {
  const parts = Object.entries(queryParser.parse(query))
  if (parts.length > 0) {
    return c.grey('?' + parts.map(([k, v]) => {
      return `${c.yellow(k)}=${c.green(v)}`
    }).join('&'))
  } else {
    return ''
  }
}
