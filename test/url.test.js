const tap = require('tap')
const {
  coerce,
  color,
  parse
} = require('../lib/url')

tap.test('lib/url.coerce() should prepend a protocol', async assert => {
  assert.equal(coerce('buzuli.com').href, 'http://buzuli.com/')
  assert.equal(coerce('buzuli.com').protocol, 'http:')
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

  assert.equal(parse('http://buzuli.com#anchor').hash, 'anchor')
})
