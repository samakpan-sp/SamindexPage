function TopBar() {
  const now = new Date()
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

  return (
    <div className="top-bar">
      <span className="top-bar-activities">Activities</span>
      <span className="top-bar-clock">{time}</span>
      <span className="top-bar-user">
        Samuel Akpan<span className="top-bar-role"> · Full-Stack Software Engineer</span>
      </span>
    </div>
  )
}

export default TopBar