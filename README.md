# RWA NFT Cards Whitepaper

Mintlify documentation site for the RWA NFT Cards whitepaper - an international dollar Visa debit card.

## Local preview

```bash
npm i -g mint
mint dev
```

The site runs at `http://localhost:3000`.

## Structure

- `docs.json` - site configuration, theme, navigation, footer socials and redirects
- `en/` - English source, 14 pages; `ru/`, `cn/`, `de/`, `pt/`, `es/` - translations with the same 14 pages
- `images/`, `videos/`, `style.css`, `flags.js`, `tab-title.js` - user-supplied brand assets, the hero video style, the language switcher flags and short tab titles
- `CLAUDE.md` - editorial rules and canonical numbers; read it before editing any content

## Adding a language

The navigation is built on the `languages` array in `docs.json`, so localization is additive:

1. Create a new folder named after the language code (for example `fr/`) mirroring the files in `en/`.
2. Add a new entry to `navigation.languages` in `docs.json` with the same groups and page order, pointing at the new folder.
3. Extend the `FLAGS` map in `flags.js` and add the `/{code}/royalty-program` and `/{code}/rwa-nftfi-ecosystem` redirects in `docs.json`.

English stays the default language and the source of truth.
