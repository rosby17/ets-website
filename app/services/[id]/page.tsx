import ServiceDetailClient from "./ServiceDetailClient";

export function generateStaticParams() {
  return [
    { id: "formation" },
    { id: "interpretation" },
    { id: "traduction" },
    { id: "sejours" },
  ];
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <ServiceDetailClient id={resolvedParams.id} />;
}
