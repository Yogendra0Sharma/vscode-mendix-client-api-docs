import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
	let url8 = 'https://apidocs.mendix.com/8/client';
	let url7 = 'https://apidocs.mendix.com/7/client';

	let mendix8ClientAPI = vscode.commands.registerCommand('mendixwidgetDoc.MendixClient8API', () => {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(url8));
	});
	context.subscriptions.push(mendix8ClientAPI);

	let mendix7ClientAPI = vscode.commands.registerCommand('mendixwidgetDoc.MendixClient7API', () => {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(url7));
	});
	context.subscriptions.push(mendix7ClientAPI);
}
export function deactivate() {}
