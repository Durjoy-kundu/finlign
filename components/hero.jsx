
"use client"
import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import Image from 'next/image'


const HeroSection= () => {
  return (
    <div className='pb-20 px-4'>
        <div className='container mx-auto text-center'>
        <h1 className='text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title'>
            Mangae Your Finances <br /> with Intelligence
        </h1>
        <p>
            {" "}
            An AI-powered financial management platfrom that helps you track, analyze, and optimize your spending with real-time insights
        </p>
        

        <div>
            <Link href="/dashboard">
            <Button size="lg" className="px-8" variant={'outline'}>Get Started</Button>
            </Link>

             <Link href="/dashboard">
            <Button size="lg" className="px-8">Watch Demo</Button>
            </Link>
        </div>
        <div>
            <div>
                <Image src='/banner.png' width={1280} height={720} alt="banner"
                className="rounded-lg shadow-2xl border mx-auto"/>
                priority
                </div>
            </div>
        </div>
    </div>

  )
}

export default HeroSection