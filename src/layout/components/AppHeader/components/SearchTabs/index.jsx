import React, { memo, useState } from 'react'
import classNames from "classnames";

const SearchTabs = memo(({titles = [], tabClick}) => {
  const [current, setCurrent] = useState(0)

  const clickHandle = (index) => {
    setCurrent(index)
    tabClick && tabClick(index)
  }

  return <div className='tabs'>
    {
      titles.map((item, index) => (
        <div
          onClick={() => clickHandle(index)}
          className={classNames('tab', {active: current === index})}
          key={item}
        >
          {item}
        </div>
      ))
    }
  </div>
})

SearchTabs.displayName = 'SearchTabs'

export default SearchTabs
