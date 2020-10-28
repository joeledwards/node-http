const c = require('@buzuli/color')
const tap = require('tap')
const {
  codeInfo,
  codes,
  codesSource,
  color
} = require('../lib/status')

function set (items) {
  const s = new Set()
  for (const item of items) {
    s.add(item)
  }
  return s
}

tap.test('lib/status.codeInfo(code) should return the expected status record', async assert => {
  assert.equal(codeInfo(100).code, 100)
  assert.false(codeInfo(100).unofficial)
  assert.equal(codeInfo(200).code, 200)
  assert.false(codeInfo(200).unofficial)
  assert.equal(codeInfo(300).code, 300)
  assert.false(codeInfo(300).unofficial)
  assert.equal(codeInfo(400).code, 400)
  assert.false(codeInfo(400).unofficial)
  assert.equal(codeInfo(500).code, 500)
  assert.false(codeInfo(500).unofficial)

  assert.equal(codeInfo(103).code, 103)
  assert.false(codeInfo(103).unofficial)
  assert.equal(codeInfo(103).description, 'Early Hints')

  assert.equal(codeInfo(530).code, 530)
  assert.true(codeInfo(530).unofficial)
  assert.equal(codeInfo(530).description, 'Site is frozen (Pantheon)')
})

tap.test('lib/status.codes() should return status code data', async assert => {
  assert.equal(codes().length, 97)
  assert.equal(set(codes().map(x => x.code)).size, 92)

  assert.equal(codes().filter(s => s.unofficial).length, 34)
  assert.equal(codes().filter(s => !s.unofficial).length, 63)

  assert.equal(codes().filter(s => s.code < 100).length, 0)
  assert.equal(codes().filter(s => s.code < 200).length, 5)
  assert.equal(codes().filter(s => s.code >= 200 && s.code < 300).length, 12)
  assert.equal(codes().filter(s => s.code >= 300 && s.code < 400).length, 9)
  assert.equal(codes().filter(s => s.code >= 400 && s.code < 500).length, 47)
  assert.equal(codes().filter(s => s.code >= 500 && s.code < 600).length, 24)
  assert.equal(codes().filter(s => s.code >= 600).length, 0)
})

tap.test('lib/status.codesSource() should supply source URL', async assert => {
  assert.equal(
    codesSource(),
    'https://en.wikipedia.org/wiki/list_of_HTTP_status_codes'
  )
})

tap.test('lib/status.color() should apply color by status', async assert => {
  process.env.FORCE_COLOR = '1'

  assert.equal(color(0), c.purple(0))
  assert.equal(color(99), c.purple(99))
  assert.equal(color(100), c.purple(100))
  assert.equal(color(199), c.purple(199))

  assert.equal(color(200), c.green(200))
  assert.equal(color(299), c.green(299))

  assert.equal(color(300), c.blue(300))
  assert.equal(color(399), c.blue(399))

  assert.equal(color(400), c.red(400))
  assert.equal(color(499), c.red(499))

  assert.equal(color(500), c.yellow(500))
  assert.equal(color(599), c.yellow(599))

  assert.equal(color(600), c.orange(600))
  assert.equal(color(1000), c.orange(1000))

  assert.same(
    color(123, "You don't know me"),
    [c.purple(123), c.purple("You don't know me")]
  )
  assert.same(color(200, 'OK'), [c.green(200), c.green('OK')])
})
