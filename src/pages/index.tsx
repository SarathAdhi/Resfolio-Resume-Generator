import PageLayout from "@layouts/PageLayout";
import Link from "next/link";
import { Button } from "rsuite";
import ResumeTips from "@modules/Home/ResumeTips";

export default function Home() {
  return (
    <PageLayout className="flex-c gap-10">
      <h1 className="text-4xl md:text-6xl text-center text-blue-600 font-serif leading-none">
        The Ultimate Online Resume Builder
      </h1>

      <div className="flex-c gap-10 max-w-full w-[900px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10">
          <div className="flex flex-col items-center md:items-start gap-8">
            <h1 className="font-serif text-4xl text-center md:text-left md:text-6xl text-black leading-none">
              Boost your changes of landing that dream job
            </h1>

            <div className="grid place-content-start gap-2">
              <Button as={Link} appearance="primary" href="/resume">
                Create a Resume
              </Button>

              <span>No Regristration required</span>
            </div>
          </div>

          <img
            className="hero-section-md md:hero-section w-80 border border-black rounded-md"
            src="templates/template-1.png"
          />
        </div>

        <ResumeTips />
      </div>
    </PageLayout>
  );
}
