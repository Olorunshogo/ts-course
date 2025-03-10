# ts-course
TypeScript Course for Beginners - Learn TypeScript from Scratch! 
This project is part of a course by Academind. Watch the full course here:
[TypeScript for Beginners - Academind](https://www.youtube.com/watch?v=BwuLxPH8IDs)

---

## Overview
This project demonstrate how to use **TypeScript** in conjunction with **Tailwind CSS** for styling, **Autoprefixer** for automatic vendor prefixing, and **PostCSS** for CSS processing. 

### Technologies Used
+ **TypeScript** - A superset of JavaScript that adds static typing.
+ **Tailwind CSS** - A utility-first CSS framework for rapid UI development.
+ **Autoprefixer** - A tool that automatically adds vendor prefixes to CSS rules.
+ **PostCSS** - A tool for transforming CSS with JavaScript plugins.
+ **lite-server** - A simple development server to serve the project.

---

## Prerequisites

Before starting with this project, ensure that you have the following software installed:

- [Node.js](https://nodejs.org/)
- [npm](https://npmjs.com/)

You can verigy your installation by running:
```bash
node -v
npm -v
```

---

## Installation
Follow the steps to set up the project locally:

1. **Clone the repository**
Clone this repository to your local machine:

```bash
git clone https://github.com/Olorunshogo/ts-course.git
cd ts-course

```

2. **Install the dependencies**
Run the following command to install the required packages listed in package.json:
```bash
    npm install
```

3. **PostCSS Setup**
Ensure that you have a postcss.config.js file in the root of the project. This file should be configured to use **Tailwind CSS** and **Autoprefixer**:

```
    // postcss.config.js
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
```
This configuration ensures that Autoprefixer will add the necessary vendor prefixes after Tailwind CSS compiles your styles

---

## Running the Development Build
To start building and watching for changes in your Tailwind CSS, run the following command:

```
npm run tailwindcss
```

This command will use **@tailwindcss/cli** to process your *input.css* file and output the processed CSS into *output.css*, watching for any changes to your source files.

Once the server is running, you can open the project in your browser. To start the development server, run:

```bash
    npm start
```

This will launch **lite-server**, a simple development server that will serve your project locally and automatically open it in your browser.

---

## Troubleshooting
If you encounter any issues, such as Autoprefixer not working, try the following:

1. **Verify the installed packages**
Ensure that both **Autoprefixer** and **PostCSS** are installed correctly by running:

```bash
npm list autoprefixer postcss
```

2. **Check the PostCSS Configuration**
Ensure that your *postcss.config.js* file is correctly configured as shown above.

You can check the installation of these packages by running:

```
npm list autoprefixer postcss
```

---



### TypeScript Features

### 1. Core Types
TypeScript introduces a strong static type system. Some of the core types include:

+ **number**: All numbers, including integers and floats.
+ **string**: Text values.
+ **boolean**: *true* or *false*.
+ **object**: More specific types are possible.
+ **Array**: Any JavaScript array, type can be flexible or strict (regarding the element types)
+ **Tuple**: Fixed lenght and type array
+ **Enum**: Specific identifiers, global constants in use in which it's best to assign a human-readable label.
+ **Any**: It can store any type of value in there.
+ **Union**: It allows a variable to be one of several types.
+ **Literal**: A variable can only hold one specific value.
+ **Function**: To describe a variable that holds a function.
+ **Unknown**: Not sure the type of what's going to be entered but i know what I'm going to do with it.
+ **Never**: This type represents values that never occur or situations that should never happen i.e. This should never be possible!

### 2. Next-Gen JavaScript Features
TypeScript supports modern JavaScript features, such as async/await, modules, and more.

### 3. Non-JavaScript Features
TypeScript adds features like *Interfaces* and *Generics*, which are not available in JavaScript.

### 4. Meta-Programming Features
TypeScript offers decorators and other meta-programming features that make your code more powerful.

### 5. Rich Configuration Options
TypeScript provides various configuration options, allowing you to tailor your environment to your needs.

### 6. Modern Tooling
Even if you're not working with TypeScript directly, many modern tools and libraries support TypeScript for improved development experience.

---
### Module Introduction
1. Watch mode
```bash
  tsc app.ts --watch/--w
```

---

### Course Outline

#### TypeScript Basics
1. **Compiler & Configuration Deep Dive**
2. **Working with Next-gen JS Code**
3. **Classes & Interfaces**
4. **Advanced Types & TypeScript Features**
5. **Generics+ Decorators**
6. **Time to Practice - Full Projects**
7. **Wroking with Namespaces & Modules**
8. **Webpack & TypeScript**
9. **Third-Party Libraries & TypeScript**
10. **React + TypeScript & NodeJS + TypeScript**

---

### How To Get The Most Out Of The Course
To get the best learning experience, follow these tips:
1. **Watch the videos** - Watch at your own pace.
2. **Code Along** - Pause and rewind as needed.
3. **Practice** - Try out the concepts on your own.
4. **Debug & Search** - Use attached Code, Google, or search within the course platform for help.
5. **Engage** - Ask questions in the Q&A section and help other learners by answering questions.

---

## License
This project is licensed by [MIT](https://github.com/Olorunshogo/ts-course#MIT-1-ov-file)
---

## Acknowledgements
+ **Academind** for creating the course and teaching TypeScript to beginners.
+ **TailwindCSS** and **Autoprefixer** for helping with styling.
+ **Lite-server** for serving the project locally.