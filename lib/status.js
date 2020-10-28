module.exports = {
  codeInfo,
  codes,
  codesSource,
  color
}

const c = require('@buzuli/color')

function color (status, message) {
  const color = status < 200
    ? c.purple
    : status < 300
      ? c.green
      : status < 400
        ? c.blue
        : status < 500
          ? c.red
          : status < 600
            ? c.yellow
            : c.orange

  return message
    ? [color(status), color(message)]
    : color(status)
}

function codes () {
  return [
    { code: 100, description: 'Continue' },
    { code: 101, description: 'Switching Protocols' },
    { code: 102, description: 'Processing' },
    { code: 103, description: 'Early Hints' },
    { code: 103, unofficial: true, description: 'Checkpoint' },
    { code: 200, description: 'OK' },
    { code: 201, description: 'Created' },
    { code: 202, description: 'Accepted' },
    { code: 203, description: 'Non-Authoritative Information' },
    { code: 204, description: 'No Content' },
    { code: 205, description: 'Reset Content' },
    { code: 206, description: 'Partial Content' },
    { code: 207, description: 'Multi-Status' },
    { code: 208, description: 'Already Reported' },
    { code: 218, unofficial: true, description: 'This is fine (Apache Web Server)' },
    { code: 226, description: 'IM Used' },
    { code: 299, unofficial: true, description: 'Disappointed (https://bit.ly/35FRKNu)' },
    { code: 300, description: 'Multiple Choices' },
    { code: 301, description: 'Moved Permanently' },
    { code: 302, description: 'Found' },
    { code: 303, description: 'See Other' },
    { code: 304, description: 'Not Modified' },
    { code: 305, description: 'Use Proxy' },
    { code: 306, description: 'Switch Proxy' },
    { code: 307, description: 'Temporary Redirect' },
    { code: 308, description: 'Permanent Redirect' },
    { code: 400, description: 'Bad Request' },
    { code: 401, description: 'Unauthorized' },
    { code: 402, description: 'Payment Required' },
    { code: 403, description: 'Forbidden' },
    { code: 404, description: 'Not Found' },
    { code: 405, description: 'Method Not Allowed' },
    { code: 406, description: 'Not Acceptable' },
    { code: 407, description: 'Proxy Authentication Required' },
    { code: 408, description: 'Request Timeout' },
    { code: 409, description: 'Conflict' },
    { code: 410, description: 'Gone' },
    { code: 411, description: 'Length Required' },
    { code: 412, description: 'Precondition Failed' },
    { code: 413, description: 'Payload Too Large' },
    { code: 414, description: 'URI Too Long' },
    { code: 415, description: 'Unsupported Media Type' },
    { code: 416, description: 'Range Not Satisfiable' },
    { code: 417, description: 'Expectation Failed' },
    { code: 418, description: "I'm a teapot" },
    { code: 419, unofficial: true, description: 'Page Expired (Laravel Framework)' },
    { code: 420, unofficial: true, description: 'Enhance your calm (Twitter)' },
    { code: 420, unofficial: true, description: 'Method Failure (Spring Framework)' },
    { code: 421, description: 'Misdirected Request' },
    { code: 422, description: 'Unprocessable Entity' },
    { code: 423, description: 'Locked' },
    { code: 424, description: 'Failed Dependency' },
    { code: 425, description: 'Too Early' },
    { code: 426, description: 'Upgrade Required' },
    { code: 428, description: 'Precondition Required' },
    { code: 429, description: 'Too Many Requests' },
    { code: 430, unofficial: true, description: 'Request Header Fields Too Large (Shopify)' },
    { code: 431, description: 'Request Header Fields Too Large' },
    { code: 440, unofficial: true, description: 'Login Time-out' },
    { code: 444, unofficial: true, description: 'No Response (nginx)' },
    { code: 449, unofficial: true, description: 'Retry With' },
    { code: 450, unofficial: true, description: 'Blocked by Windows Parental Controls (Microsoft)' },
    { code: 451, unofficial: true, description: 'Redirect (Exchange ActiveSync)' },
    { code: 451, description: 'Unavailable For Legal Reasons' },
    { code: 460, unofficial: true, description: 'Client closed connection before idle timeout (AWS ELB)' },
    { code: 463, unofficial: true, description: 'More than 30 IPs in X-Forwarded-For header (AWS ELB)' },
    { code: 494, unofficial: true, description: 'Request header too large (nginx)' },
    { code: 495, unofficial: true, description: 'SSL Certificate Error (nginx)' },
    { code: 496, unofficial: true, description: 'SSL Certificate Required (nginx)' },
    { code: 497, unofficial: true, description: 'HTTP Request Sent to HTTPS Port (nginx)' },
    { code: 498, unofficial: true, description: 'Invalid Token (Esri)' },
    { code: 499, unofficial: true, description: 'Token Required (Esri)' },
    { code: 499, unofficial: true, description: 'Client Closed Request (nginx)' },
    { code: 500, description: 'Internal Server Error' },
    { code: 501, description: 'Not Implemented' },
    { code: 502, description: 'Bad Gateway' },
    { code: 503, description: 'Service Unavailable' },
    { code: 504, description: 'Gateway Timeout' },
    { code: 505, description: 'HTTP Version Not Supported' },
    { code: 506, description: 'Variant Also Negotiates' },
    { code: 507, description: 'Insufficient Storage' },
    { code: 508, description: 'Loop Detected' },
    { code: 509, unofficial: true, description: 'Bandwidth Limit Exceeded (Apache Web Server/cPanel)' },
    { code: 510, description: 'Not Extended' },
    { code: 511, description: 'Network Authentication Required' },
    { code: 520, unofficial: true, description: 'Unknown Error (Cloudflare)' },
    { code: 521, unofficial: true, description: 'Web Server Is Down (Cloudflare)' },
    { code: 522, unofficial: true, description: 'Connection Timed Out (Cloudflare)' },
    { code: 523, unofficial: true, description: 'Origin Is Unreachable (Cloudflare)' },
    { code: 524, unofficial: true, description: 'A Timeout Occurred (Cloudflare)' },
    { code: 525, unofficial: true, description: 'SSL Handshake Failed (Cloudflare)' },
    { code: 526, unofficial: true, description: 'Invalid SSL Certificate (Cloudflare)' },
    { code: 527, unofficial: true, description: 'Railgun Error (Cloudflare)' },
    { code: 529, unofficial: true, description: 'Site is overloaded (Qualsys SSLLabs)' },
    { code: 530, unofficial: true, description: 'Error extension indicator 1xxx (CLoudflare)' },
    { code: 530, unofficial: true, description: 'Site is frozen (Pantheon)' },
    { code: 598, unofficial: true, description: '(Informal convention) Network read timeout error' }
  ]
}

const cachedCodes = (() => {
  const map = new Map()

  const unofficial = codes().filter(r => r.unofficial)
  const official = codes().filter(r => !r.unofficial)

  for (const record of unofficial) {
    map.set(record.code, record)
  }

  for (const record of official) {
    map.set(record.code, record)
  }

  return map
})()

function codeInfo (code) {
  return cachedCodes.get(Number(code))
}

function codesSource () {
  return 'https://en.wikipedia.org/wiki/list_of_HTTP_status_codes'
}
