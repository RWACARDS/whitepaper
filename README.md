# RWA NFT Cards Whitepaper

Mintlify documentation site for the RWA NFT Cards whitepaper - a premium Visa debit card powered by stablecoins.

## Local preview

```bash
npm i -g mint
mint dev
```

The site runs at `http://localhost:3000`.

## Structure

- `docs.json` - site configuration, theme, and navigation
- `en/` - English content, 15 pages
- `logo/`, `favicon.svg` - brand assets (placeholders, to be replaced with final brand files)
- `CLAUDE.md` - editorial rules and canonical numbers; read it before editing any content

## Adding a language

The navigation is built on the `languages` array in `docs.json`, so localization is additive:

1. Create a new folder named after the language code (for example `es/`) mirroring the files in `en/`.
2. Add a new entry to `navigation.languages` in `docs.json` with the same groups and page order, pointing at the new folder.

English stays the default language and the source of truth.
