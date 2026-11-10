"use client";

import React from "react";
import {
  Code,
  Layout,
  Server,
  Database,
  Terminal,
  Cpu,
} from "lucide-react";

interface SkillItem {
  name: string;
  svg: React.ReactNode;
  brandColor?: string;
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: SkillItem[];
}

// Crisp official vector SVGs for all technical skills
const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      {
        name: "JavaScript",
        brandColor: "#F7DF1E",
        svg: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.017-.892-1.782-2.28-2.34-1.36-.554-1.572-.9-1.572-1.517 0-.498.344-.827 1.014-.827.65 0 1.085.277 1.344.827.086.177.294.277.48.216l1.246-.508a.428.428 0 00.228-.567c-.503-1.12-1.614-1.89-3.267-1.89-1.996 0-3.328 1.196-3.328 2.89 0 1.83 1.157 2.457 2.87 3.125 1.36.53 1.764.887 1.764 1.624 0 .666-.567 1.096-1.42 1.096-.993 0-1.58-.456-1.92-1.15a.434.434 0 00-.518-.216l-1.314.54a.43.43 0 00-.246.545c.57 1.378 1.866 2.186 3.966 2.186 2.378 0 3.75-1.284 3.75-3.076l-.008-.047zm-8.314-5.918h-1.956v6.944c0 1.488-.797 2.215-2.038 2.215-.818 0-1.393-.306-1.78-.73a.417.417 0 01-.06-.465l.98-1.584a.406.406 0 01.53-.136c.23.14.475.228.77.228.463 0 .73-.245.73-.836v-5.636z" />
          </svg>
        ),
      },
      {
        name: "TypeScript",
        brandColor: "#3178C6",
        svg: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.396.372v2.316a5.71 5.71 0 00-1.377-.478 5.79 5.79 0 00-1.472-.185c-.65 0-1.133.13-1.452.39-.318.26-.477.622-.477 1.086 0 .344.09.626.27.844.18.218.455.405.824.56.368.156.848.318 1.439.486.842.235 1.517.498 2.023.789.507.29.878.67 1.114 1.138.236.468.354 1.056.354 1.764 0 .848-.204 1.57-.612 2.164a4.42 4.42 0 01-1.745 1.45c-.755.372-1.703.558-2.844.558-.724 0-1.411-.06-2.063-.178a7.28 7.28 0 01-1.85-.59v-2.45a6.62 6.62 0 001.763.66c.642.15 1.282.226 1.919.226.71 0 1.237-.14 1.582-.419.345-.28.517-.672.517-1.176 0-.395-.102-.71-.305-.947a2.82 2.82 0 00-.868-.618c-.378-.178-.9-.364-1.566-.558-.87-.247-1.56-.525-2.072-.834-.51-.31-.88-.707-1.108-1.193-.228-.486-.342-1.09-.342-1.813 0-.812.204-1.514.613-2.106.409-.592 1.01-1.042 1.802-1.35.794-.308 1.767-.462 2.922-.462zm-8.37 0v2.175H7.075v10.05H4.167V11.925H1.125V9.75h9.043z" />
          </svg>
        ),
      },
      {
        name: "Java",
        brandColor: "#ED8B00",
        svg: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M8.851 18.56s-.917.534.667.72c2.03.24 3.49-.24 3.49-.24s.48.24-.36.48c-1.884.537-4.78.36-5.46-.24-.48-.42.24-.72.24-.72h1.423zm-1.043-2.613s-1.28.665.48.91c2.146.299 4.394-.15 4.394-.15s.46.23-.46.47c-2.348.6-5.918.3-6.578-.38-.48-.5.539-.85.539-.85h1.625zm6.57-4.148c.84 1.02-.24 2.1-1.8 3.12-1.44.96-3.84 1.32-3.84 1.32s-.72.12-.24-.24c.72-.54 2.4-1.38 3.24-1.92 1.08-.72 1.8-1.5 2.64-2.28zm2.76 7.62c-2.16 1.02-8.88 1.08-10.74-.06-.6-.36.36-.6.36-.6s-1.02.42.18.66c2.4.48 8.16.42 10.56-.48.72-.24-.36-.42-.36-.42zm1.08-2.64c-1.92.84-7.2.9-9.12.06-.54-.24.36-.48.36-.48s-.78.3.18.48c2.1.36 6.78.3 8.88-.36.6-.18-.3-.3-.3-.3zm-1.8-10.32c.78.9-.18 2.04-1.2 2.88-1.08.9-2.16 1.38-2.16 1.38s-.36.12-.06-.18c.42-.42 1.32-1.02 1.8-1.44.84-.78 1.26-1.8 1.62-2.64z" />
          </svg>
        ),
      },
      {
        name: "C++",
        brandColor: "#00599C",
        svg: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M22.395 14.167v-1.111h-1.111v1.111h-1.111v1.111h1.111v1.111h1.111v-1.111h1.111v-1.111h-1.111zm-3.889 0v-1.111h-1.111v1.111h-1.111v1.111h1.111v1.111h1.111v-1.111h1.111v-1.111h-1.111zm-5.722-5.722c-2.88 0-4.8 2.04-4.8 4.92s1.92 4.92 4.8 4.92c1.74 0 3.06-.72 3.96-1.86l-1.86-1.26c-.54.66-1.26 1.08-2.1 1.08-1.56 0-2.64-1.2-2.64-2.88s1.08-2.88 2.64-2.88c.84 0 1.56.42 2.1 1.08l1.86-1.26c-.9-1.14-2.22-1.86-3.96-1.86z" />
          </svg>
        ),
      },
      {
        name: "SQL",
        brandColor: "#00758F",
        svg: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M12 2C6.48 2 2 4.02 2 6.5s4.48 4.5 10 4.5 10-2.02 10-4.5S17.52 2 12 2zm0 6.5c-4.41 0-8-1.34-8-2.5s3.59-2.5 8-2.5 8 1.34 8 2.5-3.59 2.5-8 2.5zM2 9v4c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5V9c0 1.4-1.4 2.6-3.7 3.4-1.8.6-4.1.9-6.3.9s-4.5-.3-6.3-.9C3.4 11.6 2 10.4 2 9zm0 6v4c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v-4c0 1.4-1.4 2.6-3.7 3.4-1.8.6-4.1.9-6.3.9s-4.5-.3-6.3-.9C3.4 17.6 2 16.4 2 15z" />
          </svg>
        ),
      },
      {
        name: "HTML5",
        brandColor: "#E34F26",
        svg: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.2 4.4H5.3l.4 4.5h12.2l-.4 4.5-5.5 1.5-5.5-1.5-.3-3H4.1l.5 5.5 7.4 2.1 7.4-2.1.8-9H5.7l-.4-4.5h13.8l.4-4.5z" />
          </svg>
        ),
      },
      {
        name: "CSS3",
        brandColor: "#1572B6",
        svg: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm16.7 4.4H5.8l.3 3.6h11.8l-.4 4.5-5.5 1.5-5.5-1.5-.3-3H4.1l.5 5.5 7.4 2.1 7.4-2.1.8-9H5.7l-.4-4.5h13.8l.4-4.5z" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Frontend Engineering",
    icon: Layout,
    skills: [
      {
        name: "React.js",
        brandColor: "#61DAFB",
        svg: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <circle cx="12" cy="12" r="2.2" />
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              d="M12 21.4c-4.8 0-8.6-4.2-8.6-9.4S7.2 2.6 12 2.6s8.6 4.2 8.6 9.4-3.8 9.4-8.6 9.4zm-8.1-4.7c-2.4-4.2-1.3-9.5 2.5-11.7s8.9.1 11.3 4.3 1.3 9.5-2.5 11.7-8.9-.1-11.3-4.3zm0-9.4C1.5 11.5 2.6 16.8 6.4 19s8.9-.1 11.3-4.3 1.3-9.5-2.5-11.7-8.9.1-11.3 4.3z"
            />
          </svg>
        ),
      },
      {
        name: "Next.js",
        brandColor: "#ffffff",
        svg: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M11.998 0C5.372 0 0 5.372 0 11.998c0 6.626 5.372 12 11.998 12s12-5.374 12-12c0-6.626-5.374-12-12-12zm6.273 17.513l-6.883-8.878v8.878H9.362V6.487h1.99l6.919 8.922V6.487h2.026v11.026h-2.026z" />
          </svg>
        ),
      },
      {
        name: "Tailwind CSS",
        brandColor: "#06B6D4",
        svg: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.975 12 6.001 12z" />
          </svg>
        ),
      },
      {
        name: "Redux",
        brandColor: "#764ABC",
        svg: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M15.7 13.9c-.9 1.5-2.2 2.7-3.7 3.5-1.5.8-3.2 1.2-4.9 1.1-1.7-.1-3.3-.8-4.6-1.9-1.3-1.1-2.2-2.6-2.6-4.3-.4-1.7-.3-3.4.4-5 0 0 .1-.2.2-.2.1 0 .2.1.2.2.3 1.2.9 2.3 1.8 3.2 1 1 2.2 1.6 3.6 1.8 1.4.2 2.8-.1 4.1-.7 1.3-.6 2.4-1.6 3.2-2.8.8-1.2 1.2-2.7 1.2-4.1 0-.7-.1-1.4-.3-2.1 0-.1 0-.2.1-.2.1 0 .2 0 .2.1 1.2 1.6 1.9 3.5 2 5.5.1 2-.5 4-1.7 5.7z" />
          </svg>
        ),
      },
      {
        name: "Framer Motion",
        brandColor: "#0055FF",
        svg: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Backend & Systems",
    icon: Server,
    skills: [
      {
        name: "Node.js",
        brandColor: "#5FA04E",
        svg: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M12 0L1.75 5.918v12.164L12 24l10.25-5.918V5.918L12 0zm0 2.296l8.28 4.78-8.28 4.78-8.28-4.78 8.28-4.78zm-8.28 6.744L11 14.3v7.404L3.72 17.5V9.04zm16.56 8.46L13 21.704V14.3l7.28-4.2v8.46z" />
          </svg>
        ),
      },
      {
        name: "Express.js",
        brandColor: "#ffffff",
        svg: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm3.8 14.2l-2.1-3.2-2.1 3.2H9.2l3.3-4.9-3.1-4.7h2.4l1.9 3 1.9-3h2.4l-3.1 4.7 3.3 4.9h-2.4z" />
          </svg>
        ),
      },
      {
        name: "REST APIs",
        brandColor: "#0284c7",
        svg: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M4 4h16a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 8h16a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4a2 2 0 012-2zm2-6v2h2V6H6zm0 8v2h2v-2H6z" />
          </svg>
        ),
      },
      {
        name: "Socket.io",
        brandColor: "#ffffff",
        svg: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.25 18.25l-4.5-4.5 1.75-1.75 2.75 2.75 7.25-7.25 1.75 1.75-9 9z" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Databases & Storage",
    icon: Database,
    skills: [
      {
        name: "MongoDB",
        brandColor: "#47A248",
        svg: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M12.01 0c-.3 0-.6.1-.8.3C10.7 1 4 7.6 4 15.2c0 4.8 3.5 8.8 8 8.8s8-4 8-8.8c0-7.6-6.7-14.2-7.2-14.9-.2-.2-.5-.3-.79-.3zm0 2.4c2.8 3.5 6 9.4 6 12.8 0 3.7-2.7 6.8-6 6.8s-6-3.1-6-6.8c0-3.4 3.2-9.3 6-12.8z" />
          </svg>
        ),
      },
      {
        name: "PostgreSQL",
        brandColor: "#4169E1",
        svg: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </svg>
        ),
      },
      {
        name: "MySQL",
        brandColor: "#4479A1",
        svg: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm0 21.6a9.6 9.6 0 110-19.2 9.6 9.6 0 010 19.2zm-2.4-12v4.8h4.8V9.6h-4.8z" />
          </svg>
        ),
      },
      {
        name: "Prisma",
        brandColor: "#2D3748",
        svg: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M19.9 19.4L13.1 1.6c-.3-.8-1.3-.9-1.8-.2L2.7 18.2c-.4.6 0 1.5.8 1.6l15.4 1.4c.7.1 1.3-.7 1-1.4zM12.4 4.5l5.2 13.7-10.7-1 5.5-12.7z" />
          </svg>
        ),
      },
      {
        name: "Redis",
        brandColor: "#DC382D",
        svg: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M2.5 7.8L12 3l9.5 4.8-9.5 4.8L2.5 7.8zm0 5.4L12 18l9.5-4.8v3L12 21l-9.5-4.8v-3z" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Developer Tools",
    icon: Terminal,
    skills: [
      {
        name: "Git",
        brandColor: "#F05032",
        svg: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l3.088 3.09c.642-.222 1.385-.08 1.9.435.72.72.72 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.718.721.718 1.884 0 2.604-.719.719-1.881.719-2.6 0-.721-.72-.721-1.883 0-2.604.18-.18.388-.306.611-.383V8.84c-.223-.077-.431-.203-.611-.383-.535-.535-.674-1.326-.412-1.982L7.545 3.79.454 10.88c-.604.604-.604 1.581 0 2.186l10.479 10.48c.605.603 1.582.603 2.187 0l10.426-10.43c.604-.603.604-1.582 0-2.186z" />
          </svg>
        ),
      },
      {
        name: "GitHub",
        brandColor: "#ffffff",
        svg: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: "Docker",
        brandColor: "#2496ED",
        svg: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185zm-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186zm5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185zm-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185z" />
          </svg>
        ),
      },
      {
        name: "Postman",
        brandColor: "#FF6C37",
        svg: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.8 8.6l-3.2 4.8-2.6-2.6-1.4 1.4 4 4 4.6-6.8-1.4-.8z" />
          </svg>
        ),
      },
      {
        name: "VS Code",
        brandColor: "#007ACC",
        svg: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M23.15 2.587L18.21.21a1.494 1.494 0 00-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 00-1.276.057L.327 7.261A1 1 0 00.32 8.68l3.96 3.32-3.96 3.32a1 1 0 00.007 1.42l1.322 1.202a1 1 0 001.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 001.704.29l4.942-2.377A1.5 1.5 0 0024 20.06V3.939a1.5 1.5 0 00-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
          </svg>
        ),
      },
      {
        name: "Vercel",
        brandColor: "#ffffff",
        svg: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M24 22.525H0l12-21.05 12 21.05z" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "AI & Emerging Tech",
    icon: Cpu,
    skills: [
      {
        name: "Gemini API",
        brandColor: "#8E75FF",
        svg: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
          </svg>
        ),
      },
      {
        name: "Prompt Engineering",
        brandColor: "#38bdf8",
        svg: (
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10H6v-2h12v2zm0-3H6V7h12v2z" />
          </svg>
        ),
      },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Subtle, evenly spaced thin linear grid pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-60 dark:opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(148, 163, 184, 0.28) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(148, 163, 184, 0.28) 1px, transparent 1px)
            `,
            backgroundSize: "36px 36px",
            maskImage: "radial-gradient(ellipse at center, black 65%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 65%, transparent 100%)",
          }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 mb-14">
        <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-sky-500 dark:text-sky-400 mb-3">
          TECHNICAL TOOLKIT
        </p>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Skills & Technologies
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Core toolset and languages utilized to engineer high-throughput web applications, clean backends, and responsive user interfaces.
        </p>
      </div>

      {/* Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.title}
              className="group p-6 rounded-2xl bg-black/[0.02] dark:bg-zinc-950/40 border border-black/10 dark:border-white/10 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-zinc-700 dark:text-zinc-300">
                  <Icon size={18} />
                </div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-semibold">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/item flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-black/8 dark:border-white/10 text-zinc-800 dark:text-zinc-200 hover:border-sky-500/50 hover:text-sky-600 dark:hover:text-sky-400 transition-all shadow-2xs"
                  >
                    <span className="text-zinc-500 group-hover/item:text-inherit transition-colors shrink-0">
                      {skill.svg}
                    </span>
                    <span className="text-xs font-mono font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
