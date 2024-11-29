export default function Home() {
    return (
        <>
            <div className="relative px-6 pt-14 lg:px-8">
          
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-purple-500 sm:text-5xl">🔧Work In Progress🪛</h1>
            </div>
          </div>
          
        </div>
        </>
    );
} 

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