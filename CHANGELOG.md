# Changelog
All notable changes to this project will be documented in this file.

## [Unreleased]

### Changed
- `keywords_storage`: split into `storage.type` (dim, def) and `keyword.other` (data, let) — `storage.modifier` was the wrong TextMate scope
- `keywords_io_disk`: changed scope from non-standard `keyword.io` to `keyword.other`
- `numbers_line`: changed scope from `constant.language` to `constant.numeric` — line numbers are numeric, not language constants; now consistent with inline numbers
- `labels`: changed scope from `entity.name.function.basic` to `entity.name.function` — matches `label_subroutine_calls` so definition and reference sites share the same color
- `user_functions`: outer scope changed to `meta.definition.function`; `DEF FN`/`FN` keyword changed from `keyword.control` to `keyword.other`
- `statement_chaining`: changed scope from `invalid.illegal` to `punctuation.separator.continuation` — backslash continuation is valid BPP+ syntax, not an error
- `extension_symbols`: kept as `invalid.illegal.prof-plum-extensions` — matches `petscii_conversions` rendering so `@` and `←` are visually consistent
- Braced token delimiters `{` `}` inside strings: changed from `support.function.token.braces.*` to `punctuation.definition.keyword.begin/end`
- Removed redundant `text.whitespace` match inside braced tokens
- Removed redundant `string.character` catch-all inside strings

### Added
- Added missing BASIC v2 functions to `keywords_functions`: `fre`, `log`, `spc`, `tab`
- Added reserved system variables `st`, `ti`, and `ti$` as `variable.language` — distinguished from regular user variables
- Added missing BASIC v2 keywords to `keywords_io_disk`: `cmd`, `cont`, `new`

### Fixed
- `clr` was not highlighted — missing from `keywords_io_disk`, causing it to fall through to `variable.other`
- `peek` removed from `keywords_io_disk` where it was a duplicate — it is correctly matched by `keywords_functions`
- String functions `chr$`, `left$`, `mid$`, `right$`, and `str$` were not highlighted as `support.function` — the trailing `\b` word boundary assertion failed when the function was followed by `(`, because `$` is a non-word character and `\b` after it requires the next character to be a word character. Fixed by splitting `keywords_functions` into two patterns: one with a trailing `\b` for non-`$` functions, and one without for `$`-suffixed functions.

## [0.0.7] - 2026-02-25

### Removed
Removed syntax highlighting inside print statements for:

- @
- ← (arrow-left)
- £ (pound symbol)

## [0.0.6] - 2026-02-22

### Fixed

PETSCII extension symbols are now correctly highlighted both outside and inside double-quoted strings:

- @
- ← (arrow-left)
- £ (pound symbol)

These symbols are now consistently recognized as extension symbols across all contexts.
  
## [0.0.5] - 2025-10-18

### Added
- Added syntax highlighting for Prof. Plum’s BASIC extensions:
  - @
  - ← (arrow-left)

These symbols are now recognized and highlighted as special C\*Base BASIC v2 commands.

**Note**  
The :: sequence forces the compiler **(Blitz)** to compile the following command as an extension. However, this is not required for the two extensions from Prof. Plum  `@` and  `←`.

If you want to compile JiffyDOS commands or commands from other BASIC extensions such as Simons BASIC, you should use the double-colon (::) prefix.

## [0.0.4] - 2025-10-14

### Changed
- All snippets functions excluding `!include source "filename.bpp"` and `!include data "filename.bpp"` has been exchanged with som modifications to the ones used in [COMMODORE 64 BASIC V2 Extension](https://github.com/gverduci/c64basicv2) all credits to "gverduci".
- Moved the repo from private account to the **cbase-larrymod** organisation

### Removed
- `.vsix` package for manual installation in VS Code.

## [0.0.4] - 2025-09-28

### Added
- `.vsix` package for manual installation in VS Code.
- Instructions in the `README.md` for packaging and running the extension in development mode via F5.
- Clarified syntax highlighting details and snippet usage.

## [0.0.4] - 2025-09-26

### Added
- **Numeric function snippets**:
  - `ABS(n)`: Returns the absolute value of a numeric expression (floating point only).  
  - `ATN(n)`: Arc tangent of a numeric value, result in radians.  
  - `COS(n)`: Cosine of an angle in radians.  
  - `EXP(n)`: e raised to the power of the given number.  
  - `LEN(s)`: Returns number of characters in a string (0–255).  
  - `LOG(n)`: Natural logarithm of a numeric value.  
  - `SGN(n)`: Returns -1, 0, or 1 depending on sign of numeric value.  

- **String function snippets**:
  - `ASC(x)`: Returns ASCII code of first character in a string.  
  - `CHR$(n)`: Converts a number (0–255) to ASCII character.  
  - `LEFT$(s,n)`: Returns leftmost `n` characters of a string.  
  - `MID$(s,start[,length])`: Returns substring starting at `start` with optional `length`.  
  - `RIGHT$(s,n)`: Returns rightmost `n` characters of a string.  

- **Command snippets**:
  - `CLOSE(n)`: Closes open file/device (0–255) and flushes buffer.  
  - `DIM Array`: Declare a new array with one dimension. Additional arrays added manually.  
  - `REM [text]`: Insert a REM comment; ignored by interpreter.  

### Changed
- Snippet scope updated to `"source.bpp+basicv2"` for all BASIC v2 functions and commands.  

- **Numeric function snippets**:
  - `PEEK(addr)`: Returns contents of memory at given address (0–65535).  

- **Command snippets**:
  - `GOTO <label>`: Inserts GOTO statement with placeholder.  
  - `GOSUB <label>`: Inserts GOSUB statement with placeholder.  
  - `POKE(addr,byte)`: Sets memory at given address (0–65535) to byte value (0–255).  

- **BPP+ include snippets**:
  - `!include source "filename"`: Insert BPP+ source include inside `{}`.  
  - `!include data "filename"`: Insert BPP+ data include inside `{}`.  

## [0.0.3] - 2025-09-26

### Added
- **Auto-closing pairs**:  
  - `{ }` for braced tokens.
  - `" "` for double-quoted strings.  
  - `( )` for parentheses.  
- **Snippets for `!include` statements**: Inserts `!include source "filename"` and `!include data "filename"` inside `{}`.  
- **GOTO snippet**: Inserts `GOTO` with a placeholder for the label name.  
- **GOSUB snippet**: Inserts `GOSUB` with a placeholder for the label name.  
- **POKE/PEEK snippets**: Inserts `POKE address,value` or `PEEK(address)` for memory operations.  

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
  - Statement chaining via backslash (`\`) at line end.

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
