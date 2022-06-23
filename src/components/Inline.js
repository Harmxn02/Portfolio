/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
      id: 1,
      name: 'Project Alpha',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      description: 'Currently empty because I have not made any projects yet',
    },
    {
      id: 2,
      name: 'Project Beta',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      description: 'Currently empty because I have not made any projects yet',
    },
    {
      id: 3,
      name: 'Project Gamma',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      description: 'Currently empty because I have not made any projects yet',
    },
    {
      id: 4,
      name: 'Project Delta',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      description: 'Currently empty because I have not made any projects yet',
    },
    
    // More products...
  ]
  
  export default function Inline() {
    return (
      <div className="bg-white min-h-screen">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          {/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2> */}

          {/* PUT SECTION HEADER HERE */}
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-md text-gray-700 font-semibold text-left">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 text-left">{product.description}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
                <div className="flex flex-col text-center sm:flex-row pt-6 gap-4 justify-center">
                  <a href="www.google.com" target="_blank" className="text-purple-700 font-semibold  bg-purple-200 p-2 rounded">Source code</a>
                  <a href="www.google.com" target="_blank" className="text-orange-700 font-semibold  bg-orange-100 p-2 rounded">Live Deployment</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  