export interface Content {
  title: string;
  subtitle: string;
  introButton: string;
  heroSubtitle: string;
  invitationTitle: string;
  invitationText: string;
  dateTitle: string;
  countdownTitle: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  weddingDay: string;
  locationTitle: string;
  googleMaps: string;
  yandexMaps: string;
  rsvpTitle: string;
  rsvpText: string;
  telegram: string;
  phone: string;
  footer: string;
  scrollDown: string;
  cardTitle: string;
  cardName: string;
  cardCopy: string;
}

export const weddingData = {
  groom: "Firdavsbek",
  bride: "Nozima",
  date: "2026-06-10T17:00:00",
  displayDate: "10 | 06 | 2026",
  time: "17:00",
  venueName: "Parizod To'yxonasi",
  city: "Chust shahri",
  address: "Mo'ljal: Chust shahri, Parizod to'yxonasi",
  googleMapsUrl: "https://maps.app.goo.gl/4rfkVUEfHgDHvwEB6",
  yandexMapsUrl: "https://yandex.com/maps/-/CPgXYLNW",
  telegramUrl: "https://t.me/Firdavsbek_0622",
  cardNumber: "9860350140204693",
  cardHolder: "To'xtanazarov Firdavs",
};

export const content: Record<string, Content> = {
  uz: {
    title: "To'y Taklifnomasi",
    subtitle: "Sizni to'yimizga taklif qilamiz",
    introButton: "Taklifnomani ochish",
    heroSubtitle: "Bizning baxtli kunimizga marhamat",
    invitationTitle: "Assalomu alaykum, aziz mehmonlar!",
    invitationText:
      "Aziz va qadrdon insonimiz! Hayotimizning eng go'zal va unutilmas kunida sizni yonimizda ko'rishdan mamnun bo'lamiz. Quvonchimizga sherik bo'lishingiz biz uchun katta baxtdir. Sizning ishtirokingiz bilan bu kun yanada go'zal va mazmunli bo'ladi.",
    dateTitle: "To'y kuni",
    countdownTitle: "To'ygacha qolgan vaqt",
    days: "kun",
    hours: "soat",
    minutes: "daqiqa",
    seconds: "soniya",
    weddingDay: "To'y kuni muborak!",
    locationTitle: "Manzil",
    googleMaps: "Google Maps",
    yandexMaps: "Yandex Xarita",
    rsvpTitle: "Kelishingizni kutamiz",
    rsvpText:
      "Biz uchun eng katta sovg'a — sizning huzuringiz. Iltimos, kelishingiz haqida oldindan xabar bering.",
    telegram: "Telegram orqali bog'lanish",
    phone: "+998 50 004 22 06",
    footer: "Hurmat bilan, kelin-kuyov oilasi",
    scrollDown: "Pastga suring",
    cardTitle: "Ko'ngillilar uchun",
    cardName: "Karta egasi",
    cardCopy: "Nusxa olish",
  },
  ru: {
    title: "Свадебное приглашение",
    subtitle: "Приглашаем вас на нашу свадьбу",
    introButton: "Открыть приглашение",
    heroSubtitle: "Добро пожаловать на наш счастливый день",
    invitationTitle: "Ассаламу алейкум, дорогие гости!",
    invitationText:
      "Дорогой и уважаемый наш человек! Мы будем рады видеть вас рядом с нами в самый прекрасный и незабываемый день нашей жизни. Ваше присутствие сделает этот день ещё более красивым и значимым. Разделите с нами нашу радость.",
    dateTitle: "День свадьбы",
    countdownTitle: "До свадьбы осталось",
    days: "дней",
    hours: "часов",
    minutes: "минут",
    seconds: "секунд",
    weddingDay: "С днём свадьбы!",
    locationTitle: "Место проведения",
    googleMaps: "Google Maps",
    yandexMaps: "Яндекс Карты",
    rsvpTitle: "Ждём вас",
    rsvpText:
      "Самый лучший подарок для нас — ваше присутствие. Пожалуйста, сообщите заранее о своём приходе.",
    telegram: "Связаться через Telegram",
    phone: "+998 50 004 22 06",
    footer: "С уважением, семья жениха и невесты",
    scrollDown: "Листайте вниз",
    cardTitle: "Для желающих",
    cardName: "Владелец карты",
    cardCopy: "Копировать",
  },
};
