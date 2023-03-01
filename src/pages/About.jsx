import React from "react";

function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="flex-grow">
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div class="md:max-w-2xl lg:max-w-4xl">
                <h2
                  class="inline-flex items-center rounded-full py-1 px-4 text-blue-600 ring-1 ring-inset ring-blue-600"
                  id="screencasts-title"
                >
                  <span class="font-mono text-sm" aria-hidden="true">
                    i
                  </span>
                  <span class="ml-3 h-3.5 w-px bg-blue-600/20"></span>
                  <span class="ml-3 text-base font-medium tracking-tight">
                    About DigitalFortress
                  </span>
                </h2>
                <p class="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
                  DigitalFortress is a fully student driven Start-up
                  accelerating from VIT-AP <br />
                </p>
                <p class="mt-4 text-lg tracking-tight text-slate-700">
                  At Digital Fortress, our team is dedicated to delivering
                  top-notch security solutions. Comprised of experts in the
                  field, we are driven by our passion for innovation and
                  commitment to protecting your assets.
                </p>
              </div>
            </div>
        <p class="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Meet Our Team:
        </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
