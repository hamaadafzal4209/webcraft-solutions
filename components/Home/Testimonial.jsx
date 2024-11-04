import { cn } from "@/lib/utils";
import Image from "next/image";
import Marquee from "../ui/marquee";

const reviews = [
  {
    name: "Emma Williams",
    username: "CEO, InnovateX",
    body: "The digital strategies provided by this agency have transformed our brand's online presence. Their creativity and dedication are exceptional.",
    img: "https://avatar.vercel.sh/emma",
  },
  {
    name: "Liam Brown",
    username: "Head of Marketing, GrowthWave",
    body: "Their technical expertise and unique insights into digital marketing have significantly boosted our lead generation and customer engagement.",
    img: "https://avatar.vercel.sh/liam",
  },
  {
    name: "Olivia Smith",
    username: "Founder, TechForward",
    body: "The team's innovative solutions and attention to detail have helped our startup stand out in a competitive market.",
    img: "https://avatar.vercel.sh/olivia",
  },
  {
    name: "James Anderson",
    username: "Product Manager, Venture Labs",
    body: "From strategy to execution, they understand digital trends and implement them seamlessly. We’re seeing great results.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Sophia Johnson",
    username: "Creative Director, Visionary",
    body: "Their blend of creativity and professionalism has been refreshing. They’ve taken our brand’s online presence to new heights.",
    img: "https://avatar.vercel.sh/sophia",
  },
  {
    name: "Noah Davis",
    username: "Operations Manager, TechBridge",
    body: "Their expertise has streamlined our online operations. The results speak for themselves; we’re thrilled with the progress.",
    img: "https://avatar.vercel.sh/noah",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-700 bg-gray-800 hover:bg-gray-700"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          alt={`${name}'s avatar`}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-400">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-gray-300">{body}</blockquote>
    </figure>
  );
};

const TestimonialSlider = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-gray-900 px-4 pt-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">
          What Our Clients Say
        </h2>
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-900 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-900 to-transparent"></div>
    </div>
  );
};

export default TestimonialSlider;
