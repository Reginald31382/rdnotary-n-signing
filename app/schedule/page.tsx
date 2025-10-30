"use client";
import { useRouter } from "next/navigation";
import ScheduleForm from "@/components/ScheduleForm";

import { FilePen } from "lucide-react";

export default function SchedulePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="max-w-3xl w-full p-6 bg-white rounded-2xl shadow-lg">
        <div className="flex justify-center">
          <FilePen className="text-sky-600 size-15" />
        </div>
        <ScheduleForm />
        <button
          onClick={() => router.push("/")}
          className="mt-8 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 rounded-lg transition"
        >
          ← Back to Home
        </button>
      </div>
    </main>
  );
}
