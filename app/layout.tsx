import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "غاز الكويت - توصيل اسطوانات الغاز",
  description: "خدمة توصيل اسطوانات الغاز في جميع أنحاء الكويت",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
          {children}
      </body>
    </html>
  )
}
