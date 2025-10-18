# BPP+ BASIC v2 Syntax Highlighting

Visual Studio Code extension for Commodore 64 BASIC v2 with BPP+ preprocessor support.

Part of the **C\*Base Larry Mod 3.1** package.

## What this extension does

Transforms your BASIC v2 code editing experience in VS Code with comprehensive syntax highlighting and intelligent code snippets. Whether you're working with raw Commodore 64 BASIC or using the BPP+ preprocessor, this extension makes your code clearer and easier to write.

### Key capabilities

- **Complete BASIC v2 language support** - All keywords, functions, and operators properly highlighted
- **BPP+ preprocessor integration** - Labels, includes, scopes, and modern development features
- **Smart code completion** - 100+ snippets for commands, functions, and control characters
- **Standalone or preprocessor use** - Works perfectly with plain `.bas` files or BPP+ `.bpp` files

---

## Installation

### From .VSIX file

1. Clone or download this repository
2. Install the VS Code extension packager (if needed):

   ```bash
   npm install -g vsce
   ```
3. Build the extension:

   ```bash
   npm run package
   ```
4. In VS Code: Extensions → `⋯` menu → **Install from VSIX** → Select `dist/bpp-plus-basic-v2-syntax-0.0.5.vsix`

### Quick start

Once installed, open any `.bas` or `.bpp` file. The extension activates automatically. Use the language selector (bottom-right corner) if manual selection is needed.

---

## Syntax highlighting features

### Language elements

**Control flow**
- `FOR`/`NEXT`, `IF`/`THEN`, `GOSUB`/`RETURN`, `GOTO`, `ON`, `STOP`, `END`

**Built-in functions**
- Math: `ABS`, `ATN`, `COS`, `EXP`, `INT`, `LOG`, `RND`, `SGN`, `SIN`, `SQR`, `TAN`
- Strings: `ASC`, `CHR$`, `LEFT$`, `LEN`, `MID$`, `RIGHT$`, `STR$`, `VAL`
- System: `PEEK`, `POS`, `USR`, `FRE`

**User-defined functions**
- `DEF FN` declarations with function name capture
- `FN` function calls with parameter highlighting

**I/O & Disk operations**
- Screen: `PRINT`, `INPUT`, `GET`
- Files: `OPEN`, `CLOSE`, `PRINT#`, `INPUT#`, `GET#`
- Storage: `LOAD`, `SAVE`, `VERIFY`
- System: `POKE`, `SYS`, `WAIT`, `CMD`

**Data & variables**
- Variable types: standard, string (`$`), integer (`%`)
- `DIM`, `DATA`, `READ`, `RESTORE`, `LET`

**Operators**
- Arithmetic: `+`, `-`, `*`, `/`, `^`
- Comparison: `=`, `<>`, `<`, `>`, `<=`, `>=`
- Logical: `AND`, `OR`, `NOT`

**C*Base BASIC Extensions**
- @ - Prof. Plum's extension command
- ← (arrow-left) - Prof. Plum's extension command

> Note: These Prof. Plum extensions are automatically recognized. For other BASIC extensions (JiffyDOS, Simons BASIC, etc.), prefix commands with :: to force compilation through the Blitz compiler.

### BPP+ preprocessor support

**Labels & Subroutines (BPP+)**
```basic
view_RealTimeClock:

    goto view_Information
    gosub func_PressAnyKey.evt_PressAnyKey_Input
```

**Include directives (BPP+)**
```basic
rem Direct file include:
    !include source "../common/ui-elements.bpp"
    !include data "configuration-address-names.bpp"

rem Scope declaration with file include:
    ui_Elements: { !include source "../common/ui-elements.bpp" }
    data_ConfigurationAddressNames: { !include data "configuration-address-names.bpp" }
```

**Comments**
- BASIC style: `rem This is a comment`
- BPP+ style: `; This is also a comment`

