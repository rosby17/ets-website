import ServiceDetailClient from "./ServiceDetailClient";

export function generateStaticParams() {
  return [
    { id: "formation" },
    { id: "interpretation" },
    { id: "traduction" },
    { id: "sejours" },
  ];
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  return <ServiceDetailClient id={params.id} />;
}
