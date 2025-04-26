import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Code,
  Brain,
  Zap,
  BarChart,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react";

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-robins-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
              <Badge className="mb-4 bg-robins-100 text-robins-800 hover:bg-robins-200">
                New: JavaScript ES2023 Deck Available
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Master JavaScript with{" "}
                <span className="text-robins-600">Spaced Repetition</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                The most effective way to learn and retain JavaScript concepts.
                Our scientifically-proven spaced repetition system helps you
                remember what you learn forever.
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/sign-up">
                  <Button size="lg" className="bg-robins-500 hover:bg-robins-600">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#how-it-works">
                  <Button size="lg" variant="outline">
                    How It Works
                  </Button>
                </Link>
              </div> */}
              <div className="mt-8 flex items-center text-sm text-gray-500">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                No credit card required
                <span className="mx-2">•</span>
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                Free starter decks included
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="bg-white rounded-xl shadow-xl p-4 border border-gray-200">
                  <div className="bg-robins-50 rounded-lg p-6">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h3 className="font-bold text-lg">JavaScript Arrays</h3>
                        <p className="text-sm text-gray-600">
                          12 cards due today
                        </p>
                      </div>
                      <Badge className="bg-robins-500">Studying</Badge>
                    </div>
                    <Card className="mb-6 shadow-md">
                      <CardContent className="p-6">
                        <p className="font-medium text-lg">
                          What's the difference between map(), filter(), and
                          reduce()?
                        </p>
                      </CardContent>
                    </Card>
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline">Show Answer</Button>
                      <Button className="bg-robins-500 hover:bg-robins-600">
                        Next Card
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 -z-10 bg-robins-200 rounded-xl w-full h-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-robins-100 text-robins-800 hover:bg-robins-200">
              Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to master JavaScript
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines spaced repetition science with modern
              learning techniques to help you learn JavaScript effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="bg-robins-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-robins-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Spaced Repetition</h3>
              <p className="text-gray-600">
                Our algorithm schedules reviews at optimal intervals to maximize
                retention and minimize study time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="bg-robins-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-robins-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Code Examples</h3>
              <p className="text-gray-600">
                Learn with real-world code examples that demonstrate practical
                applications of JavaScript concepts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="bg-robins-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-robins-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
              <p className="text-gray-600">
                Visualize your learning journey with detailed statistics and
                insights about your performance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="bg-robins-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-robins-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Scheduling</h3>
              <p className="text-gray-600">
                Our system adapts to your learning pace, focusing more on
                concepts you find challenging.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="bg-robins-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-robins-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Time-Efficient</h3>
              <p className="text-gray-600">
                Study in short, focused sessions that fit into your busy
                schedule. Just 15 minutes a day makes a difference.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="bg-robins-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-robins-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Curated Content</h3>
              <p className="text-gray-600">
                Expert-created decks covering everything from JavaScript basics
                to advanced frameworks and libraries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-robins-100 text-robins-800 hover:bg-robins-200">
              How It Works
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Learn JavaScript the smart way
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our scientifically-proven method helps you learn faster and
              remember longer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md border border-gray-200">
                <span className="text-2xl font-bold text-robins-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Study Flashcards</h3>
              <p className="text-gray-600">
                Review JavaScript concepts with our interactive flashcards
                featuring code examples and explanations.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md border border-gray-200">
                <span className="text-2xl font-bold text-robins-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Rate Your Recall</h3>
              <p className="text-gray-600">
                After each card, rate how well you remembered the concept. This
                helps our algorithm optimize your learning.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md border border-gray-200">
                <span className="text-2xl font-bold text-robins-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Review at Optimal Times
              </h3>
              <p className="text-gray-600">
                Our system schedules reviews at the perfect moment before you're
                about to forget, strengthening your memory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-robins-100 text-robins-800 hover:bg-robins-200">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Loved by developers worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our users have to say about their experience with
              JSRepeat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                <p className="text-gray-600 mb-6">
                  "JSRepeat has completely transformed how I learn JavaScript.
                  The spaced repetition system ensures I actually remember what
                  I study. I've seen a huge improvement in my coding skills."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-robins-200 flex items-center justify-center mr-3">
                    <span className="font-medium text-robins-600">MJ</span>
                  </div>
                  <div>
                    <p className="font-medium">Michael Johnson</p>
                    <p className="text-sm text-gray-500">Frontend Developer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                <p className="text-gray-600 mb-6">
                  "As a bootcamp student, JSRepeat helped me solidify my
                  JavaScript knowledge. The curated decks cover everything I
                  needed to know, and the spaced repetition made it stick."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-robins-200 flex items-center justify-center mr-3">
                    <span className="font-medium text-robins-600">SP</span>
                  </div>
                  <div>
                    <p className="font-medium">Sarah Parker</p>
                    <p className="text-sm text-gray-500">Bootcamp Graduate</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                <p className="text-gray-600 mb-6">
                  "I use JSRepeat to prepare for technical interviews. The
                  ability to create custom decks with specific JavaScript
                  concepts has been invaluable. I aced my last interview thanks
                  to this tool!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-robins-200 flex items-center justify-center mr-3">
                    <span className="font-medium text-robins-600">DT</span>
                  </div>
                  <div>
                    <p className="font-medium">David Thompson</p>
                    <p className="text-sm text-gray-500">Senior Developer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-robins-100 text-robins-800 hover:bg-robins-200">
              Pricing
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start for free, upgrade when you need more features. No hidden
              fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Free</h3>
                <div className="text-3xl font-bold mb-4">
                  $0
                  <span className="text-gray-500 text-lg font-normal">
                    /month
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  Perfect for beginners starting their JavaScript journey.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>5 pre-built decks</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Up to 100 cards</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Basic progress tracking</span>
                  </li>
                </ul>
                <Link href="/sign-up">
                  <Button variant="outline" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-robins-500 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Badge className="bg-robins-500">Most Popular</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Pro</h3>
                <div className="text-3xl font-bold mb-4">
                  $9
                  <span className="text-gray-500 text-lg font-normal">
                    /month
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  For serious learners who want to master JavaScript.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>All Free features</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Unlimited decks & cards</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Advanced statistics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Custom study sessions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Import/export functionality</span>
                  </li>
                </ul>
                <Link href="/sign-up">
                  <Button className="w-full bg-robins-500 hover:bg-robins-600">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Team</h3>
                <div className="text-3xl font-bold mb-4">
                  $19
                  <span className="text-gray-500 text-lg font-normal">
                    /month
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  For teams learning together and sharing resources.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>All Pro features</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Up to 5 team members</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Shared decks & cards</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Team progress dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Link href="/sign-up">
                  <Button variant="outline" className="w-full">
                    Contact Sales
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-robins-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to master JavaScript?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are learning JavaScript the smart
            way with JSRepeat.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/sign-up">
              <Button
                size="lg"
                className="bg-white text-robins-600 hover:bg-gray-100"
              >
                Get Started Free
              </Button>
            </Link>
            <Link href="/sign-in">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-robins-700"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
