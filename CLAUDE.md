# RWA NFT Cards - Whitepaper (Mintlify)

Product whitepaper for RWA NFT Cards - a premium Visa debit card funded with stablecoins. This is a product document for clients and partners, NOT a crypto-tokenomics paper: no tokens, no tokenomics structures, ever.

## Project layout

- Mintlify site. Config and navigation live in `docs.json`.
- Two languages are live: English (`en/`, the source of truth) and Russian (`ru/`, a faithful translation of the approved English texts). Navigation uses the `languages` array in `docs.json` - one folder per language + one `languages` entry mirroring the same groups and page order. More languages can be added later, but only when explicitly asked.
- Every content change applies to BOTH languages in the same commit: edit `en/`, mirror it in `ru/` (and vice versa). The two trees stay page-for-page and block-for-block identical in structure; only the text language differs. Internal links use the matching language prefix (`/en/...` in en pages, `/ru/...` in ru pages).
- Russian canon (fixed by the user): the register is official corporate speech - formal "вы" (lowercase), no colloquialisms or slang. Fixed vocabulary: "криптовалюта" (never "крипта"), "лист ожидания" (never "вейтлист"), "личный кабинет" (never "аккаунт"), "повышение тарифа" (never "апгрейд"), "привязка"/"связь" (never "связка"), "водительское удостоверение", "заграничный паспорт", "фотографии" (not "фото"), "приглашение" (not "инвайт"), "номер отслеживания" (not "трек-номер"), "seed-фразы". Rank names, tier names (Standard/Premium/Signature/Black), "Royalty Program", "RWA NFTFI" and the four legal document names stay in English; "gift certificate" = "подарочный сертификат" ("ваучер" forbidden); the banking formula is "лицензированный банковский партнёр с лицензией Visa"; the verbatim disclaimers are "не обещает и не гарантирует доход" and "не предоставляет юридических, налоговых или финансовых консультаций"; forbidden words include "пассивный доход", "гарантированный доход", "инвестиции", "доходность". Numbers keep the canonical US format ($2,500, 2.8%). All other hard content rules (hyphens only, no exclamation marks, no emoji, dollar escaping, USDC-TRC ban) apply to Russian pages exactly as to English ones.
- 15 pages, order is fixed - see `navigation` in `docs.json`.
- Workflow: the user supplies final page texts one page at a time. Never invent product facts, numbers, names, or marketing copy beyond what the user provides. Placeholder pages only describe scope.
- Never create images, photos, or graphic assets (SVG logos, favicons, illustrations) on your own initiative - the user supplies all imagery themselves. Build a visual element only when the user explicitly asks for it in the page brief.
- Brand imagery is user-supplied via the Mintlify editor: the sidebar logo is `images/RWAlogofullsimplebackground.png` (light mode) and `images/Logo.png` (dark mode); the grayscale globe `images/apple-touch-icon.png` is the favicon source. The earlier empty-SVG logo trick and the "R" monogram favicon are retired.
- `favicon.png` is the globe trimmed to its alpha bounding box at 256px - regenerate from `images/apple-touch-icon.png` if the art changes. `tab-title.js` (custom JS) keeps browser tab titles short: `{sidebar page name} - RWA NFT Cards`; the served long `<title>` stays untouched for SEO, only the visible tab text changes.
- Introduction reserves a video slot (MDX comment right under the frontmatter): when the user sends the video link, embed it as a 16:9 iframe inside a Frame there.
- Pages are authored only with markdown and native Mintlify components (Card, Columns, Steps, Accordion, Update, Frame, markdown tables and lists). Never add raw HTML elements (div, span, table) or inline styles to MDX - the user edits pages in the Mintlify visual editor, where raw HTML renders as an uneditable block.
- No colored callouts (Note, Warning, Tip, Info) - their blue/orange/green accents break the black-and-white palette. Highlights and warnings are blockquotes, with a bold lead where a label is needed.
- Cards are only for short, scannable facts: numbers, options, list items, links. Long narrative paragraphs stay as prose or H3 sections - never stretched into side-by-side cards. Never leave an empty-body card next to filled ones.
- Icons are utility only: check/xmark contrasts, brand marks (Apple Pay, Google Pay, PayPal, and the USDT/USDC coin marks), contact channels, plus two Phosphor light-weight marks on the waitlist pair. Local SVG icons live at `images/icons/*.svg` and must carry an explicit mid-gray fill (#808080), never `currentColor`: Mintlify serves them as images, so currentColor renders black and disappears on the dark theme. Never decorative metaphor sets (seedling/briefcase/trophy style) - rank and tier cards stay icon-free, typography and numbers do the work (fixed by the user).
- The site banner points to the waitlist at rwanftcards.com and is the only chrome CTA: the navbar "Join the waitlist" button was removed at the user's request (it also crowded the mobile drawer). On launch day update the banner wording.
- `flags.js` (fixed by the user): custom JS that prepends country flags to the language switcher entries by exact text match ("English", "Русский") - extend its FLAGS map when a language is added. The flag emoji in the switcher are a user-approved exception to the no-emoji and black-and-white rules; they appear nowhere else.
- Contextual menu options: chatgpt, claude, grok, aistudio (the user extended the set in the Mintlify editor); the copy-page and view-markdown entries stay removed. llms.txt is auto-generated by Mintlify hosting.
- Glossary is a Tabs page (four tabs). Tooltips on first term mentions (Product: BINs, 3DS; How to Get Your Card: stablecoins; Top-Up: networks, 3DS) mirror Glossary definitions - keep them in sync when definitions change.
- Escape dollar signs as \$ whenever a single line carries two or more amounts - bare $...$ pairs are parsed as LaTeX math and mangle the text, and bold does NOT protect them (the math parser runs first). Only separate table cells are safe.
- No mermaid diagrams - the renderer ignores the grayscale forcing and fails the black-and-white bar (verified live). Flows stay as tables, Steps or cards.
- Never use wide comparison tables (fixed by the user - they clip and scroll in the content column); narrow tables of up to 3 columns are fine and are the right tool when numbers must be compared. Tier data is a Card grid (one card per tier with a fact list); rank data is a 3-column table (rank / personal sale / team volume) plus a bulleted list of team requirements - the ten-card ladder was replaced because comparing across cards was hard. Absent values are spelled out ("no requirement"), never dashed.

## Git workflow (fixed by the user)

- All work happens on the branch `claude/rwa-nft-cards-whitepaper-d3hm10` - never develop on or push to any other branch (except `main` bootstrap, already done).
- Every pull request is head `claude/rwa-nft-cards-whitepaper-d3hm10` into base `main`. When the user says "make a new PR", it always means exactly this.
- While a PR from this branch is open, new commits pushed to the branch land in that same open PR; a genuinely new PR is possible only after the current one is merged or closed.
- After a PR is merged, restart the branch from the latest `main` (`git fetch origin main && git checkout -B claude/rwa-nft-cards-whitepaper-d3hm10 origin/main`) and build the next page there.
- The user merges PRs in GitHub themselves; never merge and never push to `main` directly.

## Brand and tone

- Premium, restrained. Strictly black and white (fixed by the user): the light theme is the default (white background, black text); the dark theme (black background, white text) is available via the built-in light/dark toggle. Grayscale shades only in both themes. Never introduce any other color - no gold, no accent hues - in config or page styling. Highlight numbers with bold text or component titles, not with custom styling.
- Brand voice reference lines: "Spend free. Everywhere." (the landing page headline, kept in sync with it), "You earn the difference", "Crypto in your wallet - fiat on your card".
- Appearance: `default: light`, no `strict` - the theme switcher stays enabled.

## Hard content rules (apply to every page, every edit, every language)

- Never mention "white-label". Never name the issuer, the bank, or any partner. The only allowed wording is: "a licensed banking partner under a Visa license". Never name team members.
- No income promises or forecasts of any kind. Forbidden words: "passive income", "guaranteed income", "investment", "yield", "returns".
- The term is "gift certificate". The word "voucher" is forbidden. Never describe a partner taking payment from a client directly or settling off the platform - a certificate is bought on the platform and the code is handed over.
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
- Daily limit: $100,000 Black; the other tiers publish no daily limit (fixed by the user: no "to be published" lists anywhere - upgrade terms come later, conversion terms are never detailed by us).
- Physical card delivery: included in the tier price.
- Top-up fee: 2.8% Standard, 2% Premium / Signature / Black ("starts at 2% depending on the tier").
- Minimum top-up: $20; smaller amounts accumulate and are credited with the next top-up.
- Virtual card issuance: within 5 minutes of tier payment. Verification approval comes first, payment after.
- Top-up: crypto only - no bank card, no bank transfer.
- One active card per verified identity - applies to gift certificates too.
- Card currency: US dollars. Maintenance: $0 for the entire 3-year term.
- USDT: BEP-20 and TRC-20 networks. USDC: BEP-20 only - never mention "USDC TRC-20" in any form. BEP-20 = BNB Chain, TRC-20 = TRON.
- Rewards withdrawal: weekly, minimum $5, in USDT BEP-20.
- Royalty Program: up to 40% on every sale; personal-sale rates by rank (Starter to Founder): 12 / 17 / 21 / 24 / 26 / 29 / 32 / 34 / 36 / 40 percent; team volumes: $2,500 / $7,500 / $25,000 / $125,000 / $250,000 / $500,000 / $1,000,000 / $2,000,000 / $5,000,000 (Agent to Founder).
- Matching bonus: 5% / 4% / 3% for lines 1 / 2 / 3, unlocked at Pro Manager (1st), Director (plus 2nd), Pro Director (all three); works regardless of the partner's rank.
- Rewards credited instantly in USDT on every sale; rank recalculates immediately; team volume never resets, career rank never expires; no cap on depth or total rewards.
- A sale: card purchase of any tier, tier upgrade, gift certificate at activation (recorded to the buyer). Not volume: top-ups, reissues, service fees. Own purchase is the sponsor's personal sale.
- Waitlist and the partner structure (fixed by the user): submitting the waitlist form does NOT place anyone in the partner structure - the structure forms when the program opens at the sales launch, so the waitlist does not decide anyone's place in the Royalty Program. A sponsor code can be added at any time up to and including launch day; a separate launch mechanism for recording referral links is being prepared and will be explained closer to the date. Every confirmed application immediately gets a personal referral code and link, that code becomes the working code at launch, and links sent today do not expire. An ecosystem connection is never overridden by a referral link.
- Ecosystem sync: referral connections carry over from RWA NFTFI by confirmed email; the sponsor is fixed once and forever, the synchronization has no expiry; teams, volumes, ranks and balances do not transfer.
- Age: 18 and older. Documents: international passport (everyone); driver's license or ID card (most nationalities); must be valid. Country list is set by the banking partner; card verification is always passed separately.
- No credit limit, no cashback, no interest on the balance. Incoming bank transfers are not accepted. Conversion runs through the payment network; the platform never promises to publish its terms.
- 200+ countries.
- 175,000,000+ merchant locations.
- Digital dollar market: $258B.
- 30 independent BINs.
- Sales start: September 29, 2026. First wave: 5,000 cards.
- Roadmap: Q4 2026 - any-crypto top-up with auto-conversion, promo campaigns; Q1 2027 - P2P transfers, withdrawal from card to crypto; Q1-Q2 2027 - withdrawal to any bank account or card; Q3 2027 - new products.
- The only official website: rwanftcards.com. Support: chat on the site, email support@rwanftcards.com.
- Support never asks for: passwords, codes or seed phrases; documents in the chat; card details; payments or transfers.
- Legal documents at kyc.rwanftcards.com/legal/: terms-of-service.html, user-agreement.html, privacy-policy.html, aml-and-id-policy.html. The full documents prevail over the whitepaper.
- Deliberate disclaimers, keep verbatim wherever they appear: "does not promise or guarantee income", "does not provide legal, tax or financial advice".

Before committing any content change, re-check it against the hard content rules and the canonical numbers above.
