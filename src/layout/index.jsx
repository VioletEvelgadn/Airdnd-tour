import React, {memo, Suspense} from "react";
import {LayoutWrapper} from "@/layout/style";
import Homer from "@/layout/components/AppHeader";
import {Outlet} from "react-router-dom";
import AppFooter from "@/layout/components/AppFooter";
import useScrollTop from '@/hooks/useScrollTop'

const Layout = memo( () => {

    useScrollTop()

    return (
       <LayoutWrapper>
          {/* 上*/}
          <Homer/>
           {/* 中 */}
           <Suspense fallback={<h1>客官稍等...</h1>}>
               <Outlet></Outlet>
           </Suspense>
           {/*  下  */}
           <AppFooter />
       </LayoutWrapper>
    )
})

Layout.displayName = 'Layout'

export default Layout
