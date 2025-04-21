import { BRAND_NAME } from "@/data/constant";

  export default function Footer() {
    return (
      <footer className="bg-white border-t border-gray-200">
          <p className="my-8 text-center text-sm/6 text-gray-600">
            &copy; 2025 {BRAND_NAME}, Inc. All rights reserved.
          </p>
      </footer>
    )
  }
  