**Statement chaining (BPP+)**
- Backslash (`\`) at line end for multi-line statements

```basic
    view_Opening:
        tl$="System setup"\
        print "{clr}{2 down}";\
        gosub ui_Elements.render_Logo\
        gosub ui_Elements.render_Swosh\
        print "{4 down}{7 rght}{wht}Press any key to continue!{3 down}"\
        gosub func_BuildStamp
        gosub sfx_Elements.play_Chime\
        gosub func_PressAnyKey.evt_PressAnyKey_Input

        goto view_Information
```

**String tokens**
- Braced tokens: `{wht}`, `{clr}`, `{3 down}`
- Repetition: `{10 space}`
- Ranges: `{a-z}`, `{red-*}`

### Number formats

- Line numbers: `10`, `100`, `1000`
- Decimal: `255`, `3.14159`
- Hexadecimal: `$FF`, `$C000`
- Binary: `%11111111`, `%10101010`

---

## Code snippets

Type a snippet prefix and press `Tab` or `Enter` to insert. Use `Tab` to move between placeholders.

### Mathematical functions

| Snippet | Inserts                     | Description       |
| :------ | :-------------------------- | :---------------- |
| `abs`   | `abs(<numeric expression>)` |                   |
| `atn`   | `atn(<numeric expression>)` | Arc tangent       |
| `cos`   | `cos(<numeric expression>)` | Cosine            |
| `exp`   | `exp(<number>)` -           | Exponential       |
| `int`   | `int(<number>)`             | Integer portion   |
| `log`   | `log(<number>)`             | Natural logarithm |
| `rnd`   | `rnd(<number>)*<number>`    | Random number     |
| `sgn`   | `sgn(<number>)`             | Sign (-1, 0, 1)   |
| `sin`   | `sin(<numeric expression>)` | Sine              |
| `sqr`   | `sqr(<number>)`             | Square root       |
| `tan`   | `tan(<number>)`             | Tangent           |

### String functions

| Snippet  | Inserts                                 | Description        |
| :------- | :-------------------------------------- | ------------------ |
| `asc`    | `asc(<string>)` -                       | Character to ASCII |
| `chr`    | `chr$(<numeric expression>)`            | ASCII to character |
| `left$`  | `left$(<string>,<integer number>)`      | Left substring     |
| `len`    | `len(<string>)`                         | String length      |
| `mid$`   | `mid$(<string>,<start>,<end optional>)` | Middle substring   |
| `right$` | `right$(<string>,<integer number>)`     | Right substring    |
| `str$`   | `str$(<number>)`                        | Number to string   |
| `val`    | `val(<string>)`                         | String to number   |

### Control flow

| Snippet | Inserts                                                    |
| :------ | :--------------------------------------------------------- |
| `for`   | `for <var>=<start> to <end>:<expr>:next <var>`             |
| `fors`  | `for <var>=<start> to <end> step <step>:<expr>:next <var>` |
| `gosub` | `gosub <line/label>`                                       |
| `goto`  | `goto <line/label>`                                        |
| `if`    | `if <condition> then/goto <line or expression>`            |
| `on`    | `on <index> gosub/goto <line>`                             |

### Variables & data

| Snippet | Inserts                               | Description    |
| :------ | :------------------------------------ | :------------- |
| `data`  | `data <const>,<const>,<const>,...`    | 8 placeholders |
| `def`   | `def fn <name>(<param>)=<expression>` |                |
| `dim`   | `dim <variable>(<d1>)`                |                |
| `fn`    | `fn <function name>(<number>)`        |                |
| `let`   | `let <variable>=<expression>`         |                |
| `read`  | `read <variable>`                     |                |

### Input/Output

| Snippet  | Inserts                           |
| :------- | :-------------------------------- |
| `cmd`    | `cmd <logical file>,<expression>` |
| `get`    | `get <variable>`                  |
| `get#`   | `get#<logical file>,<variable>`   |
| `input`  | `input <string>;<variable>`       |
| `input#` | `input#<logical file>,<variable>` |
| `print`  | `print <expression>`              |
| `print#` | `print#<logical file>,<variable>` |

### File operations

| Snippet  | Inserts                                    |
| :------- | :----------------------------------------- |
| `close`  | `close <logical file number>`              |
| `load`   | `load <filename>,<device>,<secondary>`     |
| `open`   | `open <logical file>,<device>,<secondary>` |
| `save`   | `save <filename>,<device>,<secondary>`     |
| `verify` | `verify <filename>,<device>`               |

### Memory & system

| Snippet | Inserts                                 | Description     |
| :------ | :-------------------------------------- | :-------------- |
| `fre`   | `fre(<dummy argument>)`                 | Free memory     |
| `peek`  | `peek(<memory address>)`                |                 |
| `poke`  | `poke <memory address>,<number>`        |                 |
| `pos`   | `pos(<dummy argument>)` -               | Cursor position |
| `sys`   | `sys <address>`                         |                 |
| `usr`   | `usr(<number>)`                         | User function   |
| `wait`  | `wait <address>,<and mask>,<flip mask>` |                 |

### Screen control

| Snippet | Inserts          | Description   |
| :------ | :--------------- | ------------- |
| `spc`   | `spc(<integer>)` | Spaces        |
| `tab`   | `tab(<integer>)` | Tab to column |

### Comments

| Snippet           | Inserts                    |
| :---------------- | :------------------------- |
| `rem`             | `rem <comment>`            |

### Includes
| Snippet           | Inserts                    |
| :---------------- | :------------------------- |
| `!include source` | `!include source "<path>"` |
| `!include data`   | `!include data "<path>"`   |

### Commodore 64 control characters

All control characters available in both token form (e.g., `{wht}`) and `chr$()` function form (e.g., `chr$(5)`).

**Colors**

| Token    | Chr$        | Description    |
| :------- | :---------- | :------------- |
| `{wht}`  | `chr$(5)`   | White          |
| `{red}`  | `chr$(28)`  | Red            |
| `{grn}`  | `chr$(30)`  | Green          |
| `{blu}`  | `chr$(31)`  | Blue           |
| `{blk}`  | `chr$(144)` | Black          |
| `{cyn}`  | `chr$(159)` | Cyan           |
| `{pur}`  | `chr$(156)` | Purple         |
| `{yel}`  | `chr$(158)` | Yellow         |
| `{orng}` | `chr$(129)` | Orange         |
| `{brn}`  | `chr$(149)` | Brown          |
| `{lred}` | `chr$(150)` | Light Red/Pink |
| `{gry1}` | `chr$(151)` | Dark Gray      |
| `{gry2}` | `chr$(152)` | Medium Gray    |
| `{lgrn}` | `chr$(153)` | Light Green    |
| `{lblu}` | `chr$(154)` | Light Blue     |
| `{gry3}` | `chr$(155)` | Light Gray     |

**Cursor movement**

| Token    | Chr$        | Description   |
| :------- | :---------- | :------------ |
| `{up}`   | `chr$(145)` | Cursor up     |
| `{down}` | `chr$(17)`  | Cursor down   |
| `{left}` | `chr$(157)` | Cursor left   |
| `{rght}` | `chr$(29)`  | Cursor right  |
| `{home}` | `chr$(19)`  | Home position |
| `{clr}`  | `chr$(147)` | Clear screen  |

**Text modes**

| Token    | Chr$        | Description         |
| :------- | :---------- | :------------------ |
| `{rvon}` | `chr$(18)`  | Reverse video on    |
| `{rvof}` | `chr$(146)` | Reverse video off   |
| `{swuc}` | `chr$(142)` | Switch to uppercase |
| `{swlc}` | `chr$(14)`  | Switch to lowercase |

**Editing**

| Token    | Chr$        | Description      |
| :------- | :---------- | :--------------- |
| `{del}`  | `chr$(20)`  | Delete/backspace |
| `{inst}` | `chr$(148)` | Insert           |

**Function keys**

| Token  | Chr$        | Token  | Chr$        |
| :----- | :---------- | :----- | :---------- |
| `{f1}` | `chr$(133)` | `{f2}` | `chr$(137)` |
| `{f3}` | `chr$(134)` | `{f4}` | `chr$(138)` |
| `{f5}` | `chr$(135)` | `{f6}` | `chr$(139)` |
| `{f7}` | `chr$(136)` | `{f8}` | `chr$(140)` |

**Special characters**

| Token      | Chr$        | Description       |
| :--------- | :---------- | :---------------- |
| `{return}` | `chr$(13)`  | Carriage return   |
| `{space}`  | `chr$(32)`  | Space character   |
| `{pi}`     | `chr$(126)` | Pi symbol (π)     |
| `{esc}`    | `chr$(27)`  | Escape            |
| `{stop}`   | `chr$(3)`   | Stop/break        |
| `{dish}`   | `chr$(8)`   | Disable SHIFT+CBM |
| `{ensh}`   | `chr$(9)`   | Enable SHIFT+CBM  |
| `{sret}`   | `chr$(141)` | Shift+Return      |

**Control characters**

Additional CTRL key combinations available: `{CTRL-A}` through `{CTRL-Z}` (excluding standard mappings above).

---

## Development & testing

### Test without installing

1. Open this repository in VS Code
2. Edit if needed `.vscode/launch.json`:

   ```json
    {
        "version": "0.2.0",
        "configurations": [
            {
                "name": "Run Extension",
                "type": "extensionHost",
                "request": "launch",
                "runtimeExecutable": "${execPath}",
                "args": [
                    "--extensionDevelopmentPath=${workspaceFolder}"
                ],
                "outFiles": [
                    "${workspaceFolder}/out/**/*.js"
                ]
            }
        ]
    }
    ```
3. Press `F5` to launch a development window with the extension loaded

---

## Version history

### 0.0.5 (Current)
- Complete update of snippet system with 100+ snippets
- All Commodore 64 control characters in token and chr$() forms
- Enhanced function snippets with parameter placeholders
- Improved BPP+ preprocessor support

### 0.0.4
- Comprehensive syntax highlighting
- BPP+ features support
- String token handling
- Initial snippet collection

See [CHANGELOG.md](CHANGELOG.md) for complete history.

## Repository

**GitHub**: [cbase-larrymod/bpp-plus-syntax-highlighter](https://github.com/cbase-larrymod/bpp-plus-syntax-highlighter)

## License

See [LICENSE](LICENSE.md) file in repository.

## Contributing

Issues and pull requests welcome. Please maintain consistency with existing patterns when adding new features.