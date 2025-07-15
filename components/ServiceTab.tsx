"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { CheckCircle, Target, FileText, BookOpen, Shield, DollarSign, Calendar, Building, CreditCard, Briefcase, MapPin, Home, Star, Globe } from "lucide-react";
import Image from "next/image";

const iconMap = {
  Target: Target,
  FileText: FileText,
  BookOpen: BookOpen,
  Shield: Shield,
  Building: Building,
  CreditCard: CreditCard,
  Briefcase: Briefcase,
  MapPin: MapPin,
  Home: Home,
  Star: Star,
  Globe: Globe,
};

const studyServices = {
  usa: {
    title: "Study in USA Services",
    description: "Comprehensive support for American universities",
    services: [
      {
        title: "University Selection",
        icon: "Target",
        items: [
          "Top 100 university partnerships",
          "STEM program specialization",
          "State-wise university mapping",
          "ROI analysis and career prospects",
        ],
      },
      {
        title: "Application Support",
        icon: "FileText",
        items: [
          "Common App assistance",
          "SOP and essay writing",
          "LOR coordination",
          "Resume optimization",
        ],
      },
      {
        title: "Test Preparation",
        icon: "BookOpen",
        items: [
          "GMAT/GRE coaching",
          "TOEFL/IELTS preparation",
          "Mock tests and practice",
          "Score improvement guarantee",
        ],
      },
      {
        title: "Visa Services",
        icon: "Shield",
        items: [
          "F-1 visa application",
          "DS-160 form assistance",
          "Interview preparation",
          "Document verification",
        ],
      },
    ],
    costBreakdown: [
      { label: "Tuition (Annual)", value: "$30K - $80K" },
      { label: "Living Expenses", value: "$15K - $25K" },
      { label: "Application Fees", value: "$50 - $200" },
      { label: "Total (Annual)", value: "$45K - $105K" },
    ],
    keyDeadlines: [
      { label: "Fall Intake", value: "Applications: Oct - Jan" },
      { label: "Spring Intake", value: "Applications: Jun - Sep" },
      { label: "GMAT/GRE", value: "6 months before application" },
    ],
  },
  uk: {
    title: "Study in UK Services",
    description: "Specialized support for British universities",
    services: [
      {
        title: "Russell Group Universities",
        icon: "Building",
        items: [
          "Oxford & Cambridge guidance",
          "London Business School partnerships",
          "Red brick university options",
          "1-year MBA specialization",
        ],
      },
      {
        title: "UCAS Application",
        icon: "FileText",
        items: [
          "Personal statement writing",
          "Reference letter coordination",
          "Portfolio development",
          "Interview preparation",
        ],
      },
      {
        title: "Funding Support",
        icon: "CreditCard",
        items: [
          "Chevening scholarship guidance",
          "Commonwealth scholarships",
          "University-specific scholarships",
          "Education loan assistance",
        ],
      },
      {
        title: "Post-Study Work",
        icon: "Briefcase",
        items: [
          "Graduate Route visa (2 years)",
          "Job search strategies",
          "CV writing for UK market",
          "Networking opportunities",
        ],
      },
    ],
    costBreakdown: [
      { label: "Tuition (Annual)", value: "£15K - £45K" },
      { label: "Living Expenses", value: "£12K - £18K" },
      { label: "Application Fees", value: "£25 - £75" },
      { label: "Total (Annual)", value: "£27K - £63K" },
    ],
    keyDeadlines: [
      { label: "September Intake", value: "Applications: Oct - Jan" },
      { label: "January Intake", value: "Applications: Aug - Oct" },
      { label: "IELTS/TOEFL", value: "3 months before application" },
    ],
  },
  canada: {
    title: "Study in Canada Services",
    description: "Pathway to permanent residency",
    services: [
      {
        title: "Provincial Programs",
        icon: "MapPin",
        items: [
          "Ontario university partnerships",
          "British Columbia options",
          "Quebec programs (French)",
          "Alberta business schools",
        ],
      },
      {
        title: "Immigration Pathway",
        icon: "Home",
        items: [
          "PGWP guidance (up to 3 years)",
          "Express Entry preparation",
          "Provincial Nominee Program",
          "Canadian Experience Class",
        ],
      },
      {
        title: "Language Requirements",
        icon: "BookOpen",
        items: [
          "IELTS preparation",
          "CELPIP training",
          "French language support",
          "TEF preparation",
        ],
      },
      {
        title: "Financial Planning",
        icon: "CreditCard",
        items: [
          "GIC account setup",
          "Education loan guidance",
          "Scholarship opportunities",
          "Part-time work permits",
        ],
      },
    ],
    costBreakdown: [
      { label: "Tuition (Annual)", value: "CAD $25K - $60K" },
      { label: "Living Expenses", value: "CAD $12K - $20K" },
      { label: "Application Fees", value: "CAD $100 - $250" },
      { label: "Total (Annual)", value: "CAD $37K - $80K" },
    ],
    keyDeadlines: [
      { label: "Fall Intake", value: "Applications: Nov - Mar" },
      { label: "Winter Intake", value: "Applications: Jul - Oct" },
      { label: "Summer Intake", value: "Applications: Feb - May" },
    ],
  },
  australia: {
    title: "Study in Australia Services",
    description: "High quality education with work opportunities",
    services: [
      {
        title: "Group of Eight Universities",
        icon: "Star",
        items: [
          "University of Melbourne",
          "Australian National University",
          "University of Sydney",
          "UNSW Sydney partnerships",
        ],
      },
      {
        title: "Work Rights",
        icon: "Briefcase",
        items: [
          "40 hours/fortnight during study",
          "Temporary Graduate visa (2-4 years)",
          "Skilled migration pathways",
          "Regional study benefits",
        ],
      },
      {
        title: "Student Visa Support",
        icon: "Shield",
        items: [
          "Subclass 500 visa guidance",
          "GTE statement preparation",
          "Health insurance (OSHC)",
          "Biometrics assistance",
        ],
      },
      {
        title: "Accommodation Support",
        icon: "Home",
        items: [
          "On-campus housing",
          "Homestay arrangements",
          "Shared accommodation",
          "City-specific guidance",
        ],
      },
    ],
    costBreakdown: [
      { label: "Tuition (Annual)", value: "AUD $30K - $50K" },
      { label: "Living Expenses", value: "AUD $20K - $25K" },
      { label: "OSHC (Health Insurance)", value: "AUD $500 - $700" },
      { label: "Total (Annual)", value: "AUD $50K - $75K" },
    ],
    keyDeadlines: [
      { label: "Semester 1 (Feb)", value: "Applications: Aug - Nov" },
      { label: "Semester 2 (Jul)", value: "Applications: Feb - May" },
      { label: "IELTS/PTE", value: "3 months before application" },
    ],
  },
  germany: {
    title: "Study in Germany Services",
    description: "Affordable quality education in Europe",
    services: [
      {
        title: "Public Universities",
        icon: "Building",
        items: [
          "TU Munich partnerships",
          "Heidelberg University",
          "Humboldt University Berlin",
          "No tuition fees at public unis",
        ],
      },
      {
        title: "Language Support",
        icon: "Globe",
        items: [
          "German language courses",
          "TestDaF preparation",
          "DSH exam guidance",
          "English-taught programs",
        ],
      },
      {
        title: "Funding Options",
        icon: "CreditCard",
        items: [
          "DAAD scholarships",
          "Erasmus+ programs",
          "University scholarships",
          "Part-time work permits",
        ],
      },
      {
        title: "Career Opportunities",
        icon: "Briefcase",
        items: [
          "18-month job search visa",
          "EU Blue Card eligibility",
          "Strong engineering sector",
          "Multinational companies",
        ],
      },
    ],
    costBreakdown: [
      { label: "Tuition (Public Unis)", value: "€0 - €500" },
      { label: "Living Expenses", value: "€8K - €12K" },
      { label: "Health Insurance", value: "€1K - €1.2K" },
      { label: "Total (Annual)", value: "€9K - €13.7K" },
    ],
    keyDeadlines: [
      { label: "Winter Semester", value: "Applications: Mar - Jul" },
      { label: "Summer Semester", value: "Applications: Sep - Jan" },
      { label: "German Language", value: "6-12 months preparation" },
    ],
  },
};

