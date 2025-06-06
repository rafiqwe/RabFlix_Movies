import React from 'react'
import Header from './Header'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from './Footer'

const MainLayout = () => {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading';

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loader">
          Loading...
        </div>
      </div>
    )
  }  
  return (
    <div>
      <Header />
      <main className='w-[97%] mx-auto min-h-screen max-w-[1920px] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[75%] '>
        {/* <Outlet /> */}
        {isLoading ? <Loader/> : <Outlet />}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
