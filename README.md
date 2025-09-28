# Commodore BPP+ BASIC v2 Syntax Highlighting

This repository provides a syntax highlighting definition for **BPP+ BASIC v2**. It enhances readability and makes editing BPP+ files, including Commodore 64 BASIC v2 code, easier in Visual Studio Code.

The grammar is based on the original BPP+ preprocessor but focuses on syntax highlighting. It highlights modern BPP+ features such as labels, scopes, include directives, and user-defined functions, making CBM BASIC programs clearer and easier to navigate.

## Features

- **Full BASIC v2 Coverage**: Highlights control statements, standard functions, user-defined functions, variables, operators, I/O and disk commands, and more.  
- **User-defined Functions**: Recognizes `DEF FN` and `FN` declarations with proper capture of the function name.  
- **Variables**: Highlights variables, including optional `$` or `%` type suffix, making it easier to spot strings and integer variables.  
- **Operators**: Supports standard BASIC operators and logical operators (`AND`, `OR`, `NOT`).  
- **Numbers**: Differentiates line numbers, numeric constants (decimal, hexadecimal `$...`, binary `%...`).  
- **Subroutine Calls**: Detects `GOSUB` and `GOTO` calls, including multiple comma-separated calls and optional child dot notation.  
- **Labels**: Recognizes BPP+ labels at the start of a line, while skipping BASIC keywords.  
- **Strings**: Handles only double-quoted strings, including braced tokens such as `{n XXX}`, `{XXX-Y}`, or `{n XXX-*|^|@}`, where `n` is a numeric value indicating repetition. The `|` denotes alternatives, so `*`, `^`, or `@` etc. may be used.
- **Include Statements**: Supports BPP+ `!include` statements with type (source or data) and path.  
- **Comments**: Highlights BASIC `REM` and BPP+ `;` comments.  
- **Statement Chaining**: Highlights backslash (`\`) at end of line for BPP+ statement chaining.  
- **Snippets**: Provides code snippets for common BASIC v2 and BPP+ commands and functions, including numeric and string functions (`ABS`, `ASC`, `ATN`, `CHR$`, `COS`, `EXP`, `LEN`, `LEFT$`, `MID$`, `RIGHT$`, `SGN`, `LOG`), file I/O commands (`OPEN`, `CLOSE`, `POKE`, `PEEK`), GOSUB/GOTO statements, REM comments, and `!include` statements. Snippets allow quick insertion and reduce typing errors.

## Installation and usage

This grammar is designed as a Visual Studio Code extension. Follow these steps to use it:

1. **Install the extension manually**:
   - Clone or download the repository from [BPP+ repository](https://github.com/hakkanpersson/bpp-plus).
   - Open VS Code.
   - Go to the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X` on Mac).
   - Click the three-dot menu in the top-right corner and choose **Install from VSIX...**.
   - Select the downloaded `.vsix` file.

2. **Apply the syntax**:
   - Open a file with the `.bas` or `.bpp` extension.
   - VS Code should automatically detect the file type and apply the `BPP+ BASIC v2` syntax highlighting.
   - If not, click the language mode in the bottom-right corner and select **BPP+ BASIC v2**.

## Packaging & Running

You can test or distribute the extension using the following methods:

### 1. Package the extension as a `.vsix` file

1. Install `vsce` (Visual Studio Code Extension Manager) if you haven’t already:

   ```bash
   npm install -g vsce
    ```

2. From the root of the repository (where package.json resides), run:

    ```bash
    vsce package
    ```

   - This will generate a .vsix file (e.g., bpp-plus-basic-v2-syntax-0.0.4.vsix).

3. Install the `.vsix` in VS Code manually:
   - Open the Extensions view.
   - Click the three-dot menu in the top-right corner → **Install from VSIX...**
   - Select the `.vsix` file generated.

### 2. Run the extension in development mode via F5

If you want to test the extension without installing it permanently:

1. Open the repository in VS Code.
2. Create a `.vscode/launch.json` in your workspace with this template:


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
        "${workspaceFolder}/.vscode/replace-with-your-test-file.bpp"
    ]
    }
]
}
```

3. Press F5 to launch a new VS Code window with the extension loaded.
   - This will allow you to test syntax highlighting, snippets, and other extension features without installing the .vsix.

> Note: This process is for testing the extension only

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
- **Snippets**: Quick-insert templates for BASIC v2/BPP+ functions, statements, and includes.  
