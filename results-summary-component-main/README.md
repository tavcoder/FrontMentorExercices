# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![Desktop solution](./screenshot.jpg)

### Links

- Solution URL: https://github.com/tavcoder/FrontMentorExercices/edit/main/results-summary-component-main
- Live Site URL: https://front-mentor-exercices.vercel.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (design tokens)
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Build tool
- [TanStack Query](https://tanstack.com/query) - Server state management
- [React Router](https://reactrouter.com/) - Client-side routing

### What I learned

**CSS custom properties as design tokens**

Storing raw HSL values as tokens (without the `hsl()` wrapper) allows composing them with `hsla()` for opacity variants, which proved useful for the summary item backgrounds:
```css
:root {
  --light-red: 0, 100%, 67%;
}

.summary__item--reaction {
  background-color: hsla(var(--light-red), 0.1);
  color: hsl(var(--light-red));
}
```

**Suspense-first data fetching**

Using `useSuspenseQuery` from TanStack Query alongside React's `Suspense` and `ErrorBoundary` keeps the component tree clean — `ResultsPage` can assume data is always available and skip loading/error conditionals entirely:
```jsx
export function ResultsPage() {
  const { data } = useSuspenseQuery({
    queryKey: ["scores"],
    queryFn: get,
  });

  const score = calculateScore(data);
  const { ranking, description } = getDescription(score);

  return (/* always has data, no conditionals needed */);
}
```

**Keeping utility functions pure**

Separating `calculateScore` and `getDescription` as plain JS functions (no React dependency) makes them easy to reason about and reuse independently of the component tree.
```js
export function calculateScore(data) {
  return Math.round(data.reduce((sum, item) => sum + item.score, 0) / data.length);
}
```

### Continued development

- **TypeScript** — adding types to props and utility functions would catch errors like passing an array where a number is expected
- **Accessibility** — go beyond `alt=""` on decorative images; audit with a screen reader and add `focus-visible` states on all interactive elements
- **Testing** — write unit tests for `calculateScore` and `getDescription`, and a smoke test that renders `ResultsPage` with mock data
- **Extended score ranges** — `getDescription` currently only handles two thresholds; a full implementation would cover Excellent / Great / Good / Needs Work

### AI Collaboration

Used Claude (Anthropic) throughout the challenge as a triple-perspective mentor:

- **Architecture review** — evaluated component structure, naming conventions, and separation of concerns before writing code
- **Incremental development strategy** — instead of building everything at once (which caused a blank-screen bug in a previous attempt), used a top-down stub approach: `main.jsx` → `App.jsx` → page → panels → leaf components, verifying each level in the browser before moving on
- **Code review** — identified four concrete issues after the first working version: the `hsla()` token composition bug, missing `alt` attributes, a fragile relative path in `fetcher.js`, and incomplete score ranges in `getDescription`

What worked well: having specific, targeted feedback at each stage rather than generating the entire solution upfront. What to improve: opening DevTools earlier to catch CSS rendering bugs (the `hsla()` issue was visible in the browser but went unnoticed).

## Author

- Frontend Mentor - (https://www.frontendmentor.io/profile/@tavcoder)
