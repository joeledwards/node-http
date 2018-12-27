const c = require('@buzuli/color')
const tap = require('tap')
const {
  codes,
  codesSource,
  color
} = require('../lib/status')

tap.test('lib/status.codes() should return status code data', async assert => {
  assert.equal(codes().length, 86)

  assert.equal(codes().filter(s => s.unofficial).length, 24)
  assert.equal(codes().filter(s => !s.unofficial).length, 62)

  assert.equal(codes().filter(s => s.code < 100).length, 0)
  assert.equal(codes().filter(s => s.code < 200).length, 4)
  assert.equal(codes().filter(s => s.code >= 200 && s.code < 300).length, 10)
  assert.equal(codes().filter(s => s.code >= 300 && s.code < 400).length, 9)
  assert.equal(codes().filter(s => s.code >= 400 && s.code < 500).length, 41)
  assert.equal(codes().filter(s => s.code >= 500 && s.code < 600).length, 22)
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
})
