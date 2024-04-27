module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react-hooks", "prettier"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    window: "readonly",
    console: "readonly",
    document: "readonly",
    process: "readonly",
  },
  rules: {
    "linebreak-style": ["warn", "unix"],
    "react-hooks/rules-of-hooks": "warn",
    "react-hooks/exhaustive-deps": "warn",
    // "semi": ["error", "always"]
    "no-undef": "error",
    "prettier/prettier": "warn",
  },

  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: ["plugin:@typescript-eslint/recommended", "prettier"],
      rules: {
        "react-hooks/rules-of-hooks": "warn",
        "react-hooks/exhaustive-deps": "warn",
        "linebreak-style": ["warn", "unix"],
        "comma-dangle": [
          "error",
          {
            arrays: "always-multiline",
            objects: "always-multiline",
            imports: "always-multiline",
            exports: "always-multiline",
            functions: "ignore",
          },
        ],
        semi: ["error", "always"],
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
    {
      files: ["*.js"],
      extends: ["prettier"],
      rules: {
        "linebreak-style": ["error", "unix"],
      },
    },
  ],
};
