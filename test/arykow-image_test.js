'use strict';

var arykow = {
  image: require('../lib/arykow-image.js')
};

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['fromBuffer'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'failureFromBuffer01': function(test) {
    arykow.image.fromBuffer().then(function(result) {
      test.expect(1);
      test.equal(result, null);
      test.done();
    }, function(error) {
      test.expect(2);
      test.notEqual(error, null);
      test.notEqual(error.message, null);
      test.done();
    });
  },
  'failureFromBuffer02': function(test) {
    arykow.image.fromBuffer(null).then(function(result) {
      test.expect(1);
      test.equal(result, null);
      test.done();
    }, function(error) {
      test.expect(2);
      test.notEqual(error, null);
      test.notEqual(error.message, null);
      test.done();
    });
  },
  'failureFromBuffer03': function(test) {
    arykow.image.fromBuffer(1345).then(function(result) {
      test.expect(1);
      test.equal(result, null);
      test.done();
    }, function(error) {
      test.expect(2);
      test.notEqual(error, null);
      test.notEqual(error.message, null);
      test.done();
    });
  },
  'failureFromBuffer04': function(test) {
    arykow.image.fromBuffer(new Buffer('')).then(function(result) {
      test.expect(1);
      test.equal(result, null);
      test.done();
    }, function(error) {
      test.expect(2);
      test.notEqual(error, null);
      test.notEqual(error.message, null);
      test.done();
    });
  },
};

exports['fromFile'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'failureFromFile01': function(test) {
    arykow.image.fromFile().then(function(result) {
      test.expect(1);
      test.equal(result, null);
      test.done();
    }, function(error) {
      test.expect(2);
      test.notEqual(error, null);
      test.notEqual(error.message, null);
      test.done();
    });
  },
  'failureFromFile02': function(test) {
    arykow.image.fromFile(null).then(function(result) {
      test.expect(1);
      test.equal(result, null);
      test.done();
    }, function(error) {
      test.expect(2);
      test.notEqual(error, null);
      test.notEqual(error.message, null);
      test.done();
    });
  },
  'failureFromFile03': function(test) {
    arykow.image.fromFile(1345).then(function(result) {
      test.expect(1);
      test.equal(result, null);
      test.done();
    }, function(error) {
      test.expect(2);
      test.notEqual(error, null);
      test.notEqual(error.message, null);
      test.done();
    });
  },
  'failureFromFile04': function(test) {
    arykow.image.fromFile('test/data/01.txt').then(function(result) {
      test.expect(1);
      test.equal(result, null);
      test.done();
    }, function(error) {
      test.expect(2);
      test.notEqual(error, null);
      test.notEqual(error.message, null);
      test.done();
    });
  },
  'failureFromFile05': function(test) {
    arykow.image.fromFile('test/data/01.not.exists').then(function(result) {
      test.expect(1);
      test.equal(result, null);
      test.done();
    }, function(error) {
      test.expect(2);
      test.notEqual(error, null);
      test.notEqual(error.message, null);
      test.done();
    });
  },
  'successFromFile06': function(test) {
    arykow.image.fromFile('test/data/01.gif').then(function(result) {
      test.expect(5);
      test.notEqual(result, null);
      test.notEqual(result.data, null);
      test.notEqual(result.name, null);
      test.notEqual(result.extension, null);
      test.equal(result.toHTML(), 'data:image/gif;base64,R0lGODdhAQABAIAAAMzMzJaWliwAAAAAAQABAAACAkQBADs=');
      test.done();
    }, function(error) {
      test.expect(2);
      test.equal(error, null);
      test.done();
    });
  },
  'successFromFile07': function(test) {
    arykow.image.fromFile('test/data/01.png').then(function(result) {
      test.expect(5);
      test.notEqual(result, null);
      test.notEqual(result.data, null);
      test.notEqual(result.name, null);
      test.notEqual(result.extension, null);
      test.equal(result.toHTML(), 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAABlBMVEXMzMyWlpYU2uzLAAAACklEQVQImWNgAAAAAgAB9HFkpgAAAABJRU5ErkJggg==');
      test.done();
    }, function(error) {
      test.expect(2);
      test.equal(error, null);
      test.done();
    });
  },
};

exports['fromURI'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'failureFromURI01': function(test) {
    arykow.image.fromURI().then(function(result) {
      test.expect(1);
      test.equal(result, null);
      test.done();
    }, function(error) {
      test.expect(2);
      test.notEqual(error, null);
      test.notEqual(error.message, null);
      test.done();
    });
  },
  'failureFromURI02': function(test) {
    arykow.image.fromURI(null).then(function(result) {
      test.expect(1);
      test.equal(result, null);
      test.done();
    }, function(error) {
      test.expect(2);
      test.notEqual(error, null);
      test.notEqual(error.message, null);
      test.done();
    });
  },
  'failureFromURI03': function(test) {
    arykow.image.fromURI(1345).then(function(result) {
      test.expect(1);
      test.equal(result, null);
      test.done();
    }, function(error) {
      test.expect(2);
      test.notEqual(error, null);
      test.notEqual(error.message, null);
      test.done();
    });
  },
  'failureFromURI04': function(test) {
    arykow.image.fromURI('http://www.google.com/placehold.it/1x1.gif').then(function(result) {
      test.expect(1);
      test.equal(result, null);
      test.done();
    }, function(error) {
      test.expect(2);
      test.notEqual(error, null);
      test.notEqual(error.message, null);
      test.done();
    });
  },
  'failureFromURI05': function(test) {
    arykow.image.fromURI('htt:p://placehold.it/1x1.gif').then(function(result) {
      test.expect(1);
      test.equal(result, null);
      test.done();
    }, function(error) {
      test.expect(2);
      test.notEqual(error, null);
      test.notEqual(error.message, null);
      test.done();
    });
  },
  'failureFromURI06': function(test) {
    arykow.image.fromURI('http://placehold.it/1x1.gif').then(function(result) {
      test.expect(5);
      test.notEqual(result, null);
      test.notEqual(result.data, null);
      test.notEqual(result.name, null);
      test.notEqual(result.extension, null);
      test.equal(result.toHTML(), 'data:image/gif;base64,R0lGODdhAQABAIAAAMzMzJaWliwAAAAAAQABAAACAkQBADs=');
      test.done();
    }, function(error) {
      test.expect(2);
      test.equal(error, null);
      test.done();
    });
  },
  'failureFromURI07': function(test) {
    arykow.image.fromURI('http://placehold.it/1x1.png').then(function(result) {
      test.expect(5);
      test.notEqual(result, null);
      test.notEqual(result.data, null);
      test.notEqual(result.name, null);
      test.notEqual(result.extension, null);
      test.equal(result.toHTML(), 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAABlBMVEXMzMyWlpYU2uzLAAAACklEQVQImWNgAAAAAgAB9HFkpgAAAABJRU5ErkJggg==');
      test.done();
    }, function(error) {
      test.expect(2);
      test.equal(error, null);
      test.done();
    });
  },
};