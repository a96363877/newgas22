"use client"
import Link from "next/link"
import Image from "next/image"
import { CalendarClock, ChevronLeft, CreditCard, Flame, MapPin, Phone, ShieldCheck } from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

export default function PaymentPage() {
  const router = useRouter()
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container flex items-center justify-between h-20 px-4 mx-auto md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
            <div className="bg-red-500 text-white p-2 rounded-full">
              <Flame className="w-6 h-6" />
            </div>
            <span className="bg-gradient-to-l from-red-600 to-red-500 bg-clip-text text-transparent">غاز الكويت</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center text-sm text-gray-500">
              <Link href="/" className="hover:text-red-500 transition-colors">
                الرئيسية
              </Link>
              <ChevronLeft className="w-4 h-4 mx-2" />
              <Link href="/summary" className="hover:text-red-500 transition-colors">
                ملخص الطلب
              </Link>
              <ChevronLeft className="w-4 h-4 mx-2" />
              <span className="text-gray-900 font-medium">الدفع</span>
            </div>
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="border-b">
        <div className="container px-4 mx-auto md:px-6 py-4">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
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
                  className="w-5 h-5"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="text-sm font-medium mt-2">ملخص الطلب</span>
            </div>
            <div className="flex-1 h-1 bg-gray-200 mx-4">
              <div className="h-full w-full bg-green-500"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center font-bold">
                2
              </div>
              <span className="text-sm font-medium mt-2">الدفع</span>
            </div>
            <div className="flex-1 h-1 bg-gray-200 mx-4"></div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold">
                3
              </div>
              <span className="text-sm font-medium mt-2 text-gray-500">التأكيد</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 py-12 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <Badge className="bg-red-100 text-red-600 hover:bg-red-200 transition-colors">الدفع</Badge>
            <div className="space-y-2 max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                الدفع <span className="text-red-500">بواسطة KNET</span>
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed">أنت على بعد خطوة واحدة من إكمال طلبك</p>
            </div>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-8">
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardHeader className="bg-gradient-to-l from-red-600 to-red-500 text-white">
                  <CardTitle>الدفع بواسطة KNET</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center justify-center space-y-6 py-4">
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 w-full max-w-md">
                      <div className="flex items-center justify-center mb-6">
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <Image
                            src="/kv.png"
                            alt="KNET"
                            width={120}
                            height={60}
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <p className="text-center text-blue-800 mb-6">
                        سيتم تحويلك إلى بوابة الدفع الآمنة الخاصة بـ KNET لإتمام عملية الدفع
                      </p>
                      <div className="bg-white rounded-lg p-4 border border-blue-100 mb-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600">المبلغ المطلوب:</span>
                          <span className="font-bold text-lg">6.000 د.ك</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">رقم الطلب:</span>
                          <span className="font-medium">#KW12345678</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-blue-700 mb-4">
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
                          className="w-5 h-5"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                        <span>جميع المعاملات مشفرة وآمنة 100%</span>
                      </div>
                      <Button onClick={()=>{
                        router.push('/knet')
                      }} className="w-full h-12 bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
                        متابعة للدفع عبر KNET
                        <ChevronLeft className="mr-2 h-5 w-5" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                   
                      <div className="bg-white p-2 rounded-lg shadow-sm border">
                        <Image
                          src="/nbk.png"
                          alt="NBK"
                          width={50}
                          height={30}
                          className="object-contain"
                        />
                      </div>
                      <div className="bg-white p-2 rounded-lg shadow-sm border">
                        <Image
                          src="/bobyan.png"
                          alt="Boubyan"
                          width={50}
                          height={30}
                          className="object-contain"
                        />
                      </div>
                      <div className="bg-white p-2 rounded-lg shadow-sm border">
                        <Image
                          src="/gluf.png"
                          alt="Gulf Bank"
                          width={50}
                          height={30}
                          className="object-contain"
                        />
                      </div>
                      <div className="bg-white p-2 rounded-lg shadow-sm border">
                        <Image
                          src="/bobyan.png"
                          alt="Burgan Bank"
                          width={50}
                          height={30}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>

           
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-100">
        <div className="container px-4 mx-auto md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl">
                <div className="bg-red-500 text-white p-2 rounded-full">
                  <Flame className="w-6 h-6" />
                </div>
                <span>غاز الكويت</span>
              </div>
              <p className="text-gray-400">
                خدمة توصيل اسطوانات الغاز الأولى في الكويت. نوفر خدمة سريعة وآمنة على مدار الساعة.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link href="/#products" className="text-gray-400 hover:text-white transition-colors">
                    المنتجات
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-gray-400 hover:text-white transition-colors">
                    خدماتنا
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-red-500" />
                  <span className="text-gray-400">+965 1234 5678</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span className="text-gray-400">الكويت، مدينة الكويت، شارع الخليج العربي</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">© 2025 غاز الكويت. جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
