import Head from "next/head";
import About_section from "@/components/home/about_section";
import Our_services from "@/components/home/our_services";
import Case_study from "@/components/home/case_study";

export default function Home() {
  return (
    <>
      <Head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/Tech.png" />

        {/* Meta Tags */}
        <title> The TechSpark IT Solutions</title>
        <meta
          name="description"
  content="The TechSpark IT Solutions offers premium web and app development services, UI/UX design, and server management tailored to your needs."

        />
        <meta
          name="keywords"
          content="web development, mobile app development, logo design, UI/UX design, dashboard design, server management, TechSpark, Tech Spark, The TechSpark IT Solutions"
        />
        <meta name="author" content="The TechSpark IT Solutions" />
        <meta
          property="og:title"
          content="The TechSpark IT Solutions - Leading Web & App Development Company"
        />
        <meta
          property="og:description"
          content="The TechSpark IT Solutions provides top-notch web and mobile app development services, ensuring high-quality solutions at affordable prices."
        />
        <meta
          property="og:image"
          content="/Tech.png"
        />
        <meta property="og:url" content="https://www.gotechspark.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
  "@context": "http://schema.org",
  "@type": "Organization",
  "name": "The TechSpark IT Solutions",
  "url": "https://www.gotechspark.com",
  "logo": "https://www.gotechspark.com/logo.png",
  "description": "Leading IT solutions provider offering web and mobile development, UI/UX design, and server management services."
}),
          }}
        />
      </Head>

      <div className="pb-7 w-screen h-full ">
        <About_section />
        <Our_services />
        <Case_study />
      </div>
    </>
  );
}
