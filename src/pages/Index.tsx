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
              <span className="text-xl font-bold text-gray-900">
                MedConnect
              </span>
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#4A90E2] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Ваш надёжный партнёр в
              <span className="text-[#4A90E2]"> медицинской сфере</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Предоставляем клиникам доступ к сети медицинских специалистов,
              систему направления пациентов и маркетинговое продвижение в
              регионе
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              Три основные возможности, которые делают нас идеальными партнёрами
              для вашей клиники
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#4A90E2] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Users" className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Доступ к специалистам
                </h3>
                <p className="text-gray-600">
                  Обширная сеть квалифицированных медицинских специалистов
                  различных профилей для вашей клиники
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#F9A8D4] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="ArrowRight" className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Система направлений
                </h3>
                <p className="text-gray-600">
                  Удобная система направления пациентов на операции и процедуры
                  с полным контролем процесса
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#6B7280] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="TrendingUp" className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Маркетинговое продвижение
                </h3>
                <p className="text-gray-600">
                  Комплексное маркетинговое сопровождение и продвижение вашей
                  клиники в регионе
                </p>
              </CardContent>
            </Card>
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
              Простой процесс интеграции в четыре шага
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#4A90E2] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Регистрация
              </h3>
              <p className="text-gray-600">
                Зарегистрируйте вашу клинику в нашей системе
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#4A90E2] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Доступ к сети
              </h3>
              <p className="text-gray-600">
                Получите доступ к нашей сети специалистов
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#4A90E2] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Направление пациентов
              </h3>
              <p className="text-gray-600">
                Направляйте пациентов через нашу систему
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#4A90E2] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Маркетинг
              </h3>
              <p className="text-gray-600">Получайте маркетинговую поддержку</p>
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
                  "Благодаря MedConnect мы значительно расширили спектр услуг и
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
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white border-2 border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Базовый
                </h3>
                <p className="text-gray-600 mb-6">Для небольших клиник</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#4A90E2]">
                    От 15 000₽
                  </span>
                  <span className="text-gray-600">/месяц</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-5 w-5 text-green-500 mr-2"
                    />
                    <span className="text-gray-600">
                      Доступ к 20+ специалистам
                    </span>
                  </li>
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
                </ul>
                <Button className="w-full bg-[#4A90E2] hover:bg-[#3A7BC8] text-white">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 border-[#4A90E2] shadow-lg relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-[#4A90E2] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Популярный
                </span>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Профессиональный
                </h3>
                <p className="text-gray-600 mb-6">Для крупных клиник</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#4A90E2]">
                    От 35 000₽
                  </span>
                  <span className="text-gray-600">/месяц</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-5 w-5 text-green-500 mr-2"
                    />
                    <span className="text-gray-600">
                      Доступ к 50+ специалистам
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-5 w-5 text-green-500 mr-2"
                    />
                    <span className="text-gray-600">
                      Расширенная система направлений
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-5 w-5 text-green-500 mr-2"
                    />
                    <span className="text-gray-600">
                      Полный маркетинг-пакет
                    </span>
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
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Нужен индивидуальный план? Свяжитесь с нами для обсуждения
            </p>
            <Button
              variant="outline"
              className="border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white"
            >
              Связаться с нами
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
                <span className="text-xl font-bold">MedConnect</span>
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
                <p className="text-gray-400">info@medconnect.ru</p>
                <p className="text-gray-400">Москва, ул. Медицинская, 123</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 MedConnect. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
