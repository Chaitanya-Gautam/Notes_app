
# 📝 Node.js Mini Project: Notes App

A simple command-line note-taking application built with Node.js.

Below is an image of project in action.

![Project Image](https://github.com/Chaitanya-Gautam/Notes_app/blob/main/notes.jpg)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Add a Note](#add-a-note)
  - [Remove a Note](#remove-a-note)
  - [Read a Note](#read-a-note)
  - [List All Notes](#list-all-notes)
- [Dependencies](#dependencies)
  - [Installing Dependencies](#installing-dependencies)
  - [Updating Dependencies](#updating-dependencies)


## 🚀 Introduction

This Node.js mini project is a command-line notes application that allows users to add, remove, read, and list notes. The notes are stored in a JSON file, providing a simple and portable way to manage your notes.

## ✨ Features

- Add new notes with a title and body.
- Remove notes by title.
- Read the contents of a specific note.
- List all available notes.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [https://nodejs.org/](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone hhttps://github.com/Chaitanya-Gautam/Notes_app
   ```

2. Navigate to the project directory:

   ```bash
   cd Notes_app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## 🚀 Usage

### Add a Note

To add a new note, use the following command:

```bash
npm start add --title="Your Note Title" --body="Your Note Body"
```

### Remove a Note

To remove a note, use the following command:

```bash
npm start remove --title="Note Title to Remove"
```

### Read a Note

To read the contents of a specific note, use the following command:

```bash
npm start read --title="Note Title to Read"
```

### List All Notes

To list all available notes, use the following command:

```bash
npm start list
```

## 📦 Dependencies

The application relies on the following external dependencies:

- `chalk`: For adding color to console output.
- `yargs`: For parsing command-line arguments.

### Installing Dependencies

If you need to install dependencies, run the following command:

```bash
npm install
```

### Updating Dependencies

To update dependencies to their latest versions, run:

```bash
npm update
```

---
Happy coding!😊
