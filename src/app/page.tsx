import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center bg-white text-center px-4">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Welcome to Contact Manager
      </h1>

      {/* Subtitle */}
      <p className="text-gray-500 mb-8">
        Manage your contacts easily and efficiently
      </p>

      {/* Card */}
      <div className="w-[340px] h-[180px] rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-sm mb-6">
        {/* Phone */}
        <div className="w-[90px] h-[140px] rounded-xl border border-gray-300 bg-white flex flex-col items-center justify-center gap-4">
          <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-lg">
            📞
          </div>
          <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-lg">
            ✉️
          </div>
          <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-lg">
            ✏️
          </div>
        </div>
      </div>

      {/* Footer text */}
      <p className="text-gray-500">
        Start managing your contacts today!
      </p>
    </main>
  );
}
