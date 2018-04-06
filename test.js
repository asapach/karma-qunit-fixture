QUnit.test('should set innerHTML', function (assert) {
    document.querySelector('#qunit-fixture').innerHTML = 'one';
    assert.expect(0);
});

QUnit.test('should verify that innerHTML is unchaged', function (assert) {
    assert.equal(document.querySelector('#qunit-fixture').innerHTML, '');
});