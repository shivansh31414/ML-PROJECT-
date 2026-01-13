# Contributing to ML-PROJECT

Thank you for your interest in contributing! 🎉  
This guide will help you get started and ensure your contributions are smooth, reviewer-friendly, and aligned with project standards.

---

## 📌 Contribution Workflow

1. **Fork & Clone**
   - Fork this repository and clone it locally.

2. **Branching**
   - Create a feature branch:  
     ```bash
     git checkout -b feature/<short-description>
     ```

3. **Commits**
   - Sign off commits for [DCO compliance](https://developercertificate.org/).  
     ```bash
     git commit -s -m "feat(auth): add login endpoint"
     ```

4. **Pull Requests**
   - Keep PRs focused (one feature/fix per PR).
   - Use descriptive titles and summaries.
   - Link related issues (e.g., `Fixes #5`).
   - Ensure all checklist items below are complete.

---

## 🧑‍💻 Coding Style

- **Language**: Python (FastAPI + SQLite backend).
- **Linting**: Follow PEP8 guidelines. Run `flake8` before committing.
- **File Structure**: Respect modular backend setup (`routes/`, `models/`, `db/`).
- **Documentation**: Add docstrings for functions/classes. Update README if relevant.

---

## ✅ Testing

- **Unit Tests**: Required for new features. Use `pytest`.
- **Integration Tests**: For API endpoints.
<!-- - **CI/CD**: All tests must pass before merging (GitHub Actions pipeline).
- **Coverage**: Aim for ≥80%. -->

---

## 📝 Commit & PR Guidelines

### Commit Messages
- Format: `<type>(scope): short description`
- Example:  
  ```text
  fix(auth): resolve token expiry issue
