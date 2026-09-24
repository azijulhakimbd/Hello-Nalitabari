export type SchoolType =
  | "Secondary School"
  | "Primary School"
  | "Madrasa"
  | "Academy";

export interface SchoolData {
  id: number;
  name: string;
  type: SchoolType;
  address: string;
  phone: string;
  students: string;
  established: string;
  image: string;
  eiin?: string;
  mapUrl: string;
}

export const schools: SchoolData[] = [
  {
    id: 1,
    name: "তারাগঞ্জ সরকারি পাইলট উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "তারাগঞ্জ, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "1941",
    eiin: "113773",
    image:
      "https://i.postimg.cc/J4KphBF6/তারাগঞ্জ_সরকারি_পাইলট_উচ্চ_বিদ্যালয়.png",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Taragonj+Govt+Pilot+High+School+Nalitabari",
  },
  {
    id: 2,
    name: "তারাগঞ্জ পাইলট বালিকা উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "1959",
    eiin: "113772",
    image:
      "https://i.postimg.cc/m2VmrFnd/তারাগঞ্জ_পাইলট_বালিকা_উচ্চ_বিদ্যালয়.png",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Taragonj+Pilot+Girls+High+School+Nalitabari",
  },
  {
    id: 3,
    name: "হিরণময়ী উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "1919",
    eiin: "113774",
    image:
      "https://i.postimg.cc/yYnLNSGt/হিরণময়ী_উচ্চ_বিদ্যালয়.png",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Hiranmoyee+High+School+Nalitabari",
  },
  {
    id: 4,
    name: "বারুয়াজানি হাসান উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "বারুয়াজানি, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "1967",
    eiin: "113776",
    image:
      "https://i.postimg.cc/dtTPjGc7/বারুয়াজানি_হাসান_উচ্চ_বিদ্যালয়.png",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Baruajani+Hassan+High+School+Nalitabari",
  },
  {
    id: 5,
    name: "আন্ধারুপাড়া উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "আন্ধারুপাড়া, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "1967",
    eiin: "113777",
    image:
      "https://i.postimg.cc/WbJLw0cM/আন্ধারুপাড়া_উচ্চ_বিদ্যালয়.png",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Andharupara+High+School+Nalitabari",
  },
  {
    id: 6,
    name: "ঘাইলারা শামসুল হক স্মৃতি উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "ঘাইলারা, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113778",
    image: "/images/schools/ghailara.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Ghailara+Shamsul+Haq+Smrity+High+School",
  },
  {
    id: 7,
    name: "মধ্য নালিতাবাড়ী বালিকা উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "মধ্য নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "1971",
    eiin: "113779",
    image:
      "https://i.postimg.cc/Bn9WYtJ2/মধ্য_নালিতাবাড়ী_বালিকা_উচ্চ_বিদ্যালয়.png",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Madhya+Nalitabari+Girls+High+School",
  },
  {
    id: 8,
    name: "সানাসিভিটা উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "সানাসিভিটা, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "1971",
    eiin: "113780",
    image: "/images/schools/sanasivita.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Sanasivita+High+School+Nalitabari",
  },
  {
    id: 9,
    name: "নয়াবিল উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "নয়াবিল, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "1971",
    eiin: "113781",
    image:
      "https://i.postimg.cc/YSPQqFXK/নয়াবিল_উচ্চ_বিদ্যালয়.png",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Nayabil+High+School+Nalitabari",
  },
  {
    id: 10,
    name: "নালজুরা ইনতাজ আলী উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "নালজুরা, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "1972",
    eiin: "113782",
    image:
      "https://i.postimg.cc/0N472Stq/নালজুরা_ইনতাজ_আলী_উচ্চ_বিদ্যালয়.png",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Najura+Intaz+Ali+High+School+Nalitabari",
  },
  {
    id: 11,
    name: "শহীদ সামাদ বালিকা উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "1973",
    eiin: "113783",
    image:
      "https://i.postimg.cc/430pNc8R/শহীদ_সামাদ_বালিকা_উচ্চ_বিদ্যালয়.png",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Shaheed+Samad+Girls+High+School+Nalitabari",
  },
  {
    id: 12,
    name: "পলাশীকুড়া জনতা উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "পলাশীকুড়া, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "1981",
    eiin: "113784",
    image:
      "https://i.postimg.cc/xdZLTm6B/পলাশীকুড়া_জনতা_উচ্চ_বিদ্যালয়.png",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Palashikura+Janata+High+School+Nalitabari",
  },
  {
    id: 13,
    name: "আদর্শ উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113785",
    image: "/images/schools/adarsha.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Adarsha+High+School+Nalitabari",
  },
  {
    id: 14,
    name: "রামচন্দ্রকুড়া উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "রামচন্দ্রকুড়া, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113786",
    image:
      "https://i.postimg.cc/Hs3z1r1P/রামচন্দ্রকুড়া_উচ্চ_বিদ্যালয়.png",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Ramchandra+Kura+High+School+Nalitabari",
  },
  {
    id: 15,
    name: "বনকুড়া উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "বনকুড়া, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "1991",
    eiin: "113788",
    image:
      "https://i.postimg.cc/3wPYT9hM/Bonkura-High-School.png",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Bonkura+High+School+Nalitabari",
  },
  {
    id: 16,
    name: "আবদুল হাকিম স্মৃতি মডেল উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "1991",
    eiin: "113789",
    image:
      "https://i.postimg.cc/qBh06gdC/আবদুল_হাকিম_স্মৃতি_মডেল_উচ্চ_বিদ্যালয়.png",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Abdul+Hakim+Smriti+Model+High+School+Nalitabari",
  },
  {
    id: 17,
    name: "ফকিরপাড়া উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "ফকিরপাড়া, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "1995",
    eiin: "113790",
    image:
      "https://i.postimg.cc/5jds6sM0/phaka-ra-pa-da-uca-ca-ba-da-ya-laya.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Fakir+Para+High+School+Nalitabari",
  },
  {
    id: 18,
    name: "পোড়াগাঁও আদর্শ উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "পোড়াগাঁও, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "1993",
    eiin: "113791",
    image:
      "https://i.postimg.cc/0rRVbVqj/পোড়াগাঁও_আদর্শ_উচ্চ_বিদ্যালয়.png",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Poragaon+Adarsha+High+School+Nalitabari",
  },
  {
    id: 19,
    name: "হোসাইন আলী বালিকা উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113792",
    image: "/images/schools/hossain-ali-girls.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Hossain+Ali+Girls+High+School+Nalitabari",
  },
  {
    id: 20,
    name: "বাঘবেড় উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "বাঘবেড়, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "1994",
    eiin: "113793",
    image:
      "https://i.postimg.cc/brdXW0wF/ba-gaba-da-uca-ca-ba-da-ya-laya.png",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Bagber+High+School+Nalitabari",
  },
  {
    id: 21,
    name: "মুক্তিযোদ্ধা উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113794",
    image: "/images/schools/muktijuddha.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Muktijuddha+High+School+Nalitabari",
  },
  {
    id: 22,
    name: "নয়াবিল বালিকা উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "নয়াবিল, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113795",
    image:
      "https://i.postimg.cc/c1VghFHR/naya-ba-la-ba-la-ka-uca-ca-ba-da-ya-laya.png",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Nayabil+Girls+High+School+Nalitabari",
  },
  {
    id: 23,
    name: "খালাভাঙ্গা মকবুল হোসেন উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "খালাভাঙ্গা, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "1996",
    eiin: "113796",
    image: "/images/schools/khalabanga.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Khalabanga+Makbul+Hossain+High+School",
  },
  {
    id: 24,
    name: "উত্তর নাকশী উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "উত্তর নাকশী, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "1996",
    eiin: "113797",
    image:
      "https://i.postimg.cc/d0Tg2Qxs/uta-tara-na-kasa-uca-ca-ba-da-ya-laya.png",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Uttar+Nakshi+High+School+Nalitabari",
  },
  {
    id: 25,
    name: "নিজপাড়া SESDP মডেল উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "নিজপাড়া, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "2011",
    eiin: "134795",
    image: "/images/schools/nizpara-sesdp.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Nizpara+SESDP+Model+High+School+Nalitabari",
  },
  {
    id: 26,
    name: "নালিতাবাড়ী পৌরসভা মডেল জুনিয়র উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "নালিতাবাড়ী পৌরসভা, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113802",
    image: "/images/schools/poura-sava-model.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Poura+Sava+Model+Junior+High+School+Nalitabari",
  },
  {
    id: 27,
    name: "ভাদিকুড়া জুনিয়র উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "ভাদিকুড়া, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "2003",
    eiin: "113803",
    image: "/images/schools/bhadikura.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Bhadikura+Junior+High+School+Nalitabari",
  },
  {
    id: 28,
    name: "বাথুয়ারকান্দা আদর্শ জুনিয়র মাধ্যমিক বিদ্যালয়",
    type: "Secondary School",
    address: "বাথুয়ারকান্দা, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "2005",
    eiin: "113804",
    image: "/images/schools/bathuar-kanda.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Bathuar+Kanda+Adarsha+Junior+Secondary+School",
  },
  // ---------------------------------------------------------------------------
  // Primary Schools — publicly listed / government-referenced institutions
  // ---------------------------------------------------------------------------
  {
    id: 29,
    name: "নালিতাবাড়ী সরকারি প্রাথমিক বিদ্যালয়",
    type: "Primary School",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    image: "/images/schools/nalitabari-govt-primary.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Nalitabari+Government+Primary+School",
  },
  {
    id: 30,
    name: "টাঙ্গাবাড়ী সরকারি প্রাথমিক বিদ্যালয়",
    type: "Primary School",
    address: "টাঙ্গাবাড়ী, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    image: "/images/schools/tangabari-primary.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Tangabari+Government+Primary+School+Nalitabari",
  },
  {
    id: 31,
    name: "নন্নী সরকারি প্রাথমিক বিদ্যালয়",
    type: "Primary School",
    address: "নন্নী, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    image: "/images/schools/nanni-primary.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Nanni+Government+Primary+School+Nalitabari",
  },
  {
    id: 32,
    name: "জাংগালিয়াকান্দা সরকারি প্রাথমিক বিদ্যালয়",
    type: "Primary School",
    address: "জাংগালিয়াকান্দা, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    image: "/images/schools/jangaliakanda-primary.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Jangaliakanda+Government+Primary+School+Nalitabari",
  },
  {
    id: 33,
    name: "বালুঘাটা সরকারি প্রাথমিক বিদ্যালয়",
    type: "Primary School",
    address: "বালুঘাটা, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    image: "/images/schools/balughata-primary.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Balughata+Government+Primary+School+Nalitabari",
  },
  {
    id: 34,
    name: "নামাপাড়া সরকারি প্রাথমিক বিদ্যালয়",
    type: "Primary School",
    address: "নামাপাড়া, নালিতাবাড়ী, শেরপুর",
    phone: "01857-246159",
    students: "",
    established: "",
    image: "/images/schools/namapara-primary.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Namapara+Government+Primary+School+Nalitabari",
  },
  {
    id: 35,
    name: "গোলাপ পাড় কমিউনিটি প্রাথমিক বিদ্যালয়",
    type: "Primary School",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    image: "/images/schools/golap-para-primary.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Golap+Para+Community+Primary+School+Nalitabari",
  },
  {
    id: 36,
    name: "নিজপাড়া কমিউনিটি প্রাথমিক বিদ্যালয়",
    type: "Primary School",
    address: "নিজপাড়া, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    image: "/images/schools/nizpara-community-primary.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Nizpara+Community+Primary+School+Nalitabari",
  },
  {
    id: 37,
    name: "দাওধারা কাঁটাবাড়ী কমিউনিটি প্রাথমিক বিদ্যালয়",
    type: "Primary School",
    address: "দাওধারা কাঁটাবাড়ী, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    image: "/images/schools/daodhara-katabari-primary.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Daodhara+Katabari+Community+Primary+School+Nalitabari",
  },

  // ---------------------------------------------------------------------------
  // Madrasas — institute names / EIINs from publicly available listings
  // ---------------------------------------------------------------------------
  {
    id: 38,
    name: "রূপনারায়ণকুড়া আলিম মাদ্রাসা",
    type: "Madrasa",
    address: "নিজপাড়া, নালিতাবাড়ী, শেরপুর",
    phone: "01712614092",
    students: "",
    established: "",
    eiin: "113805",
    image: "/images/schools/rupnarayan-kura-alim.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Rupnarayan+Kura+Alim+Madrasha+Nalitabari",
  },
  {
    id: 39,
    name: "রাজনগর রহমানিয়া ফাজিল মাদ্রাসা",
    type: "Madrasa",
    address: "রাজনগর, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113806",
    image: "/images/schools/rajnagar-rahmania-fazil.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Rajnagar+Rahmania+Fazil+Madrasah+Nalitabari",
  },
  {
    id: 40,
    name: "পাঁচগাঁও দাখিল মাদ্রাসা",
    type: "Madrasa",
    address: "পাঁচগাঁও, নালিতাবাড়ী, শেরপুর",
    phone: "01725722396",
    students: "",
    established: "",
    eiin: "113807",
    image: "/images/schools/panchgaon-dakhil.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Panchgaon+Dakhil+Madrasa+Nalitabari",
  },
  {
    id: 41,
    name: "তারাগঞ্জ ফাজিল মাদ্রাসা",
    type: "Madrasa",
    address: "নালিতাবাড়ী বাজার, নালিতাবাড়ী, শেরপুর",
    phone: "01725250312",
    students: "",
    established: "1950",
    eiin: "113808",
    image: "/images/schools/taragonj-fazil-madrasa.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Taragonj+Fazil+Madrasha+Nalitabari",
  },
  {
    id: 42,
    name: "নিশ্চিন্তপুর আলিম মাদ্রাসা",
    type: "Madrasa",
    address: "নিশ্চিন্তপুর, নালিতাবাড়ী, শেরপুর",
    phone: "01727538623",
    students: "",
    established: "",
    eiin: "113809",
    image: "/images/schools/nischintapur-alim.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Nischintapur+Alim+Madrasha+Nalitabari",
  },
  {
    id: 43,
    name: "গোজাকুড়া দাখিল মাদ্রাসা",
    type: "Madrasa",
    address: "গোজাকুড়া, নালিতাবাড়ী, শেরপুর",
    phone: "01914868617",
    students: "",
    established: "",
    eiin: "113810",
    image: "/images/schools/gojakura-dakhil.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Gojakura+Dakhil+Madrasa+Nalitabari",
  },
  {
    id: 44,
    name: "নন্নী ইসলামিয়া আলিমা মাদ্রাসা",
    type: "Madrasa",
    address: "নন্নী, নালিতাবাড়ী, শেরপুর",
    phone: "01714636315",
    students: "",
    established: "",
    eiin: "113811",
    image: "/images/schools/nanni-islamia-alima.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Nanni+Islamia+Alima+Madrasha+Nalitabari",
  },
  {
    id: 45,
    name: "দক্ষিণ রানীগাঁও সিরুমিয়া আজিমউদ্দিন দারুস সুন্নাহ মাদ্রাসা",
    type: "Madrasa",
    address: "দক্ষিণ রানীগাঁও, নালিতাবাড়ী, শেরপুর",
    phone: "01820575675",
    students: "",
    established: "",
    eiin: "113812",
    image: "/images/schools/dakkhin-ranigaon-madrasa.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Dakkhin+Ranigaon+Sirumiah+Azimuddin+Madrasa+Nalitabari",
  },
  {
    id: 46,
    name: "সুরজনগর বড়ডুবি আলিম মাদ্রাসা",
    type: "Madrasa",
    address: "বড়ডুবি, নালিতাবাড়ী, শেরপুর",
    phone: "01757840674",
    students: "",
    established: "",
    eiin: "113813",
    image: "/images/schools/surjanagar-boradubi-alim.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Surjanagar+Boradubi+Alim+Madrasa+Nalitabari",
  },
  {
    id: 47,
    name: "মরিচপুরান দাখিল মাদ্রাসা",
    type: "Madrasa",
    address: "মরিচপুরান, নালিতাবাড়ী, শেরপুর",
    phone: "01721648154",
    students: "",
    established: "",
    eiin: "113814",
    image: "/images/schools/marichpuran-dakhil.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Marich+Puran+Dakhil+Madrasa+Nalitabari",
  },
  {
    id: 48,
    name: "কালাশপাড় নয়মে দাখিল মাদ্রাসা",
    type: "Madrasa",
    address: "কালাশপাড়, নালিতাবাড়ী, শেরপুর",
    phone: "01721314074",
    students: "",
    established: "",
    eiin: "113815",
    image: "/images/schools/kalashpar-dakhil.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Kalashpar+Noyme+Dakhil+Madrasa+Nalitabari",
  },
  {
    id: 49,
    name: "কালাকুড়া নেছারিয়া দাখিল মাদ্রাসা",
    type: "Madrasa",
    address: "কালাকুড়া, নালিতাবাড়ী, শেরপুর",
    phone: "01716525597",
    students: "",
    established: "",
    eiin: "113816",
    image: "/images/schools/kalakura-nesaria.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Kalakura+Nesaria+Dakhil+Madrasa+Nalitabari",
  },
  {
    id: 50,
    name: "পোড়াগাঁও দাখিল মাদ্রাসা",
    type: "Madrasa",
    address: "পোড়াগাঁও, নালিতাবাড়ী, শেরপুর",
    phone: "01739294498",
    students: "",
    established: "",
    eiin: "113817",
    image: "/images/schools/poragaon-dakhil-madrasa.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Poragaon+Dakhil+Madrasa+Nalitabari",
  },
  {
    id: 51,
    name: "দোহালিয়া ইসলামিয়া দাখিল মাদ্রাসা",
    type: "Madrasa",
    address: "দোহালিয়া, নালিতাবাড়ী, শেরপুর",
    phone: "01710927733",
    students: "",
    established: "",
    eiin: "113818",
    image: "/images/schools/dohalia-islamia.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Dohalia+Islamia+Dakhil+Madrasa+Nalitabari",
  },
  {
    id: 52,
    name: "সুরজনগর গাগলাজানি দাখিল মাদ্রাসা",
    type: "Madrasa",
    address: "সুরজনগর, নালিতাবাড়ী, শেরপুর",
    phone: "01734425969",
    students: "",
    established: "",
    eiin: "113820",
    image: "/images/schools/surjanagar-gagla-jani.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Surjanagar+Gaglajani+Dakhil+Madrasa+Nalitabari",
  },
  {
    id: 53,
    name: "বদলাকুড়া দাখিল মাদ্রাসা",
    type: "Madrasa",
    address: "বদলাকুড়া, নালিতাবাড়ী, শেরপুর",
    phone: "01916989286",
    students: "",
    established: "",
    eiin: "113821",
    image: "/images/schools/badlakura-dakhil.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Badlakura+Dakhil+Madrasa+Nalitabari",
  },
  {
    id: 54,
    name: "ঘাকপাড়া দাখিল মাদ্রাসা",
    type: "Madrasa",
    address: "ঘাকপাড়া, নালিতাবাড়ী, শেরপুর",
    phone: "01726937523",
    students: "",
    established: "",
    eiin: "113822",
    image: "/images/schools/ghakpara-dakhil.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Ghak+Para+Dakhil+Madrasa+Nalitabari",
  },
  {
    id: 55,
    name: "নালিতাবাড়ী গড়কান্দা মহিলা আলিম মাদ্রাসা",
    type: "Madrasa",
    address: "গড়কান্দা, নালিতাবাড়ী, শেরপুর",
    phone: "01983898686",
    students: "",
    established: "1994",
    eiin: "113823",
    image: "/images/schools/garkanda-womens-alim.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Nalitabari+Garkanda+Womens+Alim+Madrasa",
  },
  {
    id: 56,
    name: "সালুয়াতলা দাখিল মাদ্রাসা",
    type: "Madrasa",
    address: "সালুয়াতলা, নালিতাবাড়ী, শেরপুর",
    phone: "01927056506",
    students: "",
    established: "",
    eiin: "113824",
    image: "/images/schools/saluatala-dakhil.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Saluatala+Dakhil+Madrasa+Nalitabari",
  },
  {
    id: 57,
    name: "চিনামারা ইসলামিয়া দাখিল মাদ্রাসা",
    type: "Madrasa",
    address: "চিনামারা, নালিতাবাড়ী, শেরপুর",
    phone: "01923570351",
    students: "",
    established: "",
    eiin: "131624",
    image: "/images/schools/chinamara-islamia.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Chinamara+Islamia+Dakhil+Madrasa+Nalitabari",
  },
  {
    id: 58,
    name: "রহমানিয়া হাফিজিয়া মাদ্রাসা",
    type: "Madrasa",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    image: "/images/schools/rahmania-hafizia.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Rahmania+Hafizia+Madrasha+Nalitabari",
  },

  // ---------------------------------------------------------------------------
  // Academies / private educational institutions found in recent local listings
  // ---------------------------------------------------------------------------
  {
    id: 59,
    name: "কণিকা ক্যাডেট একাডেমি",
    type: "Academy",
    address: "তারাগঞ্জ উত্তর বাজার, নালিতাবাড়ী, শেরপুর",
    phone: "01755-486064",
    students: "",
    established: "2019 (নালিতাবাড়ী শাখা)",
    image: "/images/schools/konika-cadet-academy.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Konika+Cadet+Academy+Nalitabari",
  },
  {
    id: 60,
    name: "নব জাগরণ একাডেমি",
    type: "Academy",
    address: "নন্নী বাজার, নালিতাবাড়ী, শেরপুর",
    phone: "01737774409",
    students: "",
    established: "2012",
    image: "/images/schools/nabojagoron-academy.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Nabojagoron+Academy+Nanni+Nalitabari",
  },
  {
    id: 61,
    name: "মোহাম্মদ আলী মডেল একাডেমি",
    type: "Academy",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    image: "/images/schools/mohammad-ali-model-academy.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Mohammad+Ali+Model+Academy+Nalitabari",
  },
  {
    id: 62,
    name: "সময় একাডেমি",
    type: "Academy",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    image: "/images/schools/shomoy-academy.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Shomoy+Academy+Nalitabari",
  },
  {
    id: 63,
    name: "বেগম রৌশন আরা একাডেমি",
    type: "Academy",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    image: "/images/schools/begum-roushan-ara-academy.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Begum+Roushan+Ara+Academy+Nalitabari",
  },
  {
    id: 64,
    name: "মেহেরুননেছা কিন্ডারগার্টেন একাডেমি",
    type: "Academy",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    image: "/images/schools/meherunnesa-kindergarten-academy.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Meherunnesa+Kindergarten+Academy+Nalitabari",
  },
  {
    id: 65,
    name: "অরণী প্রগ্রেসিভ স্কুল",
    type: "Academy",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    image: "/images/schools/aroni-progressive-school.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Aroni+Progressive+School+Nalitabari",
  },
  {
    id: 66,
    name: "লাইসিয়াম প্রিপারেটরি স্কুল",
    type: "Academy",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    image: "/images/schools/lyceum-preparatory-school.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Lyceum+Preparatory+School+Nalitabari",
  },
  {
    id: 67,
    name: "আইডিয়াল স্কুল",
    type: "Academy",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    image: "/images/schools/ideal-school.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Ideal+School+Nalitabari",
  },
  {
    id: 68,
    name: "আনোয়ারা হাশেম মডেল একাডেমি",
    type: "Academy",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    image: "/images/schools/anowara-hashem-model-academy.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Anoyara+Hasem+Model+Academy+Nalitabari",
  },

];

export default schools;