import ShoeOneImage from './images/1.png';
import ShoeTwoImage from './images/2.png';
import ShoeThreeImage from './images/3.png';
import ShoeFourImage from './images/4.png';
import ShoeFiveImage from './images/5.png';

export interface IShoeDetails {
  id: number;
  name: string;
  img: string;
  cost: string;
  description: string;
}

export const ShoesDetails: IShoeDetails[] = [
  {
    id: 1,
    name: "Nike Air Force 1 '07",
    img: ShoeOneImage,
    cost: "$110",
    description: "The radiance lives on in the Nike Air Force 1 ’07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine."
  },
  {
    id: 2,
    name: "Nike Air Max 2090",
    img: ShoeTwoImage,
    cost: "$180",
    description: "The Nike Air Max 2090 celebrates the future of Air with a design that blends heritage and innovation. The shoe's upper is made with at least 20% recycled content by weight. It features a Max Air unit in the heel for lightweight cushioning."
  },
  {
    id: 3,
    name: "Nike Air Max 90",
    img: ShoeThreeImage,
    cost: "$120",
    description: "The Nike Air Max 90 is a classic running shoe that's been around since 1990. It features a leather and textile upper, a padded collar, a visible Air-Sole unit in the heel, and a rubber outsole."
  },
  {
    id: 4,
    name: "Nike Air Max 95",
    img: ShoeFourImage,
    cost: "$160",
    description: "The Nike Air Max 95 is a running shoe that was released in 1995. It features a leather and textile upper, a padded collar, a visible Air-Sole unit in the heel, and a rubber outsole."
  },
  {
    id: 5,
    name: "Nike Air Max 97",
    img: ShoeFiveImage,
    cost: "$180",
    description: "The Nike Air Max 97 is a running shoe that was released in 1997. It features a leather and textile upper, a padded collar, a visible Air-Sole unit in the heel, and a rubber outsole."
  },
];