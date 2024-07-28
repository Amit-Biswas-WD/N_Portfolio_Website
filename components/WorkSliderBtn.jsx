"use client"

import { useSwiper } from "swiper/react"
import {PiCaretLeftBold, PiCaretRightBold} from "react-icons/pi"

const WorkSliderBtn = ({containerStyle, btnStyle, iconsStyle}) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyle}>
      <button className={btnStyle}>
        <PiCaretLeftBold className={iconsStyle}/>
      </button>
      kjhkgujguigyi
      <button className={btnStyle}>
        <PiCaretRightBold className={iconsStyle}/>
      </button>
    </div>
  )
}

export default WorkSliderBtn