import { Plugin } from "obsidian";
import { BlockRenderer } from "src/BlockRenderer";

interface TaggedBlocksSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: TaggedBlocksSettings = {
	mySetting: "default",
};

export default class TaggedBlocks extends Plugin {
	settings: TaggedBlocksSettings;

	async onload() {
		await this.loadSettings();

		this.registerMarkdownCodeBlockProcessor(
			"tagged-blocks",
			async (source, el, ctx) => {
				ctx.addChild(new BlockRenderer(this.app, source, el));
			}
		);

		// This adds a settings tab so the user can configure various aspects of the plugin
		//this.addSettingTab(new SettingTab(this.app, this));
	}

	onunload() {}

	async loadSettings() {
		this.settings = Object.assign(
			{},
			DEFAULT_SETTINGS,
			await this.loadData()
		);
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
