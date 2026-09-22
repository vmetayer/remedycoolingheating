import type { Metadata } from "next";
import CityPage, { type CityPageData } from "@/components/CityPage";

export const metadata: Metadata = {
  title: "HVAC Repair & Installation in Taunton, MA",
  description:
    "Taunton's hometown HVAC tech. AC repair, heating repair, heat pumps & water heaters — from a licensed, EPA-certified pro based right here since 2014. Call us today.",
};

const data: CityPageData = {
  slug: "hvac-taunton-ma",
  city: "Taunton",
  state: "MA",
  driveTime: "Minutes",
  paragraphs: [
    "Taunton is home base. Remedy Cooling and Heating has operated out of Taunton since 2014, which means when your furnace dies in Whittenton or your AC gives out in East Taunton, I'm not fighting an hour of highway to reach you — I'm around the corner.",
    "I know Taunton's housing stock inside and out: the older colonials and capes around Oakland and Whittenton still running aging oil-fired boilers, the ranches off County Street with original ductwork, and the newer builds in East Taunton that need proper maintenance to keep their warranties valid. A lot of Taunton homes are prime candidates for oil-to-heat-pump conversions — and Mass Save rebates up to $10,000 can cover a serious chunk of that switch.",
    "Because I'm local, Taunton customers get my fastest response times, and I stand behind every job with the same track record that earned me 384 hires and a Top Pro rating every year since 2017. If you've seen my truck around town, that's because I'm probably working on your neighbor's house.",
  ],
  reviews: [
    {
      quote:
        "I've used Remy three times now. Every time: on time, honest, fair price. He told me my furnace didn't need a full replacement when another company said it did. Saved me $4,000.",
      name: "Sarah M.",
      service: "Heating Repair",
    },
    {
      quote:
        "Local guy, showed up fast, and knew exactly what was wrong with our old oil boiler. Walked us through the heat pump rebate options with zero pressure. Highly recommend.",
      name: "Dave R.",
      service: "Heat Pump Consultation",
    },
  ],
  faqs: [
    {
      q: "How fast can you get to Taunton?",
      a: "Taunton is my home base — I'm often able to get there same day, sometimes within the hour for emergencies. Call and I'll give you an honest ETA.",
    },
    {
      q: "Do you help with Mass Save rebates in Taunton?",
      a: "Yes. Many Taunton homes still heat with oil, and Mass Save offers rebates up to $10,000 for whole-home heat pump conversions. I'll walk you through what your house qualifies for.",
    },
    {
      q: "Do you service older Taunton homes with oil heat?",
      a: "Constantly. Older boilers and oil-fired systems around Whittenton and Oakland are a big part of my work — repairs, maintenance, and full conversions.",
    },
  ],
};

export default function Page() {
  return <CityPage data={data} />;
}
