import Counter from "@/components/Counter";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="flex flex-col items-center gap-8 p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Next.js + MobX Template
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A full-stack application template with state management
          </p>
        </div>
        <Counter />
      </main>
    </div>
  );
}
