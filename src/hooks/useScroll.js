import { useEffect, useState } from 'react'
import { throttle } from 'lodash';

const useScroll = () => {
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const scrollChange = () => {
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }

    // 节流  防抖
    // 添加监听
    window.addEventListener('scroll', throttle(scrollChange, 100))

    return () => {
      // 取消监听
      window.removeEventListener('scroll', scrollChange)
    }
  }, [])

  return { scrollX, scrollY }
}

export default useScroll
