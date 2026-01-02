import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";
import imageAll from "../../assets/c13.jpg";
import image1 from "../../assets/c7.jpg";
import image2 from "../../assets/c15.jpg";
import image3 from "../../assets/c2.jpg";
import image5 from "../../assets/c3.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import ModComp from "./ModComp";
export default function Cards() {
  return (
    <div className=" gap-2 grid grid-cols-12 grid-rows-2 mid:grid-cols-12 mid:grid-rows-2">
      <Card className="col-span-12 sm:col-span-4 mid:col-span-6  lg:col-span-4 h-75 overflow-hidden">
        <CardHeader className="absolute z-10 top-1 flex-col items-start!">
          <p className="text-tiny text-gray-400 uppercase font-bold">
            What to Learn
          </p>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover hover:scale-125 transition-all duration-500"
          src={image1}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <h4 className="text-black text-shadow-purple-200 text-shadow-lg font-bold lg:text-xl text-md">
              Islamic Courses
            </h4>
          </div>
          <ModComp
            title="Islamic Courses & Quranic Lessons"
            content={[
              "We offer personalized one-to-one sessions with our qualified and experienced teachers, tailored to your needs. Whether you're interested in Recitation, Tajweed, Hifz, or Stories of the Prophets, we will design a program specifically suited to your goals.",
            ]}
            trigger={
              <Button
                className="text-tiny pe-0 btn"
                color="primary"
                radius="full"
                size="sm"
              >
                Get Info About It.
              </Button>
            }
          />
        </CardFooter>
      </Card>

      <Card className="col-span-12 sm:col-span-4 mid:col-span-6  lg:col-span-4 h-75 overflow-hidden">
        <CardHeader className="absolute z-10 top-1 flex-col items-start!">
          <p className="text-tiny text-gray-400 uppercase font-bold">
            ECA or "Ammeyya masreyya"
          </p>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover  hover:scale-125 transition-all duration-500"
          src={image5}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <h4 className="text-black text-shadow-purple-200 text-shadow-lg font-bold lg:text-xl text-sm">
              Egyptian Colloquial Arabic
            </h4>
          </div>
          <ModComp
            title='Egyptian Colloquial Arabic (ECA or "Ammeyya masreyya")'
            content={[
              "With over 107 million speakers, Egyptian Arabic (Masry). Thanks to Egypt’s cinematic and musical influence, Masry is widely understood across the Arab world. Mastering Egyptian Arabic opens doors to culture, travel, and conversations with Arabic speakers everywhere.",
            ]}
            trigger={
              <Button
                className="text-tiny pe-0 btn"
                color="primary"
                radius="full"
                size="sm"
              >
                Get Info About It.
              </Button>
            }
          />
        </CardFooter>
      </Card>

      <Card className="col-span-12 sm:col-span-4 mid:col-span-6  lg:col-span-4 h-75 overflow-hidden">
        <CardHeader className="absolute z-10 top-1 flex-col items-start!">
          <p className="text-tiny text-gray-400 uppercase font-bold">
            Supercharged
          </p>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover  hover:scale-125 transition-all duration-500"
          src={image3}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <h4 className="text-black text-shadow-purple-200 text-shadow-lg font-bold lg:text-xl text-md">
              Arabic for Residents
            </h4>
          </div>
          <ModComp
            title="Arabic for Residents"
            content={[
              "Learning Arabic unlocks the secrets of Egyptian culture, enhances daily interactions, and opens new opportunities.              Discover the beauty of the language, deepen your understanding of customs and history, and connect with locals. Yalla start your Arabic journey!",
            ]}
            trigger={
              <Button
                className="text-tiny pe-0 btn"
                color="primary"
                radius="full"
                size="sm"
              >
                Get Info About It.
              </Button>
            }
          />
        </CardFooter>
      </Card>

      <Card
        isFooterBlurred
        className="w-full h-75 col-span-12 sm:col-span-5 overflow-hidden mid:col-span-6  lg:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start"></CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full  object-cover hover:scale-125 transition-all duration-500"
          src={image2}
        />
        <CardFooter className="absolute  bg-black/40 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <h4 className="text-black text-shadow-purple-200 text-shadow-lg font-bold lg:text-xl text-md">
              Explore Egypt
              <br className="md:hidden" /> with Us
            </h4>
          </div>
          <ModComp
            title="Explore Egypt with Us"
            content={[
              "Beyond lessons, we are excited to accompany you on a journey through Egypt’s rich culture. Enjoy activities like a tour of Khan El Khalili, visits to historic landmarks, mosques, and churches. Together, we can explore Egyptian cuisine and engage in creative workshops such as calligraphy and pottery.",
            ]}
            trigger={
              <Button
                className="text-tiny pe-0 btn"
                color="primary"
                radius="full"
                size="sm"
              >
                Get Info About It.
              </Button>
            }
          />
        </CardFooter>
      </Card>

      <Card
        isFooterBlurred
        className=" h-75 col-span-12 sm:col-span-7 mid:col-span-12 lg:col-span-7 mid:row-span-2 overflow-hidden"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-gray-400 uppercase font-bold">
            MSA or "Fus-ha"
          </p>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover  hover:scale-125 transition-all duration-500"
          src={imageAll}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <h4 className="text-black  text-shadow-purple-200 text-shadow-lg font-bold lg:text-xl text-md">
              Modern Standard
              <br className="md:hidden" />
              Arabic
            </h4>
          </div>
          <ModComp
            title='Modern Standard Arabic (MSA or "Fus-ha")'
            content={[
              "Is the formal, literary language that unites the Arab world. Spoken across diverse cultures, MSA is essential for academia, media, literature, religion, and diplomacy. Unlike local dialects, it is widely studied across the MENA region and bridges communication across Arabic-speaking communities. Mastering MSA opens doors to a rich history and cross-cultural connections.",
            ]}
            trigger={
              <Button
                className="text-tiny pe-0 btn"
                color="primary"
                radius="full"
                size="sm"
              >
                Get Info About It.
              </Button>
            }
          />
        </CardFooter>
      </Card>
    </div>
  );
}
