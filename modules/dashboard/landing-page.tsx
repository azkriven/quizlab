export default function LandingPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Welcome to Our Awesome Landing Page!
            </h1>
            <p className="text-lg text-gray-700 mb-8">
                This is a basic landing page. You can add more content and
                customize it as needed.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Learn More
            </button>
        </div>
    );
}
