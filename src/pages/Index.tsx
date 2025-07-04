import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Stethoscope" className="h-8 w-8 text-[#4A90E2]" />
              <span className="text-xl font-bold text-gray-900">MediWay</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-[#4A90E2] transition-colors"
              >
                Преимущества
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-[#4A90E2] transition-colors"
              >
                Как работает
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-[#4A90E2] transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-[#4A90E2] transition-colors"
              >
                Тарифы
              </a>
              <Button className="bg-[#4A90E2] hover:bg-[#3A7BC8] text-white">
                Начать
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#4A90E2] to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
                Ваш надёжный партнёр в
                <span className="text-[#4A90E2]"> медицинской сфере</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl">
                Предоставляем клиникам доступ к сети медицинских специалистов,
                систему направления пациентов и маркетинговое продвижение в
                регионе
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#4A90E2] hover:bg-[#3A7BC8] text-white px-8 py-3 text-lg"
                >
                  Запросить демо
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white px-8 py-3 text-lg"
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              {/* Animated Doctor */}
              <div className="relative w-64 h-64 flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce">
                  <div className="text-6xl">👨‍⚕️</div>
                </div>

                {/* Orbiting Transportation */}
                <div
                  className="absolute inset-0 animate-spin"
                  style={{ animationDuration: "15s" }}
                >
                  {/* Airplane */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-2xl animate-pulse">
                    ✈️
                  </div>
                  {/* Train */}
                  <div
                    className="absolute top-1/2 -right-4 transform -translate-y-1/2 text-2xl animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  >
                    🚂
                  </div>
                  {/* Car */}
                  <div
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-2xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                  >
                    🚗
                  </div>
                  {/* Ambulance */}
                  <div
                    className="absolute top-1/2 -left-4 transform -translate-y-1/2 text-2xl animate-pulse"
                    style={{ animationDelay: "1.5s" }}
                  >
                    🚑
                  </div>
                </div>

                {/* Additional orbiting elements */}
                <div
                  className="absolute inset-0 animate-spin"
                  style={{
                    animationDuration: "20s",
                    animationDirection: "reverse",
                  }}
                >
                  {/* Helicopter */}
                  <div
                    className="absolute -top-8 right-12 text-xl animate-pulse"
                    style={{ animationDelay: "2s" }}
                  >
                    🚁
                  </div>
                  {/* Bus */}
                  <div
                    className="absolute bottom-12 -right-8 text-xl animate-pulse"
                    style={{ animationDelay: "2.5s" }}
                  >
                    🚌
                  </div>
                  {/* Motorcycle */}
                  <div
                    className="absolute -bottom-8 left-12 text-xl animate-pulse"
                    style={{ animationDelay: "3s" }}
                  >
                    🏍️
                  </div>
                  {/* Taxi */}
                  <div
                    className="absolute top-12 -left-8 text-xl animate-pulse"
                    style={{ animationDelay: "3.5s" }}
                  >
                    🚕
                  </div>
                </div>

                {/* Waving hand animation */}
                <div
                  className="absolute top-16 right-12 text-2xl animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                >
                  👋
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ключевые преимущества
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Откройте для себя возможности, которые изменят работу вашей
              клиники
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group">
              <Card className="bg-white border-none shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer group-hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#4A90E2] to-[#3A7BC8] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                    <Icon name="Users" className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#4A90E2] transition-colors">
                    Доступ к специалистам
                  </h3>
                  <div className="overflow-hidden">
                    <p className="text-gray-600 transform group-hover:scale-105 transition-transform duration-300">
                      Обширная сеть квалифицированных медицинских специалистов
                      различных профилей для вашей клиники
                    </p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <div className="flex justify-center space-x-2 text-sm text-[#4A90E2]">
                        <span>200+ врачей</span>
                        <span>•</span>
                        <span>30+ специальностей</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Feature 2 */}
            <div className="group">
              <Card className="bg-white border-none shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer group-hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#F9A8D4] to-[#E879A6] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                    <Icon name="ArrowRight" className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#F9A8D4] transition-colors">
                    Система направлений
                  </h3>
                  <div className="overflow-hidden">
                    <p className="text-gray-600 transform group-hover:scale-105 transition-transform duration-300">
                      Удобная система направления пациентов на операции и
                      процедуры с полным контролем процесса
                    </p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <div className="flex justify-center space-x-2 text-sm text-[#F9A8D4]">
                        <span>24/7 поддержка</span>
                        <span>•</span>
                        <span>Онлайн-трекинг</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Feature 3 */}
            <div className="group">
              <Card className="bg-white border-none shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer group-hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#6B7280] to-[#4B5563] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                    <Icon name="TrendingUp" className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#6B7280] transition-colors">
                    Маркетинговое продвижение
                  </h3>
                  <div className="overflow-hidden">
                    <p className="text-gray-600 transform group-hover:scale-105 transition-transform duration-300">
                      Комплексное маркетинговое сопровождение и продвижение
                      вашей клиники в регионе
                    </p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <div className="flex justify-center space-x-2 text-sm text-[#6B7280]">
                        <span>SEO оптимизация</span>
                        <span>•</span>
                        <span>Реклама</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Как это работает
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Простой процесс интеграции в три шага
            </p>
          </div>

          {/* Process Flow */}
          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4A90E2] to-[#F9A8D4] transform -translate-y-1/2"></div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#4A90E2] to-[#3A7BC8] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-110 transform">
                  <Icon name="FileText" className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#4A90E2] transition-colors">
                  Подписание договора
                </h3>
                <p className="text-gray-600 mb-4">
                  Оформляем партнерское соглашение с вашей клиникой
                </p>
                <div className="w-2 h-2 bg-[#4A90E2] rounded-full mx-auto animate-pulse"></div>
              </div>

              {/* Step 2 */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#F9A8D4] to-[#E879A6] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-110 transform">
                  <Icon name="UserCheck" className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#F9A8D4] transition-colors">
                  Персональный менеджер
                </h3>
                <p className="text-gray-600 mb-4">
                  Выделяем специального менеджера для вашей клиники
                </p>
                <div
                  className="w-2 h-2 bg-[#F9A8D4] rounded-full mx-auto animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>

              {/* Step 3 */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#6B7280] to-[#4B5563] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-110 transform">
                  <Icon name="Key" className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#6B7280] transition-colors">
                  Доступ к сервису
                </h3>
                <p className="text-gray-600 mb-4">
                  Получаете полный доступ к нашей платформе
                </p>
                <div
                  className="w-2 h-2 bg-[#6B7280] rounded-full mx-auto animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Benefits After Access */}
          <div className="mt-16 bg-gradient-to-r from-[#4A90E2]/10 to-[#F9A8D4]/10 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🎉 После получения доступа у вас появляются возможности:
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="w-12 h-12 bg-[#4A90E2] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transform transition-transform">
                  <Icon name="Users" className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  Заказ специалистов
                </h4>
                <p className="text-gray-600 text-center text-sm">
                  Привлекайте нужных врачей прямо в вашу клинику
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="w-12 h-12 bg-[#F9A8D4] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transform transition-transform">
                  <Icon name="ArrowRight" className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  Направление пациентов
                </h4>
                <p className="text-gray-600 text-center text-sm">
                  Отправляйте пациентов к партнерам через систему
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="w-12 h-12 bg-[#6B7280] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transform transition-transform">
                  <Icon name="TrendingUp" className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  Маркетинговое сопровождение
                </h4>
                <p className="text-gray-600 text-center text-sm">
                  Получайте поддержку в продвижении клиники
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Отзывы наших партнёров
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Что говорят о нас администраторы клиник, врачи и пациенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#4A90E2] rounded-full flex items-center justify-center mr-4">
                    <Icon name="User" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Елена Петрова
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Главный врач клиники "Здоровье"
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Благодаря MediWay мы значительно расширили спектр услуг и
                  увеличили поток пациентов. Отличное решение!"
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#F9A8D4] rounded-full flex items-center justify-center mr-4">
                    <Icon name="User" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Дмитрий Иванов
                    </h4>
                    <p className="text-gray-600 text-sm">Хирург-кардиолог</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Удобная система направлений позволяет эффективно работать с
                  пациентами из разных клиник. Всё очень продумано."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#6B7280] rounded-full flex items-center justify-center mr-4">
                    <Icon name="User" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Анна Сидорова
                    </h4>
                    <p className="text-gray-600 text-sm">Пациент</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Процесс направления на операцию прошёл быстро и без проблем.
                  Спасибо за качественную организацию!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Гибкие тарифы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выберите подходящий план для вашей клиники
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Базовый */}
            <Card className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Базовый
                </h3>
                <p className="text-gray-600 mb-6">Для начинающих клиник</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#4A90E2]">
                    5 000₽
                  </span>
                  <span className="text-gray-600">/месяц</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-5 w-5 text-green-500 mr-2"
                    />
                    <span className="text-gray-600">Система направлений</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-5 w-5 text-green-500 mr-2"
                    />
                    <span className="text-gray-600">Базовый маркетинг</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-5 w-5 text-green-500 mr-2"
                    />
                    <span className="text-gray-600">Техническая поддержка</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#4A90E2] hover:bg-[#3A7BC8] text-white">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            {/* Партнер */}
            <Card className="bg-white border-2 border-[#4A90E2] shadow-lg relative hover:shadow-xl transition-shadow duration-300">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-[#4A90E2] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Популярный
                </span>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Партнер
                </h3>
                <p className="text-gray-600 mb-6">Для небольших клиник</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#4A90E2]">
                    15 000₽
                  </span>
                  <span className="text-gray-600">/месяц</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-5 w-5 text-green-500 mr-2"
                    />
                    <span className="text-gray-600">Система направлений</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-5 w-5 text-green-500 mr-2"
                    />
                    <span className="text-gray-600">Базовый маркетинг</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-5 w-5 text-green-500 mr-2"
                    />
                    <span className="text-gray-600">Выезды специалистов</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-5 w-5 text-green-500 mr-2"
                    />
                    <span className="text-gray-600">Персональный менеджер</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#4A90E2] hover:bg-[#3A7BC8] text-white">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise */}
            <Card className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Enterprise
                </h3>
                <p className="text-gray-600 mb-6">Для крупных организаций</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-[#4A90E2]">
                    Индивидуально
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-5 w-5 text-green-500 mr-2"
                    />
                    <span className="text-gray-600">
                      Все возможности Партнер+
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-5 w-5 text-green-500 mr-2"
                    />
                    <span className="text-gray-600">
                      Индивидуальные условия
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-5 w-5 text-green-500 mr-2"
                    />
                    <span className="text-gray-600">
                      Приоритетная поддержка
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-5 w-5 text-green-500 mr-2"
                    />
                    <span className="text-gray-600">Специальные условия</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#6B7280] hover:bg-[#4B5563] text-white">
                  Обсудить условия
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Хотите узнать больше о тарифах? Свяжитесь с нами для консультации
            </p>
            <Button
              variant="outline"
              className="border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white"
            >
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Stethoscope" className="h-8 w-8 text-[#4A90E2]" />
                <span className="text-xl font-bold">MediWay</span>
              </div>
              <p className="text-gray-400 mb-4">
                Ваш надёжный партнёр в медицинской сфере
              </p>
              <div className="flex space-x-4">
                <Icon
                  name="Mail"
                  className="h-6 w-6 text-gray-400 hover:text-[#4A90E2] cursor-pointer"
                />
                <Icon
                  name="Phone"
                  className="h-6 w-6 text-gray-400 hover:text-[#4A90E2] cursor-pointer"
                />
                <Icon
                  name="MapPin"
                  className="h-6 w-6 text-gray-400 hover:text-[#4A90E2] cursor-pointer"
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Доступ к специалистам
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Система направлений
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Маркетинг
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Компания</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Карьера
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2">
                <p className="text-gray-400">+7 (495) 123-45-67</p>
                <p className="text-gray-400">info@mediway.ru</p>
                <p className="text-gray-400">Москва, ул. Медицинская, 123</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 MediWay. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
