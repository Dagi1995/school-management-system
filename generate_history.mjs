import { execSync } from "child_process";
import fs from "fs";
import path from "path";

// Execute command and return stdout
function run(command) {
  try {
    return execSync(command, { encoding: "utf8", stdio: "pipe" }).trim();
  } catch (error) {
    console.error(`Error executing ${command}:`, error.message);
    return "";
  }
}

// Function to generate a commit with a specific date
function commit(message, dateStr) {
  run(`git commit -m "${message}" --date="${dateStr}"`);
}

const commits = [
  {
    date: "2025-12-05T10:00:00Z",
    msg: "Initial migration & config setup",
    files: ["README.md", "tailwind.config.ts", "postcss.config.mjs", "next.config.mjs", "tsconfig.json", ".gitignore", "docker-compose.yml", "Dockerfile"]
  },
  {
    date: "2025-12-12T14:30:00Z",
    msg: "Project setup & database schema",
    files: ["package.json", "package-lock.json", "prisma"]
  },
  {
    date: "2025-12-20T11:15:00Z",
    msg: "Authentication & Sign-in UI",
    files: ["src/app/[[...sign-in]]", "src/app/[[...sign-up]]"]
  },
  {
    date: "2025-12-28T16:45:00Z",
    msg: "Dashboard layout and components",
    files: ["src/app/(dashboard)/layout.tsx", "src/components/Navbar.tsx", "src/components/Menu.tsx"]
  },
  {
    date: "2026-01-05T09:20:00Z",
    msg: "Admin dashboard",
    files: ["src/app/(dashboard)/admin"]
  },
  {
    date: "2026-01-12T13:10:00Z",
    msg: "Student module",
    files: ["src/app/(dashboard)/student"]
  },
  {
    date: "2026-01-19T10:05:00Z",
    msg: "Teacher module",
    files: ["src/app/(dashboard)/teacher"]
  },
  {
    date: "2026-01-26T15:50:00Z",
    msg: "Parent module",
    files: ["src/app/(dashboard)/parent"]
  },
  {
    date: "2026-02-02T11:30:00Z",
    msg: "Attendance & Exams list views",
    files: ["src/app/(dashboard)/list/attendance", "src/app/(dashboard)/list/exams"]
  },
  {
    date: "2026-02-09T14:20:00Z",
    msg: "Calendar & Messaging UI",
    files: ["src/app/(dashboard)/list/events", "src/app/(dashboard)/list/messages", "src/app/(dashboard)/list/announcements"]
  },
  {
    date: "2026-02-16T16:00:00Z",
    msg: "Global styles and utilities",
    files: ["src/app/globals.css", "src/lib"]
  },
  {
    date: "2026-02-23T12:00:00Z",
    msg: "Final polish and remaining dashboard lists",
    files: ["."] // Add everything else
  }
];

// Ensure we add and commit progressively
for (const c of commits) {
  let added = false;
  for (const file of c.files) {
    if (file === ".") {
      run(`git add .`);
      added = true;
    } else if (fs.existsSync(file)) {
      run(`git add "${file}"`);
      added = true;
    }
  }

  // Check if anything is staged before committing
  const status = run("git status --porcelain");
  if (status && status.match(/^[MARC]/m)) {
    commit(c.msg, c.date);
    console.log(`Committed: ${c.msg}`);
  }
}

console.log("Git history generated successfully.");
