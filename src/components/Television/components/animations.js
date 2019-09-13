import { keyframes } from "styled-components/macro"

export const flickerAnim = keyframes`
  0%{opacity:.11873}
  5%{opacity:.5057}
  10%{opacity:.30922}
  15%{opacity:.87092}
  20%{opacity:.11556}
  25%{opacity:.59678}
  30%{opacity:.76243}
  35%{opacity:.7741}
  40%{opacity:.64146}
  45%{opacity:.64521}
  50%{opacity:.36951}
  55%{opacity:.44382}
  60%{opacity:.1997}
  65%{opacity:.55165}
  70%{opacity:.11567}
  75%{opacity:.09736}
  80%{opacity:.34271}
  85%{opacity:.75196}
  90%{opacity:.85323}
  95%{opacity:.77558}
  100%{opacity:.23705}
`

export const breatheAnim = keyframes`
  0%, 100% {opacity: 1}
  50% {opacity: 0.5}
`

export const turnOnAnim = keyframes`
   0% {
    transform: scale(1, 0.8) translate3d(0, 0, 0);
    filter: brightness(30);
    opacity: 1;
  }
  3.5% {
    transform: scale(1, 0.8) translate3d(0, 100%, 0);
  }
  3.6% {
    transform: scale(1, 0.8) translate3d(0, -100%, 0);
    opacity: 1;
  }
  9% {
    transform: scale(1.3, 0.6) translate3d(0, 100%, 0);
    filter: brightness(30);
    opacity: 0;
  }
  11% {
    transform: scale(1, 1) translate3d(0, 0, 0);
    filter: contrast(0) brightness(0) saturate(1);
    opacity: 0;
  }
  100% {
    transform: scale(1, 1) translate3d(0, 0, 0);
    filter: contrast(1.075) brightness(1.14) saturate(1.3);
    opacity: 1;
  }
`

export const turnOnQuickAnim = keyframes`
   0% {
    transform: scale(1, 0.8) translate3d(0, 0, 0);
    filter: brightness(30);
    opacity: 1;
  }
  19.1% {
    transform: scale(1, 0.8) translate3d(0, 100%, 0);
  }
  19.7% {
    transform: scale(1, 0.8) translate3d(0, -100%, 0);
    opacity: 1;
  }
  49.35% {
    transform: scale(1.3, 0.6) translate3d(0, 100%, 0);
    filter: brightness(30);
    opacity: 0;
  }
  60% {
    transform: scale(1, 1) translate3d(0, 0, 0);
    filter: contrast(0) brightness(0) saturate(1);
    opacity: 0;
  }
  100% {
    transform: scale(1, 1) translate3d(0, 0, 0);
    filter: contrast(1.075) brightness(1.14) saturate(1.3);
    opacity: 1;
  }
`

export const turnOffAnim = keyframes`
   0% {
    transform: scale(1, 1.3) translate3d(0, 0, 0);
    filter: brightness(1);
    opacity: 1;
  }
  60% {
    transform: scale(1.3, 0.001) translate3d(0, 0, 0);
    filter: brightness(10);
  }
  100% {
    animation-timing-function: $ease-in-quint;
    transform: scale(0.000, 0.0001) translate3d(0, 0, 0);
    filter: brightness(50);
  }
`
