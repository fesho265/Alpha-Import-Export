export function getContactInfo(language: "en" | "ar") {
  return {
    email: "alfaimport25@gmail.com",
    phone: "+201007751355",
    address:
      language === "en"
        ? "Mansoura - El Bahr Street - Taiba Tower"
        : "المنصورة - شارع البحر - برج طيبة",
    facebook: "https://www.facebook.com/alfa.imp.export",
  };
}
