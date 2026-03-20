1. ТЕХНИЧЕСКОЕ ЗАДАНИЕ (TECH SPEC)
1. Общая информация

Проект: Stay & Work Georgia — корпоративный сайт

Тип: SPA (single-page application)

Цель: генерация лидов и запись на консультацию

Язык: EN (основной)

Бэкенд: отсутствует (статический сайт)

2. Технологии

React 18+

Vite / CRA

Tailwind CSS

Без сторонних библиотек (кроме шрифтов)

3. Архитектура

Single-page с якорной навигацией

Все данные захардкожены

Компонентная структура

Основные компоненты:

Header

Hero

Services

CTA

About

DetailedServices

Footer

4. Структура страницы

Порядок секций:

Header (sticky)

Hero

Services (6 карточек)

CTA

About

Detailed Services

Footer

5. Функциональность
Навигация

Якорная прокрутка

Active section tracking (IntersectionObserver)

Smooth scroll

Address








STAY & WORK GEORGIA

1. Общая информация о проекте

Название проекта	Stay & Work Georgia — корпоративный веб-сайт
Тип проекта	Single-page application (SPA), landing + сервисные секции
Целевая аудитория	Иностранные граждане, предприниматели, фрилансеры, работодатели в Грузии
Языки контента	Английский (основной)
Бэкенд	Отсутствует. Все данные захардкожены в код
Цель сайта	Генерация лидов, первичная фильтрация обращений, конверсия в консультацию

3. Технический стек

Компонент	Технология
Фреймворк	React 18+ (Single-page Application)
Стилизация	Tailwind Css
Бэкенд	Отсутствует — статический сайт
Сборка	Vite или Create React App
4. Структура страницы (Sitemap)

Сайт представляет собой single-page application. Все секции расположены вертикально с якорной навигацией.

Порядок секций (сверху вниз):
1.	Header (sticky, фиксированный)
2.	Hero Section
3.	Services — 6 компактных карточек
4.	CTA Block — «Get a Consultation»
5.	About Us
6.	Detailed Services — развёрнутые карточки
7.	Footer
6. Детальное описание секций

6.1. Header
Фиксированный header, который при скролле получает blur-фон и нижний border.
Содержимое:
•	Лого: иконка «S» + текст «Stay & Work Georgia»
•	Навигация: Logo, Services,Contact
•	Номер телефона с иконкой (правый край)
•	Мобильное меню: hamburger → dropdown с навигацией
Поведение:
•	По умолчанию: transparent, без border
•	При скролле (>40px): background rgba(6,11,31,0.92) + backdrop-filter: blur(20px) + border-bottom
6.2. Hero Section
Контент:
•	Бейдж: «Residence & Work Permit Support in Georgia» (pill-badge)
•	Заголовок: «Stay & Work Georgia» — слово «Georgia» выделено gold
•	Подзаголовок: 1–2 предложения о сервисе
•	CTA: «Book Consultation» (gold, primary) + «Explore Services» (outline, secondary)
•	Статистика: 200+ Cases, 15+ Countries, 3 Languages
6.3. Services — 6 карточек
Сетка из 6 карточек с компактным описанием каждого сервиса.
Карточки:
#	Название	Краткое описание
1	Work Permit Support	Поддержка иностранцев в получении рабочих разрешений
2	Residence Permit Support	Помощь с ВНЖ: подача, продление, юридическая поддержка
3	IE Registration	Регистрация ИП для иностранцев в Грузии
4	Business Setup	Полная поддержка в открытии бизнеса
5	Employer Support	Помощь грузинским компаниям при найме иностранцев
6	Documents & Renewals	Подготовка документов, продления, координация

