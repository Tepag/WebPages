'use client'

export default function JoinUs() {
  const basePath = process.env.NODE_ENV === 'production' ? '/WebPagesRefactor' : ''

  return (
    <main>
      <div className="page-container">
        <h1>Join Us</h1>
        <nav>
          <a href={`${basePath}/`}>Home</a>
          <a href={`${basePath}/wechatgroups`}>WeChat Groups</a>
          <a href={`${basePath}/events`}>Events</a>
          <a href={`${basePath}/work`}>Work</a>
        </nav>
      </div>
    </main>
  )
}
