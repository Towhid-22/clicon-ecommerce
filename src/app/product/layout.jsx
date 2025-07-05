import Overview from '@/components/allComponents/overview/Overview';
import React from 'react'

export const metadata = {
  title: "Product Details",
  description: "Clicon ecommerce product details page",
};


const layout = ({children}) => {
  return (
    <div>{children}
    <Overview />
    </div>
  )
}

export default layout