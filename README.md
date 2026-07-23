# COMP2068 – Group Tutorial
## Model Context Protocol (MCP) SDK with TypeScript

### Georgian College – COMP2068 JavaScript Frameworks


## Team Members

- Rajveer Singh
- Bikalpa Bhandari
- Gurinder Meelu
- Jonathan Ilori
- Karandeep Singh
- Shishir Adhikari

---

# Project Overview

This project was created for the COMP2068 Group Tutorial assignment to demonstrate how the **Model Context Protocol (MCP)** works using the official MCP TypeScript SDK.

The application shows how an MCP server can register tools and respond to user requests. It also includes a simple Express web application that demonstrates the same functionality through a browser.

The project was developed using TypeScript, Node.js, Express, Zod, and the official MCP SDK.

---

# Project Features

This demo contains three MCP tools.

## 1. Course Information

Users can enter a course code and receive information about that course.

Example:

- COMP2068
- COMP2084
- GNED1066

---

## 2. Assignment Reminder

Users enter:

- Assignment Name
- Due Date

The application returns a reminder message.

---

## 3. Grade Average

Users enter three grades.

The application calculates and displays the average grade.

---

# Technologies Used

- Node.js
- TypeScript
- Express.js
- Model Context Protocol (MCP) SDK
- Zod
- MCP Inspector
- Git
- GitHub
- Render


# Requirements

Before running the project, install:

- Node.js (v20 or later)
- Visual Studio Code
- Git


# Installation

Clone the repository.

bash
git clone https://github.com/Rajveer-0001/COMP2068-MCP-Tutorial.git


Move into the project folder.

bash
cd COMP2068-MCP-Tutorial/DemoApp

Install all required packages.

bash
npm install


# Build the Project

Compile the TypeScript files.

bash
npm run build


# Running the MCP Server

Start the MCP server.

bash
npm start


Open MCP Inspector and connect using:

bash
node build/index.js

The registered tools will appear inside MCP Inspector.


# Running the Web Demo

Build the project.

bash
npm run build

Start the Express web application.

bash
npm run start:web

Open your browser and visit:

http://localhost:3000


# In-Class Exercise

Follow these steps during the tutorial.

## Step 1

Clone the repository.

bash
git clone https://github.com/Rajveer-0001/COMP2068-MCP-Tutorial.git

## Step 2

Move into the DemoApp folder.
bash
cd COMP2068-MCP-Tutorial/DemoApp

## Step 3

Install the required packages.

bash
npm install

## Step 4

Build the project.

bash
npm run build

---

## Step 5

Start the web application.

bash
npm run start:web

---

## Step 6

Open your browser.

http://localhost:3000

---

## Step 7

Test the Course Information tool.

Enter:

COMP2068

Click **Get Course Information**.

---

## Step 8

Test the Assignment Reminder tool.

Enter:

- Assignment Name
- Due Date

Click **Create Reminder**.

---

## Step 9

Test the Grade Average tool.

Example:

90
80
70

Click **Calculate Average**.

The application will display the calculated average.

# VS Code Extensions

The following extensions are recommended.

- ESLint
- Prettier
- GitHub Pull Requests and Issues
- npm IntelliSense
- Path IntelliSense
- TypeScript and JavaScript Language Features

# Learning Outcomes

This project helped us understand:

- What the Model Context Protocol (MCP) is.
- How MCP servers are created using the official SDK.
- How to register and use MCP tools.
- How TypeScript improves code quality and reliability.
- How to test MCP tools using MCP Inspector.
- How to build a simple Express web application.
- How to deploy a Node.js project using Render.

# Presentation Summary

During our presentation, we explained:

- Introduction to MCP
- MCP Architecture
- MCP SDK
- Creating an MCP Server
- Registering Tools
- Testing with MCP Inspector
- Live Web Demonstration
- Questions and Answers
