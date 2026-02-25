# BPP+ Syntax Highlighting

**Visual Studio Code extension for Commodore 64 BASIC v2 and BPP+ preprocessor**

Adds syntax highlighting and code snippets for BASIC v2 to VS Code. Works with standard line-numbered BASIC (.bas) and BPP+ preprocessor files (.bpp).

Part of the **C\*Base Larry Mod v3.1** development package.

---

## Features

- Syntax highlighting for all BASIC v2 keywords and functions
- BPP+ feature highlighting (labels, scopes, includes, statement chaining)
- 100+ code snippets with tab-navigable placeholders
- PETSCII control characters in token (`{clr}`) and chr$ (`chr$(147)`) forms
- Extension symbols (MCI commands: `@`, `←`, `£`)
- Blitz! compiler directive support (`rem **`, `::`)
- Theme compatibility (adapts to any VS Code color scheme)
- Zero configuration required

---

## Quick example

```cbmbas
view_Opening:
    tl$="System setup"\
    print "{clr}{2 down}";\
    gosub ui_Elements.render_Logo\
    gosub ui_Elements.render_Swosh\
    print "{4 down}{7 rght}{wht}Press any key!{3 down}"\
    gosub func_PressAnyKey

    goto view_Information
```

The extension highlights:
- BASIC v2 keywords: `print`, `goto`, `gosub`
- BPP+ labels: `view_Opening:`, `ui_Elements.render_Logo`
- Scopes: `ui_Elements` namespace
- Statement chaining: backslash (`\`) continuations
- PETSCII tokens: `{clr}`, `{down}`, `{wht}`, `{rght}`

---

## Installation

### Prerequisites

**Required:**
- Visual Studio Code v1.105.0 or later

**Optional (for building from source):**
- Node.js v16.0 or later
- vsce (VS Code Extension Manager)

### Method 1: Install pre-compiled extension

The repository includes a pre-compiled `.vsix` file in the `dist/` folder.

1. Download or clone the repository:
   ```bash
   git clone https://github.com/cbase-larrymod/bpp-plus-syntax-highlighter.git
   cd bpp-plus-syntax-highlighter
   ```

2. Install the extension:

   **Via VS Code UI:**
   - Open Extensions panel (`Ctrl+Shift+X` or `Cmd+Shift+X`)
   - Click `···` menu → **Install from VSIX**
   - Navigate to `dist/bpp-plus-basic-v2-syntax-0.0.7.vsix`
   - Click **Install**

   **Via command line:**
   ```bash
   code --install-extension dist/bpp-plus-basic-v2-syntax-0.0.7.vsix
   ```

### Method 2: Build and install from source

1. Clone the repository:
   ```bash
   git clone https://github.com/cbase-larrymod/bpp-plus-syntax-highlighter.git
   cd bpp-plus-syntax-highlighter
   ```

2. Install vsce:
   ```bash
   npm install -g @vscode/vsce
   ```

3. Build the extension:
   ```bash
   npm run package
   ```

   This creates `dist/bpp-plus-basic-v2-syntax-0.0.7.vsix`.

4. Install using VS Code UI or command line (see Method 1 step 2).

### Method 3: Development mode

For testing and development:

```bash
git clone https://github.com/cbase-larrymod/bpp-plus-syntax-highlighter.git
cd bpp-plus-syntax-highlighter
code .
```

Press `F5` to launch extension development host.

### Verification

After installation, create a test file:

```bash
echo '10 print "{clr}{wht}hello world"' > test.bas
code test.bas
```

Expected:
- Extension activates when opening `.bas` or `.bpp` files
- Keywords like `print` appear styled
- Status bar shows **BPP+ BASIC v2** as language mode

---

## Documentation

Complete documentation available:

- **[Manual](docs/manual.md)** - Comprehensive single-document reference
- **[Overview](docs/overview.md)** - Quick feature summary
- **[Online documentation](https://cbasereferenceguide.github.io/development/bpp-plus-syntax-highlighting/)** - Full site with navigation

---

## Related tools

**BPP+ Preprocessor** - Source-to-source compiler that transpiles enhanced BASIC syntax into standard Commodore BASIC v2.

BPP+ adds modern development features to BASIC v2:
- Labels - Named anchors instead of line numbers
- Scopes - Organize related labels into namespaces
- Includes - Modular source files and binary data
- Statement chaining - Multi-line statements for readability

**Learn more:**
- [BPP+ Preprocessor Documentation](https://cbasereferenceguide.github.io/development/bpp-plus-preprocessor/)
- [BPP+ Preprocessor Repository](https://github.com/cbase-larrymod/bpp-plus)

---

## Version

**Current:** 0.0.7 (February 2026)

See [CHANGELOG.md](CHANGELOG.md) for version history.

---

## Contributing

Issues and pull requests welcome. Maintain consistency with existing patterns when adding features.

---

## License

See [LICENSE.md](LICENSE.md) for details.

---

**Repository:** [github.com/cbase-larrymod/bpp-plus-syntax-highlighter](https://github.com/cbase-larrymod/bpp-plus-syntax-highlighter)
