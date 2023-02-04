import React from "react";

function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="flex-grow">
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12">
                <h2
                  class="inline-flex items-center rounded-full py-1 px-4 text-blue-600 ring-1 ring-inset ring-blue-600"
                  id="screencasts-title"
                >
                  <span class="font-mono text-sm" aria-hidden="true">
                    02
                  </span>
                  <span class="ml-3 h-3.5 w-px bg-blue-600/20"></span>
                  <span class="ml-3 text-base font-medium tracking-tight">
                    Screencasts
                  </span>
                </h2>
                <p class="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
                  Over an hour of high quality, step-by-step video content to
                  sharpen your icon design workflow.
                </p>
                <p class="mt-4 text-lg tracking-tight text-slate-700">
                  Learn how to design your very first icons in a series of
                  screencasts that will teach you everything you need to know to
                  go from beginner to pro in just over an hour.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
