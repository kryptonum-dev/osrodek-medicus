import { createGlobalStyle } from "styled-components";
import { Clamp } from "../utils/functions";
import './fonts.css';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :root {
    /* 
     * ═══════════════════════════════════════════════════════════════
     * MEDICUS COLOR PALETTE - Deep Teal & Petrol Blue
     * ═══════════════════════════════════════════════════════════════
     * 
     * Design context:
     * - Gray concrete floors (cool, modern foundation)
     * - Beech wood furniture (warm, natural accents)
     * - White walls (clean, clinical)
     * 
     * Philosophy: "Bright but not garish" - professional, trustworthy,
     * healthcare-appropriate colors with excellent readability.
     * 
     * Primary (Deep Teal): Medical, calming, professional
     * Secondary (Petrol Blue): Sophisticated accent, trustworthy
     * 
     * WCAG AA compliant - all text colors meet 4.5:1 contrast ratio
     * ═══════════════════════════════════════════════════════════════
     */

    /* ─────────────── Neutral Colors ─────────────── */
    --neutral-100: #FFFFFF;           /* Pure white backgrounds */
    --neutral-200: #F4F7F9;           /* Light gray-blue tint for sections */
    --neutral-300: #E1E8ED;           /* Borders, dividers */
    
    /* ─────────────── Primary Colors - Deep Teal ─────────────── */
    /* Main brand color - medical, trustworthy, calming */
    --primary: #0E7E73;               /* Main teal (buttons, links) */
    --primary-200: #7DD3C8;           /* Light teal (hover states, highlights) */
    --primary-300: #3FA99D;           /* Medium teal */
    --primary-400: #0E7E73;           /* Standard teal (same as --primary) */
    --primary-500: #065F56;           /* Dark teal (emphasis, active states) */
    
    /* ─────────────── Secondary Colors - Petrol Blue ─────────────── */
    /* Accent color - sophisticated, professional, contrasting */
    --secondary-200: #5B8A9A;         /* Light petrol (subtle accents) */
    --secondary-400: #2D5A6B;         /* Medium petrol */
    --secondary-500: #1A3F4D;         /* Dark petrol (strong accents, HR lines) */
    
    /* ─────────────── Error State ─────────────── */
    --error: #DC3545;                 /* Standard red for errors */
    
    /* ─────────────── Dark/Text Colors ─────────────── */
    /* High contrast text colors for excellent readability */
    --dark-200: #5A6D78;              /* Muted text, captions */
    --dark-300: #2C4251;              /* Subheadings, secondary text */
    --dark-500: #0D1F26;              /* Main body text - near black for max contrast */

    /* ─────────────── Functional Assignments ─────────────── */
    --form-input: var(--neutral-100);
    --form-tick: var(--primary-500);
    --form-link: var(--primary-400);
    
    /* ─────────────── Gradient ─────────────── */
    /* Deep teal to petrol blue - sophisticated medical gradient */
    --gradient: linear-gradient(135deg, #3FA99D 0%, #1A3F4D 100%);
    
    /* Animation & Layout */
    --easing: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    --pageMargin: 40px;
    @media (max-width: 699px){
     --pageMargin: 16px;
    }
  }
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 123px;
  }
  body.scrollLock {
    overflow: hidden;
    touch-action: none;
  }
  body {
    min-width: 320px;
    background-color: var(--neutral-100);
    color: var(--dark-500);
    font-size: 1rem;
    line-height: 1.6;
    font-family: 'Manrope', sans-serif;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
  }
  :focus {
    outline: none;
  }
  .tabbing :focus-visible {
    outline: 3px solid #e31c3d;
    outline-offset: 5px;
  }
  .max-width {
    max-width: 1680px;
    width: calc(100% - var(--pageMargin) * 2);
    margin: 0 auto;
    height: 100%;
  }
  main {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: ${Clamp(96, 144, 172, "px")};
    margin-bottom: ${Clamp(96, 144, 172, "px")};
  }
  svg {
    vertical-align: top;
  }
  a {
    text-decoration: none;
    color: inherit;
    &.link {
      font-weight: 600;
      color: var(--primary-500);
      &:hover {
        text-decoration: underline;
      }
    }
  }
  label {
    display: block;
  }
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  sup {
    font-size: .6em;
    vertical-align: top;
  }
  input, textarea, button, select {
    font: inherit;
    color: inherit;
    background-color: transparent;
    appearance: none;
  }
  iframe {
    width: 100%;
    border: none;
    border-radius: 8px;
    display: block;
  }
  hr {
    display: inline-block;
    width: 100%;
    max-width: 180px;
    height: 3px;
    background-color: var(--secondary-500);
    border: none;
    margin: ${Clamp(24, 24, 48, 'px')} 0;
  }
  h1 {
    font-size: ${Clamp(32, 36, 82)};
  }
  h2 {
    font-size: ${Clamp(32, 32, 48)};
  }
  h3 {
    font-size: ${Clamp(24, 24, 32)};
  }
  h1, h2, h3, h4, h5, h6 {
    line-height: 1.3;
    font-weight: 600;
    strong {
      font-weight: 700;
    }
  }
  .cta-wrapper {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 16px 32px;
  }
  ol.orderedList {
    padding-left: 1em;
    li {
      &:not(:last-child){
        margin-bottom: 12px;
      }
    }
  }
  ul.unorderedList {
    list-style-type: none;
    li {
      position: relative;
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 8px;
      &:not(:last-child){
        margin-bottom: 12px;
      }
      &::before {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-top: calc(1em - 10px);
        background-color: var(--secondary-500);
        border-radius: 50%;
      }
    }
  }
  @media (max-width: 549px){
    .cta-wrapper {
      width: 100%;
    }
    .cta {
      width: 100%;
      text-align: center;
    }
  }
  .sr-only:not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`

export default GlobalStyle
