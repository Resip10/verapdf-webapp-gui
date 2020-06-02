import { integrationTest, moveNext, passValidationProcess } from './index';

describe('Inspect', () => {
    it(
        'Inspect page opened',
        integrationTest(async (store, component) => {
            await passValidationProcess(store, component);
            // Go to inspect page
            moveNext(component);
            // inspect exists
            expect(component.find('.inspect')).toHaveLength(1);
        })
    );

    it(
        'Toolbar works',
        integrationTest(async (store, component) => {
            await passValidationProcess(store, component);
            // Go to inspect page
            moveNext(component);

            // Toolbar exists...
            expect(component.find('.inspect .toolbar')).toHaveLength(1);
            // ...and works
            expect(component.find('.inspect').hasClass('_open')).toBe(false);
            component.find('.tree-button button').simulate('click', { button: 0 });
            expect(component.find('.inspect').hasClass('_open')).toBe(true);
        })
    );
});
