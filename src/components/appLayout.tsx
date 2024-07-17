'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

interface IAppLayout {
    children: React.ReactNode;
    className?: string;
}


export const AppLayout = ({className, children}: IAppLayout) => {
    const pathname = usePathname()
    return (
        <>
          <body className={className}>
        <div className="bg-black text-center text-white py-2">
          <h2>Calculate GPA and CGPA</h2>

          
          <Link
            className="text-blue-500 text-sm"
            href={pathname === "/grading-system" ? "/" : "/grading-system"}
          >
            {pathname === "/grading-system" ? "Go to Calculators" : "About the grading system"}
          </Link>


        </div>

        {children}

        <footer className="text-center">
        <p>
          Made with ❤️ by{" "}
          <Link
            className="text-blue-500"
            href="https://x.com/stephen_olgade"
            target="_blank"
          >
            Stephengade
          </Link>
        </p>
      </footer>
      </body>

        </>

    )
}