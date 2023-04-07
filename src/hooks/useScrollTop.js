import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useScrollTop = () => {
  // 监听页面改变 ->  路径
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ left: 0, top: 0 })
  }, [pathname])
}

export default useScrollTop
