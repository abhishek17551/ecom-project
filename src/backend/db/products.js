import { v4 as uuid } from "uuid";

import {ecom_logo, landing_image, signup_icon, login_icon, canon_eos_6d, nikkor_200mm, dsmc2, redvolt_microv, fisheye, nikon_z9 ,
  angelbird_ssd, angelbird_av_pro, canon_eos_m50, delkin_card_reader, formatt_filterkit, nanlite_p200, nanlite_pavotube, nikkor_z_58mm,
  nikkor_z_400mm, nikkor_z_mc_105mm, nikon_d6, nikon_d500, nikon_z6, nikkor_micro, peak_design_backpack, peak_design_tripod,
  red_ranger_gemini, red_v_raptor, sachtler_tripod_cage, shure_vocal_virophone, velvet_light_mini} from '../../frontend/assets/index.js'

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const productsList = [
  {
    _id: uuid(),
    title: "Nanlite Pavotube",
    categoryName: "display-lights",
    image: nanlite_pavotube ,
    price: 30000,
    discount: 10,
    discountedprice:  27000,
    rating: 4 
  },

  {
    _id: uuid(),
    title: "VELVET Light MINI 1",
    categoryName: "display-lights",
    image: velvet_light_mini ,
    price:  45000,
    discount:  15,
    discountedprice:  38250,
    rating:  2
  },

  {
    _id: uuid(),
    title: "Nanlite P-200",
    categoryName: "display-lights",
    image:  nanlite_p200,
    price:  20000,
    discount:  15,
    discountedprice:  17000,
    rating: 4 
  },

  {
    _id: uuid(),
    title: "Red DSMC2 display",
    categoryName: "display-lights",
    image: dsmc2 ,
    price:  25000,
    discount:  20,
    discountedprice:  20000,
    rating: 4 
  },

  {
    _id: uuid(),
    title: "Peak Design Travel Tripod",
    categoryName: "accessories",
    image:  peak_design_tripod,
    price:  15000,
    discount:  10,
    discountedprice:  13500,
    rating: 2 
  },

  {
    _id: uuid(),
    title: "Sachtler Roll-Along Tripod Cage",
    categoryName: "accessories",
    image: sachtler_tripod_cage,
    price:  12000,
    discount:  10,
    discountedprice:  10800,
    rating:  3
  },

  {
    _id: uuid(),
    title: "Peak Design Everyday Backpack 20L v2",
    categoryName: "accessories",
    image:  peak_design_backpack,
    price:  5000,
    discount:  10,
    discountedprice:  4500,
    rating: 5 
  },

  {
    _id: uuid(),
    title: "Angelbird AV PRO  256 GB | 2 PACK",
    categoryName: "accessories",
    image:  angelbird_av_pro,
    price:  25000,
    discount:  15,
    discountedprice:  21250,
    rating: 5 
  },

  {
    _id: uuid(),
    title: "Delkin USB 3.0 Memory Card Reader",
    categoryName: "accessories",
    image:  delkin_card_reader,
    price:  2500,
    discount:  10,
    discountedprice:  2250,
    rating:  2
  },

  {
    _id: uuid(),
    title: "Formatt Firecrest  Filter Kit ",
    categoryName: "accessories",
    image:  formatt_filterkit,
    price:  40000,
    discount:  15,
    discountedprice:  34000,
    rating:  3
  },

  {
    _id: uuid(),
    title: "Angelbird 2TB 3.1 Internal SSD",
    categoryName: "accessories",
    image:  angelbird_ssd,
    price:  55000,
    discount:  20,
    discountedprice:  44000,
    rating:  5
  },

  {
    _id: uuid(),
    title: "Red Micro V Battery",
    categoryName: "accessories",
    image:  redvolt_microv,
    price:  10000,
    discount:  10,
    discountedprice:  9000,
    rating:  4
  },

  {
    _id: uuid(),
    title: "Canon EOS 6D",
    categoryName: "camera",
    image:  canon_eos_6d,
    price:  75000,
    discount:  10,
    discountedprice:  67500,
    rating: 4 
  },

  {
    _id: uuid(),
    title: "Canon EOS M50",
    categoryName: "camera",
    image:  canon_eos_m50,
    price:  55000,
    discount:  20,
    discountedprice:  44000,
    rating:  5
  },

  {
    _id: uuid(),
    title: "Nikon D6",
    categoryName: "camera",
    image:  nikon_d6,
    price:  35000,
    discount:  15,
    discountedprice:  29750,
    rating:  3
  },

  {
    _id: uuid(),
    title: "Nikon D500",
    categoryName: "camera",
    image:  nikon_d500,
    price:  25000,
    discount:  15,
    discountedprice:  21250,
    rating:  4
  },

  {
    _id: uuid(),
    title: "Nikon Z6",
    categoryName: "camera",
    image:  nikon_z6,
    price:  25000,
    discount:  20,
    discountedprice:  20000,
    rating:  3
  },

  {
    _id: uuid(),
    title: "Nikon Z9",
    categoryName: "camera",
    image:  nikon_z9,
    price:  42000,
    discount:  15,
    discountedprice:  35700,
    rating:  5
  },

  {
    _id: uuid(),
    title: "Red Ranger Gemini",
    categoryName: "camera",
    image:  red_ranger_gemini,
    price:  85000,
    discount:  25,
    discountedprice:  63750,
    rating:  3
  },

  {
    _id: uuid(),
    title: "Fisheye Nikkor",
    categoryName: "lens",
    image:  fisheye,
    price:  52000,
    discount:  10,
    discountedprice:  46800,
    rating: 3 
  },

  {
    _id: uuid(),
    title: "Nikkor 200MM",
    categoryName: "lens",
    image:  nikkor_200mm,
    price:  32000,
    discount:  15,
    discountedprice:  27200,
    rating:  4
  },

  {
    _id: uuid(),
    title: "Nikkor Z 400MM",
    categoryName: "lens",
    image:  nikkor_z_400mm,
    price:  15000,
    discount:  10,
    discountedprice:  13500,
    rating:  5
  },

  {
    _id: uuid(),
    title: "Nikkor Z MC 105MM",
    categoryName: "lens",
    image:  nikkor_z_mc_105mm,
    price:  18500,
    discount:  20,
    discountedprice:  14800,
    rating:  4
  },

  {
    _id: uuid(),
    title: "Red V Raptor",
    categoryName: "lens",
    image:  red_v_raptor,
    price:  65000,
    discount:  15,
    discountedprice:  55250,
    rating: 3 
  },

  {
    _id: uuid(),
    title: "PCE Micro Nikkor",
    categoryName: "lens",
    image:  nikkor_micro,
    price:  70000,
    discount:  20,
    discountedprice:  56000,
    rating: 5  
  },

  {
    _id: uuid(),
    title: "Nikkor Z 58MM",
    categoryName: "lens",
    image:  nikkor_z_58mm,
    price:  25000,
    discount:  10,
    discountedprice:  22500,
    rating:  3
  },
 
];
