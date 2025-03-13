import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LandingPage() {
  return (
    <div className="container mx-auto py-24">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          Unlock Your Learning Potential with AI
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Effortlessly create quizzes and flashcards from images or PDFs.
        </p>
        <div className="flex justify-center space-x-4">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
        <div className="mt-8">
          <Input type="email" placeholder="Enter your email" className="max-w-md mx-auto" />
          <Button className="ml-2">Subscribe</Button>
        </div>
      </div>
    </div>
  );
}
