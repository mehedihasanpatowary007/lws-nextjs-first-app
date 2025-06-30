function ProductsLoading() {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg flex flex-col md:flex-row gap-8 animate-pulse">
      <div className="flex-shrink-0 w-full md:w-1/2">
        <div className="rounded-xl w-full h-[350px] bg-gray-200 border"></div>
      </div>

      <div className="flex flex-col justify-between w-full">
        <div>
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-5 bg-gray-200 rounded w-1/3 mb-6"></div>

          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="w-5 h-5 bg-gray-200 rounded"></div>
            ))}
            <div className="ml-2 h-4 w-10 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div className="h-10 w-32 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}

export default ProductsLoading;
