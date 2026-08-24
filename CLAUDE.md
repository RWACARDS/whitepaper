# RWA NFT Cards - Whitepaper (Mintlify)

Product whitepaper for RWA NFT Cards - a premium Visa debit card funded with stablecoins. This is a product document for clients and partners, NOT a crypto-tokenomics paper: no tokens, no tokenomics structures, ever.

## Project layout

- Mintlify site. Config and navigation live in `docs.json`.
- Content language is English. All pages live in `en/`. Navigation uses the `languages` array in `docs.json` so more languages can be added later (one folder per language + one `languages` entry mirroring the same groups and page order). Do not add other languages until explicitly asked.
- 15 pages, order is fixed - see `navigation` in `docs.json`.
- Workflow: the user supplies final page texts one page at a time. Never invent product facts, numbers, names, or marketing copy beyond what the user provides. Placeholder pages only describe scope.

## Brand and tone

- Premium, dark, restrained. Dark background, metal textures, gold accents, large highlight numbers.
- Brand voice reference lines: "Spend freely. Your money, your rules", "You earn the difference", "Crypto in your wallet - fiat on your card".
- Site is dark-mode only (`appearance.default: dark`, `strict: true`). Accent gold: `#C9A962`.

## Hard content rules (apply to every page, every edit, every language)

- Never mention "white-label". Never name the issuer, the bank, or any partner. The only allowed wording is: "a licensed banking partner under a Visa license". Never name team members.
- No income promises or forecasts of any kind. Forbidden words: "passive income", "guaranteed income", "investment", "yield", "returns".
- The term is "gift certificate". The word "voucher" is forbidden.
- Typography: use the hyphen "-" instead of em or en dashes. No exclamation marks. No emoji in content.
- Rank names, exact and complete: Starter, Agent, Manager, Pro Manager, Director, Pro Director, Chief Director, Vice President, President, Founder.

## Canonical numbers (never change, never contradict)

- Card validity: 3 years (not 5).
- Premium tier: $199 (not $149).
- Tier prices: $49 / $199 / $299 / $499.
- Tier names and composition: Standard (virtual), Premium (virtual, "Clients' choice"), Signature (virtual + plastic), Black (virtual + metal).
- Per-transaction limits: up to $5,000 / $50,000 / $75,000 / $100,000 (Standard / Premium / Signature / Black).
- Monthly limits: up to $25,000 / $1,000,000 / $1,500,000 / $3,000,000.
- ATM withdrawals: Signature and Black only, up to $3,000 per day.
- Top-up fee: 2.8% Standard, 2% Premium / Signature / Black ("starts at 2% depending on the tier").
- Minimum top-up: $20; smaller amounts accumulate and are credited with the next top-up.
- Card currency: US dollars. Maintenance: $0 for the entire 3-year term.
- USDT: BEP-20 and TRC-20 networks. USDC: BEP-20 only - never mention "USDC TRC-20" in any form.
- Rewards withdrawal: weekly, minimum $5, in USDT BEP-20.
- 200+ countries.
- 175,000,000+ merchant locations.
- Digital dollar market: $258B.
- 30 independent BINs.
- Sales start: September 29, 2026.
- The only official website: rwanftcards.com.

Before committing any content change, re-check it against the hard content rules and the canonical numbers above.
