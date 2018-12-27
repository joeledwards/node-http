const tap = require('tap')
const {
  coerce,
  color,
  formatPath,
  formatQuery,
  parse
} = require('../lib/url')

tap.test('lib/url.coerce() should prepend a protocol', async assert => {
  assert.equal(coerce('g.co').href, 'http://g.co/')
  assert.equal(coerce('buzuli.com').href, 'http://buzuli.com/')
  assert.equal(coerce('httpbin.org').href, 'http://httpbin.org/')
  assert.equal(coerce('http://httpbin.org').href, 'http://httpbin.org/')
  assert.equal(coerce('https://httpbin.org').href, 'https://httpbin.org/')

  assert.equal(coerce('buzuli.com').protocol, 'http:')
  assert.equal(coerce('http://httpbin.org').protocol, 'http:')
  assert.equal(coerce('https://httpbin.org').protocol, 'https:')
})

tap.test('lib/url.color() colorizes a full URL', async assert => {
  assert.equal(color('http://buzuli.com'), 'http://buzuli.com/')
})

tap.test('lib/url.parse() should parse a valid URL', async assert => {
  assert.equal(parse('http://buzuli.com?a=b').href, 'http://buzuli.com/?a=b')

  assert.equal(parse('http://buzuli.com').protocol, 'http:')
  assert.equal(parse('https://buzuli.com').protocol, 'https:')

  assert.equal(parse('http://buzuli.com').host, 'buzuli.com')

  assert.equal(parse('http://buzuli.com').port, null)
  assert.equal(parse('https://buzuli.com').port, null)
  assert.equal(parse('http://buzuli.com:80').port, '80')
  assert.equal(parse('https://buzuli.com:443').port, '443')
  assert.equal(parse('http://buzuli.com:8080').port, '8080')
  assert.equal(parse('https://buzuli.com:8443').port, '8443')

  assert.equal(parse('http://buzuli.com/path/to').path, '/path/to')
  assert.equal(parse('http://buzuli.com/path/to').pathname, '/path/to')

  assert.equal(parse('http://buzuli.com?a=b').query, 'a=b')
  assert.equal(parse('http://buzuli.com?a=b').search, '?a=b')

  assert.equal(parse('http://buzuli.com#anchor').hash, '#anchor')
})

tap.test('lib/url.formatPath() colorizes path components', async assert => {
  assert.equal(formatPath('/path/to'), '/path/to')
})

tap.test('lib/url.formatQuery() colorizes query components', async assert => {
  assert.equal(formatQuery('a=1&b=2'), '?a=1&b=2')
})
