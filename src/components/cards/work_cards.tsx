import { Accordion, AccordionDetails, Divider } from "@mui/material";



const accordionData = [
  {
    title: "Fintech",
    details: [
      "Software Engineer",
      "Stock Trading Platform.",
      "Lending & Alternative Financing Platforms",
      "Insurtech",
      "Digital Banking",
      "Ecommerce",
      "AI/ML solutions",
    ],
  },
  {
    title: "Healthcare",
    details: [
      "Medical Software",
      "Electronic Health Records",
      "Telemedicine",
      "Wearable Health Devices",
      "Healthcare Analytics",
    ],
  },
  {
    title: "Retail",
    details: [
      "Point of Sale Systems",
      "E-commerce Platforms",
      "Inventory Management",
      "Customer Relationship Management",
      "Supply Chain Management",
    ],
  },
  {
    title: "Manufacturing",
    details: [
      "Industrial Automation",
      "CAD/CAM Software",
      "Supply Chain Analytics",
      "Quality Control Systems",
      "Predictive Maintenance",
    ],
  },
];

const IndustryAccordions = () => {
  return (
    <div className="bg-gb-bg bg-cover w-full sm:w-[1621px] pt-8">
      <div className="text-center">
        <h4 className="text-[#FF7F0E] text-base font-bold tracking-widest">WE WORK</h4>
        <h1 className="font-bold text-[25px]">Industries We Work In</h1>

        <div className="flex flex-col sm:flex-row sm:w-full sm:justify-between sm:items-center sm:flex-wrap pt-6 gap-4">
          {accordionData.map((industry, index) => (
            <Accordion key={index} className="sm:w-[790px] sm:h-[377px]">
              <AccordionDetails>
                <h1 className="text-[18px] text-start sm:text-center sm:font-bold py-4">
                  {industry.title}
                </h1>
                <Divider />
                <ul className="list-disc flex justify-start flex-wrap gap-6 py-3 sm:text-[22px] px-7 sm:px-[150px]">
                  {industry.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryAccordions;
