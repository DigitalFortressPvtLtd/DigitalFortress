import React from 'react'
import ProductsSection from '../partials/ProductsSection';

function Products() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* <div className="pt-32 pb-12 md:pt-40 md:pb-20"> */}
            <ProductsSection/>
            {/* </div> */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Products