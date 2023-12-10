const fs = require("fs");
const { execSync } = require("child_process");

// Fetch language statistics using GitHub API
const getLanguageStats = () => {
  const result = execSync("npx github-lang-stats TateSamuD");
  return JSON.parse(result.toString());
};

// Generate README content
const generateReadmeContent = () => {
  const languageStats = getLanguageStats();

  let content = `
    # Hello, I'm Tatenda Samudzi

    ## Contact

        - LinkedIn: [LinkedIn](https://www.linkedin.com/in/tatenda-samudzi-6a8525196/)

    ---

    ### My GitHub Stats

    `;

  // Append language statistics
  for (const lang in languageStats) {
    content += `- ${lang}: ${languageStats[lang]}\n`;
  }

  fs.writeFileSync("README.md", content.trim());
};

generateReadmeContent();
