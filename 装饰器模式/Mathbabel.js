'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

//装饰器-给方法添加日志
var Math = (_dec = log('系统日志'), (_class = function () {
    function Math() {
        _classCallCheck(this, Math);
    }

    _createClass(Math, [{
        key: 'add',
        value: function add(a, b) {
            return a + b;
        }
    }]);

    return Math;
}(), (_applyDecoratedDescriptor(_class.prototype, 'add', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'add'), _class.prototype)), _class));
//日志装饰器

function log(type) {
    return function (target, name, descriptor) {
        console.log(target, name, descriptor);
        var _type = type || '';
        var oldValue = descriptor.value; //value==add
        descriptor.value = function () {
            for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
                arg[_key] = arguments[_key];
            }

            console.log(_type + ' \u8C03\u7528' + name + ' \u53C2\u6570\uFF1A', arg);
            return oldValue.apply(target, arg);
        };
        return descriptor;
    };
}
var math = new Math();
math.add(1, 2);
