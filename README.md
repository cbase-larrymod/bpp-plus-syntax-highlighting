# Commodore BPP+ BASIC v2 Syntax Highlighting

A Visual Studio Code extension providing comprehensive syntax highlighting and code snippets for **BPP+ BASIC v2**, enhancing readability and productivity when working with Commodore 64 BASIC v2 code and BPP+ preprocessor files.

Part of the C\*Base Larry Mod 3.1 package.

## Overview

This extension provides syntax highlighting and code snippets for Commodore 64 BASIC v2 programming in Visual Studio Code. It's designed to work seamlessly with the BPP+ preprocessor, supporting modern features like labels, scopes, include directives, and user-defined functions.

However, it can also be used independently for plain BASIC v2 development, making CBM BASIC programs clearer and easier to navigate.

## Features

- **Full BASIC v2 Coverage**: Complete support for control statements, standard functions, user-defined functions, variables, operators, I/O and disk commands
- **User-defined Functions**: Recognizes `DEF FN` and `FN` declarations with proper capture of function names
- **Variables**: Highlights variables including optional `$` (string) or `%` (integer) type suffixes
- **Operators**: Supports all standard BASIC operators and logical operators (`AND`, `OR`, `NOT`)
- **Numbers**: Differentiates line numbers, numeric constants (decimal, hexadecimal `$...`, binary `%...`)
- **Subroutine Calls**: Detects `GOSUB` and `GOTO` calls, including multiple comma-separated calls and optional child dot notation
- **Labels**: Recognizes BPP+ labels at the start of lines while skipping BASIC keywords
- **Strings**: Handles double-quoted strings, including braced tokens such as `{n XXX}`, `{XXX-Y}`, or `{n XXX-*|^|@}`, where `n` indicates repetition count and `|` denotes alternatives
- **Include Statements**: Supports BPP+ `!include` statements with type (source or data) and path
- **Comments**: Highlights BASIC `REM` and BPP+ `;` comments
- **Statement Chaining**: Highlights backslash (`\`) at end of line for BPP+ statement chaining

</details>

<details>
<summary><strong>Code Snippets</strong></summary>

The extension provides extensive code snippets for quick insertion of common BASIC v2 and BPP+ commands:

### Mathematical Functions

`abs`, `atn`, `cos`, `exp`, `int`, `log`, `rnd`, `sgn`, `sin`, `sqr`, `tan`

### String Functions

`asc`, `chr`, `left$`, `len`, `mid$`, `right$`, `str$`, `val`

### Control Flow

`for`, `fors` (with STEP), `gosub`, `goto`, `if`, `on`

### Variables & Data

`data`, `def` (function definition), `dim`, `fn`, `let`, `read`

### Input/Output

`cmd`, `get`, `get#`, `input`, `input#`, `print`, `print#`

### File Operations

`close`, `load`, `open`, `save`, `verify`

### Memory & System

`peek`, `poke`, `sys`, `usr`, `wait`, `fre`, `pos`

### Screen Control

`spc`, `tab`

### Comments & Includes

- `rem` - BASIC comment
- `!include source` - BPP+ source include
- `!include data` - BPP+ data include

### Control Characters

Over 50 Commodore 64 control character snippets including:

**Colors**: `{wht}`, `{red}`, `{grn}`, `{blu}`, `{blk}`, `{cyn}`, `{pur}`, `{yel}`, `{orng}`, `{brn}`, `{lred}`, `{lblu}`, `{lgrn}`, `{gry1}`, `{gry2}`, `{gry3}`

**Cursor Control**: `{up}`, `{down}`, `{left}`, `{rght}`, `{home}`, `{clr}`

**Text Modes**: `{rvon}`, `{rvof}`, `{swuc}`, `{swlc}`

**Editing**: `{del}`, `{inst}`

**Function Keys**: `{f1}` through `{f8}`

**Special Characters**: `{return}`, `{space}`, `{pi}`, `{esc}`, `{stop}`

Each control character snippet is available in both token form (e.g., `{wht}`) and `chr$()` function form (e.g., `chr$(5)`).

</details>

## Installation

1. **Clone the repository**:

```bash
git clone https://github.com/cbase-larrymod/bpp-plus-syntax-highlighter.git
cd bpp-plus-syntax-highlighter
```

2. **Package the extension**:

Install `vsce` (Visual Studio Code Extension Manager) if needed:

```bash
npm install -g vsce
```

Package the extension:

```bash
vsce package
```

This generates a `.vsix` file (e.g., `bpp-plus-basic-v2-syntax-0.0.4.vsix`)

3. **Install in VS Code**:

- Open VS Code
- Go to Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X` on Mac)
- Click the three-dot menu (⋯) in the top-right corner
- Select **Install from VSIX...**
- Choose the generated `.vsix` file

</details>

## Usage

1. Open a file with `.bas` or `.bpp` extension
2. VS Code should automatically detect and apply **BPP+ BASIC v2** syntax highlighting
3. If not, click the language mode indicator in the bottom-right corner and select **BPP+ BASIC v2**
4. Start typing snippet prefixes to see available code snippets

### Using Snippets

Type the snippet prefix (e.g., `print`, `for`, `{red}`) and press `Tab` or `Enter` to insert the snippet. Use `Tab` to navigate between placeholder fields in multi-field snippets.

## Development

<details>
<summary><strong>Testing in Development Mode</strong></summary>

To test the extension without permanent installation:

1. Open the repository in VS Code
2. Create `.vscode/launch.json` with this configuration:

```json
{
  "version": "0.0.4",
  "configurations": [
    {
      "name": "Run Extension (Development)",
      "type": "extensionHost",
      "request": "launch",
      "runtimeExecutable": "${execPath}",
      "args": [
        "--extensionDevelopmentPath=${workspaceFolder}",
        "${workspaceFolder}/test-file.bpp"
      ]
    }
  ]
}
```

3. Press `F5` to launch a new VS Code window with the extension loaded
4. Test syntax highlighting, snippets, and other features

> **Note**: This development mode is for testing purposes only and doesn't install the extension permanently.

</details>

<details>
<summary><strong>Syntax Categories</strong></summary>

The grammar definition covers these categories:

- **Keywords Control**: `END`, `FOR`, `NEXT`, `GOSUB`, `GOTO`, `IF`, `THEN`, `STEP`, `STOP`, `RETURN`, `TO`, `ON`
- **Keywords Functions**: `ABS`, `ASC`, `ATN`, `CHR$`, `COS`, `EXP`, `INT`, `LEN`, `LEFT$`, `MID$`, `PEEK`, `POS`, `RND`, `RIGHT$`, `SGN`, `SIN`, `SQR`, `TAN`, `STR$`, `USR`, `VAL`
- **User Functions**: `DEF FN`, `FN` with captured function names
- **Storage/Declaration**: `DIM`, `DATA`, `LET`, `DEF`
- **I/O and Disk**: `PRINT`, `PRINT#`, `INPUT`, `INPUT#`, `OPEN`, `CLOSE`, `LOAD`, `LIST`, `SAVE`, `RESTORE`, `READ`, `GET`, `GET#`, `POKE`, `PEEK`, `SYS`, `RUN`, `VERIFY`, `WAIT`
- **Operators**: `*`, `/`, `+`, `-`, `^`, `=`, `<>`, `<`, `>`, `<=`, `>=`, `AND`, `OR`, `NOT`
- **Numbers**: Line numbers, decimal, hexadecimal (`$...`), binary (`%...`)
- **Labels and Subroutines**: BPP+ labels and calls after `GOSUB` or `GOTO`
- **Strings**: Double-quoted strings with braced token support
- **Include Statements**: `!include source "..."` or `!include data "..."`
- **Comments**: `REM` (BASIC) and `;` (BPP+)
- **Statement Chaining**: Lines ending with backslash (`\`)

</details>

## Release Notes

### Version 0.0.4

- Comprehensive syntax highlighting for BASIC v2 and BPP+ features
- Over 50 code snippets for BASIC v2 commands and functions
- Complete Commodore 64 control character support (both token and chr$() forms)
- Support for BPP+ preprocessor directives and features
- Enhanced string handling with braced token support

For detailed release history, see [CHANGELOG.md](CHANGELOG.md)

## Repository

[https://github.com/cbase-larrymod/bpp-plus-syntax-highlighter](https://github.com/cbase-larrymod/bpp-plus-syntax-highlighter)

## License

See LICENSE file in the repository.