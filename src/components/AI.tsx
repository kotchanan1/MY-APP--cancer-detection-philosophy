import Link from "next/link";
import React from "react";

export default function AI() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="img/p2.jpg"
          />
          <div className="lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center">
              AI ตรวจวินิจฉัยโรคมะเร็งปอด
            </h1>
            <p className="mb-8 leading-relaxed text-2xl">
              คำชี้แจงเกี่ยวกับ AI ตรวจวินิจฉัยโรคมะเร็งปอด
              <ol style={{ listStyleType: "decimal" }} className="ml-4">
                <li>
                  ถ้าผลการพยากรณ์เป็น lung_aca หมายความว่าเป็นโรคมะเร็งปอดชนิด
                  lung_aca
                </li>
                <li>
                  ถ้าผลการพยากรณ์เป็น lung_bnt หมายความว่าเป็นโรคมะเร็งปอดชนิด
                  lung_bnt
                </li>
                <li>
                  ถ้าผลการพยากรณ์เป็น lung_scc หมายความว่าเป็นโรคมะเร็งปอดชนิด
                  lung_scc
                </li>
              </ol>
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <Link href="#" className="text-white ">
                  คลิกตรวจโรคมะเร็งปอดที่นี้
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
