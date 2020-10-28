# HTTP utilities

Utils for parsing and formatting HTTP data.

# status

```javascript
const {
  codeInfo,
  codes,
  codesSource,
  color
} = require('@buzuli/http').status
```

## status.codeInfo(code)

Code info record based on the supplied status code if found, else `undefined`.

## status.codes()

List of all status codes. The included fields are:
- `code` : the numeric code
- `description` : short decription of the status code
- `unofficial` : `true` if not this is not an official status code

## status.codesSource()

The URL of the source of the full status code listing.

## status.color(code)

Color status codes based on value.

```javascript
console.info(color(code))
```

# url

```javascript
const {
  coerce,
  color,
  parse
} = require('@buzuli/http').url
```

## url.coerce(uri)

Attempt to parse a string as a URL (more lenient than `parse(url)`).

```javascript
const { host, port, ...rest } = coerce(uri)
console.info(`${host}:${port}`)
```

## url.color(uri)

Make a colorful URL applying unique colors to each component.

```javascript
console.info(color(uri))
```

## url.parse(url)

Parses a URL applying strict requirements (must have both protocol and host).
