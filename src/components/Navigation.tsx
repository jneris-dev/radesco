import { Link } from "react-router-dom";
import type { Project } from "../interface/interfaces";
import { useEffect, useState } from "react";

interface NavigationProps {
  data: Project[];
  current: number;
}

function Navigation({ data, current }: NavigationProps) {
  const [prev, setPrev] = useState<Project | undefined>();
  const [next, setNext] = useState<Project | undefined>();

  const getPrevAndNext = (activeID: number) => {
    const index = data.findIndex((a) => a.id === activeID);
    if (index === -1) return undefined;

    setPrev(data[index - 1] || undefined);
    setNext(data[index + 1] || undefined);

    return;
  };

  useEffect(() => {
    getPrevAndNext(current);
  }, [data, current]);

  return (
    <div className="w-full flex itens-center justify-between">
      <div className={`group${!prev ? " disabled" : ""}`}>
        {prev ? (
          <Link
            to={`/project/${prev?.slug}`}
            className="flex gap-1 items-center"
          >
            <svg
              width="28px"
              height="28px"
              strokeWidth="1.4"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 6L9 12L15 18"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-stone-900 dark:stroke-stone-200"
              ></path>
            </svg>
            <span className="text-xl">Prev Project</span>
          </Link>
        ) : (
          <div className="flex gap-1 items-center pointer-events-none text-stone-300 dark:text-blue-magenta-400">
            <svg
              width="28px"
              height="28px"
              strokeWidth="1.4"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 6L9 12L15 18"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-stone-300 dark:stroke-blue-magenta-400"
              ></path>
            </svg>
            <span className="text-xl">Prev Project</span>
          </div>
        )}
      </div>
      <div>
        {next ? (
          <Link
            to={`/project/${next?.slug}`}
            className="flex gap-1 items-center"
          >
            <span className="text-xl">Next Project</span>
            <svg
              width="28px"
              height="28px"
              strokeWidth="1.4"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 6L15 12L9 18"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-stone-900 dark:stroke-stone-200"
              ></path>
            </svg>
          </Link>
        ) : (
          <div className="flex gap-1 items-center pointer-events-none text-stone-300 dark:text-blue-magenta-400">
            <span className="text-xl">Next Project</span>
            <svg
              width="28px"
              height="28px"
              strokeWidth="1.4"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 6L15 12L9 18"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-stone-300 dark:stroke-blue-magenta-400"
              ></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navigation;
