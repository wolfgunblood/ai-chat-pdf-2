import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import {ArrowRight} from "lucide-react";

export default function Home() {
  return (
  <>
  <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
    <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
      <p className='text-sm font-semibold text-gray-600'>Quill is now public!</p>
    </div>
    <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
      Chat with your {" "}
      <span className='text-blue-600'>documnets</span>{" "}
      in seconds.
    </h1>
    <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
      Quill allows youo to have conversation with any PDF documnet.Simplly upload your file and start asking questions rigth away.
    </p>
    <Link
    className={buttonVariants({
      size: "lg",
      className: "mt-5",
    })}
    href="/dashboard"
    // target='_blank'
    >
    Get started{" "}
    <ArrowRight className='ml-2 w-5 h-5' />
    </Link>
  </MaxWidthWrapper>
  </>
  )
}
