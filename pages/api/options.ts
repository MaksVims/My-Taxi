import {NextApiRequest, NextApiResponse} from "next";
import {IOption} from "./types";


const Options: IOption[] = [
  {
    id: 1,
    title: 'Economy',
    url: '/images/options/econom.png',
    multiplier: 36
  },
  {
    id: 2,
    title: 'Comfort',
    url: '/images/options/comfort.png',
    multiplier: 52
  },
  {
    id: 3,
    title: 'Comfort+',
    url: '/images/options/comfort+.png',
    multiplier: 66
  },
  {
    id: 4,
    title: 'Business',
    url: '/images/options/business.png',
    multiplier: 114
  },
  {
    id: 5,
    title: 'Premium',
    url: '/images/options/premium.png',
    multiplier: 150
  }
]

export default function handler(res: NextApiRequest, req: NextApiResponse) {
  if (res.method === 'GET') {
    req.status(200).json(Options)
  }

}