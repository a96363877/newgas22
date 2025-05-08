"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { CalendarIcon, ChevronLeft, Clock, Flame, MapPin, Minus, Plus, ShieldCheck, Truck, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { ar } from "date-fns/locale"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SummaryPage() {
  const [date, setDate] = useState<Date>()
  const [quantity, setQuantity] = useState(1)

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

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
              <span className="text-gray-900 font-medium">ملخص الطلب</span>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="border-b">
        <div className="container px-4 mx-auto md:px-6 py-4">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center font-bold">
                1
              </div>
              <span className="text-sm font-medium mt-2">ملخص الطلب</span>
            </div>
            <div className="flex-1 h-1 bg-gray-200 mx-4">
              <div className="h-full w-0 bg-red-500"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold">
                2
              </div>
              <span className="text-sm font-medium mt-2 text-gray-500">الدفع</span>
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
            <Badge className="bg-red-100 text-red-600 hover:bg-red-200 transition-colors">ملخص الطلب</Badge>
            <div className="space-y-2 max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                راجع طلبك واختر <span className="text-red-500">وقت التوصيل</span> المناسب
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed">
                أنت على بعد خطوات قليلة من استلام اسطوانات الغاز الخاصة بك
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-8">
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardHeader className="bg-gradient-to-l from-red-600 to-red-500 text-white">
                  <CardTitle>تفاصيل المنتج</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="relative w-32 h-32 bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src="/4.png"
                        alt="اسطوانة غاز منزلية"
                        fill
                        className="object-cover"
                      />
                      <Badge className="absolute top-2 right-2 bg-red-500">الأكثر مبيعاً</Badge>
                    </div>
                    <div className="flex-1 text-center md:text-right">
                      <h3 className="text-xl font-bold">اسطوانة غاز منزلية</h3>
                      <p className="text-gray-500 mb-4">مناسبة للاستخدام المنزلي اليومي</p>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <ShieldCheck className="w-4 h-4 text-green-500" />
                          <span>ضمان الجودة</span>
                        </div>
                        <span className="mx-2">•</span>
                        <div className="flex items-center gap-1">
                          <Truck className="w-4 h-4 text-green-500" />
                          <span>توصيل سريع</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={decreaseQuantity}
                        className="rounded-full h-10 w-10 border-gray-300"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="text-xl font-medium w-8 text-center">{quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={increaseQuantity}
                        className="rounded-full h-10 w-10 border-gray-300"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-2xl font-bold text-red-500">{quantity * 5} د.ك</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg overflow-hidden">
                <CardHeader className="bg-gradient-to-l from-red-600 to-red-500 text-white">
                  <CardTitle>اختر وقت التوصيل</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <Tabs defaultValue="date" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="date">التاريخ والوقت</TabsTrigger>
                      <TabsTrigger value="express">توصيل سريع</TabsTrigger>
                    </TabsList>
                    <TabsContent value="date">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label className="text-base font-medium">التاريخ</Label>
                          <RadioGroup defaultValue="morning">
                            <div className="flex items-center space-x-2 space-x-reverse border rounded-md p-3 hover:bg-gray-50 transition-colors">
                              <RadioGroupItem value="afternoon" id="afternoon" />
                              <Label htmlFor="afternoon" className="flex items-center gap-2 cursor-pointer">
                                <Clock className="h-4 w-4 text-red-500" />
                              اليوم
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2 space-x-reverse border rounded-md p-3 hover:bg-gray-50 transition-colors">
                              <RadioGroupItem value="evening" id="evening" />
                              <Label htmlFor="evening" className="flex items-center gap-2 cursor-pointer">
                                <Clock className="h-4 w-4 text-red-500" />
غداّ                              </Label>
                            </div>
                          </RadioGroup>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-base font-medium">الوقت</Label>
                          <RadioGroup defaultValue="morning">
                            <div className="flex items-center space-x-2 space-x-reverse border rounded-md p-3 hover:bg-gray-50 transition-colors">
                              <RadioGroupItem value="morning" id="morning" />
                              <Label htmlFor="morning" className="flex items-center gap-2 cursor-pointer">
                                <Clock className="h-4 w-4 text-red-500" />
                                صباحاً (9:00 - 12:00)
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2 space-x-reverse border rounded-md p-3 hover:bg-gray-50 transition-colors">
                              <RadioGroupItem value="afternoon" id="afternoon" />
                              <Label htmlFor="afternoon" className="flex items-center gap-2 cursor-pointer">
                                <Clock className="h-4 w-4 text-red-500" />
                                ظهراً (12:00 - 3:00)
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2 space-x-reverse border rounded-md p-3 hover:bg-gray-50 transition-colors">
                              <RadioGroupItem value="evening" id="evening" />
                              <Label htmlFor="evening" className="flex items-center gap-2 cursor-pointer">
                                <Clock className="h-4 w-4 text-red-500" />
                                مساءً (3:00 - 6:00)
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="express">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-green-100 p-2 rounded-full">
                            <Truck className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-green-800">توصيل سريع خلال 60 دقيقة</h4>
                            <p className="text-green-700 text-sm">
                              اطلب الآن واحصل على اسطوانات الغاز خلال ساعة واحدة فقط
                            </p>
                          </div>
                        </div>
                      </div>
                      <RadioGroup defaultValue="express">
                        <div className="flex items-center space-x-2 space-x-reverse border rounded-md p-4 bg-red-50 border-red-200">
                          <RadioGroupItem value="express" id="express" />
                          <Label htmlFor="express" className="flex items-center gap-2 cursor-pointer">
                            <Clock className="h-4 w-4 text-red-500" />
                            توصيل سريع (خلال 60 دقيقة)
                            <Badge className="mr-2 bg-red-500">+1 د.ك</Badge>
                          </Label>
                        </div>
                      </RadioGroup>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg overflow-hidden">
                <CardHeader className="bg-gradient-to-l from-red-600 to-red-500 text-white">
                  <CardTitle>عنوان التوصيل</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid gap-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="area" className="text-base font-medium">
                          المنطقة
                        </Label>
                        <Input
                          id="area"
                          placeholder="مثال: السالمية"
                          className="h-12 border-gray-300 focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="block" className="text-base font-medium">
                          القطعة
                        </Label>
                        <Input
                          id="block"
                          placeholder="مثال: 5"
                          className="h-12 border-gray-300 focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="street" className="text-base font-medium">
                          الشارع
                        </Label>
                        <Input
                          id="street"
                          placeholder="مثال: شارع عمان"
                          className="h-12 border-gray-300 focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="house" className="text-base font-medium">
                          المنزل
                        </Label>
                        <Input
                          id="house"
                          placeholder="مثال: 10"
                          className="h-12 border-gray-300 focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="notes" className="text-base font-medium">
                        ملاحظات إضافية
                      </Label>
                      <Textarea
                        id="notes"
                        placeholder="أي تفاصيل إضافية عن الموقع"
                        className="min-h-[120px] border-gray-300 focus:border-red-500 focus:ring-red-500"
                      />
                    </div>
                    <div className="relative h-64 mt-4 rounded-xl overflow-hidden border">
                      <Image
                        src="/placeholder.svg?height=300&width=800"
                        alt="خريطة الموقع"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button className="bg-white text-red-500 hover:bg-gray-100">
                          <MapPin className="mr-2 h-4 w-4" />
                          حدد موقعك على الخريطة
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-0 shadow-lg overflow-hidden sticky top-24">
                <CardHeader className="bg-gradient-to-l from-red-600 to-red-500 text-white">
                  <CardTitle>ملخص الطلب</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">اسطوانة غاز منزلية ({quantity})</span>
                      <span className="font-medium">{quantity * 5} د.ك</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">رسوم التوصيل</span>
                      <span className="font-medium">1 د.ك</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>المجموع</span>
                      <span className="text-red-500">{quantity * 5 + 1} د.ك</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <p className="font-medium">وقت التوصيل:</p>
                        <p className="text-gray-600">
                          {date ? format(date, "PPP", { locale: ar }) : "لم يتم التحديد بعد"} - صباحاً (9:00 - 12:00)
                        </p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <p className="font-medium">عنوان التوصيل:</p>
                        <p className="text-gray-600">لم يتم إدخال العنوان بعد</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href="/payment" className="w-full">
                    <Button className="w-full h-12 bg-gradient-to-l from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-md hover:shadow-lg">
                      متابعة للدفع
                      <ChevronLeft className="mr-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardFooter>
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
