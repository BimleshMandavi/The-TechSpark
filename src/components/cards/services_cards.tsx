import Image from "next/image";

// Define an array with data for each block
const serviceBlocks = [
  {
    title: "Web Design & Development",
    iconSrc: "/code.svg",
    description: "Develop high-performance web applications using React.js for interactive interfaces, Next.js for server-side rendering, and the complete MERN stack to build scalable, robust applications tha ..",
  },
  {
    title: "App Design & Development",
    iconSrc: "/code.svg",
    description: "Create innovative mobile applications using React Native for cross-platform compatibility. Our tech stack includes JavaScript and Node, ensuring seamless front-end user experiences and relia ...",
  },
  {
    title: "Dashboard or CRM",
    iconSrc: "/code.svg",
    description: "Build tailored dashboards and CRMs using React.js and Node, designed for industries like e-commerce and healthcare, offering advanced analytics, business insights, and enhanced management ca ...",
  },
  {
    title: "Server Management",
    iconSrc: "/code.svg",
    description: "Provide secure, scalable server hosting with AWS, Google Cloud, or Heroku, featuring 24/7 support, regular backups, and top-notch security measures for smooth and reliable performance. ...",
  },
  {
    title: "Logo Designing",
    iconSrc: "/code.svg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sit dolores corrupti laborum reprehenderit repellat ea numquam dolorum repellendus dolore a commodi illum optio, laboriosam hic quidem, qui delectus. Esse voluptate libero veritatis quisquam neque aperiam sapiente consequuntur tempora ab architecto. Explicabo maxime a quasi id atque! Suscipit, magnam excepturi!",
  },
  {
    title: "Graphics Designing",
    iconSrc: "/code.svg",
    description: "Elevate your brand identity with our graphics design services. From logos to marketing materials, we use Photoshop, Illustrator, and Figma to create compelling, high-quality visuals. ...",
  },
  {
    title: "UI/UX Designing",
    iconSrc: "/code.svg",
    description: "Design stunning, user-friendly interfaces with Figma, Sketch, and Adobe XD. Our UI/UX solutions improve engagement and satisfaction across websites, mobile apps, and other digital products. ...",
  },
];


const ServiceGrid = () => {
  return (
    // <div className="w-full flex flex-wrap justify-between gap-7 lg:mx-5">
    <div className="w-full grid gap-4 p-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3"> 
    {serviceBlocks.map((block, index) => (
        <div
          key={index}
          className="flex border  shadow-md  hover:bg-[#0C487B] hover:text-white sm:w-[496px] sm:h-[386px] md:w-[386px] flex-col gap-2 border-r-[10px] border-b-[10px] border-[#0C487BD4] hover:border-[#335c80d4] rounded-[14px] p-4 my-4"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full">
            <div className="border-2 border-red-500 rounded-full p-2">
              <div className="rounded-full overflow-hidden">
                <Image src={block.iconSrc} alt={block.title} width={24.3} height={24.3} />
              </div>
            </div>
          </div>
          <h1 className="font-bold text-[16px]">{block.title}</h1>
          <p>{block.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceGrid;

