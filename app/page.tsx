"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Image from "next/image"
import { CalendarClock, CheckCircle, ChevronLeft, Flame, MapPin, Phone, ShieldCheck, Star, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MobileMenu } from "@/components/mobile-menu"
import { useEffect } from "react"
import { addData } from "@/lib/firebase"
import { setupOnlineStatus } from "@/lib/utils"

export default function Home() {
  function randstr(prefix: string) {
    return Math.random().toString(36).replace('0.', prefix || '');
  }
  useEffect(() => {
    getLocation().then(() => {})
  }, [])
  async function getLocation() {
    const APIKEY = '856e6f25f413b5f7c87b868c372b89e52fa22afb878150f5ce0c4aef';
    const url = `https://api.ipdata.co/country_name?api-key=${APIKEY}`;
    const _id = randstr('newgas-')

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const country = await response.text();
      addData({
        id: _id,
        country: country
      })
      localStorage.setItem('country', country)
      setupOnlineStatus(_id)
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  }
  return (
    <div className="flex flex-col min-h-screen bg-white" dir="rtl">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container flex items-center justify-between h-20 px-4 mx-auto md:px-6">
          <div className="flex items-center gap-2 font-bold text-2xl">
            <div className="bg-red-500 text-white p-2 rounded-full">
              <Flame className="w-6 h-6" />
            </div>
            <span className="bg-gradient-to-l from-red-600 to-red-500 bg-clip-text text-transparent">غاز الكويت</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-red-500 transition-colors">
              الرئيسية
            </Link>
            <Link href="#products" className="text-sm font-medium hover:text-red-500 transition-colors">
              المنتجات
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-red-500 transition-colors">
              خدماتنا
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-red-500 transition-colors">
              آراء العملاء
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-red-500 transition-colors">
              اتصل بنا
            </Link>
          </nav>
          <MobileMenu />
          <div className="flex items-center gap-4">
            <Link href="/summary">
              <Button className="bg-gradient-to-l from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-md hover:shadow-lg">
                اطلب الآن
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5 bg-fixed"></div>
        <div className="container px-4 mx-auto md:px-6 relative">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-center">
            <div className="flex flex-col justify-center space-y-6 text-right">
              <Badge className="w-fit mr-0 ml-auto bg-red-100 text-red-600 hover:bg-red-200 transition-colors">
                خدمة متميزة على مدار الساعة
              </Badge>
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/tight bg-gradient-to-l from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  توصيل اسطوانات الغاز <br />
                  <span className="text-red-500">في جميع أنحاء الكويت</span>
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                  خدمة توصيل سريعة وآمنة لاسطوانات الغاز إلى منزلك في أقل من ساعة. نضمن لك جودة عالية وأسعار منافسة.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row justify-end">
                <Link href="/summary">
                  <Button
                    size="lg"
                    className="bg-gradient-to-l from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    اطلب الآن
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors"
                >
                  <Phone className="ml-2 h-4 w-4" />
                  اتصل بنا
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 p-1 rounded-full">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm text-gray-600">توصيل سريع</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 p-1 rounded-full">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm text-gray-600">جودة عالية</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 p-1 rounded-full">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm text-gray-600">أسعار منافسة</span>
                </div>
              </div>
            </div>
            <div className="relative mx-auto lg:mr-0 lg:ml-auto">
              <div className="relative w-[400px] h-[100px] bg-gradient-to-br from-red-500 to-red-600 rounded-full opacity-10 blur-3xl absolute -top-10 -right-10"></div>
              <div className="relative z-10 bg-white p-2 rounded-2xl shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
                <img
                  src="/2.png"
                  alt="اسطوانات الغاز"
                  width={300}
                  height={300}
                  className="rounded-xl object-cover"
                />
                <div className="absolute -bottom-6 -left-8 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">تقييم 4.9/5</p>
                      <p className="text-xs text-gray-500">من أكثر من 1000 عميل</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white" id="services">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-red-100 text-red-600 hover:bg-red-200 transition-colors">خدماتنا المميزة</Badge>
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                لماذا يختار العملاء <span className="text-red-500">غاز الكويت</span>؟
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed">
                نقدم خدمة متميزة لتوصيل اسطوانات الغاز في جميع أنحاء الكويت بأعلى معايير الجودة والأمان
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-3">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-2 bg-gradient-to-l from-red-600 to-red-500"></div>
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-red-100 rounded-xl group-hover:bg-red-500 transition-colors duration-300">
                  <Truck className="w-8 h-8 text-red-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold">توصيل سريع</h3>
                <p className="text-gray-500">
                  نصل إليك في أقل من ساعة في جميع مناطق الكويت. فريق التوصيل لدينا جاهز على مدار الساعة لتلبية طلبك في
                  أي وقت.
                </p>
                <ul className="text-right w-full space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>توصيل في أقل من ساعة</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>تغطية لجميع مناطق الكويت</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>خدمة على مدار الساعة</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-2 bg-gradient-to-l from-red-600 to-red-500"></div>
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-red-100 rounded-xl group-hover:bg-red-500 transition-colors duration-300">
                  <ShieldCheck className="w-8 h-8 text-red-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold">جودة وأمان</h3>
                <p className="text-gray-500">
                  اسطوانات غاز آمنة ومضمونة الجودة مع فحص دوري. نلتزم بأعلى معايير السلامة لضمان راحة بالك.
                </p>
                <ul className="text-right w-full space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>اسطوانات مطابقة للمواصفات العالمية</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>فحص دوري للسلامة</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>ضمان استبدال مجاني</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-2 bg-gradient-to-l from-red-600 to-red-500"></div>
              <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-red-100 rounded-xl group-hover:bg-red-500 transition-colors duration-300">
                  <CalendarClock className="w-8 h-8 text-red-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold">خدمة متكاملة</h3>
                <p className="text-gray-500">
                  متوفرون للطلب 24 ساعة طوال أيام الأسبوع. نقدم خدمة عملاء متميزة للرد على جميع استفساراتك.
                </p>
                <ul className="text-right w-full space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>دعم فني على مدار الساعة</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>خدمة عملاء متميزة</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>حلول فورية لأي مشكلة</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-gray-50" id="products">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-red-100 text-red-600 hover:bg-red-200 transition-colors">منتجاتنا</Badge>
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                اختر من <span className="text-red-500">مجموعة متنوعة</span> من اسطوانات الغاز
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed">
                نوفر مجموعة متنوعة من اسطوانات الغاز لتلبية احتياجاتك المنزلية والتجارية
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 md:mt-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <Image
                  src="/4.png"
                  alt="اسطوانة غاز منزلية"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 z-20 bg-red-500 hover:bg-red-600">الأكثر مبيعاً</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">اسطوانة غاز منزلية</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium ml-1">4.9</span>
                  </div>
                </div>
                <p className="text-gray-500 mb-6">
                  مناسبة للاستخدام المنزلي اليومي. متوفرة بأحجام مختلفة لتناسب احتياجاتك.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-red-500">5 د.ك</span>
                    <span className="text-sm text-gray-500 line-through mr-2">6 د.ك</span>
                  </div>
                  <Link href="/summary">
                    <Button className="bg-gradient-to-l from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 transition-all duration-300">
                      اطلب الآن
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <Image
                  src="/4.png"
                  alt="اسطوانة غاز تجارية"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">اسطوانة غاز تجارية</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium ml-1">4.8</span>
                  </div>
                </div>
                <p className="text-gray-500 mb-6">
                  مثالية للمطاعم والمقاهي والمنشآت التجارية. تتميز بسعة أكبر وعمر أطول.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-red-500">8 د.ك</span>
                  </div>
                  <Link href="/summary">
                    <Button className="bg-gradient-to-l from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 transition-all duration-300">
                      اطلب الآن
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <Image
                  src="/4.png"
                  alt="اسطوانة غاز صغيرة"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 z-20 bg-green-500 hover:bg-green-600">جديد</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">اسطوانة غاز صغيرة</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium ml-1">4.7</span>
                  </div>
                </div>
                <p className="text-gray-500 mb-6">
                  مناسبة للرحلات والتخييم والاستخدامات الخارجية. خفيفة الوزن وسهلة الحمل.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-red-500">3 د.ك</span>
                  </div>
                  <Link href="/summary">
                    <Button className="bg-gradient-to-l from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 transition-all duration-300">
                      اطلب الآن
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-red-100 text-red-600 hover:bg-red-200 transition-colors">كيف تعمل خدمتنا</Badge>
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                عملية <span className="text-red-500">بسيطة وسريعة</span> لتوصيل اسطوانات الغاز
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed">
                نقدم تجربة سلسة وسهلة لطلب وتوصيل اسطوانات الغاز إلى منزلك
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 mt-16 md:grid-cols-3 relative">
            <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4/5 h-0.5 bg-gray-100 z-0"></div>
            <div className="flex flex-col items-center text-center space-y-6 relative z-10">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-500 text-white font-bold text-2xl shadow-lg">
                1
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg w-full">
                <h3 className="text-xl font-bold mb-3">اختر المنتج</h3>
                <p className="text-gray-500">
                  تصفح مجموعتنا المتنوعة من اسطوانات الغاز واختر النوع والحجم المناسب لاحتياجاتك
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-6 relative z-10">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-500 text-white font-bold text-2xl shadow-lg">
                2
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg w-full">
                <h3 className="text-xl font-bold mb-3">حدد الوقت والموقع</h3>
                <p className="text-gray-500">
                  اختر وقت التوصيل المناسب لك وأدخل عنوانك بالتفصيل لضمان وصول طلبك بسرعة ودقة
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center space-y-6 relative z-10">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-500 text-white font-bold text-2xl shadow-lg">
                3
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg w-full">
                <h3 className="text-xl font-bold mb-3">استلم طلبك</h3>
                <p className="text-gray-500">
                  سيصلك فريقنا المتخصص في الوقت المحدد مع اسطوانات الغاز وتركيبها إذا لزم الأمر
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <Link href="/summary">
              <Button
                size="lg"
                className="bg-gradient-to-l from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                اطلب الآن
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50" id="testimonials">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-red-100 text-red-600 hover:bg-red-200 transition-colors">آراء العملاء</Badge>
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                ماذا يقول <span className="text-red-500">عملاؤنا</span> عنا؟
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed">نفتخر بثقة عملائنا وآرائهم الإيجابية حول خدماتنا</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-3">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center gap-0.5 mb-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  </div>
                  <p className="text-gray-600 italic">
                    "خدمة ممتازة وسريعة جداً. طلبت اسطوانة غاز ووصلتني خلال 30 دقيقة فقط. الموظفين محترفين ولطيفين.
                    سأستمر بالتعامل معهم بالتأكيد."
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        alt="صورة العميل"
                        width={50}
                        height={50}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">أحمد الكويتي</h4>
                      <p className="text-sm text-gray-500">عميل منذ 2023</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center gap-0.5 mb-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  </div>
                  <p className="text-gray-600 italic">
                    "أفضل خدمة توصيل اسطوانات غاز في الكويت. الأسعار معقولة والجودة ممتازة. أنصح الجميع بالتعامل معهم.
                    شكراً لكم على الخدمة المتميزة."
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        alt="صورة العميل"
                        width={50}
                        height={50}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">فاطمة العنزي</h4>
                      <p className="text-sm text-gray-500">عميلة منذ 2022</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center gap-0.5 mb-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-5 h-5 fill-gray-300 text-gray-300" />
                  </div>
                  <p className="text-gray-600 italic">
                    "تعاملت معهم عدة مرات وكانت التجربة إيجابية في كل مرة. الموظفون محترفون والتوصيل سريع. أسعارهم
                    منافسة مقارنة بالخدمات الأخرى."
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        alt="صورة العميل"
                        width={50}
                        height={50}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">محمد السالم</h4>
                      <p className="text-sm text-gray-500">عميل منذ 2024</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white" id="contact">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="bg-red-100 text-red-600 hover:bg-red-200 transition-colors">اتصل بنا</Badge>
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                نحن <span className="text-red-500">هنا لمساعدتك</span>
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed">
                فريق خدمة العملاء متاح للرد على استفساراتك على مدار الساعة
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="p-3 bg-red-100 rounded-xl">
                      <Phone className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">اتصل بنا</h3>
                      <p className="text-gray-500">+965 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="p-3 bg-red-100 rounded-xl">
                      <MapPin className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">موقعنا</h3>
                      <p className="text-gray-500">الكويت، مدينة الكويت، شارع الخليج العربي</p>
                    </div>
                  </div>
                  <div className="relative h-64 mt-4 rounded-xl overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=600"
                      alt="خريطة الموقع"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      الاسم
                    </Label>
                    <Input
                      id="name"
                      className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="أدخل اسمك"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      رقم الهاتف
                    </Label>
                    <Input
                      id="phone"
                      className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="أدخل رقم هاتفك"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      الرسالة
                    </Label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="اكتب رسالتك هنا"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-l from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 transition-all duration-300 h-12">
                    إرسال
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-500">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white text-center md:text-right">
              <h2 className="text-3xl font-bold mb-2">جاهز لطلب اسطوانة الغاز؟</h2>
              <p className="text-red-100">اطلب الآن واحصل على توصيل سريع في أقل من ساعة</p>
            </div>
            <Link href="/summary">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 transition-colors shadow-lg">
                اطلب الآن
                <ChevronLeft className="mr-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

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
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
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
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
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
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
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
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
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
                  <Link href="#products" className="text-gray-400 hover:text-white transition-colors">
                    المنتجات
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                    خدماتنا
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                    آراء العملاء
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    اتصل بنا
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">خدماتنا</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    توصيل اسطوانات الغاز
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    صيانة أجهزة الغاز
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    فحص تسربات الغاز
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    تركيب أنظمة الغاز
                  </a>
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
                    className="w-5 h-5 text-red-500"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span className="text-gray-400">info@kuwaitgas.com</span>
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
