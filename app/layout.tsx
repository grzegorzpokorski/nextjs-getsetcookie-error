import { DraftModeNotification } from "./DraftModeNotification";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        {children}
        <DraftModeNotification />
      </body>
    </html>
  )
}
