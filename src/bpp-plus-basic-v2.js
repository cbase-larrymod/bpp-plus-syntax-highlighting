const vscode = require('vscode');

function activate(context) {

    // Empty color provider (disables default color highlighting)
    const colorProvider = vscode.languages.registerColorProvider(
        { language: 'bpp+basicv2' },
        {
            provideDocumentColors() {
                return []; // no colors
            },
            provideColorPresentations() {
                return []; // no presentations
            }
        }
    );

    context.subscriptions.push(colorProvider);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};