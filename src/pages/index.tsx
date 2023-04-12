import Image from "next/image";
import { Inter } from "next/font/google";
import MyDataGrid from "@/components/datagrid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-32">
      <div className="mb-8 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://mui.com/x/react-data-grid/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            @mui/x-data-grid{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Custom filter panel position relative to filtered column
          </p>
        </a>
      </div>
      <MyDataGrid></MyDataGrid>
    </main>
  );
}
