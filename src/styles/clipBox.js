import tw from "tailwind.macro"
import { css } from "styled-components/macro"

const CLIP_RATIO = "10vw"

function clipPolygon({ top = false, bottom = false, ratio = CLIP_RATIO }) {
  return `polygon(0 ${top ? ratio : 0}, 100% 0, 100% ${
    bottom ? `calc(100% - ${ratio})` : "100%"
  }, 0 100%)`
}

function clipPseudoElement({ extraCss, clipOptions }) {
  return css`
    ::before {
      ${tw`absolute inset-0`};
      content: "";
      clip-path: ${clipPolygon(clipOptions)};
      z-index: -1;
      ${extraCss};
    }
  `
}

function clipMixin({ padded = false, ...clipOptions }) {
  return extraCss => {
    return css`
      ${tw`relative`}
      ${padded && clipOptions.top && `padding-top: ${CLIP_RATIO};`}
      ${padded && clipOptions.bottom && `padding-bottom: ${CLIP_RATIO};`}
      ${clipPseudoElement({ extraCss, clipOptions })}
    `
  }
}

export const clipBottomNoPadding = clipMixin({ padded: false, bottom: true })
export const clipTopAndBottom = clipMixin({ top: true, bottom: true })
export const clipTop = clipMixin({ top: true, bottom: false })

export const clipBottomNoPaddingSmall = clipMixin({
  padded: false,
  bottom: true,
  ratio: "2rem"
})
