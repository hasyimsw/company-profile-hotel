// rooms images
import Room1Img from '/img/rooms/1.png';
import Room1ImgLg from '/img/rooms/1-lg.png';
import Room2Img from '/img/rooms/2.png';
import Room2ImgLg from '/img/rooms/2-lg.png';
import Room3Img from '/img/rooms/3.png';
import Room3ImgLg from '/img/rooms/3-lg.png';
import Room4Img from '/img/rooms/4.png';
import Room4ImgLg from '/img/rooms/4-lg.png';
import Room5Img from '/img/rooms/5.png';
import Room5ImgLg from '/img/rooms/5-lg.png';
import Room6Img from '/img/rooms/6.png';
import Room6ImgLg from '/img/rooms/6-lg.png';
import Room7Img from '/img/rooms/7.png';
import Room7ImgLg from '/img/rooms/7-lg.png';
import Room8Img from '/img/rooms/8.png';
import Room8ImgLg from '/img/rooms/8-lg.png';
import Room9Img from '/img/rooms/9.png';
import Room9ImgLg from '/img/rooms/9-lg.png';
// import icons
import {
  FaWifi,
  FaCoffee,
  FaBath,
  FaParking,
  FaSwimmingPool,
  FaHotdog,
  FaStopwatch,
  FaCocktail,
} from 'react-icons/fa';

export const roomData = [
  {
    id: 1,
    name: 'Kamar Mewah',
    description:
      'Nikmati pengalaman tinggal yang mewah di kamar kami yang penuh dengan sentuhan elegan dan desain modern. Dilengkapi dengan tempat tidur king-size, furnitur mewah, dan pemandangan spektakuler, kamar ini menawarkan kenyamanan tingkat tinggi dan suasana yang tenang.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 30,
    maxPerson: 1,
    price: 115,
    image: Room1Img,
    imageLg: Room1ImgLg,
  },
  {
    id: 2,
    name: 'Suite Keluarga',
    description:
      ' Suite luas ini dirancang khusus untuk kenyamanan keluarga Anda. Dengan dua kamar tidur terpisah dan ruang tamu yang luas, suite ini menyediakan ruang yang cukup untuk seluruh keluarga Anda bersantai dan bersenang-senang. Dilengkapi dengan fasilitas modern dan dekorasi yang menyenangkan, ini adalah pilihan ideal untuk liburan bersama keluarga.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 70,
    maxPerson: 2,
    price: 220,
    image: Room2Img,
    imageLg: Room2ImgLg,
  },
  {
    id: 3,
    name: 'Kamar Eksekutif',
    description:
      'Untuk tamu bisnis yang menginginkan kenyamanan dan fasilitas lengkap, kamar eksekutif kami adalah pilihan yang sempurna. Dilengkapi dengan meja kerja yang luas, koneksi Wi-Fi cepat, dan fasilitas konferensi, kamar ini menciptakan lingkungan yang ideal untuk bekerja dan bersantai setelah hari yang sibuk.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 50,
    maxPerson: 3,
    price: 265,
    image: Room3Img,
    imageLg: Room3ImgLg,
  },
  {
    id: 4,
    name: 'Kamar Kelas Menengah',
    description:
      'Kamar nyaman ini menyediakan akomodasi berkualitas dengan harga terjangkau. Dilengkapi dengan fasilitas modern dan tempat tidur yang nyaman, kamar ini adalah pilihan ideal untuk wisatawan yang mencari kenyamanan dan nilai terbaik.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 50,
    maxPerson: 4,
    price: 289,
    image: Room4Img,
    imageLg: Room4ImgLg,
  },
  {
    id: 5,
    name: 'Suite Romantis',
    description:
      'Suite ini diciptakan khusus untuk pasangan yang mencari pengalaman romantis. Dengan dekorasi yang anggun dan suasana yang intim, suite ini menawarkan privasi dan kenyamanan. Nikmati mandi bathtub berendam bersama atau bersantai di balkon pribadi sambil menikmati pemandangan matahari terbenam yang memukau.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 90,
    maxPerson: 5,
    price: 320,
    image: Room5Img,
    imageLg: Room5ImgLg,
  },
  {
    id: 6,
    name: 'Kamar Keluarga Premium',
    description:
      'Kamar ini dirancang untuk kenyamanan keluarga besar. Dengan tempat tidur tambahan dan fasilitas lengkap, kamar ini menawarkan ruang yang cukup untuk seluruh keluarga berkumpul. Anda dapat menikmati waktu bersama di area ruang tamu yang luas atau bersantai di teras pribadi dengan pemandangan taman yang indah.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 45,
    maxPerson: 6,
    price: 344,
    image: Room6Img,
    imageLg: Room6ImgLg,
  },
  {
    id: 7,
    name: 'Kamar Superior',
    description:
      'Nikmati pemandangan spektakuler langsung dari kamar tidur Anda. Dilengkapi dengan jendela besar yang menghadap ke laut, kamar ini menawarkan pengalaman menginap yang luar biasa. Tidur di atas kasur yang nyaman sambil mendengarkan suara ombak yang menenangkan adalah cara sempurna untuk bersantai dan meremajakan diri.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 84,
    maxPerson: 7,
    price: 389,
    image: Room7Img,
    imageLg: Room7ImgLg,
  },
  {
    id: 8,
    name: 'Kamar Tematik',
    description:
      'Untuk tamu yang mencari pengalaman yang unik, kami menawarkan kamar tematik yang menarik. Setiap kamar memiliki tema yang berbeda, mulai dari desain retro yang klasik hingga gaya modern yang kontemporer. Setiap elemen dirancang dengan teliti untuk menciptakan atmosfer yang memikat dan tak terlupakan.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 48,
    maxPerson: 8,
    price: 499,
    image: Room8Img,
    imageLg: Room8ImgLg,
  },
  {
    id: 9,
    name: 'Kamar Hemat',
    description:
      'Untuk tamu yang menginginkan kenyamanan tanpa harus menguras kantong, kami menawarkan kamar hemat yang nyaman dan fungsional. Dilengkapi dengan semua fasilitas dasar yang diperlukan, kamar ini memberikan nilai luar biasa tanpa mengorbankan kenyamanan.',
    facilities: [
      { name: 'Wifi', icon: <FaWifi /> },
      { name: 'Coffee', icon: <FaCoffee /> },
      { name: 'Bath', icon: <FaBath /> },
      { name: 'Parking Space', icon: <FaParking /> },
      { name: 'Swimming Pool', icon: <FaSwimmingPool /> },
      { name: 'Breakfast', icon: <FaHotdog /> },
      { name: 'GYM', icon: <FaStopwatch /> },
      { name: 'Drinks', icon: <FaCocktail /> },
    ],
    size: 64,
    maxPerson: 6,
    price: 227,
    image: Room9Img,
    imageLg: Room9ImgLg,
  },
];
