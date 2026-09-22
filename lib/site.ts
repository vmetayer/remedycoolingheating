export const PHONE_DISPLAY = "(617) 388-3271";
export const PHONE_TEL = "tel:+16173883271";
export const PHONE_SMS = "sms:+16173883271";
export const EMAIL = "Remedyrx2@yahoo.com";
export const SITE_URL = "https://remedycoolingheating.com";
export const THUMBTACK_URL =
  "https://www.thumbtack.com/ma/taunton/central-air-conditioning-installation/remedy-cooling-heating/service/264508317243270239";

export const SERVICES = [
  {
    slug: "ac-repair",
    name: "AC Repair",
    short: "Warm air, ice buildup, short cycling — diagnosed and fixed fast.",
  },
  {
    slug: "ac-installation",
    name: "AC Installation",
    short: "Properly sized central AC systems, installed right the first time.",
  },
  {
    slug: "heating-repair",
    name: "Heating Repair",
    short: "Furnaces, boilers, and heat pumps back up and running.",
  },
  {
    slug: "heat-pump-installation",
    name: "Heat Pump & Mini-Split",
    short: "Ductless comfort plus Mass Save rebates up to $10K.",
  },
  {
    slug: "water-heater",
    name: "Water Heaters",
    short: "Repair or replace — gas, electric, and tankless.",
  },
  {
    slug: "emergency-hvac",
    name: "Emergency Service",
    short: "No heat or no AC? Call and I'll tell you honestly when I can be there.",
  },
] as const;

export const CITIES = [
  { slug: "hvac-taunton-ma", city: "Taunton", state: "MA" },
  { slug: "hvac-brockton-ma", city: "Brockton", state: "MA" },
  { slug: "hvac-boston-ma", city: "Boston", state: "MA" },
  { slug: "hvac-quincy-ma", city: "Quincy", state: "MA" },
  { slug: "hvac-dorchester-ma", city: "Dorchester", state: "MA" },
  { slug: "hvac-providence-ri", city: "Providence", state: "RI" },
] as const;

export const AREA_SERVED = [
  "Taunton MA",
  "Brockton MA",
  "Boston MA",
  "Quincy MA",
  "Dorchester MA",
  "Providence RI",
];
