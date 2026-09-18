"use client";

import type { CSSProperties } from "react";

type ShootingStarStyle = CSSProperties & {
  "--star-top": string;
  "--star-left": string;
  "--star-width": string;
  "--star-duration": string;
  "--star-delay": string;
  "--star-angle": string;
};

const shootingStars = [
  {
    id: 1,
    top: "-5%",
    left: "85%",
    width: "210px",
    duration: "6s",
    delay: "-1s",
    angle: "-32deg",
  },
  {
    id: 2,
    top: "5%",
    left: "105%",
    width: "130px",
    duration: "7s",
    delay: "-4s",
    angle: "-35deg",
  },
  {
    id: 3,
    top: "15%",
    left: "95%",
    width: "270px",
    duration: "8s",
    delay: "-6s",
    angle: "-30deg",
  },
  {
    id: 4,
    top: "28%",
    left: "110%",
    width: "170px",
    duration: "6.5s",
    delay: "-3s",
    angle: "-34deg",
  },
  {
    id: 5,
    top: "40%",
    left: "92%",
    width: "240px",
    duration: "7.5s",
    delay: "-7s",
    angle: "-32deg",
  },
  {
    id: 6,
    top: "52%",
    left: "115%",
    width: "115px",
    duration: "6s",
    delay: "-5s",
    angle: "-36deg",
  },
  {
    id: 7,
    top: "63%",
    left: "100%",
    width: "200px",
    duration: "8.5s",
    delay: "-8s",
    angle: "-30deg",
  },
  {
    id: 8,
    top: "75%",
    left: "110%",
    width: "145px",
    duration: "7s",
    delay: "-2s",
    angle: "-34deg",
  },
  {
    id: 9,
    top: "8%",
    left: "120%",
    width: "95px",
    duration: "5.5s",
    delay: "-4.5s",
    angle: "-33deg",
  },
  {
    id: 10,
    top: "34%",
    left: "125%",
    width: "185px",
    duration: "8s",
    delay: "-1.5s",
    angle: "-31deg",
  },
  {
    id: 11,
    top: "58%",
    left: "120%",
    width: "125px",
    duration: "7.5s",
    delay: "-6.5s",
    angle: "-35deg",
  },
  {
    id: 12,
    top: "2%",
    left: "130%",
    width: "225px",
    duration: "9s",
    delay: "-7.5s",
    angle: "-30deg",
  },
];

export default function ShootingStars() {
  return (
    <div className="shooting-stars" aria-hidden="true">
      {shootingStars.map((star) => {
        const style: ShootingStarStyle = {
          "--star-top": star.top,
          "--star-left": star.left,
          "--star-width": star.width,
          "--star-duration": star.duration,
          "--star-delay": star.delay,
          "--star-angle": star.angle,
        };

        return (
          <span
            key={star.id}
            className="shooting-star"
            style={style}
          />
        );
      })}
    </div>
  );
}