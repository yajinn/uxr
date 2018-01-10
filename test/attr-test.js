/**
 * manipulation-test
 **/

describe('Attribute Methods', () => {
    let attrElem = uxr('#attr');
    let attrElemNode = document.querySelector('#attr');

    let paragraphElem = uxr('#attr-paragraph');
    let anchorElem = uxr('#attr-anchor');
    let imgElem = uxr('#attr-img');

    describe('attr', () => {
        describe('Gets any attribute value of the selected element', () => {
            it('should get the value of `id` attribute', () => {
                expect(attrElem.attr('id')).to.equal('attr');
                expect(attrElem.attr('id')).to.equal(attrElemNode.id);
            });
        });

        describe('Sets the attribute value of the selected element', () => {
            it('should set a new attribute named `test-attr` with a value of "My Attribute Value"', () => {
                attrElem.attr('test-attr', 'My Attribute Value');
                expect(attrElem.attr('test-attr')).to.equal('My Attribute Value');
            });
        });
    });

    describe('text', () => {
        it('should get the text in the selected element', () => {
            expect(paragraphElem.text()).to.be.a('string');
            expect(paragraphElem.text()).to.equal(controls.innerText);
        });

        it(`should set the text in the selected element to "${controls.newInnerText}"`, () => {
            paragraphElem.text(controls.newInnerText);

            expect(paragraphElem.text()).to.be.a('string');
            expect(paragraphElem.text()).to.equal(controls.newInnerText);
        });
    });

    describe('src', () => {
        it('should get the value of "src" attribute', () => {
            expect(imgElem.src()).to.equal(controls.src);
        });

        it(`should set the value of "src" attribute to "${controls.newSrc}"`, () => {
            imgElem.src(controls.newSrc);

            expect(imgElem.src()).to.equal(controls.newSrc);
        });
    });

    describe('href', () => {
        it('should get the value of "href" attribute', () => {
            expect(anchorElem.href()).to.equal(controls.href);
        });

        it(`should set the value of "href" attribute to "${controls.newHref}"`, () => {
            anchorElem.href(controls.newHref);

            expect(anchorElem.href()).to.equal(controls.newHref);
        });
    });
});