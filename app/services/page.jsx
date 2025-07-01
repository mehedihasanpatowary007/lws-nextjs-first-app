import { serviceData } from "@/data/serviceData";
import Link from "next/link";

function ServicesPage() {
  
  return (
    <div className="h-[90vh] place-items-center place-content-center">
      <div className="font-bold text-4xl italic text-gray-700 mb-6">ServicesPage</div>
      <div className="flex gap-4">
        {serviceData.map((d) => {
          const Icon = d.icon;
          return (
            <Link key={d.id} title={d.title} href={`/services/${d.id}`}>
              <div className="max-w-md mx-auto bg-[#F1F5F9] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                <div className="flex items-center justify-center">
                  <Icon className="text-green-500 w-10 h-10" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ServicesPage;

export function generateMetadata(){
return {
  title:"Service",
  description:"This is service section."
}
}
