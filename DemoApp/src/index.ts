import { McpServer } from "@modelcontextprotocol/server";
import { StdioServerTransport } from "@modelcontextprotocol/server/stdio";
import * as z from "zod/v4";

const server = new McpServer({
  name: "student-assistant-mcp",
  version: "1.0.0",
});

server.registerTool(
  "course-information",
  {
    title: "Course Information",
    description: "Returns basic information about a college course.",
    inputSchema: z.object({
      courseCode: z.string().min(1),
    }),
  },
  async ({ courseCode }) => {
    const courses: Record<string, string> = {
      COMP2068:
        "COMP2068 is a JavaScript Frameworks course that covers modern web development tools and frameworks.",
      COMP2084:
        "COMP2084 is a Server-Side Scripting course focused on ASP.NET Core development.",
      GNED1066:
        "GNED1066 is a Personal Finance course focused on budgeting, credit, saving, and financial planning.",
    };

    const result =
      courses[courseCode.toUpperCase()] ??
      "Sorry, no course information was found for that course code.";

    return {
      content: [
        {
          type: "text",
          text: result,
        },
      ],
    };
  }
);

server.registerTool(
  "assignment-reminder",
  {
    title: "Assignment Reminder",
    description: "Creates a simple reminder for an assignment.",
    inputSchema: z.object({
      assignmentName: z.string().min(1),
      dueDate: z.string().min(1),
    }),
  },
  async ({ assignmentName, dueDate }) => {
    return {
      content: [
        {
          type: "text",
          text: `Reminder: ${assignmentName} is due on ${dueDate}. Please submit it before the deadline.`,
        },
      ],
    };
  }
);

server.registerTool(
  "grade-average",
  {
    title: "Grade Average",
    description: "Calculates the average of three grades.",
    inputSchema: z.object({
      gradeOne: z.number().min(0).max(100),
      gradeTwo: z.number().min(0).max(100),
      gradeThree: z.number().min(0).max(100),
    }),
  },
  async ({ gradeOne, gradeTwo, gradeThree }) => {
    const average = (gradeOne + gradeTwo + gradeThree) / 3;

    return {
      content: [
        {
          type: "text",
          text: `The average grade is ${average.toFixed(2)}%.`,
        },
      ],
    };
  }
);

async function main(): Promise<void> {
  const transport = new StdioServerTransport();
  await server.connect(transport);

  console.error("Student Assistant MCP server is running.");
}

main().catch((error: unknown) => {
  console.error("Server error:", error);
  process.exit(1);
});