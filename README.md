# BPP+ BASIC v2 Syntax Highlighting

Visual Studio Code extension for Commodore 64 BASIC v2 with BPP+ preprocessor support.

**Version 0.0.5**

Part of the **C\*Base Larry Mod v3.1** development package.

## Features

- **Complete BASIC v2 syntax highlighting** - All keywords, functions, operators, and control characters
- **BPP+ preprocessor support** - Labels, scopes, includes, and statement chaining
- **100+ code snippets** - Commands, functions, and PETSCII control characters in both token and chr$() forms
- **Smart completion** - Tab-navigable placeholders for function parameters
- **Zero configuration** - Works immediately with `.bas` and `.bpp` files

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
- Statement chaining: backslash (`\`) continuations
- PETSCII tokens: `{clr}`, `{down}`, `{wht}`, `{rght}`

## Installation

### Prerequisites

- **Node.js** - Required for packaging. Download from [nodejs.org](https://nodejs.org/)
- **VS Code Extension Manager (vsce)** - Install globally:
  
  ```bash
  npm install -g @vscode/vsce
  ```

### Building and Installing from Source

1. Clone the repository:
   ```bash
   git clone https://github.com/cbase-larrymod/bpp-plus-syntax-highlighting.git
   cd bpp-plus-syntax-highlighting
   ```

2. Package the extension:
   ```bash
   vsce package
   ```
   This creates `bpp-plus-basic-v2-syntax-0.0.5.vsix` in the current directory.

   **Alternative options:**
   ```bash
   # Organize output in a dist/ folder
   vsce package -o dist/

   # Or use npm script (automatically creates dist/ folder)
   npm run package
   ```

3. Install the extension using one of these methods:

   **Option A: VS Code UI**
   - Open Extensions panel (`Ctrl+Shift+X` or `Cmd+Shift+X`)
   - Click `···` menu → **Install from VSIX**
   - Select `bpp-plus-basic-v2-syntax-0.0.5.vsix`

   **Option B: Command line**
   ```bash
   code --install-extension bpp-plus-basic-v2-syntax-0.0.5.vsix
   ```

### Development mode

```bash
git clone https://github.com/cbase-larrymod/bpp-plus-syntax-highlighting.git
cd bpp-plus-syntax-highlighting
code .
# Press F5 to launch development window
```

## BPP+ preprocessor

This extension provides syntax highlighting for BPP+, a preprocessor that adds modern development features to BASIC v2:

- **Labels** - Named anchors instead of line numbers
- **Scopes** - Organize related labels into namespaces
- **Includes** - Modular source files and binary data
- **Statement chaining** - Multi-line statements for readability

## Documentation

Comprehensive documentation for this extension and the BPP+ preprocessor is coming soon at [cbasereferenceguide.github.io](https://cbasereferenceguide.github.io).

## Version history

### 0.0.5 (Current)
- Complete snippet system update with 100+ snippets
- All Commodore 64 control characters in token and chr$() forms
- Enhanced function snippets with parameter placeholders
- Improved BPP+ preprocessor support

### 0.0.4
- Comprehensive syntax highlighting
- BPP+ features support
- String token handling
- Initial snippet collection

See [CHANGELOG.md](CHANGELOG.md) for complete history.

## License

See [LICENSE](LICENSE.md) file.

## Contributing

Issues and pull requests welcome on [GitHub](https://github.com/cbase-larrymod/bpp-plus-syntax-highlighting).

Maintain consistency with existing patterns when adding features.
