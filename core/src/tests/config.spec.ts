import { TableEditorConfig } from '../core/utils/config.service';

describe('TableEditorConfig', () => {
	const config = new TableEditorConfig();
	it('should have sensible default values', () => {
		expect(config.inputElementFormatter).toBeTruthy();
		expect(config.cellValueFormatter).toBeUndefined();
		expect(config.classes).toBeTruthy();
	});
	it('should be able to call inputElementFormatter', () => {
		const cell = <HTMLTableCellElement>document.createElement('td');
		const dimensions = config.inputElementFormatter(cell);
		expect(dimensions).toBeDefined();
		expect(dimensions.top).toBeDefined();
		expect(dimensions.left).toBeDefined();
		expect(dimensions.height).toBeDefined();
		expect(dimensions.width).toBeDefined();
		expect(dimensions.top).not.toBeNaN();
		expect(dimensions.left).not.toBeNaN();
		expect(dimensions.height).not.toBeNaN();
		expect(dimensions.width).not.toBeNaN();
	});
});
