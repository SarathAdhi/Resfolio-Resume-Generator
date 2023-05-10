import PageLayout from "@layouts/PageLayout";
import Link from "next/link";
import { Button, Divider } from "rsuite";
import ResumeTips from "@modules/Home/ResumeTips";
import Image from "next/image";

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

          <Image
            width={500}
            height={500}
            className="hero-section-md md:hero-section w-80 border border-black rounded-md"
            src="/templates/template-1.png"
            alt="Hero section template image"
          />
        </div>

        <div className="space-y-4">
          <Divider className="w-full" />
          <p className="text-center text-lg">
            {`Resfolio is the ultimate online resume builder for job seekers who
            want to create a professional and impactful resume in minutes. With
            Resfolio, you can easily build a custom resume that highlights your
            skills, experience, and achievements, and showcases your unique
            brand. Our user-friendly interface and customization options make it
            easy to create a resume that stands out from the crowd. With
            Resfolio, you don't have to worry about formatting or design - we
            take care of that for you. You can focus on creating compelling
            content that tells your story and demonstrates your value to
            potential employers. Whether you're just starting your career or
            looking to make a change, Resfolio is the perfect tool to help you
            land your dream job.`}
          </p>
          <Divider className="w-full" />
        </div>

        <ResumeTips />
      </div>
    </PageLayout>
  );
}
