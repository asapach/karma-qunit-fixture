QUnit.test("should set innerHTML", function (assert) {
    document.querySelector("#qunit-fixture").innerHTML = "one";
    assert.expect(0);
});

QUnit.test("should verify that innerHTML is unchaged", function (assert) {
    assert.equal(document.querySelector("#qunit-fixture").innerHTML, "");
});

QUnit.test("should verify the styles", function (assert) {
    var coords = document.querySelector("#qunit-fixture").getBoundingClientRect();
    assert.propEqual(coords, {
        bottom: -9000,
        height: 1000,
        left: -10000,
        right: -9000,
        top: -10000,
        width: 1000
    });
});
