// "use client"
// import { motion } from "framer-motion"

// const aniamtion1 = {
//     hidden: {
//       scale: .8,
//       opacity: 0
//     },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         delay: .4
//       }
//     },
// }

// export default function Template({ children }: { children: React.ReactNode }) {
//   return (

//     <motion.div initial="hidden" animate="visible" variants={aniamtion1}>
//       <h1 className="title">
//         Wubba Lubba Dub Dub!
//       </h1>
//       {children}
//     </motion.div>
    
//   )
// }

"use client"


export default function Home() {
  
  return (
    
    <>
  
      <div className="box" style={{ opacity: 0 }}></div>
        <div className="relative px-6 pt-14 lg:px-8">
          
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                来加入我们吧 （查看详细职业分类<a href="/JoinUs" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>点击这里 </a>）
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-purple-500 sm:text-7xl">Passion Lab Polimi</h1>
              <h1 className="text-balance text-xl font-semibold tracking-tight text-purple-400 sm:text-4xl">where passion sprouts</h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/9">What matters most is how the journey allows your passions to bloom, transforming you into your own firework 🎆</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="/Groups" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">👉 兴趣社团 👈</a>
                <a href="/AboutUs" className="text-sm/6 font-semibold text-gray-600">了解更多 <span aria-hidden="true">→</span></a>
              </div>
            </div>
          </div>
          
        </div>
    </>
  );
}
