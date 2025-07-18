"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {

  Globe,
  Users,
  Award,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Star,
  BookOpen,
  FileText,
  CreditCard,
  Plane,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EducationalConsultancy() {
  return (
    <div className="min-h-screen bg-white">
      <section id="home" className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-4xl font-bold leading-tight mb-6">
             We are bringing overseas education within everyone’s reach
                <span className="text-orange-400"> Global Education</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
              Our Tech-enabled solutions help international students and recruitment partners choose the best global universities
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Start Your Journey
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  Explore Programs
                </Button>
              </div>

              <div className="mt-8 flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-blue-200">Partner Universities</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">2500+</div>
                  <div className="text-sm text-blue-200">Successful Doctors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">6500+</div>
                  <div className="text-sm text-blue-200">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-sm text-blue-200">Recruiting Countries</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/intro-bg.jpg?height=500&width=600"
                alt="Students studying abroad"
                width={600}
                height={500}
                loading="lazy"
                className="rounded-lg shadow-xl opacity-0 transition-opacity duration-500"
                onLoadingComplete={(img) => img.classList.remove("opacity-0")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-xl mb-8  text-gray-600">
            International Educare Corporation, popularly known as IEC is the specialist in Medical Education Abroad, IEC is established in 2000. Since then IEC is relentlessly serving student community to cherish their dream of Quality Medical Education at an affordable cost.IEC have partnered with many renowned Medical Universities Internationally and always act as a link between the Universities and the students. At IEC we not only nurture good doctors but also doctor with a strong and comprehensive foundation of Medical Knowledge, Skills and Compassion. We train them to be the leaders, to make independent decisions and to collaborate with other medical professionals.6500+ Studying MBBS through US 2500+ IEC Students are working Doctors now.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Expert Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our certified counselors provide personalized guidance based on your academic background and career
                  goals.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Global Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Strong partnerships with top universities across 5 countries ensuring the best opportunities for our
                  students.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Proven Success</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  98% visa success rate and 5000+ successful placements speak for our commitment to student success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive support throughout your study abroad journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>University Shortlisting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Personalized university recommendations based on your profile, preferences, and career goals.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Application Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Complete application support including SOP writing, LOR guidance, and document preparation.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Plane className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Visa Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Expert visa counseling and interview preparation with 98% success rate.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CreditCard className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Scholarship Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Identify and apply for scholarships and financial aid opportunities.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Test Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">IELTS, TOEFL, GRE, and GMAT preparation with experienced instructors.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Pre-Departure Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Accommodation assistance, travel guidance, and orientation sessions.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section id="countries" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Study Destinations</h2>
            <p className="text-xl text-gray-600">Explore top study destinations for MBBS graduates</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="USA Universities"
                  fill
                  loading="lazy"
                  className="object-cover opacity-0 transition-opacity duration-500"
                  onLoadingComplete={(img) => img.classList.remove("opacity-0")}
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-20"></div>
                <Badge className="absolute top-4 left-4 bg-blue-600">Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  MBBS IN GEORGIA   
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Home to world's top business schools including Harvard, Wharton, and Stanford.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 500+ Partner Universities</li>
                  <li>• Average Salary: $80,000+</li>
                  <li>• STEM OPT Available</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="UK Universities"
                  fill
                  loading="lazy"
                  className="object-cover opacity-0 transition-opacity duration-500"
                  onLoadingComplete={(img) => img.classList.remove("opacity-0")}
                />
                <div className="absolute inset-0 bg-red-600 bg-opacity-20"></div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  United Kingdom
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Prestigious universities with rich academic heritage and shorter program duration.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 1-Year MBA Programs</li>
                  <li>• Post-Study Work Visa</li>
                  <li>• Global Recognition</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Canada Universities"
                  fill
                  loading="lazy"
                  className="object-cover opacity-0 transition-opacity duration-500"
                  onLoadingComplete={(img) => img.classList.remove("opacity-0")}
                />
                <div className="absolute inset-0 bg-red-500 bg-opacity-20"></div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Canada
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Excellent quality of life, affordable education, and immigration opportunities.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Pathway to PR</li>
                  <li>• Affordable Tuition</li>
                  <li>• Multicultural Environment</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Australia Universities"
                  fill
                  loading="lazy"
                  className="object-cover opacity-0 transition-opacity duration-500"
                  onLoadingComplete={(img) => img.classList.remove("opacity-0")}
                />
                <div className="absolute inset-0 bg-green-600 bg-opacity-20"></div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Australia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  World-class education system with excellent work opportunities for international students.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Work While Study</li>
                  <li>• High Quality of Life</li>
                  <li>• Strong Economy</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Germany Universities"
                  fill
                  loading="lazy"
                  className="object-cover opacity-0 transition-opacity duration-500"
                  onLoadingComplete={(img) => img.classList.remove("opacity-0")}
                />
                <div className="absolute inset-0 bg-yellow-600 bg-opacity-20"></div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Germany
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Europe's economic powerhouse offering tuition-free education at public universities.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Low/No Tuition Fees</li>
                  <li>• Strong Job Market</li>
                  <li>• Central European Location</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Programs We Offer</h2>
            <p className="text-xl text-gray-600">Specialized programs for MMS graduates</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-2xl">MBA Programs</CardTitle>
                <CardDescription>Advanced business administration programs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Full-time MBA
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Executive MBA
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Specialized MBA (Finance, Marketing, etc.)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Global MBA Programs
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-2xl">Master's Programs</CardTitle>
                <CardDescription>Specialized master's degrees</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Master in Management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    MS in Business Analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Master in International Business
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    MS in Project Management
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from our successful students</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Student"
                    width={60}
                    height={60}
                    loading="lazy"
                    className="rounded-full mr-4 opacity-0 transition-opacity duration-500"
                    onLoadingComplete={(img) => img.classList.remove("opacity-0")}
                  />
                  <div>
                    <h4 className="font-semibold">Priya Sharma</h4>
                    <p className="text-sm text-gray-600">MBA at Harvard Business School</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "EduGlobal made my dream of studying at Harvard a reality. Their guidance throughout the application
                  process was invaluable."
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Student"
                    width={60}
                    height={60}
                    loading="lazy"
                    className="rounded-full mr-4 opacity-0 transition-opacity duration-500"
                    onLoadingComplete={(img) => img.classList.remove("opacity-0")}
                  />
                  <div>
                    <h4 className="font-semibold">Rahul Patel</h4>
                    <p className="text-sm text-gray-600">MS in Management, London Business School</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "The team helped me secure a scholarship worth £20,000. Their expertise in UK applications is
                  unmatched."
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Student"
                    width={60}
                    height={60}
                    loading="lazy"
                    className="rounded-full mr-4 opacity-0 transition-opacity duration-500"
                    onLoadingComplete={(img) => img.classList.remove("opacity-0")}
                  />
                  <div>
                    <h4 className="font-semibold">Anita Singh</h4>
                    <p className="text-sm text-gray-600">MBA at University of Toronto</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "From application to visa, everything was handled professionally. Now I'm working in Toronto with a
                  great salary!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
            <p className="text-xl text-gray-600">Stay updated with the latest in international education</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Blog post"
                width={400}
                height={200}
                loading="lazy"
                className="w-full h-48 object-cover opacity-0 transition-opacity duration-500"
                onLoadingComplete={(img) => img.classList.remove("opacity-0")}
              />
              <CardHeader>
                <Badge className="w-fit">Study Tips</Badge>
                <CardTitle className="text-lg">Top 10 MBA Programs for Indian Students in 2024</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Discover the best MBA programs that offer excellent ROI and career prospects for Indian students...
                </p>
                <Link href="#" className="text-blue-600 hover:underline text-sm font-medium">
                  Read More
                </Link>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Blog post"
                width={400}
                height={200}
                loading="lazy"
                className="w-full h-48 object-cover opacity-0 transition-opacity duration-500"
                onLoadingComplete={(img) => img.classList.remove("opacity-0")}
              />
              <CardHeader>
                <Badge className="w-fit">Visa Guide</Badge>
                <CardTitle className="text-lg">Student Visa Requirements: Complete Guide 2024</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Everything you need to know about student visa requirements for different countries...
                </p>
                <Link href="#" className="text-blue-600 hover:underline text-sm font-medium">
                  Read More
                </Link>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Blog post"
                width={400}
                height={200}
                loading="lazy"
                className="w-full h-48 object-cover opacity-0 transition-opacity duration-500"
                onLoadingComplete={(img) => img.classList.remove("opacity-0")}
              />
              <CardHeader>
                <Badge className="w-fit">Scholarships</Badge>
                <CardTitle className="text-lg">Scholarship Opportunities for MMS Graduates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Explore various scholarship opportunities available for management students...
                </p>
                <Link href="#" className="text-blue-600 hover:underline text-sm font-medium">
                  Read More
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about studying abroad</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What are the eligibility criteria for MBA programs abroad?</AccordionTrigger>
              <AccordionContent>
                Generally, you need a bachelor's degree, work experience (varies by program), GMAT/GRE scores, English
                proficiency test scores (IELTS/TOEFL), and strong application essays. Specific requirements vary by
                university and country.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How much does it cost to study abroad?</AccordionTrigger>
              <AccordionContent>
                Costs vary significantly by country and university. USA: $50,000-$100,000/year, UK:
                £20,000-£50,000/year, Canada: CAD $30,000-$60,000/year, Australia: AUD $40,000-$80,000/year, Germany:
                €500-€20,000/year. Living expenses are additional.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What is the typical duration of MBA programs?</AccordionTrigger>
              <AccordionContent>
                Full-time MBA programs typically last 1-2 years. USA: 2 years, UK: 1 year, Canada: 1-2 years, Australia:
                1.5-2 years, Germany: 1-2 years. Executive and part-time programs may have different durations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Can I work while studying abroad?</AccordionTrigger>
              <AccordionContent>
                Most countries allow international students to work part-time during studies. USA: 20 hours/week
                on-campus, UK: 20 hours/week, Canada: 20 hours/week, Australia: 40 hours/fortnight, Germany: 120 full
                days or 240 half days per year.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What are the post-study work opportunities?</AccordionTrigger>
              <AccordionContent>
                Most countries offer post-study work visas. USA: OPT (1-3 years), UK: Graduate Route (2 years), Canada:
                PGWP (up to 3 years), Australia: Temporary Graduate visa (2-4 years), Germany: 18 months job search
                visa.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Ready to start your study abroad journey? Contact us today!</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <span>info@eduglobal.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                  <span>123 Education Street, Mumbai, Maharashtra 400001</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Offices</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-semibold">Mumbai (Head Office)</h5>
                    <p className="text-sm text-gray-600">Andheri East</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-semibold">Delhi</h5>
                    <p className="text-sm text-gray-600">Connaught Place</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-semibold">Bangalore</h5>
                    <p className="text-sm text-gray-600">Koramangala</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-semibold">Pune</h5>
                    <p className="text-sm text-gray-600">Baner</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-6">
              <CardHeader>
                <CardTitle>Free Counseling Session</CardTitle>
                <CardDescription>Book your free consultation with our expert counselors</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input type="email" placeholder="Email Address" />
                  <Input type="tel" placeholder="Phone Number" />
                  <Input placeholder="Current Education Level" />
                  <Input placeholder="Preferred Study Destination" />
                  <Textarea placeholder="Tell us about your goals and any specific questions you have..." rows={4} />
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Book Free Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

     
    </div>
  )
}