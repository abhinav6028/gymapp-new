"use client"
import Header from '@/Components/UI/Header/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const queryClient = new QueryClient()

  return (

    <html lang="en">

      <head>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@600&family=Oxygen:wght@700&display=swap" rel="stylesheet"></link>

      </head>



      <body className={inter.className}>

        <QueryClientProvider client={queryClient}>

          {children}

        </QueryClientProvider>


      </body>



    </html>
  )
}
