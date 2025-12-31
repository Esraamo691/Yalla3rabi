"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const videos = [
  {
    src: "https://www.youtube.com/embed/yClJUErthlo",
    title: "Learning Arabic Through Stories",
  },
  {
    src: "https://www.youtube.com/embed/8TFoC9Vler4",
    title: "Why Arabic Sounds Beautiful",
  },
  {
    src: "https://www.youtube.com/embed/3PxZZj1OWu8",
    title: "Arabic for Beginners – First Steps",
  },
  {
    src: "https://www.youtube.com/embed/4cvTx6GPNQk",
    title: "Common Arabic Phrases You Hear Daily",
  },
  {
    src: "https://www.youtube.com/embed/U7ovA7bJsWI",
    title: "Speaking Arabic with Confidence",
  },
  {
    src: "https://www.youtube.com/embed/N9gIBDeN7PE",
    title: "Arabic Pronunciation Made Easy",
  },
  {
    src: "https://www.youtube.com/embed/7q4Fm320gcU",
    title: "How Arabs Express Emotions",
  },
  {
    src: "https://www.youtube.com/embed/Zuiydo3Yxzg",
    title: "Real Conversations in Arabic",
  },
];

export function VoiceSlider() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2500,
          stopOnInteraction: false,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-6xl"
    >
      <CarouselContent>
        {videos.map((video, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card className="overflow-hidden rounded-2xl pt-0 bg-purple-200">
              <CardContent className="p-0 ">
                <div className="aspect-video w-full ">
                  <iframe
                    src={video.src}
                    title={video.title}
                    className="w-full h-full bg-purple-200"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Video Title */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                    {video.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
