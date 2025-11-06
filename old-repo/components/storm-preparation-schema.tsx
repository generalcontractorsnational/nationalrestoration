export default function StormPreparationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Storm Preparation Guide for Homeowners",
    description:
      "A comprehensive guide to help homeowners prepare for storm season with checklists, tips, and emergency resources.",
    step: [
      {
        "@type": "HowToStep",
        name: "Seasonal Storm Preparation",
        text: "Prepare your home for storms based on the current season (spring, summer, fall, winter).",
        url: "https://nationalrestoration.com/storm-preparation#seasonal",
      },
      {
        "@type": "HowToStep",
        name: "Home Protection Checklist",
        text: "Complete a comprehensive home protection checklist to secure your property before storms.",
        url: "https://nationalrestoration.com/storm-preparation#protection",
      },
      {
        "@type": "HowToStep",
        name: "Storm-Specific Preparation",
        text: "Follow specific preparation steps for different types of storms (hurricanes, tornadoes, floods, winter storms).",
        url: "https://nationalrestoration.com/storm-preparation#specific",
      },
      {
        "@type": "HowToStep",
        name: "Emergency Supplies Checklist",
        text: "Gather essential emergency supplies to be prepared for any storm emergency.",
        url: "https://nationalrestoration.com/storm-preparation#supplies",
      },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name: "Weather radio",
      },
      {
        "@type": "HowToTool",
        name: "Flashlight and batteries",
      },
      {
        "@type": "HowToTool",
        name: "First aid kit",
      },
      {
        "@type": "HowToTool",
        name: "Emergency water and food supplies",
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
