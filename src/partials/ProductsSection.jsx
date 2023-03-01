import React from "react";
import { Link } from "react-router-dom";
import Mukham from "../images/mukham.png";
import Placeholder from "../images/placeholder.png";

function ProductsSection() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll w-1/1 no-scrollbar">
      <section id="Mukham" className="snap-start py-16 sm:py-20 lg:py-32">
        <div className="mx-auto px-4 sm:px-6 max-w-full md:px-4 lg:px-12 flex justify-between items-center flex-col lg:flex-row">
          <div className="md:max-w-3xl lg:max-w-xl">
            <h2 className="font-bold text-5xl" id="mukham-title">
              Mukham App
            </h2>
            <p className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-900">
              Application to simply the overall process of marking attendace
            </p>
            <p className="mt-2 text-lg tracking-tight text-slate-700">
              Application integrated to remind and process the flow of marking
              attendance with simplified UI which takes less than 10 seconds to
              mark attendance
            </p>
            <Link
              to="/mukham"
              className="mt-6 round btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800"
            >
              <span>Know More</span>
              <svg
                className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                  fillRule="nonzero"
                />
              </svg>
            </Link>
          </div>
          <img src={Mukham} alt="" className=" mt-10 lg:mt-0 lg:max-w-xs " />
        </div>
      </section>

      <section id="Mukham" className="snap-start py-16 sm:py-20 lg:py-32">
        <div className="mx-auto px-4 sm:px-6 max-w-full md:px-4 lg:px-12 flex justify-between items-center flex-col lg:flex-row">
          <div className="md:max-w-3xl lg:max-w-xl">
            <h2 className="font-bold text-5xl" id="mukham-title">
              MauthN
            </h2>
            <p className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-900">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="mt-2 text-lg tracking-tight text-slate-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
              maiores vel unde vero sequi suscipit, sed totam harum, libero
              eaque officia explicabo itaque quia error cum voluptas, doloribus
              quidem deserunt.
            </p>
            <Link
              to="/#"
              className="mt-6 round btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800"
            >
              <span>Know More</span>
              <svg
                className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                  fillRule="nonzero"
                />
              </svg>
            </Link>
          </div>
          <img
            src={Placeholder}
            alt=""
            className=" mt-10 lg:mt-0 lg:max-w-xs "
          />
        </div>
      </section>
      <section id="Mukham" className="snap-start py-16 sm:py-20 lg:py-32">
        <div className="mx-auto px-4 sm:px-6 max-w-full md:px-4 lg:px-12 flex justify-between items-center flex-col lg:flex-row">
          <div className="md:max-w-3xl lg:max-w-xl">
            <h2 className="font-bold text-5xl" id="mukham-title">
              Vikranth
            </h2>
            <p className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-900">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <p className="mt-2 text-lg tracking-tight text-slate-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nemo
              esse harum obcaecati vel debitis vero voluptas, sequi, rerum iste,
              perspiciatis inventore quam totam illum.
            </p>
            <Link
              to="/#"
              className="mt-6  btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800"
            >
              <span>Know More</span>
              <svg
                className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                  fillRule="nonzero"
                />
              </svg>
            </Link>
          </div>
          <img
            src={Placeholder}
            alt=""
            className=" mt-10 lg:mt-0 lg:max-w-xs "
          />
        </div>
      </section>
      <section id="Mukham" className="snap-start py-16 sm:py-20 lg:py-32">
        <div className="mx-auto px-4 sm:px-6 max-w-full md:px-4 lg:px-12 flex justify-between items-center flex-col lg:flex-row">
          <div className="md:max-w-3xl lg:max-w-xl">
            <h2 className="font-bold text-5xl" id="mukham-title">
              Biometries
            </h2>
            <p className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-900">
              lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="mt-2 text-lg tracking-tight text-slate-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
              sint dolores perspiciatis voluptatum autem numquam laudantium
              magnam ipsa, laborum nostrum adipisci aspernatur deleniti delectus
              natus.
            </p>
            <Link
              to="/#"
              className="mt-6 round btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800"
            >
              <span>Know More</span>
              <svg
                className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                  fillRule="nonzero"
                />
              </svg>
            </Link>
          </div>
          <img
            src={Placeholder}
            alt=""
            className=" mt-10 lg:mt-0 lg:max-w-xs "
          />
        </div>
      </section>
    </div>
  );
}

export default ProductsSection;
