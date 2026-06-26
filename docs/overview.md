# BPP+ Syntax Highlighting

Visual Studio Code extension for Commodore 64 BASIC v2 and BPP+ preprocessor.

**Version:** 0.1.0
**Part of:** C\*Base Larry Mod v3.1

---

## What it does

Adds syntax highlighting and code snippets for BASIC v2 to VS Code. Works with standard line-numbered BASIC (.bas) and BPP+ preprocessor files (.bpp).

Colors keywords, functions, variables, strings, numbers, and PETSCII control characters. Provides 100+ code snippets for commands, functions, and screen control codes. Activates automatically when opening .bas or .bpp files.

---

## Features

- Syntax highlighting for all BASIC v2 keywords and functions
- BPP+ feature highlighting (labels, scopes, includes, statement chaining)
- 100+ code snippets with tab-navigable placeholders
- PETSCII control characters in token (`{clr}`) and chr$ (`chr$(147)`) forms
- Extension symbols (MCI commands: `@`, `←`, `£`)
- Blitz! compiler directive support (`rem **`, `!blitz`, `::`)
- Theme compatibility (adapts to any VS Code color scheme)
- Zero configuration required

---

## File types

- `.bas` - BASIC v2 source files
- `.bpp` - BPP+ preprocessor source files

---

## Documentation

Complete documentation available:

- **[Manual](manual.md)** - Comprehensive single-document reference
- **[Online documentation](https://cbasereferenceguide.github.io/development/bpp-plus-syntax-highlighting/)** - Full site with navigation

---

## Installation

Requires Visual Studio Code v1.105.0 or later.

Three installation methods available:
- Install pre-compiled extension (from `dist/` folder)
- Build and install from source
- Development installation

See [Installation guide](https://cbasereferenceguide.github.io/development/bpp-plus-syntax-highlighting/getting-started/installation/) for detailed instructions.

---

## Related tools

- [BPP+ Preprocessor](https://cbasereferenceguide.github.io/development/bpp-plus-preprocessor/) - Compile enhanced BASIC to standard BASIC v2

---

## GitHub repository

Source code, issues, and releases:
[https://github.com/cbase-larrymod/bpp-plus-syntax-highlighter](https://github.com/cbase-larrymod/bpp-plus-syntax-highlighter)

---

**Last updated:** 2026-06-26
**License:** See [LICENSE.md](https://github.com/cbase-larrymod/bpp-plus-syntax-highlighter/blob/main/LICENSE.md)
