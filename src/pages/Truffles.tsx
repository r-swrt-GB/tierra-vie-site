import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import truffleCloseup from "@/assets/truffle-closeup.jpg";

const truffleFacts = [
  {
    title: "What Are Truffles?",
    text: "Truffles are a type of underground fungus that grows in symbiosis with the roots of certain trees, most notably oaks and hazelnuts. Unlike mushrooms, truffles grow entirely below the soil surface, making them notoriously difficult to find — traditionally requiring trained dogs or pigs to locate them by scent.",
  },
  {
    title: "How Do They Grow?",
    text: "Truffles form through a delicate mycorrhizal relationship with host trees. The tree provides sugars to the truffle, while the truffle enhances the tree's ability to absorb water and nutrients. This symbiosis requires specific soil conditions: alkaline, well-drained, calcium-rich soil with the right microbial balance. It takes 5–7 years from planting an inoculated tree before the first truffles appear.",
  },
  {
    title: "Why Are They So Valuable?",
    text: "Truffles are among the most expensive foods in the world, with some varieties fetching over $3,000 per kilogram. Their value stems from their rarity, the difficulty of cultivation, their short shelf life, and their incomparable flavour — an intense, earthy, umami-rich aroma that transforms any dish it touches.",
  },
  {
    title: "Why South Africa?",
    text: "South Africa's diverse climate zones include regions with conditions remarkably similar to the truffle-producing regions of France and Italy — cool winters, moderate rainfall, and alkaline soils. The Southern Hemisphere's opposite seasons also mean South African truffles mature during Europe's off-season, creating unique market opportunities.",
  },
];

const Truffles = () => {
  return (
    <Layout>
      <HeroSection
        image={truffleCloseup}
        title="What Are Truffles?"
        subtitle="The world's most treasured culinary ingredient."
      />

      {truffleFacts.map((fact, index) => (
        <SectionWrapper key={fact.title} alternate={index % 2 !== 0}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-4">
              {fact.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{fact.text}</p>
          </div>
        </SectionWrapper>
      ))}
    </Layout>
  );
};

export default Truffles;
