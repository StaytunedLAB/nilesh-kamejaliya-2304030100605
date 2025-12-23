// This script creates a new issue in a specified GitHub repository using the GitHub REST API.
// $env:GITHUB_TOKEN="your_personal_access_token_here" (for Terminal)
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const OWNER = "knilesh2212";
const REPO = "GitHub-API-Practice";

async function createIssue() {
  const url = `https://api.github.com/repos/${OWNER}/${REPO}/issues`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Test issue from GitHub REST API",
      body: "This issue was created using JavaScript and GitHub REST API 🚀",
      labels: ["bug", "api"],
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("Error creating issue:", data);
    return;
  }

  console.log("✅ Issue created successfully!");
  console.log("🔗 Issue URL:", data.html_url);
}

createIssue();
