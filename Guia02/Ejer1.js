var Rombo = /** @class */ (function () {
    function Rombo(_DiagH_, _DiagV_) {
        this.DiagH = _DiagH_;
        this.DiagV = _DiagV_;
        function Area() {
            return _DiagV_ * _DiagH_;
        }
    }
    return Rombo;
}());
var Rombo1 = new Rombo(2, 3);
console.log(Rombo1);
