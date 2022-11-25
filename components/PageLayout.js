import Head from 'next/head'
import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export const PageLayout = ({ children, title, metaDescription }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <Header />
      <div className='content'>
        {children}
      </div>
      <Footer />
    </>
  )
}
