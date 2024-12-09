"use client";
import { Moon, Sun } from "lucide-react";
import {
  FaReact,
  FaPhp,
  FaJs,
  FaNode,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FaFlutter, FaDartLang } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const { setTheme } = useTheme();
  return (
    <>
      <nav className="sticky top-0">
        <div className="flex h-14 p-4 justify-between items-center backdrop-blur ">
          <div></div>
          <div className="space-x-4 flex items-center">
            <Link href={"/"}>Home</Link>
            <Link href={"#about"}>About</Link>
            <Link href={"#project"}>Project</Link>
            <Link href={"#contact"}>Contact</Link>
          </div>
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
      <div className="p-8 text-center">
        <h1 className="font-bold text-4xl">Software Development</h1>
        <h2 className="font-bold text-3xl">Fullstack Web Development</h2>
        <h2 className="font-bold text-3xl">Mobile App Development</h2>
      </div>
      <div className="p-8 flex justify-center" id="about">
        <Tabs defaultValue="overall" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overall">Overall</TabsTrigger>
            <TabsTrigger value="web">Web</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
          </TabsList>
          <TabsContent value="overall">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Tech stcak overall</CardTitle>
                <CardDescription>
                  {`Tech stack usually use for development.`}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  Web Development
                  <div className="flex space-x-4">
                    <div>
                      <FaReact className="text-4xl" />
                    </div>
                    <div>
                      <RiNextjsLine className="text-4xl" />
                    </div>
                    <div>
                      <FaJs className="text-4xl" />
                    </div>
                    <div>
                      <FaPhp className="text-4xl" />
                    </div>
                    <div>
                      <FaNode className="text-4xl" />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div>
                  Mobile App Development
                  <div className="flex space-x-4">
                    <div>
                      <FaFlutter className="text-4xl" />
                    </div>
                    <div>
                      <FaDartLang className="text-4xl" />
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="web">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Web dev techstack</CardTitle>
                <CardDescription>
                  {`Tech stack usually use for web development.`}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  Frontend
                  <div className="flex space-x-4">
                    <div>
                      <FaReact className="text-4xl" />
                    </div>
                    <div>
                      <RiNextjsLine className="text-4xl" />
                    </div>
                    <div>
                      <FaJs className="text-4xl" />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div>
                  Backend
                  <div className="flex space-x-4">
                    <div>
                      <FaPhp className="text-4xl" />
                    </div>
                    <div>
                      <FaNode className="text-4xl" />
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="mobile">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  Mobile app dev techstack
                </CardTitle>
                <CardDescription>
                  {`Tech stack usually use for mobile app development.`}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  Frontend
                  <div className="flex space-x-4">
                    <div>
                      <FaFlutter className="text-4xl" />
                    </div>
                    <div>
                      <FaDartLang className="text-4xl" />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div>
                  Backend
                  <div className="flex space-x-4">
                    <div>
                      <FaPhp className="text-4xl" />
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <div
        className="p-8 flex flex-col items-center justify-center"
        id="project"
      >
        <div>
          <h1 className="font-bold text-4xl mb-8">Project list</h1>
        </div>
        <div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-sm -z-10"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="invisible md:visible" />
            <CarouselNext className="invisible md:visible" />
          </Carousel>
        </div>
      </div>
      <div
        className="p-8 flex flex-col items-center justify-center"
        id="contact"
      >
        <div>
          <h1 className="font-bold text-4xl mb-8">Mutual? just dm!</h1>
        </div>
        <div className="flex space-x-4">
          <div>
            <Link href={"https://github.com/DriyandoAndreas"}>
              <FaGithub className="text-4xl" />
            </Link>
          </div>
          <div>
            <Link
              href={"https://www.linkedin.com/in/driyando-andreas-tambunan/"}
            >
              <FaLinkedin className="text-4xl" />
            </Link>
          </div>
          <div>
            <Link href={"https://www.instagram.com/zodatzo/"}>
              <FaInstagram className="text-4xl" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
