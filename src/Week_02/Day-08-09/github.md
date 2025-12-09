# Simple Production Git Workflow

A short, basic guide for a production-ready Git workflow. Each step has a brief explanation and the exact commands.

Prerequisites
- Git installed and configured (user.name and user.email).

Check Git config:
```bash
git config --list
```

1. Initialize repository
Short: Create a local Git repo.
```bash
git init
```

2. Add remote
Short: Point to the hosted repository.
```bash
git remote add origin git@github.com:owner/repo.git
# or
# git remote add origin https://github.com/owner/repo.git
```

3. Create main branch
Short: Create or rename the primary branch to `main`.
```bash
git checkout -b main
# or if renaming:
# git branch -M main
```

4. First commit
Short: Add files and create the initial commit.
```bash
git add .
git commit -m "chore: initial commit"
```

5. Push main and set upstream
Short: Push `main` to the remote and track it.
```bash
git push -u origin main
```

Feature development
- Create feature branch
  Short: Branch from `main` for a single feature.
  ```bash
  git checkout -b feature/ISSUE-123-short-desc
  ```
- Commit work
  Short: Make and save incremental commits.
  ```bash
  git add .
  git commit -m "feat: short description (ISSUE-123)"
  ```
- Sync with main (rebase recommended)
  Short: Update your branch with the latest `main`.
  ```bash
  git fetch origin
  git rebase origin/main
  # Resolve conflicts, then:
  # git add <file>
  # git rebase --continue
  git push --force-with-lease origin feature/ISSUE-123-short-desc
  ```
- Or merge main into feature (alternative)
  ```bash
  git fetch origin
  git merge origin/main
  git push -u origin feature/ISSUE-123-short-desc
  ```
- Push feature branch
  ```bash
  git push -u origin feature/ISSUE-123-short-desc
  ```

Pull Request and code review
- Create PR
  Short: Open a PR from feature to `main`.
  ```bash
  # Using GitHub CLI
  gh pr create --base main --head feature/ISSUE-123-short-desc --title "Short title" --body "Brief description"
  ```
- Address feedback
  Short: Commit fixes to the same branch; PR updates automatically.
  ```bash
  git add .
  git commit -m "fix: address review comments"
  git push origin feature/ISSUE-123-short-desc
  ```

Merge options (choose per team)
- Merge commit (keeps history)
  ```bash
  gh pr merge <PR> --merge
  ```
- Squash merge (single commit)
  ```bash
  gh pr merge <PR> --squash
  ```
- Rebase and merge (replays commits)
  ```bash
  gh pr merge <PR> --rebase
  ```

Delete branch after merge
Short: Clean up local and remote branches.
```bash
git push origin --delete feature/ISSUE-123-short-desc
git branch -d feature/ISSUE-123-short-desc
```

Release and deployment via tags
- Tag release
  Short: Create a semantic, annotated tag on `main`.
  ```bash
  git checkout main
  git pull origin main
  git tag -a v1.2.3 -m "Release v1.2.3"
  git push origin v1.2.3
  ```
- Create release (example GitHub)
  ```bash
  gh release create v1.2.3 --title "v1.2.3" --notes "Short release notes"
  ```
- Deploy
  Short: CI/CD usually triggers on tags or releases; follow your pipeline.

Maintenance and hotfixes
- Create hotfix branch from main
  Short: Fix production issues quickly.
  ```bash
  git checkout -b hotfix/ISSUE-999-short-desc main
  ```
- Commit, push, and PR to main
  ```bash
  git add .
  git commit -m "fix: short fix description (ISSUE-999)"
  git push -u origin hotfix/ISSUE-999-short-desc
  gh pr create --base main --head hotfix/ISSUE-999-short-desc --title "hotfix: short title"
  ```
- Merge and tag, then backport to develop
  ```bash
  # After merging hotfix into main:
  git checkout main
  git pull origin main
  git tag -a v1.2.4 -m "Hotfix v1.2.4"
  git push origin v1.2.4

  # Backport to develop:
  git checkout develop
  git merge origin/main
  git push origin develop
  ```

Branch naming conventions
Short: Use clear prefixes and include issue IDs.
| Type | Pattern | Example |
|------|---------|---------|
| Main | main | main |
| Develop | develop | develop |
| Feature | feature/<ISSUE>-desc | feature/ISSUE-123-add-login |
| Bugfix | bugfix/<ISSUE>-desc | bugfix/ISSUE-234-fix-typo |
| Hotfix | hotfix/<ISSUE>-desc | hotfix/ISSUE-999-fix-crash |
| Release | release/vX.Y.Z | release/v1.2.0 |

Commit message simple format
Short: Keep messages consistent.
```text
type(scope): short description

Examples:
feat(auth): add login handler
fix(payment): prevent NPE on checkout (ISSUE-999)
```

Basic best practices
- Protect `main` with required reviews and CI.
- Keep branches short-lived.
- Use descriptive commits and PR titles.
- Prefer `--force-with-lease` if force-pushing after rebase.

