import React from 'react'
import Image from 'next/image'

const Content = () => {
  return (
    <section className="max-w-5xl mx-auto my-12 flex flex-col md:flex-row items-center justify-between gap-10 p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
      
      <div className="flex-1 space-y-6">
        <header className="space-y-3">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 leading-tight"> Why I Started Blogging</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            This approach ensures new React features work reliably in the App, 
            bridging the gap between theory and production-ready code.</p>
        </header>

        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-indigo-100">
            <Image  src="/images/user-image.jfif"  fill
              className="object-cover" alt="Zain ur Rehman"/>
          </div>
          <ul className="text-sm">
            <li className="font-semibold text-gray-900">Zain ur Rehman</li>
            <li className="text-gray-500">14 Sep 2026</li>
          </ul>
        </div>
      </div>

      <div className="flex-1 w-full flex justify-center lg:justify-end">
        <div className="overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-[1.02] duration-300">
          <Image  src="/images/blogging-chart.jfif" 
            width={450}   height={320}  className="object-cover" alt="Blogging Chart"/>
        </div>
      </div>

    </section>
  )
}

export default Content