module.exports = {
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
    { code: 200, description: 'OK' },
    { code: 201, description: 'Created' },
    { code: 202, description: 'Accepted' },
    { code: 203, description: 'Non-Authoritative Information' },
    { code: 204, description: 'No Content' },
    { code: 205, description: 'Reset Content' },
    { code: 206, description: 'Partial Content' },
    { code: 207, description: 'Multi-Status' },
    { code: 208, description: 'Already Reported' },
    { code: 226, description: 'IM Used' },
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
    { code: 420, unofficial: true, description: 'Enhance your calm (Twitter)' },
    { code: 421, description: 'Misdirected Request' },
    { code: 422, description: 'Unprocessable Entity' },
    { code: 423, description: 'Locked' },
    { code: 424, description: 'Failed Dependency' },
    { code: 426, description: 'Upgrade Required' },
    { code: 428, description: 'Precondition Required' },
    { code: 429, description: 'Too Many Requests' },
    { code: 431, description: 'Request Header Fields Too Large' },
    { code: 440, unofficial: true, description: 'Login Time-out' },
    { code: 444, unofficial: true, description: 'No Response' },
    { code: 449, unofficial: true, description: 'Retry With' },
    { code: 450, unofficial: true, description: 'Blocked by Windows Parental Controls (Microsoft)' },
    { code: 451, unofficial: true, description: 'Redirect' },
    { code: 451, description: 'Unavailable For Legal Reasons' },
    { code: 494, unofficial: true, description: 'Request header too large' },
    { code: 495, unofficial: true, description: 'SSL Certificate Error' },
    { code: 496, unofficial: true, description: 'SSL Certificate Required' },
    { code: 497, unofficial: true, description: 'HTTP Request Sent to HTTPS Port' },
    { code: 498, unofficial: true, description: 'Invalid Token (Esri)' },
    { code: 499, unofficial: true, description: 'Client Closed Request' },
    { code: 499, unofficial: true, description: 'Token Required (Esri)' },
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
    { code: 520, unofficial: true, description: 'Unknown Error' },
    { code: 521, unofficial: true, description: 'Web Server Is Down' },
    { code: 522, unofficial: true, description: 'Connection Timed Out' },
    { code: 523, unofficial: true, description: 'Origin Is Unreachable' },
    { code: 524, unofficial: true, description: 'A Timeout Occurred' },
    { code: 525, unofficial: true, description: 'SSL Handshake Failed' },
    { code: 526, unofficial: true, description: 'Invalid SSL Certificate' },
    { code: 527, unofficial: true, description: 'Railgun Error' },
    { code: 530, unofficial: true, description: 'Site is frozen' },
    { code: 598, unofficial: true, description: '(Informal convention) Network read timeout error' }
  ]
}

function codesSource () {
  return 'https://en.wikipedia.org/wiki/list_of_HTTP_status_codes'
}
