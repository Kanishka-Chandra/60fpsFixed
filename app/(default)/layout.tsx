'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from '@/components/ui/Header'
import Footer from '@/components/ui/footer'
import Head from 'next/head';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    AOS.init({
      once: false,
      disable: 'phone',
      duration: 900,
      easing: 'ease-out-sine',
    })
  })

  return (
    <div>
       <Head>
        <title>60fps</title>
        <meta name="description" content="Description of your page for search engines" />
        
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Your Open Graph Title" />
        <meta property="og:description" content="Description for Open Graph" />
        <meta property="og:image" content="https://example.com/og-image.jpg" />
        <meta property="og:url" content="https://example.com/page-url" />
        <meta property="og:type" content="website" />
        
        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Twitter Card Title" />
        <meta name="twitter:description" content="Description for Twitter" />
        <meta name="twitter:image" content="https://example.com/twitter-image.jpg" />

        {/* Schema.org JSON-LD metadata */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Article Headline",
              "description": "Article Description",
              "image": "https://example.com/article-image.jpg",
              "author": {
                "@type": "Person",
                "name": "Author Name"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Publisher Name",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://example.com/publisher-logo.jpg",
                  "width": 600,
                  "height": 60
                }
              },
              "datePublished": "2024-06-28",
              "dateModified": "2024-06-28",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://example.com/article-url"
              }
            }
          `}
        </script>
      </Head>
    <div className="flex flex-col min-h-screen overflow-hidden">

      <Header />

      <main className="grow">

        {children}

      </main>

      <Footer />

    </div>
    </div>
  )
}
