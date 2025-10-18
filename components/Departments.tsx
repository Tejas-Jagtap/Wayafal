"use client";

import React from "react";
import Link from "next/link";
import {
  FaBuilding,
  FaSeedling,
  FaHeartbeat,
  FaFileAlt,
  FaBolt,
  FaFemale,
  FaUsers,
  FaUserTie,
  FaTint,
  FaPaw,
} from "react-icons/fa";

import { useLanguage } from "@/contexts/LanguageContext";

const Departments = () => {
  const { t, language } = useLanguage();

  const departments = [
    {
      id: 1,
      nameKey: language === "en" ? "Talathi Office" : "तलाठी कार्यालय",
      icon: FaUserTie,
      color: "from-blue-400 to-blue-600",
      descriptionKey:
        language === "mr"
          ? "महसूल, जमीन नोंदणी आणि शासकीय नोंदींचे व्यवस्थापन."
          : "Handles revenue records, land registry, and official documentation.",
      link: "/departments/talathi-office",
    },
    {
      id: 2,
      nameKey: language === "en" ? "Health Department" : "आरोग्य विभाग",
      icon: FaHeartbeat,
      color: "from-red-400 to-red-600",
      descriptionKey:
        language === "mr"
          ? "ग्रामस्थांच्या आरोग्य सेवा आणि वैद्यकीय सुविधा पुरविणे."
          : "Provides primary healthcare and medical services to villagers.",
      link: "/departments/health",
    },
    {
      id: 3,
      nameKey:
        language === "en" ? "Water Supply Department" : "पाणी पुरवठा विभाग",
      icon: FaTint,
      color: "from-cyan-400 to-cyan-600",
      descriptionKey:
        language === "mr"
          ? "स्वच्छ पाणीपुरवठा व पाण्याचे व्यवस्थापन सुनिश्चित करणे."
          : "Maintains clean water supply and manages village water resources.",
      link: "/departments/water-supply",
    },
  ];

  return (
    <section className="mb-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#0A1931] text-white px-6 py-4">
          <h2 className="text-2xl font-bold">{t("dept.title")}</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => {
              const Icon = dept.icon;
              return (
                <Link href="/departments" key={dept.id}>
                  <div className="group cursor-pointer">
                    <div
                      className={`bg-gradient-to-br ${dept.color} text-white p-6 rounded-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1`}
                    >
                      <Icon className="text-6xl mb-3" />
                      <h3 className="font-bold text-3xl mb-1">
                        {dept.nameKey}
                      </h3>
                      <p className="text-lg opacity-90">
                        {dept.descriptionKey}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Departments;
