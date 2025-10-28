//need to use lucide react instead of react-icons/fa

import { ChartLine, Eye, Globe } from "lucide-react";


export default function MissionVisionSection() {
  return (
    <section className="py-16 px-4 ">
      <div className="w-full mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white text-black p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <ChartLine className="text-green-500 mr-2 text-2xl" />
              <h3 className="text-2xl font-bold text-green-500">Our Mission</h3>
            </div>
            <p className="mb-4">
              To empower brands with creative, data-driven advertising solutions that captivate audiences, foster growth, and deliver measurable results. We are dedicated to pushing the boundaries of digital marketing through innovation and strategic excellence.
            </p>
            <div className="flex space-x-2 mt-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <ChartLine className="text-green-500" />
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Eye className="text-green-500" />
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Globe className="text-green-500" />
              </div>
            </div>
          </div>

          <div className="bg-white text-black p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <Globe className="text-green-500 mr-2 text-2xl" />
              <h3 className="text-2xl font-bold text-green-500">Our Vision</h3>
            </div>
            <p className="mb-4">
              To be the leading digital advertising catalyst, recognized for transforming brands into market leaders. We aspire to create a future where every brand story is not just told, but experienced, leaving a lasting impact on a global scale.
            </p>
            <div className="flex space-x-2 mt-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Globe className="text-green-500" />
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <ChartLine className="text-green-500" />
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Eye className="text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}