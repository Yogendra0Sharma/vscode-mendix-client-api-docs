import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
	let url8 = 'https://apidocs.mendix.com/8/client';
	let url7 = 'https://apidocs.mendix.com/7/client';
	let urlPiW = 'https://docs.mendix.com/apidocs-mxsdk/apidocs/pluggable-widgets';
	let urlSdk = 'https://docs.mendix.com/apidocs-mxsdk/apidocs/';

	let mendix8ClientAPI = vscode.commands.registerCommand('extension.mendixClient8API', () => {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(url8));
	});
	context.subscriptions.push(mendix8ClientAPI);

	let mendix7ClientAPI = vscode.commands.registerCommand('extension.mendixClient7API', () => {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(url7));
	});
	context.subscriptions.push(mendix7ClientAPI);

	let mendixPiwClientAPI = vscode.commands.registerCommand('extension.mendixPiwClientAPI', () => {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(urlPiW));
	});
	context.subscriptions.push(mendixPiwClientAPI);

	let mendixSdkAPI = vscode.commands.registerCommand('extension.mendixSdkAPI', () => {
		vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(urlSdk));
	});
	context.subscriptions.push(mendixSdkAPI);
}
export function deactivate() {}
