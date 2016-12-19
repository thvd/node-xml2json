var fs = require('fs');
var path = require('path');
var parser = require('../lib');
var assert = require('assert');

var xml = parser.toXml({
    x: {
        y: {
            z: {
                $t: 'abc'
            }
        },
        a: {
           $t: '123'
        }
    }
}, {newLine: '\r', indent: '\t'});
assert.equal(xml, '<x>\r\t<y>\r\t\t<z>abc</z>\r\t</y>\r\t<a>123</a>\r</x>\r');





