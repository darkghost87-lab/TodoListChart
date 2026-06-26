# 📊 TodoListChart - لیست وظایف هوشمند با نمایش نموداری

> یک اپلیکیشن مدرن برای مدیریت وظایف روزانه که پیشرفت شما را به صورت نموداری نمایش می‌دهد

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

---

## 📖 درباره‌ی پروژه

**TodoListChart** یک ابزار مدیریت وظایف هوشمند است که با ترکیب **لیست کارها** و **نمودار پیشرفت**، به شما کمک می‌کند تا بازدهی روزانه‌ی خود را به صورت بصری و جذاب مشاهده کنید. این پروژه با هدف افزایش بهره‌وری و ایجاد انگیزه برای انجام کارها طراحی شده است.

> ⚠️ **توجه:** این پروژه در حال حاضر صرفاً در سمت کاربر (فرانت‌اند) توسعه‌یافته و داده‌ها در **LocalStorage** مرورگر ذخیره می‌شوند.

---

## ✨ ویژگی‌های برجسته

| ویژگی | توضیح |
|-------|-------|
| 📊 **نمودار پیشرفت** | نمایش درصد وظایف انجام‌شده به صورت نمودار دایره‌ای یا میله‌ای |
| 🎯 **مدیریت وظایف** | اضافه کردن، تیک زدن (انجام/انجام‌نشده) و حذف وظایف |
| 🗑️ **حذف با Drag & Drop** | تجربه‌ی کاربری متفاوت با کشیدن وظیفه به سمت سطل زباله برای حذف |
| 💾 **ذخیره‌سازی محلی** | استفاده از LocalStorage برای ذخیره‌سازی دائمی وظایف حتی پس از بستن مرورگر |
| 📈 **آمار لحظه‌ای** | مشاهده‌ی تعداد کل، انجام‌شده و انجام‌نشده در کنار نمودار |
| 🎨 **طراحی مدرن** | استفاده از رنگ‌های شاد و چیدمان کاربرپسند |
| 📱 **طراحی ریسپانسیو** | تطابق کامل با نمایشگرهای موبایل، تبلت و دسکتاپ |

---

## 🛠️ تکنولوژی‌های استفاده‌شده

<div align="center">

| تکنولوژی | نقش در پروژه |
|----------|---------------|
| <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" width="40" height="40"/> | ساختاردهی صفحات |
| <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" width="40" height="40"/> | طراحی و زیباسازی |
| <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="40" height="40"/> | منطق و تعاملات کاربر |

</div>

---


---

## 🚀 نصب و اجرا

برای اجرای پروژه روی سیستم خود، این مراحل را دنبال کنید:

```bash
# 1. کلون کردن مخزن
git clone https://github.com/darkghost87-lab/TodoListChart.git

# 2. ورود به پوشه‌ی پروژه
cd TodoListChart

# 3. اجرا با Live Server (پیشنهادی)
# اگر از VS Code استفاده می‌کنید، روی فایل index.html راست‌کلیک کرده و "Open with Live Server" را انتخاب کنید.
```

## 📁 ساختار پروژه
TodoListChart/
├── index.html          # فایل اصلی HTML
├── style.css           # استایل‌های پروژه
├── script.js           # منطق جاوااسکریپت (مدیریت وظایف و نمودار)
└── README.md           # مستندات پروژه

## 🎯 نحوه‌ی استفاده

    افزودن وظیفه: در کادر متنی، عنوان وظیفه را وارد کرده و دکمه‌ی "افزودن" را بزنید.

    انجام وظیفه: روی وظیفه کلیک کنید تا وضعیت آن به "انجام‌شده" تغییر کند.

    حذف وظیفه: وظیفه را به سمت سطل زباله بکشید و رها کنید (Drag & Drop).

    مشاهده‌ی پیشرفت: نمودار به‌صورت خودکار با هر تغییر به‌روزرسانی می‌شود.

## برنامه‌های آینده

اگرچه پروژه در وضعیت مطلوبی قرار دارد، اما برای بهبود بیشتر برنامه‌هایی داریم:

    اضافه کردن فیلتر برای نمایش وظایف انجام‌شده/انجام‌نشده

    امکان تاریخ‌گذاری برای هر وظیفه

    اضافه کردن اولویت‌بندی (کم، متوسط، بالا)

    نمایش نمودار میله‌ای به‌عنوان گزینه‌ی دوم

    اتصال به بک‌اند برای ذخیره‌سازی ابری

    اضافه کردن یادآور و اعلان (Notification)

## 🤝 مشارکت
نوع مشارکت	روش انجام
🐛 گزارش باگ	از طریق Issues
💡 پیشنهاد ویژگی	باز کردن یک Issue با برچسب enhancement
🔧 ارسال کد	Pull Request با توضیح کامل تغییرات

## 📜 لایسنس
این پروژه تحت لایسنس MIT منتشر شده است – آزاد برای استفاده، تغییر و توزیع.
MIT License

Copyright (c) 2024 darkghost87-lab

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions...

## 👨‍💻 توسعه‌دهنده
darkghost87-lab
https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white

<div align="center">
⭐ اگر از این پروژه خوشتان آمد، به آن ستاره دهید! ⭐

https://img.shields.io/github/stars/darkghost87-lab/TodoListChart?style=for-the-badge&color=yellow
</div> ```