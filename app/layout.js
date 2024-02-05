import Navigation from "../components/navigation"

export const metadata = {
  title: {
    template: "%s | wow",
    default: "good"
  }
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}</body>
    </html>
  )
}
