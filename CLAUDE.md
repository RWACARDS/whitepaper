# RWA NFT Cards - Whitepaper (Mintlify)

Product whitepaper for RWA NFT Cards - a premium Visa debit card funded with stablecoins. This is a product document for clients and partners, NOT a crypto-tokenomics paper: no tokens, no tokenomics structures, ever.

## Project layout

- Mintlify site. Config and navigation live in `docs.json`.
- Content language is English. All pages live in `en/`. Navigation uses the `languages` array in `docs.json` so more languages can be added later (one folder per language + one `languages` entry mirroring the same groups and page order). Do not add other languages until explicitly asked.
- 15 pages, order is fixed - see `navigation` in `docs.json`.
- Workflow: the user supplies final page texts one page at a time. Never invent product facts, numbers, names, or marketing copy beyond what the user provides. Placeholder pages only describe scope.
- Never create images, photos, or graphic assets (SVG logos, favicons, illustrations) on your own initiative - the user supplies all imagery themselves. Build a visual element only when the user explicitly asks for it in the page brief.
- Pages are authored only with markdown and native Mintlify components (Card, Columns, Note, Warning, markdown tables and lists). Never add raw HTML elements (div, span, table) or inline styles to MDX - the user edits pages in the Mintlify visual editor, where raw HTML renders as an uneditable block.

## Git workflow (fixed by the user)

- All work happens on the branch `claude/rwa-nft-cards-whitepaper-d3hm10` - never develop on or push to any other branch (except `main` bootstrap, already done).
- Every pull request is head `claude/rwa-nft-cards-whitepaper-d3hm10` into base `main`. When the user says "make a new PR", it always means exactly this.
- While a PR from this branch is open, new commits pushed to the branch land in that same open PR; a genuinely new PR is possible only after the current one is merged or closed.
- After a PR is merged, restart the branch from the latest `main` (`git fetch origin main && git checkout -B claude/rwa-nft-cards-whitepaper-d3hm10 origin/main`) and build the next page there.
- The user merges PRs in GitHub themselves; never merge and never push to `main` directly.

## Brand and tone

- Premium, dark, restrained. Strictly black and white (fixed by the user): black background, white text and accents, grayscale shades only. Never introduce any other color - no gold, no accent hues - in config or page styling. Highlight numbers with bold text or component titles, not with custom styling.
- Brand voice reference lines: "Spend freely. Your money, your rules", "You earn the difference", "Crypto in your wallet - fiat on your card".
- Site is dark-mode only (`appearance.default: dark`, `strict: true`).

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
- Daily limit: $100,000 Black; daily limits for Standard / Premium / Signature - to be published by the sales launch.
- Physical card delivery: included in the tier price.
- Top-up fee: 2.8% Standard, 2% Premium / Signature / Black ("starts at 2% depending on the tier").
- Minimum top-up: $20; smaller amounts accumulate and are credited with the next top-up.
- Virtual card issuance: within 5 minutes of tier payment. Verification approval comes first, payment after.
- Top-up: crypto only - no bank card, no bank transfer.
- One active card per verified identity - applies to gift certificates too.
- Card currency: US dollars. Maintenance: $0 for the entire 3-year term.
- USDT: BEP-20 and TRC-20 networks. USDC: BEP-20 only - never mention "USDC TRC-20" in any form.
- Rewards withdrawal: weekly, minimum $5, in USDT BEP-20.
- Royalty Program: up to 40% on every sale; personal-sale rates by rank (Starter to Founder): 12 / 17 / 21 / 24 / 26 / 29 / 32 / 34 / 36 / 40 percent; team volumes: $2,500 / $7,500 / $25,000 / $125,000 / $250,000 / $500,000 / $1,000,000 / $2,000,000 / $5,000,000 (Agent to Founder).
- Matching bonus: 5% / 4% / 3% for lines 1 / 2 / 3, unlocked at Pro Manager (1st), Director (plus 2nd), Pro Director (all three); works regardless of the partner's rank.
- Rewards credited instantly in USDT on every sale; rank recalculates immediately; team volume never resets, career rank never expires; no cap on depth or total rewards.
- A sale: card purchase of any tier, tier upgrade, gift certificate at activation (recorded to the buyer). Not volume: top-ups, reissues, service fees. Own purchase is the sponsor's personal sale.
- Ecosystem sync: referral connections carry over from RWA NFTFI by confirmed email; the sponsor is fixed once and forever, the synchronization has no expiry; teams, volumes, ranks and balances do not transfer.
- 200+ countries.
- 175,000,000+ merchant locations.
- Digital dollar market: $258B.
- 30 independent BINs.
- Sales start: September 29, 2026. First wave: 5,000 cards.
- Roadmap: Q4 2026 - any-crypto top-up with auto-conversion, promo campaigns; Q1 2027 - P2P transfers, withdrawal from card to crypto; Q1-Q2 2027 - withdrawal to any bank account or card; Q3 2027 - new products.
- The only official website: rwanftcards.com.

Before committing any content change, re-check it against the hard content rules and the canonical numbers above.
