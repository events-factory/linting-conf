import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";
import tsParser from "@typescript-eslint/parser";


export default [
  {languageOptions: { 
    globals: globals.browser,
    parser: tsParser,
  },
  settings: { react: { version: "detect" } },
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    semi: ["error", "always"],
    "no-console": "warn",
    "no-undef": "error",
    "no-extra-semi": "error",
    "no-unreachable": "error",
    "no-unsafe-negation": "error",
    "no-constant-condition": "error",
    "no-empty": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-parens": "error",
    quotes: ["error", "single"],
    "react/jsx-indent": ["error", 2],
    "no-warning-comments": "error",
    "no-unused-vars": "error",
    "prefer-const": "error",
    "no-var": "error",
    "no-const-assign": "error",
    "no-new-object": "error",
    "no-array-constructor": "error",
    "object-shorthand": "error",
    "quote-props": ["error", "as-needed"],
    "prefer-destructuring": "error",
    "prefer-object-spread": "error",
    "no-duplicate-imports": "error",
    "no-useless-rename": "error",
    "no-useless-constructor": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-case": "error",
    "no-fallthrough": "error",
    "prefer-template": "error",
    "no-useless-concat": "error",
    "no-eval": "error",
    "no-empty-function": "error",
    "no-useless-return": "error",
    "no-else-return": "error",
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-throw-literal": "error",
    "no-useless-escape": "error",
  }
},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
];