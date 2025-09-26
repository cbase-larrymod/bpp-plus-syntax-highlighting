# Changelog
All notable changes to this project will be documented in this file.

via backslash (`\`) at line end.

## [0.0.2] - 2025-09-25

### Removed
- Support for single-quoted strings. Only double-quoted strings are now recognized as valid string literals.

## [0.0.1] - 2025-09-25

### Added
- Full BASIC v2 coverage:
  - Control statements, standard functions, user-defined functions, variables, operators, I/O and disk commands.
  - `DEF FN` and `FN` declarations with proper function name capture.
  - Variable highlighting including optional `$` or `%` suffix.
  - Line numbers, decimal, hexadecimal (`$...`), and binary (`%...`) numeric constants.
  - `GOSUB` and `GOTO` subroutine calls, including comma-separated calls and child dot notation.
  - BPP+ labels at line start, skipping BASIC keywords.
  - Double-quoted strings with support for braced tokens like `{XXX}`, `{XXX-Z}`, `{5 XXX-*}`.
  - `!include` statements with type and path.
  - BASIC `REM` and BPP+ `;` comments.
  - Statement chaining 

---

## Keep a Changelog
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Types of changes
- `Added` for new features.
- `Changed` for changes in existing functionality.
- `Deprecated` for soon-to-be removed features.
- `Removed` for now removed features.
- `Fixed` for any bug fixes.
- `Security` in case of vulnerabilities.
