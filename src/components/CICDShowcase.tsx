import React from 'react';

const CICDShowcase: React.FC = () => {
  return (
    <section className="p-6 bg-gray-200">
      <h2 className="text-2xl font-bold">CI/CD Pipeline Showcase</h2>
      <p className="mt-2">
        This section showcases the CI/CD pipelines implemented using YAML templates. Below are examples of the configurations used in my projects.
      </p>
      <h3 className="mt-4 text-xl">Example YAML Configuration</h3>
      <pre className="bg-gray-100 p-4 rounded">
        <code>
          {`
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test

      - name: Build
        run: npm run build

      - name: Deploy
        run: npm run deploy
          `}
        </code>
      </pre>
      <p className="mt-2">
        This YAML configuration defines a CI/CD pipeline that triggers on pushes and pull requests to the `main` branch. It checks out the repository, sets up Node.js, installs dependencies, runs tests, builds the application, and finally deploys it.
      </p>
      <p className="mt-2">
        For more details, visit my <a href="https://github.com/username/repo" className="text-blue-500 hover:underline">GitHub repository</a>.
      </p>
    </section>
  );
};

export default CICDShowcase;