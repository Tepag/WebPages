'use client'

export default function WeChatGroups() {
  const basePath = process.env.NODE_ENV === 'production' ? '/WebPagesRefactor' : ''

  return (
    <main>
      <div className="page-container">
        <h1>WeChat Groups</h1>
        <nav>
          <a href={`${basePath}/`}>Home</a>
          <a href={`${basePath}/events`}>Events</a>
          <a href={`${basePath}/join-us`}>Join Us</a>
          <a href={`${basePath}/work`}>Work</a>
        </nav>
      </div>
    </main>
  )
}
