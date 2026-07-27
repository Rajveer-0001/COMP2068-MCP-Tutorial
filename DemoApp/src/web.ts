import express, { type Request, type Response } from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const courses: Record<string, string> = {
  COMP2068:
    "COMP2068 is a JavaScript Frameworks course covering modern web development tools and frameworks.",
  COMP2084:
    "COMP2084 is a Server-Side Scripting course focused on ASP.NET Core development.",
  GNED1066:
    "GNED1066 is a Personal Finance course focused on budgeting, credit, saving, and financial planning.",
};

app.get("/", (_request: Request, response: Response) => {
  response.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Student Assistant MCP Demo</title>

        <style>
          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
            background: #faf7f5;
            color: #202633;
          }

          header {
            padding: 42px 20px;
            background: #3b2352;
            color: white;
            text-align: center;
          }

          header h1 {
            margin: 0 0 10px;
          }

          main {
            width: min(1100px, 92%);
            margin: 30px auto;
          }

          .intro,
          .card {
            background: white;
            padding: 24px;
            border-radius: 12px;
            box-shadow: 0 3px 14px rgba(0, 0, 0, 0.08);
            /*Adding hover effect and transition to cards*/
            transition: transform 0.15s ease, box shadow 0.15s ease;
            }

            .card {
            border: 2px solid transparent;
            }
            .card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
            }

           .card-course:hover {
           border-color: #274e9d;
            }
           .card-reminder:hover { 
           border-color: #b8860b; 
           }
           .card-grade:hover {
            border-color: #1e7d5b;
            }



          .intro {
            margin-bottom: 24px;
          }

          .tools {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
            gap: 20px;
          }

          .card h2 {
            margin-top: 0;
            color: #274e9d;
          }
            /*Making each content in a card fill up the remaning space left*/
            .card {
            display: flex;
            flex-direction: column;
            }

          label {
            display: block;
            margin-top: 14px;
            margin-bottom: 6px;
            font-weight: bold;
          }

          input {
            width: 100%;
            padding: 11px;
            border: 1px solid #bbc2ce;
            border-radius: 7px;
            font-size: 1rem;
          }

          button {
            width: 100%;
            margin-top: 17px;
            padding: 12px;
            border: none;
            border-radius: 7px;
            background: #274e9d;
            color: white;
            font-size: 1rem;
            cursor: pointer;
            /*Adding transition for smooth hover effect */
            transition: background 0.15 ease, transform 0.1 ease;
          }

          button:hover {
            background: #1d3c7b;
            transform: translateY(-1px);
          }

          button:active {
            transform: translateY(0);
          }

          .result {
           //Removing min height, and setting it to fixed height so all 3 result boxes line up evenly,regardless of any text length*/
            height: 70px;
            overflow-y: auto;
            margin-top: auto;
            padding: 13px;
            background: #eef3ff;
            border-left: 4px solid #274e9d;
            border-radius: 5px;
            line-height: 1.5;
          }

          /*Red styling to result for errors, so users differntiate between errors and succesful results*/
          .result.error {
            background: #fdecea;
            border-left-color: #c0392b;
            color: #7a2419;
          }

          footer {
            margin-top: 35px;
            padding: 22px;
            background: #3b2352;
            color: white;
            text-align: center;
          }

          /*make each card have its own color,and also when the buttons are hovered it changes color*/
          /#Adding background color for each card*/
          .card-course{
          background: #f3f6fd;
          }
          
          .card-course h2{
          color: #274e9d;
          }
          .card-course button{
          background: #274e9d;
          }
          .card-course button:hover {
          background: #1d3c7b
          }
          .card-reminder {
          background: #fdf8ee;
          }
          
          .card-reminder h2{
          color: #b8860b;
          }
          .card-reminder button{
          background: #b8860b;
          }
          .card-reminder button:hover{
          background: #8f6a08;
          }
          .card-grade { 
          background: #eef8f3;
          }
          .card-grade h2{
          color: #1e7d5b;
          }
          .card-grade button{
          background: #1e7d5b;
          }
          .card-grade button:hover{
          background: #155c43;
          }
        </style>
      </head>

      <body>
        <header>
          <h1>Student Assistant MCP Demo</h1>

          <p>
            COMP2068 group tutorial demonstrating three student-support tools.
          </p>
        </header>

        <main>
          <section class="intro">
            <h2>About the Project</h2>

            <p>
              Our original MCP server was created using TypeScript, Node.js,
              the MCP SDK, and Zod. It was tested successfully with MCP
              Inspector.
            </p>

            <p>
              This online version demonstrates the same three tool behaviours
              through a public webpage.
            </p>
          </section>

          <section class="tools">
            <!-- Adding a card specific class so each tool has its color -->
            <article class="card card-course">
              <h2>Course Information</h2>

              <label for="courseCode">Course code</label>
             <!-- Adding a dropdown for courses, so users dont get a not found result,either by mistyping or entering a course we dont have 
              <input id="courseCode" value="COMP2084" /> -->
              <select id="courseCode">
                <option value="COMP2068">COMP2068</option>
                <option value="COMP2084" selected>COMP2084</option>
                <option value="GNED1066">GNED1066</option>
              </select>

              <button onclick="getCourseInformation()">
                Get Course Information
              </button>

              <div id="courseResult" class="result">
                Your result will appear here.
              </div>
            </article>

            <article class="card card-reminder">
              <h2>Assignment Reminder</h2>

              <label for="assignmentName">Assignment name</label>

              <input id="assignmentName" value="MCP Group Tutorial" />
              <!-- changed the date picker from value to date type, so users can pick an actual date and not input invalid text -->
              <label for="dueDate">Due date</label>

              <input id="dueDate" type="date" />

              <button onclick="createReminder()">
                Create Reminder
              </button>

              <div id="reminderResult" class="result">
                Your result will appear here.
              </div>
            </article>

            <article class="card card-grade">
              <h2>Grade Average</h2>

              <label for="gradeOne">Grade one</label>
              <input id="gradeOne" type="number" value="90" />

              <label for="gradeTwo">Grade two</label>
              <input id="gradeTwo" type="number" value="80" />

              <label for="gradeThree">Grade three</label>
              <input id="gradeThree" type="number" value="70" />

              <button onclick="calculateAverage()">
                Calculate Average
              </button>

              <div id="gradeResult" class="result">
                Your result will appear here.
              </div>
            </article>
          </section>
        </main>

        <footer>
          COMP2068 JavaScript Frameworks — MCP Group Tutorial
        </footer>

        <script>
          async function sendRequest(url, data) {
            const response = await fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(data)
            });

            const result = await response.json();

            if (!response.ok) {
              throw new Error(result.error || "The request failed.");
            }

            return result;
          }

          async function getCourseInformation() {
            const resultBox = document.getElementById("courseResult");

            try {
              const courseCode =
                document.getElementById("courseCode").value;

              const result = await sendRequest(
                "/api/course-information",
                { courseCode }
              );
              //Sucess: remove any error styling
              resultBox.classList.remove("error");
              resultBox.textContent = result.message;
            } catch (error) {
              //Failure: Add error styling
              resultBox.classList.add("error");
              resultBox.textContent = error.message;
            }
          }

          async function createReminder() {
            const resultBox =
              document.getElementById("reminderResult");

            try {
              const assignmentName =
                document.getElementById("assignmentName").value;

              const dueDate =
                document.getElementById("dueDate").value;

              const result = await sendRequest(
                "/api/assignment-reminder",
                { assignmentName, dueDate }
              );

              //Sucess: remove any error styling
              resultBox.classList.remove("error");
              resultBox.textContent = result.message;
            } catch (error) {
              //Failure: Add error styling
              resultBox.classList.add("error");
              resultBox.textContent = error.message;
            }
          }

          async function calculateAverage() {
            const resultBox =
              document.getElementById("gradeResult");

            try {
              //Get the raw values before converting them to numbers, cuz an empyt input equals 0 in js and would not be rejected
              const gradeOne = document.getElementById("gradeOne").value;
              const gradeTwo = document.getElementById("gradeTwo").value;
              const gradeThree = document.getElementById("gradeThree").value;

              const result = await sendRequest(
                "/api/grade-average",
                { gradeOne, gradeTwo, gradeThree }
              );

              //Sucess: remove any error styling
              resultBox.classList.remove("error");
              resultBox.textContent = result.message;
            } catch (error) {
              //Failure: Add error styling
              resultBox.classList.add("error");
              resultBox.textContent = error.message;
            }
          }
        </script>
      </body>
    </html>
  `);
});

app.get("/health", (_request: Request, response: Response) => {
  response.json({
    status: "ok",
    application: "Student Assistant MCP Demo",
  });
});

app.post(
  "/api/course-information",
  (request: Request, response: Response) => {
    const courseCode = String(request.body.courseCode ?? "")
      .trim()
      .toUpperCase();

    if (!courseCode) {
      response.status(400).json({
        error: "Please enter a course code.",
      });

      return;
    }
    //Removing this error message since students can only get course info about the courses we only have in the dropdwown
    const message = courses[courseCode];

    response.json({ message });
  }
);

app.post(
  "/api/assignment-reminder",
  (request: Request, response: Response) => {
    const assignmentName = String(
      request.body.assignmentName ?? ""
    ).trim();

    const dueDate = String(request.body.dueDate ?? "").trim();
    //Assignment name should be at least 3 chars, so if a user enters less, it throws an error
    if (!assignmentName || !dueDate || assignmentName.length < 3 ) {
      response.status(400).json({
        error: "Please enter the assignment name(at least 3 characters) and due date.",
      });

      return;
    }

    response.json({
      message: `Reminder: ${assignmentName} is due on ${dueDate}. Please submit it before the deadline.`,
    });
  }
);

app.post(
  "/api/grade-average",
  (request: Request, response: Response) => {
    //Get the raw values before converting them to numbers, cuz an empyt input equals 0 in js and would not be rejected
    const rawGradeOne = request.body.gradeOne;
    const rawGradeTwo = request.body.gradeTwo;
    const rawGradeThree = request.body.gradeThree;

    if (rawGradeOne === "" || rawGradeTwo === "" || rawGradeThree === "") {
      response.status(400).json({
        error: "Please enter all three grades.",
      });
      return;
    }

    const grades = [
      Number(rawGradeOne),
      Number(rawGradeTwo),
      Number(rawGradeThree),
    ];

    const invalidGrade = grades.some(
      (grade) =>
        !Number.isFinite(grade) ||
        grade < 0 ||
        grade > 100
    );

    if (invalidGrade) {
      response.status(400).json({
        error: "Each grade must be a number from 0 to 100.",
      });

      return;
    }

    const average =
      grades.reduce((total, grade) => total + grade, 0) /
      grades.length;

    response.json({
      message: `The average grade is ${average.toFixed(2)}%.`,
    });
  }
);

const port = Number(process.env.PORT) || 3000;
const host = "0.0.0.0";

app.listen(port, host, () => {
  console.log(
    `Student Assistant live demo is running at http://localhost:${port}`
  );
});