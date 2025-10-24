'use client'

export default function Events() {
  const basePath = process.env.NODE_ENV === 'production' ? '/WebPagesRefactor' : ''

  return (
    <main>
      <div className="page-container">
        <h1>Events</h1>
        <nav>
          <a href={`${basePath}/`}>Home</a>
          <a href={`${basePath}/wechatgroups`}>WeChat Groups</a>
          <a href={`${basePath}/join-us`}>Join Us</a>
          <a href={`${basePath}/work`}>Work</a>
        </nav>
      </div>
    </main>
  )
}
