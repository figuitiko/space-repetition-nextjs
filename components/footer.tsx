export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} JSRepeat - Spaced Repetition for JavaScript Learning
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-robins-600 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-robins-600 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-robins-600 text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
