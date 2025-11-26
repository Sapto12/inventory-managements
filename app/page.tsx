import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 flex flex items-center justify-center ">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Inventory Management
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat voluptate, aperiam tempora molestias provident veritatis inventore ex perspiciatis sint adipisci?
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/sign-in" className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors hover:border-2 hover:border-purple-600 hover:bg-white hover:text-purple-600" >
            Sign in
            </Link>
            <Link href="#" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold border-2 border-purple-600 hover:bg-purple-600 transition-colors hover:text-white">learn more</Link>
          </div>
        </div>
      </div>  
    </div>
    
  );
}
