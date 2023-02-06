import { FeaturedCompanies, LatestPosts, Navbar, RecommendedJobs, Schedule, Title } from "components";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { update } from '../redux/isMobileSlice'

export default function Home() {
  const isDark = useSelector(state => state.darkMode.value)
  const dispatch = useDispatch()

  return (
    <>
      <Head>
        <title>Jobit</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className={`${!isDark ? 'bg-[#FAFAFB]' : 'bg-[#13131A]'} h-full py-20 px-6 md:px-20`}>
          <Title title='Welcome to the Job Search Platform for Developers' />
          <div className='md:flex md:gap-10'>
            <div className='md:flex md:flex-col md:w-[60%]'>
              <LatestPosts />
              <FeaturedCompanies />
            </div>
            <div className='md:flex md:flex-col md:w-[40%]'>
              <RecommendedJobs />
            </div>
          </div>
          <div className="block md:hidden">
            <Schedule />
          </div>
        </div>
      </main>
    </>
  )
}
