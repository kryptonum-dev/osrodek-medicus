import React from "react"
import styled from "styled-components"

export const Logo = ({ variant = 'dark' }) => (
  <LogoWrapper
    xmlns='http://www.w3.org/2000/svg'
    viewBox="0 0 205 62"
    fill='none'
    style={{ overflow: 'visible' }}
  >
    <g className="heart">
      {/* Dark petrol blue pill (top-right) - original color */}
      <rect
        width='54.729'
        height='26.464'
        x='14.196'
        y='48.31'
        fill='#1A3F4D'
        rx='13.232'
        transform='rotate(-60 14.196 48.31)'
      ></rect>
      {/* Light teal pill (bottom-left) - original color */}
      <rect
        width='54.729'
        height='26.464'
        x='27.364'
        y='61.657'
        fill='#7DD3C8'
        rx='13.232'
        transform='rotate(-120 27.364 61.657)'
      ></rect>
      {/* Medium teal center overlap - original color */}
      <path
        fill='#3FA99D'
        d='M20.74 36.938c-3.667 6.337-1.484 14.443 4.874 18.106 6.36 3.664 14.486 1.496 18.153-4.84l.145-.251c2.103-3.91 2.192-8.778-.193-12.899L32.184 17.121 20.74 36.938z'
      ></path>
    </g>
    <text
      x="68"
      y="24"
      fill={variant === 'light' ? '#fff' : '#0E7E73'}
      className="text logo-text-top"
      style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: '16px' }}
    >Ośrodek Zdrowia</text>
    <text
      x="68"
      y="48"
      fill={variant === 'light' ? '#fff' : '#0D1F26'}
      className="text logo-text-bottom"
      style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: '20px' }}
    >Medicus</text>
  </LogoWrapper>
)

const LogoWrapper = styled.svg`
  overflow: visible;
  width: auto;
  height: 58px;
  max-width: 100%;
  .heart {
    transform-box: fill-box;
    transform-origin: center;
  }
  &:hover {
    .heart {
      // Beat 60 times per minut - as normal rest pulse :)
      animation: 1s heartBeat infinite var(--easing);
    }
  }
  @keyframes heartBeat {
    0%, 100% {
      transform: scale(1);
    }
    30% {
      transform: scale(1.03);
    }
  }
`

export const Tel = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='17'
    height='18'
    fill='none'
    viewBox='0 0 17 18'
  >
    <path
      fill='var(--primary-400, #28A090)'
      d='M16.94 13.334c-.196-.21-.89-.83-2.168-1.65-1.286-.826-2.235-1.342-2.507-1.462a.146.146 0 00-.148.018c-.438.342-1.177.97-1.216 1.004-.256.22-.256.22-.465.15-.368-.12-1.51-.727-2.507-1.725-.996-.998-1.634-2.17-1.754-2.537-.07-.21-.07-.21.15-.465.034-.04.663-.778 1.005-1.216a.144.144 0 00.018-.147c-.12-.273-.636-1.221-1.463-2.508C5.065 1.52 4.445.825 4.235.628A.147.147 0 004.09.595c-.733.252-1.44.573-2.111.96-.648.376-1.262.81-1.834 1.294a.144.144 0 00-.047.141c.078.367.455 1.9 1.624 4.023 1.192 2.167 2.018 3.277 3.77 5.022 1.75 1.745 2.895 2.62 5.064 3.813 2.123 1.169 3.657 1.546 4.023 1.624a.146.146 0 00.142-.048c.484-.572.917-1.185 1.294-1.834a12.27 12.27 0 00.96-2.11.146.146 0 00-.033-.146z'
    ></path>
  </svg>
)

export const Mail = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='21'
    height='16'
    fill='none'
    viewBox='0 0 21 16'
  >
    <path
      fill='var(--primary-400, #28A090)'
      d='M17.971.904H3.376a2.48 2.48 0 00-1.719.691A2.321 2.321 0 00.944 3.26v10.096c0 .624.257 1.223.713 1.665.456.441 1.074.69 1.72.69H17.97c.645 0 1.264-.248 1.72-.69a2.32 2.32 0 00.713-1.665V3.26c0-.625-.257-1.223-.713-1.665a2.476 2.476 0 00-1.72-.69zm-.616 3.897L11.1 9.512a.71.71 0 01-.853 0L3.992 4.801a.68.68 0 01-.27-.449.652.652 0 01.14-.501.69.69 0 01.468-.256.717.717 0 01.515.143l5.829 4.39 5.828-4.39a.712.712 0 01.968.124.658.658 0 01-.114.939z'
    ></path>
  </svg>
)

export const ChevronDown = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='13'
    height='9'
    fill='none'
    viewBox='0 0 13 9'
  >
    <path
      stroke='var(--primary-400, #28A090)'
      strokeLinecap='round'
      strokeWidth='2'
      d='M1 1.875l5.25 5.25 5.25-5.25'
    ></path>
  </svg>
)

export const ListBullet = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    viewBox='0 0 30 30'
  >
    <circle cx='14.664' cy='15.37' r='14.5' fill='var(--primary-400, #28A090)'></circle>
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2.411'
      d='M21.108 10.537l-8.861 8.86-4.028-4.027'
    ></path>
  </svg>
)

export const Error = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='17'
    fill='none'
    viewBox='0 0 16 17'
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M8 16.089a8 8 0 100-16 8 8 0 000 16zM6.839 3.634H9.16l-.212 6.56H7.05l-.212-6.56zm2.363 8.389a1.225 1.225 0 01-1.2 1.2c-.665 0-1.21-.536-1.2-1.2-.01-.656.535-1.187 1.2-1.187.633 0 1.191.53 1.2 1.187z'
      clipRule='evenodd'
    ></path>
  </svg>
)

export const External = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='18'
    height='18'
    fill='none'
    viewBox='0 0 24 24'
  >
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6m0 0v6m0-6L10 14'
    ></path>
  </svg>
)
