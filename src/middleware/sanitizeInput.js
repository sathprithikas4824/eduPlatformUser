import sanitizeHtml from 'sanitize-html';

const sanitizeConfig = {
  allowedTags: ['p', 'br', 'b', 'i', 'em', 'strong', 'a', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'u', 's', 'strike', 'blockquote', 'div'],
  allowedAttributes: {
    'a': ['href', 'title', 'target', 'rel'],
    'span': ['class', 'style'],
    'p': ['style', 'class'],
    'div': ['style', 'class'],
    'u': ['style', 'class'],
    'h1': ['style', 'class'],
    'h2': ['style', 'class'],
    'h3': ['style', 'class'],
    'strong': ['style', 'class'],
    'em': ['style', 'class'],
    '*': ['class']
  },
  allowedSchemes: ['http', 'https', 'mailto'],
  transformTags: {
    'a': (tagName, attribs) => {
      // Force external links to open in new tab and add security attributes
      if (attribs.href && !attribs.href.startsWith('/')) {
        return {
          tagName: 'a',
          attribs: {
            ...attribs,
            target: '_blank',
            rel: 'noopener noreferrer'
          }
        };
      }
      return { tagName, attribs };
    }
  },
  // Limit nesting depth to prevent DoS
  nestingLimit: 5
};

/**
 * Middleware to sanitize specific fields in request body
 * @param {Array<string>} fields - Array of field names to sanitize
 * @returns {Function} Express middleware function
 */
export const sanitizeBody = (fields) => {
  return (req, res, next) => {
    if (!req.body) return next();

    fields.forEach(field => {
      if (req.body[field] && typeof req.body[field] === 'string') {
        // Sanitize HTML content
        req.body[field] = sanitizeHtml(req.body[field], sanitizeConfig);

        // Additional length check (max 50KB per field)
        if (req.body[field].length > 50000) {
          return res.status(400).json({
            error: `Field "${field}" exceeds maximum length of 50,000 characters`
          });
        }
      }
    });

    next();
  };
};

/**
 * Sanitize a single text string
 * @param {string} text - Text to sanitize
 * @returns {string} Sanitized text
 */
export const sanitizeText = (text) => {
  if (!text || typeof text !== 'string') return '';
  return sanitizeHtml(text, sanitizeConfig);
};

/**
 * Strip all HTML tags completely (no tags allowed)
 * @param {string} text - Text to clean
 * @returns {string} Plain text
 */
export const stripAllHtml = (text) => {
  if (!text || typeof text !== 'string') return '';
  return sanitizeHtml(text, {
    allowedTags: [],
    allowedAttributes: {}
  });
};
