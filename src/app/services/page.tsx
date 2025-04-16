import Link from "next/link"
import { ArrowRight, BarChart3, BrainCircuit, Megaphone, Palette } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center text-center space-y-4 mb-10">
        <div className="rounded-full bg-primary/10 p-4 mb-2">
          <BrainCircuit className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-muted-foreground max-w-2xl">
          IntelliCreate offers a comprehensive suite of AI-powered services to help your business grow and succeed in the digital age.
        </p>
      </div>

      {/* Main Services Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Card>
          <CardHeader>
            <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
              <Palette className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Creative Branding</CardTitle>
            <CardDescription>
              Create a distinctive and memorable brand identity that resonates with your target audience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Our AI-powered branding tools help you develop logos, color palettes, typography, and brand guidelines that communicate your values and connect with your audience.
            </p>
            <Link href="/services/branding">
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
              <Megaphone className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Digital Marketing</CardTitle>
            <CardDescription>
              Optimize your marketing campaigns with AI-driven content creation and analytics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Our AI tools help you create compelling marketing content, optimize campaigns, and analyze performance to maximize your return on investment.
            </p>
            <Link href="/services/marketing">
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Business Intelligence</CardTitle>
            <CardDescription>
              Transform your data into actionable insights with AI-powered analytics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Our AI analyzes your business data to provide insights, forecasts, and recommendations that help you make data-driven decisions.
            </p>
            <Link href="/services/intelligence">
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Creative Branding Section */}
      <div className="mb-16">
        <div className="flex flex-col items-center text-center space-y-4 mb-10">
          <div className="rounded-full bg-primary/10 p-4 mb-2">
            <Palette className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">Creative Branding</h2>
          <p className="text-muted-foreground max-w-2xl">
            Our AI-powered branding tools help you create a distinctive and memorable brand identity that resonates with your target audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Develop Your Brand Identity</h3>
            <p className="text-muted-foreground mb-6">
              Your brand is more than just a logo—it&apos;s the complete experience customers have with your company. Our AI
              tools help you create a cohesive brand identity that communicates your values and connects with your
              audience.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4 text-primary"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                AI-generated logos and visual elements
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4 text-primary"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Custom color palettes based on color psychology
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4 text-primary"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Typography selection and pairing
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4 text-primary"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Brand voice and messaging guidelines
              </li>
            </ul>
            <Link href="/services/branding">
              <Button className="gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="Branding Illustration"
              width={400}
              height={300}
              className="rounded-lg object-cover border shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Digital Marketing Section */}
      <div className="mb-16">
        <div className="flex flex-col items-center text-center space-y-4 mb-10">
          <div className="rounded-full bg-primary/10 p-4 mb-2">
            <Megaphone className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">Digital Marketing</h2>
          <p className="text-muted-foreground max-w-2xl">
            Optimize your marketing campaigns with AI-driven content creation, audience targeting, and performance analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="flex items-center justify-center order-2 md:order-1">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="Marketing Illustration"
              width={400}
              height={300}
              className="rounded-lg object-cover border shadow-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold mb-4">Enhance Your Marketing Strategy</h3>
            <p className="text-muted-foreground mb-6">
              Our AI tools help you create compelling marketing content, optimize campaigns, and analyze performance to maximize your return on investment.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4 text-primary"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                AI-generated marketing copy and content
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4 text-primary"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Audience targeting and segmentation
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4 text-primary"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Campaign optimization and A/B testing
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4 text-primary"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Performance analytics and reporting
              </li>
            </ul>
            <Link href="/services/marketing">
              <Button className="gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Business Intelligence Section */}
      <div className="mb-16">
        <div className="flex flex-col items-center text-center space-y-4 mb-10">
          <div className="rounded-full bg-primary/10 p-4 mb-2">
            <BarChart3 className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">Business Intelligence</h2>
          <p className="text-muted-foreground max-w-2xl">
            Transform your data into actionable insights with AI-powered analytics, market research, and competitive analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Make Data-Driven Decisions</h3>
            <p className="text-muted-foreground mb-6">
              Our AI analyzes your business data to provide insights, forecasts, and recommendations that help you make informed decisions and drive growth.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4 text-primary"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Predictive analytics and forecasting
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4 text-primary"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Market research and competitive analysis
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4 text-primary"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Customer behavior and sentiment analysis
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4 text-primary"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Custom dashboards and reporting
              </li>
            </ul>
            <Link href="/services/intelligence">
              <Button className="gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="Business Intelligence Illustration"
              width={400}
              height={300}
              className="rounded-lg object-cover border shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-muted rounded-lg p-8 mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <ol className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 text-primary font-bold">1</div>
                <div>
                  <h3 className="font-bold">Discovery</h3>
                  <p className="text-muted-foreground">
                    Tell us about your business, goals, and challenges through our intuitive onboarding process.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 text-primary font-bold">2</div>
                <div>
                  <h3 className="font-bold">AI Analysis</h3>
                  <p className="text-muted-foreground">
                    Our AI analyzes your inputs and generates customized solutions and recommendations.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 text-primary font-bold">3</div>
                <div>
                  <h3 className="font-bold">Implementation</h3>
                  <p className="text-muted-foreground">
                    Work with our tools to implement the solutions and refine them based on your feedback.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 text-primary font-bold">4</div>
                <div>
                  <h3 className="font-bold">Optimization</h3>
                  <p className="text-muted-foreground">
                    Continuously optimize your solutions with ongoing AI analysis and recommendations.
                  </p>
                </div>
              </li>
            </ol>
          </div>
          <div className="md:w-1/2">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="How It Works"
              width={400}
              height={300}
              className="rounded-lg object-cover border shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Start leveraging our AI-powered services to grow your business, enhance your brand, and make data-driven decisions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg" className="gap-1">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline">
              Contact Sales
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
} 