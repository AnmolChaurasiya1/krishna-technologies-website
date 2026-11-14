# Krishna Technologies — public website

A responsive React + Vite marketing website with a premium navy, blue and warm-gold visual identity. The layout takes inspiration from modern Watermelon UI-style landing-page blocks: strong hero, service cards, trust/commitment sections, process timeline, FAQ accordion and contact form.

## Run locally

Requirements: Node.js 18+

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Before publishing — important

1. In `src/App.jsx`, replace `hello@krishnaatechnologies.cloud` with the official inbox you actively monitor, if different.
2. Update the contact details, business location and social links with verified information. Do not publish details you cannot support.
3. The enquiry form currently opens the visitor's email application using a `mailto:` link. It does not store enquiries. For a real production form, connect a secure backend/API and add server-side validation, spam protection and a privacy notice.
4. Add your approved Krishna Technologies logo in place of the text mark if you have a final logo asset.
5. Add only genuine client testimonials, case studies, certifications and performance figures—with permission and evidence. This template intentionally avoids fabricated trust badges, client logos, statistics and guaranteed delivery claims.
6. Keep the permission-first policy: do not send campaigns to purchased, scraped or non-consensual lists; provide a working unsubscribe route and honour opt-outs.

## Stack

- React 18
- Vite 6
- Lucide React icons
- Custom responsive CSS (no paid component dependency)

The site is a front-end starter, not an email-sending application or CRM.
