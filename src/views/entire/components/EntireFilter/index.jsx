import React, {memo, useState} from "react";
import {FilterWrapper} from "@v/entire/components/EntireFilter/style";
import filterData from '@/assets/data/filter_data'
import classNames from 'classnames'


const EntireFilter  = memo(() => {
        const [keys, setKeys] = useState([])
   const  addKey = (key) => {
       const n_keys = keys.slice()
       // 如果存在就删除
       const index = n_keys.indexOf(key)
       if (index !== -1) {
           n_keys.splice(index, 1)
       } else {
           n_keys.push(key)
       }
       setKeys(n_keys)
   }
    return (
        <FilterWrapper>
            { filterData.map(item => (
                <div
                className={ classNames( 'item', {active: keys.includes(item)} ) }
                key={item}
                onClick={ () => addKey(item) }
                >
                { item }
            </div>
            ))}
        </FilterWrapper>
    )
})

EntireFilter.displayName = 'EntireFilter'

export default EntireFilter
