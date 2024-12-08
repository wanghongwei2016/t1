// lint-staged.config.js
const config = {
  "**/*.ts?(x)": () => "pnpm type-check",
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.{json,css,scss,md}": ["prettier --write"],
}
export default config
