import React from "react";
import { Separator } from "../ui/separator";

export const AboutSection = (): JSX.Element => {
  const positions = [
    {
      title: "General Secretary",
      name: "Shreetej Meshram",
    },
    {
      title: "Joint Secretary",
      name: "Ojas Dhargave",
    },
  ];

  return (
    <section id="about" className="py-16 px-4 lg:px-8 bg-[#111111]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - DOT Club Logo */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#e8ff8c] to-[#a7c430] flex items-center justify-center">
              <img
                src="/vector.svg"
                alt="DOT Club Logo"
                className="w-40 h-40 object-contain"
              />
            </div>
          </div>

          {/* Right Column - About Content */}
          <div>
            <div className="mb-8">
              <div className="text-6xl md:text-7xl font-light italic text-[#e8ff8c] mb-4">
                About
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                DOT CLUB
              </h2>
              <div className="flex items-center justify-between text-xl text-white/80">
                <span>@IIITV</span>
                <span>#25</span>
              </div>
            </div>

            <p className="text-lg text-white/70 leading-relaxed mb-8">
              DOT Club is the student-run design community of IIIT Vadodara
              (Gandhinagar Campus). We explore UI/UX, branding, illustration, 3D
              design, and Blender, while building a strong design culture on
              campus. From workshops to event identities and creative projects,
              DOT connects ideas with execution and creativity with impact.
            </p>

            <div className="space-y-6">
              {positions.map((position, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="text-white/70 text-lg">
                    {position.title}
                  </div>
                  <Separator className="flex-1 mx-6 bg-[#333333]" />
                  <div className="text-2xl font-light italic text-[#e8ff8c]">
                    {position.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};