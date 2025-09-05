import React, { useState } from "react";
import { Separator } from "../ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const sizeData = {
  "crop-hoodies": [
    { size: "XS", length: "15.5", chest: "32", sleeves: "22" },
    { size: "S", length: "16.5", chest: "34", sleeves: "22.5" },
    { size: "M", length: "17.5", chest: "36", sleeves: "23" },
    { size: "L", length: "18.5", chest: "38", sleeves: "24" },
    { size: "XL", length: "19.5", chest: "40", sleeves: "25" },
    { size: "XXL", length: "20.5", chest: "42", sleeves: "25.5" },
    { size: "3XL", length: "21.5", chest: "44", sleeves: "26" },
  ],
  "oversized-tshirts": [
    { size: "S", length: "26.5", chest: "40" },
    { size: "M", length: "27.5", chest: "42" },
    { size: "L", length: "28.5", chest: "44" },
    { size: "XL", length: "29.5", chest: "46" },
    { size: "XXL", length: "30.5", chest: "48" },
  ],
  "regular-hoodies": [
    { size: "S", length: "24", chest: "38" },
    { size: "M", length: "25", chest: "40" },
    { size: "L", length: "26", chest: "42" },
    { size: "XL", length: "27", chest: "44" },
    { size: "XXL", length: "28.5", chest: "46" },
  ],
};

export const SizeChartSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<keyof typeof sizeData>("crop-hoodies");

  const tabs = [
    { key: "crop-hoodies" as const, label: "Crop Hoodies", hasSleeveColumn: true },
    { key: "oversized-tshirts" as const, label: "Oversized T-Shirts", hasSleeveColumn: false },
    { key: "regular-hoodies" as const, label: "Regular Hoodies", hasSleeveColumn: false },
  ];

  return (
    <section id="size-chart" className="py-16 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Size Chart
          </h2>
          <p className="text-xl text-white/70">
            Find your perfect fit with our detailed size guide
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeTab === tab.key
                  ? "bg-[#e8ff8c] text-black"
                  : "bg-[#333333] text-white hover:bg-[#444444]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Size Table */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#222222] rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#333333] border-none hover:bg-[#333333]">
                  <TableHead className="text-white font-semibold text-center py-4">
                    Size
                  </TableHead>
                  <TableHead className="text-white font-semibold text-center py-4">
                    Length (inches)
                  </TableHead>
                  <TableHead className="text-white font-semibold text-center py-4">
                    Chest (inches)
                  </TableHead>
                  {tabs.find(tab => tab.key === activeTab)?.hasSleeveColumn && (
                    <TableHead className="text-white font-semibold text-center py-4">
                      Sleeves (inches)
                    </TableHead>
                  )}
                </TableRow>
              </TableHeader>
              <TableBody>
                {sizeData[activeTab].map((row, index) => (
                  <TableRow
                    key={index}
                    className="border-[#333333] hover:bg-[#2a2a2a] transition-colors duration-200"
                  >
                    <TableCell className="text-white font-medium text-center py-4">
                      {row.size}
                    </TableCell>
                    <TableCell className="text-white/80 text-center py-4">
                      {row.length}
                    </TableCell>
                    <TableCell className="text-white/80 text-center py-4">
                      {row.chest}
                    </TableCell>
                    {tabs.find(tab => tab.key === activeTab)?.hasSleeveColumn && (
                      <TableCell className="text-white/80 text-center py-4">
                        {"sleeves" in row ? row.sleeves : "-"}
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-white/60">
            All measurements are in inches. For best fit, measure your existing garments.
          </p>
        </div>
      </div>
    </section>
  );
};