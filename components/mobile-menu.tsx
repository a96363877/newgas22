"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">القائمة</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
        <SheetHeader className="border-b p-6">
          <SheetTitle className="text-right text-xl">القائمة</SheetTitle>
        </SheetHeader>
        <div className="py-6 px-6">
          <nav className="flex flex-col space-y-6">
            <Link
              href="/"
              className="text-lg font-medium hover:text-red-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              الرئيسية
            </Link>
            <Link
              href="/#products"
              className="text-lg font-medium hover:text-red-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              المنتجات
            </Link>
            <Link
              href="/#services"
              className="text-lg font-medium hover:text-red-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              خدماتنا
            </Link>
            <Link
              href="/#testimonials"
              className="text-lg font-medium hover:text-red-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              آراء العملاء
            </Link>
            <Link
              href="/#contact"
              className="text-lg font-medium hover:text-red-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              اتصل بنا
            </Link>
            <div className="pt-4 border-t">
              <Link href="/summary" onClick={() => setOpen(false)}>
                <Button className="w-full bg-gradient-to-l from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 transition-all duration-300">
                  اطلب الآن
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
