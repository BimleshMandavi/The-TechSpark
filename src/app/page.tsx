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
        <title> The TechSpark IT Solutions - Web & Mobile App Development</title>
        <meta
          name="description"
          content="The TechSpark IT Solutions is a top web and mobile app software development company offering services like web and app development, logo design, UI/UX design, dashboard design, and server management."
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
              "logo": "https://www.gotechspark.com/Tech.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "phone": "+91-6265761531",
                "contactType": "Customer Service",
                "areaServed": "Global",
                "availableLanguage": ["Hindi,English"],
              },
              "sameAs": [
                "https://www.facebook.com/TechSpark",
                "https://twitter.com/TechSpark",
                "https://www.linkedin.com/company/TechSpark",
              ],
              "description":
                "The TechSpark IT Solutions is a top web and mobile app software development company offering services like web and app development, logo design, UI/UX design, dashboard design, and server management.",
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
