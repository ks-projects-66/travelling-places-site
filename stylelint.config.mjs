/**
 * Token enforcement for the stylesheets.
 *
 * This complements brand-check.mjs rather than replacing it. brand-check reads source text and
 * owns the prose rules; this owns the CSS declarations, where a regex over text cannot tell a
 * token from a literal.
 *
 * Token definition files are exempt from strict-value by design. A token file is the one place a
 * raw value belongs, so requiring var() there would be circular. That is a scoped exemption, not
 * a relaxed rule: everywhere else the requirement stands.
 */

const TOKEN_FILES = ['src/styles/tokens.css', 'brand-kit/styles/tokens.css'];

/**
 * Values that need no token behind them.
 *
 * The color-mix entry is the load-bearing one. A mix built from tokens is token-derived, so
 * flagging it as a raw value would be wrong and would bury the real findings under fifteen false
 * ones. A mix that is NOT built from a var() still fails, as does a bare oklch() or rgb() literal.
 * The uncertified-contrast question that token mixes do raise is a separate finding, reported from
 * the browser where the computed colour can actually be measured.
 */
const NEUTRAL = [
  '/^(inherit|initial|unset|revert|currentColor|transparent|none|auto|0|100%|50%)$/',
  '/^var\\(--/',
  '/^color-mix\\([^)]*var\\(--/',
  '/var\\(--/',
];

export default {
  rules: {
    // Colour, type, spacing, radius and shadow must come from a token.
    'scale-unlimited/declaration-strict-value': [
      ['/color$/', 'fill', 'stroke', 'font-family', 'font-size', 'border-radius', 'box-shadow'],
      {
        ignoreValues: NEUTRAL,
        ignoreFunctions: false,
        disableFix: true,
        // A string, deliberately. Stylelint 17 rejects a function here during secondary-option
        // validation and then skips the rule entirely, with no warning: the run comes back clean
        // and the enforcement is simply absent. Verified against a probe file.
        message: 'Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css.',
      },
    ],

    // Prohibitions the kit states in prose, expressed as real lint rules. brand-check.mjs already
    // catches the first two by regex; having them here means they are caught in CSS that the
    // regex scan does not reach, and with a line number.
    'declaration-property-value-disallowed-list': {
      'font-style': ['italic', 'oblique'],
      'text-decoration': ['underline'],
      'text-decoration-line': ['underline'],
    },

    // Sanity rules that are not brand rules but catch genuine mistakes.
    'color-no-invalid-hex': true,
    'declaration-block-no-duplicate-properties': [true, { ignore: ['consecutive-duplicates-with-different-values'] }],
    'no-duplicate-selectors': true,
    'no-descending-specificity': null,
  },

  overrides: [
    {
      files: TOKEN_FILES,
      rules: {
        'scale-unlimited/declaration-strict-value': null,
      },
    },
    {
      // The kit's reference stylesheets demonstrate the components and legitimately hold the
      // literal values the site then consumes through tokens.
      files: ['brand-kit/styles/components.css', 'brand-kit/styles/brand-kit.css', 'brand-kit/styles/fonts.css'],
      rules: {
        'scale-unlimited/declaration-strict-value': null,
      },
    },
  ],

  plugins: ['stylelint-declaration-strict-value'],
};
