# BPP+ Syntax Highlighting - Complete Manual

Visual Studio Code extension for Commodore 64 BASIC v2 and BPP+ preprocessor.

**Version:** 0.1.0
**Part of:** C\*Base Larry Mod v3.1

---

## Table of Contents

1. [Overview](#overview)
2. [Getting Started](#getting-started)
   - [Installation](#installation)
   - [Quick Start](#quick-start)
3. [Language Support](#language-support)
   - [Code Snippets](#code-snippets)
   - [Syntax Highlighting](#syntax-highlighting)
4. [Advanced Topics](#advanced-topics)
   - [Development & Testing](#development--testing)
5. [Reference](#reference)
   - [BASIC v2 Language](#basic-v2-language)
   - [BPP+ Features](#bpp-features)
   - [Control Characters](#control-characters)
   - [Extension Symbols](#extension-symbols)

---

## Overview

BPP+ Syntax Highlighting provides syntax highlighting and code snippets for Commodore 64 BASIC v2 and the BPP+ preprocessor in Visual Studio Code.

**Features:**
- Syntax highlighting for all BASIC v2 keywords, functions, and operators
- BPP+ feature highlighting (labels, scopes, includes, statement chaining)
- 100+ code snippets for commands, functions, and PETSCII control characters
- Works with `.bas` and `.bpp` files

**File types:**
- `.bas` - Standard BASIC v2 source files
- `.bpp` - BPP+ preprocessor source files

---

## Getting Started

### Installation

#### Prerequisites

**Required:**
- Visual Studio Code v1.105.0 or later

**Optional:**
- [BPP+ preprocessor](https://cbasereferenceguide.github.io/development/bpp-plus-preprocessor/) - Compile enhanced BASIC to standard BASIC v2
- Node.js v16.0+ (for building from source)
- vsce (for building from source)

#### Method 1: Install pre-compiled extension

The repository includes a pre-compiled `.vsix` file in the `dist/` folder.

```bash
# Clone repository
git clone https://github.com/cbase-larrymod/bpp-plus-syntax-highlighter.git
cd bpp-plus-syntax-highlighter
```

**Install via VS Code UI:**

1. Open Extensions panel (`Ctrl+Shift+X` or `Cmd+Shift+X`)
2. Click the `⋯` menu (top-right)
3. Select **Install from VSIX**
4. Navigate to `dist/bpp-plus-basic-v2-syntax-0.1.0.vsix`
5. Click **Install**

**Install via command line:**

```bash
code --install-extension dist/bpp-plus-basic-v2-syntax-0.1.0.vsix
```

#### Method 2: Build and install from source

```bash
# Clone repository
git clone https://github.com/cbase-larrymod/bpp-plus-syntax-highlighter.git
cd bpp-plus-syntax-highlighter

# Install vsce
npm install -g @vscode/vsce

# Build the extension package
npm run package
```

The package command creates `dist/bpp-plus-basic-v2-syntax-0.1.0.vsix`.

Install using VS Code UI or command line (see Method 1).

#### Method 3: Development installation

For testing and development:

```bash
git clone https://github.com/cbase-larrymod/bpp-plus-syntax-highlighter.git
cd bpp-plus-syntax-highlighter
code .
```

Press `F5` to launch extension development host.

#### Verification

```bash
# Create test file
echo '10 print "hello world"' > test.bas
code test.bas
```

**Expected:**
- Extension loads when opening `.bas` or `.bpp` files
- Keywords like `print` appear styled
- Status bar shows **BPP+ BASIC v2** as language mode

**Verification checklist:**
- ✓ Keywords highlighted (`print`, `for`, `gosub`, `if`)
- ✓ Numbers highlighted (line numbers, numeric literals)
- ✓ Strings highlighted (double-quoted text)
- ✓ Comments highlighted (`rem` or `;`)
- ✓ Snippets available (type `for` and press `Tab`)

### Quick Start

#### BASIC v2 Files

Create `hello.bas`:

```cbmbas
10 print "{clr}"
20 poke 53280,0
30 poke 53281,0
40 print "{wht}hello bpp+"
```

**Highlighted:**
- Line numbers: `10`, `20`, `30`, `40`
- Keywords: `print`, `poke`
- Strings: `"{clr}"`, `"{wht}hello bpp+"`
- PETSCII tokens: `{clr}`, `{wht}`

#### BPP+ Files

Create `hello.bpp`:

```cbmbas
; bpp+ program

goto main

screen: {
    init:
        poke 53280,0\
        poke 53281,0\
        return

    welcome:
        print "{wht}hello bpp+"\
        return
}

main:
    gosub screen.init
    gosub screen.welcome
```

**BPP+ features highlighted:**
- Labels: `main:`, `init:`, `welcome:`
- Scopes: `screen: { ... }`
- Scoped references: `screen.init`, `screen.welcome`
- Statement chaining: Backslash (`\`)
- Preprocessor comments: Semicolon (`;`)

### Code Snippets

Type a prefix and press `Tab`:

```cbmbas
for<Tab>     → for <var>=<start> to <end>:<expr>:next <var>
{wht}<Tab>   → White color token
chr<Tab>     → chr$(<numeric expression>)
```

100+ snippets cover:
- BASIC v2 keywords and functions
- PETSCII characters (token and chr$ forms)
- BPP+ preprocessor directives

---

## Language Support

### Code Snippets

Snippets expand when you type a prefix and press `Tab`. Press `Tab` to move between placeholders.

**Mathematical functions:**
- `abs`, `atn`, `cos`, `exp`, `int`, `log`, `rnd`, `sgn`, `sin`, `sqr`, `tan`

**String functions:**
- `asc`, `chr`, `left$`, `len`, `mid$`, `right$`, `str$`, `val`

**Control flow:**
- `for`, `fors` (with step), `gosub`, `goto`, `if`, `on`

**Variables and data:**
- `data`, `def`, `dim`, `fn`, `let`, `read`

**Input/Output:**
- `cmd`, `get`, `get#`, `input`, `input#`, `print`, `print#`

**File operations:**
- `close`, `load`, `open`, `save`, `verify`

**Memory and system:**
- `fre`, `peek`, `poke`, `pos`, `spc`, `sys`, `tab`, `usr`, `wait`

**PETSCII control characters:**
- Colors: `{wht}`, `{red}`, `{grn}`, `{blu}`, `{blk}`, `{cyn}`, `{pur}`, `{yel}`
- Cursor: `{up}`, `{down}`, `{left}`, `{rght}`, `{home}`, `{clr}`
- Text modes: `{rvon}`, `{rvof}`, `{swuc}`, `{swlc}`
- Function keys: `{f1}` through `{f8}`

### Syntax Highlighting

#### What gets highlighted

**BASIC v2:**
- Control flow keywords: `end`, `for`, `next`, `gosub`, `goto`, `if`, `then`, `step`, `stop`, `return`, `to`, `on`
- Built-in functions: Math, string, and system functions
- Variables: Standard, string (`$`), integer (`%`)
- System variables: `st`, `ti`, `ti$` — highlighted distinctly from user variables
- Numbers: Line numbers, decimal, hexadecimal (`$`), binary (`%`)
- Comments: `rem` and `;`
- Strings: Double-quoted with PETSCII tokens

**BPP+ features:**
- Labels: Definitions and references
- Scopes: Hierarchical namespaces
- Includes: `!include` directives
- Statement chaining: Backslash continuation

#### Color schemes

Semantic token types adapt to your VS Code color theme:
- Keywords
- Functions
- Operators
- Numbers
- Strings
- Comments
- Variables

---

## Advanced Topics

### Development & Testing

#### Project Structure

```
bpp-plus-syntax-highlighter/
├── .vscode/
│   └── launch.json                         # Debug configurations
├── dist/
│   └── *.vsix                              # Installable extension
├── snippets/
│   └── bpp-plus-basic-v2.json              # 100+ snippets
├── syntaxes/
│   └── bpp-plus-basic-v2.tmLanguage.json   # TextMate grammar
├── language-configuration.json             # Language behavior
└── package.json                            # Extension manifest
```

#### Testing

1. Open repository in VS Code
2. Press `F5` (Start Debugging)
3. New window opens with extension loaded

Test syntax highlighting:

```cbmbas
main:
    print "{clr}{wht}Testing syntax"
    gosub screen.init
    end

screen: {
    init:
        poke 53280,0\
        return
}
```

Test snippets: Type `for` and press `Tab`.

#### Building

```bash
npm install -g vsce
npm run package
```

Output: `dist/bpp-plus-basic-v2-syntax-0.1.0.vsix`

Install:

```bash
code --install-extension dist/bpp-plus-basic-v2-syntax-0.1.0.vsix
```

#### Grammar Modification

TextMate grammar in `syntaxes/bpp-plus-basic-v2.tmLanguage.json`:

```json
{
  "match": "\\b(for|next|to|step)\\b",
  "name": "keyword.control.loop.cbmbas"
}
```

**Pattern structure:**
- `match` - Regex pattern
- `name` - Semantic token type (determines styling)
- `captures` - Named groups (optional)
- `begin`/`end` - Multi-line patterns (optional)

**Testing grammar changes:**
1. Press `Ctrl+R` (Reload extension host)
2. Use **Developer: Inspect Editor Tokens and Scopes**
3. Verify tokens receive correct colors

---

## Reference

### BASIC v2 Language

#### Control Flow

`end`, `for`, `next`, `gosub`, `goto`, `if`, `then`, `step`, `stop`, `return`, `to`, `on`

```cbmbas
for i=1 to 10 step 2
    print i
next i

if x=5 then print "found"
on n gosub 100,200,300
```

#### Built-in Functions

**Mathematical:**
- `abs(x)` - Absolute value
- `atn(x)` - Arc tangent
- `cos(x)` - Cosine
- `exp(x)` - Exponential
- `int(x)` - Integer portion
- `log(x)` - Natural logarithm
- `rnd(x)` - Random number
- `sgn(x)` - Sign function
- `sin(x)` - Sine
- `sqr(x)` - Square root
- `tan(x)` - Tangent

**String:**
- `asc(str$)` - Character to ASCII code
- `chr$(code)` - ASCII code to character
- `left$(str$,n)` - Left substring
- `len(str$)` - String length
- `mid$(str$,start,length)` - Middle substring
- `right$(str$,n)` - Right substring
- `str$(num)` - Number to string
- `val(str$)` - String to number

**System:**
- `fre(0)` - Free BASIC memory
- `peek(addr)` - Read memory byte
- `pos(0)` - Cursor column position
- `usr(x)` - Call machine language routine

#### Variables

Variable names with optional type suffixes:

- **Standard (float):** `a`, `counter` - 40-bit floating point (default)
- **String:** `name$`, `text$` - Up to 255 characters
- **Integer:** `x%`, `count%` - 16-bit signed (-32768 to 32767)

**Naming rules:**
- First two characters significant
- Must start with letter
- Type suffix last (`$` or `%`)
- Case insensitive
- Reserved words forbidden

#### Numbers

- **Line numbers:** At start of line (1-63999)
- **Decimal:** `255`, `3.14159`
- **Hexadecimal:** `$ff`, `$c000` (BPP+ extension)
- **Binary:** `%11111111`, `%10101010` (BPP+ extension)

#### Comments

- **REM comments:** `rem This is a comment`
- **Semicolon comments:** `; BPP+ comment syntax`

BPP+ removes both comment types during preprocessing. Exception: Blitz! compiler directives (`rem **`) are preserved.

#### Strings

Double-quoted strings with embedded PETSCII tokens:

```cbmbas
a$ = "simple string"
b$ = "{clr}{wht}Hello"
c$ = "{10 space}Indented"
```

Token syntax:
- **Basic tokens:** `{clr}`, `{wht}`, `{down}`
- **Repetition:** `{10 space}`, `{5 down}`
- **Ranges:** `{a-z}`, `{0-9}`

---

### BPP+ Features

#### Labels

Labels provide symbolic names for control flow targets:

```cbmbas
main:
    gosub init
    end

init:
    print "initialized"
    return
```

**Label definitions:** `main:`, `init:`
**Label references:** `gosub init`

#### Scopes

Scopes provide hierarchical namespaces:

```cbmbas
screen: {
    init:
        poke 53280,0
        return

    clear:
        print "{clr}"
        return
}

main:
    gosub screen.init
    gosub screen.clear
```

**Scope declarations:** `screen: {`
**Scope delimiters:** `{` and `}`
**Qualified references:** `screen.init`

#### Include Directives

```cbmbas
!include source "lib/screen.bpp"
!include data "charset.bin"

ui: {
    !include source "ui-elements.bpp"
}
```

**Highlights:**
- `!include` keyword
- Type specifiers (`source`/`data`)
- File paths

#### Statement Chaining

```cbmbas
print_header:
    print "{clr}";\
    print "{wht}System v1.0";\
    print "{down}{down}";\
    return
```

Backslash (`\`) continuation character.

#### Blitz! Compiler Control

Blitz! directives configure the compiler and control which statements are compiled vs interpreted. Two equivalent forms are supported:

**Native form:**
```cbmbas
rem ** se           rem Enable STOP key
rem ** sa           rem Disable STOP key (default)
rem ** ie           rem Enable INPUT command
rem ** ia           rem Disable INPUT command (default)
rem ** sp 1234      rem Specify dongle number
rem ** ne           rem No extension listing
```

**BPP+ form** (converts to native during preprocessing):
```cbmbas
!blitz se
!blitz sa
!blitz ie
!blitz ia
!blitz sp 1234
!blitz ne
```

Both forms are highlighted identically as preprocessor directives.

**Extension marker** — forces the following statement to execute as interpreted BASIC at runtime rather than compiled P-Code:

```cbmbas
:: sys 49152
:: dload "file",8
```

#### PETSCII Character Conversion

BPP+ converts PETSCII characters to ASCII equivalents during preprocessing:

- `£` (pound sign, 0x5C) → `\` (backslash)
- `←` (left arrow, 0x5F) → `_` (underscore)
- `↑` (up arrow, 0x5E) → `^` (caret)

Both forms are highlighted. Files created with C64 editors are handled.

**Note:** `£` and `←` also serve as MCI commands and BASIC extensions.

### Control Characters

#### Colors

All 16 C64 color codes:

`{wht}`, `{red}`, `{grn}`, `{blu}`, `{blk}`, `{cyn}`, `{pur}`, `{yel}`, `{orng}`, `{brn}`, `{lred}`, `{gry1}`, `{gry2}`, `{lgrn}`, `{lblu}`, `{gry3}`

```cbmbas
print "{wht}White text"
print chr$(5);"Also white"
```

**Selected color codes:**
- `{blk}` - chr$(144) - Black
- `{wht}` - chr$(5) - White
- `{red}` - chr$(28) - Red
- `{cyn}` - chr$(159) - Cyan
- `{pur}` - chr$(156) - Purple
- `{grn}` - chr$(30) - Green
- `{blu}` - chr$(31) - Blue
- `{yel}` - chr$(158) - Yellow

#### Cursor Movement

`{up}`, `{down}`, `{left}`, `{rght}`, `{home}`, `{clr}`

```cbmbas
print "{home}{down}{down}Text"
print "{5 down}"          rem Repetition syntax
```

#### Text Modes

`{rvon}`, `{rvof}`, `{swuc}`, `{swlc}`

```cbmbas
print "{rvon}Reversed{rvof}"
```

#### Token Syntax

**Basic tokens:**

```cbmbas
"{clr}"     rem Clear screen
"{wht}"     rem White color
"{down}"    rem Cursor down
```

**Repetition syntax:**

```cbmbas
"{10 space}"    rem 10 spaces
"{5 down}"      rem Move cursor down 5 times
"{3 rght}"      rem Move cursor right 3 times
```

**Range syntax:**

```cbmbas
"{a-z}"     rem Lowercase alphabet
"{0-9}"     rem Digits 0-9
"{A-Z}"     rem Uppercase alphabet
```

**Token constraints:**
- Tokens must use exact names (case-insensitive)
- Repetition count must be positive integer (1-255)
- Range endpoints must be valid characters
- Token delimiters `{` and `}` must be balanced

### Extension Symbols

MCI commands and Prof. Plum extensions for C*Base BBS.

#### Symbol Reference

| Symbol | MCI Command | Prof. Plum Extension | BASIC Extension |
| :----- | :---------- | :------------------- | :-------------- |
| `@`    | Yes         | `print:print#5`      | No              |
| `←`    | Yes         | `print;print#5;`     | Yes             |
| `£`    | Yes         | No                   | Yes             |

```cbmbas
@ "text"
← "text"
£ command
```

#### MCI Commands

All three symbols (`@`, `←`, `£`) are MCI commands used in C*Base BBS context.

#### Prof. Plum Extensions

These symbols send output to both screen and modem simultaneously:

- `@` - Expands to `print:print#5` (statement separator with colon)
- `←` - Expands to `print;print#5;` (statement separator with semicolon)

Both shortcuts eliminate the need to manually type the dual-output pattern in C\*Base BBS context.

**Note:** `↑` (up arrow) is a BPP+ PETSCII conversion character, not a C*Base extension.

---

## Resources

- [Online documentation](https://cbasereferenceguide.github.io/development/bpp-plus-syntax-highlighting/) - Full site with navigation
- [GitHub repository](https://github.com/cbase-larrymod/bpp-plus-syntax-highlighter)
- [BPP+ preprocessor](https://cbasereferenceguide.github.io/development/bpp-plus-preprocessor/)
- [VS Code extension API](https://code.visualstudio.com/api)
- [TextMate grammar guide](https://macromates.com/manual/en/language_grammars)

---

**Last updated:** 2026-02-25
**Version:** 0.1.0
**License:** See [LICENSE.md](https://github.com/cbase-larrymod/bpp-plus-syntax-highlighter/blob/main/LICENSE.md)
