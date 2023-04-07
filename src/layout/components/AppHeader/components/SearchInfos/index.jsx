import React, { memo } from 'react'

const SearchInfos = memo(({infos = []}) => {
  return (
    <div className='bar'>
      {infos.map((item, index) => (
        <div className='item' key={item.title}>
          <div className='info'>
            <div className='city'>{item.title}</div>
            <div className='wtf'>{item.desc}</div>
          </div>
          {index < infos.length - 1 && <div className='divider'></div>}
        </div>
      ))}
    </div>
  )
})

SearchInfos.displayName = 'SearchInfos'

export default SearchInfos
