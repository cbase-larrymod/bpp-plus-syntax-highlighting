# Commodore BPP+ BASIC v2 Syntax Highlighting

This repository provides a syntax highlighting definition for **BPP+ BASIC v2**. It is designed to enhance readability and editing experience for BPP+ files, including Commodore 64 BASIC v2 code.

---

## Features

- **Full BASIC v2 Coverage**: Highlights control statements, standard functions, user-defined functions, variables, operators, I/O and disk commands, and more.  
- **User-defined Functions**: Recognizes `DEF FN` and `FN` declarations with proper capture of the function name.  
- **Variables**: Highlights variables, including optional `$` or `%` type suffix, making it easier to spot strings and integer variables.  
- **Operators**: Supports standard BASIC operators and logical operators (`AND`, `OR`, `NOT`).  
- **Numbers**: Differentiates line numbers, numeric constants (decimal, hexadecimal `$...`, binary `%...`).  
- **Subroutine Calls**: Detects `GOSUB` and `GOTO` calls, including multiple comma-separated calls and optional child dot notation.  
- **Labels**: Recognizes BPP+ labels at the start of a line, while skipping BASIC keywords.  
- **Strings**: Handles double and single quoted strings, including braced tokens like `{XXX}`, `{XXX-Z}`, or `{5 XXX-*}`.  
- **Include Statements**: Supports BPP+ `!include` statements with type and path.  
- **Comments**: Highlights BASIC `REM` and BPP+ `;` comments.  
- **Statement Chaining**: Highlights backslash (`\`) at end of line for BPP+ statement chaining.  

---

## Installation

1. Download the `tmLanguage.json` file from this repository.  
2. Place the file in your editor’s syntax directory:  
   - **VS Code**: `~/.vscode/extensions/`  
3. Restart your editor.  
4. Open a `.bas` or `.bpp`  file to see syntax highlighting in action.  

---

## Usage

- Open any BPP+ file.  
- The syntax highlighting will automatically apply to recognized constructs.  
- Variables with `$` or `%` suffix will be highlighted consistently.  
- Braced tokens inside strings will correctly highlight numeric values, alphanumeric tokens, and operators (`-+*^@.`).  

---

## File Structure

The syntax definition covers the following categories:

- **Keywords Control**: `END`, `FOR`, `NEXT`, `GOSUB`, `GOTO`, `IF`, `THEN`, `STEP`, `STOP`, `RETURN`, `TO`, `ON`.  
- **Keywords Functions**: `ABS`, `ASC`, `ATN`, `CHR$`, `COS`, `EXP`, `INT`, `LEN`, `LEFT$`, `MID$`, `PEEK`, `POS`, `RND`, `RIGHT$`, `SGN`, `SIN`, `SQR`, `TAN`, `STR$`, `USR`, `VAL`.  
- **User Functions**: `DEF FN`, `FN` with captured function names.  
- **Storage/Declaration Keywords**: `DIM`, `DATA`, `LET`, `DEF`.  
- **I/O and Disk Keywords**: `PRINT`, `PRINT#`, `INPUT`, `INPUT#`, `OPEN`, `CLOSE`, `LOAD`, `LIST`, `SAVE`, `RESTORE`, `READ`, `GET`, `GET#`, `POKE`, `PEEK`, `SYS`, `RUN`, `VERIFY`, `WAIT`.  
- **Operators**: `*`, `/`, `+`, `-`, `^`, `=`, `<>`, `<`, `>`, `<=`, `>=`, `AND`, `OR`, `NOT`.  
- **Numbers**: Line numbers, decimal, hexadecimal `$...`, binary `%...`.  
- **Labels and Subroutines**: BPP+ labels and calls after `GOSUB` or `GOTO`.  
- **Strings**: Single and double quoted strings, including braced tokens.  
- **Include Statements**: `!include source "..."` or `!include data "..."`.  
- **Comments**: `REM` for BASIC and `;` for BPP+.  
- **Statement Chaining**: Lines ending with backslash (`\`).