Поведение карточек:
•	Grid: repeat(auto-fit, minmax(320px, 1fr))
•	Hover: translateY(-4px), border подсвечивается, shadow усиление
•	Кнопка «Learn More» → smooth scroll к развёрнутой карточке в секции Detailed Services
•	Стрелка анимируется при hover (translateX(4px))
6.4. CTA Block
Блок призыва к действию с 4 способами связи.
Контент:
•	Заголовок: «Need Help With Your Case?»
•	Подтекст: «Contact us and get clear next steps. Initial consultation is free.»
Кнопки связи:
Канал	Ссылка	Цвет иконки
WhatsApp	https://wa.me/995XXXXXXXXX	#25D366 (зелёный)
Telegram	https://t.me/stayworkgeorgia	#26A5E4 (голубой)
Email	mailto:info@stayworkgeorgia.com	Gold (#C8A45C)
Phone	tel:+995XXXXXXXXX	Gold (#C8A45C)
6.5. About Us
Двухколоночная секция: текст слева, 4 информационные карточки справа.
Текстовый блок (левая колонка):
•	Кто мы: профессиональная консалтинговая компания
•	Кому помогаем: employees, freelancers, entrepreneurs, companies
•	Подход: ясные шаги, без пустых обещаний, надёжная поддержка
Информационные карточки (правая колонка):
•	Languages: English, Russian, Georgian, 
•	Confidential: полная конфиденциальность данных
•	Clear Process: структурированный процесс от первого звонка
•	Who We Help: employees, freelancers, founders, employers
\

6.8. Detailed Services
Развёрнутые блоки для каждого из 6 сервисов. Якорные точки для «Learn More» из секции 6.3.
Структура каждого блока:
•	Иконка + Название сервиса (H3)
•	Полное описание (2–3 предложения)
•	Чеклист «What’s Included» (3–5 пунктов с иконками ✓)
•	CTA-кнопка «Start Your Case» → scroll к секции Contact
Layout:
•	Grid: 2 колонки (описание | чеклист)
•	Card: border-radius 20px, padding 48px, border + background
•	scroll-margin-top: 100px (чтобы header не перекрывал)
6.9. Footer
4-колоночный footer с логотипом, навигацией, сервисами и контактами.
Колонки:
•	Колонка 1 (2fr): Логотип, краткое описание, email, город
•	Колонка 2: Навигация (ссылки на секции)
•	Колонка 3: Список сервисов
•	Колонка 4: Вертикальные иконки связи (WhatsApp, Telegram, Phone, Email)
Bottom bar:
•	© 2026 Stay & Work Georgia. All rights reserved.
•	«Professional consultancy services. We are not a law firm.»
7. Контент и сервисы

7.1. Основные направления
Сайт охватывает 4 ключевых направления, каждое из которых представлено как отдельная группа сервисов:
A. Work Permit
•	Work permit for employees
•	Work permit for self-employed persons
•	Application support, document review, filing guidance, follow-up
B. Residence Permit
•	Residence through employment
•	Residence through individual entrepreneurship
•	Renewals, change/update support, document preparation
C. IE / Business Setup
•	IE registration, small business status
•	Tax/accounting coordination, legal address
•	Basic business setup guidance
D. Employer Support
•	Support for hiring foreign employees
•	Work permit process support for employers
•	Document checklist, practical guidance
7.2. Ключевые месседжи
•	«We help foreign nationals apply for work permits in Georgia.»
•	«We assist with residence permit applications, renewals and related legal support.»
•	«We help foreigners register as individual entrepreneurs and set up their business presence.»
•	«We support Georgian companies hiring foreign nationals.»
8. Адаптивность и responsive-дизайн

Breakpoint	Ширина	Изменения
Desktop	> 768px	Полная версия, все grid-раскладки
Tablet	481–768px	Grid в 1–2 колонки, скрыта nav, hamburger
Mobile	≤ 480px	Все в 1 колонку, footer в 1 колонку

Адаптивные элементы:
•	Header: навигация скрывается, появляется hamburger-меню
•	About: 2 колонки → 1 колонка
•	Detailed Services cards: 2 колонки → 1 колонка, уменьшенный padding
•	Footer: 4 колонки → 2 → 1 колонка
•	Заголовки: clamp() для плавного масштабирования

9.1. Scroll-анимации (IntersectionObserver)
•	Все секции и карточки появляются с fade-in + translateY(32px → 0)
•	Threshold: 0.15 (срабатывает когда 15% элемента в viewport)
•	Stagger: последовательная задержка карточек (delay * index)
•	Transition: opacity 0.7s ease, transform 0.7s ease
9.2. Hover-эффекты
•	Карточки: translateY(-4px), border и shadow усиление
•	CTA-кнопки: translateY(-2px), shadow усиление
•	Навигация: underline transition
•	Стрелки «Learn More»: translateX(4px)
9.3. Интерактивные элементы
•	
•	Smooth scroll при клике на навигацию и «Learn More»
•	Active section tracking через IntersectionObserver
•	Header blur-transition при скролле
10. SEO и производительность

SEO:
•	Семантическая HTML-структура (h1, h2, h3, section, nav, footer)
•	Meta title: «Stay & Work Georgia — Residence & Work Permit Support in Georgia»
•	Meta description: соответствует теглайну
•	Alt-тексты для всех SVG-иконок
•	Open Graph теги для соцсетей
Производительность:
•	Без внешних библиотек кроме Google Fonts
•	Inline SVG вместо иконочных шрифтов
•	CSS transitions вместо JS-анимаций (где возможно)
•	Lazy-loading контента через IntersectionObserver
•	Минимальный бандл: только React + один JSX файл
11. Контакты и интеграции

Канал	Ссылка/Значение
Телефон	+995 XXX XXX XXX
WhatsApp	wa.me/995XXXXXXXXX
Telegram	t.me/stayworkgeorgia
Email	info@stayworkgeorgia.com
Адрес	Тбилиси, Грузия


