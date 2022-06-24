const products = [
    {
      id: 1,
      name: 'Project Alpha',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      description: 'Currently empty because I have not made any projects yet',
      source: "https://github.com/Harmxn02/DictionaryAPI",
      live: "https://harmanpsingh-realestate.netlify.app/"
    },
    {
      id: 2,
      name: 'Project Beta',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      description: 'Currently empty because I have not made any projects yet',
      source: "https://github.com/Harmxn02/Real-Estate-Website",
      live: "https://harmanpsingh-realestate.netlify.app/"
    },
    {
      id: 3,
      name: 'Project Gamma',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      description: 'Currently empty because I have not made any projects yet',
      source: "https://github.com/Harmxn02/Portfolio",
      live: "https://harmanpsingh-realestate.netlify.app/"
    },
    {
      id: 4,
      name: 'Project Delta',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      description: 'Currently empty because I have not made any projects yet',
      source: "https://github.com/Harmxn02/Harmxn02",
      live: "https://harmanpsingh-realestate.netlify.app/"
    },
    
    // More products...
  ]
  
  export default function Inline(props) {
    return (
      <div className="bg-white min-h-screen">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          {/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2> */}

          {/* PUT SECTION HEADER HERE */}
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none border-4">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-md text-gray-700 font-semibold text-left">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500 text-left">{product.description}</p>
                  </div>
                  {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
                </div>
                <div className="flex flex-col text-center sm:flex-row pt-6 gap-4 justify-center">
                  <a href={product.source} target="_blank" rel="noreferrer" className="text-purple-700 font-semibold  bg-purple-200 hover:bg-purple-300 p-2 rounded">Source code</a>
                  <a href={product.live}   target="_blank" rel="noreferrer" className="text-orange-700 font-semibold  bg-orange-100 hover:bg-orange-200 p-2 rounded">Live Deployment</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  