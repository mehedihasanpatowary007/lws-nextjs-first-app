import { serviceData } from "@/data/serviceData";

// The generateStaticParams function can be used in combination with dynamic route segments to statically generate routes at build time instead of on-demand at request time.
export const generateStaticParams = () => {
  return serviceData.map((service) => ({ id: service.id }));
};
async function ServiceDetails({ params }) {
  const { id: serviceId } = await params;
  const singleServiceDetails = serviceData.find(
    (service) => service.id === serviceId
  );
  const Icon = singleServiceDetails.icon;

  return (
    <>
      <div className="w-full h-[90vh] place-content-center place-items-center">
        <div className="max-w-md mx-auto bg-[#F1F5F9] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <div className="flex items-center justify-center mb-4">
            <Icon className="text-green-500 w-10 h-10" />
          </div>
          <h3 className="text-2xl font-semibold text-[#1D3557] text-center mb-2">
            {singleServiceDetails?.title}
          </h3>
          <p className="text-gray-600 text-center mb-4">
            {singleServiceDetails?.description}
          </p>
          <span className="block text-sm text-center text-[#1D3557] font-medium">
            Your service ID is:{" "}
            <span className="text-green-600">{serviceId}</span>
          </span>
        </div>
      </div>
    </>
  );
}

export default ServiceDetails;
