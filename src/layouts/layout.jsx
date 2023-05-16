import React from 'react'

import LayoutHeader from '../components/layout_header'

const Layout = (props) => {
	const { children } = props

	return (
		<div className='container'>
			<LayoutHeader/>
      <div className='container-content'>
				{children}
	  	</div>
    </div>
  )
}

export default Layout