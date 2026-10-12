# Portfolio Design System

## North Star

The portfolio is a living interaction casefile: dark, editorial and technically expressive without feeling like a game interface. It should help a product design recruiter scan decisions quickly while giving an IME reviewer enough visual and technical depth to understand the work.

## Audience

- Primary: interaction design, product design and AI product experience recruiters at mainland technology companies.
- Secondary: PolyU MScIME admissions reviewers.

## Principles

1. Lead with product thinking, then show craft and implementation evidence.
2. Use real interfaces and honest prototype status; never invent metrics or outcomes.
3. Keep the global shell neutral so each case study can own one restrained accent colour.
4. Motion must clarify hierarchy and progress, not delay access to content.
5. At 390px, every key action and caption must remain legible without horizontal scrolling.

## Foundations

### Colour

- Page: `#050505`
- Surface: `#101010`
- Line: `#252525`
- Primary text: `#F5F5F2`
- Secondary text: `#A1A1A1`
- Product case graphite: `#11140C`
- Product case lime: `#D8E85C`
- Project accents: Fandom MBTI `#D8E85C`, Oyster `#65D5FF`, Divine `#82D3A2`, Liquidity `#F2C230`, Traces `#C58CFF`.

The home page remains near-black. Accent colour is reserved for project identity, focus feedback and small information labels; it does not replace body text.

### Typography

- Display: Helvetica Neue, Helvetica, Arial, sans-serif.
- Body: Inter, system sans-serif.
- Metadata: SFMono-Regular, Consolas, Liberation Mono, monospace.
- Display text uses tight tracking and compact leading. Body copy stays between 60 and 75 characters per line when practical.

### Shape and spacing

- Case cards and media use a 16px corner radius.
- Buttons and statuses use pill geometry.
- Main content width is 80rem with 20px mobile and 32px desktop gutters.
- Repeated card groups use equal heights and aligned internal anchors.

## Components

### Header

Sticky, translucent and quiet. The identity stays left; About, Work and Contact remain available without competing with the page title.

### Hero

The primary title is no more than two lines. The role is visually subordinate to the name, and one clear Work action follows the positioning statement.

### Work cards

Cards share the same media ratio, border, padding and footer anchor. The featured product case uses a wide split layout; the four supporting projects use an equal four-column grid at desktop sizes.

### Case studies

Every case starts with title, Type, Date, Role and a concise summary. Sections reveal on scroll and connect through a timeline. Product screenshots retain a consistent phone ratio and never imitate unavailable product data.

## Motion

- Section reveals: 750–820ms, `cubic-bezier(.2,.7,.2,1)`, short vertical travel.
- Card hover: 300ms border/translation; image scale no more than 1.025.
- Particle background: 200 desktop particles, capped at 96 on mobile; pause when the page is hidden.
- `prefers-reduced-motion` disables particles, transforms, smooth scrolling and reveal transitions.

## Responsive behaviour

- 1440px: featured split layout and four equal supporting cards.
- 768px: featured split where space allows; supporting work becomes two columns.
- 390px: all case cards and content become one column; metadata divisions become stacked; navigation remains usable without overflow.

## Content rules

- English is the primary site language; authentic Chinese Mini Program screenshots remain unchanged.
- Use `Working prototype` when a project has not formally launched.
- Do not claim user volume, conversion, retention or commercial impact without evidence.
- Liquidity is described as a `3D narrative game prototype`; games are supporting evidence, not the portfolio positioning.
