import * as React from "react"
import ThemeToggle from "./components/theme-toggle"
import TimeCounter from "./components/time-counter"
import { MoveRight } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      <main className="container mx-auto px-4 py-8 md:px-8 lg:px-12 max-w-5xl">
        <div className="flex justify-end">
          <ThemeToggle />
        </div>

        <div className="mt-12 md:mt-16 lg:mt-20 grid gap-12 md:gap-16 lg:gap-20">
          <section className="grid gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Hi, I&apos;m Ahad.</h1>

            <div className="grid gap-6 text-lg md:text-xl leading-relaxed">
              <p>
                I&apos;ve been a Principal Product Manager at{" "}
                <span className="font-medium hover:underline">
                  <a href="https://www.gooten.com/" target="_blank" rel="noopener noreferrer">
                    Gooten
                  </a>
                </span>{" "}
                for the last <TimeCounter startDate="2021-11-09T08:00:00" />.
              </p>

              <p>
                I live in New York City, by way of Columbus, by way of Mumbai. Keep up with me on{" "}
                <a
                  href="https://x.com/plumberahad"
                  className="font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>{" "}
                and{" "}
                <a
                  href="https://www.linkedin.com/in/ahad-plumber/"
                  className="font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>
          </section>

          <section className="grid gap-8">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground">Previously</h2>

            <div className="grid gap-8">
              <div className="group grid gap-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-medium group-hover:underline">
                    <a
                      href="https://www.zestmoney.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      ZestMoney
                      <MoveRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </h3>
                  <span className="text-muted-foreground">Jan. 2020 to Mar. 2021</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="text-muted-foreground">Product Manager</p>
                  <span className="text-muted-foreground">1 yr 2 mos</span>
                </div>
              </div>

              <div className="group grid gap-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-medium group-hover:underline">
                    <a href="#" className="flex items-center gap-2">
                      Retra
                      <MoveRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </h3>
                  <span className="text-muted-foreground">Jan. 2018 to Jan. 2020</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="text-muted-foreground">Founding Team</p>
                  <span className="text-muted-foreground">2 yrs</span>
                </div>
              </div>

              <div className="group grid gap-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-medium group-hover:underline">
                    <a
                      href="https://getflex.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Flex
                      <MoveRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  </h3>
                  <span className="text-muted-foreground">Mar. 2021 to Nov. 2021</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="text-muted-foreground">Product Manager</p>
                  <span className="text-muted-foreground">8 mos</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

