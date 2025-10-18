# Changelog
All notable changes to this project will be documented in this file.

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