const StudyServicesTabs = () => {
  return (
    <Tabs defaultValue="usa" className="w-full">
      <TabsList className="grid w-full grid-cols-5 mb-8">
        {Object.keys(studyServices).map((country) => (
          <TabsTrigger key={country} value={country} className="flex items-center gap-2">
            <span className="text-xs">
              {country === "usa" && "🇺🇸"}
              {country === "uk" && "🇬🇧"}
              {country === "canada" && "🇨🇦"}
              {country === "australia" && "🇦🇺"}
              {country === "germany" && "🇩🇪"}
            </span>
            {country.charAt(0).toUpperCase() + country.slice(1)}
          </TabsTrigger>
        ))}
      </TabsList>

      {Object.entries(studyServices).map(([country, data]) => (
        <TabsContent key={country} value={country}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="mb-6">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/placeholder.svg?height=60&width=80"
                      alt={`${country.charAt(0).toUpperCase() + country.slice(1)} Flag`}
                      width={80}
                      height={60}
                      className="rounded"
                    />
                    <div>
                      <CardTitle className="text-2xl">{data.title}</CardTitle>
                      <CardDescription>{data.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.services.map((service, index) => {
                      const Icon = iconMap[service.icon as keyof typeof iconMap];
                      return (
                        <div key={index}>
                          <h4 className="font-semibold text-lg mb-3 flex items-center">
                            <Icon className="h-5 w-5 text-blue-600 mr-2" />
                            {service.title}
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-600">
                            {service.items.map((item, idx) => (
                              <li key={idx} className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                    Cost Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.costBreakdown.map((cost, index) => (
                      <div key={index} className={`flex justify-between ${index === data.costBreakdown.length - 1 ? "border-t pt-2" : ""}`}>
                        <span className={index === data.costBreakdown.length - 1 ? "font-semibold" : "text-sm"}>
                          {cost.label}
                        </span>
                        <span className={index === data.costBreakdown.length - 1 ? "font-bold text-blue-600" : "font-semibold"}>
                          {cost.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                    Key Deadlines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {data.keyDeadlines.map((deadline, index) => (
                      <div key={index}>
                        <div className="font-semibold text-sm">{deadline.label}</div>
                        <div className="text-xs text-gray-600">{deadline.value}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default StudyServicesTabs;