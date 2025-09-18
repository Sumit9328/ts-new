import Image from "next/image";
import Navbar from "./components/Navbar";
import Slides from "./components/slider";
import ProductShowcase from "./components/products";
import CompanyFooter from "./components/CompanyFooter";
import DesignCapabilitySlider from "./components/DesignCapabilitySlider";
import ImageSlider from "./components/ImageSlider";

export default function Home() {
  return (
    <>

      <div className="overflow-hidden">
        <div>
          <Navbar />
        </div>
      </div>


      <div className="overflow-hidden animate-fade-in mt-16 ">
        <div>
          <Slides />
        </div>
      </div>

      <section className="overflow-hidden bg-[#edeff1] py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="container-fluid p-0 m-0">
            <div className="row g-6 items-center">
              {/* Left Image Div */}
              <div className="col-md-6 flex mb-6 md:mb-0 animate-fade-in-scale">
                <div className="w-full h-full">
                  <Image
                    src="/assets/images/ceo.png"
                    alt="no-img"
                    width={600}
                    height={400}
                    className="rounded-[18px] object-cover shadow-2xl"
                  />
                </div>
              </div>

              {/* Right Content Div */}
              <div className="col-md-6 flex animate-fade-up">
                <div className="sm:px-6 px-4 flex flex-col justify-between bg-[#232F3E] py-6 md:py-8 rounded-[18px] w-full shadow-xl">
                  {/* Title and Quote */}
                  <div className="mb-4">
                    <p className="text-[22px] md:text-[26px] font-[700] text-white mb-3 tracking-tight">
                      INTRODUCTION
                    </p>
                    <p className="text-[14px] md:text-[16px] font-[400] leading-[26px] text-white/90 mb-6 normal-case">
                      &quot;We lay our foundation in early 1970’s as a leading trading firm Known as M/s I.D. STEELS PVT. LTD. (BASED IN LOHA MANDI,NARAINA, NEW DELHI, INDIA) trading of Iron & Steel Products (Cold Rolled Steel, Hot Rolled Steel, Galvanized Sheets, Color Coated Sheets & Coils etc). Back in year 2000 Company expanded and diversified its business segments from Trading to Manufacturing& Metals Fabrications.
                      Sheet Metals P&quot;
                    </p>
                  </div>

                  {/* Name and Designation */}
                  <div className="mb-0">
                    <p className="text-[14px] md:text-[16px] font-[400] text-white/90 normal-case">
                      Cofounder & CMO, Boat
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="flex justify-center sm:justify-start">
                    <button
                      type="button"
                      className="bg-[#444B54] hover:bg-[#374151] text-white text-[14px] md:text-[16px] font-[600] px-5 md:px-6 py-2.5 md:py-3 rounded-[12px] transition-all duration-300 flex items-center gap-2 hover:gap-3 group shadow-md hover:shadow-lg"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden animate-fade-up">
        <div>
          <ProductShowcase />
        </div>
      </div>

      <div className="overflow-hidden animate-fade-up">
        <div>
          <DesignCapabilitySlider />
        </div>
      </div>

      

  <div className="overflow-hidden animate-fade-in mt-0 ">
        <div>
          <ImageSlider />
        </div>
      </div>




      <div className="overflow-hidden animate-fade-up">
        <div>
          <CompanyFooter />
        </div>
      </div>

    </>
  );
}
