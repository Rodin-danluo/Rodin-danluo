(() => {
  // assets/vendor/three.core.min.js
  var t = "181";
  var s = 0;
  var r = 1;
  var n = 2;
  var h = 1;
  var l = 2;
  var c = 3;
  var u = 0;
  var d = 1;
  var p = 2;
  var m = 0;
  var y = 1;
  var g = 2;
  var f = 3;
  var x = 4;
  var b = 5;
  var v = 100;
  var w = 101;
  var M = 102;
  var S = 103;
  var _ = 104;
  var A = 200;
  var T = 201;
  var z = 202;
  var C = 203;
  var I = 204;
  var B = 205;
  var k = 206;
  var P = 207;
  var O = 208;
  var R = 209;
  var N = 210;
  var V = 211;
  var F = 212;
  var L = 213;
  var E = 214;
  var j = 0;
  var D = 1;
  var W = 2;
  var U = 3;
  var q = 4;
  var J = 5;
  var X = 6;
  var Y = 7;
  var Z = 0;
  var H = 1;
  var G = 2;
  var $ = 0;
  var Q = 1;
  var K = 2;
  var tt = 3;
  var et = 4;
  var it = 5;
  var st = 6;
  var rt = 7;
  var ot = 300;
  var ht = 301;
  var lt = 302;
  var ct = 303;
  var ut = 304;
  var dt = 306;
  var pt = 1e3;
  var mt = 1001;
  var yt = 1002;
  var gt = 1003;
  var ft = 1004;
  var bt = 1005;
  var wt = 1006;
  var Mt = 1007;
  var _t = 1008;
  var Tt = 1009;
  var zt = 1010;
  var Ct = 1011;
  var It = 1012;
  var Bt = 1013;
  var kt = 1014;
  var Pt = 1015;
  var Ot = 1016;
  var Rt = 1017;
  var Nt = 1018;
  var Vt = 1020;
  var Ft = 35902;
  var Lt = 35899;
  var Et = 1021;
  var jt = 1022;
  var Dt = 1023;
  var Wt = 1026;
  var Ut = 1027;
  var qt = 1028;
  var Jt = 1029;
  var Xt = 1030;
  var Yt = 1031;
  var Ht = 1033;
  var Gt = 33776;
  var $t = 33777;
  var Qt = 33778;
  var Kt = 33779;
  var te = 35840;
  var ee = 35841;
  var ie = 35842;
  var se = 35843;
  var re = 36196;
  var ne = 37492;
  var ae = 37496;
  var oe = 37808;
  var he = 37809;
  var le = 37810;
  var ce = 37811;
  var ue = 37812;
  var de = 37813;
  var pe = 37814;
  var me = 37815;
  var ye = 37816;
  var ge = 37817;
  var fe = 37818;
  var xe = 37819;
  var be = 37820;
  var ve = 37821;
  var we = 36492;
  var Me = 36494;
  var Se = 36495;
  var _e = 36283;
  var Ae = 36284;
  var Te = 36285;
  var ze = 36286;
  var ke = 2300;
  var Pe = 2301;
  var Oe = 2302;
  var Re = 2400;
  var Ne = 2401;
  var Ve = 2402;
  var Ue = 3201;
  var Xe = 0;
  var Ye = 1;
  var Ze = "";
  var He = "srgb";
  var Ge = "srgb-linear";
  var $e = "linear";
  var Qe = "srgb";
  var ti = 7680;
  var yi = 512;
  var gi = 513;
  var fi = 514;
  var xi = 515;
  var bi = 516;
  var vi = 517;
  var wi = 518;
  var Mi = 519;
  var Si = 35044;
  var Oi = "300 es";
  var Ri = 2e3;
  var Ni = 2001;
  function Ei(t2) {
    for (let e2 = t2.length - 1; e2 >= 0; --e2) if (t2[e2] >= 65535) return true;
    return false;
  }
  function Wi(t2) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", t2);
  }
  function Ui() {
    const t2 = Wi("canvas");
    return t2.style.display = "block", t2;
  }
  var qi = {};
  var Ji = null;
  function Zi(...t2) {
    const e2 = "THREE." + t2.shift();
    Ji ? Ji("log", e2, ...t2) : console.log(e2, ...t2);
  }
  function Hi(...t2) {
    const e2 = "THREE." + t2.shift();
    Ji ? Ji("warn", e2, ...t2) : console.warn(e2, ...t2);
  }
  function Gi(...t2) {
    const e2 = "THREE." + t2.shift();
    Ji ? Ji("error", e2, ...t2) : console.error(e2, ...t2);
  }
  function $i(...t2) {
    const e2 = t2.join(" ");
    e2 in qi || (qi[e2] = true, Hi(...t2));
  }
  function Qi(t2, e2, i2) {
    return new Promise(function(s2, r2) {
      setTimeout(function n2() {
        switch (t2.clientWaitSync(e2, t2.SYNC_FLUSH_COMMANDS_BIT, 0)) {
          case t2.WAIT_FAILED:
            r2();
            break;
          case t2.TIMEOUT_EXPIRED:
            setTimeout(n2, i2);
            break;
          default:
            s2();
        }
      }, i2);
    });
  }
  var Ki = class {
    addEventListener(t2, e2) {
      void 0 === this._listeners && (this._listeners = {});
      const i2 = this._listeners;
      void 0 === i2[t2] && (i2[t2] = []), -1 === i2[t2].indexOf(e2) && i2[t2].push(e2);
    }
    hasEventListener(t2, e2) {
      const i2 = this._listeners;
      return void 0 !== i2 && (void 0 !== i2[t2] && -1 !== i2[t2].indexOf(e2));
    }
    removeEventListener(t2, e2) {
      const i2 = this._listeners;
      if (void 0 === i2) return;
      const s2 = i2[t2];
      if (void 0 !== s2) {
        const t3 = s2.indexOf(e2);
        -1 !== t3 && s2.splice(t3, 1);
      }
    }
    dispatchEvent(t2) {
      const e2 = this._listeners;
      if (void 0 === e2) return;
      const i2 = e2[t2.type];
      if (void 0 !== i2) {
        t2.target = this;
        const e3 = i2.slice(0);
        for (let i3 = 0, s2 = e3.length; i3 < s2; i3++) e3[i3].call(this, t2);
        t2.target = null;
      }
    }
  };
  var ts = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
  var es = 1234567;
  var is = Math.PI / 180;
  var ss = 180 / Math.PI;
  function rs() {
    const t2 = 4294967295 * Math.random() | 0, e2 = 4294967295 * Math.random() | 0, i2 = 4294967295 * Math.random() | 0, s2 = 4294967295 * Math.random() | 0;
    return (ts[255 & t2] + ts[t2 >> 8 & 255] + ts[t2 >> 16 & 255] + ts[t2 >> 24 & 255] + "-" + ts[255 & e2] + ts[e2 >> 8 & 255] + "-" + ts[e2 >> 16 & 15 | 64] + ts[e2 >> 24 & 255] + "-" + ts[63 & i2 | 128] + ts[i2 >> 8 & 255] + "-" + ts[i2 >> 16 & 255] + ts[i2 >> 24 & 255] + ts[255 & s2] + ts[s2 >> 8 & 255] + ts[s2 >> 16 & 255] + ts[s2 >> 24 & 255]).toLowerCase();
  }
  function ns(t2, e2, i2) {
    return Math.max(e2, Math.min(i2, t2));
  }
  function as(t2, e2) {
    return (t2 % e2 + e2) % e2;
  }
  function os(t2, e2, i2) {
    return (1 - i2) * t2 + i2 * e2;
  }
  function hs(t2, e2) {
    switch (e2.constructor) {
      case Float32Array:
        return t2;
      case Uint32Array:
        return t2 / 4294967295;
      case Uint16Array:
        return t2 / 65535;
      case Uint8Array:
        return t2 / 255;
      case Int32Array:
        return Math.max(t2 / 2147483647, -1);
      case Int16Array:
        return Math.max(t2 / 32767, -1);
      case Int8Array:
        return Math.max(t2 / 127, -1);
      default:
        throw new Error("Invalid component type.");
    }
  }
  function ls(t2, e2) {
    switch (e2.constructor) {
      case Float32Array:
        return t2;
      case Uint32Array:
        return Math.round(4294967295 * t2);
      case Uint16Array:
        return Math.round(65535 * t2);
      case Uint8Array:
        return Math.round(255 * t2);
      case Int32Array:
        return Math.round(2147483647 * t2);
      case Int16Array:
        return Math.round(32767 * t2);
      case Int8Array:
        return Math.round(127 * t2);
      default:
        throw new Error("Invalid component type.");
    }
  }
  var cs = { DEG2RAD: is, RAD2DEG: ss, generateUUID: rs, clamp: ns, euclideanModulo: as, mapLinear: function(t2, e2, i2, s2, r2) {
    return s2 + (t2 - e2) * (r2 - s2) / (i2 - e2);
  }, inverseLerp: function(t2, e2, i2) {
    return t2 !== e2 ? (i2 - t2) / (e2 - t2) : 0;
  }, lerp: os, damp: function(t2, e2, i2, s2) {
    return os(t2, e2, 1 - Math.exp(-i2 * s2));
  }, pingpong: function(t2, e2 = 1) {
    return e2 - Math.abs(as(t2, 2 * e2) - e2);
  }, smoothstep: function(t2, e2, i2) {
    return t2 <= e2 ? 0 : t2 >= i2 ? 1 : (t2 = (t2 - e2) / (i2 - e2)) * t2 * (3 - 2 * t2);
  }, smootherstep: function(t2, e2, i2) {
    return t2 <= e2 ? 0 : t2 >= i2 ? 1 : (t2 = (t2 - e2) / (i2 - e2)) * t2 * t2 * (t2 * (6 * t2 - 15) + 10);
  }, randInt: function(t2, e2) {
    return t2 + Math.floor(Math.random() * (e2 - t2 + 1));
  }, randFloat: function(t2, e2) {
    return t2 + Math.random() * (e2 - t2);
  }, randFloatSpread: function(t2) {
    return t2 * (0.5 - Math.random());
  }, seededRandom: function(t2) {
    void 0 !== t2 && (es = t2);
    let e2 = es += 1831565813;
    return e2 = Math.imul(e2 ^ e2 >>> 15, 1 | e2), e2 ^= e2 + Math.imul(e2 ^ e2 >>> 7, 61 | e2), ((e2 ^ e2 >>> 14) >>> 0) / 4294967296;
  }, degToRad: function(t2) {
    return t2 * is;
  }, radToDeg: function(t2) {
    return t2 * ss;
  }, isPowerOfTwo: function(t2) {
    return !(t2 & t2 - 1) && 0 !== t2;
  }, ceilPowerOfTwo: function(t2) {
    return Math.pow(2, Math.ceil(Math.log(t2) / Math.LN2));
  }, floorPowerOfTwo: function(t2) {
    return Math.pow(2, Math.floor(Math.log(t2) / Math.LN2));
  }, setQuaternionFromProperEuler: function(t2, e2, i2, s2, r2) {
    const n2 = Math.cos, a2 = Math.sin, o2 = n2(i2 / 2), h2 = a2(i2 / 2), l2 = n2((e2 + s2) / 2), c2 = a2((e2 + s2) / 2), u2 = n2((e2 - s2) / 2), d2 = a2((e2 - s2) / 2), p2 = n2((s2 - e2) / 2), m2 = a2((s2 - e2) / 2);
    switch (r2) {
      case "XYX":
        t2.set(o2 * c2, h2 * u2, h2 * d2, o2 * l2);
        break;
      case "YZY":
        t2.set(h2 * d2, o2 * c2, h2 * u2, o2 * l2);
        break;
      case "ZXZ":
        t2.set(h2 * u2, h2 * d2, o2 * c2, o2 * l2);
        break;
      case "XZX":
        t2.set(o2 * c2, h2 * m2, h2 * p2, o2 * l2);
        break;
      case "YXY":
        t2.set(h2 * p2, o2 * c2, h2 * m2, o2 * l2);
        break;
      case "ZYZ":
        t2.set(h2 * m2, h2 * p2, o2 * c2, o2 * l2);
        break;
      default:
        Hi("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r2);
    }
  }, normalize: ls, denormalize: hs };
  var us = class _us {
    constructor(t2 = 0, e2 = 0) {
      _us.prototype.isVector2 = true, this.x = t2, this.y = e2;
    }
    get width() {
      return this.x;
    }
    set width(t2) {
      this.x = t2;
    }
    get height() {
      return this.y;
    }
    set height(t2) {
      this.y = t2;
    }
    set(t2, e2) {
      return this.x = t2, this.y = e2, this;
    }
    setScalar(t2) {
      return this.x = t2, this.y = t2, this;
    }
    setX(t2) {
      return this.x = t2, this;
    }
    setY(t2) {
      return this.y = t2, this;
    }
    setComponent(t2, e2) {
      switch (t2) {
        case 0:
          this.x = e2;
          break;
        case 1:
          this.y = e2;
          break;
        default:
          throw new Error("index is out of range: " + t2);
      }
      return this;
    }
    getComponent(t2) {
      switch (t2) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + t2);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(t2) {
      return this.x = t2.x, this.y = t2.y, this;
    }
    add(t2) {
      return this.x += t2.x, this.y += t2.y, this;
    }
    addScalar(t2) {
      return this.x += t2, this.y += t2, this;
    }
    addVectors(t2, e2) {
      return this.x = t2.x + e2.x, this.y = t2.y + e2.y, this;
    }
    addScaledVector(t2, e2) {
      return this.x += t2.x * e2, this.y += t2.y * e2, this;
    }
    sub(t2) {
      return this.x -= t2.x, this.y -= t2.y, this;
    }
    subScalar(t2) {
      return this.x -= t2, this.y -= t2, this;
    }
    subVectors(t2, e2) {
      return this.x = t2.x - e2.x, this.y = t2.y - e2.y, this;
    }
    multiply(t2) {
      return this.x *= t2.x, this.y *= t2.y, this;
    }
    multiplyScalar(t2) {
      return this.x *= t2, this.y *= t2, this;
    }
    divide(t2) {
      return this.x /= t2.x, this.y /= t2.y, this;
    }
    divideScalar(t2) {
      return this.multiplyScalar(1 / t2);
    }
    applyMatrix3(t2) {
      const e2 = this.x, i2 = this.y, s2 = t2.elements;
      return this.x = s2[0] * e2 + s2[3] * i2 + s2[6], this.y = s2[1] * e2 + s2[4] * i2 + s2[7], this;
    }
    min(t2) {
      return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this;
    }
    max(t2) {
      return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this;
    }
    clamp(t2, e2) {
      return this.x = ns(this.x, t2.x, e2.x), this.y = ns(this.y, t2.y, e2.y), this;
    }
    clampScalar(t2, e2) {
      return this.x = ns(this.x, t2, e2), this.y = ns(this.y, t2, e2), this;
    }
    clampLength(t2, e2) {
      const i2 = this.length();
      return this.divideScalar(i2 || 1).multiplyScalar(ns(i2, t2, e2));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this;
    }
    dot(t2) {
      return this.x * t2.x + this.y * t2.y;
    }
    cross(t2) {
      return this.x * t2.y - this.y * t2.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    angleTo(t2) {
      const e2 = Math.sqrt(this.lengthSq() * t2.lengthSq());
      if (0 === e2) return Math.PI / 2;
      const i2 = this.dot(t2) / e2;
      return Math.acos(ns(i2, -1, 1));
    }
    distanceTo(t2) {
      return Math.sqrt(this.distanceToSquared(t2));
    }
    distanceToSquared(t2) {
      const e2 = this.x - t2.x, i2 = this.y - t2.y;
      return e2 * e2 + i2 * i2;
    }
    manhattanDistanceTo(t2) {
      return Math.abs(this.x - t2.x) + Math.abs(this.y - t2.y);
    }
    setLength(t2) {
      return this.normalize().multiplyScalar(t2);
    }
    lerp(t2, e2) {
      return this.x += (t2.x - this.x) * e2, this.y += (t2.y - this.y) * e2, this;
    }
    lerpVectors(t2, e2, i2) {
      return this.x = t2.x + (e2.x - t2.x) * i2, this.y = t2.y + (e2.y - t2.y) * i2, this;
    }
    equals(t2) {
      return t2.x === this.x && t2.y === this.y;
    }
    fromArray(t2, e2 = 0) {
      return this.x = t2[e2], this.y = t2[e2 + 1], this;
    }
    toArray(t2 = [], e2 = 0) {
      return t2[e2] = this.x, t2[e2 + 1] = this.y, t2;
    }
    fromBufferAttribute(t2, e2) {
      return this.x = t2.getX(e2), this.y = t2.getY(e2), this;
    }
    rotateAround(t2, e2) {
      const i2 = Math.cos(e2), s2 = Math.sin(e2), r2 = this.x - t2.x, n2 = this.y - t2.y;
      return this.x = r2 * i2 - n2 * s2 + t2.x, this.y = r2 * s2 + n2 * i2 + t2.y, this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y;
    }
  };
  var ds = class {
    constructor(t2 = 0, e2 = 0, i2 = 0, s2 = 1) {
      this.isQuaternion = true, this._x = t2, this._y = e2, this._z = i2, this._w = s2;
    }
    static slerpFlat(t2, e2, i2, s2, r2, n2, a2) {
      let o2 = i2[s2 + 0], h2 = i2[s2 + 1], l2 = i2[s2 + 2], c2 = i2[s2 + 3], u2 = r2[n2 + 0], d2 = r2[n2 + 1], p2 = r2[n2 + 2], m2 = r2[n2 + 3];
      if (a2 <= 0) return t2[e2 + 0] = o2, t2[e2 + 1] = h2, t2[e2 + 2] = l2, void (t2[e2 + 3] = c2);
      if (a2 >= 1) return t2[e2 + 0] = u2, t2[e2 + 1] = d2, t2[e2 + 2] = p2, void (t2[e2 + 3] = m2);
      if (c2 !== m2 || o2 !== u2 || h2 !== d2 || l2 !== p2) {
        let t3 = o2 * u2 + h2 * d2 + l2 * p2 + c2 * m2;
        t3 < 0 && (u2 = -u2, d2 = -d2, p2 = -p2, m2 = -m2, t3 = -t3);
        let e3 = 1 - a2;
        if (t3 < 0.9995) {
          const i3 = Math.acos(t3), s3 = Math.sin(i3);
          e3 = Math.sin(e3 * i3) / s3, o2 = o2 * e3 + u2 * (a2 = Math.sin(a2 * i3) / s3), h2 = h2 * e3 + d2 * a2, l2 = l2 * e3 + p2 * a2, c2 = c2 * e3 + m2 * a2;
        } else {
          o2 = o2 * e3 + u2 * a2, h2 = h2 * e3 + d2 * a2, l2 = l2 * e3 + p2 * a2, c2 = c2 * e3 + m2 * a2;
          const t4 = 1 / Math.sqrt(o2 * o2 + h2 * h2 + l2 * l2 + c2 * c2);
          o2 *= t4, h2 *= t4, l2 *= t4, c2 *= t4;
        }
      }
      t2[e2] = o2, t2[e2 + 1] = h2, t2[e2 + 2] = l2, t2[e2 + 3] = c2;
    }
    static multiplyQuaternionsFlat(t2, e2, i2, s2, r2, n2) {
      const a2 = i2[s2], o2 = i2[s2 + 1], h2 = i2[s2 + 2], l2 = i2[s2 + 3], c2 = r2[n2], u2 = r2[n2 + 1], d2 = r2[n2 + 2], p2 = r2[n2 + 3];
      return t2[e2] = a2 * p2 + l2 * c2 + o2 * d2 - h2 * u2, t2[e2 + 1] = o2 * p2 + l2 * u2 + h2 * c2 - a2 * d2, t2[e2 + 2] = h2 * p2 + l2 * d2 + a2 * u2 - o2 * c2, t2[e2 + 3] = l2 * p2 - a2 * c2 - o2 * u2 - h2 * d2, t2;
    }
    get x() {
      return this._x;
    }
    set x(t2) {
      this._x = t2, this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(t2) {
      this._y = t2, this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(t2) {
      this._z = t2, this._onChangeCallback();
    }
    get w() {
      return this._w;
    }
    set w(t2) {
      this._w = t2, this._onChangeCallback();
    }
    set(t2, e2, i2, s2) {
      return this._x = t2, this._y = e2, this._z = i2, this._w = s2, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(t2) {
      return this._x = t2.x, this._y = t2.y, this._z = t2.z, this._w = t2.w, this._onChangeCallback(), this;
    }
    setFromEuler(t2, e2 = true) {
      const i2 = t2._x, s2 = t2._y, r2 = t2._z, n2 = t2._order, a2 = Math.cos, o2 = Math.sin, h2 = a2(i2 / 2), l2 = a2(s2 / 2), c2 = a2(r2 / 2), u2 = o2(i2 / 2), d2 = o2(s2 / 2), p2 = o2(r2 / 2);
      switch (n2) {
        case "XYZ":
          this._x = u2 * l2 * c2 + h2 * d2 * p2, this._y = h2 * d2 * c2 - u2 * l2 * p2, this._z = h2 * l2 * p2 + u2 * d2 * c2, this._w = h2 * l2 * c2 - u2 * d2 * p2;
          break;
        case "YXZ":
          this._x = u2 * l2 * c2 + h2 * d2 * p2, this._y = h2 * d2 * c2 - u2 * l2 * p2, this._z = h2 * l2 * p2 - u2 * d2 * c2, this._w = h2 * l2 * c2 + u2 * d2 * p2;
          break;
        case "ZXY":
          this._x = u2 * l2 * c2 - h2 * d2 * p2, this._y = h2 * d2 * c2 + u2 * l2 * p2, this._z = h2 * l2 * p2 + u2 * d2 * c2, this._w = h2 * l2 * c2 - u2 * d2 * p2;
          break;
        case "ZYX":
          this._x = u2 * l2 * c2 - h2 * d2 * p2, this._y = h2 * d2 * c2 + u2 * l2 * p2, this._z = h2 * l2 * p2 - u2 * d2 * c2, this._w = h2 * l2 * c2 + u2 * d2 * p2;
          break;
        case "YZX":
          this._x = u2 * l2 * c2 + h2 * d2 * p2, this._y = h2 * d2 * c2 + u2 * l2 * p2, this._z = h2 * l2 * p2 - u2 * d2 * c2, this._w = h2 * l2 * c2 - u2 * d2 * p2;
          break;
        case "XZY":
          this._x = u2 * l2 * c2 - h2 * d2 * p2, this._y = h2 * d2 * c2 - u2 * l2 * p2, this._z = h2 * l2 * p2 + u2 * d2 * c2, this._w = h2 * l2 * c2 + u2 * d2 * p2;
          break;
        default:
          Hi("Quaternion: .setFromEuler() encountered an unknown order: " + n2);
      }
      return true === e2 && this._onChangeCallback(), this;
    }
    setFromAxisAngle(t2, e2) {
      const i2 = e2 / 2, s2 = Math.sin(i2);
      return this._x = t2.x * s2, this._y = t2.y * s2, this._z = t2.z * s2, this._w = Math.cos(i2), this._onChangeCallback(), this;
    }
    setFromRotationMatrix(t2) {
      const e2 = t2.elements, i2 = e2[0], s2 = e2[4], r2 = e2[8], n2 = e2[1], a2 = e2[5], o2 = e2[9], h2 = e2[2], l2 = e2[6], c2 = e2[10], u2 = i2 + a2 + c2;
      if (u2 > 0) {
        const t3 = 0.5 / Math.sqrt(u2 + 1);
        this._w = 0.25 / t3, this._x = (l2 - o2) * t3, this._y = (r2 - h2) * t3, this._z = (n2 - s2) * t3;
      } else if (i2 > a2 && i2 > c2) {
        const t3 = 2 * Math.sqrt(1 + i2 - a2 - c2);
        this._w = (l2 - o2) / t3, this._x = 0.25 * t3, this._y = (s2 + n2) / t3, this._z = (r2 + h2) / t3;
      } else if (a2 > c2) {
        const t3 = 2 * Math.sqrt(1 + a2 - i2 - c2);
        this._w = (r2 - h2) / t3, this._x = (s2 + n2) / t3, this._y = 0.25 * t3, this._z = (o2 + l2) / t3;
      } else {
        const t3 = 2 * Math.sqrt(1 + c2 - i2 - a2);
        this._w = (n2 - s2) / t3, this._x = (r2 + h2) / t3, this._y = (o2 + l2) / t3, this._z = 0.25 * t3;
      }
      return this._onChangeCallback(), this;
    }
    setFromUnitVectors(t2, e2) {
      let i2 = t2.dot(e2) + 1;
      return i2 < 1e-8 ? (i2 = 0, Math.abs(t2.x) > Math.abs(t2.z) ? (this._x = -t2.y, this._y = t2.x, this._z = 0, this._w = i2) : (this._x = 0, this._y = -t2.z, this._z = t2.y, this._w = i2)) : (this._x = t2.y * e2.z - t2.z * e2.y, this._y = t2.z * e2.x - t2.x * e2.z, this._z = t2.x * e2.y - t2.y * e2.x, this._w = i2), this.normalize();
    }
    angleTo(t2) {
      return 2 * Math.acos(Math.abs(ns(this.dot(t2), -1, 1)));
    }
    rotateTowards(t2, e2) {
      const i2 = this.angleTo(t2);
      if (0 === i2) return this;
      const s2 = Math.min(1, e2 / i2);
      return this.slerp(t2, s2), this;
    }
    identity() {
      return this.set(0, 0, 0, 1);
    }
    invert() {
      return this.conjugate();
    }
    conjugate() {
      return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
    }
    dot(t2) {
      return this._x * t2._x + this._y * t2._y + this._z * t2._z + this._w * t2._w;
    }
    lengthSq() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
    length() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }
    normalize() {
      let t2 = this.length();
      return 0 === t2 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t2 = 1 / t2, this._x = this._x * t2, this._y = this._y * t2, this._z = this._z * t2, this._w = this._w * t2), this._onChangeCallback(), this;
    }
    multiply(t2) {
      return this.multiplyQuaternions(this, t2);
    }
    premultiply(t2) {
      return this.multiplyQuaternions(t2, this);
    }
    multiplyQuaternions(t2, e2) {
      const i2 = t2._x, s2 = t2._y, r2 = t2._z, n2 = t2._w, a2 = e2._x, o2 = e2._y, h2 = e2._z, l2 = e2._w;
      return this._x = i2 * l2 + n2 * a2 + s2 * h2 - r2 * o2, this._y = s2 * l2 + n2 * o2 + r2 * a2 - i2 * h2, this._z = r2 * l2 + n2 * h2 + i2 * o2 - s2 * a2, this._w = n2 * l2 - i2 * a2 - s2 * o2 - r2 * h2, this._onChangeCallback(), this;
    }
    slerp(t2, e2) {
      if (e2 <= 0) return this;
      if (e2 >= 1) return this.copy(t2);
      let i2 = t2._x, s2 = t2._y, r2 = t2._z, n2 = t2._w, a2 = this.dot(t2);
      a2 < 0 && (i2 = -i2, s2 = -s2, r2 = -r2, n2 = -n2, a2 = -a2);
      let o2 = 1 - e2;
      if (a2 < 0.9995) {
        const t3 = Math.acos(a2), h2 = Math.sin(t3);
        o2 = Math.sin(o2 * t3) / h2, e2 = Math.sin(e2 * t3) / h2, this._x = this._x * o2 + i2 * e2, this._y = this._y * o2 + s2 * e2, this._z = this._z * o2 + r2 * e2, this._w = this._w * o2 + n2 * e2, this._onChangeCallback();
      } else this._x = this._x * o2 + i2 * e2, this._y = this._y * o2 + s2 * e2, this._z = this._z * o2 + r2 * e2, this._w = this._w * o2 + n2 * e2, this.normalize();
      return this;
    }
    slerpQuaternions(t2, e2, i2) {
      return this.copy(t2).slerp(e2, i2);
    }
    random() {
      const t2 = 2 * Math.PI * Math.random(), e2 = 2 * Math.PI * Math.random(), i2 = Math.random(), s2 = Math.sqrt(1 - i2), r2 = Math.sqrt(i2);
      return this.set(s2 * Math.sin(t2), s2 * Math.cos(t2), r2 * Math.sin(e2), r2 * Math.cos(e2));
    }
    equals(t2) {
      return t2._x === this._x && t2._y === this._y && t2._z === this._z && t2._w === this._w;
    }
    fromArray(t2, e2 = 0) {
      return this._x = t2[e2], this._y = t2[e2 + 1], this._z = t2[e2 + 2], this._w = t2[e2 + 3], this._onChangeCallback(), this;
    }
    toArray(t2 = [], e2 = 0) {
      return t2[e2] = this._x, t2[e2 + 1] = this._y, t2[e2 + 2] = this._z, t2[e2 + 3] = this._w, t2;
    }
    fromBufferAttribute(t2, e2) {
      return this._x = t2.getX(e2), this._y = t2.getY(e2), this._z = t2.getZ(e2), this._w = t2.getW(e2), this._onChangeCallback(), this;
    }
    toJSON() {
      return this.toArray();
    }
    _onChange(t2) {
      return this._onChangeCallback = t2, this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._w;
    }
  };
  var ps = class _ps {
    constructor(t2 = 0, e2 = 0, i2 = 0) {
      _ps.prototype.isVector3 = true, this.x = t2, this.y = e2, this.z = i2;
    }
    set(t2, e2, i2) {
      return void 0 === i2 && (i2 = this.z), this.x = t2, this.y = e2, this.z = i2, this;
    }
    setScalar(t2) {
      return this.x = t2, this.y = t2, this.z = t2, this;
    }
    setX(t2) {
      return this.x = t2, this;
    }
    setY(t2) {
      return this.y = t2, this;
    }
    setZ(t2) {
      return this.z = t2, this;
    }
    setComponent(t2, e2) {
      switch (t2) {
        case 0:
          this.x = e2;
          break;
        case 1:
          this.y = e2;
          break;
        case 2:
          this.z = e2;
          break;
        default:
          throw new Error("index is out of range: " + t2);
      }
      return this;
    }
    getComponent(t2) {
      switch (t2) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + t2);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(t2) {
      return this.x = t2.x, this.y = t2.y, this.z = t2.z, this;
    }
    add(t2) {
      return this.x += t2.x, this.y += t2.y, this.z += t2.z, this;
    }
    addScalar(t2) {
      return this.x += t2, this.y += t2, this.z += t2, this;
    }
    addVectors(t2, e2) {
      return this.x = t2.x + e2.x, this.y = t2.y + e2.y, this.z = t2.z + e2.z, this;
    }
    addScaledVector(t2, e2) {
      return this.x += t2.x * e2, this.y += t2.y * e2, this.z += t2.z * e2, this;
    }
    sub(t2) {
      return this.x -= t2.x, this.y -= t2.y, this.z -= t2.z, this;
    }
    subScalar(t2) {
      return this.x -= t2, this.y -= t2, this.z -= t2, this;
    }
    subVectors(t2, e2) {
      return this.x = t2.x - e2.x, this.y = t2.y - e2.y, this.z = t2.z - e2.z, this;
    }
    multiply(t2) {
      return this.x *= t2.x, this.y *= t2.y, this.z *= t2.z, this;
    }
    multiplyScalar(t2) {
      return this.x *= t2, this.y *= t2, this.z *= t2, this;
    }
    multiplyVectors(t2, e2) {
      return this.x = t2.x * e2.x, this.y = t2.y * e2.y, this.z = t2.z * e2.z, this;
    }
    applyEuler(t2) {
      return this.applyQuaternion(ys.setFromEuler(t2));
    }
    applyAxisAngle(t2, e2) {
      return this.applyQuaternion(ys.setFromAxisAngle(t2, e2));
    }
    applyMatrix3(t2) {
      const e2 = this.x, i2 = this.y, s2 = this.z, r2 = t2.elements;
      return this.x = r2[0] * e2 + r2[3] * i2 + r2[6] * s2, this.y = r2[1] * e2 + r2[4] * i2 + r2[7] * s2, this.z = r2[2] * e2 + r2[5] * i2 + r2[8] * s2, this;
    }
    applyNormalMatrix(t2) {
      return this.applyMatrix3(t2).normalize();
    }
    applyMatrix4(t2) {
      const e2 = this.x, i2 = this.y, s2 = this.z, r2 = t2.elements, n2 = 1 / (r2[3] * e2 + r2[7] * i2 + r2[11] * s2 + r2[15]);
      return this.x = (r2[0] * e2 + r2[4] * i2 + r2[8] * s2 + r2[12]) * n2, this.y = (r2[1] * e2 + r2[5] * i2 + r2[9] * s2 + r2[13]) * n2, this.z = (r2[2] * e2 + r2[6] * i2 + r2[10] * s2 + r2[14]) * n2, this;
    }
    applyQuaternion(t2) {
      const e2 = this.x, i2 = this.y, s2 = this.z, r2 = t2.x, n2 = t2.y, a2 = t2.z, o2 = t2.w, h2 = 2 * (n2 * s2 - a2 * i2), l2 = 2 * (a2 * e2 - r2 * s2), c2 = 2 * (r2 * i2 - n2 * e2);
      return this.x = e2 + o2 * h2 + n2 * c2 - a2 * l2, this.y = i2 + o2 * l2 + a2 * h2 - r2 * c2, this.z = s2 + o2 * c2 + r2 * l2 - n2 * h2, this;
    }
    project(t2) {
      return this.applyMatrix4(t2.matrixWorldInverse).applyMatrix4(t2.projectionMatrix);
    }
    unproject(t2) {
      return this.applyMatrix4(t2.projectionMatrixInverse).applyMatrix4(t2.matrixWorld);
    }
    transformDirection(t2) {
      const e2 = this.x, i2 = this.y, s2 = this.z, r2 = t2.elements;
      return this.x = r2[0] * e2 + r2[4] * i2 + r2[8] * s2, this.y = r2[1] * e2 + r2[5] * i2 + r2[9] * s2, this.z = r2[2] * e2 + r2[6] * i2 + r2[10] * s2, this.normalize();
    }
    divide(t2) {
      return this.x /= t2.x, this.y /= t2.y, this.z /= t2.z, this;
    }
    divideScalar(t2) {
      return this.multiplyScalar(1 / t2);
    }
    min(t2) {
      return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this.z = Math.min(this.z, t2.z), this;
    }
    max(t2) {
      return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this.z = Math.max(this.z, t2.z), this;
    }
    clamp(t2, e2) {
      return this.x = ns(this.x, t2.x, e2.x), this.y = ns(this.y, t2.y, e2.y), this.z = ns(this.z, t2.z, e2.z), this;
    }
    clampScalar(t2, e2) {
      return this.x = ns(this.x, t2, e2), this.y = ns(this.y, t2, e2), this.z = ns(this.z, t2, e2), this;
    }
    clampLength(t2, e2) {
      const i2 = this.length();
      return this.divideScalar(i2 || 1).multiplyScalar(ns(i2, t2, e2));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
    }
    dot(t2) {
      return this.x * t2.x + this.y * t2.y + this.z * t2.z;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(t2) {
      return this.normalize().multiplyScalar(t2);
    }
    lerp(t2, e2) {
      return this.x += (t2.x - this.x) * e2, this.y += (t2.y - this.y) * e2, this.z += (t2.z - this.z) * e2, this;
    }
    lerpVectors(t2, e2, i2) {
      return this.x = t2.x + (e2.x - t2.x) * i2, this.y = t2.y + (e2.y - t2.y) * i2, this.z = t2.z + (e2.z - t2.z) * i2, this;
    }
    cross(t2) {
      return this.crossVectors(this, t2);
    }
    crossVectors(t2, e2) {
      const i2 = t2.x, s2 = t2.y, r2 = t2.z, n2 = e2.x, a2 = e2.y, o2 = e2.z;
      return this.x = s2 * o2 - r2 * a2, this.y = r2 * n2 - i2 * o2, this.z = i2 * a2 - s2 * n2, this;
    }
    projectOnVector(t2) {
      const e2 = t2.lengthSq();
      if (0 === e2) return this.set(0, 0, 0);
      const i2 = t2.dot(this) / e2;
      return this.copy(t2).multiplyScalar(i2);
    }
    projectOnPlane(t2) {
      return ms.copy(this).projectOnVector(t2), this.sub(ms);
    }
    reflect(t2) {
      return this.sub(ms.copy(t2).multiplyScalar(2 * this.dot(t2)));
    }
    angleTo(t2) {
      const e2 = Math.sqrt(this.lengthSq() * t2.lengthSq());
      if (0 === e2) return Math.PI / 2;
      const i2 = this.dot(t2) / e2;
      return Math.acos(ns(i2, -1, 1));
    }
    distanceTo(t2) {
      return Math.sqrt(this.distanceToSquared(t2));
    }
    distanceToSquared(t2) {
      const e2 = this.x - t2.x, i2 = this.y - t2.y, s2 = this.z - t2.z;
      return e2 * e2 + i2 * i2 + s2 * s2;
    }
    manhattanDistanceTo(t2) {
      return Math.abs(this.x - t2.x) + Math.abs(this.y - t2.y) + Math.abs(this.z - t2.z);
    }
    setFromSpherical(t2) {
      return this.setFromSphericalCoords(t2.radius, t2.phi, t2.theta);
    }
    setFromSphericalCoords(t2, e2, i2) {
      const s2 = Math.sin(e2) * t2;
      return this.x = s2 * Math.sin(i2), this.y = Math.cos(e2) * t2, this.z = s2 * Math.cos(i2), this;
    }
    setFromCylindrical(t2) {
      return this.setFromCylindricalCoords(t2.radius, t2.theta, t2.y);
    }
    setFromCylindricalCoords(t2, e2, i2) {
      return this.x = t2 * Math.sin(e2), this.y = i2, this.z = t2 * Math.cos(e2), this;
    }
    setFromMatrixPosition(t2) {
      const e2 = t2.elements;
      return this.x = e2[12], this.y = e2[13], this.z = e2[14], this;
    }
    setFromMatrixScale(t2) {
      const e2 = this.setFromMatrixColumn(t2, 0).length(), i2 = this.setFromMatrixColumn(t2, 1).length(), s2 = this.setFromMatrixColumn(t2, 2).length();
      return this.x = e2, this.y = i2, this.z = s2, this;
    }
    setFromMatrixColumn(t2, e2) {
      return this.fromArray(t2.elements, 4 * e2);
    }
    setFromMatrix3Column(t2, e2) {
      return this.fromArray(t2.elements, 3 * e2);
    }
    setFromEuler(t2) {
      return this.x = t2._x, this.y = t2._y, this.z = t2._z, this;
    }
    setFromColor(t2) {
      return this.x = t2.r, this.y = t2.g, this.z = t2.b, this;
    }
    equals(t2) {
      return t2.x === this.x && t2.y === this.y && t2.z === this.z;
    }
    fromArray(t2, e2 = 0) {
      return this.x = t2[e2], this.y = t2[e2 + 1], this.z = t2[e2 + 2], this;
    }
    toArray(t2 = [], e2 = 0) {
      return t2[e2] = this.x, t2[e2 + 1] = this.y, t2[e2 + 2] = this.z, t2;
    }
    fromBufferAttribute(t2, e2) {
      return this.x = t2.getX(e2), this.y = t2.getY(e2), this.z = t2.getZ(e2), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
    }
    randomDirection() {
      const t2 = Math.random() * Math.PI * 2, e2 = 2 * Math.random() - 1, i2 = Math.sqrt(1 - e2 * e2);
      return this.x = i2 * Math.cos(t2), this.y = e2, this.z = i2 * Math.sin(t2), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z;
    }
  };
  var ms = new ps();
  var ys = new ds();
  var gs = class _gs {
    constructor(t2, e2, i2, s2, r2, n2, a2, o2, h2) {
      _gs.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], void 0 !== t2 && this.set(t2, e2, i2, s2, r2, n2, a2, o2, h2);
    }
    set(t2, e2, i2, s2, r2, n2, a2, o2, h2) {
      const l2 = this.elements;
      return l2[0] = t2, l2[1] = s2, l2[2] = a2, l2[3] = e2, l2[4] = r2, l2[5] = o2, l2[6] = i2, l2[7] = n2, l2[8] = h2, this;
    }
    identity() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }
    copy(t2) {
      const e2 = this.elements, i2 = t2.elements;
      return e2[0] = i2[0], e2[1] = i2[1], e2[2] = i2[2], e2[3] = i2[3], e2[4] = i2[4], e2[5] = i2[5], e2[6] = i2[6], e2[7] = i2[7], e2[8] = i2[8], this;
    }
    extractBasis(t2, e2, i2) {
      return t2.setFromMatrix3Column(this, 0), e2.setFromMatrix3Column(this, 1), i2.setFromMatrix3Column(this, 2), this;
    }
    setFromMatrix4(t2) {
      const e2 = t2.elements;
      return this.set(e2[0], e2[4], e2[8], e2[1], e2[5], e2[9], e2[2], e2[6], e2[10]), this;
    }
    multiply(t2) {
      return this.multiplyMatrices(this, t2);
    }
    premultiply(t2) {
      return this.multiplyMatrices(t2, this);
    }
    multiplyMatrices(t2, e2) {
      const i2 = t2.elements, s2 = e2.elements, r2 = this.elements, n2 = i2[0], a2 = i2[3], o2 = i2[6], h2 = i2[1], l2 = i2[4], c2 = i2[7], u2 = i2[2], d2 = i2[5], p2 = i2[8], m2 = s2[0], y2 = s2[3], g2 = s2[6], f2 = s2[1], x2 = s2[4], b2 = s2[7], v2 = s2[2], w2 = s2[5], M2 = s2[8];
      return r2[0] = n2 * m2 + a2 * f2 + o2 * v2, r2[3] = n2 * y2 + a2 * x2 + o2 * w2, r2[6] = n2 * g2 + a2 * b2 + o2 * M2, r2[1] = h2 * m2 + l2 * f2 + c2 * v2, r2[4] = h2 * y2 + l2 * x2 + c2 * w2, r2[7] = h2 * g2 + l2 * b2 + c2 * M2, r2[2] = u2 * m2 + d2 * f2 + p2 * v2, r2[5] = u2 * y2 + d2 * x2 + p2 * w2, r2[8] = u2 * g2 + d2 * b2 + p2 * M2, this;
    }
    multiplyScalar(t2) {
      const e2 = this.elements;
      return e2[0] *= t2, e2[3] *= t2, e2[6] *= t2, e2[1] *= t2, e2[4] *= t2, e2[7] *= t2, e2[2] *= t2, e2[5] *= t2, e2[8] *= t2, this;
    }
    determinant() {
      const t2 = this.elements, e2 = t2[0], i2 = t2[1], s2 = t2[2], r2 = t2[3], n2 = t2[4], a2 = t2[5], o2 = t2[6], h2 = t2[7], l2 = t2[8];
      return e2 * n2 * l2 - e2 * a2 * h2 - i2 * r2 * l2 + i2 * a2 * o2 + s2 * r2 * h2 - s2 * n2 * o2;
    }
    invert() {
      const t2 = this.elements, e2 = t2[0], i2 = t2[1], s2 = t2[2], r2 = t2[3], n2 = t2[4], a2 = t2[5], o2 = t2[6], h2 = t2[7], l2 = t2[8], c2 = l2 * n2 - a2 * h2, u2 = a2 * o2 - l2 * r2, d2 = h2 * r2 - n2 * o2, p2 = e2 * c2 + i2 * u2 + s2 * d2;
      if (0 === p2) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const m2 = 1 / p2;
      return t2[0] = c2 * m2, t2[1] = (s2 * h2 - l2 * i2) * m2, t2[2] = (a2 * i2 - s2 * n2) * m2, t2[3] = u2 * m2, t2[4] = (l2 * e2 - s2 * o2) * m2, t2[5] = (s2 * r2 - a2 * e2) * m2, t2[6] = d2 * m2, t2[7] = (i2 * o2 - h2 * e2) * m2, t2[8] = (n2 * e2 - i2 * r2) * m2, this;
    }
    transpose() {
      let t2;
      const e2 = this.elements;
      return t2 = e2[1], e2[1] = e2[3], e2[3] = t2, t2 = e2[2], e2[2] = e2[6], e2[6] = t2, t2 = e2[5], e2[5] = e2[7], e2[7] = t2, this;
    }
    getNormalMatrix(t2) {
      return this.setFromMatrix4(t2).invert().transpose();
    }
    transposeIntoArray(t2) {
      const e2 = this.elements;
      return t2[0] = e2[0], t2[1] = e2[3], t2[2] = e2[6], t2[3] = e2[1], t2[4] = e2[4], t2[5] = e2[7], t2[6] = e2[2], t2[7] = e2[5], t2[8] = e2[8], this;
    }
    setUvTransform(t2, e2, i2, s2, r2, n2, a2) {
      const o2 = Math.cos(r2), h2 = Math.sin(r2);
      return this.set(i2 * o2, i2 * h2, -i2 * (o2 * n2 + h2 * a2) + n2 + t2, -s2 * h2, s2 * o2, -s2 * (-h2 * n2 + o2 * a2) + a2 + e2, 0, 0, 1), this;
    }
    scale(t2, e2) {
      return this.premultiply(fs.makeScale(t2, e2)), this;
    }
    rotate(t2) {
      return this.premultiply(fs.makeRotation(-t2)), this;
    }
    translate(t2, e2) {
      return this.premultiply(fs.makeTranslation(t2, e2)), this;
    }
    makeTranslation(t2, e2) {
      return t2.isVector2 ? this.set(1, 0, t2.x, 0, 1, t2.y, 0, 0, 1) : this.set(1, 0, t2, 0, 1, e2, 0, 0, 1), this;
    }
    makeRotation(t2) {
      const e2 = Math.cos(t2), i2 = Math.sin(t2);
      return this.set(e2, -i2, 0, i2, e2, 0, 0, 0, 1), this;
    }
    makeScale(t2, e2) {
      return this.set(t2, 0, 0, 0, e2, 0, 0, 0, 1), this;
    }
    equals(t2) {
      const e2 = this.elements, i2 = t2.elements;
      for (let t3 = 0; t3 < 9; t3++) if (e2[t3] !== i2[t3]) return false;
      return true;
    }
    fromArray(t2, e2 = 0) {
      for (let i2 = 0; i2 < 9; i2++) this.elements[i2] = t2[i2 + e2];
      return this;
    }
    toArray(t2 = [], e2 = 0) {
      const i2 = this.elements;
      return t2[e2] = i2[0], t2[e2 + 1] = i2[1], t2[e2 + 2] = i2[2], t2[e2 + 3] = i2[3], t2[e2 + 4] = i2[4], t2[e2 + 5] = i2[5], t2[e2 + 6] = i2[6], t2[e2 + 7] = i2[7], t2[e2 + 8] = i2[8], t2;
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  };
  var fs = new gs();
  var xs = new gs().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322);
  var bs = new gs().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
  function vs() {
    const t2 = { enabled: true, workingColorSpace: Ge, spaces: {}, convert: function(t3, e3, i3) {
      return false !== this.enabled && e3 !== i3 && e3 && i3 ? (this.spaces[e3].transfer === Qe && (t3.r = Ms(t3.r), t3.g = Ms(t3.g), t3.b = Ms(t3.b)), this.spaces[e3].primaries !== this.spaces[i3].primaries && (t3.applyMatrix3(this.spaces[e3].toXYZ), t3.applyMatrix3(this.spaces[i3].fromXYZ)), this.spaces[i3].transfer === Qe && (t3.r = Ss(t3.r), t3.g = Ss(t3.g), t3.b = Ss(t3.b)), t3) : t3;
    }, workingToColorSpace: function(t3, e3) {
      return this.convert(t3, this.workingColorSpace, e3);
    }, colorSpaceToWorking: function(t3, e3) {
      return this.convert(t3, e3, this.workingColorSpace);
    }, getPrimaries: function(t3) {
      return this.spaces[t3].primaries;
    }, getTransfer: function(t3) {
      return "" === t3 ? $e : this.spaces[t3].transfer;
    }, getToneMappingMode: function(t3) {
      return this.spaces[t3].outputColorSpaceConfig.toneMappingMode || "standard";
    }, getLuminanceCoefficients: function(t3, e3 = this.workingColorSpace) {
      return t3.fromArray(this.spaces[e3].luminanceCoefficients);
    }, define: function(t3) {
      Object.assign(this.spaces, t3);
    }, _getMatrix: function(t3, e3, i3) {
      return t3.copy(this.spaces[e3].toXYZ).multiply(this.spaces[i3].fromXYZ);
    }, _getDrawingBufferColorSpace: function(t3) {
      return this.spaces[t3].outputColorSpaceConfig.drawingBufferColorSpace;
    }, _getUnpackColorSpace: function(t3 = this.workingColorSpace) {
      return this.spaces[t3].workingColorSpaceConfig.unpackColorSpace;
    }, fromWorkingColorSpace: function(e3, i3) {
      return $i("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), t2.workingToColorSpace(e3, i3);
    }, toWorkingColorSpace: function(e3, i3) {
      return $i("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), t2.colorSpaceToWorking(e3, i3);
    } }, e2 = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], i2 = [0.2126, 0.7152, 0.0722], s2 = [0.3127, 0.329];
    return t2.define({ [Ge]: { primaries: e2, whitePoint: s2, transfer: $e, toXYZ: xs, fromXYZ: bs, luminanceCoefficients: i2, workingColorSpaceConfig: { unpackColorSpace: He }, outputColorSpaceConfig: { drawingBufferColorSpace: He } }, [He]: { primaries: e2, whitePoint: s2, transfer: Qe, toXYZ: xs, fromXYZ: bs, luminanceCoefficients: i2, outputColorSpaceConfig: { drawingBufferColorSpace: He } } }), t2;
  }
  var ws = vs();
  function Ms(t2) {
    return t2 < 0.04045 ? 0.0773993808 * t2 : Math.pow(0.9478672986 * t2 + 0.0521327014, 2.4);
  }
  function Ss(t2) {
    return t2 < 31308e-7 ? 12.92 * t2 : 1.055 * Math.pow(t2, 0.41666) - 0.055;
  }
  var _s;
  var As = class {
    static getDataURL(t2, e2 = "image/png") {
      if (/^data:/i.test(t2.src)) return t2.src;
      if ("undefined" == typeof HTMLCanvasElement) return t2.src;
      let i2;
      if (t2 instanceof HTMLCanvasElement) i2 = t2;
      else {
        void 0 === _s && (_s = Wi("canvas")), _s.width = t2.width, _s.height = t2.height;
        const e3 = _s.getContext("2d");
        t2 instanceof ImageData ? e3.putImageData(t2, 0, 0) : e3.drawImage(t2, 0, 0, t2.width, t2.height), i2 = _s;
      }
      return i2.toDataURL(e2);
    }
    static sRGBToLinear(t2) {
      if ("undefined" != typeof HTMLImageElement && t2 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t2 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t2 instanceof ImageBitmap) {
        const e2 = Wi("canvas");
        e2.width = t2.width, e2.height = t2.height;
        const i2 = e2.getContext("2d");
        i2.drawImage(t2, 0, 0, t2.width, t2.height);
        const s2 = i2.getImageData(0, 0, t2.width, t2.height), r2 = s2.data;
        for (let t3 = 0; t3 < r2.length; t3++) r2[t3] = 255 * Ms(r2[t3] / 255);
        return i2.putImageData(s2, 0, 0), e2;
      }
      if (t2.data) {
        const e2 = t2.data.slice(0);
        for (let t3 = 0; t3 < e2.length; t3++) e2 instanceof Uint8Array || e2 instanceof Uint8ClampedArray ? e2[t3] = Math.floor(255 * Ms(e2[t3] / 255)) : e2[t3] = Ms(e2[t3]);
        return { data: e2, width: t2.width, height: t2.height };
      }
      return Hi("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t2;
    }
  };
  var Ts = 0;
  var zs = class {
    constructor(t2 = null) {
      this.isSource = true, Object.defineProperty(this, "id", { value: Ts++ }), this.uuid = rs(), this.data = t2, this.dataReady = true, this.version = 0;
    }
    getSize(t2) {
      const e2 = this.data;
      return "undefined" != typeof HTMLVideoElement && e2 instanceof HTMLVideoElement ? t2.set(e2.videoWidth, e2.videoHeight, 0) : e2 instanceof VideoFrame ? t2.set(e2.displayHeight, e2.displayWidth, 0) : null !== e2 ? t2.set(e2.width, e2.height, e2.depth || 0) : t2.set(0, 0, 0), t2;
    }
    set needsUpdate(t2) {
      true === t2 && this.version++;
    }
    toJSON(t2) {
      const e2 = void 0 === t2 || "string" == typeof t2;
      if (!e2 && void 0 !== t2.images[this.uuid]) return t2.images[this.uuid];
      const i2 = { uuid: this.uuid, url: "" }, s2 = this.data;
      if (null !== s2) {
        let t3;
        if (Array.isArray(s2)) {
          t3 = [];
          for (let e3 = 0, i3 = s2.length; e3 < i3; e3++) s2[e3].isDataTexture ? t3.push(Cs(s2[e3].image)) : t3.push(Cs(s2[e3]));
        } else t3 = Cs(s2);
        i2.url = t3;
      }
      return e2 || (t2.images[this.uuid] = i2), i2;
    }
  };
  function Cs(t2) {
    return "undefined" != typeof HTMLImageElement && t2 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t2 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t2 instanceof ImageBitmap ? As.getDataURL(t2) : t2.data ? { data: Array.from(t2.data), width: t2.width, height: t2.height, type: t2.data.constructor.name } : (Hi("Texture: Unable to serialize Texture."), {});
  }
  var Is = 0;
  var Bs = new ps();
  var ks = class _ks extends Ki {
    constructor(t2 = _ks.DEFAULT_IMAGE, e2 = _ks.DEFAULT_MAPPING, i2 = 1001, s2 = 1001, r2 = 1006, n2 = 1008, a2 = 1023, o2 = 1009, h2 = _ks.DEFAULT_ANISOTROPY, l2 = "") {
      super(), this.isTexture = true, Object.defineProperty(this, "id", { value: Is++ }), this.uuid = rs(), this.name = "", this.source = new zs(t2), this.mipmaps = [], this.mapping = e2, this.channel = 0, this.wrapS = i2, this.wrapT = s2, this.magFilter = r2, this.minFilter = n2, this.anisotropy = h2, this.format = a2, this.internalFormat = null, this.type = o2, this.offset = new us(0, 0), this.repeat = new us(1, 1), this.center = new us(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new gs(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = l2, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.isArrayTexture = !!(t2 && t2.depth && t2.depth > 1), this.pmremVersion = 0;
    }
    get width() {
      return this.source.getSize(Bs).x;
    }
    get height() {
      return this.source.getSize(Bs).y;
    }
    get depth() {
      return this.source.getSize(Bs).z;
    }
    get image() {
      return this.source.data;
    }
    set image(t2 = null) {
      this.source.data = t2;
    }
    updateMatrix() {
      this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
    }
    addUpdateRange(t2, e2) {
      this.updateRanges.push({ start: t2, count: e2 });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      return this.name = t2.name, this.source = t2.source, this.mipmaps = t2.mipmaps.slice(0), this.mapping = t2.mapping, this.channel = t2.channel, this.wrapS = t2.wrapS, this.wrapT = t2.wrapT, this.magFilter = t2.magFilter, this.minFilter = t2.minFilter, this.anisotropy = t2.anisotropy, this.format = t2.format, this.internalFormat = t2.internalFormat, this.type = t2.type, this.offset.copy(t2.offset), this.repeat.copy(t2.repeat), this.center.copy(t2.center), this.rotation = t2.rotation, this.matrixAutoUpdate = t2.matrixAutoUpdate, this.matrix.copy(t2.matrix), this.generateMipmaps = t2.generateMipmaps, this.premultiplyAlpha = t2.premultiplyAlpha, this.flipY = t2.flipY, this.unpackAlignment = t2.unpackAlignment, this.colorSpace = t2.colorSpace, this.renderTarget = t2.renderTarget, this.isRenderTargetTexture = t2.isRenderTargetTexture, this.isArrayTexture = t2.isArrayTexture, this.userData = JSON.parse(JSON.stringify(t2.userData)), this.needsUpdate = true, this;
    }
    setValues(t2) {
      for (const e2 in t2) {
        const i2 = t2[e2];
        if (void 0 === i2) {
          Hi(`Texture.setValues(): parameter '${e2}' has value of undefined.`);
          continue;
        }
        const s2 = this[e2];
        void 0 !== s2 ? s2 && i2 && s2.isVector2 && i2.isVector2 || s2 && i2 && s2.isVector3 && i2.isVector3 || s2 && i2 && s2.isMatrix3 && i2.isMatrix3 ? s2.copy(i2) : this[e2] = i2 : Hi(`Texture.setValues(): property '${e2}' does not exist.`);
      }
    }
    toJSON(t2) {
      const e2 = void 0 === t2 || "string" == typeof t2;
      if (!e2 && void 0 !== t2.textures[this.uuid]) return t2.textures[this.uuid];
      const i2 = { metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(t2).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
      return Object.keys(this.userData).length > 0 && (i2.userData = this.userData), e2 || (t2.textures[this.uuid] = i2), i2;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    transformUv(t2) {
      if (this.mapping !== ot) return t2;
      if (t2.applyMatrix3(this.matrix), t2.x < 0 || t2.x > 1) switch (this.wrapS) {
        case pt:
          t2.x = t2.x - Math.floor(t2.x);
          break;
        case mt:
          t2.x = t2.x < 0 ? 0 : 1;
          break;
        case yt:
          1 === Math.abs(Math.floor(t2.x) % 2) ? t2.x = Math.ceil(t2.x) - t2.x : t2.x = t2.x - Math.floor(t2.x);
      }
      if (t2.y < 0 || t2.y > 1) switch (this.wrapT) {
        case pt:
          t2.y = t2.y - Math.floor(t2.y);
          break;
        case mt:
          t2.y = t2.y < 0 ? 0 : 1;
          break;
        case yt:
          1 === Math.abs(Math.floor(t2.y) % 2) ? t2.y = Math.ceil(t2.y) - t2.y : t2.y = t2.y - Math.floor(t2.y);
      }
      return this.flipY && (t2.y = 1 - t2.y), t2;
    }
    set needsUpdate(t2) {
      true === t2 && (this.version++, this.source.needsUpdate = true);
    }
    set needsPMREMUpdate(t2) {
      true === t2 && this.pmremVersion++;
    }
  };
  ks.DEFAULT_IMAGE = null, ks.DEFAULT_MAPPING = ot, ks.DEFAULT_ANISOTROPY = 1;
  var Ps = class _Ps {
    constructor(t2 = 0, e2 = 0, i2 = 0, s2 = 1) {
      _Ps.prototype.isVector4 = true, this.x = t2, this.y = e2, this.z = i2, this.w = s2;
    }
    get width() {
      return this.z;
    }
    set width(t2) {
      this.z = t2;
    }
    get height() {
      return this.w;
    }
    set height(t2) {
      this.w = t2;
    }
    set(t2, e2, i2, s2) {
      return this.x = t2, this.y = e2, this.z = i2, this.w = s2, this;
    }
    setScalar(t2) {
      return this.x = t2, this.y = t2, this.z = t2, this.w = t2, this;
    }
    setX(t2) {
      return this.x = t2, this;
    }
    setY(t2) {
      return this.y = t2, this;
    }
    setZ(t2) {
      return this.z = t2, this;
    }
    setW(t2) {
      return this.w = t2, this;
    }
    setComponent(t2, e2) {
      switch (t2) {
        case 0:
          this.x = e2;
          break;
        case 1:
          this.y = e2;
          break;
        case 2:
          this.z = e2;
          break;
        case 3:
          this.w = e2;
          break;
        default:
          throw new Error("index is out of range: " + t2);
      }
      return this;
    }
    getComponent(t2) {
      switch (t2) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("index is out of range: " + t2);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(t2) {
      return this.x = t2.x, this.y = t2.y, this.z = t2.z, this.w = void 0 !== t2.w ? t2.w : 1, this;
    }
    add(t2) {
      return this.x += t2.x, this.y += t2.y, this.z += t2.z, this.w += t2.w, this;
    }
    addScalar(t2) {
      return this.x += t2, this.y += t2, this.z += t2, this.w += t2, this;
    }
    addVectors(t2, e2) {
      return this.x = t2.x + e2.x, this.y = t2.y + e2.y, this.z = t2.z + e2.z, this.w = t2.w + e2.w, this;
    }
    addScaledVector(t2, e2) {
      return this.x += t2.x * e2, this.y += t2.y * e2, this.z += t2.z * e2, this.w += t2.w * e2, this;
    }
    sub(t2) {
      return this.x -= t2.x, this.y -= t2.y, this.z -= t2.z, this.w -= t2.w, this;
    }
    subScalar(t2) {
      return this.x -= t2, this.y -= t2, this.z -= t2, this.w -= t2, this;
    }
    subVectors(t2, e2) {
      return this.x = t2.x - e2.x, this.y = t2.y - e2.y, this.z = t2.z - e2.z, this.w = t2.w - e2.w, this;
    }
    multiply(t2) {
      return this.x *= t2.x, this.y *= t2.y, this.z *= t2.z, this.w *= t2.w, this;
    }
    multiplyScalar(t2) {
      return this.x *= t2, this.y *= t2, this.z *= t2, this.w *= t2, this;
    }
    applyMatrix4(t2) {
      const e2 = this.x, i2 = this.y, s2 = this.z, r2 = this.w, n2 = t2.elements;
      return this.x = n2[0] * e2 + n2[4] * i2 + n2[8] * s2 + n2[12] * r2, this.y = n2[1] * e2 + n2[5] * i2 + n2[9] * s2 + n2[13] * r2, this.z = n2[2] * e2 + n2[6] * i2 + n2[10] * s2 + n2[14] * r2, this.w = n2[3] * e2 + n2[7] * i2 + n2[11] * s2 + n2[15] * r2, this;
    }
    divide(t2) {
      return this.x /= t2.x, this.y /= t2.y, this.z /= t2.z, this.w /= t2.w, this;
    }
    divideScalar(t2) {
      return this.multiplyScalar(1 / t2);
    }
    setAxisAngleFromQuaternion(t2) {
      this.w = 2 * Math.acos(t2.w);
      const e2 = Math.sqrt(1 - t2.w * t2.w);
      return e2 < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t2.x / e2, this.y = t2.y / e2, this.z = t2.z / e2), this;
    }
    setAxisAngleFromRotationMatrix(t2) {
      let e2, i2, s2, r2;
      const n2 = 0.01, a2 = 0.1, o2 = t2.elements, h2 = o2[0], l2 = o2[4], c2 = o2[8], u2 = o2[1], d2 = o2[5], p2 = o2[9], m2 = o2[2], y2 = o2[6], g2 = o2[10];
      if (Math.abs(l2 - u2) < n2 && Math.abs(c2 - m2) < n2 && Math.abs(p2 - y2) < n2) {
        if (Math.abs(l2 + u2) < a2 && Math.abs(c2 + m2) < a2 && Math.abs(p2 + y2) < a2 && Math.abs(h2 + d2 + g2 - 3) < a2) return this.set(1, 0, 0, 0), this;
        e2 = Math.PI;
        const t3 = (h2 + 1) / 2, o3 = (d2 + 1) / 2, f3 = (g2 + 1) / 2, x2 = (l2 + u2) / 4, b2 = (c2 + m2) / 4, v2 = (p2 + y2) / 4;
        return t3 > o3 && t3 > f3 ? t3 < n2 ? (i2 = 0, s2 = 0.707106781, r2 = 0.707106781) : (i2 = Math.sqrt(t3), s2 = x2 / i2, r2 = b2 / i2) : o3 > f3 ? o3 < n2 ? (i2 = 0.707106781, s2 = 0, r2 = 0.707106781) : (s2 = Math.sqrt(o3), i2 = x2 / s2, r2 = v2 / s2) : f3 < n2 ? (i2 = 0.707106781, s2 = 0.707106781, r2 = 0) : (r2 = Math.sqrt(f3), i2 = b2 / r2, s2 = v2 / r2), this.set(i2, s2, r2, e2), this;
      }
      let f2 = Math.sqrt((y2 - p2) * (y2 - p2) + (c2 - m2) * (c2 - m2) + (u2 - l2) * (u2 - l2));
      return Math.abs(f2) < 1e-3 && (f2 = 1), this.x = (y2 - p2) / f2, this.y = (c2 - m2) / f2, this.z = (u2 - l2) / f2, this.w = Math.acos((h2 + d2 + g2 - 1) / 2), this;
    }
    setFromMatrixPosition(t2) {
      const e2 = t2.elements;
      return this.x = e2[12], this.y = e2[13], this.z = e2[14], this.w = e2[15], this;
    }
    min(t2) {
      return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this.z = Math.min(this.z, t2.z), this.w = Math.min(this.w, t2.w), this;
    }
    max(t2) {
      return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this.z = Math.max(this.z, t2.z), this.w = Math.max(this.w, t2.w), this;
    }
    clamp(t2, e2) {
      return this.x = ns(this.x, t2.x, e2.x), this.y = ns(this.y, t2.y, e2.y), this.z = ns(this.z, t2.z, e2.z), this.w = ns(this.w, t2.w, e2.w), this;
    }
    clampScalar(t2, e2) {
      return this.x = ns(this.x, t2, e2), this.y = ns(this.y, t2, e2), this.z = ns(this.z, t2, e2), this.w = ns(this.w, t2, e2), this;
    }
    clampLength(t2, e2) {
      const i2 = this.length();
      return this.divideScalar(i2 || 1).multiplyScalar(ns(i2, t2, e2));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
    }
    dot(t2) {
      return this.x * t2.x + this.y * t2.y + this.z * t2.z + this.w * t2.w;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(t2) {
      return this.normalize().multiplyScalar(t2);
    }
    lerp(t2, e2) {
      return this.x += (t2.x - this.x) * e2, this.y += (t2.y - this.y) * e2, this.z += (t2.z - this.z) * e2, this.w += (t2.w - this.w) * e2, this;
    }
    lerpVectors(t2, e2, i2) {
      return this.x = t2.x + (e2.x - t2.x) * i2, this.y = t2.y + (e2.y - t2.y) * i2, this.z = t2.z + (e2.z - t2.z) * i2, this.w = t2.w + (e2.w - t2.w) * i2, this;
    }
    equals(t2) {
      return t2.x === this.x && t2.y === this.y && t2.z === this.z && t2.w === this.w;
    }
    fromArray(t2, e2 = 0) {
      return this.x = t2[e2], this.y = t2[e2 + 1], this.z = t2[e2 + 2], this.w = t2[e2 + 3], this;
    }
    toArray(t2 = [], e2 = 0) {
      return t2[e2] = this.x, t2[e2 + 1] = this.y, t2[e2 + 2] = this.z, t2[e2 + 3] = this.w, t2;
    }
    fromBufferAttribute(t2, e2) {
      return this.x = t2.getX(e2), this.y = t2.getY(e2), this.z = t2.getZ(e2), this.w = t2.getW(e2), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z, yield this.w;
    }
  };
  var Os = class extends Ki {
    constructor(t2 = 1, e2 = 1, i2 = {}) {
      super(), i2 = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: wt, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1, depth: 1, multiview: false }, i2), this.isRenderTarget = true, this.width = t2, this.height = e2, this.depth = i2.depth, this.scissor = new Ps(0, 0, t2, e2), this.scissorTest = false, this.viewport = new Ps(0, 0, t2, e2);
      const s2 = { width: t2, height: e2, depth: i2.depth }, r2 = new ks(s2);
      this.textures = [];
      const n2 = i2.count;
      for (let t3 = 0; t3 < n2; t3++) this.textures[t3] = r2.clone(), this.textures[t3].isRenderTargetTexture = true, this.textures[t3].renderTarget = this;
      this._setTextureOptions(i2), this.depthBuffer = i2.depthBuffer, this.stencilBuffer = i2.stencilBuffer, this.resolveDepthBuffer = i2.resolveDepthBuffer, this.resolveStencilBuffer = i2.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = i2.depthTexture, this.samples = i2.samples, this.multiview = i2.multiview;
    }
    _setTextureOptions(t2 = {}) {
      const e2 = { minFilter: wt, generateMipmaps: false, flipY: false, internalFormat: null };
      void 0 !== t2.mapping && (e2.mapping = t2.mapping), void 0 !== t2.wrapS && (e2.wrapS = t2.wrapS), void 0 !== t2.wrapT && (e2.wrapT = t2.wrapT), void 0 !== t2.wrapR && (e2.wrapR = t2.wrapR), void 0 !== t2.magFilter && (e2.magFilter = t2.magFilter), void 0 !== t2.minFilter && (e2.minFilter = t2.minFilter), void 0 !== t2.format && (e2.format = t2.format), void 0 !== t2.type && (e2.type = t2.type), void 0 !== t2.anisotropy && (e2.anisotropy = t2.anisotropy), void 0 !== t2.colorSpace && (e2.colorSpace = t2.colorSpace), void 0 !== t2.flipY && (e2.flipY = t2.flipY), void 0 !== t2.generateMipmaps && (e2.generateMipmaps = t2.generateMipmaps), void 0 !== t2.internalFormat && (e2.internalFormat = t2.internalFormat);
      for (let t3 = 0; t3 < this.textures.length; t3++) {
        this.textures[t3].setValues(e2);
      }
    }
    get texture() {
      return this.textures[0];
    }
    set texture(t2) {
      this.textures[0] = t2;
    }
    set depthTexture(t2) {
      null !== this._depthTexture && (this._depthTexture.renderTarget = null), null !== t2 && (t2.renderTarget = this), this._depthTexture = t2;
    }
    get depthTexture() {
      return this._depthTexture;
    }
    setSize(t2, e2, i2 = 1) {
      if (this.width !== t2 || this.height !== e2 || this.depth !== i2) {
        this.width = t2, this.height = e2, this.depth = i2;
        for (let s2 = 0, r2 = this.textures.length; s2 < r2; s2++) this.textures[s2].image.width = t2, this.textures[s2].image.height = e2, this.textures[s2].image.depth = i2, true !== this.textures[s2].isData3DTexture && (this.textures[s2].isArrayTexture = this.textures[s2].image.depth > 1);
        this.dispose();
      }
      this.viewport.set(0, 0, t2, e2), this.scissor.set(0, 0, t2, e2);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      this.width = t2.width, this.height = t2.height, this.depth = t2.depth, this.scissor.copy(t2.scissor), this.scissorTest = t2.scissorTest, this.viewport.copy(t2.viewport), this.textures.length = 0;
      for (let e2 = 0, i2 = t2.textures.length; e2 < i2; e2++) {
        this.textures[e2] = t2.textures[e2].clone(), this.textures[e2].isRenderTargetTexture = true, this.textures[e2].renderTarget = this;
        const i3 = Object.assign({}, t2.textures[e2].image);
        this.textures[e2].source = new zs(i3);
      }
      return this.depthBuffer = t2.depthBuffer, this.stencilBuffer = t2.stencilBuffer, this.resolveDepthBuffer = t2.resolveDepthBuffer, this.resolveStencilBuffer = t2.resolveStencilBuffer, null !== t2.depthTexture && (this.depthTexture = t2.depthTexture.clone()), this.samples = t2.samples, this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  };
  var Rs = class extends Os {
    constructor(t2 = 1, e2 = 1, i2 = {}) {
      super(t2, e2, i2), this.isWebGLRenderTarget = true;
    }
  };
  var Ns = class extends ks {
    constructor(t2 = null, e2 = 1, i2 = 1, s2 = 1) {
      super(null), this.isDataArrayTexture = true, this.image = { data: t2, width: e2, height: i2, depth: s2 }, this.magFilter = gt, this.minFilter = gt, this.wrapR = mt, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
    }
    addLayerUpdate(t2) {
      this.layerUpdates.add(t2);
    }
    clearLayerUpdates() {
      this.layerUpdates.clear();
    }
  };
  var Fs = class extends ks {
    constructor(t2 = null, e2 = 1, i2 = 1, s2 = 1) {
      super(null), this.isData3DTexture = true, this.image = { data: t2, width: e2, height: i2, depth: s2 }, this.magFilter = gt, this.minFilter = gt, this.wrapR = mt, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
    }
  };
  var Es = class {
    constructor(t2 = new ps(1 / 0, 1 / 0, 1 / 0), e2 = new ps(-1 / 0, -1 / 0, -1 / 0)) {
      this.isBox3 = true, this.min = t2, this.max = e2;
    }
    set(t2, e2) {
      return this.min.copy(t2), this.max.copy(e2), this;
    }
    setFromArray(t2) {
      this.makeEmpty();
      for (let e2 = 0, i2 = t2.length; e2 < i2; e2 += 3) this.expandByPoint(Ds.fromArray(t2, e2));
      return this;
    }
    setFromBufferAttribute(t2) {
      this.makeEmpty();
      for (let e2 = 0, i2 = t2.count; e2 < i2; e2++) this.expandByPoint(Ds.fromBufferAttribute(t2, e2));
      return this;
    }
    setFromPoints(t2) {
      this.makeEmpty();
      for (let e2 = 0, i2 = t2.length; e2 < i2; e2++) this.expandByPoint(t2[e2]);
      return this;
    }
    setFromCenterAndSize(t2, e2) {
      const i2 = Ds.copy(e2).multiplyScalar(0.5);
      return this.min.copy(t2).sub(i2), this.max.copy(t2).add(i2), this;
    }
    setFromObject(t2, e2 = false) {
      return this.makeEmpty(), this.expandByObject(t2, e2);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      return this.min.copy(t2.min), this.max.copy(t2.max), this;
    }
    makeEmpty() {
      return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
    }
    isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }
    getCenter(t2) {
      return this.isEmpty() ? t2.set(0, 0, 0) : t2.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(t2) {
      return this.isEmpty() ? t2.set(0, 0, 0) : t2.subVectors(this.max, this.min);
    }
    expandByPoint(t2) {
      return this.min.min(t2), this.max.max(t2), this;
    }
    expandByVector(t2) {
      return this.min.sub(t2), this.max.add(t2), this;
    }
    expandByScalar(t2) {
      return this.min.addScalar(-t2), this.max.addScalar(t2), this;
    }
    expandByObject(t2, e2 = false) {
      t2.updateWorldMatrix(false, false);
      const i2 = t2.geometry;
      if (void 0 !== i2) {
        const s3 = i2.getAttribute("position");
        if (true === e2 && void 0 !== s3 && true !== t2.isInstancedMesh) for (let e3 = 0, i3 = s3.count; e3 < i3; e3++) true === t2.isMesh ? t2.getVertexPosition(e3, Ds) : Ds.fromBufferAttribute(s3, e3), Ds.applyMatrix4(t2.matrixWorld), this.expandByPoint(Ds);
        else void 0 !== t2.boundingBox ? (null === t2.boundingBox && t2.computeBoundingBox(), Ws.copy(t2.boundingBox)) : (null === i2.boundingBox && i2.computeBoundingBox(), Ws.copy(i2.boundingBox)), Ws.applyMatrix4(t2.matrixWorld), this.union(Ws);
      }
      const s2 = t2.children;
      for (let t3 = 0, i3 = s2.length; t3 < i3; t3++) this.expandByObject(s2[t3], e2);
      return this;
    }
    containsPoint(t2) {
      return t2.x >= this.min.x && t2.x <= this.max.x && t2.y >= this.min.y && t2.y <= this.max.y && t2.z >= this.min.z && t2.z <= this.max.z;
    }
    containsBox(t2) {
      return this.min.x <= t2.min.x && t2.max.x <= this.max.x && this.min.y <= t2.min.y && t2.max.y <= this.max.y && this.min.z <= t2.min.z && t2.max.z <= this.max.z;
    }
    getParameter(t2, e2) {
      return e2.set((t2.x - this.min.x) / (this.max.x - this.min.x), (t2.y - this.min.y) / (this.max.y - this.min.y), (t2.z - this.min.z) / (this.max.z - this.min.z));
    }
    intersectsBox(t2) {
      return t2.max.x >= this.min.x && t2.min.x <= this.max.x && t2.max.y >= this.min.y && t2.min.y <= this.max.y && t2.max.z >= this.min.z && t2.min.z <= this.max.z;
    }
    intersectsSphere(t2) {
      return this.clampPoint(t2.center, Ds), Ds.distanceToSquared(t2.center) <= t2.radius * t2.radius;
    }
    intersectsPlane(t2) {
      let e2, i2;
      return t2.normal.x > 0 ? (e2 = t2.normal.x * this.min.x, i2 = t2.normal.x * this.max.x) : (e2 = t2.normal.x * this.max.x, i2 = t2.normal.x * this.min.x), t2.normal.y > 0 ? (e2 += t2.normal.y * this.min.y, i2 += t2.normal.y * this.max.y) : (e2 += t2.normal.y * this.max.y, i2 += t2.normal.y * this.min.y), t2.normal.z > 0 ? (e2 += t2.normal.z * this.min.z, i2 += t2.normal.z * this.max.z) : (e2 += t2.normal.z * this.max.z, i2 += t2.normal.z * this.min.z), e2 <= -t2.constant && i2 >= -t2.constant;
    }
    intersectsTriangle(t2) {
      if (this.isEmpty()) return false;
      this.getCenter(Hs), Gs.subVectors(this.max, Hs), Us.subVectors(t2.a, Hs), qs.subVectors(t2.b, Hs), Js.subVectors(t2.c, Hs), Xs.subVectors(qs, Us), Ys.subVectors(Js, qs), Zs.subVectors(Us, Js);
      let e2 = [0, -Xs.z, Xs.y, 0, -Ys.z, Ys.y, 0, -Zs.z, Zs.y, Xs.z, 0, -Xs.x, Ys.z, 0, -Ys.x, Zs.z, 0, -Zs.x, -Xs.y, Xs.x, 0, -Ys.y, Ys.x, 0, -Zs.y, Zs.x, 0];
      return !!Ks(e2, Us, qs, Js, Gs) && (e2 = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!Ks(e2, Us, qs, Js, Gs) && ($s.crossVectors(Xs, Ys), e2 = [$s.x, $s.y, $s.z], Ks(e2, Us, qs, Js, Gs)));
    }
    clampPoint(t2, e2) {
      return e2.copy(t2).clamp(this.min, this.max);
    }
    distanceToPoint(t2) {
      return this.clampPoint(t2, Ds).distanceTo(t2);
    }
    getBoundingSphere(t2) {
      return this.isEmpty() ? t2.makeEmpty() : (this.getCenter(t2.center), t2.radius = 0.5 * this.getSize(Ds).length()), t2;
    }
    intersect(t2) {
      return this.min.max(t2.min), this.max.min(t2.max), this.isEmpty() && this.makeEmpty(), this;
    }
    union(t2) {
      return this.min.min(t2.min), this.max.max(t2.max), this;
    }
    applyMatrix4(t2) {
      return this.isEmpty() || (js[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t2), js[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t2), js[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t2), js[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t2), js[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t2), js[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t2), js[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t2), js[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t2), this.setFromPoints(js)), this;
    }
    translate(t2) {
      return this.min.add(t2), this.max.add(t2), this;
    }
    equals(t2) {
      return t2.min.equals(this.min) && t2.max.equals(this.max);
    }
    toJSON() {
      return { min: this.min.toArray(), max: this.max.toArray() };
    }
    fromJSON(t2) {
      return this.min.fromArray(t2.min), this.max.fromArray(t2.max), this;
    }
  };
  var js = [new ps(), new ps(), new ps(), new ps(), new ps(), new ps(), new ps(), new ps()];
  var Ds = new ps();
  var Ws = new Es();
  var Us = new ps();
  var qs = new ps();
  var Js = new ps();
  var Xs = new ps();
  var Ys = new ps();
  var Zs = new ps();
  var Hs = new ps();
  var Gs = new ps();
  var $s = new ps();
  var Qs = new ps();
  function Ks(t2, e2, i2, s2, r2) {
    for (let n2 = 0, a2 = t2.length - 3; n2 <= a2; n2 += 3) {
      Qs.fromArray(t2, n2);
      const a3 = r2.x * Math.abs(Qs.x) + r2.y * Math.abs(Qs.y) + r2.z * Math.abs(Qs.z), o2 = e2.dot(Qs), h2 = i2.dot(Qs), l2 = s2.dot(Qs);
      if (Math.max(-Math.max(o2, h2, l2), Math.min(o2, h2, l2)) > a3) return false;
    }
    return true;
  }
  var tr = new Es();
  var er = new ps();
  var ir = new ps();
  var sr = class {
    constructor(t2 = new ps(), e2 = -1) {
      this.isSphere = true, this.center = t2, this.radius = e2;
    }
    set(t2, e2) {
      return this.center.copy(t2), this.radius = e2, this;
    }
    setFromPoints(t2, e2) {
      const i2 = this.center;
      void 0 !== e2 ? i2.copy(e2) : tr.setFromPoints(t2).getCenter(i2);
      let s2 = 0;
      for (let e3 = 0, r2 = t2.length; e3 < r2; e3++) s2 = Math.max(s2, i2.distanceToSquared(t2[e3]));
      return this.radius = Math.sqrt(s2), this;
    }
    copy(t2) {
      return this.center.copy(t2.center), this.radius = t2.radius, this;
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      return this.center.set(0, 0, 0), this.radius = -1, this;
    }
    containsPoint(t2) {
      return t2.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(t2) {
      return t2.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(t2) {
      const e2 = this.radius + t2.radius;
      return t2.center.distanceToSquared(this.center) <= e2 * e2;
    }
    intersectsBox(t2) {
      return t2.intersectsSphere(this);
    }
    intersectsPlane(t2) {
      return Math.abs(t2.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(t2, e2) {
      const i2 = this.center.distanceToSquared(t2);
      return e2.copy(t2), i2 > this.radius * this.radius && (e2.sub(this.center).normalize(), e2.multiplyScalar(this.radius).add(this.center)), e2;
    }
    getBoundingBox(t2) {
      return this.isEmpty() ? (t2.makeEmpty(), t2) : (t2.set(this.center, this.center), t2.expandByScalar(this.radius), t2);
    }
    applyMatrix4(t2) {
      return this.center.applyMatrix4(t2), this.radius = this.radius * t2.getMaxScaleOnAxis(), this;
    }
    translate(t2) {
      return this.center.add(t2), this;
    }
    expandByPoint(t2) {
      if (this.isEmpty()) return this.center.copy(t2), this.radius = 0, this;
      er.subVectors(t2, this.center);
      const e2 = er.lengthSq();
      if (e2 > this.radius * this.radius) {
        const t3 = Math.sqrt(e2), i2 = 0.5 * (t3 - this.radius);
        this.center.addScaledVector(er, i2 / t3), this.radius += i2;
      }
      return this;
    }
    union(t2) {
      return t2.isEmpty() ? this : this.isEmpty() ? (this.copy(t2), this) : (true === this.center.equals(t2.center) ? this.radius = Math.max(this.radius, t2.radius) : (ir.subVectors(t2.center, this.center).setLength(t2.radius), this.expandByPoint(er.copy(t2.center).add(ir)), this.expandByPoint(er.copy(t2.center).sub(ir))), this);
    }
    equals(t2) {
      return t2.center.equals(this.center) && t2.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      return { radius: this.radius, center: this.center.toArray() };
    }
    fromJSON(t2) {
      return this.radius = t2.radius, this.center.fromArray(t2.center), this;
    }
  };
  var rr = new ps();
  var nr = new ps();
  var ar = new ps();
  var or = new ps();
  var hr = new ps();
  var lr = new ps();
  var cr = new ps();
  var ur = class {
    constructor(t2 = new ps(), e2 = new ps(0, 0, -1)) {
      this.origin = t2, this.direction = e2;
    }
    set(t2, e2) {
      return this.origin.copy(t2), this.direction.copy(e2), this;
    }
    copy(t2) {
      return this.origin.copy(t2.origin), this.direction.copy(t2.direction), this;
    }
    at(t2, e2) {
      return e2.copy(this.origin).addScaledVector(this.direction, t2);
    }
    lookAt(t2) {
      return this.direction.copy(t2).sub(this.origin).normalize(), this;
    }
    recast(t2) {
      return this.origin.copy(this.at(t2, rr)), this;
    }
    closestPointToPoint(t2, e2) {
      e2.subVectors(t2, this.origin);
      const i2 = e2.dot(this.direction);
      return i2 < 0 ? e2.copy(this.origin) : e2.copy(this.origin).addScaledVector(this.direction, i2);
    }
    distanceToPoint(t2) {
      return Math.sqrt(this.distanceSqToPoint(t2));
    }
    distanceSqToPoint(t2) {
      const e2 = rr.subVectors(t2, this.origin).dot(this.direction);
      return e2 < 0 ? this.origin.distanceToSquared(t2) : (rr.copy(this.origin).addScaledVector(this.direction, e2), rr.distanceToSquared(t2));
    }
    distanceSqToSegment(t2, e2, i2, s2) {
      nr.copy(t2).add(e2).multiplyScalar(0.5), ar.copy(e2).sub(t2).normalize(), or.copy(this.origin).sub(nr);
      const r2 = 0.5 * t2.distanceTo(e2), n2 = -this.direction.dot(ar), a2 = or.dot(this.direction), o2 = -or.dot(ar), h2 = or.lengthSq(), l2 = Math.abs(1 - n2 * n2);
      let c2, u2, d2, p2;
      if (l2 > 0) if (c2 = n2 * o2 - a2, u2 = n2 * a2 - o2, p2 = r2 * l2, c2 >= 0) if (u2 >= -p2) if (u2 <= p2) {
        const t3 = 1 / l2;
        c2 *= t3, u2 *= t3, d2 = c2 * (c2 + n2 * u2 + 2 * a2) + u2 * (n2 * c2 + u2 + 2 * o2) + h2;
      } else u2 = r2, c2 = Math.max(0, -(n2 * u2 + a2)), d2 = -c2 * c2 + u2 * (u2 + 2 * o2) + h2;
      else u2 = -r2, c2 = Math.max(0, -(n2 * u2 + a2)), d2 = -c2 * c2 + u2 * (u2 + 2 * o2) + h2;
      else u2 <= -p2 ? (c2 = Math.max(0, -(-n2 * r2 + a2)), u2 = c2 > 0 ? -r2 : Math.min(Math.max(-r2, -o2), r2), d2 = -c2 * c2 + u2 * (u2 + 2 * o2) + h2) : u2 <= p2 ? (c2 = 0, u2 = Math.min(Math.max(-r2, -o2), r2), d2 = u2 * (u2 + 2 * o2) + h2) : (c2 = Math.max(0, -(n2 * r2 + a2)), u2 = c2 > 0 ? r2 : Math.min(Math.max(-r2, -o2), r2), d2 = -c2 * c2 + u2 * (u2 + 2 * o2) + h2);
      else u2 = n2 > 0 ? -r2 : r2, c2 = Math.max(0, -(n2 * u2 + a2)), d2 = -c2 * c2 + u2 * (u2 + 2 * o2) + h2;
      return i2 && i2.copy(this.origin).addScaledVector(this.direction, c2), s2 && s2.copy(nr).addScaledVector(ar, u2), d2;
    }
    intersectSphere(t2, e2) {
      rr.subVectors(t2.center, this.origin);
      const i2 = rr.dot(this.direction), s2 = rr.dot(rr) - i2 * i2, r2 = t2.radius * t2.radius;
      if (s2 > r2) return null;
      const n2 = Math.sqrt(r2 - s2), a2 = i2 - n2, o2 = i2 + n2;
      return o2 < 0 ? null : a2 < 0 ? this.at(o2, e2) : this.at(a2, e2);
    }
    intersectsSphere(t2) {
      return !(t2.radius < 0) && this.distanceSqToPoint(t2.center) <= t2.radius * t2.radius;
    }
    distanceToPlane(t2) {
      const e2 = t2.normal.dot(this.direction);
      if (0 === e2) return 0 === t2.distanceToPoint(this.origin) ? 0 : null;
      const i2 = -(this.origin.dot(t2.normal) + t2.constant) / e2;
      return i2 >= 0 ? i2 : null;
    }
    intersectPlane(t2, e2) {
      const i2 = this.distanceToPlane(t2);
      return null === i2 ? null : this.at(i2, e2);
    }
    intersectsPlane(t2) {
      const e2 = t2.distanceToPoint(this.origin);
      if (0 === e2) return true;
      return t2.normal.dot(this.direction) * e2 < 0;
    }
    intersectBox(t2, e2) {
      let i2, s2, r2, n2, a2, o2;
      const h2 = 1 / this.direction.x, l2 = 1 / this.direction.y, c2 = 1 / this.direction.z, u2 = this.origin;
      return h2 >= 0 ? (i2 = (t2.min.x - u2.x) * h2, s2 = (t2.max.x - u2.x) * h2) : (i2 = (t2.max.x - u2.x) * h2, s2 = (t2.min.x - u2.x) * h2), l2 >= 0 ? (r2 = (t2.min.y - u2.y) * l2, n2 = (t2.max.y - u2.y) * l2) : (r2 = (t2.max.y - u2.y) * l2, n2 = (t2.min.y - u2.y) * l2), i2 > n2 || r2 > s2 ? null : ((r2 > i2 || isNaN(i2)) && (i2 = r2), (n2 < s2 || isNaN(s2)) && (s2 = n2), c2 >= 0 ? (a2 = (t2.min.z - u2.z) * c2, o2 = (t2.max.z - u2.z) * c2) : (a2 = (t2.max.z - u2.z) * c2, o2 = (t2.min.z - u2.z) * c2), i2 > o2 || a2 > s2 ? null : ((a2 > i2 || i2 != i2) && (i2 = a2), (o2 < s2 || s2 != s2) && (s2 = o2), s2 < 0 ? null : this.at(i2 >= 0 ? i2 : s2, e2)));
    }
    intersectsBox(t2) {
      return null !== this.intersectBox(t2, rr);
    }
    intersectTriangle(t2, e2, i2, s2, r2) {
      hr.subVectors(e2, t2), lr.subVectors(i2, t2), cr.crossVectors(hr, lr);
      let n2, a2 = this.direction.dot(cr);
      if (a2 > 0) {
        if (s2) return null;
        n2 = 1;
      } else {
        if (!(a2 < 0)) return null;
        n2 = -1, a2 = -a2;
      }
      or.subVectors(this.origin, t2);
      const o2 = n2 * this.direction.dot(lr.crossVectors(or, lr));
      if (o2 < 0) return null;
      const h2 = n2 * this.direction.dot(hr.cross(or));
      if (h2 < 0) return null;
      if (o2 + h2 > a2) return null;
      const l2 = -n2 * or.dot(cr);
      return l2 < 0 ? null : this.at(l2 / a2, r2);
    }
    applyMatrix4(t2) {
      return this.origin.applyMatrix4(t2), this.direction.transformDirection(t2), this;
    }
    equals(t2) {
      return t2.origin.equals(this.origin) && t2.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var dr = class _dr {
    constructor(t2, e2, i2, s2, r2, n2, a2, o2, h2, l2, c2, u2, d2, p2, m2, y2) {
      _dr.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], void 0 !== t2 && this.set(t2, e2, i2, s2, r2, n2, a2, o2, h2, l2, c2, u2, d2, p2, m2, y2);
    }
    set(t2, e2, i2, s2, r2, n2, a2, o2, h2, l2, c2, u2, d2, p2, m2, y2) {
      const g2 = this.elements;
      return g2[0] = t2, g2[4] = e2, g2[8] = i2, g2[12] = s2, g2[1] = r2, g2[5] = n2, g2[9] = a2, g2[13] = o2, g2[2] = h2, g2[6] = l2, g2[10] = c2, g2[14] = u2, g2[3] = d2, g2[7] = p2, g2[11] = m2, g2[15] = y2, this;
    }
    identity() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    clone() {
      return new _dr().fromArray(this.elements);
    }
    copy(t2) {
      const e2 = this.elements, i2 = t2.elements;
      return e2[0] = i2[0], e2[1] = i2[1], e2[2] = i2[2], e2[3] = i2[3], e2[4] = i2[4], e2[5] = i2[5], e2[6] = i2[6], e2[7] = i2[7], e2[8] = i2[8], e2[9] = i2[9], e2[10] = i2[10], e2[11] = i2[11], e2[12] = i2[12], e2[13] = i2[13], e2[14] = i2[14], e2[15] = i2[15], this;
    }
    copyPosition(t2) {
      const e2 = this.elements, i2 = t2.elements;
      return e2[12] = i2[12], e2[13] = i2[13], e2[14] = i2[14], this;
    }
    setFromMatrix3(t2) {
      const e2 = t2.elements;
      return this.set(e2[0], e2[3], e2[6], 0, e2[1], e2[4], e2[7], 0, e2[2], e2[5], e2[8], 0, 0, 0, 0, 1), this;
    }
    extractBasis(t2, e2, i2) {
      return t2.setFromMatrixColumn(this, 0), e2.setFromMatrixColumn(this, 1), i2.setFromMatrixColumn(this, 2), this;
    }
    makeBasis(t2, e2, i2) {
      return this.set(t2.x, e2.x, i2.x, 0, t2.y, e2.y, i2.y, 0, t2.z, e2.z, i2.z, 0, 0, 0, 0, 1), this;
    }
    extractRotation(t2) {
      const e2 = this.elements, i2 = t2.elements, s2 = 1 / pr.setFromMatrixColumn(t2, 0).length(), r2 = 1 / pr.setFromMatrixColumn(t2, 1).length(), n2 = 1 / pr.setFromMatrixColumn(t2, 2).length();
      return e2[0] = i2[0] * s2, e2[1] = i2[1] * s2, e2[2] = i2[2] * s2, e2[3] = 0, e2[4] = i2[4] * r2, e2[5] = i2[5] * r2, e2[6] = i2[6] * r2, e2[7] = 0, e2[8] = i2[8] * n2, e2[9] = i2[9] * n2, e2[10] = i2[10] * n2, e2[11] = 0, e2[12] = 0, e2[13] = 0, e2[14] = 0, e2[15] = 1, this;
    }
    makeRotationFromEuler(t2) {
      const e2 = this.elements, i2 = t2.x, s2 = t2.y, r2 = t2.z, n2 = Math.cos(i2), a2 = Math.sin(i2), o2 = Math.cos(s2), h2 = Math.sin(s2), l2 = Math.cos(r2), c2 = Math.sin(r2);
      if ("XYZ" === t2.order) {
        const t3 = n2 * l2, i3 = n2 * c2, s3 = a2 * l2, r3 = a2 * c2;
        e2[0] = o2 * l2, e2[4] = -o2 * c2, e2[8] = h2, e2[1] = i3 + s3 * h2, e2[5] = t3 - r3 * h2, e2[9] = -a2 * o2, e2[2] = r3 - t3 * h2, e2[6] = s3 + i3 * h2, e2[10] = n2 * o2;
      } else if ("YXZ" === t2.order) {
        const t3 = o2 * l2, i3 = o2 * c2, s3 = h2 * l2, r3 = h2 * c2;
        e2[0] = t3 + r3 * a2, e2[4] = s3 * a2 - i3, e2[8] = n2 * h2, e2[1] = n2 * c2, e2[5] = n2 * l2, e2[9] = -a2, e2[2] = i3 * a2 - s3, e2[6] = r3 + t3 * a2, e2[10] = n2 * o2;
      } else if ("ZXY" === t2.order) {
        const t3 = o2 * l2, i3 = o2 * c2, s3 = h2 * l2, r3 = h2 * c2;
        e2[0] = t3 - r3 * a2, e2[4] = -n2 * c2, e2[8] = s3 + i3 * a2, e2[1] = i3 + s3 * a2, e2[5] = n2 * l2, e2[9] = r3 - t3 * a2, e2[2] = -n2 * h2, e2[6] = a2, e2[10] = n2 * o2;
      } else if ("ZYX" === t2.order) {
        const t3 = n2 * l2, i3 = n2 * c2, s3 = a2 * l2, r3 = a2 * c2;
        e2[0] = o2 * l2, e2[4] = s3 * h2 - i3, e2[8] = t3 * h2 + r3, e2[1] = o2 * c2, e2[5] = r3 * h2 + t3, e2[9] = i3 * h2 - s3, e2[2] = -h2, e2[6] = a2 * o2, e2[10] = n2 * o2;
      } else if ("YZX" === t2.order) {
        const t3 = n2 * o2, i3 = n2 * h2, s3 = a2 * o2, r3 = a2 * h2;
        e2[0] = o2 * l2, e2[4] = r3 - t3 * c2, e2[8] = s3 * c2 + i3, e2[1] = c2, e2[5] = n2 * l2, e2[9] = -a2 * l2, e2[2] = -h2 * l2, e2[6] = i3 * c2 + s3, e2[10] = t3 - r3 * c2;
      } else if ("XZY" === t2.order) {
        const t3 = n2 * o2, i3 = n2 * h2, s3 = a2 * o2, r3 = a2 * h2;
        e2[0] = o2 * l2, e2[4] = -c2, e2[8] = h2 * l2, e2[1] = t3 * c2 + r3, e2[5] = n2 * l2, e2[9] = i3 * c2 - s3, e2[2] = s3 * c2 - i3, e2[6] = a2 * l2, e2[10] = r3 * c2 + t3;
      }
      return e2[3] = 0, e2[7] = 0, e2[11] = 0, e2[12] = 0, e2[13] = 0, e2[14] = 0, e2[15] = 1, this;
    }
    makeRotationFromQuaternion(t2) {
      return this.compose(yr, t2, gr);
    }
    lookAt(t2, e2, i2) {
      const s2 = this.elements;
      return br.subVectors(t2, e2), 0 === br.lengthSq() && (br.z = 1), br.normalize(), fr.crossVectors(i2, br), 0 === fr.lengthSq() && (1 === Math.abs(i2.z) ? br.x += 1e-4 : br.z += 1e-4, br.normalize(), fr.crossVectors(i2, br)), fr.normalize(), xr.crossVectors(br, fr), s2[0] = fr.x, s2[4] = xr.x, s2[8] = br.x, s2[1] = fr.y, s2[5] = xr.y, s2[9] = br.y, s2[2] = fr.z, s2[6] = xr.z, s2[10] = br.z, this;
    }
    multiply(t2) {
      return this.multiplyMatrices(this, t2);
    }
    premultiply(t2) {
      return this.multiplyMatrices(t2, this);
    }
    multiplyMatrices(t2, e2) {
      const i2 = t2.elements, s2 = e2.elements, r2 = this.elements, n2 = i2[0], a2 = i2[4], o2 = i2[8], h2 = i2[12], l2 = i2[1], c2 = i2[5], u2 = i2[9], d2 = i2[13], p2 = i2[2], m2 = i2[6], y2 = i2[10], g2 = i2[14], f2 = i2[3], x2 = i2[7], b2 = i2[11], v2 = i2[15], w2 = s2[0], M2 = s2[4], S2 = s2[8], _2 = s2[12], A2 = s2[1], T2 = s2[5], z2 = s2[9], C2 = s2[13], I2 = s2[2], B2 = s2[6], k2 = s2[10], P2 = s2[14], O2 = s2[3], R2 = s2[7], N2 = s2[11], V2 = s2[15];
      return r2[0] = n2 * w2 + a2 * A2 + o2 * I2 + h2 * O2, r2[4] = n2 * M2 + a2 * T2 + o2 * B2 + h2 * R2, r2[8] = n2 * S2 + a2 * z2 + o2 * k2 + h2 * N2, r2[12] = n2 * _2 + a2 * C2 + o2 * P2 + h2 * V2, r2[1] = l2 * w2 + c2 * A2 + u2 * I2 + d2 * O2, r2[5] = l2 * M2 + c2 * T2 + u2 * B2 + d2 * R2, r2[9] = l2 * S2 + c2 * z2 + u2 * k2 + d2 * N2, r2[13] = l2 * _2 + c2 * C2 + u2 * P2 + d2 * V2, r2[2] = p2 * w2 + m2 * A2 + y2 * I2 + g2 * O2, r2[6] = p2 * M2 + m2 * T2 + y2 * B2 + g2 * R2, r2[10] = p2 * S2 + m2 * z2 + y2 * k2 + g2 * N2, r2[14] = p2 * _2 + m2 * C2 + y2 * P2 + g2 * V2, r2[3] = f2 * w2 + x2 * A2 + b2 * I2 + v2 * O2, r2[7] = f2 * M2 + x2 * T2 + b2 * B2 + v2 * R2, r2[11] = f2 * S2 + x2 * z2 + b2 * k2 + v2 * N2, r2[15] = f2 * _2 + x2 * C2 + b2 * P2 + v2 * V2, this;
    }
    multiplyScalar(t2) {
      const e2 = this.elements;
      return e2[0] *= t2, e2[4] *= t2, e2[8] *= t2, e2[12] *= t2, e2[1] *= t2, e2[5] *= t2, e2[9] *= t2, e2[13] *= t2, e2[2] *= t2, e2[6] *= t2, e2[10] *= t2, e2[14] *= t2, e2[3] *= t2, e2[7] *= t2, e2[11] *= t2, e2[15] *= t2, this;
    }
    determinant() {
      const t2 = this.elements, e2 = t2[0], i2 = t2[4], s2 = t2[8], r2 = t2[12], n2 = t2[1], a2 = t2[5], o2 = t2[9], h2 = t2[13], l2 = t2[2], c2 = t2[6], u2 = t2[10], d2 = t2[14];
      return t2[3] * (+r2 * o2 * c2 - s2 * h2 * c2 - r2 * a2 * u2 + i2 * h2 * u2 + s2 * a2 * d2 - i2 * o2 * d2) + t2[7] * (+e2 * o2 * d2 - e2 * h2 * u2 + r2 * n2 * u2 - s2 * n2 * d2 + s2 * h2 * l2 - r2 * o2 * l2) + t2[11] * (+e2 * h2 * c2 - e2 * a2 * d2 - r2 * n2 * c2 + i2 * n2 * d2 + r2 * a2 * l2 - i2 * h2 * l2) + t2[15] * (-s2 * a2 * l2 - e2 * o2 * c2 + e2 * a2 * u2 + s2 * n2 * c2 - i2 * n2 * u2 + i2 * o2 * l2);
    }
    transpose() {
      const t2 = this.elements;
      let e2;
      return e2 = t2[1], t2[1] = t2[4], t2[4] = e2, e2 = t2[2], t2[2] = t2[8], t2[8] = e2, e2 = t2[6], t2[6] = t2[9], t2[9] = e2, e2 = t2[3], t2[3] = t2[12], t2[12] = e2, e2 = t2[7], t2[7] = t2[13], t2[13] = e2, e2 = t2[11], t2[11] = t2[14], t2[14] = e2, this;
    }
    setPosition(t2, e2, i2) {
      const s2 = this.elements;
      return t2.isVector3 ? (s2[12] = t2.x, s2[13] = t2.y, s2[14] = t2.z) : (s2[12] = t2, s2[13] = e2, s2[14] = i2), this;
    }
    invert() {
      const t2 = this.elements, e2 = t2[0], i2 = t2[1], s2 = t2[2], r2 = t2[3], n2 = t2[4], a2 = t2[5], o2 = t2[6], h2 = t2[7], l2 = t2[8], c2 = t2[9], u2 = t2[10], d2 = t2[11], p2 = t2[12], m2 = t2[13], y2 = t2[14], g2 = t2[15], f2 = c2 * y2 * h2 - m2 * u2 * h2 + m2 * o2 * d2 - a2 * y2 * d2 - c2 * o2 * g2 + a2 * u2 * g2, x2 = p2 * u2 * h2 - l2 * y2 * h2 - p2 * o2 * d2 + n2 * y2 * d2 + l2 * o2 * g2 - n2 * u2 * g2, b2 = l2 * m2 * h2 - p2 * c2 * h2 + p2 * a2 * d2 - n2 * m2 * d2 - l2 * a2 * g2 + n2 * c2 * g2, v2 = p2 * c2 * o2 - l2 * m2 * o2 - p2 * a2 * u2 + n2 * m2 * u2 + l2 * a2 * y2 - n2 * c2 * y2, w2 = e2 * f2 + i2 * x2 + s2 * b2 + r2 * v2;
      if (0 === w2) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      const M2 = 1 / w2;
      return t2[0] = f2 * M2, t2[1] = (m2 * u2 * r2 - c2 * y2 * r2 - m2 * s2 * d2 + i2 * y2 * d2 + c2 * s2 * g2 - i2 * u2 * g2) * M2, t2[2] = (a2 * y2 * r2 - m2 * o2 * r2 + m2 * s2 * h2 - i2 * y2 * h2 - a2 * s2 * g2 + i2 * o2 * g2) * M2, t2[3] = (c2 * o2 * r2 - a2 * u2 * r2 - c2 * s2 * h2 + i2 * u2 * h2 + a2 * s2 * d2 - i2 * o2 * d2) * M2, t2[4] = x2 * M2, t2[5] = (l2 * y2 * r2 - p2 * u2 * r2 + p2 * s2 * d2 - e2 * y2 * d2 - l2 * s2 * g2 + e2 * u2 * g2) * M2, t2[6] = (p2 * o2 * r2 - n2 * y2 * r2 - p2 * s2 * h2 + e2 * y2 * h2 + n2 * s2 * g2 - e2 * o2 * g2) * M2, t2[7] = (n2 * u2 * r2 - l2 * o2 * r2 + l2 * s2 * h2 - e2 * u2 * h2 - n2 * s2 * d2 + e2 * o2 * d2) * M2, t2[8] = b2 * M2, t2[9] = (p2 * c2 * r2 - l2 * m2 * r2 - p2 * i2 * d2 + e2 * m2 * d2 + l2 * i2 * g2 - e2 * c2 * g2) * M2, t2[10] = (n2 * m2 * r2 - p2 * a2 * r2 + p2 * i2 * h2 - e2 * m2 * h2 - n2 * i2 * g2 + e2 * a2 * g2) * M2, t2[11] = (l2 * a2 * r2 - n2 * c2 * r2 - l2 * i2 * h2 + e2 * c2 * h2 + n2 * i2 * d2 - e2 * a2 * d2) * M2, t2[12] = v2 * M2, t2[13] = (l2 * m2 * s2 - p2 * c2 * s2 + p2 * i2 * u2 - e2 * m2 * u2 - l2 * i2 * y2 + e2 * c2 * y2) * M2, t2[14] = (p2 * a2 * s2 - n2 * m2 * s2 - p2 * i2 * o2 + e2 * m2 * o2 + n2 * i2 * y2 - e2 * a2 * y2) * M2, t2[15] = (n2 * c2 * s2 - l2 * a2 * s2 + l2 * i2 * o2 - e2 * c2 * o2 - n2 * i2 * u2 + e2 * a2 * u2) * M2, this;
    }
    scale(t2) {
      const e2 = this.elements, i2 = t2.x, s2 = t2.y, r2 = t2.z;
      return e2[0] *= i2, e2[4] *= s2, e2[8] *= r2, e2[1] *= i2, e2[5] *= s2, e2[9] *= r2, e2[2] *= i2, e2[6] *= s2, e2[10] *= r2, e2[3] *= i2, e2[7] *= s2, e2[11] *= r2, this;
    }
    getMaxScaleOnAxis() {
      const t2 = this.elements, e2 = t2[0] * t2[0] + t2[1] * t2[1] + t2[2] * t2[2], i2 = t2[4] * t2[4] + t2[5] * t2[5] + t2[6] * t2[6], s2 = t2[8] * t2[8] + t2[9] * t2[9] + t2[10] * t2[10];
      return Math.sqrt(Math.max(e2, i2, s2));
    }
    makeTranslation(t2, e2, i2) {
      return t2.isVector3 ? this.set(1, 0, 0, t2.x, 0, 1, 0, t2.y, 0, 0, 1, t2.z, 0, 0, 0, 1) : this.set(1, 0, 0, t2, 0, 1, 0, e2, 0, 0, 1, i2, 0, 0, 0, 1), this;
    }
    makeRotationX(t2) {
      const e2 = Math.cos(t2), i2 = Math.sin(t2);
      return this.set(1, 0, 0, 0, 0, e2, -i2, 0, 0, i2, e2, 0, 0, 0, 0, 1), this;
    }
    makeRotationY(t2) {
      const e2 = Math.cos(t2), i2 = Math.sin(t2);
      return this.set(e2, 0, i2, 0, 0, 1, 0, 0, -i2, 0, e2, 0, 0, 0, 0, 1), this;
    }
    makeRotationZ(t2) {
      const e2 = Math.cos(t2), i2 = Math.sin(t2);
      return this.set(e2, -i2, 0, 0, i2, e2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    makeRotationAxis(t2, e2) {
      const i2 = Math.cos(e2), s2 = Math.sin(e2), r2 = 1 - i2, n2 = t2.x, a2 = t2.y, o2 = t2.z, h2 = r2 * n2, l2 = r2 * a2;
      return this.set(h2 * n2 + i2, h2 * a2 - s2 * o2, h2 * o2 + s2 * a2, 0, h2 * a2 + s2 * o2, l2 * a2 + i2, l2 * o2 - s2 * n2, 0, h2 * o2 - s2 * a2, l2 * o2 + s2 * n2, r2 * o2 * o2 + i2, 0, 0, 0, 0, 1), this;
    }
    makeScale(t2, e2, i2) {
      return this.set(t2, 0, 0, 0, 0, e2, 0, 0, 0, 0, i2, 0, 0, 0, 0, 1), this;
    }
    makeShear(t2, e2, i2, s2, r2, n2) {
      return this.set(1, i2, r2, 0, t2, 1, n2, 0, e2, s2, 1, 0, 0, 0, 0, 1), this;
    }
    compose(t2, e2, i2) {
      const s2 = this.elements, r2 = e2._x, n2 = e2._y, a2 = e2._z, o2 = e2._w, h2 = r2 + r2, l2 = n2 + n2, c2 = a2 + a2, u2 = r2 * h2, d2 = r2 * l2, p2 = r2 * c2, m2 = n2 * l2, y2 = n2 * c2, g2 = a2 * c2, f2 = o2 * h2, x2 = o2 * l2, b2 = o2 * c2, v2 = i2.x, w2 = i2.y, M2 = i2.z;
      return s2[0] = (1 - (m2 + g2)) * v2, s2[1] = (d2 + b2) * v2, s2[2] = (p2 - x2) * v2, s2[3] = 0, s2[4] = (d2 - b2) * w2, s2[5] = (1 - (u2 + g2)) * w2, s2[6] = (y2 + f2) * w2, s2[7] = 0, s2[8] = (p2 + x2) * M2, s2[9] = (y2 - f2) * M2, s2[10] = (1 - (u2 + m2)) * M2, s2[11] = 0, s2[12] = t2.x, s2[13] = t2.y, s2[14] = t2.z, s2[15] = 1, this;
    }
    decompose(t2, e2, i2) {
      const s2 = this.elements;
      let r2 = pr.set(s2[0], s2[1], s2[2]).length();
      const n2 = pr.set(s2[4], s2[5], s2[6]).length(), a2 = pr.set(s2[8], s2[9], s2[10]).length();
      this.determinant() < 0 && (r2 = -r2), t2.x = s2[12], t2.y = s2[13], t2.z = s2[14], mr.copy(this);
      const o2 = 1 / r2, h2 = 1 / n2, l2 = 1 / a2;
      return mr.elements[0] *= o2, mr.elements[1] *= o2, mr.elements[2] *= o2, mr.elements[4] *= h2, mr.elements[5] *= h2, mr.elements[6] *= h2, mr.elements[8] *= l2, mr.elements[9] *= l2, mr.elements[10] *= l2, e2.setFromRotationMatrix(mr), i2.x = r2, i2.y = n2, i2.z = a2, this;
    }
    makePerspective(t2, e2, i2, s2, r2, n2, a2 = 2e3, o2 = false) {
      const h2 = this.elements, l2 = 2 * r2 / (e2 - t2), c2 = 2 * r2 / (i2 - s2), u2 = (e2 + t2) / (e2 - t2), d2 = (i2 + s2) / (i2 - s2);
      let p2, m2;
      if (o2) p2 = r2 / (n2 - r2), m2 = n2 * r2 / (n2 - r2);
      else if (a2 === Ri) p2 = -(n2 + r2) / (n2 - r2), m2 = -2 * n2 * r2 / (n2 - r2);
      else {
        if (a2 !== Ni) throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a2);
        p2 = -n2 / (n2 - r2), m2 = -n2 * r2 / (n2 - r2);
      }
      return h2[0] = l2, h2[4] = 0, h2[8] = u2, h2[12] = 0, h2[1] = 0, h2[5] = c2, h2[9] = d2, h2[13] = 0, h2[2] = 0, h2[6] = 0, h2[10] = p2, h2[14] = m2, h2[3] = 0, h2[7] = 0, h2[11] = -1, h2[15] = 0, this;
    }
    makeOrthographic(t2, e2, i2, s2, r2, n2, a2 = 2e3, o2 = false) {
      const h2 = this.elements, l2 = 2 / (e2 - t2), c2 = 2 / (i2 - s2), u2 = -(e2 + t2) / (e2 - t2), d2 = -(i2 + s2) / (i2 - s2);
      let p2, m2;
      if (o2) p2 = 1 / (n2 - r2), m2 = n2 / (n2 - r2);
      else if (a2 === Ri) p2 = -2 / (n2 - r2), m2 = -(n2 + r2) / (n2 - r2);
      else {
        if (a2 !== Ni) throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a2);
        p2 = -1 / (n2 - r2), m2 = -r2 / (n2 - r2);
      }
      return h2[0] = l2, h2[4] = 0, h2[8] = 0, h2[12] = u2, h2[1] = 0, h2[5] = c2, h2[9] = 0, h2[13] = d2, h2[2] = 0, h2[6] = 0, h2[10] = p2, h2[14] = m2, h2[3] = 0, h2[7] = 0, h2[11] = 0, h2[15] = 1, this;
    }
    equals(t2) {
      const e2 = this.elements, i2 = t2.elements;
      for (let t3 = 0; t3 < 16; t3++) if (e2[t3] !== i2[t3]) return false;
      return true;
    }
    fromArray(t2, e2 = 0) {
      for (let i2 = 0; i2 < 16; i2++) this.elements[i2] = t2[i2 + e2];
      return this;
    }
    toArray(t2 = [], e2 = 0) {
      const i2 = this.elements;
      return t2[e2] = i2[0], t2[e2 + 1] = i2[1], t2[e2 + 2] = i2[2], t2[e2 + 3] = i2[3], t2[e2 + 4] = i2[4], t2[e2 + 5] = i2[5], t2[e2 + 6] = i2[6], t2[e2 + 7] = i2[7], t2[e2 + 8] = i2[8], t2[e2 + 9] = i2[9], t2[e2 + 10] = i2[10], t2[e2 + 11] = i2[11], t2[e2 + 12] = i2[12], t2[e2 + 13] = i2[13], t2[e2 + 14] = i2[14], t2[e2 + 15] = i2[15], t2;
    }
  };
  var pr = new ps();
  var mr = new dr();
  var yr = new ps(0, 0, 0);
  var gr = new ps(1, 1, 1);
  var fr = new ps();
  var xr = new ps();
  var br = new ps();
  var vr = new dr();
  var wr = new ds();
  var Mr = class _Mr {
    constructor(t2 = 0, e2 = 0, i2 = 0, s2 = _Mr.DEFAULT_ORDER) {
      this.isEuler = true, this._x = t2, this._y = e2, this._z = i2, this._order = s2;
    }
    get x() {
      return this._x;
    }
    set x(t2) {
      this._x = t2, this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(t2) {
      this._y = t2, this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(t2) {
      this._z = t2, this._onChangeCallback();
    }
    get order() {
      return this._order;
    }
    set order(t2) {
      this._order = t2, this._onChangeCallback();
    }
    set(t2, e2, i2, s2 = this._order) {
      return this._x = t2, this._y = e2, this._z = i2, this._order = s2, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(t2) {
      return this._x = t2._x, this._y = t2._y, this._z = t2._z, this._order = t2._order, this._onChangeCallback(), this;
    }
    setFromRotationMatrix(t2, e2 = this._order, i2 = true) {
      const s2 = t2.elements, r2 = s2[0], n2 = s2[4], a2 = s2[8], o2 = s2[1], h2 = s2[5], l2 = s2[9], c2 = s2[2], u2 = s2[6], d2 = s2[10];
      switch (e2) {
        case "XYZ":
          this._y = Math.asin(ns(a2, -1, 1)), Math.abs(a2) < 0.9999999 ? (this._x = Math.atan2(-l2, d2), this._z = Math.atan2(-n2, r2)) : (this._x = Math.atan2(u2, h2), this._z = 0);
          break;
        case "YXZ":
          this._x = Math.asin(-ns(l2, -1, 1)), Math.abs(l2) < 0.9999999 ? (this._y = Math.atan2(a2, d2), this._z = Math.atan2(o2, h2)) : (this._y = Math.atan2(-c2, r2), this._z = 0);
          break;
        case "ZXY":
          this._x = Math.asin(ns(u2, -1, 1)), Math.abs(u2) < 0.9999999 ? (this._y = Math.atan2(-c2, d2), this._z = Math.atan2(-n2, h2)) : (this._y = 0, this._z = Math.atan2(o2, r2));
          break;
        case "ZYX":
          this._y = Math.asin(-ns(c2, -1, 1)), Math.abs(c2) < 0.9999999 ? (this._x = Math.atan2(u2, d2), this._z = Math.atan2(o2, r2)) : (this._x = 0, this._z = Math.atan2(-n2, h2));
          break;
        case "YZX":
          this._z = Math.asin(ns(o2, -1, 1)), Math.abs(o2) < 0.9999999 ? (this._x = Math.atan2(-l2, h2), this._y = Math.atan2(-c2, r2)) : (this._x = 0, this._y = Math.atan2(a2, d2));
          break;
        case "XZY":
          this._z = Math.asin(-ns(n2, -1, 1)), Math.abs(n2) < 0.9999999 ? (this._x = Math.atan2(u2, h2), this._y = Math.atan2(a2, r2)) : (this._x = Math.atan2(-l2, d2), this._y = 0);
          break;
        default:
          Hi("Euler: .setFromRotationMatrix() encountered an unknown order: " + e2);
      }
      return this._order = e2, true === i2 && this._onChangeCallback(), this;
    }
    setFromQuaternion(t2, e2, i2) {
      return vr.makeRotationFromQuaternion(t2), this.setFromRotationMatrix(vr, e2, i2);
    }
    setFromVector3(t2, e2 = this._order) {
      return this.set(t2.x, t2.y, t2.z, e2);
    }
    reorder(t2) {
      return wr.setFromEuler(this), this.setFromQuaternion(wr, t2);
    }
    equals(t2) {
      return t2._x === this._x && t2._y === this._y && t2._z === this._z && t2._order === this._order;
    }
    fromArray(t2) {
      return this._x = t2[0], this._y = t2[1], this._z = t2[2], void 0 !== t2[3] && (this._order = t2[3]), this._onChangeCallback(), this;
    }
    toArray(t2 = [], e2 = 0) {
      return t2[e2] = this._x, t2[e2 + 1] = this._y, t2[e2 + 2] = this._z, t2[e2 + 3] = this._order, t2;
    }
    _onChange(t2) {
      return this._onChangeCallback = t2, this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._order;
    }
  };
  Mr.DEFAULT_ORDER = "XYZ";
  var Sr = class {
    constructor() {
      this.mask = 1;
    }
    set(t2) {
      this.mask = 1 << t2 >>> 0;
    }
    enable(t2) {
      this.mask |= 1 << t2;
    }
    enableAll() {
      this.mask = -1;
    }
    toggle(t2) {
      this.mask ^= 1 << t2;
    }
    disable(t2) {
      this.mask &= ~(1 << t2);
    }
    disableAll() {
      this.mask = 0;
    }
    test(t2) {
      return 0 !== (this.mask & t2.mask);
    }
    isEnabled(t2) {
      return !!(this.mask & 1 << t2);
    }
  };
  var _r = 0;
  var Ar = new ps();
  var Tr = new ds();
  var zr = new dr();
  var Cr = new ps();
  var Ir = new ps();
  var Br = new ps();
  var kr = new ds();
  var Pr = new ps(1, 0, 0);
  var Or = new ps(0, 1, 0);
  var Rr = new ps(0, 0, 1);
  var Nr = { type: "added" };
  var Vr = { type: "removed" };
  var Fr = { type: "childadded", child: null };
  var Lr = { type: "childremoved", child: null };
  var Er = class _Er extends Ki {
    constructor() {
      super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: _r++ }), this.uuid = rs(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = _Er.DEFAULT_UP.clone();
      const t2 = new ps(), e2 = new Mr(), i2 = new ds(), s2 = new ps(1, 1, 1);
      e2._onChange(function() {
        i2.setFromEuler(e2, false);
      }), i2._onChange(function() {
        e2.setFromQuaternion(i2, void 0, false);
      }), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: t2 }, rotation: { configurable: true, enumerable: true, value: e2 }, quaternion: { configurable: true, enumerable: true, value: i2 }, scale: { configurable: true, enumerable: true, value: s2 }, modelViewMatrix: { value: new dr() }, normalMatrix: { value: new gs() } }), this.matrix = new dr(), this.matrixWorld = new dr(), this.matrixAutoUpdate = _Er.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = _Er.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new Sr(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
    }
    onBeforeShadow() {
    }
    onAfterShadow() {
    }
    onBeforeRender() {
    }
    onAfterRender() {
    }
    applyMatrix4(t2) {
      this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t2), this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(t2) {
      return this.quaternion.premultiply(t2), this;
    }
    setRotationFromAxisAngle(t2, e2) {
      this.quaternion.setFromAxisAngle(t2, e2);
    }
    setRotationFromEuler(t2) {
      this.quaternion.setFromEuler(t2, true);
    }
    setRotationFromMatrix(t2) {
      this.quaternion.setFromRotationMatrix(t2);
    }
    setRotationFromQuaternion(t2) {
      this.quaternion.copy(t2);
    }
    rotateOnAxis(t2, e2) {
      return Tr.setFromAxisAngle(t2, e2), this.quaternion.multiply(Tr), this;
    }
    rotateOnWorldAxis(t2, e2) {
      return Tr.setFromAxisAngle(t2, e2), this.quaternion.premultiply(Tr), this;
    }
    rotateX(t2) {
      return this.rotateOnAxis(Pr, t2);
    }
    rotateY(t2) {
      return this.rotateOnAxis(Or, t2);
    }
    rotateZ(t2) {
      return this.rotateOnAxis(Rr, t2);
    }
    translateOnAxis(t2, e2) {
      return Ar.copy(t2).applyQuaternion(this.quaternion), this.position.add(Ar.multiplyScalar(e2)), this;
    }
    translateX(t2) {
      return this.translateOnAxis(Pr, t2);
    }
    translateY(t2) {
      return this.translateOnAxis(Or, t2);
    }
    translateZ(t2) {
      return this.translateOnAxis(Rr, t2);
    }
    localToWorld(t2) {
      return this.updateWorldMatrix(true, false), t2.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(t2) {
      return this.updateWorldMatrix(true, false), t2.applyMatrix4(zr.copy(this.matrixWorld).invert());
    }
    lookAt(t2, e2, i2) {
      t2.isVector3 ? Cr.copy(t2) : Cr.set(t2, e2, i2);
      const s2 = this.parent;
      this.updateWorldMatrix(true, false), Ir.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? zr.lookAt(Ir, Cr, this.up) : zr.lookAt(Cr, Ir, this.up), this.quaternion.setFromRotationMatrix(zr), s2 && (zr.extractRotation(s2.matrixWorld), Tr.setFromRotationMatrix(zr), this.quaternion.premultiply(Tr.invert()));
    }
    add(t2) {
      if (arguments.length > 1) {
        for (let t3 = 0; t3 < arguments.length; t3++) this.add(arguments[t3]);
        return this;
      }
      return t2 === this ? (Gi("Object3D.add: object can't be added as a child of itself.", t2), this) : (t2 && t2.isObject3D ? (t2.removeFromParent(), t2.parent = this, this.children.push(t2), t2.dispatchEvent(Nr), Fr.child = t2, this.dispatchEvent(Fr), Fr.child = null) : Gi("Object3D.add: object not an instance of THREE.Object3D.", t2), this);
    }
    remove(t2) {
      if (arguments.length > 1) {
        for (let t3 = 0; t3 < arguments.length; t3++) this.remove(arguments[t3]);
        return this;
      }
      const e2 = this.children.indexOf(t2);
      return -1 !== e2 && (t2.parent = null, this.children.splice(e2, 1), t2.dispatchEvent(Vr), Lr.child = t2, this.dispatchEvent(Lr), Lr.child = null), this;
    }
    removeFromParent() {
      const t2 = this.parent;
      return null !== t2 && t2.remove(this), this;
    }
    clear() {
      return this.remove(...this.children);
    }
    attach(t2) {
      return this.updateWorldMatrix(true, false), zr.copy(this.matrixWorld).invert(), null !== t2.parent && (t2.parent.updateWorldMatrix(true, false), zr.multiply(t2.parent.matrixWorld)), t2.applyMatrix4(zr), t2.removeFromParent(), t2.parent = this, this.children.push(t2), t2.updateWorldMatrix(false, true), t2.dispatchEvent(Nr), Fr.child = t2, this.dispatchEvent(Fr), Fr.child = null, this;
    }
    getObjectById(t2) {
      return this.getObjectByProperty("id", t2);
    }
    getObjectByName(t2) {
      return this.getObjectByProperty("name", t2);
    }
    getObjectByProperty(t2, e2) {
      if (this[t2] === e2) return this;
      for (let i2 = 0, s2 = this.children.length; i2 < s2; i2++) {
        const s3 = this.children[i2].getObjectByProperty(t2, e2);
        if (void 0 !== s3) return s3;
      }
    }
    getObjectsByProperty(t2, e2, i2 = []) {
      this[t2] === e2 && i2.push(this);
      const s2 = this.children;
      for (let r2 = 0, n2 = s2.length; r2 < n2; r2++) s2[r2].getObjectsByProperty(t2, e2, i2);
      return i2;
    }
    getWorldPosition(t2) {
      return this.updateWorldMatrix(true, false), t2.setFromMatrixPosition(this.matrixWorld);
    }
    getWorldQuaternion(t2) {
      return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Ir, t2, Br), t2;
    }
    getWorldScale(t2) {
      return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Ir, kr, t2), t2;
    }
    getWorldDirection(t2) {
      this.updateWorldMatrix(true, false);
      const e2 = this.matrixWorld.elements;
      return t2.set(e2[8], e2[9], e2[10]).normalize();
    }
    raycast() {
    }
    traverse(t2) {
      t2(this);
      const e2 = this.children;
      for (let i2 = 0, s2 = e2.length; i2 < s2; i2++) e2[i2].traverse(t2);
    }
    traverseVisible(t2) {
      if (false === this.visible) return;
      t2(this);
      const e2 = this.children;
      for (let i2 = 0, s2 = e2.length; i2 < s2; i2++) e2[i2].traverseVisible(t2);
    }
    traverseAncestors(t2) {
      const e2 = this.parent;
      null !== e2 && (t2(e2), e2.traverseAncestors(t2));
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
    }
    updateMatrixWorld(t2) {
      this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t2) && (true === this.matrixWorldAutoUpdate && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, t2 = true);
      const e2 = this.children;
      for (let i2 = 0, s2 = e2.length; i2 < s2; i2++) {
        e2[i2].updateMatrixWorld(t2);
      }
    }
    updateWorldMatrix(t2, e2) {
      const i2 = this.parent;
      if (true === t2 && null !== i2 && i2.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), true === this.matrixWorldAutoUpdate && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), true === e2) {
        const t3 = this.children;
        for (let e3 = 0, i3 = t3.length; e3 < i3; e3++) {
          t3[e3].updateWorldMatrix(false, true);
        }
      }
    }
    toJSON(t2) {
      const e2 = void 0 === t2 || "string" == typeof t2, i2 = {};
      e2 && (t2 = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, i2.metadata = { version: 4.7, type: "Object", generator: "Object3D.toJSON" });
      const s2 = {};
      function r2(e3, i3) {
        return void 0 === e3[i3.uuid] && (e3[i3.uuid] = i3.toJSON(t2)), i3.uuid;
      }
      if (s2.uuid = this.uuid, s2.type = this.type, "" !== this.name && (s2.name = this.name), true === this.castShadow && (s2.castShadow = true), true === this.receiveShadow && (s2.receiveShadow = true), false === this.visible && (s2.visible = false), false === this.frustumCulled && (s2.frustumCulled = false), 0 !== this.renderOrder && (s2.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (s2.userData = this.userData), s2.layers = this.layers.mask, s2.matrix = this.matrix.toArray(), s2.up = this.up.toArray(), false === this.matrixAutoUpdate && (s2.matrixAutoUpdate = false), this.isInstancedMesh && (s2.type = "InstancedMesh", s2.count = this.count, s2.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (s2.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (s2.type = "BatchedMesh", s2.perObjectFrustumCulled = this.perObjectFrustumCulled, s2.sortObjects = this.sortObjects, s2.drawRanges = this._drawRanges, s2.reservedRanges = this._reservedRanges, s2.geometryInfo = this._geometryInfo.map((t3) => ({ ...t3, boundingBox: t3.boundingBox ? t3.boundingBox.toJSON() : void 0, boundingSphere: t3.boundingSphere ? t3.boundingSphere.toJSON() : void 0 })), s2.instanceInfo = this._instanceInfo.map((t3) => ({ ...t3 })), s2.availableInstanceIds = this._availableInstanceIds.slice(), s2.availableGeometryIds = this._availableGeometryIds.slice(), s2.nextIndexStart = this._nextIndexStart, s2.nextVertexStart = this._nextVertexStart, s2.geometryCount = this._geometryCount, s2.maxInstanceCount = this._maxInstanceCount, s2.maxVertexCount = this._maxVertexCount, s2.maxIndexCount = this._maxIndexCount, s2.geometryInitialized = this._geometryInitialized, s2.matricesTexture = this._matricesTexture.toJSON(t2), s2.indirectTexture = this._indirectTexture.toJSON(t2), null !== this._colorsTexture && (s2.colorsTexture = this._colorsTexture.toJSON(t2)), null !== this.boundingSphere && (s2.boundingSphere = this.boundingSphere.toJSON()), null !== this.boundingBox && (s2.boundingBox = this.boundingBox.toJSON())), this.isScene) this.background && (this.background.isColor ? s2.background = this.background.toJSON() : this.background.isTexture && (s2.background = this.background.toJSON(t2).uuid)), this.environment && this.environment.isTexture && true !== this.environment.isRenderTargetTexture && (s2.environment = this.environment.toJSON(t2).uuid);
      else if (this.isMesh || this.isLine || this.isPoints) {
        s2.geometry = r2(t2.geometries, this.geometry);
        const e3 = this.geometry.parameters;
        if (void 0 !== e3 && void 0 !== e3.shapes) {
          const i3 = e3.shapes;
          if (Array.isArray(i3)) for (let e4 = 0, s3 = i3.length; e4 < s3; e4++) {
            const s4 = i3[e4];
            r2(t2.shapes, s4);
          }
          else r2(t2.shapes, i3);
        }
      }
      if (this.isSkinnedMesh && (s2.bindMode = this.bindMode, s2.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r2(t2.skeletons, this.skeleton), s2.skeleton = this.skeleton.uuid)), void 0 !== this.material) if (Array.isArray(this.material)) {
        const e3 = [];
        for (let i3 = 0, s3 = this.material.length; i3 < s3; i3++) e3.push(r2(t2.materials, this.material[i3]));
        s2.material = e3;
      } else s2.material = r2(t2.materials, this.material);
      if (this.children.length > 0) {
        s2.children = [];
        for (let e3 = 0; e3 < this.children.length; e3++) s2.children.push(this.children[e3].toJSON(t2).object);
      }
      if (this.animations.length > 0) {
        s2.animations = [];
        for (let e3 = 0; e3 < this.animations.length; e3++) {
          const i3 = this.animations[e3];
          s2.animations.push(r2(t2.animations, i3));
        }
      }
      if (e2) {
        const e3 = n2(t2.geometries), s3 = n2(t2.materials), r3 = n2(t2.textures), a2 = n2(t2.images), o2 = n2(t2.shapes), h2 = n2(t2.skeletons), l2 = n2(t2.animations), c2 = n2(t2.nodes);
        e3.length > 0 && (i2.geometries = e3), s3.length > 0 && (i2.materials = s3), r3.length > 0 && (i2.textures = r3), a2.length > 0 && (i2.images = a2), o2.length > 0 && (i2.shapes = o2), h2.length > 0 && (i2.skeletons = h2), l2.length > 0 && (i2.animations = l2), c2.length > 0 && (i2.nodes = c2);
      }
      return i2.object = s2, i2;
      function n2(t3) {
        const e3 = [];
        for (const i3 in t3) {
          const s3 = t3[i3];
          delete s3.metadata, e3.push(s3);
        }
        return e3;
      }
    }
    clone(t2) {
      return new this.constructor().copy(this, t2);
    }
    copy(t2, e2 = true) {
      if (this.name = t2.name, this.up.copy(t2.up), this.position.copy(t2.position), this.rotation.order = t2.rotation.order, this.quaternion.copy(t2.quaternion), this.scale.copy(t2.scale), this.matrix.copy(t2.matrix), this.matrixWorld.copy(t2.matrixWorld), this.matrixAutoUpdate = t2.matrixAutoUpdate, this.matrixWorldAutoUpdate = t2.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t2.matrixWorldNeedsUpdate, this.layers.mask = t2.layers.mask, this.visible = t2.visible, this.castShadow = t2.castShadow, this.receiveShadow = t2.receiveShadow, this.frustumCulled = t2.frustumCulled, this.renderOrder = t2.renderOrder, this.animations = t2.animations.slice(), this.userData = JSON.parse(JSON.stringify(t2.userData)), true === e2) for (let e3 = 0; e3 < t2.children.length; e3++) {
        const i2 = t2.children[e3];
        this.add(i2.clone());
      }
      return this;
    }
  };
  Er.DEFAULT_UP = new ps(0, 1, 0), Er.DEFAULT_MATRIX_AUTO_UPDATE = true, Er.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
  var jr = new ps();
  var Dr = new ps();
  var Wr = new ps();
  var Ur = new ps();
  var qr = new ps();
  var Jr = new ps();
  var Xr = new ps();
  var Yr = new ps();
  var Zr = new ps();
  var Hr = new ps();
  var Gr = new Ps();
  var $r = new Ps();
  var Qr = new Ps();
  var Kr = class _Kr {
    constructor(t2 = new ps(), e2 = new ps(), i2 = new ps()) {
      this.a = t2, this.b = e2, this.c = i2;
    }
    static getNormal(t2, e2, i2, s2) {
      s2.subVectors(i2, e2), jr.subVectors(t2, e2), s2.cross(jr);
      const r2 = s2.lengthSq();
      return r2 > 0 ? s2.multiplyScalar(1 / Math.sqrt(r2)) : s2.set(0, 0, 0);
    }
    static getBarycoord(t2, e2, i2, s2, r2) {
      jr.subVectors(s2, e2), Dr.subVectors(i2, e2), Wr.subVectors(t2, e2);
      const n2 = jr.dot(jr), a2 = jr.dot(Dr), o2 = jr.dot(Wr), h2 = Dr.dot(Dr), l2 = Dr.dot(Wr), c2 = n2 * h2 - a2 * a2;
      if (0 === c2) return r2.set(0, 0, 0), null;
      const u2 = 1 / c2, d2 = (h2 * o2 - a2 * l2) * u2, p2 = (n2 * l2 - a2 * o2) * u2;
      return r2.set(1 - d2 - p2, p2, d2);
    }
    static containsPoint(t2, e2, i2, s2) {
      return null !== this.getBarycoord(t2, e2, i2, s2, Ur) && (Ur.x >= 0 && Ur.y >= 0 && Ur.x + Ur.y <= 1);
    }
    static getInterpolation(t2, e2, i2, s2, r2, n2, a2, o2) {
      return null === this.getBarycoord(t2, e2, i2, s2, Ur) ? (o2.x = 0, o2.y = 0, "z" in o2 && (o2.z = 0), "w" in o2 && (o2.w = 0), null) : (o2.setScalar(0), o2.addScaledVector(r2, Ur.x), o2.addScaledVector(n2, Ur.y), o2.addScaledVector(a2, Ur.z), o2);
    }
    static getInterpolatedAttribute(t2, e2, i2, s2, r2, n2) {
      return Gr.setScalar(0), $r.setScalar(0), Qr.setScalar(0), Gr.fromBufferAttribute(t2, e2), $r.fromBufferAttribute(t2, i2), Qr.fromBufferAttribute(t2, s2), n2.setScalar(0), n2.addScaledVector(Gr, r2.x), n2.addScaledVector($r, r2.y), n2.addScaledVector(Qr, r2.z), n2;
    }
    static isFrontFacing(t2, e2, i2, s2) {
      return jr.subVectors(i2, e2), Dr.subVectors(t2, e2), jr.cross(Dr).dot(s2) < 0;
    }
    set(t2, e2, i2) {
      return this.a.copy(t2), this.b.copy(e2), this.c.copy(i2), this;
    }
    setFromPointsAndIndices(t2, e2, i2, s2) {
      return this.a.copy(t2[e2]), this.b.copy(t2[i2]), this.c.copy(t2[s2]), this;
    }
    setFromAttributeAndIndices(t2, e2, i2, s2) {
      return this.a.fromBufferAttribute(t2, e2), this.b.fromBufferAttribute(t2, i2), this.c.fromBufferAttribute(t2, s2), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      return this.a.copy(t2.a), this.b.copy(t2.b), this.c.copy(t2.c), this;
    }
    getArea() {
      return jr.subVectors(this.c, this.b), Dr.subVectors(this.a, this.b), 0.5 * jr.cross(Dr).length();
    }
    getMidpoint(t2) {
      return t2.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    }
    getNormal(t2) {
      return _Kr.getNormal(this.a, this.b, this.c, t2);
    }
    getPlane(t2) {
      return t2.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(t2, e2) {
      return _Kr.getBarycoord(t2, this.a, this.b, this.c, e2);
    }
    getInterpolation(t2, e2, i2, s2, r2) {
      return _Kr.getInterpolation(t2, this.a, this.b, this.c, e2, i2, s2, r2);
    }
    containsPoint(t2) {
      return _Kr.containsPoint(t2, this.a, this.b, this.c);
    }
    isFrontFacing(t2) {
      return _Kr.isFrontFacing(this.a, this.b, this.c, t2);
    }
    intersectsBox(t2) {
      return t2.intersectsTriangle(this);
    }
    closestPointToPoint(t2, e2) {
      const i2 = this.a, s2 = this.b, r2 = this.c;
      let n2, a2;
      qr.subVectors(s2, i2), Jr.subVectors(r2, i2), Yr.subVectors(t2, i2);
      const o2 = qr.dot(Yr), h2 = Jr.dot(Yr);
      if (o2 <= 0 && h2 <= 0) return e2.copy(i2);
      Zr.subVectors(t2, s2);
      const l2 = qr.dot(Zr), c2 = Jr.dot(Zr);
      if (l2 >= 0 && c2 <= l2) return e2.copy(s2);
      const u2 = o2 * c2 - l2 * h2;
      if (u2 <= 0 && o2 >= 0 && l2 <= 0) return n2 = o2 / (o2 - l2), e2.copy(i2).addScaledVector(qr, n2);
      Hr.subVectors(t2, r2);
      const d2 = qr.dot(Hr), p2 = Jr.dot(Hr);
      if (p2 >= 0 && d2 <= p2) return e2.copy(r2);
      const m2 = d2 * h2 - o2 * p2;
      if (m2 <= 0 && h2 >= 0 && p2 <= 0) return a2 = h2 / (h2 - p2), e2.copy(i2).addScaledVector(Jr, a2);
      const y2 = l2 * p2 - d2 * c2;
      if (y2 <= 0 && c2 - l2 >= 0 && d2 - p2 >= 0) return Xr.subVectors(r2, s2), a2 = (c2 - l2) / (c2 - l2 + (d2 - p2)), e2.copy(s2).addScaledVector(Xr, a2);
      const g2 = 1 / (y2 + m2 + u2);
      return n2 = m2 * g2, a2 = u2 * g2, e2.copy(i2).addScaledVector(qr, n2).addScaledVector(Jr, a2);
    }
    equals(t2) {
      return t2.a.equals(this.a) && t2.b.equals(this.b) && t2.c.equals(this.c);
    }
  };
  var tn = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
  var en = { h: 0, s: 0, l: 0 };
  var sn = { h: 0, s: 0, l: 0 };
  function rn(t2, e2, i2) {
    return i2 < 0 && (i2 += 1), i2 > 1 && (i2 -= 1), i2 < 1 / 6 ? t2 + 6 * (e2 - t2) * i2 : i2 < 0.5 ? e2 : i2 < 2 / 3 ? t2 + 6 * (e2 - t2) * (2 / 3 - i2) : t2;
  }
  var nn = class {
    constructor(t2, e2, i2) {
      return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(t2, e2, i2);
    }
    set(t2, e2, i2) {
      if (void 0 === e2 && void 0 === i2) {
        const e3 = t2;
        e3 && e3.isColor ? this.copy(e3) : "number" == typeof e3 ? this.setHex(e3) : "string" == typeof e3 && this.setStyle(e3);
      } else this.setRGB(t2, e2, i2);
      return this;
    }
    setScalar(t2) {
      return this.r = t2, this.g = t2, this.b = t2, this;
    }
    setHex(t2, e2 = He) {
      return t2 = Math.floor(t2), this.r = (t2 >> 16 & 255) / 255, this.g = (t2 >> 8 & 255) / 255, this.b = (255 & t2) / 255, ws.colorSpaceToWorking(this, e2), this;
    }
    setRGB(t2, e2, i2, s2 = ws.workingColorSpace) {
      return this.r = t2, this.g = e2, this.b = i2, ws.colorSpaceToWorking(this, s2), this;
    }
    setHSL(t2, e2, i2, s2 = ws.workingColorSpace) {
      if (t2 = as(t2, 1), e2 = ns(e2, 0, 1), i2 = ns(i2, 0, 1), 0 === e2) this.r = this.g = this.b = i2;
      else {
        const s3 = i2 <= 0.5 ? i2 * (1 + e2) : i2 + e2 - i2 * e2, r2 = 2 * i2 - s3;
        this.r = rn(r2, s3, t2 + 1 / 3), this.g = rn(r2, s3, t2), this.b = rn(r2, s3, t2 - 1 / 3);
      }
      return ws.colorSpaceToWorking(this, s2), this;
    }
    setStyle(t2, e2 = He) {
      function i2(e3) {
        void 0 !== e3 && parseFloat(e3) < 1 && Hi("Color: Alpha component of " + t2 + " will be ignored.");
      }
      let s2;
      if (s2 = /^(\w+)\(([^\)]*)\)/.exec(t2)) {
        let r2;
        const n2 = s2[1], a2 = s2[2];
        switch (n2) {
          case "rgb":
          case "rgba":
            if (r2 = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a2)) return i2(r2[4]), this.setRGB(Math.min(255, parseInt(r2[1], 10)) / 255, Math.min(255, parseInt(r2[2], 10)) / 255, Math.min(255, parseInt(r2[3], 10)) / 255, e2);
            if (r2 = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a2)) return i2(r2[4]), this.setRGB(Math.min(100, parseInt(r2[1], 10)) / 100, Math.min(100, parseInt(r2[2], 10)) / 100, Math.min(100, parseInt(r2[3], 10)) / 100, e2);
            break;
          case "hsl":
          case "hsla":
            if (r2 = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a2)) return i2(r2[4]), this.setHSL(parseFloat(r2[1]) / 360, parseFloat(r2[2]) / 100, parseFloat(r2[3]) / 100, e2);
            break;
          default:
            Hi("Color: Unknown color model " + t2);
        }
      } else if (s2 = /^\#([A-Fa-f\d]+)$/.exec(t2)) {
        const i3 = s2[1], r2 = i3.length;
        if (3 === r2) return this.setRGB(parseInt(i3.charAt(0), 16) / 15, parseInt(i3.charAt(1), 16) / 15, parseInt(i3.charAt(2), 16) / 15, e2);
        if (6 === r2) return this.setHex(parseInt(i3, 16), e2);
        Hi("Color: Invalid hex color " + t2);
      } else if (t2 && t2.length > 0) return this.setColorName(t2, e2);
      return this;
    }
    setColorName(t2, e2 = He) {
      const i2 = tn[t2.toLowerCase()];
      return void 0 !== i2 ? this.setHex(i2, e2) : Hi("Color: Unknown color " + t2), this;
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(t2) {
      return this.r = t2.r, this.g = t2.g, this.b = t2.b, this;
    }
    copySRGBToLinear(t2) {
      return this.r = Ms(t2.r), this.g = Ms(t2.g), this.b = Ms(t2.b), this;
    }
    copyLinearToSRGB(t2) {
      return this.r = Ss(t2.r), this.g = Ss(t2.g), this.b = Ss(t2.b), this;
    }
    convertSRGBToLinear() {
      return this.copySRGBToLinear(this), this;
    }
    convertLinearToSRGB() {
      return this.copyLinearToSRGB(this), this;
    }
    getHex(t2 = He) {
      return ws.workingToColorSpace(an.copy(this), t2), 65536 * Math.round(ns(255 * an.r, 0, 255)) + 256 * Math.round(ns(255 * an.g, 0, 255)) + Math.round(ns(255 * an.b, 0, 255));
    }
    getHexString(t2 = He) {
      return ("000000" + this.getHex(t2).toString(16)).slice(-6);
    }
    getHSL(t2, e2 = ws.workingColorSpace) {
      ws.workingToColorSpace(an.copy(this), e2);
      const i2 = an.r, s2 = an.g, r2 = an.b, n2 = Math.max(i2, s2, r2), a2 = Math.min(i2, s2, r2);
      let o2, h2;
      const l2 = (a2 + n2) / 2;
      if (a2 === n2) o2 = 0, h2 = 0;
      else {
        const t3 = n2 - a2;
        switch (h2 = l2 <= 0.5 ? t3 / (n2 + a2) : t3 / (2 - n2 - a2), n2) {
          case i2:
            o2 = (s2 - r2) / t3 + (s2 < r2 ? 6 : 0);
            break;
          case s2:
            o2 = (r2 - i2) / t3 + 2;
            break;
          case r2:
            o2 = (i2 - s2) / t3 + 4;
        }
        o2 /= 6;
      }
      return t2.h = o2, t2.s = h2, t2.l = l2, t2;
    }
    getRGB(t2, e2 = ws.workingColorSpace) {
      return ws.workingToColorSpace(an.copy(this), e2), t2.r = an.r, t2.g = an.g, t2.b = an.b, t2;
    }
    getStyle(t2 = He) {
      ws.workingToColorSpace(an.copy(this), t2);
      const e2 = an.r, i2 = an.g, s2 = an.b;
      return t2 !== He ? `color(${t2} ${e2.toFixed(3)} ${i2.toFixed(3)} ${s2.toFixed(3)})` : `rgb(${Math.round(255 * e2)},${Math.round(255 * i2)},${Math.round(255 * s2)})`;
    }
    offsetHSL(t2, e2, i2) {
      return this.getHSL(en), this.setHSL(en.h + t2, en.s + e2, en.l + i2);
    }
    add(t2) {
      return this.r += t2.r, this.g += t2.g, this.b += t2.b, this;
    }
    addColors(t2, e2) {
      return this.r = t2.r + e2.r, this.g = t2.g + e2.g, this.b = t2.b + e2.b, this;
    }
    addScalar(t2) {
      return this.r += t2, this.g += t2, this.b += t2, this;
    }
    sub(t2) {
      return this.r = Math.max(0, this.r - t2.r), this.g = Math.max(0, this.g - t2.g), this.b = Math.max(0, this.b - t2.b), this;
    }
    multiply(t2) {
      return this.r *= t2.r, this.g *= t2.g, this.b *= t2.b, this;
    }
    multiplyScalar(t2) {
      return this.r *= t2, this.g *= t2, this.b *= t2, this;
    }
    lerp(t2, e2) {
      return this.r += (t2.r - this.r) * e2, this.g += (t2.g - this.g) * e2, this.b += (t2.b - this.b) * e2, this;
    }
    lerpColors(t2, e2, i2) {
      return this.r = t2.r + (e2.r - t2.r) * i2, this.g = t2.g + (e2.g - t2.g) * i2, this.b = t2.b + (e2.b - t2.b) * i2, this;
    }
    lerpHSL(t2, e2) {
      this.getHSL(en), t2.getHSL(sn);
      const i2 = os(en.h, sn.h, e2), s2 = os(en.s, sn.s, e2), r2 = os(en.l, sn.l, e2);
      return this.setHSL(i2, s2, r2), this;
    }
    setFromVector3(t2) {
      return this.r = t2.x, this.g = t2.y, this.b = t2.z, this;
    }
    applyMatrix3(t2) {
      const e2 = this.r, i2 = this.g, s2 = this.b, r2 = t2.elements;
      return this.r = r2[0] * e2 + r2[3] * i2 + r2[6] * s2, this.g = r2[1] * e2 + r2[4] * i2 + r2[7] * s2, this.b = r2[2] * e2 + r2[5] * i2 + r2[8] * s2, this;
    }
    equals(t2) {
      return t2.r === this.r && t2.g === this.g && t2.b === this.b;
    }
    fromArray(t2, e2 = 0) {
      return this.r = t2[e2], this.g = t2[e2 + 1], this.b = t2[e2 + 2], this;
    }
    toArray(t2 = [], e2 = 0) {
      return t2[e2] = this.r, t2[e2 + 1] = this.g, t2[e2 + 2] = this.b, t2;
    }
    fromBufferAttribute(t2, e2) {
      return this.r = t2.getX(e2), this.g = t2.getY(e2), this.b = t2.getZ(e2), this;
    }
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      yield this.r, yield this.g, yield this.b;
    }
  };
  var an = new nn();
  nn.NAMES = tn;
  var on = 0;
  var hn = class extends Ki {
    constructor() {
      super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: on++ }), this.uuid = rs(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new nn(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = ti, this.stencilZFail = ti, this.stencilZPass = ti, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.allowOverride = true, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
    }
    get alphaTest() {
      return this._alphaTest;
    }
    set alphaTest(t2) {
      this._alphaTest > 0 != t2 > 0 && this.version++, this._alphaTest = t2;
    }
    onBeforeRender() {
    }
    onBeforeCompile() {
    }
    customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    }
    setValues(t2) {
      if (void 0 !== t2) for (const e2 in t2) {
        const i2 = t2[e2];
        if (void 0 === i2) {
          Hi(`Material: parameter '${e2}' has value of undefined.`);
          continue;
        }
        const s2 = this[e2];
        void 0 !== s2 ? s2 && s2.isColor ? s2.set(i2) : s2 && s2.isVector3 && i2 && i2.isVector3 ? s2.copy(i2) : this[e2] = i2 : Hi(`Material: '${e2}' is not a property of THREE.${this.type}.`);
      }
    }
    toJSON(t2) {
      const e2 = void 0 === t2 || "string" == typeof t2;
      e2 && (t2 = { textures: {}, images: {} });
      const i2 = { metadata: { version: 4.7, type: "Material", generator: "Material.toJSON" } };
      function s2(t3) {
        const e3 = [];
        for (const i3 in t3) {
          const s3 = t3[i3];
          delete s3.metadata, e3.push(s3);
        }
        return e3;
      }
      if (i2.uuid = this.uuid, i2.type = this.type, "" !== this.name && (i2.name = this.name), this.color && this.color.isColor && (i2.color = this.color.getHex()), void 0 !== this.roughness && (i2.roughness = this.roughness), void 0 !== this.metalness && (i2.metalness = this.metalness), void 0 !== this.sheen && (i2.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i2.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (i2.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i2.emissive = this.emissive.getHex()), void 0 !== this.emissiveIntensity && 1 !== this.emissiveIntensity && (i2.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i2.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (i2.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i2.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (i2.shininess = this.shininess), void 0 !== this.clearcoat && (i2.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (i2.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i2.clearcoatMap = this.clearcoatMap.toJSON(t2).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i2.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t2).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i2.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t2).uuid, i2.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (i2.sheenColorMap = this.sheenColorMap.toJSON(t2).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (i2.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(t2).uuid), void 0 !== this.dispersion && (i2.dispersion = this.dispersion), void 0 !== this.iridescence && (i2.iridescence = this.iridescence), void 0 !== this.iridescenceIOR && (i2.iridescenceIOR = this.iridescenceIOR), void 0 !== this.iridescenceThicknessRange && (i2.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i2.iridescenceMap = this.iridescenceMap.toJSON(t2).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i2.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t2).uuid), void 0 !== this.anisotropy && (i2.anisotropy = this.anisotropy), void 0 !== this.anisotropyRotation && (i2.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (i2.anisotropyMap = this.anisotropyMap.toJSON(t2).uuid), this.map && this.map.isTexture && (i2.map = this.map.toJSON(t2).uuid), this.matcap && this.matcap.isTexture && (i2.matcap = this.matcap.toJSON(t2).uuid), this.alphaMap && this.alphaMap.isTexture && (i2.alphaMap = this.alphaMap.toJSON(t2).uuid), this.lightMap && this.lightMap.isTexture && (i2.lightMap = this.lightMap.toJSON(t2).uuid, i2.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i2.aoMap = this.aoMap.toJSON(t2).uuid, i2.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i2.bumpMap = this.bumpMap.toJSON(t2).uuid, i2.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i2.normalMap = this.normalMap.toJSON(t2).uuid, i2.normalMapType = this.normalMapType, i2.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i2.displacementMap = this.displacementMap.toJSON(t2).uuid, i2.displacementScale = this.displacementScale, i2.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i2.roughnessMap = this.roughnessMap.toJSON(t2).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i2.metalnessMap = this.metalnessMap.toJSON(t2).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i2.emissiveMap = this.emissiveMap.toJSON(t2).uuid), this.specularMap && this.specularMap.isTexture && (i2.specularMap = this.specularMap.toJSON(t2).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i2.specularIntensityMap = this.specularIntensityMap.toJSON(t2).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i2.specularColorMap = this.specularColorMap.toJSON(t2).uuid), this.envMap && this.envMap.isTexture && (i2.envMap = this.envMap.toJSON(t2).uuid, void 0 !== this.combine && (i2.combine = this.combine)), void 0 !== this.envMapRotation && (i2.envMapRotation = this.envMapRotation.toArray()), void 0 !== this.envMapIntensity && (i2.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (i2.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (i2.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i2.gradientMap = this.gradientMap.toJSON(t2).uuid), void 0 !== this.transmission && (i2.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i2.transmissionMap = this.transmissionMap.toJSON(t2).uuid), void 0 !== this.thickness && (i2.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i2.thicknessMap = this.thicknessMap.toJSON(t2).uuid), void 0 !== this.attenuationDistance && this.attenuationDistance !== 1 / 0 && (i2.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (i2.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (i2.size = this.size), null !== this.shadowSide && (i2.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (i2.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (i2.blending = this.blending), 0 !== this.side && (i2.side = this.side), true === this.vertexColors && (i2.vertexColors = true), this.opacity < 1 && (i2.opacity = this.opacity), true === this.transparent && (i2.transparent = true), 204 !== this.blendSrc && (i2.blendSrc = this.blendSrc), 205 !== this.blendDst && (i2.blendDst = this.blendDst), 100 !== this.blendEquation && (i2.blendEquation = this.blendEquation), null !== this.blendSrcAlpha && (i2.blendSrcAlpha = this.blendSrcAlpha), null !== this.blendDstAlpha && (i2.blendDstAlpha = this.blendDstAlpha), null !== this.blendEquationAlpha && (i2.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (i2.blendColor = this.blendColor.getHex()), 0 !== this.blendAlpha && (i2.blendAlpha = this.blendAlpha), 3 !== this.depthFunc && (i2.depthFunc = this.depthFunc), false === this.depthTest && (i2.depthTest = this.depthTest), false === this.depthWrite && (i2.depthWrite = this.depthWrite), false === this.colorWrite && (i2.colorWrite = this.colorWrite), 255 !== this.stencilWriteMask && (i2.stencilWriteMask = this.stencilWriteMask), 519 !== this.stencilFunc && (i2.stencilFunc = this.stencilFunc), 0 !== this.stencilRef && (i2.stencilRef = this.stencilRef), 255 !== this.stencilFuncMask && (i2.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== ti && (i2.stencilFail = this.stencilFail), this.stencilZFail !== ti && (i2.stencilZFail = this.stencilZFail), this.stencilZPass !== ti && (i2.stencilZPass = this.stencilZPass), true === this.stencilWrite && (i2.stencilWrite = this.stencilWrite), void 0 !== this.rotation && 0 !== this.rotation && (i2.rotation = this.rotation), true === this.polygonOffset && (i2.polygonOffset = true), 0 !== this.polygonOffsetFactor && (i2.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (i2.polygonOffsetUnits = this.polygonOffsetUnits), void 0 !== this.linewidth && 1 !== this.linewidth && (i2.linewidth = this.linewidth), void 0 !== this.dashSize && (i2.dashSize = this.dashSize), void 0 !== this.gapSize && (i2.gapSize = this.gapSize), void 0 !== this.scale && (i2.scale = this.scale), true === this.dithering && (i2.dithering = true), this.alphaTest > 0 && (i2.alphaTest = this.alphaTest), true === this.alphaHash && (i2.alphaHash = true), true === this.alphaToCoverage && (i2.alphaToCoverage = true), true === this.premultipliedAlpha && (i2.premultipliedAlpha = true), true === this.forceSinglePass && (i2.forceSinglePass = true), true === this.wireframe && (i2.wireframe = true), this.wireframeLinewidth > 1 && (i2.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (i2.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (i2.wireframeLinejoin = this.wireframeLinejoin), true === this.flatShading && (i2.flatShading = true), false === this.visible && (i2.visible = false), false === this.toneMapped && (i2.toneMapped = false), false === this.fog && (i2.fog = false), Object.keys(this.userData).length > 0 && (i2.userData = this.userData), e2) {
        const e3 = s2(t2.textures), r2 = s2(t2.images);
        e3.length > 0 && (i2.textures = e3), r2.length > 0 && (i2.images = r2);
      }
      return i2;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      this.name = t2.name, this.blending = t2.blending, this.side = t2.side, this.vertexColors = t2.vertexColors, this.opacity = t2.opacity, this.transparent = t2.transparent, this.blendSrc = t2.blendSrc, this.blendDst = t2.blendDst, this.blendEquation = t2.blendEquation, this.blendSrcAlpha = t2.blendSrcAlpha, this.blendDstAlpha = t2.blendDstAlpha, this.blendEquationAlpha = t2.blendEquationAlpha, this.blendColor.copy(t2.blendColor), this.blendAlpha = t2.blendAlpha, this.depthFunc = t2.depthFunc, this.depthTest = t2.depthTest, this.depthWrite = t2.depthWrite, this.stencilWriteMask = t2.stencilWriteMask, this.stencilFunc = t2.stencilFunc, this.stencilRef = t2.stencilRef, this.stencilFuncMask = t2.stencilFuncMask, this.stencilFail = t2.stencilFail, this.stencilZFail = t2.stencilZFail, this.stencilZPass = t2.stencilZPass, this.stencilWrite = t2.stencilWrite;
      const e2 = t2.clippingPlanes;
      let i2 = null;
      if (null !== e2) {
        const t3 = e2.length;
        i2 = new Array(t3);
        for (let s2 = 0; s2 !== t3; ++s2) i2[s2] = e2[s2].clone();
      }
      return this.clippingPlanes = i2, this.clipIntersection = t2.clipIntersection, this.clipShadows = t2.clipShadows, this.shadowSide = t2.shadowSide, this.colorWrite = t2.colorWrite, this.precision = t2.precision, this.polygonOffset = t2.polygonOffset, this.polygonOffsetFactor = t2.polygonOffsetFactor, this.polygonOffsetUnits = t2.polygonOffsetUnits, this.dithering = t2.dithering, this.alphaTest = t2.alphaTest, this.alphaHash = t2.alphaHash, this.alphaToCoverage = t2.alphaToCoverage, this.premultipliedAlpha = t2.premultipliedAlpha, this.forceSinglePass = t2.forceSinglePass, this.visible = t2.visible, this.toneMapped = t2.toneMapped, this.userData = JSON.parse(JSON.stringify(t2.userData)), this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    set needsUpdate(t2) {
      true === t2 && this.version++;
    }
  };
  var ln = class extends hn {
    constructor(t2) {
      super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new nn(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Mr(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.color.copy(t2.color), this.map = t2.map, this.lightMap = t2.lightMap, this.lightMapIntensity = t2.lightMapIntensity, this.aoMap = t2.aoMap, this.aoMapIntensity = t2.aoMapIntensity, this.specularMap = t2.specularMap, this.alphaMap = t2.alphaMap, this.envMap = t2.envMap, this.envMapRotation.copy(t2.envMapRotation), this.combine = t2.combine, this.reflectivity = t2.reflectivity, this.refractionRatio = t2.refractionRatio, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.wireframeLinecap = t2.wireframeLinecap, this.wireframeLinejoin = t2.wireframeLinejoin, this.fog = t2.fog, this;
    }
  };
  var cn = un();
  function un() {
    const t2 = new ArrayBuffer(4), e2 = new Float32Array(t2), i2 = new Uint32Array(t2), s2 = new Uint32Array(512), r2 = new Uint32Array(512);
    for (let t3 = 0; t3 < 256; ++t3) {
      const e3 = t3 - 127;
      e3 < -27 ? (s2[t3] = 0, s2[256 | t3] = 32768, r2[t3] = 24, r2[256 | t3] = 24) : e3 < -14 ? (s2[t3] = 1024 >> -e3 - 14, s2[256 | t3] = 1024 >> -e3 - 14 | 32768, r2[t3] = -e3 - 1, r2[256 | t3] = -e3 - 1) : e3 <= 15 ? (s2[t3] = e3 + 15 << 10, s2[256 | t3] = e3 + 15 << 10 | 32768, r2[t3] = 13, r2[256 | t3] = 13) : e3 < 128 ? (s2[t3] = 31744, s2[256 | t3] = 64512, r2[t3] = 24, r2[256 | t3] = 24) : (s2[t3] = 31744, s2[256 | t3] = 64512, r2[t3] = 13, r2[256 | t3] = 13);
    }
    const n2 = new Uint32Array(2048), a2 = new Uint32Array(64), o2 = new Uint32Array(64);
    for (let t3 = 1; t3 < 1024; ++t3) {
      let e3 = t3 << 13, i3 = 0;
      for (; !(8388608 & e3); ) e3 <<= 1, i3 -= 8388608;
      e3 &= -8388609, i3 += 947912704, n2[t3] = e3 | i3;
    }
    for (let t3 = 1024; t3 < 2048; ++t3) n2[t3] = 939524096 + (t3 - 1024 << 13);
    for (let t3 = 1; t3 < 31; ++t3) a2[t3] = t3 << 23;
    a2[31] = 1199570944, a2[32] = 2147483648;
    for (let t3 = 33; t3 < 63; ++t3) a2[t3] = 2147483648 + (t3 - 32 << 23);
    a2[63] = 3347054592;
    for (let t3 = 1; t3 < 64; ++t3) 32 !== t3 && (o2[t3] = 1024);
    return { floatView: e2, uint32View: i2, baseTable: s2, shiftTable: r2, mantissaTable: n2, exponentTable: a2, offsetTable: o2 };
  }
  var yn = new ps();
  var gn = new us();
  var fn = 0;
  var xn = class {
    constructor(t2, e2, i2 = false) {
      if (Array.isArray(t2)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      this.isBufferAttribute = true, Object.defineProperty(this, "id", { value: fn++ }), this.name = "", this.array = t2, this.itemSize = e2, this.count = void 0 !== t2 ? t2.length / e2 : 0, this.normalized = i2, this.usage = Si, this.updateRanges = [], this.gpuType = Pt, this.version = 0;
    }
    onUploadCallback() {
    }
    set needsUpdate(t2) {
      true === t2 && this.version++;
    }
    setUsage(t2) {
      return this.usage = t2, this;
    }
    addUpdateRange(t2, e2) {
      this.updateRanges.push({ start: t2, count: e2 });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(t2) {
      return this.name = t2.name, this.array = new t2.array.constructor(t2.array), this.itemSize = t2.itemSize, this.count = t2.count, this.normalized = t2.normalized, this.usage = t2.usage, this.gpuType = t2.gpuType, this;
    }
    copyAt(t2, e2, i2) {
      t2 *= this.itemSize, i2 *= e2.itemSize;
      for (let s2 = 0, r2 = this.itemSize; s2 < r2; s2++) this.array[t2 + s2] = e2.array[i2 + s2];
      return this;
    }
    copyArray(t2) {
      return this.array.set(t2), this;
    }
    applyMatrix3(t2) {
      if (2 === this.itemSize) for (let e2 = 0, i2 = this.count; e2 < i2; e2++) gn.fromBufferAttribute(this, e2), gn.applyMatrix3(t2), this.setXY(e2, gn.x, gn.y);
      else if (3 === this.itemSize) for (let e2 = 0, i2 = this.count; e2 < i2; e2++) yn.fromBufferAttribute(this, e2), yn.applyMatrix3(t2), this.setXYZ(e2, yn.x, yn.y, yn.z);
      return this;
    }
    applyMatrix4(t2) {
      for (let e2 = 0, i2 = this.count; e2 < i2; e2++) yn.fromBufferAttribute(this, e2), yn.applyMatrix4(t2), this.setXYZ(e2, yn.x, yn.y, yn.z);
      return this;
    }
    applyNormalMatrix(t2) {
      for (let e2 = 0, i2 = this.count; e2 < i2; e2++) yn.fromBufferAttribute(this, e2), yn.applyNormalMatrix(t2), this.setXYZ(e2, yn.x, yn.y, yn.z);
      return this;
    }
    transformDirection(t2) {
      for (let e2 = 0, i2 = this.count; e2 < i2; e2++) yn.fromBufferAttribute(this, e2), yn.transformDirection(t2), this.setXYZ(e2, yn.x, yn.y, yn.z);
      return this;
    }
    set(t2, e2 = 0) {
      return this.array.set(t2, e2), this;
    }
    getComponent(t2, e2) {
      let i2 = this.array[t2 * this.itemSize + e2];
      return this.normalized && (i2 = hs(i2, this.array)), i2;
    }
    setComponent(t2, e2, i2) {
      return this.normalized && (i2 = ls(i2, this.array)), this.array[t2 * this.itemSize + e2] = i2, this;
    }
    getX(t2) {
      let e2 = this.array[t2 * this.itemSize];
      return this.normalized && (e2 = hs(e2, this.array)), e2;
    }
    setX(t2, e2) {
      return this.normalized && (e2 = ls(e2, this.array)), this.array[t2 * this.itemSize] = e2, this;
    }
    getY(t2) {
      let e2 = this.array[t2 * this.itemSize + 1];
      return this.normalized && (e2 = hs(e2, this.array)), e2;
    }
    setY(t2, e2) {
      return this.normalized && (e2 = ls(e2, this.array)), this.array[t2 * this.itemSize + 1] = e2, this;
    }
    getZ(t2) {
      let e2 = this.array[t2 * this.itemSize + 2];
      return this.normalized && (e2 = hs(e2, this.array)), e2;
    }
    setZ(t2, e2) {
      return this.normalized && (e2 = ls(e2, this.array)), this.array[t2 * this.itemSize + 2] = e2, this;
    }
    getW(t2) {
      let e2 = this.array[t2 * this.itemSize + 3];
      return this.normalized && (e2 = hs(e2, this.array)), e2;
    }
    setW(t2, e2) {
      return this.normalized && (e2 = ls(e2, this.array)), this.array[t2 * this.itemSize + 3] = e2, this;
    }
    setXY(t2, e2, i2) {
      return t2 *= this.itemSize, this.normalized && (e2 = ls(e2, this.array), i2 = ls(i2, this.array)), this.array[t2 + 0] = e2, this.array[t2 + 1] = i2, this;
    }
    setXYZ(t2, e2, i2, s2) {
      return t2 *= this.itemSize, this.normalized && (e2 = ls(e2, this.array), i2 = ls(i2, this.array), s2 = ls(s2, this.array)), this.array[t2 + 0] = e2, this.array[t2 + 1] = i2, this.array[t2 + 2] = s2, this;
    }
    setXYZW(t2, e2, i2, s2, r2) {
      return t2 *= this.itemSize, this.normalized && (e2 = ls(e2, this.array), i2 = ls(i2, this.array), s2 = ls(s2, this.array), r2 = ls(r2, this.array)), this.array[t2 + 0] = e2, this.array[t2 + 1] = i2, this.array[t2 + 2] = s2, this.array[t2 + 3] = r2, this;
    }
    onUpload(t2) {
      return this.onUploadCallback = t2, this;
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      const t2 = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
      return "" !== this.name && (t2.name = this.name), this.usage !== Si && (t2.usage = this.usage), t2;
    }
  };
  var Sn = class extends xn {
    constructor(t2, e2, i2) {
      super(new Uint16Array(t2), e2, i2);
    }
  };
  var An = class extends xn {
    constructor(t2, e2, i2) {
      super(new Uint32Array(t2), e2, i2);
    }
  };
  var zn = class extends xn {
    constructor(t2, e2, i2) {
      super(new Float32Array(t2), e2, i2);
    }
  };
  var Cn = 0;
  var In = new dr();
  var Bn = new Er();
  var kn = new ps();
  var Pn = new Es();
  var On = new Es();
  var Rn = new ps();
  var Nn = class _Nn extends Ki {
    constructor() {
      super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: Cn++ }), this.uuid = rs(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
    }
    getIndex() {
      return this.index;
    }
    setIndex(t2) {
      return Array.isArray(t2) ? this.index = new (Ei(t2) ? An : Sn)(t2, 1) : this.index = t2, this;
    }
    setIndirect(t2) {
      return this.indirect = t2, this;
    }
    getIndirect() {
      return this.indirect;
    }
    getAttribute(t2) {
      return this.attributes[t2];
    }
    setAttribute(t2, e2) {
      return this.attributes[t2] = e2, this;
    }
    deleteAttribute(t2) {
      return delete this.attributes[t2], this;
    }
    hasAttribute(t2) {
      return void 0 !== this.attributes[t2];
    }
    addGroup(t2, e2, i2 = 0) {
      this.groups.push({ start: t2, count: e2, materialIndex: i2 });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(t2, e2) {
      this.drawRange.start = t2, this.drawRange.count = e2;
    }
    applyMatrix4(t2) {
      const e2 = this.attributes.position;
      void 0 !== e2 && (e2.applyMatrix4(t2), e2.needsUpdate = true);
      const i2 = this.attributes.normal;
      if (void 0 !== i2) {
        const e3 = new gs().getNormalMatrix(t2);
        i2.applyNormalMatrix(e3), i2.needsUpdate = true;
      }
      const s2 = this.attributes.tangent;
      return void 0 !== s2 && (s2.transformDirection(t2), s2.needsUpdate = true), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this;
    }
    applyQuaternion(t2) {
      return In.makeRotationFromQuaternion(t2), this.applyMatrix4(In), this;
    }
    rotateX(t2) {
      return In.makeRotationX(t2), this.applyMatrix4(In), this;
    }
    rotateY(t2) {
      return In.makeRotationY(t2), this.applyMatrix4(In), this;
    }
    rotateZ(t2) {
      return In.makeRotationZ(t2), this.applyMatrix4(In), this;
    }
    translate(t2, e2, i2) {
      return In.makeTranslation(t2, e2, i2), this.applyMatrix4(In), this;
    }
    scale(t2, e2, i2) {
      return In.makeScale(t2, e2, i2), this.applyMatrix4(In), this;
    }
    lookAt(t2) {
      return Bn.lookAt(t2), Bn.updateMatrix(), this.applyMatrix4(Bn.matrix), this;
    }
    center() {
      return this.computeBoundingBox(), this.boundingBox.getCenter(kn).negate(), this.translate(kn.x, kn.y, kn.z), this;
    }
    setFromPoints(t2) {
      const e2 = this.getAttribute("position");
      if (void 0 === e2) {
        const e3 = [];
        for (let i2 = 0, s2 = t2.length; i2 < s2; i2++) {
          const s3 = t2[i2];
          e3.push(s3.x, s3.y, s3.z || 0);
        }
        this.setAttribute("position", new zn(e3, 3));
      } else {
        const i2 = Math.min(t2.length, e2.count);
        for (let s2 = 0; s2 < i2; s2++) {
          const i3 = t2[s2];
          e2.setXYZ(s2, i3.x, i3.y, i3.z || 0);
        }
        t2.length > e2.count && Hi("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), e2.needsUpdate = true;
      }
      return this;
    }
    computeBoundingBox() {
      null === this.boundingBox && (this.boundingBox = new Es());
      const t2 = this.attributes.position, e2 = this.morphAttributes.position;
      if (t2 && t2.isGLBufferAttribute) return Gi("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), void this.boundingBox.set(new ps(-1 / 0, -1 / 0, -1 / 0), new ps(1 / 0, 1 / 0, 1 / 0));
      if (void 0 !== t2) {
        if (this.boundingBox.setFromBufferAttribute(t2), e2) for (let t3 = 0, i2 = e2.length; t3 < i2; t3++) {
          const i3 = e2[t3];
          Pn.setFromBufferAttribute(i3), this.morphTargetsRelative ? (Rn.addVectors(this.boundingBox.min, Pn.min), this.boundingBox.expandByPoint(Rn), Rn.addVectors(this.boundingBox.max, Pn.max), this.boundingBox.expandByPoint(Rn)) : (this.boundingBox.expandByPoint(Pn.min), this.boundingBox.expandByPoint(Pn.max));
        }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && Gi('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    }
    computeBoundingSphere() {
      null === this.boundingSphere && (this.boundingSphere = new sr());
      const t2 = this.attributes.position, e2 = this.morphAttributes.position;
      if (t2 && t2.isGLBufferAttribute) return Gi("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), void this.boundingSphere.set(new ps(), 1 / 0);
      if (t2) {
        const i2 = this.boundingSphere.center;
        if (Pn.setFromBufferAttribute(t2), e2) for (let t3 = 0, i3 = e2.length; t3 < i3; t3++) {
          const i4 = e2[t3];
          On.setFromBufferAttribute(i4), this.morphTargetsRelative ? (Rn.addVectors(Pn.min, On.min), Pn.expandByPoint(Rn), Rn.addVectors(Pn.max, On.max), Pn.expandByPoint(Rn)) : (Pn.expandByPoint(On.min), Pn.expandByPoint(On.max));
        }
        Pn.getCenter(i2);
        let s2 = 0;
        for (let e3 = 0, r2 = t2.count; e3 < r2; e3++) Rn.fromBufferAttribute(t2, e3), s2 = Math.max(s2, i2.distanceToSquared(Rn));
        if (e2) for (let r2 = 0, n2 = e2.length; r2 < n2; r2++) {
          const n3 = e2[r2], a2 = this.morphTargetsRelative;
          for (let e3 = 0, r3 = n3.count; e3 < r3; e3++) Rn.fromBufferAttribute(n3, e3), a2 && (kn.fromBufferAttribute(t2, e3), Rn.add(kn)), s2 = Math.max(s2, i2.distanceToSquared(Rn));
        }
        this.boundingSphere.radius = Math.sqrt(s2), isNaN(this.boundingSphere.radius) && Gi('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
      }
    }
    computeTangents() {
      const t2 = this.index, e2 = this.attributes;
      if (null === t2 || void 0 === e2.position || void 0 === e2.normal || void 0 === e2.uv) return void Gi("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      const i2 = e2.position, s2 = e2.normal, r2 = e2.uv;
      false === this.hasAttribute("tangent") && this.setAttribute("tangent", new xn(new Float32Array(4 * i2.count), 4));
      const n2 = this.getAttribute("tangent"), a2 = [], o2 = [];
      for (let t3 = 0; t3 < i2.count; t3++) a2[t3] = new ps(), o2[t3] = new ps();
      const h2 = new ps(), l2 = new ps(), c2 = new ps(), u2 = new us(), d2 = new us(), p2 = new us(), m2 = new ps(), y2 = new ps();
      function g2(t3, e3, s3) {
        h2.fromBufferAttribute(i2, t3), l2.fromBufferAttribute(i2, e3), c2.fromBufferAttribute(i2, s3), u2.fromBufferAttribute(r2, t3), d2.fromBufferAttribute(r2, e3), p2.fromBufferAttribute(r2, s3), l2.sub(h2), c2.sub(h2), d2.sub(u2), p2.sub(u2);
        const n3 = 1 / (d2.x * p2.y - p2.x * d2.y);
        isFinite(n3) && (m2.copy(l2).multiplyScalar(p2.y).addScaledVector(c2, -d2.y).multiplyScalar(n3), y2.copy(c2).multiplyScalar(d2.x).addScaledVector(l2, -p2.x).multiplyScalar(n3), a2[t3].add(m2), a2[e3].add(m2), a2[s3].add(m2), o2[t3].add(y2), o2[e3].add(y2), o2[s3].add(y2));
      }
      let f2 = this.groups;
      0 === f2.length && (f2 = [{ start: 0, count: t2.count }]);
      for (let e3 = 0, i3 = f2.length; e3 < i3; ++e3) {
        const i4 = f2[e3], s3 = i4.start;
        for (let e4 = s3, r3 = s3 + i4.count; e4 < r3; e4 += 3) g2(t2.getX(e4 + 0), t2.getX(e4 + 1), t2.getX(e4 + 2));
      }
      const x2 = new ps(), b2 = new ps(), v2 = new ps(), w2 = new ps();
      function M2(t3) {
        v2.fromBufferAttribute(s2, t3), w2.copy(v2);
        const e3 = a2[t3];
        x2.copy(e3), x2.sub(v2.multiplyScalar(v2.dot(e3))).normalize(), b2.crossVectors(w2, e3);
        const i3 = b2.dot(o2[t3]) < 0 ? -1 : 1;
        n2.setXYZW(t3, x2.x, x2.y, x2.z, i3);
      }
      for (let e3 = 0, i3 = f2.length; e3 < i3; ++e3) {
        const i4 = f2[e3], s3 = i4.start;
        for (let e4 = s3, r3 = s3 + i4.count; e4 < r3; e4 += 3) M2(t2.getX(e4 + 0)), M2(t2.getX(e4 + 1)), M2(t2.getX(e4 + 2));
      }
    }
    computeVertexNormals() {
      const t2 = this.index, e2 = this.getAttribute("position");
      if (void 0 !== e2) {
        let i2 = this.getAttribute("normal");
        if (void 0 === i2) i2 = new xn(new Float32Array(3 * e2.count), 3), this.setAttribute("normal", i2);
        else for (let t3 = 0, e3 = i2.count; t3 < e3; t3++) i2.setXYZ(t3, 0, 0, 0);
        const s2 = new ps(), r2 = new ps(), n2 = new ps(), a2 = new ps(), o2 = new ps(), h2 = new ps(), l2 = new ps(), c2 = new ps();
        if (t2) for (let u2 = 0, d2 = t2.count; u2 < d2; u2 += 3) {
          const d3 = t2.getX(u2 + 0), p2 = t2.getX(u2 + 1), m2 = t2.getX(u2 + 2);
          s2.fromBufferAttribute(e2, d3), r2.fromBufferAttribute(e2, p2), n2.fromBufferAttribute(e2, m2), l2.subVectors(n2, r2), c2.subVectors(s2, r2), l2.cross(c2), a2.fromBufferAttribute(i2, d3), o2.fromBufferAttribute(i2, p2), h2.fromBufferAttribute(i2, m2), a2.add(l2), o2.add(l2), h2.add(l2), i2.setXYZ(d3, a2.x, a2.y, a2.z), i2.setXYZ(p2, o2.x, o2.y, o2.z), i2.setXYZ(m2, h2.x, h2.y, h2.z);
        }
        else for (let t3 = 0, a3 = e2.count; t3 < a3; t3 += 3) s2.fromBufferAttribute(e2, t3 + 0), r2.fromBufferAttribute(e2, t3 + 1), n2.fromBufferAttribute(e2, t3 + 2), l2.subVectors(n2, r2), c2.subVectors(s2, r2), l2.cross(c2), i2.setXYZ(t3 + 0, l2.x, l2.y, l2.z), i2.setXYZ(t3 + 1, l2.x, l2.y, l2.z), i2.setXYZ(t3 + 2, l2.x, l2.y, l2.z);
        this.normalizeNormals(), i2.needsUpdate = true;
      }
    }
    normalizeNormals() {
      const t2 = this.attributes.normal;
      for (let e2 = 0, i2 = t2.count; e2 < i2; e2++) Rn.fromBufferAttribute(t2, e2), Rn.normalize(), t2.setXYZ(e2, Rn.x, Rn.y, Rn.z);
    }
    toNonIndexed() {
      function t2(t3, e3) {
        const i3 = t3.array, s3 = t3.itemSize, r3 = t3.normalized, n3 = new i3.constructor(e3.length * s3);
        let a2 = 0, o2 = 0;
        for (let r4 = 0, h2 = e3.length; r4 < h2; r4++) {
          a2 = t3.isInterleavedBufferAttribute ? e3[r4] * t3.data.stride + t3.offset : e3[r4] * s3;
          for (let t4 = 0; t4 < s3; t4++) n3[o2++] = i3[a2++];
        }
        return new xn(n3, s3, r3);
      }
      if (null === this.index) return Hi("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
      const e2 = new _Nn(), i2 = this.index.array, s2 = this.attributes;
      for (const r3 in s2) {
        const n3 = t2(s2[r3], i2);
        e2.setAttribute(r3, n3);
      }
      const r2 = this.morphAttributes;
      for (const s3 in r2) {
        const n3 = [], a2 = r2[s3];
        for (let e3 = 0, s4 = a2.length; e3 < s4; e3++) {
          const s5 = t2(a2[e3], i2);
          n3.push(s5);
        }
        e2.morphAttributes[s3] = n3;
      }
      e2.morphTargetsRelative = this.morphTargetsRelative;
      const n2 = this.groups;
      for (let t3 = 0, i3 = n2.length; t3 < i3; t3++) {
        const i4 = n2[t3];
        e2.addGroup(i4.start, i4.count, i4.materialIndex);
      }
      return e2;
    }
    toJSON() {
      const t2 = { metadata: { version: 4.7, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
      if (t2.uuid = this.uuid, t2.type = this.type, "" !== this.name && (t2.name = this.name), Object.keys(this.userData).length > 0 && (t2.userData = this.userData), void 0 !== this.parameters) {
        const e3 = this.parameters;
        for (const i3 in e3) void 0 !== e3[i3] && (t2[i3] = e3[i3]);
        return t2;
      }
      t2.data = { attributes: {} };
      const e2 = this.index;
      null !== e2 && (t2.data.index = { type: e2.array.constructor.name, array: Array.prototype.slice.call(e2.array) });
      const i2 = this.attributes;
      for (const e3 in i2) {
        const s3 = i2[e3];
        t2.data.attributes[e3] = s3.toJSON(t2.data);
      }
      const s2 = {};
      let r2 = false;
      for (const e3 in this.morphAttributes) {
        const i3 = this.morphAttributes[e3], n3 = [];
        for (let e4 = 0, s3 = i3.length; e4 < s3; e4++) {
          const s4 = i3[e4];
          n3.push(s4.toJSON(t2.data));
        }
        n3.length > 0 && (s2[e3] = n3, r2 = true);
      }
      r2 && (t2.data.morphAttributes = s2, t2.data.morphTargetsRelative = this.morphTargetsRelative);
      const n2 = this.groups;
      n2.length > 0 && (t2.data.groups = JSON.parse(JSON.stringify(n2)));
      const a2 = this.boundingSphere;
      return null !== a2 && (t2.data.boundingSphere = a2.toJSON()), t2;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
      const e2 = {};
      this.name = t2.name;
      const i2 = t2.index;
      null !== i2 && this.setIndex(i2.clone());
      const s2 = t2.attributes;
      for (const t3 in s2) {
        const i3 = s2[t3];
        this.setAttribute(t3, i3.clone(e2));
      }
      const r2 = t2.morphAttributes;
      for (const t3 in r2) {
        const i3 = [], s3 = r2[t3];
        for (let t4 = 0, r3 = s3.length; t4 < r3; t4++) i3.push(s3[t4].clone(e2));
        this.morphAttributes[t3] = i3;
      }
      this.morphTargetsRelative = t2.morphTargetsRelative;
      const n2 = t2.groups;
      for (let t3 = 0, e3 = n2.length; t3 < e3; t3++) {
        const e4 = n2[t3];
        this.addGroup(e4.start, e4.count, e4.materialIndex);
      }
      const a2 = t2.boundingBox;
      null !== a2 && (this.boundingBox = a2.clone());
      const o2 = t2.boundingSphere;
      return null !== o2 && (this.boundingSphere = o2.clone()), this.drawRange.start = t2.drawRange.start, this.drawRange.count = t2.drawRange.count, this.userData = t2.userData, this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  };
  var Vn = new dr();
  var Fn = new ur();
  var Ln = new sr();
  var En = new ps();
  var jn = new ps();
  var Dn = new ps();
  var Wn = new ps();
  var Un = new ps();
  var qn = new ps();
  var Jn = new ps();
  var Xn = new ps();
  var Yn = class extends Er {
    constructor(t2 = new Nn(), e2 = new ln()) {
      super(), this.isMesh = true, this.type = "Mesh", this.geometry = t2, this.material = e2, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
    }
    copy(t2, e2) {
      return super.copy(t2, e2), void 0 !== t2.morphTargetInfluences && (this.morphTargetInfluences = t2.morphTargetInfluences.slice()), void 0 !== t2.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t2.morphTargetDictionary)), this.material = Array.isArray(t2.material) ? t2.material.slice() : t2.material, this.geometry = t2.geometry, this;
    }
    updateMorphTargets() {
      const t2 = this.geometry.morphAttributes, e2 = Object.keys(t2);
      if (e2.length > 0) {
        const i2 = t2[e2[0]];
        if (void 0 !== i2) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let t3 = 0, e3 = i2.length; t3 < e3; t3++) {
            const e4 = i2[t3].name || String(t3);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[e4] = t3;
          }
        }
      }
    }
    getVertexPosition(t2, e2) {
      const i2 = this.geometry, s2 = i2.attributes.position, r2 = i2.morphAttributes.position, n2 = i2.morphTargetsRelative;
      e2.fromBufferAttribute(s2, t2);
      const a2 = this.morphTargetInfluences;
      if (r2 && a2) {
        qn.set(0, 0, 0);
        for (let i3 = 0, s3 = r2.length; i3 < s3; i3++) {
          const s4 = a2[i3], o2 = r2[i3];
          0 !== s4 && (Un.fromBufferAttribute(o2, t2), n2 ? qn.addScaledVector(Un, s4) : qn.addScaledVector(Un.sub(e2), s4));
        }
        e2.add(qn);
      }
      return e2;
    }
    raycast(t2, e2) {
      const i2 = this.geometry, s2 = this.material, r2 = this.matrixWorld;
      if (void 0 !== s2) {
        if (null === i2.boundingSphere && i2.computeBoundingSphere(), Ln.copy(i2.boundingSphere), Ln.applyMatrix4(r2), Fn.copy(t2.ray).recast(t2.near), false === Ln.containsPoint(Fn.origin)) {
          if (null === Fn.intersectSphere(Ln, En)) return;
          if (Fn.origin.distanceToSquared(En) > (t2.far - t2.near) ** 2) return;
        }
        Vn.copy(r2).invert(), Fn.copy(t2.ray).applyMatrix4(Vn), null !== i2.boundingBox && false === Fn.intersectsBox(i2.boundingBox) || this._computeIntersections(t2, e2, Fn);
      }
    }
    _computeIntersections(t2, e2, i2) {
      let s2;
      const r2 = this.geometry, n2 = this.material, a2 = r2.index, o2 = r2.attributes.position, h2 = r2.attributes.uv, l2 = r2.attributes.uv1, c2 = r2.attributes.normal, u2 = r2.groups, d2 = r2.drawRange;
      if (null !== a2) if (Array.isArray(n2)) for (let r3 = 0, o3 = u2.length; r3 < o3; r3++) {
        const o4 = u2[r3], p2 = n2[o4.materialIndex];
        for (let r4 = Math.max(o4.start, d2.start), n3 = Math.min(a2.count, Math.min(o4.start + o4.count, d2.start + d2.count)); r4 < n3; r4 += 3) {
          s2 = Zn(this, p2, t2, i2, h2, l2, c2, a2.getX(r4), a2.getX(r4 + 1), a2.getX(r4 + 2)), s2 && (s2.faceIndex = Math.floor(r4 / 3), s2.face.materialIndex = o4.materialIndex, e2.push(s2));
        }
      }
      else {
        for (let r3 = Math.max(0, d2.start), o3 = Math.min(a2.count, d2.start + d2.count); r3 < o3; r3 += 3) {
          s2 = Zn(this, n2, t2, i2, h2, l2, c2, a2.getX(r3), a2.getX(r3 + 1), a2.getX(r3 + 2)), s2 && (s2.faceIndex = Math.floor(r3 / 3), e2.push(s2));
        }
      }
      else if (void 0 !== o2) if (Array.isArray(n2)) for (let r3 = 0, a3 = u2.length; r3 < a3; r3++) {
        const a4 = u2[r3], p2 = n2[a4.materialIndex];
        for (let r4 = Math.max(a4.start, d2.start), n3 = Math.min(o2.count, Math.min(a4.start + a4.count, d2.start + d2.count)); r4 < n3; r4 += 3) {
          s2 = Zn(this, p2, t2, i2, h2, l2, c2, r4, r4 + 1, r4 + 2), s2 && (s2.faceIndex = Math.floor(r4 / 3), s2.face.materialIndex = a4.materialIndex, e2.push(s2));
        }
      }
      else {
        for (let r3 = Math.max(0, d2.start), a3 = Math.min(o2.count, d2.start + d2.count); r3 < a3; r3 += 3) {
          s2 = Zn(this, n2, t2, i2, h2, l2, c2, r3, r3 + 1, r3 + 2), s2 && (s2.faceIndex = Math.floor(r3 / 3), e2.push(s2));
        }
      }
    }
  };
  function Zn(t2, e2, i2, s2, r2, n2, a2, o2, h2, l2) {
    t2.getVertexPosition(o2, jn), t2.getVertexPosition(h2, Dn), t2.getVertexPosition(l2, Wn);
    const c2 = (function(t3, e3, i3, s3, r3, n3, a3, o3) {
      let h3;
      if (h3 = 1 === e3.side ? s3.intersectTriangle(a3, n3, r3, true, o3) : s3.intersectTriangle(r3, n3, a3, 0 === e3.side, o3), null === h3) return null;
      Xn.copy(o3), Xn.applyMatrix4(t3.matrixWorld);
      const l3 = i3.ray.origin.distanceTo(Xn);
      return l3 < i3.near || l3 > i3.far ? null : { distance: l3, point: Xn.clone(), object: t3 };
    })(t2, e2, i2, s2, jn, Dn, Wn, Jn);
    if (c2) {
      const t3 = new ps();
      Kr.getBarycoord(Jn, jn, Dn, Wn, t3), r2 && (c2.uv = Kr.getInterpolatedAttribute(r2, o2, h2, l2, t3, new us())), n2 && (c2.uv1 = Kr.getInterpolatedAttribute(n2, o2, h2, l2, t3, new us())), a2 && (c2.normal = Kr.getInterpolatedAttribute(a2, o2, h2, l2, t3, new ps()), c2.normal.dot(s2.direction) > 0 && c2.normal.multiplyScalar(-1));
      const e3 = { a: o2, b: h2, c: l2, normal: new ps(), materialIndex: 0 };
      Kr.getNormal(jn, Dn, Wn, e3.normal), c2.face = e3, c2.barycoord = t3;
    }
    return c2;
  }
  var Hn = class _Hn extends Nn {
    constructor(t2 = 1, e2 = 1, i2 = 1, s2 = 1, r2 = 1, n2 = 1) {
      super(), this.type = "BoxGeometry", this.parameters = { width: t2, height: e2, depth: i2, widthSegments: s2, heightSegments: r2, depthSegments: n2 };
      const a2 = this;
      s2 = Math.floor(s2), r2 = Math.floor(r2), n2 = Math.floor(n2);
      const o2 = [], h2 = [], l2 = [], c2 = [];
      let u2 = 0, d2 = 0;
      function p2(t3, e3, i3, s3, r3, n3, p3, m2, y2, g2, f2) {
        const x2 = n3 / y2, b2 = p3 / g2, v2 = n3 / 2, w2 = p3 / 2, M2 = m2 / 2, S2 = y2 + 1, _2 = g2 + 1;
        let A2 = 0, T2 = 0;
        const z2 = new ps();
        for (let n4 = 0; n4 < _2; n4++) {
          const a3 = n4 * b2 - w2;
          for (let o3 = 0; o3 < S2; o3++) {
            const u3 = o3 * x2 - v2;
            z2[t3] = u3 * s3, z2[e3] = a3 * r3, z2[i3] = M2, h2.push(z2.x, z2.y, z2.z), z2[t3] = 0, z2[e3] = 0, z2[i3] = m2 > 0 ? 1 : -1, l2.push(z2.x, z2.y, z2.z), c2.push(o3 / y2), c2.push(1 - n4 / g2), A2 += 1;
          }
        }
        for (let t4 = 0; t4 < g2; t4++) for (let e4 = 0; e4 < y2; e4++) {
          const i4 = u2 + e4 + S2 * t4, s4 = u2 + e4 + S2 * (t4 + 1), r4 = u2 + (e4 + 1) + S2 * (t4 + 1), n4 = u2 + (e4 + 1) + S2 * t4;
          o2.push(i4, s4, n4), o2.push(s4, r4, n4), T2 += 6;
        }
        a2.addGroup(d2, T2, f2), d2 += T2, u2 += A2;
      }
      p2("z", "y", "x", -1, -1, i2, e2, t2, n2, r2, 0), p2("z", "y", "x", 1, -1, i2, e2, -t2, n2, r2, 1), p2("x", "z", "y", 1, 1, t2, i2, e2, s2, n2, 2), p2("x", "z", "y", 1, -1, t2, i2, -e2, s2, n2, 3), p2("x", "y", "z", 1, -1, t2, e2, i2, s2, r2, 4), p2("x", "y", "z", -1, -1, t2, e2, -i2, s2, r2, 5), this.setIndex(o2), this.setAttribute("position", new zn(h2, 3)), this.setAttribute("normal", new zn(l2, 3)), this.setAttribute("uv", new zn(c2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _Hn(t2.width, t2.height, t2.depth, t2.widthSegments, t2.heightSegments, t2.depthSegments);
    }
  };
  function Gn(t2) {
    const e2 = {};
    for (const i2 in t2) {
      e2[i2] = {};
      for (const s2 in t2[i2]) {
        const r2 = t2[i2][s2];
        r2 && (r2.isColor || r2.isMatrix3 || r2.isMatrix4 || r2.isVector2 || r2.isVector3 || r2.isVector4 || r2.isTexture || r2.isQuaternion) ? r2.isRenderTargetTexture ? (Hi("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e2[i2][s2] = null) : e2[i2][s2] = r2.clone() : Array.isArray(r2) ? e2[i2][s2] = r2.slice() : e2[i2][s2] = r2;
      }
    }
    return e2;
  }
  function $n(t2) {
    const e2 = {};
    for (let i2 = 0; i2 < t2.length; i2++) {
      const s2 = Gn(t2[i2]);
      for (const t3 in s2) e2[t3] = s2[t3];
    }
    return e2;
  }
  function Qn(t2) {
    const e2 = t2.getRenderTarget();
    return null === e2 ? t2.outputColorSpace : true === e2.isXRRenderTarget ? e2.texture.colorSpace : ws.workingColorSpace;
  }
  var Kn = { clone: Gn, merge: $n };
  var ta = class extends hn {
    constructor(t2) {
      super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, void 0 !== t2 && this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.fragmentShader = t2.fragmentShader, this.vertexShader = t2.vertexShader, this.uniforms = Gn(t2.uniforms), this.uniformsGroups = (function(t3) {
        const e2 = [];
        for (let i2 = 0; i2 < t3.length; i2++) e2.push(t3[i2].clone());
        return e2;
      })(t2.uniformsGroups), this.defines = Object.assign({}, t2.defines), this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.fog = t2.fog, this.lights = t2.lights, this.clipping = t2.clipping, this.extensions = Object.assign({}, t2.extensions), this.glslVersion = t2.glslVersion, this;
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      e2.glslVersion = this.glslVersion, e2.uniforms = {};
      for (const i3 in this.uniforms) {
        const s2 = this.uniforms[i3].value;
        s2 && s2.isTexture ? e2.uniforms[i3] = { type: "t", value: s2.toJSON(t2).uuid } : s2 && s2.isColor ? e2.uniforms[i3] = { type: "c", value: s2.getHex() } : s2 && s2.isVector2 ? e2.uniforms[i3] = { type: "v2", value: s2.toArray() } : s2 && s2.isVector3 ? e2.uniforms[i3] = { type: "v3", value: s2.toArray() } : s2 && s2.isVector4 ? e2.uniforms[i3] = { type: "v4", value: s2.toArray() } : s2 && s2.isMatrix3 ? e2.uniforms[i3] = { type: "m3", value: s2.toArray() } : s2 && s2.isMatrix4 ? e2.uniforms[i3] = { type: "m4", value: s2.toArray() } : e2.uniforms[i3] = { value: s2 };
      }
      Object.keys(this.defines).length > 0 && (e2.defines = this.defines), e2.vertexShader = this.vertexShader, e2.fragmentShader = this.fragmentShader, e2.lights = this.lights, e2.clipping = this.clipping;
      const i2 = {};
      for (const t3 in this.extensions) true === this.extensions[t3] && (i2[t3] = true);
      return Object.keys(i2).length > 0 && (e2.extensions = i2), e2;
    }
  };
  var ea = class extends Er {
    constructor() {
      super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new dr(), this.projectionMatrix = new dr(), this.projectionMatrixInverse = new dr(), this.coordinateSystem = Ri, this._reversedDepth = false;
    }
    get reversedDepth() {
      return this._reversedDepth;
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.matrixWorldInverse.copy(t2.matrixWorldInverse), this.projectionMatrix.copy(t2.projectionMatrix), this.projectionMatrixInverse.copy(t2.projectionMatrixInverse), this.coordinateSystem = t2.coordinateSystem, this;
    }
    getWorldDirection(t2) {
      return super.getWorldDirection(t2).negate();
    }
    updateMatrixWorld(t2) {
      super.updateMatrixWorld(t2), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    updateWorldMatrix(t2, e2) {
      super.updateWorldMatrix(t2, e2), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var ia = new ps();
  var sa = new us();
  var ra = new us();
  var na = class extends ea {
    constructor(t2 = 50, e2 = 1, i2 = 0.1, s2 = 2e3) {
      super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = t2, this.zoom = 1, this.near = i2, this.far = s2, this.focus = 10, this.aspect = e2, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.fov = t2.fov, this.zoom = t2.zoom, this.near = t2.near, this.far = t2.far, this.focus = t2.focus, this.aspect = t2.aspect, this.view = null === t2.view ? null : Object.assign({}, t2.view), this.filmGauge = t2.filmGauge, this.filmOffset = t2.filmOffset, this;
    }
    setFocalLength(t2) {
      const e2 = 0.5 * this.getFilmHeight() / t2;
      this.fov = 2 * ss * Math.atan(e2), this.updateProjectionMatrix();
    }
    getFocalLength() {
      const t2 = Math.tan(0.5 * is * this.fov);
      return 0.5 * this.getFilmHeight() / t2;
    }
    getEffectiveFOV() {
      return 2 * ss * Math.atan(Math.tan(0.5 * is * this.fov) / this.zoom);
    }
    getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    }
    getViewBounds(t2, e2, i2) {
      ia.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e2.set(ia.x, ia.y).multiplyScalar(-t2 / ia.z), ia.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), i2.set(ia.x, ia.y).multiplyScalar(-t2 / ia.z);
    }
    getViewSize(t2, e2) {
      return this.getViewBounds(t2, sa, ra), e2.subVectors(ra, sa);
    }
    setViewOffset(t2, e2, i2, s2, r2, n2) {
      this.aspect = t2 / e2, null === this.view && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t2, this.view.fullHeight = e2, this.view.offsetX = i2, this.view.offsetY = s2, this.view.width = r2, this.view.height = n2, this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = false), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const t2 = this.near;
      let e2 = t2 * Math.tan(0.5 * is * this.fov) / this.zoom, i2 = 2 * e2, s2 = this.aspect * i2, r2 = -0.5 * s2;
      const n2 = this.view;
      if (null !== this.view && this.view.enabled) {
        const t3 = n2.fullWidth, a3 = n2.fullHeight;
        r2 += n2.offsetX * s2 / t3, e2 -= n2.offsetY * i2 / a3, s2 *= n2.width / t3, i2 *= n2.height / a3;
      }
      const a2 = this.filmOffset;
      0 !== a2 && (r2 += t2 * a2 / this.getFilmWidth()), this.projectionMatrix.makePerspective(r2, r2 + s2, e2, e2 - i2, t2, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      return e2.object.fov = this.fov, e2.object.zoom = this.zoom, e2.object.near = this.near, e2.object.far = this.far, e2.object.focus = this.focus, e2.object.aspect = this.aspect, null !== this.view && (e2.object.view = Object.assign({}, this.view)), e2.object.filmGauge = this.filmGauge, e2.object.filmOffset = this.filmOffset, e2;
    }
  };
  var aa = -90;
  var oa = class extends Er {
    constructor(t2, e2, i2) {
      super(), this.type = "CubeCamera", this.renderTarget = i2, this.coordinateSystem = null, this.activeMipmapLevel = 0;
      const s2 = new na(aa, 1, t2, e2);
      s2.layers = this.layers, this.add(s2);
      const r2 = new na(aa, 1, t2, e2);
      r2.layers = this.layers, this.add(r2);
      const n2 = new na(aa, 1, t2, e2);
      n2.layers = this.layers, this.add(n2);
      const a2 = new na(aa, 1, t2, e2);
      a2.layers = this.layers, this.add(a2);
      const o2 = new na(aa, 1, t2, e2);
      o2.layers = this.layers, this.add(o2);
      const h2 = new na(aa, 1, t2, e2);
      h2.layers = this.layers, this.add(h2);
    }
    updateCoordinateSystem() {
      const t2 = this.coordinateSystem, e2 = this.children.concat(), [i2, s2, r2, n2, a2, o2] = e2;
      for (const t3 of e2) this.remove(t3);
      if (t2 === Ri) i2.up.set(0, 1, 0), i2.lookAt(1, 0, 0), s2.up.set(0, 1, 0), s2.lookAt(-1, 0, 0), r2.up.set(0, 0, -1), r2.lookAt(0, 1, 0), n2.up.set(0, 0, 1), n2.lookAt(0, -1, 0), a2.up.set(0, 1, 0), a2.lookAt(0, 0, 1), o2.up.set(0, 1, 0), o2.lookAt(0, 0, -1);
      else {
        if (t2 !== Ni) throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t2);
        i2.up.set(0, -1, 0), i2.lookAt(-1, 0, 0), s2.up.set(0, -1, 0), s2.lookAt(1, 0, 0), r2.up.set(0, 0, 1), r2.lookAt(0, 1, 0), n2.up.set(0, 0, -1), n2.lookAt(0, -1, 0), a2.up.set(0, -1, 0), a2.lookAt(0, 0, 1), o2.up.set(0, -1, 0), o2.lookAt(0, 0, -1);
      }
      for (const t3 of e2) this.add(t3), t3.updateMatrixWorld();
    }
    update(t2, e2) {
      null === this.parent && this.updateMatrixWorld();
      const { renderTarget: i2, activeMipmapLevel: s2 } = this;
      this.coordinateSystem !== t2.coordinateSystem && (this.coordinateSystem = t2.coordinateSystem, this.updateCoordinateSystem());
      const [r2, n2, a2, o2, h2, l2] = this.children, c2 = t2.getRenderTarget(), u2 = t2.getActiveCubeFace(), d2 = t2.getActiveMipmapLevel(), p2 = t2.xr.enabled;
      t2.xr.enabled = false;
      const m2 = i2.texture.generateMipmaps;
      i2.texture.generateMipmaps = false, t2.setRenderTarget(i2, 0, s2), t2.render(e2, r2), t2.setRenderTarget(i2, 1, s2), t2.render(e2, n2), t2.setRenderTarget(i2, 2, s2), t2.render(e2, a2), t2.setRenderTarget(i2, 3, s2), t2.render(e2, o2), t2.setRenderTarget(i2, 4, s2), t2.render(e2, h2), i2.texture.generateMipmaps = m2, t2.setRenderTarget(i2, 5, s2), t2.render(e2, l2), t2.setRenderTarget(c2, u2, d2), t2.xr.enabled = p2, i2.texture.needsPMREMUpdate = true;
    }
  };
  var ha = class extends ks {
    constructor(t2 = [], e2 = 301, i2, s2, r2, n2, a2, o2, h2, l2) {
      super(t2, e2, i2, s2, r2, n2, a2, o2, h2, l2), this.isCubeTexture = true, this.flipY = false;
    }
    get images() {
      return this.image;
    }
    set images(t2) {
      this.image = t2;
    }
  };
  var la = class extends Rs {
    constructor(t2 = 1, e2 = {}) {
      super(t2, t2, e2), this.isWebGLCubeRenderTarget = true;
      const i2 = { width: t2, height: t2, depth: 1 }, s2 = [i2, i2, i2, i2, i2, i2];
      this.texture = new ha(s2), this._setTextureOptions(e2), this.texture.isRenderTargetTexture = true;
    }
    fromEquirectangularTexture(t2, e2) {
      this.texture.type = e2.type, this.texture.colorSpace = e2.colorSpace, this.texture.generateMipmaps = e2.generateMipmaps, this.texture.minFilter = e2.minFilter, this.texture.magFilter = e2.magFilter;
      const i2 = { uniforms: { tEquirect: { value: null } }, vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			", fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			" }, s2 = new Hn(5, 5, 5), r2 = new ta({ name: "CubemapFromEquirect", uniforms: Gn(i2.uniforms), vertexShader: i2.vertexShader, fragmentShader: i2.fragmentShader, side: 1, blending: 0 });
      r2.uniforms.tEquirect.value = e2;
      const n2 = new Yn(s2, r2), a2 = e2.minFilter;
      e2.minFilter === _t && (e2.minFilter = wt);
      return new oa(1, 10, this).update(t2, n2), e2.minFilter = a2, n2.geometry.dispose(), n2.material.dispose(), this;
    }
    clear(t2, e2 = true, i2 = true, s2 = true) {
      const r2 = t2.getRenderTarget();
      for (let r3 = 0; r3 < 6; r3++) t2.setRenderTarget(this, r3), t2.clear(e2, i2, s2);
      t2.setRenderTarget(r2);
    }
  };
  var ca = class extends Er {
    constructor() {
      super(), this.isGroup = true, this.type = "Group";
    }
  };
  var ua = { type: "move" };
  var da = class {
    constructor() {
      this._targetRay = null, this._grip = null, this._hand = null;
    }
    getHandSpace() {
      return null === this._hand && (this._hand = new ca(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
    }
    getTargetRaySpace() {
      return null === this._targetRay && (this._targetRay = new ca(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new ps(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new ps()), this._targetRay;
    }
    getGripSpace() {
      return null === this._grip && (this._grip = new ca(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new ps(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new ps()), this._grip;
    }
    dispatchEvent(t2) {
      return null !== this._targetRay && this._targetRay.dispatchEvent(t2), null !== this._grip && this._grip.dispatchEvent(t2), null !== this._hand && this._hand.dispatchEvent(t2), this;
    }
    connect(t2) {
      if (t2 && t2.hand) {
        const e2 = this._hand;
        if (e2) for (const i2 of t2.hand.values()) this._getHandJoint(e2, i2);
      }
      return this.dispatchEvent({ type: "connected", data: t2 }), this;
    }
    disconnect(t2) {
      return this.dispatchEvent({ type: "disconnected", data: t2 }), null !== this._targetRay && (this._targetRay.visible = false), null !== this._grip && (this._grip.visible = false), null !== this._hand && (this._hand.visible = false), this;
    }
    update(t2, e2, i2) {
      let s2 = null, r2 = null, n2 = null;
      const a2 = this._targetRay, o2 = this._grip, h2 = this._hand;
      if (t2 && "visible-blurred" !== e2.session.visibilityState) {
        if (h2 && t2.hand) {
          n2 = true;
          for (const s4 of t2.hand.values()) {
            const t3 = e2.getJointPose(s4, i2), r4 = this._getHandJoint(h2, s4);
            null !== t3 && (r4.matrix.fromArray(t3.transform.matrix), r4.matrix.decompose(r4.position, r4.rotation, r4.scale), r4.matrixWorldNeedsUpdate = true, r4.jointRadius = t3.radius), r4.visible = null !== t3;
          }
          const s3 = h2.joints["index-finger-tip"], r3 = h2.joints["thumb-tip"], a3 = s3.position.distanceTo(r3.position), o3 = 0.02, l2 = 5e-3;
          h2.inputState.pinching && a3 > o3 + l2 ? (h2.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: t2.handedness, target: this })) : !h2.inputState.pinching && a3 <= o3 - l2 && (h2.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: t2.handedness, target: this }));
        } else null !== o2 && t2.gripSpace && (r2 = e2.getPose(t2.gripSpace, i2), null !== r2 && (o2.matrix.fromArray(r2.transform.matrix), o2.matrix.decompose(o2.position, o2.rotation, o2.scale), o2.matrixWorldNeedsUpdate = true, r2.linearVelocity ? (o2.hasLinearVelocity = true, o2.linearVelocity.copy(r2.linearVelocity)) : o2.hasLinearVelocity = false, r2.angularVelocity ? (o2.hasAngularVelocity = true, o2.angularVelocity.copy(r2.angularVelocity)) : o2.hasAngularVelocity = false));
        null !== a2 && (s2 = e2.getPose(t2.targetRaySpace, i2), null === s2 && null !== r2 && (s2 = r2), null !== s2 && (a2.matrix.fromArray(s2.transform.matrix), a2.matrix.decompose(a2.position, a2.rotation, a2.scale), a2.matrixWorldNeedsUpdate = true, s2.linearVelocity ? (a2.hasLinearVelocity = true, a2.linearVelocity.copy(s2.linearVelocity)) : a2.hasLinearVelocity = false, s2.angularVelocity ? (a2.hasAngularVelocity = true, a2.angularVelocity.copy(s2.angularVelocity)) : a2.hasAngularVelocity = false, this.dispatchEvent(ua)));
      }
      return null !== a2 && (a2.visible = null !== s2), null !== o2 && (o2.visible = null !== r2), null !== h2 && (h2.visible = null !== n2), this;
    }
    _getHandJoint(t2, e2) {
      if (void 0 === t2.joints[e2.jointName]) {
        const i2 = new ca();
        i2.matrixAutoUpdate = false, i2.visible = false, t2.joints[e2.jointName] = i2, t2.add(i2);
      }
      return t2.joints[e2.jointName];
    }
  };
  var ya = class extends Er {
    constructor() {
      super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Mr(), this.environmentIntensity = 1, this.environmentRotation = new Mr(), this.overrideMaterial = null, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
    copy(t2, e2) {
      return super.copy(t2, e2), null !== t2.background && (this.background = t2.background.clone()), null !== t2.environment && (this.environment = t2.environment.clone()), null !== t2.fog && (this.fog = t2.fog.clone()), this.backgroundBlurriness = t2.backgroundBlurriness, this.backgroundIntensity = t2.backgroundIntensity, this.backgroundRotation.copy(t2.backgroundRotation), this.environmentIntensity = t2.environmentIntensity, this.environmentRotation.copy(t2.environmentRotation), null !== t2.overrideMaterial && (this.overrideMaterial = t2.overrideMaterial.clone()), this.matrixAutoUpdate = t2.matrixAutoUpdate, this;
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      return null !== this.fog && (e2.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e2.object.backgroundBlurriness = this.backgroundBlurriness), 1 !== this.backgroundIntensity && (e2.object.backgroundIntensity = this.backgroundIntensity), e2.object.backgroundRotation = this.backgroundRotation.toArray(), 1 !== this.environmentIntensity && (e2.object.environmentIntensity = this.environmentIntensity), e2.object.environmentRotation = this.environmentRotation.toArray(), e2;
    }
  };
  var fa = new ps();
  var wa = new ps();
  var Ma = new ps();
  var Sa = new ps();
  var _a = new us();
  var Aa = new us();
  var Ta = new dr();
  var za = new ps();
  var Ca = new ps();
  var Ia = new ps();
  var Ba = new us();
  var ka = new us();
  var Pa = new us();
  var Na = new ps();
  var Va = new ps();
  var La = new ps();
  var Ea = new Ps();
  var ja = new Ps();
  var Da = new ps();
  var Wa = new dr();
  var Ua = new ps();
  var qa = new sr();
  var Ja = new dr();
  var Xa = new ur();
  var Ha = class extends ks {
    constructor(t2 = null, e2 = 1, i2 = 1, s2, r2, n2, a2, o2, h2 = 1003, l2 = 1003, c2, u2) {
      super(null, n2, a2, o2, h2, l2, s2, r2, c2, u2), this.isDataTexture = true, this.image = { data: t2, width: e2, height: i2 }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
    }
  };
  var Ga = new dr();
  var $a = new dr();
  var to = new dr();
  var eo = new dr();
  var so = new Es();
  var ro = new dr();
  var no = new Yn();
  var ao = new sr();
  var ho = new ps();
  var lo = new ps();
  var co = new gs();
  var uo = class {
    constructor(t2 = new ps(1, 0, 0), e2 = 0) {
      this.isPlane = true, this.normal = t2, this.constant = e2;
    }
    set(t2, e2) {
      return this.normal.copy(t2), this.constant = e2, this;
    }
    setComponents(t2, e2, i2, s2) {
      return this.normal.set(t2, e2, i2), this.constant = s2, this;
    }
    setFromNormalAndCoplanarPoint(t2, e2) {
      return this.normal.copy(t2), this.constant = -e2.dot(this.normal), this;
    }
    setFromCoplanarPoints(t2, e2, i2) {
      const s2 = ho.subVectors(i2, e2).cross(lo.subVectors(t2, e2)).normalize();
      return this.setFromNormalAndCoplanarPoint(s2, t2), this;
    }
    copy(t2) {
      return this.normal.copy(t2.normal), this.constant = t2.constant, this;
    }
    normalize() {
      const t2 = 1 / this.normal.length();
      return this.normal.multiplyScalar(t2), this.constant *= t2, this;
    }
    negate() {
      return this.constant *= -1, this.normal.negate(), this;
    }
    distanceToPoint(t2) {
      return this.normal.dot(t2) + this.constant;
    }
    distanceToSphere(t2) {
      return this.distanceToPoint(t2.center) - t2.radius;
    }
    projectPoint(t2, e2) {
      return e2.copy(t2).addScaledVector(this.normal, -this.distanceToPoint(t2));
    }
    intersectLine(t2, e2) {
      const i2 = t2.delta(ho), s2 = this.normal.dot(i2);
      if (0 === s2) return 0 === this.distanceToPoint(t2.start) ? e2.copy(t2.start) : null;
      const r2 = -(t2.start.dot(this.normal) + this.constant) / s2;
      return r2 < 0 || r2 > 1 ? null : e2.copy(t2.start).addScaledVector(i2, r2);
    }
    intersectsLine(t2) {
      const e2 = this.distanceToPoint(t2.start), i2 = this.distanceToPoint(t2.end);
      return e2 < 0 && i2 > 0 || i2 < 0 && e2 > 0;
    }
    intersectsBox(t2) {
      return t2.intersectsPlane(this);
    }
    intersectsSphere(t2) {
      return t2.intersectsPlane(this);
    }
    coplanarPoint(t2) {
      return t2.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(t2, e2) {
      const i2 = e2 || co.getNormalMatrix(t2), s2 = this.coplanarPoint(ho).applyMatrix4(t2), r2 = this.normal.applyMatrix3(i2).normalize();
      return this.constant = -s2.dot(r2), this;
    }
    translate(t2) {
      return this.constant -= t2.dot(this.normal), this;
    }
    equals(t2) {
      return t2.normal.equals(this.normal) && t2.constant === this.constant;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var po = new sr();
  var mo = new us(0.5, 0.5);
  var yo = new ps();
  var go = class {
    constructor(t2 = new uo(), e2 = new uo(), i2 = new uo(), s2 = new uo(), r2 = new uo(), n2 = new uo()) {
      this.planes = [t2, e2, i2, s2, r2, n2];
    }
    set(t2, e2, i2, s2, r2, n2) {
      const a2 = this.planes;
      return a2[0].copy(t2), a2[1].copy(e2), a2[2].copy(i2), a2[3].copy(s2), a2[4].copy(r2), a2[5].copy(n2), this;
    }
    copy(t2) {
      const e2 = this.planes;
      for (let i2 = 0; i2 < 6; i2++) e2[i2].copy(t2.planes[i2]);
      return this;
    }
    setFromProjectionMatrix(t2, e2 = 2e3, i2 = false) {
      const s2 = this.planes, r2 = t2.elements, n2 = r2[0], a2 = r2[1], o2 = r2[2], h2 = r2[3], l2 = r2[4], c2 = r2[5], u2 = r2[6], d2 = r2[7], p2 = r2[8], m2 = r2[9], y2 = r2[10], g2 = r2[11], f2 = r2[12], x2 = r2[13], b2 = r2[14], v2 = r2[15];
      if (s2[0].setComponents(h2 - n2, d2 - l2, g2 - p2, v2 - f2).normalize(), s2[1].setComponents(h2 + n2, d2 + l2, g2 + p2, v2 + f2).normalize(), s2[2].setComponents(h2 + a2, d2 + c2, g2 + m2, v2 + x2).normalize(), s2[3].setComponents(h2 - a2, d2 - c2, g2 - m2, v2 - x2).normalize(), i2) s2[4].setComponents(o2, u2, y2, b2).normalize(), s2[5].setComponents(h2 - o2, d2 - u2, g2 - y2, v2 - b2).normalize();
      else if (s2[4].setComponents(h2 - o2, d2 - u2, g2 - y2, v2 - b2).normalize(), e2 === Ri) s2[5].setComponents(h2 + o2, d2 + u2, g2 + y2, v2 + b2).normalize();
      else {
        if (e2 !== Ni) throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e2);
        s2[5].setComponents(o2, u2, y2, b2).normalize();
      }
      return this;
    }
    intersectsObject(t2) {
      if (void 0 !== t2.boundingSphere) null === t2.boundingSphere && t2.computeBoundingSphere(), po.copy(t2.boundingSphere).applyMatrix4(t2.matrixWorld);
      else {
        const e2 = t2.geometry;
        null === e2.boundingSphere && e2.computeBoundingSphere(), po.copy(e2.boundingSphere).applyMatrix4(t2.matrixWorld);
      }
      return this.intersectsSphere(po);
    }
    intersectsSprite(t2) {
      po.center.set(0, 0, 0);
      const e2 = mo.distanceTo(t2.center);
      return po.radius = 0.7071067811865476 + e2, po.applyMatrix4(t2.matrixWorld), this.intersectsSphere(po);
    }
    intersectsSphere(t2) {
      const e2 = this.planes, i2 = t2.center, s2 = -t2.radius;
      for (let t3 = 0; t3 < 6; t3++) {
        if (e2[t3].distanceToPoint(i2) < s2) return false;
      }
      return true;
    }
    intersectsBox(t2) {
      const e2 = this.planes;
      for (let i2 = 0; i2 < 6; i2++) {
        const s2 = e2[i2];
        if (yo.x = s2.normal.x > 0 ? t2.max.x : t2.min.x, yo.y = s2.normal.y > 0 ? t2.max.y : t2.min.y, yo.z = s2.normal.z > 0 ? t2.max.z : t2.min.z, s2.distanceToPoint(yo) < 0) return false;
      }
      return true;
    }
    containsPoint(t2) {
      const e2 = this.planes;
      for (let i2 = 0; i2 < 6; i2++) if (e2[i2].distanceToPoint(t2) < 0) return false;
      return true;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var fo = new dr();
  var xo = new go();
  var bo = class _bo {
    constructor() {
      this.coordinateSystem = Ri;
    }
    intersectsObject(t2, e2) {
      if (!e2.isArrayCamera || 0 === e2.cameras.length) return false;
      for (let i2 = 0; i2 < e2.cameras.length; i2++) {
        const s2 = e2.cameras[i2];
        if (fo.multiplyMatrices(s2.projectionMatrix, s2.matrixWorldInverse), xo.setFromProjectionMatrix(fo, s2.coordinateSystem, s2.reversedDepth), xo.intersectsObject(t2)) return true;
      }
      return false;
    }
    intersectsSprite(t2, e2) {
      if (!e2 || !e2.cameras || 0 === e2.cameras.length) return false;
      for (let i2 = 0; i2 < e2.cameras.length; i2++) {
        const s2 = e2.cameras[i2];
        if (fo.multiplyMatrices(s2.projectionMatrix, s2.matrixWorldInverse), xo.setFromProjectionMatrix(fo, s2.coordinateSystem, s2.reversedDepth), xo.intersectsSprite(t2)) return true;
      }
      return false;
    }
    intersectsSphere(t2, e2) {
      if (!e2 || !e2.cameras || 0 === e2.cameras.length) return false;
      for (let i2 = 0; i2 < e2.cameras.length; i2++) {
        const s2 = e2.cameras[i2];
        if (fo.multiplyMatrices(s2.projectionMatrix, s2.matrixWorldInverse), xo.setFromProjectionMatrix(fo, s2.coordinateSystem, s2.reversedDepth), xo.intersectsSphere(t2)) return true;
      }
      return false;
    }
    intersectsBox(t2, e2) {
      if (!e2 || !e2.cameras || 0 === e2.cameras.length) return false;
      for (let i2 = 0; i2 < e2.cameras.length; i2++) {
        const s2 = e2.cameras[i2];
        if (fo.multiplyMatrices(s2.projectionMatrix, s2.matrixWorldInverse), xo.setFromProjectionMatrix(fo, s2.coordinateSystem, s2.reversedDepth), xo.intersectsBox(t2)) return true;
      }
      return false;
    }
    containsPoint(t2, e2) {
      if (!e2 || !e2.cameras || 0 === e2.cameras.length) return false;
      for (let i2 = 0; i2 < e2.cameras.length; i2++) {
        const s2 = e2.cameras[i2];
        if (fo.multiplyMatrices(s2.projectionMatrix, s2.matrixWorldInverse), xo.setFromProjectionMatrix(fo, s2.coordinateSystem, s2.reversedDepth), xo.containsPoint(t2)) return true;
      }
      return false;
    }
    clone() {
      return new _bo();
    }
  };
  var So = class {
    constructor() {
      this.index = 0, this.pool = [], this.list = [];
    }
    push(t2, e2, i2, s2) {
      const r2 = this.pool, n2 = this.list;
      this.index >= r2.length && r2.push({ start: -1, count: -1, z: -1, index: -1 });
      const a2 = r2[this.index];
      n2.push(a2), this.index++, a2.start = t2, a2.count = e2, a2.z = i2, a2.index = s2;
    }
    reset() {
      this.list.length = 0, this.index = 0;
    }
  };
  var _o = new dr();
  var Ao = new nn(1, 1, 1);
  var To = new go();
  var zo = new bo();
  var Co = new Es();
  var Io = new sr();
  var Bo = new ps();
  var ko = new ps();
  var Po = new ps();
  var Oo = new So();
  var Ro = new Yn();
  var jo = new ps();
  var Do = new ps();
  var Wo = new dr();
  var Uo = new ur();
  var qo = new sr();
  var Jo = new ps();
  var Xo = new ps();
  var Ho = new ps();
  var Go = new ps();
  var th = new dr();
  var eh = new ur();
  var ih = new sr();
  var sh = new ps();
  var dh = class extends ks {
    constructor(t2, e2, i2, s2, r2, n2, a2, o2, h2) {
      super(t2, e2, i2, s2, r2, n2, a2, o2, h2), this.isCanvasTexture = true, this.needsUpdate = true;
    }
  };
  var ph = class extends ks {
    constructor(t2, e2, i2 = 1014, s2, r2, n2, a2 = 1003, o2 = 1003, h2, l2 = 1026, c2 = 1) {
      if (l2 !== Wt && 1027 !== l2) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
      super({ width: t2, height: e2, depth: c2 }, s2, r2, n2, a2, o2, l2, i2, h2), this.isDepthTexture = true, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
    }
    copy(t2) {
      return super.copy(t2), this.source = new zs(Object.assign({}, t2.image)), this.compareFunction = t2.compareFunction, this;
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      return null !== this.compareFunction && (e2.compareFunction = this.compareFunction), e2;
    }
  };
  var mh = class extends ks {
    constructor(t2 = null) {
      super(), this.sourceTexture = t2, this.isExternalTexture = true;
    }
    copy(t2) {
      return super.copy(t2), this.sourceTexture = t2.sourceTexture, this;
    }
  };
  var yh = class _yh extends Nn {
    constructor(t2 = 1, e2 = 1, i2 = 4, s2 = 8, r2 = 1) {
      super(), this.type = "CapsuleGeometry", this.parameters = { radius: t2, height: e2, capSegments: i2, radialSegments: s2, heightSegments: r2 }, e2 = Math.max(0, e2), i2 = Math.max(1, Math.floor(i2)), s2 = Math.max(3, Math.floor(s2)), r2 = Math.max(1, Math.floor(r2));
      const n2 = [], a2 = [], o2 = [], h2 = [], l2 = e2 / 2, c2 = Math.PI / 2 * t2, u2 = e2, d2 = 2 * c2 + u2, p2 = 2 * i2 + r2, m2 = s2 + 1, y2 = new ps(), g2 = new ps();
      for (let f2 = 0; f2 <= p2; f2++) {
        let x2 = 0, b2 = 0, v2 = 0, w2 = 0;
        if (f2 <= i2) {
          const e3 = f2 / i2, s3 = e3 * Math.PI / 2;
          b2 = -l2 - t2 * Math.cos(s3), v2 = t2 * Math.sin(s3), w2 = -t2 * Math.cos(s3), x2 = e3 * c2;
        } else if (f2 <= i2 + r2) {
          const s3 = (f2 - i2) / r2;
          b2 = s3 * e2 - l2, v2 = t2, w2 = 0, x2 = c2 + s3 * u2;
        } else {
          const e3 = (f2 - i2 - r2) / i2, s3 = e3 * Math.PI / 2;
          b2 = l2 + t2 * Math.sin(s3), v2 = t2 * Math.cos(s3), w2 = t2 * Math.sin(s3), x2 = c2 + u2 + e3 * c2;
        }
        const M2 = Math.max(0, Math.min(1, x2 / d2));
        let S2 = 0;
        0 === f2 ? S2 = 0.5 / s2 : f2 === p2 && (S2 = -0.5 / s2);
        for (let t3 = 0; t3 <= s2; t3++) {
          const e3 = t3 / s2, i3 = e3 * Math.PI * 2, r3 = Math.sin(i3), n3 = Math.cos(i3);
          g2.x = -v2 * n3, g2.y = b2, g2.z = v2 * r3, a2.push(g2.x, g2.y, g2.z), y2.set(-v2 * n3, w2, v2 * r3), y2.normalize(), o2.push(y2.x, y2.y, y2.z), h2.push(e3 + S2, M2);
        }
        if (f2 > 0) {
          const t3 = (f2 - 1) * m2;
          for (let e3 = 0; e3 < s2; e3++) {
            const i3 = t3 + e3, s3 = t3 + e3 + 1, r3 = f2 * m2 + e3, a3 = f2 * m2 + e3 + 1;
            n2.push(i3, s3, r3), n2.push(s3, a3, r3);
          }
        }
      }
      this.setIndex(n2), this.setAttribute("position", new zn(a2, 3)), this.setAttribute("normal", new zn(o2, 3)), this.setAttribute("uv", new zn(h2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _yh(t2.radius, t2.height, t2.capSegments, t2.radialSegments, t2.heightSegments);
    }
  };
  var gh = class _gh extends Nn {
    constructor(t2 = 1, e2 = 32, i2 = 0, s2 = 2 * Math.PI) {
      super(), this.type = "CircleGeometry", this.parameters = { radius: t2, segments: e2, thetaStart: i2, thetaLength: s2 }, e2 = Math.max(3, e2);
      const r2 = [], n2 = [], a2 = [], o2 = [], h2 = new ps(), l2 = new us();
      n2.push(0, 0, 0), a2.push(0, 0, 1), o2.push(0.5, 0.5);
      for (let r3 = 0, c2 = 3; r3 <= e2; r3++, c2 += 3) {
        const u2 = i2 + r3 / e2 * s2;
        h2.x = t2 * Math.cos(u2), h2.y = t2 * Math.sin(u2), n2.push(h2.x, h2.y, h2.z), a2.push(0, 0, 1), l2.x = (n2[c2] / t2 + 1) / 2, l2.y = (n2[c2 + 1] / t2 + 1) / 2, o2.push(l2.x, l2.y);
      }
      for (let t3 = 1; t3 <= e2; t3++) r2.push(t3, t3 + 1, 0);
      this.setIndex(r2), this.setAttribute("position", new zn(n2, 3)), this.setAttribute("normal", new zn(a2, 3)), this.setAttribute("uv", new zn(o2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _gh(t2.radius, t2.segments, t2.thetaStart, t2.thetaLength);
    }
  };
  var fh = class _fh extends Nn {
    constructor(t2 = 1, e2 = 1, i2 = 1, s2 = 32, r2 = 1, n2 = false, a2 = 0, o2 = 2 * Math.PI) {
      super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: t2, radiusBottom: e2, height: i2, radialSegments: s2, heightSegments: r2, openEnded: n2, thetaStart: a2, thetaLength: o2 };
      const h2 = this;
      s2 = Math.floor(s2), r2 = Math.floor(r2);
      const l2 = [], c2 = [], u2 = [], d2 = [];
      let p2 = 0;
      const m2 = [], y2 = i2 / 2;
      let g2 = 0;
      function f2(i3) {
        const r3 = p2, n3 = new us(), m3 = new ps();
        let f3 = 0;
        const x2 = true === i3 ? t2 : e2, b2 = true === i3 ? 1 : -1;
        for (let t3 = 1; t3 <= s2; t3++) c2.push(0, y2 * b2, 0), u2.push(0, b2, 0), d2.push(0.5, 0.5), p2++;
        const v2 = p2;
        for (let t3 = 0; t3 <= s2; t3++) {
          const e3 = t3 / s2 * o2 + a2, i4 = Math.cos(e3), r4 = Math.sin(e3);
          m3.x = x2 * r4, m3.y = y2 * b2, m3.z = x2 * i4, c2.push(m3.x, m3.y, m3.z), u2.push(0, b2, 0), n3.x = 0.5 * i4 + 0.5, n3.y = 0.5 * r4 * b2 + 0.5, d2.push(n3.x, n3.y), p2++;
        }
        for (let t3 = 0; t3 < s2; t3++) {
          const e3 = r3 + t3, s3 = v2 + t3;
          true === i3 ? l2.push(s3, s3 + 1, e3) : l2.push(s3 + 1, s3, e3), f3 += 3;
        }
        h2.addGroup(g2, f3, true === i3 ? 1 : 2), g2 += f3;
      }
      !(function() {
        const n3 = new ps(), f3 = new ps();
        let x2 = 0;
        const b2 = (e2 - t2) / i2;
        for (let h3 = 0; h3 <= r2; h3++) {
          const l3 = [], g3 = h3 / r2, x3 = g3 * (e2 - t2) + t2;
          for (let t3 = 0; t3 <= s2; t3++) {
            const e3 = t3 / s2, r3 = e3 * o2 + a2, h4 = Math.sin(r3), m3 = Math.cos(r3);
            f3.x = x3 * h4, f3.y = -g3 * i2 + y2, f3.z = x3 * m3, c2.push(f3.x, f3.y, f3.z), n3.set(h4, b2, m3).normalize(), u2.push(n3.x, n3.y, n3.z), d2.push(e3, 1 - g3), l3.push(p2++);
          }
          m2.push(l3);
        }
        for (let i3 = 0; i3 < s2; i3++) for (let s3 = 0; s3 < r2; s3++) {
          const n4 = m2[s3][i3], a3 = m2[s3 + 1][i3], o3 = m2[s3 + 1][i3 + 1], h3 = m2[s3][i3 + 1];
          (t2 > 0 || 0 !== s3) && (l2.push(n4, a3, h3), x2 += 3), (e2 > 0 || s3 !== r2 - 1) && (l2.push(a3, o3, h3), x2 += 3);
        }
        h2.addGroup(g2, x2, 0), g2 += x2;
      })(), false === n2 && (t2 > 0 && f2(true), e2 > 0 && f2(false)), this.setIndex(l2), this.setAttribute("position", new zn(c2, 3)), this.setAttribute("normal", new zn(u2, 3)), this.setAttribute("uv", new zn(d2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _fh(t2.radiusTop, t2.radiusBottom, t2.height, t2.radialSegments, t2.heightSegments, t2.openEnded, t2.thetaStart, t2.thetaLength);
    }
  };
  var xh = class _xh extends fh {
    constructor(t2 = 1, e2 = 1, i2 = 32, s2 = 1, r2 = false, n2 = 0, a2 = 2 * Math.PI) {
      super(0, t2, e2, i2, s2, r2, n2, a2), this.type = "ConeGeometry", this.parameters = { radius: t2, height: e2, radialSegments: i2, heightSegments: s2, openEnded: r2, thetaStart: n2, thetaLength: a2 };
    }
    static fromJSON(t2) {
      return new _xh(t2.radius, t2.height, t2.radialSegments, t2.heightSegments, t2.openEnded, t2.thetaStart, t2.thetaLength);
    }
  };
  var bh = class _bh extends Nn {
    constructor(t2 = [], e2 = [], i2 = 1, s2 = 0) {
      super(), this.type = "PolyhedronGeometry", this.parameters = { vertices: t2, indices: e2, radius: i2, detail: s2 };
      const r2 = [], n2 = [];
      function a2(t3, e3, i3, s3) {
        const r3 = s3 + 1, n3 = [];
        for (let s4 = 0; s4 <= r3; s4++) {
          n3[s4] = [];
          const a3 = t3.clone().lerp(i3, s4 / r3), o3 = e3.clone().lerp(i3, s4 / r3), h3 = r3 - s4;
          for (let t4 = 0; t4 <= h3; t4++) n3[s4][t4] = 0 === t4 && s4 === r3 ? a3 : a3.clone().lerp(o3, t4 / h3);
        }
        for (let t4 = 0; t4 < r3; t4++) for (let e4 = 0; e4 < 2 * (r3 - t4) - 1; e4++) {
          const i4 = Math.floor(e4 / 2);
          e4 % 2 == 0 ? (o2(n3[t4][i4 + 1]), o2(n3[t4 + 1][i4]), o2(n3[t4][i4])) : (o2(n3[t4][i4 + 1]), o2(n3[t4 + 1][i4 + 1]), o2(n3[t4 + 1][i4]));
        }
      }
      function o2(t3) {
        r2.push(t3.x, t3.y, t3.z);
      }
      function h2(e3, i3) {
        const s3 = 3 * e3;
        i3.x = t2[s3 + 0], i3.y = t2[s3 + 1], i3.z = t2[s3 + 2];
      }
      function l2(t3, e3, i3, s3) {
        s3 < 0 && 1 === t3.x && (n2[e3] = t3.x - 1), 0 === i3.x && 0 === i3.z && (n2[e3] = s3 / 2 / Math.PI + 0.5);
      }
      function c2(t3) {
        return Math.atan2(t3.z, -t3.x);
      }
      function u2(t3) {
        return Math.atan2(-t3.y, Math.sqrt(t3.x * t3.x + t3.z * t3.z));
      }
      !(function(t3) {
        const i3 = new ps(), s3 = new ps(), r3 = new ps();
        for (let n3 = 0; n3 < e2.length; n3 += 3) h2(e2[n3 + 0], i3), h2(e2[n3 + 1], s3), h2(e2[n3 + 2], r3), a2(i3, s3, r3, t3);
      })(s2), (function(t3) {
        const e3 = new ps();
        for (let i3 = 0; i3 < r2.length; i3 += 3) e3.x = r2[i3 + 0], e3.y = r2[i3 + 1], e3.z = r2[i3 + 2], e3.normalize().multiplyScalar(t3), r2[i3 + 0] = e3.x, r2[i3 + 1] = e3.y, r2[i3 + 2] = e3.z;
      })(i2), (function() {
        const t3 = new ps();
        for (let e3 = 0; e3 < r2.length; e3 += 3) {
          t3.x = r2[e3 + 0], t3.y = r2[e3 + 1], t3.z = r2[e3 + 2];
          const i3 = c2(t3) / 2 / Math.PI + 0.5, s3 = u2(t3) / Math.PI + 0.5;
          n2.push(i3, 1 - s3);
        }
        (function() {
          const t4 = new ps(), e3 = new ps(), i3 = new ps(), s3 = new ps(), a3 = new us(), o3 = new us(), h3 = new us();
          for (let u3 = 0, d2 = 0; u3 < r2.length; u3 += 9, d2 += 6) {
            t4.set(r2[u3 + 0], r2[u3 + 1], r2[u3 + 2]), e3.set(r2[u3 + 3], r2[u3 + 4], r2[u3 + 5]), i3.set(r2[u3 + 6], r2[u3 + 7], r2[u3 + 8]), a3.set(n2[d2 + 0], n2[d2 + 1]), o3.set(n2[d2 + 2], n2[d2 + 3]), h3.set(n2[d2 + 4], n2[d2 + 5]), s3.copy(t4).add(e3).add(i3).divideScalar(3);
            const p2 = c2(s3);
            l2(a3, d2 + 0, t4, p2), l2(o3, d2 + 2, e3, p2), l2(h3, d2 + 4, i3, p2);
          }
        })(), (function() {
          for (let t4 = 0; t4 < n2.length; t4 += 6) {
            const e3 = n2[t4 + 0], i3 = n2[t4 + 2], s3 = n2[t4 + 4], r3 = Math.max(e3, i3, s3), a3 = Math.min(e3, i3, s3);
            r3 > 0.9 && a3 < 0.1 && (e3 < 0.2 && (n2[t4 + 0] += 1), i3 < 0.2 && (n2[t4 + 2] += 1), s3 < 0.2 && (n2[t4 + 4] += 1));
          }
        })();
      })(), this.setAttribute("position", new zn(r2, 3)), this.setAttribute("normal", new zn(r2.slice(), 3)), this.setAttribute("uv", new zn(n2, 2)), 0 === s2 ? this.computeVertexNormals() : this.normalizeNormals();
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _bh(t2.vertices, t2.indices, t2.radius, t2.details);
    }
  };
  var vh = class _vh extends bh {
    constructor(t2 = 1, e2 = 0) {
      const i2 = (1 + Math.sqrt(5)) / 2, s2 = 1 / i2;
      super([-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -s2, -i2, 0, -s2, i2, 0, s2, -i2, 0, s2, i2, -s2, -i2, 0, -s2, i2, 0, s2, -i2, 0, s2, i2, 0, -i2, 0, -s2, i2, 0, -s2, -i2, 0, s2, i2, 0, s2], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t2, e2), this.type = "DodecahedronGeometry", this.parameters = { radius: t2, detail: e2 };
    }
    static fromJSON(t2) {
      return new _vh(t2.radius, t2.detail);
    }
  };
  var wh = new ps();
  var Mh = new ps();
  var Sh = new ps();
  var _h = new Kr();
  var Ah = class extends Nn {
    constructor(t2 = null, e2 = 1) {
      if (super(), this.type = "EdgesGeometry", this.parameters = { geometry: t2, thresholdAngle: e2 }, null !== t2) {
        const i2 = 4, s2 = Math.pow(10, i2), r2 = Math.cos(is * e2), n2 = t2.getIndex(), a2 = t2.getAttribute("position"), o2 = n2 ? n2.count : a2.count, h2 = [0, 0, 0], l2 = ["a", "b", "c"], c2 = new Array(3), u2 = {}, d2 = [];
        for (let t3 = 0; t3 < o2; t3 += 3) {
          n2 ? (h2[0] = n2.getX(t3), h2[1] = n2.getX(t3 + 1), h2[2] = n2.getX(t3 + 2)) : (h2[0] = t3, h2[1] = t3 + 1, h2[2] = t3 + 2);
          const { a: e3, b: i3, c: o3 } = _h;
          if (e3.fromBufferAttribute(a2, h2[0]), i3.fromBufferAttribute(a2, h2[1]), o3.fromBufferAttribute(a2, h2[2]), _h.getNormal(Sh), c2[0] = `${Math.round(e3.x * s2)},${Math.round(e3.y * s2)},${Math.round(e3.z * s2)}`, c2[1] = `${Math.round(i3.x * s2)},${Math.round(i3.y * s2)},${Math.round(i3.z * s2)}`, c2[2] = `${Math.round(o3.x * s2)},${Math.round(o3.y * s2)},${Math.round(o3.z * s2)}`, c2[0] !== c2[1] && c2[1] !== c2[2] && c2[2] !== c2[0]) for (let t4 = 0; t4 < 3; t4++) {
            const e4 = (t4 + 1) % 3, i4 = c2[t4], s3 = c2[e4], n3 = _h[l2[t4]], a3 = _h[l2[e4]], o4 = `${i4}_${s3}`, p2 = `${s3}_${i4}`;
            p2 in u2 && u2[p2] ? (Sh.dot(u2[p2].normal) <= r2 && (d2.push(n3.x, n3.y, n3.z), d2.push(a3.x, a3.y, a3.z)), u2[p2] = null) : o4 in u2 || (u2[o4] = { index0: h2[t4], index1: h2[e4], normal: Sh.clone() });
          }
        }
        for (const t3 in u2) if (u2[t3]) {
          const { index0: e3, index1: i3 } = u2[t3];
          wh.fromBufferAttribute(a2, e3), Mh.fromBufferAttribute(a2, i3), d2.push(wh.x, wh.y, wh.z), d2.push(Mh.x, Mh.y, Mh.z);
        }
        this.setAttribute("position", new zn(d2, 3));
      }
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
  };
  var Th = class {
    constructor() {
      this.type = "Curve", this.arcLengthDivisions = 200, this.needsUpdate = false, this.cacheArcLengths = null;
    }
    getPoint() {
      Hi("Curve: .getPoint() not implemented.");
    }
    getPointAt(t2, e2) {
      const i2 = this.getUtoTmapping(t2);
      return this.getPoint(i2, e2);
    }
    getPoints(t2 = 5) {
      const e2 = [];
      for (let i2 = 0; i2 <= t2; i2++) e2.push(this.getPoint(i2 / t2));
      return e2;
    }
    getSpacedPoints(t2 = 5) {
      const e2 = [];
      for (let i2 = 0; i2 <= t2; i2++) e2.push(this.getPointAt(i2 / t2));
      return e2;
    }
    getLength() {
      const t2 = this.getLengths();
      return t2[t2.length - 1];
    }
    getLengths(t2 = this.arcLengthDivisions) {
      if (this.cacheArcLengths && this.cacheArcLengths.length === t2 + 1 && !this.needsUpdate) return this.cacheArcLengths;
      this.needsUpdate = false;
      const e2 = [];
      let i2, s2 = this.getPoint(0), r2 = 0;
      e2.push(0);
      for (let n2 = 1; n2 <= t2; n2++) i2 = this.getPoint(n2 / t2), r2 += i2.distanceTo(s2), e2.push(r2), s2 = i2;
      return this.cacheArcLengths = e2, e2;
    }
    updateArcLengths() {
      this.needsUpdate = true, this.getLengths();
    }
    getUtoTmapping(t2, e2 = null) {
      const i2 = this.getLengths();
      let s2 = 0;
      const r2 = i2.length;
      let n2;
      n2 = e2 || t2 * i2[r2 - 1];
      let a2, o2 = 0, h2 = r2 - 1;
      for (; o2 <= h2; ) if (s2 = Math.floor(o2 + (h2 - o2) / 2), a2 = i2[s2] - n2, a2 < 0) o2 = s2 + 1;
      else {
        if (!(a2 > 0)) {
          h2 = s2;
          break;
        }
        h2 = s2 - 1;
      }
      if (s2 = h2, i2[s2] === n2) return s2 / (r2 - 1);
      const l2 = i2[s2];
      return (s2 + (n2 - l2) / (i2[s2 + 1] - l2)) / (r2 - 1);
    }
    getTangent(t2, e2) {
      const i2 = 1e-4;
      let s2 = t2 - i2, r2 = t2 + i2;
      s2 < 0 && (s2 = 0), r2 > 1 && (r2 = 1);
      const n2 = this.getPoint(s2), a2 = this.getPoint(r2), o2 = e2 || (n2.isVector2 ? new us() : new ps());
      return o2.copy(a2).sub(n2).normalize(), o2;
    }
    getTangentAt(t2, e2) {
      const i2 = this.getUtoTmapping(t2);
      return this.getTangent(i2, e2);
    }
    computeFrenetFrames(t2, e2 = false) {
      const i2 = new ps(), s2 = [], r2 = [], n2 = [], a2 = new ps(), o2 = new dr();
      for (let e3 = 0; e3 <= t2; e3++) {
        const i3 = e3 / t2;
        s2[e3] = this.getTangentAt(i3, new ps());
      }
      r2[0] = new ps(), n2[0] = new ps();
      let h2 = Number.MAX_VALUE;
      const l2 = Math.abs(s2[0].x), c2 = Math.abs(s2[0].y), u2 = Math.abs(s2[0].z);
      l2 <= h2 && (h2 = l2, i2.set(1, 0, 0)), c2 <= h2 && (h2 = c2, i2.set(0, 1, 0)), u2 <= h2 && i2.set(0, 0, 1), a2.crossVectors(s2[0], i2).normalize(), r2[0].crossVectors(s2[0], a2), n2[0].crossVectors(s2[0], r2[0]);
      for (let e3 = 1; e3 <= t2; e3++) {
        if (r2[e3] = r2[e3 - 1].clone(), n2[e3] = n2[e3 - 1].clone(), a2.crossVectors(s2[e3 - 1], s2[e3]), a2.length() > Number.EPSILON) {
          a2.normalize();
          const t3 = Math.acos(ns(s2[e3 - 1].dot(s2[e3]), -1, 1));
          r2[e3].applyMatrix4(o2.makeRotationAxis(a2, t3));
        }
        n2[e3].crossVectors(s2[e3], r2[e3]);
      }
      if (true === e2) {
        let e3 = Math.acos(ns(r2[0].dot(r2[t2]), -1, 1));
        e3 /= t2, s2[0].dot(a2.crossVectors(r2[0], r2[t2])) > 0 && (e3 = -e3);
        for (let i3 = 1; i3 <= t2; i3++) r2[i3].applyMatrix4(o2.makeRotationAxis(s2[i3], e3 * i3)), n2[i3].crossVectors(s2[i3], r2[i3]);
      }
      return { tangents: s2, normals: r2, binormals: n2 };
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      return this.arcLengthDivisions = t2.arcLengthDivisions, this;
    }
    toJSON() {
      const t2 = { metadata: { version: 4.7, type: "Curve", generator: "Curve.toJSON" } };
      return t2.arcLengthDivisions = this.arcLengthDivisions, t2.type = this.type, t2;
    }
    fromJSON(t2) {
      return this.arcLengthDivisions = t2.arcLengthDivisions, this;
    }
  };
  var zh = class extends Th {
    constructor(t2 = 0, e2 = 0, i2 = 1, s2 = 1, r2 = 0, n2 = 2 * Math.PI, a2 = false, o2 = 0) {
      super(), this.isEllipseCurve = true, this.type = "EllipseCurve", this.aX = t2, this.aY = e2, this.xRadius = i2, this.yRadius = s2, this.aStartAngle = r2, this.aEndAngle = n2, this.aClockwise = a2, this.aRotation = o2;
    }
    getPoint(t2, e2 = new us()) {
      const i2 = e2, s2 = 2 * Math.PI;
      let r2 = this.aEndAngle - this.aStartAngle;
      const n2 = Math.abs(r2) < Number.EPSILON;
      for (; r2 < 0; ) r2 += s2;
      for (; r2 > s2; ) r2 -= s2;
      r2 < Number.EPSILON && (r2 = n2 ? 0 : s2), true !== this.aClockwise || n2 || (r2 === s2 ? r2 = -s2 : r2 -= s2);
      const a2 = this.aStartAngle + t2 * r2;
      let o2 = this.aX + this.xRadius * Math.cos(a2), h2 = this.aY + this.yRadius * Math.sin(a2);
      if (0 !== this.aRotation) {
        const t3 = Math.cos(this.aRotation), e3 = Math.sin(this.aRotation), i3 = o2 - this.aX, s3 = h2 - this.aY;
        o2 = i3 * t3 - s3 * e3 + this.aX, h2 = i3 * e3 + s3 * t3 + this.aY;
      }
      return i2.set(o2, h2);
    }
    copy(t2) {
      return super.copy(t2), this.aX = t2.aX, this.aY = t2.aY, this.xRadius = t2.xRadius, this.yRadius = t2.yRadius, this.aStartAngle = t2.aStartAngle, this.aEndAngle = t2.aEndAngle, this.aClockwise = t2.aClockwise, this.aRotation = t2.aRotation, this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.aX = this.aX, t2.aY = this.aY, t2.xRadius = this.xRadius, t2.yRadius = this.yRadius, t2.aStartAngle = this.aStartAngle, t2.aEndAngle = this.aEndAngle, t2.aClockwise = this.aClockwise, t2.aRotation = this.aRotation, t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.aX = t2.aX, this.aY = t2.aY, this.xRadius = t2.xRadius, this.yRadius = t2.yRadius, this.aStartAngle = t2.aStartAngle, this.aEndAngle = t2.aEndAngle, this.aClockwise = t2.aClockwise, this.aRotation = t2.aRotation, this;
    }
  };
  var Ch = class extends zh {
    constructor(t2, e2, i2, s2, r2, n2) {
      super(t2, e2, i2, i2, s2, r2, n2), this.isArcCurve = true, this.type = "ArcCurve";
    }
  };
  function Ih() {
    let t2 = 0, e2 = 0, i2 = 0, s2 = 0;
    function r2(r3, n2, a2, o2) {
      t2 = r3, e2 = a2, i2 = -3 * r3 + 3 * n2 - 2 * a2 - o2, s2 = 2 * r3 - 2 * n2 + a2 + o2;
    }
    return { initCatmullRom: function(t3, e3, i3, s3, n2) {
      r2(e3, i3, n2 * (i3 - t3), n2 * (s3 - e3));
    }, initNonuniformCatmullRom: function(t3, e3, i3, s3, n2, a2, o2) {
      let h2 = (e3 - t3) / n2 - (i3 - t3) / (n2 + a2) + (i3 - e3) / a2, l2 = (i3 - e3) / a2 - (s3 - e3) / (a2 + o2) + (s3 - i3) / o2;
      h2 *= a2, l2 *= a2, r2(e3, i3, h2, l2);
    }, calc: function(r3) {
      const n2 = r3 * r3;
      return t2 + e2 * r3 + i2 * n2 + s2 * (n2 * r3);
    } };
  }
  var Bh = new ps();
  var kh = new Ih();
  var Ph = new Ih();
  var Oh = new Ih();
  var Rh = class extends Th {
    constructor(t2 = [], e2 = false, i2 = "centripetal", s2 = 0.5) {
      super(), this.isCatmullRomCurve3 = true, this.type = "CatmullRomCurve3", this.points = t2, this.closed = e2, this.curveType = i2, this.tension = s2;
    }
    getPoint(t2, e2 = new ps()) {
      const i2 = e2, s2 = this.points, r2 = s2.length, n2 = (r2 - (this.closed ? 0 : 1)) * t2;
      let a2, o2, h2 = Math.floor(n2), l2 = n2 - h2;
      this.closed ? h2 += h2 > 0 ? 0 : (Math.floor(Math.abs(h2) / r2) + 1) * r2 : 0 === l2 && h2 === r2 - 1 && (h2 = r2 - 2, l2 = 1), this.closed || h2 > 0 ? a2 = s2[(h2 - 1) % r2] : (Bh.subVectors(s2[0], s2[1]).add(s2[0]), a2 = Bh);
      const c2 = s2[h2 % r2], u2 = s2[(h2 + 1) % r2];
      if (this.closed || h2 + 2 < r2 ? o2 = s2[(h2 + 2) % r2] : (Bh.subVectors(s2[r2 - 1], s2[r2 - 2]).add(s2[r2 - 1]), o2 = Bh), "centripetal" === this.curveType || "chordal" === this.curveType) {
        const t3 = "chordal" === this.curveType ? 0.5 : 0.25;
        let e3 = Math.pow(a2.distanceToSquared(c2), t3), i3 = Math.pow(c2.distanceToSquared(u2), t3), s3 = Math.pow(u2.distanceToSquared(o2), t3);
        i3 < 1e-4 && (i3 = 1), e3 < 1e-4 && (e3 = i3), s3 < 1e-4 && (s3 = i3), kh.initNonuniformCatmullRom(a2.x, c2.x, u2.x, o2.x, e3, i3, s3), Ph.initNonuniformCatmullRom(a2.y, c2.y, u2.y, o2.y, e3, i3, s3), Oh.initNonuniformCatmullRom(a2.z, c2.z, u2.z, o2.z, e3, i3, s3);
      } else "catmullrom" === this.curveType && (kh.initCatmullRom(a2.x, c2.x, u2.x, o2.x, this.tension), Ph.initCatmullRom(a2.y, c2.y, u2.y, o2.y, this.tension), Oh.initCatmullRom(a2.z, c2.z, u2.z, o2.z, this.tension));
      return i2.set(kh.calc(l2), Ph.calc(l2), Oh.calc(l2)), i2;
    }
    copy(t2) {
      super.copy(t2), this.points = [];
      for (let e2 = 0, i2 = t2.points.length; e2 < i2; e2++) {
        const i3 = t2.points[e2];
        this.points.push(i3.clone());
      }
      return this.closed = t2.closed, this.curveType = t2.curveType, this.tension = t2.tension, this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.points = [];
      for (let e2 = 0, i2 = this.points.length; e2 < i2; e2++) {
        const i3 = this.points[e2];
        t2.points.push(i3.toArray());
      }
      return t2.closed = this.closed, t2.curveType = this.curveType, t2.tension = this.tension, t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.points = [];
      for (let e2 = 0, i2 = t2.points.length; e2 < i2; e2++) {
        const i3 = t2.points[e2];
        this.points.push(new ps().fromArray(i3));
      }
      return this.closed = t2.closed, this.curveType = t2.curveType, this.tension = t2.tension, this;
    }
  };
  function Nh(t2, e2, i2, s2, r2) {
    const n2 = 0.5 * (s2 - e2), a2 = 0.5 * (r2 - i2), o2 = t2 * t2;
    return (2 * i2 - 2 * s2 + n2 + a2) * (t2 * o2) + (-3 * i2 + 3 * s2 - 2 * n2 - a2) * o2 + n2 * t2 + i2;
  }
  function Vh(t2, e2, i2, s2) {
    return (function(t3, e3) {
      const i3 = 1 - t3;
      return i3 * i3 * e3;
    })(t2, e2) + (function(t3, e3) {
      return 2 * (1 - t3) * t3 * e3;
    })(t2, i2) + (function(t3, e3) {
      return t3 * t3 * e3;
    })(t2, s2);
  }
  function Fh(t2, e2, i2, s2, r2) {
    return (function(t3, e3) {
      const i3 = 1 - t3;
      return i3 * i3 * i3 * e3;
    })(t2, e2) + (function(t3, e3) {
      const i3 = 1 - t3;
      return 3 * i3 * i3 * t3 * e3;
    })(t2, i2) + (function(t3, e3) {
      return 3 * (1 - t3) * t3 * t3 * e3;
    })(t2, s2) + (function(t3, e3) {
      return t3 * t3 * t3 * e3;
    })(t2, r2);
  }
  var Lh = class extends Th {
    constructor(t2 = new us(), e2 = new us(), i2 = new us(), s2 = new us()) {
      super(), this.isCubicBezierCurve = true, this.type = "CubicBezierCurve", this.v0 = t2, this.v1 = e2, this.v2 = i2, this.v3 = s2;
    }
    getPoint(t2, e2 = new us()) {
      const i2 = e2, s2 = this.v0, r2 = this.v1, n2 = this.v2, a2 = this.v3;
      return i2.set(Fh(t2, s2.x, r2.x, n2.x, a2.x), Fh(t2, s2.y, r2.y, n2.y, a2.y)), i2;
    }
    copy(t2) {
      return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this.v3.copy(t2.v3), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2.v3 = this.v3.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this.v3.fromArray(t2.v3), this;
    }
  };
  var Eh = class extends Th {
    constructor(t2 = new ps(), e2 = new ps(), i2 = new ps(), s2 = new ps()) {
      super(), this.isCubicBezierCurve3 = true, this.type = "CubicBezierCurve3", this.v0 = t2, this.v1 = e2, this.v2 = i2, this.v3 = s2;
    }
    getPoint(t2, e2 = new ps()) {
      const i2 = e2, s2 = this.v0, r2 = this.v1, n2 = this.v2, a2 = this.v3;
      return i2.set(Fh(t2, s2.x, r2.x, n2.x, a2.x), Fh(t2, s2.y, r2.y, n2.y, a2.y), Fh(t2, s2.z, r2.z, n2.z, a2.z)), i2;
    }
    copy(t2) {
      return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this.v3.copy(t2.v3), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2.v3 = this.v3.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this.v3.fromArray(t2.v3), this;
    }
  };
  var jh = class extends Th {
    constructor(t2 = new us(), e2 = new us()) {
      super(), this.isLineCurve = true, this.type = "LineCurve", this.v1 = t2, this.v2 = e2;
    }
    getPoint(t2, e2 = new us()) {
      const i2 = e2;
      return 1 === t2 ? i2.copy(this.v2) : (i2.copy(this.v2).sub(this.v1), i2.multiplyScalar(t2).add(this.v1)), i2;
    }
    getPointAt(t2, e2) {
      return this.getPoint(t2, e2);
    }
    getTangent(t2, e2 = new us()) {
      return e2.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(t2, e2) {
      return this.getTangent(t2, e2);
    }
    copy(t2) {
      return super.copy(t2), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
    }
  };
  var Dh = class extends Th {
    constructor(t2 = new ps(), e2 = new ps()) {
      super(), this.isLineCurve3 = true, this.type = "LineCurve3", this.v1 = t2, this.v2 = e2;
    }
    getPoint(t2, e2 = new ps()) {
      const i2 = e2;
      return 1 === t2 ? i2.copy(this.v2) : (i2.copy(this.v2).sub(this.v1), i2.multiplyScalar(t2).add(this.v1)), i2;
    }
    getPointAt(t2, e2) {
      return this.getPoint(t2, e2);
    }
    getTangent(t2, e2 = new ps()) {
      return e2.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(t2, e2) {
      return this.getTangent(t2, e2);
    }
    copy(t2) {
      return super.copy(t2), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
    }
  };
  var Wh = class extends Th {
    constructor(t2 = new us(), e2 = new us(), i2 = new us()) {
      super(), this.isQuadraticBezierCurve = true, this.type = "QuadraticBezierCurve", this.v0 = t2, this.v1 = e2, this.v2 = i2;
    }
    getPoint(t2, e2 = new us()) {
      const i2 = e2, s2 = this.v0, r2 = this.v1, n2 = this.v2;
      return i2.set(Vh(t2, s2.x, r2.x, n2.x), Vh(t2, s2.y, r2.y, n2.y)), i2;
    }
    copy(t2) {
      return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
    }
  };
  var Uh = class extends Th {
    constructor(t2 = new ps(), e2 = new ps(), i2 = new ps()) {
      super(), this.isQuadraticBezierCurve3 = true, this.type = "QuadraticBezierCurve3", this.v0 = t2, this.v1 = e2, this.v2 = i2;
    }
    getPoint(t2, e2 = new ps()) {
      const i2 = e2, s2 = this.v0, r2 = this.v1, n2 = this.v2;
      return i2.set(Vh(t2, s2.x, r2.x, n2.x), Vh(t2, s2.y, r2.y, n2.y), Vh(t2, s2.z, r2.z, n2.z)), i2;
    }
    copy(t2) {
      return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
    }
  };
  var qh = class extends Th {
    constructor(t2 = []) {
      super(), this.isSplineCurve = true, this.type = "SplineCurve", this.points = t2;
    }
    getPoint(t2, e2 = new us()) {
      const i2 = e2, s2 = this.points, r2 = (s2.length - 1) * t2, n2 = Math.floor(r2), a2 = r2 - n2, o2 = s2[0 === n2 ? n2 : n2 - 1], h2 = s2[n2], l2 = s2[n2 > s2.length - 2 ? s2.length - 1 : n2 + 1], c2 = s2[n2 > s2.length - 3 ? s2.length - 1 : n2 + 2];
      return i2.set(Nh(a2, o2.x, h2.x, l2.x, c2.x), Nh(a2, o2.y, h2.y, l2.y, c2.y)), i2;
    }
    copy(t2) {
      super.copy(t2), this.points = [];
      for (let e2 = 0, i2 = t2.points.length; e2 < i2; e2++) {
        const i3 = t2.points[e2];
        this.points.push(i3.clone());
      }
      return this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.points = [];
      for (let e2 = 0, i2 = this.points.length; e2 < i2; e2++) {
        const i3 = this.points[e2];
        t2.points.push(i3.toArray());
      }
      return t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.points = [];
      for (let e2 = 0, i2 = t2.points.length; e2 < i2; e2++) {
        const i3 = t2.points[e2];
        this.points.push(new us().fromArray(i3));
      }
      return this;
    }
  };
  var Jh = Object.freeze({ __proto__: null, ArcCurve: Ch, CatmullRomCurve3: Rh, CubicBezierCurve: Lh, CubicBezierCurve3: Eh, EllipseCurve: zh, LineCurve: jh, LineCurve3: Dh, QuadraticBezierCurve: Wh, QuadraticBezierCurve3: Uh, SplineCurve: qh });
  var Xh = class extends Th {
    constructor() {
      super(), this.type = "CurvePath", this.curves = [], this.autoClose = false;
    }
    add(t2) {
      this.curves.push(t2);
    }
    closePath() {
      const t2 = this.curves[0].getPoint(0), e2 = this.curves[this.curves.length - 1].getPoint(1);
      if (!t2.equals(e2)) {
        const i2 = true === t2.isVector2 ? "LineCurve" : "LineCurve3";
        this.curves.push(new Jh[i2](e2, t2));
      }
      return this;
    }
    getPoint(t2, e2) {
      const i2 = t2 * this.getLength(), s2 = this.getCurveLengths();
      let r2 = 0;
      for (; r2 < s2.length; ) {
        if (s2[r2] >= i2) {
          const t3 = s2[r2] - i2, n2 = this.curves[r2], a2 = n2.getLength(), o2 = 0 === a2 ? 0 : 1 - t3 / a2;
          return n2.getPointAt(o2, e2);
        }
        r2++;
      }
      return null;
    }
    getLength() {
      const t2 = this.getCurveLengths();
      return t2[t2.length - 1];
    }
    updateArcLengths() {
      this.needsUpdate = true, this.cacheLengths = null, this.getCurveLengths();
    }
    getCurveLengths() {
      if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
      const t2 = [];
      let e2 = 0;
      for (let i2 = 0, s2 = this.curves.length; i2 < s2; i2++) e2 += this.curves[i2].getLength(), t2.push(e2);
      return this.cacheLengths = t2, t2;
    }
    getSpacedPoints(t2 = 40) {
      const e2 = [];
      for (let i2 = 0; i2 <= t2; i2++) e2.push(this.getPoint(i2 / t2));
      return this.autoClose && e2.push(e2[0]), e2;
    }
    getPoints(t2 = 12) {
      const e2 = [];
      let i2;
      for (let s2 = 0, r2 = this.curves; s2 < r2.length; s2++) {
        const n2 = r2[s2], a2 = n2.isEllipseCurve ? 2 * t2 : n2.isLineCurve || n2.isLineCurve3 ? 1 : n2.isSplineCurve ? t2 * n2.points.length : t2, o2 = n2.getPoints(a2);
        for (let t3 = 0; t3 < o2.length; t3++) {
          const s3 = o2[t3];
          i2 && i2.equals(s3) || (e2.push(s3), i2 = s3);
        }
      }
      return this.autoClose && e2.length > 1 && !e2[e2.length - 1].equals(e2[0]) && e2.push(e2[0]), e2;
    }
    copy(t2) {
      super.copy(t2), this.curves = [];
      for (let e2 = 0, i2 = t2.curves.length; e2 < i2; e2++) {
        const i3 = t2.curves[e2];
        this.curves.push(i3.clone());
      }
      return this.autoClose = t2.autoClose, this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.autoClose = this.autoClose, t2.curves = [];
      for (let e2 = 0, i2 = this.curves.length; e2 < i2; e2++) {
        const i3 = this.curves[e2];
        t2.curves.push(i3.toJSON());
      }
      return t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.autoClose = t2.autoClose, this.curves = [];
      for (let e2 = 0, i2 = t2.curves.length; e2 < i2; e2++) {
        const i3 = t2.curves[e2];
        this.curves.push(new Jh[i3.type]().fromJSON(i3));
      }
      return this;
    }
  };
  var Yh = class extends Xh {
    constructor(t2) {
      super(), this.type = "Path", this.currentPoint = new us(), t2 && this.setFromPoints(t2);
    }
    setFromPoints(t2) {
      this.moveTo(t2[0].x, t2[0].y);
      for (let e2 = 1, i2 = t2.length; e2 < i2; e2++) this.lineTo(t2[e2].x, t2[e2].y);
      return this;
    }
    moveTo(t2, e2) {
      return this.currentPoint.set(t2, e2), this;
    }
    lineTo(t2, e2) {
      const i2 = new jh(this.currentPoint.clone(), new us(t2, e2));
      return this.curves.push(i2), this.currentPoint.set(t2, e2), this;
    }
    quadraticCurveTo(t2, e2, i2, s2) {
      const r2 = new Wh(this.currentPoint.clone(), new us(t2, e2), new us(i2, s2));
      return this.curves.push(r2), this.currentPoint.set(i2, s2), this;
    }
    bezierCurveTo(t2, e2, i2, s2, r2, n2) {
      const a2 = new Lh(this.currentPoint.clone(), new us(t2, e2), new us(i2, s2), new us(r2, n2));
      return this.curves.push(a2), this.currentPoint.set(r2, n2), this;
    }
    splineThru(t2) {
      const e2 = [this.currentPoint.clone()].concat(t2), i2 = new qh(e2);
      return this.curves.push(i2), this.currentPoint.copy(t2[t2.length - 1]), this;
    }
    arc(t2, e2, i2, s2, r2, n2) {
      const a2 = this.currentPoint.x, o2 = this.currentPoint.y;
      return this.absarc(t2 + a2, e2 + o2, i2, s2, r2, n2), this;
    }
    absarc(t2, e2, i2, s2, r2, n2) {
      return this.absellipse(t2, e2, i2, i2, s2, r2, n2), this;
    }
    ellipse(t2, e2, i2, s2, r2, n2, a2, o2) {
      const h2 = this.currentPoint.x, l2 = this.currentPoint.y;
      return this.absellipse(t2 + h2, e2 + l2, i2, s2, r2, n2, a2, o2), this;
    }
    absellipse(t2, e2, i2, s2, r2, n2, a2, o2) {
      const h2 = new zh(t2, e2, i2, s2, r2, n2, a2, o2);
      if (this.curves.length > 0) {
        const t3 = h2.getPoint(0);
        t3.equals(this.currentPoint) || this.lineTo(t3.x, t3.y);
      }
      this.curves.push(h2);
      const l2 = h2.getPoint(1);
      return this.currentPoint.copy(l2), this;
    }
    copy(t2) {
      return super.copy(t2), this.currentPoint.copy(t2.currentPoint), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.currentPoint = this.currentPoint.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.currentPoint.fromArray(t2.currentPoint), this;
    }
  };
  var Zh = class extends Yh {
    constructor(t2) {
      super(t2), this.uuid = rs(), this.type = "Shape", this.holes = [];
    }
    getPointsHoles(t2) {
      const e2 = [];
      for (let i2 = 0, s2 = this.holes.length; i2 < s2; i2++) e2[i2] = this.holes[i2].getPoints(t2);
      return e2;
    }
    extractPoints(t2) {
      return { shape: this.getPoints(t2), holes: this.getPointsHoles(t2) };
    }
    copy(t2) {
      super.copy(t2), this.holes = [];
      for (let e2 = 0, i2 = t2.holes.length; e2 < i2; e2++) {
        const i3 = t2.holes[e2];
        this.holes.push(i3.clone());
      }
      return this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.uuid = this.uuid, t2.holes = [];
      for (let e2 = 0, i2 = this.holes.length; e2 < i2; e2++) {
        const i3 = this.holes[e2];
        t2.holes.push(i3.toJSON());
      }
      return t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.uuid = t2.uuid, this.holes = [];
      for (let e2 = 0, i2 = t2.holes.length; e2 < i2; e2++) {
        const i3 = t2.holes[e2];
        this.holes.push(new Yh().fromJSON(i3));
      }
      return this;
    }
  };
  function Hh(t2, e2, i2 = 2) {
    const s2 = e2 && e2.length, r2 = s2 ? e2[0] * i2 : t2.length;
    let n2 = Gh(t2, 0, r2, i2, true);
    const a2 = [];
    if (!n2 || n2.next === n2.prev) return a2;
    let o2, h2, l2;
    if (s2 && (n2 = (function(t3, e3, i3, s3) {
      const r3 = [];
      for (let i4 = 0, n3 = e3.length; i4 < n3; i4++) {
        const a3 = Gh(t3, e3[i4] * s3, i4 < n3 - 1 ? e3[i4 + 1] * s3 : t3.length, s3, false);
        a3 === a3.next && (a3.steiner = true), r3.push(ol(a3));
      }
      r3.sort(sl);
      for (let t4 = 0; t4 < r3.length; t4++) i3 = rl(r3[t4], i3);
      return i3;
    })(t2, e2, n2, i2)), t2.length > 80 * i2) {
      o2 = t2[0], h2 = t2[1];
      let e3 = o2, s3 = h2;
      for (let n3 = i2; n3 < r2; n3 += i2) {
        const i3 = t2[n3], r3 = t2[n3 + 1];
        i3 < o2 && (o2 = i3), r3 < h2 && (h2 = r3), i3 > e3 && (e3 = i3), r3 > s3 && (s3 = r3);
      }
      l2 = Math.max(e3 - o2, s3 - h2), l2 = 0 !== l2 ? 32767 / l2 : 0;
    }
    return Qh(n2, a2, i2, o2, h2, l2, 0), a2;
  }
  function Gh(t2, e2, i2, s2, r2) {
    let n2;
    if (r2 === (function(t3, e3, i3, s3) {
      let r3 = 0;
      for (let n3 = e3, a2 = i3 - s3; n3 < i3; n3 += s3) r3 += (t3[a2] - t3[n3]) * (t3[n3 + 1] + t3[a2 + 1]), a2 = n3;
      return r3;
    })(t2, e2, i2, s2) > 0) for (let r3 = e2; r3 < i2; r3 += s2) n2 = xl(r3 / s2 | 0, t2[r3], t2[r3 + 1], n2);
    else for (let r3 = i2 - s2; r3 >= e2; r3 -= s2) n2 = xl(r3 / s2 | 0, t2[r3], t2[r3 + 1], n2);
    return n2 && dl(n2, n2.next) && (bl(n2), n2 = n2.next), n2;
  }
  function $h(t2, e2) {
    if (!t2) return t2;
    e2 || (e2 = t2);
    let i2, s2 = t2;
    do {
      if (i2 = false, s2.steiner || !dl(s2, s2.next) && 0 !== ul(s2.prev, s2, s2.next)) s2 = s2.next;
      else {
        if (bl(s2), s2 = e2 = s2.prev, s2 === s2.next) break;
        i2 = true;
      }
    } while (i2 || s2 !== e2);
    return e2;
  }
  function Qh(t2, e2, i2, s2, r2, n2, a2) {
    if (!t2) return;
    !a2 && n2 && (function(t3, e3, i3, s3) {
      let r3 = t3;
      do {
        0 === r3.z && (r3.z = al(r3.x, r3.y, e3, i3, s3)), r3.prevZ = r3.prev, r3.nextZ = r3.next, r3 = r3.next;
      } while (r3 !== t3);
      r3.prevZ.nextZ = null, r3.prevZ = null, (function(t4) {
        let e4, i4 = 1;
        do {
          let s4, r4 = t4;
          t4 = null;
          let n3 = null;
          for (e4 = 0; r4; ) {
            e4++;
            let a3 = r4, o3 = 0;
            for (let t5 = 0; t5 < i4 && (o3++, a3 = a3.nextZ, a3); t5++) ;
            let h2 = i4;
            for (; o3 > 0 || h2 > 0 && a3; ) 0 !== o3 && (0 === h2 || !a3 || r4.z <= a3.z) ? (s4 = r4, r4 = r4.nextZ, o3--) : (s4 = a3, a3 = a3.nextZ, h2--), n3 ? n3.nextZ = s4 : t4 = s4, s4.prevZ = n3, n3 = s4;
            r4 = a3;
          }
          n3.nextZ = null, i4 *= 2;
        } while (e4 > 1);
      })(r3);
    })(t2, s2, r2, n2);
    let o2 = t2;
    for (; t2.prev !== t2.next; ) {
      const h2 = t2.prev, l2 = t2.next;
      if (n2 ? tl(t2, s2, r2, n2) : Kh(t2)) e2.push(h2.i, t2.i, l2.i), bl(t2), t2 = l2.next, o2 = l2.next;
      else if ((t2 = l2) === o2) {
        a2 ? 1 === a2 ? Qh(t2 = el($h(t2), e2), e2, i2, s2, r2, n2, 2) : 2 === a2 && il(t2, e2, i2, s2, r2, n2) : Qh($h(t2), e2, i2, s2, r2, n2, 1);
        break;
      }
    }
  }
  function Kh(t2) {
    const e2 = t2.prev, i2 = t2, s2 = t2.next;
    if (ul(e2, i2, s2) >= 0) return false;
    const r2 = e2.x, n2 = i2.x, a2 = s2.x, o2 = e2.y, h2 = i2.y, l2 = s2.y, c2 = Math.min(r2, n2, a2), u2 = Math.min(o2, h2, l2), d2 = Math.max(r2, n2, a2), p2 = Math.max(o2, h2, l2);
    let m2 = s2.next;
    for (; m2 !== e2; ) {
      if (m2.x >= c2 && m2.x <= d2 && m2.y >= u2 && m2.y <= p2 && ll(r2, o2, n2, h2, a2, l2, m2.x, m2.y) && ul(m2.prev, m2, m2.next) >= 0) return false;
      m2 = m2.next;
    }
    return true;
  }
  function tl(t2, e2, i2, s2) {
    const r2 = t2.prev, n2 = t2, a2 = t2.next;
    if (ul(r2, n2, a2) >= 0) return false;
    const o2 = r2.x, h2 = n2.x, l2 = a2.x, c2 = r2.y, u2 = n2.y, d2 = a2.y, p2 = Math.min(o2, h2, l2), m2 = Math.min(c2, u2, d2), y2 = Math.max(o2, h2, l2), g2 = Math.max(c2, u2, d2), f2 = al(p2, m2, e2, i2, s2), x2 = al(y2, g2, e2, i2, s2);
    let b2 = t2.prevZ, v2 = t2.nextZ;
    for (; b2 && b2.z >= f2 && v2 && v2.z <= x2; ) {
      if (b2.x >= p2 && b2.x <= y2 && b2.y >= m2 && b2.y <= g2 && b2 !== r2 && b2 !== a2 && ll(o2, c2, h2, u2, l2, d2, b2.x, b2.y) && ul(b2.prev, b2, b2.next) >= 0) return false;
      if (b2 = b2.prevZ, v2.x >= p2 && v2.x <= y2 && v2.y >= m2 && v2.y <= g2 && v2 !== r2 && v2 !== a2 && ll(o2, c2, h2, u2, l2, d2, v2.x, v2.y) && ul(v2.prev, v2, v2.next) >= 0) return false;
      v2 = v2.nextZ;
    }
    for (; b2 && b2.z >= f2; ) {
      if (b2.x >= p2 && b2.x <= y2 && b2.y >= m2 && b2.y <= g2 && b2 !== r2 && b2 !== a2 && ll(o2, c2, h2, u2, l2, d2, b2.x, b2.y) && ul(b2.prev, b2, b2.next) >= 0) return false;
      b2 = b2.prevZ;
    }
    for (; v2 && v2.z <= x2; ) {
      if (v2.x >= p2 && v2.x <= y2 && v2.y >= m2 && v2.y <= g2 && v2 !== r2 && v2 !== a2 && ll(o2, c2, h2, u2, l2, d2, v2.x, v2.y) && ul(v2.prev, v2, v2.next) >= 0) return false;
      v2 = v2.nextZ;
    }
    return true;
  }
  function el(t2, e2) {
    let i2 = t2;
    do {
      const s2 = i2.prev, r2 = i2.next.next;
      !dl(s2, r2) && pl(s2, i2, i2.next, r2) && gl(s2, r2) && gl(r2, s2) && (e2.push(s2.i, i2.i, r2.i), bl(i2), bl(i2.next), i2 = t2 = r2), i2 = i2.next;
    } while (i2 !== t2);
    return $h(i2);
  }
  function il(t2, e2, i2, s2, r2, n2) {
    let a2 = t2;
    do {
      let t3 = a2.next.next;
      for (; t3 !== a2.prev; ) {
        if (a2.i !== t3.i && cl(a2, t3)) {
          let o2 = fl(a2, t3);
          return a2 = $h(a2, a2.next), o2 = $h(o2, o2.next), Qh(a2, e2, i2, s2, r2, n2, 0), void Qh(o2, e2, i2, s2, r2, n2, 0);
        }
        t3 = t3.next;
      }
      a2 = a2.next;
    } while (a2 !== t2);
  }
  function sl(t2, e2) {
    let i2 = t2.x - e2.x;
    if (0 === i2 && (i2 = t2.y - e2.y, 0 === i2)) {
      i2 = (t2.next.y - t2.y) / (t2.next.x - t2.x) - (e2.next.y - e2.y) / (e2.next.x - e2.x);
    }
    return i2;
  }
  function rl(t2, e2) {
    const i2 = (function(t3, e3) {
      let i3 = e3;
      const s3 = t3.x, r2 = t3.y;
      let n2, a2 = -1 / 0;
      if (dl(t3, i3)) return i3;
      do {
        if (dl(t3, i3.next)) return i3.next;
        if (r2 <= i3.y && r2 >= i3.next.y && i3.next.y !== i3.y) {
          const t4 = i3.x + (r2 - i3.y) * (i3.next.x - i3.x) / (i3.next.y - i3.y);
          if (t4 <= s3 && t4 > a2 && (a2 = t4, n2 = i3.x < i3.next.x ? i3 : i3.next, t4 === s3)) return n2;
        }
        i3 = i3.next;
      } while (i3 !== e3);
      if (!n2) return null;
      const o2 = n2, h2 = n2.x, l2 = n2.y;
      let c2 = 1 / 0;
      i3 = n2;
      do {
        if (s3 >= i3.x && i3.x >= h2 && s3 !== i3.x && hl(r2 < l2 ? s3 : a2, r2, h2, l2, r2 < l2 ? a2 : s3, r2, i3.x, i3.y)) {
          const e4 = Math.abs(r2 - i3.y) / (s3 - i3.x);
          gl(i3, t3) && (e4 < c2 || e4 === c2 && (i3.x > n2.x || i3.x === n2.x && nl(n2, i3))) && (n2 = i3, c2 = e4);
        }
        i3 = i3.next;
      } while (i3 !== o2);
      return n2;
    })(t2, e2);
    if (!i2) return e2;
    const s2 = fl(i2, t2);
    return $h(s2, s2.next), $h(i2, i2.next);
  }
  function nl(t2, e2) {
    return ul(t2.prev, t2, e2.prev) < 0 && ul(e2.next, t2, t2.next) < 0;
  }
  function al(t2, e2, i2, s2, r2) {
    return (t2 = 1431655765 & ((t2 = 858993459 & ((t2 = 252645135 & ((t2 = 16711935 & ((t2 = (t2 - i2) * r2 | 0) | t2 << 8)) | t2 << 4)) | t2 << 2)) | t2 << 1)) | (e2 = 1431655765 & ((e2 = 858993459 & ((e2 = 252645135 & ((e2 = 16711935 & ((e2 = (e2 - s2) * r2 | 0) | e2 << 8)) | e2 << 4)) | e2 << 2)) | e2 << 1)) << 1;
  }
  function ol(t2) {
    let e2 = t2, i2 = t2;
    do {
      (e2.x < i2.x || e2.x === i2.x && e2.y < i2.y) && (i2 = e2), e2 = e2.next;
    } while (e2 !== t2);
    return i2;
  }
  function hl(t2, e2, i2, s2, r2, n2, a2, o2) {
    return (r2 - a2) * (e2 - o2) >= (t2 - a2) * (n2 - o2) && (t2 - a2) * (s2 - o2) >= (i2 - a2) * (e2 - o2) && (i2 - a2) * (n2 - o2) >= (r2 - a2) * (s2 - o2);
  }
  function ll(t2, e2, i2, s2, r2, n2, a2, o2) {
    return !(t2 === a2 && e2 === o2) && hl(t2, e2, i2, s2, r2, n2, a2, o2);
  }
  function cl(t2, e2) {
    return t2.next.i !== e2.i && t2.prev.i !== e2.i && !(function(t3, e3) {
      let i2 = t3;
      do {
        if (i2.i !== t3.i && i2.next.i !== t3.i && i2.i !== e3.i && i2.next.i !== e3.i && pl(i2, i2.next, t3, e3)) return true;
        i2 = i2.next;
      } while (i2 !== t3);
      return false;
    })(t2, e2) && (gl(t2, e2) && gl(e2, t2) && (function(t3, e3) {
      let i2 = t3, s2 = false;
      const r2 = (t3.x + e3.x) / 2, n2 = (t3.y + e3.y) / 2;
      do {
        i2.y > n2 != i2.next.y > n2 && i2.next.y !== i2.y && r2 < (i2.next.x - i2.x) * (n2 - i2.y) / (i2.next.y - i2.y) + i2.x && (s2 = !s2), i2 = i2.next;
      } while (i2 !== t3);
      return s2;
    })(t2, e2) && (ul(t2.prev, t2, e2.prev) || ul(t2, e2.prev, e2)) || dl(t2, e2) && ul(t2.prev, t2, t2.next) > 0 && ul(e2.prev, e2, e2.next) > 0);
  }
  function ul(t2, e2, i2) {
    return (e2.y - t2.y) * (i2.x - e2.x) - (e2.x - t2.x) * (i2.y - e2.y);
  }
  function dl(t2, e2) {
    return t2.x === e2.x && t2.y === e2.y;
  }
  function pl(t2, e2, i2, s2) {
    const r2 = yl(ul(t2, e2, i2)), n2 = yl(ul(t2, e2, s2)), a2 = yl(ul(i2, s2, t2)), o2 = yl(ul(i2, s2, e2));
    return r2 !== n2 && a2 !== o2 || (!(0 !== r2 || !ml(t2, i2, e2)) || (!(0 !== n2 || !ml(t2, s2, e2)) || (!(0 !== a2 || !ml(i2, t2, s2)) || !(0 !== o2 || !ml(i2, e2, s2)))));
  }
  function ml(t2, e2, i2) {
    return e2.x <= Math.max(t2.x, i2.x) && e2.x >= Math.min(t2.x, i2.x) && e2.y <= Math.max(t2.y, i2.y) && e2.y >= Math.min(t2.y, i2.y);
  }
  function yl(t2) {
    return t2 > 0 ? 1 : t2 < 0 ? -1 : 0;
  }
  function gl(t2, e2) {
    return ul(t2.prev, t2, t2.next) < 0 ? ul(t2, e2, t2.next) >= 0 && ul(t2, t2.prev, e2) >= 0 : ul(t2, e2, t2.prev) < 0 || ul(t2, t2.next, e2) < 0;
  }
  function fl(t2, e2) {
    const i2 = vl(t2.i, t2.x, t2.y), s2 = vl(e2.i, e2.x, e2.y), r2 = t2.next, n2 = e2.prev;
    return t2.next = e2, e2.prev = t2, i2.next = r2, r2.prev = i2, s2.next = i2, i2.prev = s2, n2.next = s2, s2.prev = n2, s2;
  }
  function xl(t2, e2, i2, s2) {
    const r2 = vl(t2, e2, i2);
    return s2 ? (r2.next = s2.next, r2.prev = s2, s2.next.prev = r2, s2.next = r2) : (r2.prev = r2, r2.next = r2), r2;
  }
  function bl(t2) {
    t2.next.prev = t2.prev, t2.prev.next = t2.next, t2.prevZ && (t2.prevZ.nextZ = t2.nextZ), t2.nextZ && (t2.nextZ.prevZ = t2.prevZ);
  }
  function vl(t2, e2, i2) {
    return { i: t2, x: e2, y: i2, prev: null, next: null, z: 0, prevZ: null, nextZ: null, steiner: false };
  }
  var wl = class {
    static triangulate(t2, e2, i2 = 2) {
      return Hh(t2, e2, i2);
    }
  };
  var Ml = class _Ml {
    static area(t2) {
      const e2 = t2.length;
      let i2 = 0;
      for (let s2 = e2 - 1, r2 = 0; r2 < e2; s2 = r2++) i2 += t2[s2].x * t2[r2].y - t2[r2].x * t2[s2].y;
      return 0.5 * i2;
    }
    static isClockWise(t2) {
      return _Ml.area(t2) < 0;
    }
    static triangulateShape(t2, e2) {
      const i2 = [], s2 = [], r2 = [];
      Sl(t2), _l(i2, t2);
      let n2 = t2.length;
      e2.forEach(Sl);
      for (let t3 = 0; t3 < e2.length; t3++) s2.push(n2), n2 += e2[t3].length, _l(i2, e2[t3]);
      const a2 = wl.triangulate(i2, s2);
      for (let t3 = 0; t3 < a2.length; t3 += 3) r2.push(a2.slice(t3, t3 + 3));
      return r2;
    }
  };
  function Sl(t2) {
    const e2 = t2.length;
    e2 > 2 && t2[e2 - 1].equals(t2[0]) && t2.pop();
  }
  function _l(t2, e2) {
    for (let i2 = 0; i2 < e2.length; i2++) t2.push(e2[i2].x), t2.push(e2[i2].y);
  }
  var Al = class _Al extends Nn {
    constructor(t2 = new Zh([new us(0.5, 0.5), new us(-0.5, 0.5), new us(-0.5, -0.5), new us(0.5, -0.5)]), e2 = {}) {
      super(), this.type = "ExtrudeGeometry", this.parameters = { shapes: t2, options: e2 }, t2 = Array.isArray(t2) ? t2 : [t2];
      const i2 = this, s2 = [], r2 = [];
      for (let e3 = 0, i3 = t2.length; e3 < i3; e3++) {
        n2(t2[e3]);
      }
      function n2(t3) {
        const n3 = [], a2 = void 0 !== e2.curveSegments ? e2.curveSegments : 12, o2 = void 0 !== e2.steps ? e2.steps : 1, h2 = void 0 !== e2.depth ? e2.depth : 1;
        let l2 = void 0 === e2.bevelEnabled || e2.bevelEnabled, c2 = void 0 !== e2.bevelThickness ? e2.bevelThickness : 0.2, u2 = void 0 !== e2.bevelSize ? e2.bevelSize : c2 - 0.1, d2 = void 0 !== e2.bevelOffset ? e2.bevelOffset : 0, p2 = void 0 !== e2.bevelSegments ? e2.bevelSegments : 3;
        const m2 = e2.extrudePath, y2 = void 0 !== e2.UVGenerator ? e2.UVGenerator : Tl;
        let g2, f2, x2, b2, v2, w2 = false;
        m2 && (g2 = m2.getSpacedPoints(o2), w2 = true, l2 = false, f2 = m2.computeFrenetFrames(o2, false), x2 = new ps(), b2 = new ps(), v2 = new ps()), l2 || (p2 = 0, c2 = 0, u2 = 0, d2 = 0);
        const M2 = t3.extractPoints(a2);
        let S2 = M2.shape;
        const _2 = M2.holes;
        if (!Ml.isClockWise(S2)) {
          S2 = S2.reverse();
          for (let t4 = 0, e3 = _2.length; t4 < e3; t4++) {
            const e4 = _2[t4];
            Ml.isClockWise(e4) && (_2[t4] = e4.reverse());
          }
        }
        function A2(t4) {
          const e3 = 1e-10 * 1e-10;
          let i3 = t4[0];
          for (let s3 = 1; s3 <= t4.length; s3++) {
            const r3 = s3 % t4.length, n4 = t4[r3], a3 = n4.x - i3.x, o3 = n4.y - i3.y, h3 = a3 * a3 + o3 * o3, l3 = Math.max(Math.abs(n4.x), Math.abs(n4.y), Math.abs(i3.x), Math.abs(i3.y));
            h3 <= e3 * l3 * l3 ? (t4.splice(r3, 1), s3--) : i3 = n4;
          }
        }
        A2(S2), _2.forEach(A2);
        const T2 = _2.length, z2 = S2;
        for (let t4 = 0; t4 < T2; t4++) {
          const e3 = _2[t4];
          S2 = S2.concat(e3);
        }
        function C2(t4, e3, i3) {
          return e3 || Gi("ExtrudeGeometry: vec does not exist"), t4.clone().addScaledVector(e3, i3);
        }
        const I2 = S2.length;
        function B2(t4, e3, i3) {
          let s3, r3, n4;
          const a3 = t4.x - e3.x, o3 = t4.y - e3.y, h3 = i3.x - t4.x, l3 = i3.y - t4.y, c3 = a3 * a3 + o3 * o3, u3 = a3 * l3 - o3 * h3;
          if (Math.abs(u3) > Number.EPSILON) {
            const u4 = Math.sqrt(c3), d3 = Math.sqrt(h3 * h3 + l3 * l3), p3 = e3.x - o3 / u4, m3 = e3.y + a3 / u4, y3 = ((i3.x - l3 / d3 - p3) * l3 - (i3.y + h3 / d3 - m3) * h3) / (a3 * l3 - o3 * h3);
            s3 = p3 + a3 * y3 - t4.x, r3 = m3 + o3 * y3 - t4.y;
            const g3 = s3 * s3 + r3 * r3;
            if (g3 <= 2) return new us(s3, r3);
            n4 = Math.sqrt(g3 / 2);
          } else {
            let t5 = false;
            a3 > Number.EPSILON ? h3 > Number.EPSILON && (t5 = true) : a3 < -Number.EPSILON ? h3 < -Number.EPSILON && (t5 = true) : Math.sign(o3) === Math.sign(l3) && (t5 = true), t5 ? (s3 = -o3, r3 = a3, n4 = Math.sqrt(c3)) : (s3 = a3, r3 = o3, n4 = Math.sqrt(c3 / 2));
          }
          return new us(s3 / n4, r3 / n4);
        }
        const k2 = [];
        for (let t4 = 0, e3 = z2.length, i3 = e3 - 1, s3 = t4 + 1; t4 < e3; t4++, i3++, s3++) i3 === e3 && (i3 = 0), s3 === e3 && (s3 = 0), k2[t4] = B2(z2[t4], z2[i3], z2[s3]);
        const P2 = [];
        let O2, R2, N2 = k2.concat();
        for (let t4 = 0, e3 = T2; t4 < e3; t4++) {
          const e4 = _2[t4];
          O2 = [];
          for (let t5 = 0, i3 = e4.length, s3 = i3 - 1, r3 = t5 + 1; t5 < i3; t5++, s3++, r3++) s3 === i3 && (s3 = 0), r3 === i3 && (r3 = 0), O2[t5] = B2(e4[t5], e4[s3], e4[r3]);
          P2.push(O2), N2 = N2.concat(O2);
        }
        if (0 === p2) R2 = Ml.triangulateShape(z2, _2);
        else {
          const t4 = [], e3 = [];
          for (let i3 = 0; i3 < p2; i3++) {
            const s3 = i3 / p2, r3 = c2 * Math.cos(s3 * Math.PI / 2), n4 = u2 * Math.sin(s3 * Math.PI / 2) + d2;
            for (let e4 = 0, i4 = z2.length; e4 < i4; e4++) {
              const i5 = C2(z2[e4], k2[e4], n4);
              E2(i5.x, i5.y, -r3), 0 === s3 && t4.push(i5);
            }
            for (let t5 = 0, i4 = T2; t5 < i4; t5++) {
              const i5 = _2[t5];
              O2 = P2[t5];
              const a3 = [];
              for (let t6 = 0, e4 = i5.length; t6 < e4; t6++) {
                const e5 = C2(i5[t6], O2[t6], n4);
                E2(e5.x, e5.y, -r3), 0 === s3 && a3.push(e5);
              }
              0 === s3 && e3.push(a3);
            }
          }
          R2 = Ml.triangulateShape(t4, e3);
        }
        const V2 = R2.length, F2 = u2 + d2;
        for (let t4 = 0; t4 < I2; t4++) {
          const e3 = l2 ? C2(S2[t4], N2[t4], F2) : S2[t4];
          w2 ? (b2.copy(f2.normals[0]).multiplyScalar(e3.x), x2.copy(f2.binormals[0]).multiplyScalar(e3.y), v2.copy(g2[0]).add(b2).add(x2), E2(v2.x, v2.y, v2.z)) : E2(e3.x, e3.y, 0);
        }
        for (let t4 = 1; t4 <= o2; t4++) for (let e3 = 0; e3 < I2; e3++) {
          const i3 = l2 ? C2(S2[e3], N2[e3], F2) : S2[e3];
          w2 ? (b2.copy(f2.normals[t4]).multiplyScalar(i3.x), x2.copy(f2.binormals[t4]).multiplyScalar(i3.y), v2.copy(g2[t4]).add(b2).add(x2), E2(v2.x, v2.y, v2.z)) : E2(i3.x, i3.y, h2 / o2 * t4);
        }
        for (let t4 = p2 - 1; t4 >= 0; t4--) {
          const e3 = t4 / p2, i3 = c2 * Math.cos(e3 * Math.PI / 2), s3 = u2 * Math.sin(e3 * Math.PI / 2) + d2;
          for (let t5 = 0, e4 = z2.length; t5 < e4; t5++) {
            const e5 = C2(z2[t5], k2[t5], s3);
            E2(e5.x, e5.y, h2 + i3);
          }
          for (let t5 = 0, e4 = _2.length; t5 < e4; t5++) {
            const e5 = _2[t5];
            O2 = P2[t5];
            for (let t6 = 0, r3 = e5.length; t6 < r3; t6++) {
              const r4 = C2(e5[t6], O2[t6], s3);
              w2 ? E2(r4.x, r4.y + g2[o2 - 1].y, g2[o2 - 1].x + i3) : E2(r4.x, r4.y, h2 + i3);
            }
          }
        }
        function L2(t4, e3) {
          let i3 = t4.length;
          for (; --i3 >= 0; ) {
            const s3 = i3;
            let r3 = i3 - 1;
            r3 < 0 && (r3 = t4.length - 1);
            for (let t5 = 0, i4 = o2 + 2 * p2; t5 < i4; t5++) {
              const i5 = I2 * t5, n4 = I2 * (t5 + 1);
              D2(e3 + s3 + i5, e3 + r3 + i5, e3 + r3 + n4, e3 + s3 + n4);
            }
          }
        }
        function E2(t4, e3, i3) {
          n3.push(t4), n3.push(e3), n3.push(i3);
        }
        function j2(t4, e3, r3) {
          W2(t4), W2(e3), W2(r3);
          const n4 = s2.length / 3, a3 = y2.generateTopUV(i2, s2, n4 - 3, n4 - 2, n4 - 1);
          U2(a3[0]), U2(a3[1]), U2(a3[2]);
        }
        function D2(t4, e3, r3, n4) {
          W2(t4), W2(e3), W2(n4), W2(e3), W2(r3), W2(n4);
          const a3 = s2.length / 3, o3 = y2.generateSideWallUV(i2, s2, a3 - 6, a3 - 3, a3 - 2, a3 - 1);
          U2(o3[0]), U2(o3[1]), U2(o3[3]), U2(o3[1]), U2(o3[2]), U2(o3[3]);
        }
        function W2(t4) {
          s2.push(n3[3 * t4 + 0]), s2.push(n3[3 * t4 + 1]), s2.push(n3[3 * t4 + 2]);
        }
        function U2(t4) {
          r2.push(t4.x), r2.push(t4.y);
        }
        !(function() {
          const t4 = s2.length / 3;
          if (l2) {
            let t5 = 0, e3 = I2 * t5;
            for (let t6 = 0; t6 < V2; t6++) {
              const i3 = R2[t6];
              j2(i3[2] + e3, i3[1] + e3, i3[0] + e3);
            }
            t5 = o2 + 2 * p2, e3 = I2 * t5;
            for (let t6 = 0; t6 < V2; t6++) {
              const i3 = R2[t6];
              j2(i3[0] + e3, i3[1] + e3, i3[2] + e3);
            }
          } else {
            for (let t5 = 0; t5 < V2; t5++) {
              const e3 = R2[t5];
              j2(e3[2], e3[1], e3[0]);
            }
            for (let t5 = 0; t5 < V2; t5++) {
              const e3 = R2[t5];
              j2(e3[0] + I2 * o2, e3[1] + I2 * o2, e3[2] + I2 * o2);
            }
          }
          i2.addGroup(t4, s2.length / 3 - t4, 0);
        })(), (function() {
          const t4 = s2.length / 3;
          let e3 = 0;
          L2(z2, e3), e3 += z2.length;
          for (let t5 = 0, i3 = _2.length; t5 < i3; t5++) {
            const i4 = _2[t5];
            L2(i4, e3), e3 += i4.length;
          }
          i2.addGroup(t4, s2.length / 3 - t4, 1);
        })();
      }
      this.setAttribute("position", new zn(s2, 3)), this.setAttribute("uv", new zn(r2, 2)), this.computeVertexNormals();
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return (function(t3, e2, i2) {
        if (i2.shapes = [], Array.isArray(t3)) for (let e3 = 0, s2 = t3.length; e3 < s2; e3++) {
          const s3 = t3[e3];
          i2.shapes.push(s3.uuid);
        }
        else i2.shapes.push(t3.uuid);
        i2.options = Object.assign({}, e2), void 0 !== e2.extrudePath && (i2.options.extrudePath = e2.extrudePath.toJSON());
        return i2;
      })(this.parameters.shapes, this.parameters.options, t2);
    }
    static fromJSON(t2, e2) {
      const i2 = [];
      for (let s3 = 0, r2 = t2.shapes.length; s3 < r2; s3++) {
        const r3 = e2[t2.shapes[s3]];
        i2.push(r3);
      }
      const s2 = t2.options.extrudePath;
      return void 0 !== s2 && (t2.options.extrudePath = new Jh[s2.type]().fromJSON(s2)), new _Al(i2, t2.options);
    }
  };
  var Tl = { generateTopUV: function(t2, e2, i2, s2, r2) {
    const n2 = e2[3 * i2], a2 = e2[3 * i2 + 1], o2 = e2[3 * s2], h2 = e2[3 * s2 + 1], l2 = e2[3 * r2], c2 = e2[3 * r2 + 1];
    return [new us(n2, a2), new us(o2, h2), new us(l2, c2)];
  }, generateSideWallUV: function(t2, e2, i2, s2, r2, n2) {
    const a2 = e2[3 * i2], o2 = e2[3 * i2 + 1], h2 = e2[3 * i2 + 2], l2 = e2[3 * s2], c2 = e2[3 * s2 + 1], u2 = e2[3 * s2 + 2], d2 = e2[3 * r2], p2 = e2[3 * r2 + 1], m2 = e2[3 * r2 + 2], y2 = e2[3 * n2], g2 = e2[3 * n2 + 1], f2 = e2[3 * n2 + 2];
    return Math.abs(o2 - c2) < Math.abs(a2 - l2) ? [new us(a2, 1 - h2), new us(l2, 1 - u2), new us(d2, 1 - m2), new us(y2, 1 - f2)] : [new us(o2, 1 - h2), new us(c2, 1 - u2), new us(p2, 1 - m2), new us(g2, 1 - f2)];
  } };
  var zl = class _zl extends bh {
    constructor(t2 = 1, e2 = 0) {
      const i2 = (1 + Math.sqrt(5)) / 2;
      super([-1, i2, 0, 1, i2, 0, -1, -i2, 0, 1, -i2, 0, 0, -1, i2, 0, 1, i2, 0, -1, -i2, 0, 1, -i2, i2, 0, -1, i2, 0, 1, -i2, 0, -1, -i2, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t2, e2), this.type = "IcosahedronGeometry", this.parameters = { radius: t2, detail: e2 };
    }
    static fromJSON(t2) {
      return new _zl(t2.radius, t2.detail);
    }
  };
  var Cl = class _Cl extends Nn {
    constructor(t2 = [new us(0, -0.5), new us(0.5, 0), new us(0, 0.5)], e2 = 12, i2 = 0, s2 = 2 * Math.PI) {
      super(), this.type = "LatheGeometry", this.parameters = { points: t2, segments: e2, phiStart: i2, phiLength: s2 }, e2 = Math.floor(e2), s2 = ns(s2, 0, 2 * Math.PI);
      const r2 = [], n2 = [], a2 = [], o2 = [], h2 = [], l2 = 1 / e2, c2 = new ps(), u2 = new us(), d2 = new ps(), p2 = new ps(), m2 = new ps();
      let y2 = 0, g2 = 0;
      for (let e3 = 0; e3 <= t2.length - 1; e3++) switch (e3) {
        case 0:
          y2 = t2[e3 + 1].x - t2[e3].x, g2 = t2[e3 + 1].y - t2[e3].y, d2.x = 1 * g2, d2.y = -y2, d2.z = 0 * g2, m2.copy(d2), d2.normalize(), o2.push(d2.x, d2.y, d2.z);
          break;
        case t2.length - 1:
          o2.push(m2.x, m2.y, m2.z);
          break;
        default:
          y2 = t2[e3 + 1].x - t2[e3].x, g2 = t2[e3 + 1].y - t2[e3].y, d2.x = 1 * g2, d2.y = -y2, d2.z = 0 * g2, p2.copy(d2), d2.x += m2.x, d2.y += m2.y, d2.z += m2.z, d2.normalize(), o2.push(d2.x, d2.y, d2.z), m2.copy(p2);
      }
      for (let r3 = 0; r3 <= e2; r3++) {
        const d3 = i2 + r3 * l2 * s2, p3 = Math.sin(d3), m3 = Math.cos(d3);
        for (let i3 = 0; i3 <= t2.length - 1; i3++) {
          c2.x = t2[i3].x * p3, c2.y = t2[i3].y, c2.z = t2[i3].x * m3, n2.push(c2.x, c2.y, c2.z), u2.x = r3 / e2, u2.y = i3 / (t2.length - 1), a2.push(u2.x, u2.y);
          const s3 = o2[3 * i3 + 0] * p3, l3 = o2[3 * i3 + 1], d4 = o2[3 * i3 + 0] * m3;
          h2.push(s3, l3, d4);
        }
      }
      for (let i3 = 0; i3 < e2; i3++) for (let e3 = 0; e3 < t2.length - 1; e3++) {
        const s3 = e3 + i3 * t2.length, n3 = s3, a3 = s3 + t2.length, o3 = s3 + t2.length + 1, h3 = s3 + 1;
        r2.push(n3, a3, h3), r2.push(o3, h3, a3);
      }
      this.setIndex(r2), this.setAttribute("position", new zn(n2, 3)), this.setAttribute("uv", new zn(a2, 2)), this.setAttribute("normal", new zn(h2, 3));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _Cl(t2.points, t2.segments, t2.phiStart, t2.phiLength);
    }
  };
  var Il = class _Il extends bh {
    constructor(t2 = 1, e2 = 0) {
      super([1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t2, e2), this.type = "OctahedronGeometry", this.parameters = { radius: t2, detail: e2 };
    }
    static fromJSON(t2) {
      return new _Il(t2.radius, t2.detail);
    }
  };
  var Bl = class _Bl extends Nn {
    constructor(t2 = 1, e2 = 1, i2 = 1, s2 = 1) {
      super(), this.type = "PlaneGeometry", this.parameters = { width: t2, height: e2, widthSegments: i2, heightSegments: s2 };
      const r2 = t2 / 2, n2 = e2 / 2, a2 = Math.floor(i2), o2 = Math.floor(s2), h2 = a2 + 1, l2 = o2 + 1, c2 = t2 / a2, u2 = e2 / o2, d2 = [], p2 = [], m2 = [], y2 = [];
      for (let t3 = 0; t3 < l2; t3++) {
        const e3 = t3 * u2 - n2;
        for (let i3 = 0; i3 < h2; i3++) {
          const s3 = i3 * c2 - r2;
          p2.push(s3, -e3, 0), m2.push(0, 0, 1), y2.push(i3 / a2), y2.push(1 - t3 / o2);
        }
      }
      for (let t3 = 0; t3 < o2; t3++) for (let e3 = 0; e3 < a2; e3++) {
        const i3 = e3 + h2 * t3, s3 = e3 + h2 * (t3 + 1), r3 = e3 + 1 + h2 * (t3 + 1), n3 = e3 + 1 + h2 * t3;
        d2.push(i3, s3, n3), d2.push(s3, r3, n3);
      }
      this.setIndex(d2), this.setAttribute("position", new zn(p2, 3)), this.setAttribute("normal", new zn(m2, 3)), this.setAttribute("uv", new zn(y2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _Bl(t2.width, t2.height, t2.widthSegments, t2.heightSegments);
    }
  };
  var kl = class _kl extends Nn {
    constructor(t2 = 0.5, e2 = 1, i2 = 32, s2 = 1, r2 = 0, n2 = 2 * Math.PI) {
      super(), this.type = "RingGeometry", this.parameters = { innerRadius: t2, outerRadius: e2, thetaSegments: i2, phiSegments: s2, thetaStart: r2, thetaLength: n2 }, i2 = Math.max(3, i2);
      const a2 = [], o2 = [], h2 = [], l2 = [];
      let c2 = t2;
      const u2 = (e2 - t2) / (s2 = Math.max(1, s2)), d2 = new ps(), p2 = new us();
      for (let t3 = 0; t3 <= s2; t3++) {
        for (let t4 = 0; t4 <= i2; t4++) {
          const s3 = r2 + t4 / i2 * n2;
          d2.x = c2 * Math.cos(s3), d2.y = c2 * Math.sin(s3), o2.push(d2.x, d2.y, d2.z), h2.push(0, 0, 1), p2.x = (d2.x / e2 + 1) / 2, p2.y = (d2.y / e2 + 1) / 2, l2.push(p2.x, p2.y);
        }
        c2 += u2;
      }
      for (let t3 = 0; t3 < s2; t3++) {
        const e3 = t3 * (i2 + 1);
        for (let t4 = 0; t4 < i2; t4++) {
          const s3 = t4 + e3, r3 = s3, n3 = s3 + i2 + 1, o3 = s3 + i2 + 2, h3 = s3 + 1;
          a2.push(r3, n3, h3), a2.push(n3, o3, h3);
        }
      }
      this.setIndex(a2), this.setAttribute("position", new zn(o2, 3)), this.setAttribute("normal", new zn(h2, 3)), this.setAttribute("uv", new zn(l2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _kl(t2.innerRadius, t2.outerRadius, t2.thetaSegments, t2.phiSegments, t2.thetaStart, t2.thetaLength);
    }
  };
  var Pl = class _Pl extends Nn {
    constructor(t2 = new Zh([new us(0, 0.5), new us(-0.5, -0.5), new us(0.5, -0.5)]), e2 = 12) {
      super(), this.type = "ShapeGeometry", this.parameters = { shapes: t2, curveSegments: e2 };
      const i2 = [], s2 = [], r2 = [], n2 = [];
      let a2 = 0, o2 = 0;
      if (false === Array.isArray(t2)) h2(t2);
      else for (let e3 = 0; e3 < t2.length; e3++) h2(t2[e3]), this.addGroup(a2, o2, e3), a2 += o2, o2 = 0;
      function h2(t3) {
        const a3 = s2.length / 3, h3 = t3.extractPoints(e2);
        let l2 = h3.shape;
        const c2 = h3.holes;
        false === Ml.isClockWise(l2) && (l2 = l2.reverse());
        for (let t4 = 0, e3 = c2.length; t4 < e3; t4++) {
          const e4 = c2[t4];
          true === Ml.isClockWise(e4) && (c2[t4] = e4.reverse());
        }
        const u2 = Ml.triangulateShape(l2, c2);
        for (let t4 = 0, e3 = c2.length; t4 < e3; t4++) {
          const e4 = c2[t4];
          l2 = l2.concat(e4);
        }
        for (let t4 = 0, e3 = l2.length; t4 < e3; t4++) {
          const e4 = l2[t4];
          s2.push(e4.x, e4.y, 0), r2.push(0, 0, 1), n2.push(e4.x, e4.y);
        }
        for (let t4 = 0, e3 = u2.length; t4 < e3; t4++) {
          const e4 = u2[t4], s3 = e4[0] + a3, r3 = e4[1] + a3, n3 = e4[2] + a3;
          i2.push(s3, r3, n3), o2 += 3;
        }
      }
      this.setIndex(i2), this.setAttribute("position", new zn(s2, 3)), this.setAttribute("normal", new zn(r2, 3)), this.setAttribute("uv", new zn(n2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return (function(t3, e2) {
        if (e2.shapes = [], Array.isArray(t3)) for (let i2 = 0, s2 = t3.length; i2 < s2; i2++) {
          const s3 = t3[i2];
          e2.shapes.push(s3.uuid);
        }
        else e2.shapes.push(t3.uuid);
        return e2;
      })(this.parameters.shapes, t2);
    }
    static fromJSON(t2, e2) {
      const i2 = [];
      for (let s2 = 0, r2 = t2.shapes.length; s2 < r2; s2++) {
        const r3 = e2[t2.shapes[s2]];
        i2.push(r3);
      }
      return new _Pl(i2, t2.curveSegments);
    }
  };
  var Ol = class _Ol extends Nn {
    constructor(t2 = 1, e2 = 32, i2 = 16, s2 = 0, r2 = 2 * Math.PI, n2 = 0, a2 = Math.PI) {
      super(), this.type = "SphereGeometry", this.parameters = { radius: t2, widthSegments: e2, heightSegments: i2, phiStart: s2, phiLength: r2, thetaStart: n2, thetaLength: a2 }, e2 = Math.max(3, Math.floor(e2)), i2 = Math.max(2, Math.floor(i2));
      const o2 = Math.min(n2 + a2, Math.PI);
      let h2 = 0;
      const l2 = [], c2 = new ps(), u2 = new ps(), d2 = [], p2 = [], m2 = [], y2 = [];
      for (let d3 = 0; d3 <= i2; d3++) {
        const g2 = [], f2 = d3 / i2;
        let x2 = 0;
        0 === d3 && 0 === n2 ? x2 = 0.5 / e2 : d3 === i2 && o2 === Math.PI && (x2 = -0.5 / e2);
        for (let i3 = 0; i3 <= e2; i3++) {
          const o3 = i3 / e2;
          c2.x = -t2 * Math.cos(s2 + o3 * r2) * Math.sin(n2 + f2 * a2), c2.y = t2 * Math.cos(n2 + f2 * a2), c2.z = t2 * Math.sin(s2 + o3 * r2) * Math.sin(n2 + f2 * a2), p2.push(c2.x, c2.y, c2.z), u2.copy(c2).normalize(), m2.push(u2.x, u2.y, u2.z), y2.push(o3 + x2, 1 - f2), g2.push(h2++);
        }
        l2.push(g2);
      }
      for (let t3 = 0; t3 < i2; t3++) for (let s3 = 0; s3 < e2; s3++) {
        const e3 = l2[t3][s3 + 1], r3 = l2[t3][s3], a3 = l2[t3 + 1][s3], h3 = l2[t3 + 1][s3 + 1];
        (0 !== t3 || n2 > 0) && d2.push(e3, r3, h3), (t3 !== i2 - 1 || o2 < Math.PI) && d2.push(r3, a3, h3);
      }
      this.setIndex(d2), this.setAttribute("position", new zn(p2, 3)), this.setAttribute("normal", new zn(m2, 3)), this.setAttribute("uv", new zn(y2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _Ol(t2.radius, t2.widthSegments, t2.heightSegments, t2.phiStart, t2.phiLength, t2.thetaStart, t2.thetaLength);
    }
  };
  var Rl = class _Rl extends bh {
    constructor(t2 = 1, e2 = 0) {
      super([1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t2, e2), this.type = "TetrahedronGeometry", this.parameters = { radius: t2, detail: e2 };
    }
    static fromJSON(t2) {
      return new _Rl(t2.radius, t2.detail);
    }
  };
  var Nl = class _Nl extends Nn {
    constructor(t2 = 1, e2 = 0.4, i2 = 12, s2 = 48, r2 = 2 * Math.PI) {
      super(), this.type = "TorusGeometry", this.parameters = { radius: t2, tube: e2, radialSegments: i2, tubularSegments: s2, arc: r2 }, i2 = Math.floor(i2), s2 = Math.floor(s2);
      const n2 = [], a2 = [], o2 = [], h2 = [], l2 = new ps(), c2 = new ps(), u2 = new ps();
      for (let n3 = 0; n3 <= i2; n3++) for (let d2 = 0; d2 <= s2; d2++) {
        const p2 = d2 / s2 * r2, m2 = n3 / i2 * Math.PI * 2;
        c2.x = (t2 + e2 * Math.cos(m2)) * Math.cos(p2), c2.y = (t2 + e2 * Math.cos(m2)) * Math.sin(p2), c2.z = e2 * Math.sin(m2), a2.push(c2.x, c2.y, c2.z), l2.x = t2 * Math.cos(p2), l2.y = t2 * Math.sin(p2), u2.subVectors(c2, l2).normalize(), o2.push(u2.x, u2.y, u2.z), h2.push(d2 / s2), h2.push(n3 / i2);
      }
      for (let t3 = 1; t3 <= i2; t3++) for (let e3 = 1; e3 <= s2; e3++) {
        const i3 = (s2 + 1) * t3 + e3 - 1, r3 = (s2 + 1) * (t3 - 1) + e3 - 1, a3 = (s2 + 1) * (t3 - 1) + e3, o3 = (s2 + 1) * t3 + e3;
        n2.push(i3, r3, o3), n2.push(r3, a3, o3);
      }
      this.setIndex(n2), this.setAttribute("position", new zn(a2, 3)), this.setAttribute("normal", new zn(o2, 3)), this.setAttribute("uv", new zn(h2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _Nl(t2.radius, t2.tube, t2.radialSegments, t2.tubularSegments, t2.arc);
    }
  };
  var Vl = class _Vl extends Nn {
    constructor(t2 = 1, e2 = 0.4, i2 = 64, s2 = 8, r2 = 2, n2 = 3) {
      super(), this.type = "TorusKnotGeometry", this.parameters = { radius: t2, tube: e2, tubularSegments: i2, radialSegments: s2, p: r2, q: n2 }, i2 = Math.floor(i2), s2 = Math.floor(s2);
      const a2 = [], o2 = [], h2 = [], l2 = [], c2 = new ps(), u2 = new ps(), d2 = new ps(), p2 = new ps(), m2 = new ps(), y2 = new ps(), g2 = new ps();
      for (let a3 = 0; a3 <= i2; ++a3) {
        const x2 = a3 / i2 * r2 * Math.PI * 2;
        f2(x2, r2, n2, t2, d2), f2(x2 + 0.01, r2, n2, t2, p2), y2.subVectors(p2, d2), g2.addVectors(p2, d2), m2.crossVectors(y2, g2), g2.crossVectors(m2, y2), m2.normalize(), g2.normalize();
        for (let t3 = 0; t3 <= s2; ++t3) {
          const r3 = t3 / s2 * Math.PI * 2, n3 = -e2 * Math.cos(r3), p3 = e2 * Math.sin(r3);
          c2.x = d2.x + (n3 * g2.x + p3 * m2.x), c2.y = d2.y + (n3 * g2.y + p3 * m2.y), c2.z = d2.z + (n3 * g2.z + p3 * m2.z), o2.push(c2.x, c2.y, c2.z), u2.subVectors(c2, d2).normalize(), h2.push(u2.x, u2.y, u2.z), l2.push(a3 / i2), l2.push(t3 / s2);
        }
      }
      for (let t3 = 1; t3 <= i2; t3++) for (let e3 = 1; e3 <= s2; e3++) {
        const i3 = (s2 + 1) * (t3 - 1) + (e3 - 1), r3 = (s2 + 1) * t3 + (e3 - 1), n3 = (s2 + 1) * t3 + e3, o3 = (s2 + 1) * (t3 - 1) + e3;
        a2.push(i3, r3, o3), a2.push(r3, n3, o3);
      }
      function f2(t3, e3, i3, s3, r3) {
        const n3 = Math.cos(t3), a3 = Math.sin(t3), o3 = i3 / e3 * t3, h3 = Math.cos(o3);
        r3.x = s3 * (2 + h3) * 0.5 * n3, r3.y = s3 * (2 + h3) * a3 * 0.5, r3.z = s3 * Math.sin(o3) * 0.5;
      }
      this.setIndex(a2), this.setAttribute("position", new zn(o2, 3)), this.setAttribute("normal", new zn(h2, 3)), this.setAttribute("uv", new zn(l2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _Vl(t2.radius, t2.tube, t2.tubularSegments, t2.radialSegments, t2.p, t2.q);
    }
  };
  var Fl = class _Fl extends Nn {
    constructor(t2 = new Uh(new ps(-1, -1, 0), new ps(-1, 1, 0), new ps(1, 1, 0)), e2 = 64, i2 = 1, s2 = 8, r2 = false) {
      super(), this.type = "TubeGeometry", this.parameters = { path: t2, tubularSegments: e2, radius: i2, radialSegments: s2, closed: r2 };
      const n2 = t2.computeFrenetFrames(e2, r2);
      this.tangents = n2.tangents, this.normals = n2.normals, this.binormals = n2.binormals;
      const a2 = new ps(), o2 = new ps(), h2 = new us();
      let l2 = new ps();
      const c2 = [], u2 = [], d2 = [], p2 = [];
      function m2(r3) {
        l2 = t2.getPointAt(r3 / e2, l2);
        const h3 = n2.normals[r3], d3 = n2.binormals[r3];
        for (let t3 = 0; t3 <= s2; t3++) {
          const e3 = t3 / s2 * Math.PI * 2, r4 = Math.sin(e3), n3 = -Math.cos(e3);
          o2.x = n3 * h3.x + r4 * d3.x, o2.y = n3 * h3.y + r4 * d3.y, o2.z = n3 * h3.z + r4 * d3.z, o2.normalize(), u2.push(o2.x, o2.y, o2.z), a2.x = l2.x + i2 * o2.x, a2.y = l2.y + i2 * o2.y, a2.z = l2.z + i2 * o2.z, c2.push(a2.x, a2.y, a2.z);
        }
      }
      !(function() {
        for (let t3 = 0; t3 < e2; t3++) m2(t3);
        m2(false === r2 ? e2 : 0), (function() {
          for (let t3 = 0; t3 <= e2; t3++) for (let i3 = 0; i3 <= s2; i3++) h2.x = t3 / e2, h2.y = i3 / s2, d2.push(h2.x, h2.y);
        })(), (function() {
          for (let t3 = 1; t3 <= e2; t3++) for (let e3 = 1; e3 <= s2; e3++) {
            const i3 = (s2 + 1) * (t3 - 1) + (e3 - 1), r3 = (s2 + 1) * t3 + (e3 - 1), n3 = (s2 + 1) * t3 + e3, a3 = (s2 + 1) * (t3 - 1) + e3;
            p2.push(i3, r3, a3), p2.push(r3, n3, a3);
          }
        })();
      })(), this.setIndex(p2), this.setAttribute("position", new zn(c2, 3)), this.setAttribute("normal", new zn(u2, 3)), this.setAttribute("uv", new zn(d2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.path = this.parameters.path.toJSON(), t2;
    }
    static fromJSON(t2) {
      return new _Fl(new Jh[t2.path.type]().fromJSON(t2.path), t2.tubularSegments, t2.radius, t2.radialSegments, t2.closed);
    }
  };
  var Ll = class extends Nn {
    constructor(t2 = null) {
      if (super(), this.type = "WireframeGeometry", this.parameters = { geometry: t2 }, null !== t2) {
        const e2 = [], i2 = /* @__PURE__ */ new Set(), s2 = new ps(), r2 = new ps();
        if (null !== t2.index) {
          const n2 = t2.attributes.position, a2 = t2.index;
          let o2 = t2.groups;
          0 === o2.length && (o2 = [{ start: 0, count: a2.count, materialIndex: 0 }]);
          for (let t3 = 0, h2 = o2.length; t3 < h2; ++t3) {
            const h3 = o2[t3], l2 = h3.start;
            for (let t4 = l2, o3 = l2 + h3.count; t4 < o3; t4 += 3) for (let o4 = 0; o4 < 3; o4++) {
              const h4 = a2.getX(t4 + o4), l3 = a2.getX(t4 + (o4 + 1) % 3);
              s2.fromBufferAttribute(n2, h4), r2.fromBufferAttribute(n2, l3), true === El(s2, r2, i2) && (e2.push(s2.x, s2.y, s2.z), e2.push(r2.x, r2.y, r2.z));
            }
          }
        } else {
          const n2 = t2.attributes.position;
          for (let t3 = 0, a2 = n2.count / 3; t3 < a2; t3++) for (let a3 = 0; a3 < 3; a3++) {
            const o2 = 3 * t3 + a3, h2 = 3 * t3 + (a3 + 1) % 3;
            s2.fromBufferAttribute(n2, o2), r2.fromBufferAttribute(n2, h2), true === El(s2, r2, i2) && (e2.push(s2.x, s2.y, s2.z), e2.push(r2.x, r2.y, r2.z));
          }
        }
        this.setAttribute("position", new zn(e2, 3));
      }
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
  };
  function El(t2, e2, i2) {
    const s2 = `${t2.x},${t2.y},${t2.z}-${e2.x},${e2.y},${e2.z}`, r2 = `${e2.x},${e2.y},${e2.z}-${t2.x},${t2.y},${t2.z}`;
    return true !== i2.has(s2) && true !== i2.has(r2) && (i2.add(s2), i2.add(r2), true);
  }
  var jl = Object.freeze({ __proto__: null, BoxGeometry: Hn, CapsuleGeometry: yh, CircleGeometry: gh, ConeGeometry: xh, CylinderGeometry: fh, DodecahedronGeometry: vh, EdgesGeometry: Ah, ExtrudeGeometry: Al, IcosahedronGeometry: zl, LatheGeometry: Cl, OctahedronGeometry: Il, PlaneGeometry: Bl, PolyhedronGeometry: bh, RingGeometry: kl, ShapeGeometry: Pl, SphereGeometry: Ol, TetrahedronGeometry: Rl, TorusGeometry: Nl, TorusKnotGeometry: Vl, TubeGeometry: Fl, WireframeGeometry: Ll });
  var Ul = class extends hn {
    constructor(t2) {
      super(), this.isMeshStandardMaterial = true, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new nn(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new nn(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new us(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Mr(), this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.defines = { STANDARD: "" }, this.color.copy(t2.color), this.roughness = t2.roughness, this.metalness = t2.metalness, this.map = t2.map, this.lightMap = t2.lightMap, this.lightMapIntensity = t2.lightMapIntensity, this.aoMap = t2.aoMap, this.aoMapIntensity = t2.aoMapIntensity, this.emissive.copy(t2.emissive), this.emissiveMap = t2.emissiveMap, this.emissiveIntensity = t2.emissiveIntensity, this.bumpMap = t2.bumpMap, this.bumpScale = t2.bumpScale, this.normalMap = t2.normalMap, this.normalMapType = t2.normalMapType, this.normalScale.copy(t2.normalScale), this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this.roughnessMap = t2.roughnessMap, this.metalnessMap = t2.metalnessMap, this.alphaMap = t2.alphaMap, this.envMap = t2.envMap, this.envMapRotation.copy(t2.envMapRotation), this.envMapIntensity = t2.envMapIntensity, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.wireframeLinecap = t2.wireframeLinecap, this.wireframeLinejoin = t2.wireframeLinejoin, this.flatShading = t2.flatShading, this.fog = t2.fog, this;
    }
  };
  var ql = class extends Ul {
    constructor(t2) {
      super(), this.isMeshPhysicalMaterial = true, this.defines = { STANDARD: "", PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new us(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", { get: function() {
        return ns(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      }, set: function(t3) {
        this.ior = (1 + 0.4 * t3) / (1 - 0.4 * t3);
      } }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new nn(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new nn(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new nn(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(t2);
    }
    get anisotropy() {
      return this._anisotropy;
    }
    set anisotropy(t2) {
      this._anisotropy > 0 != t2 > 0 && this.version++, this._anisotropy = t2;
    }
    get clearcoat() {
      return this._clearcoat;
    }
    set clearcoat(t2) {
      this._clearcoat > 0 != t2 > 0 && this.version++, this._clearcoat = t2;
    }
    get iridescence() {
      return this._iridescence;
    }
    set iridescence(t2) {
      this._iridescence > 0 != t2 > 0 && this.version++, this._iridescence = t2;
    }
    get dispersion() {
      return this._dispersion;
    }
    set dispersion(t2) {
      this._dispersion > 0 != t2 > 0 && this.version++, this._dispersion = t2;
    }
    get sheen() {
      return this._sheen;
    }
    set sheen(t2) {
      this._sheen > 0 != t2 > 0 && this.version++, this._sheen = t2;
    }
    get transmission() {
      return this._transmission;
    }
    set transmission(t2) {
      this._transmission > 0 != t2 > 0 && this.version++, this._transmission = t2;
    }
    copy(t2) {
      return super.copy(t2), this.defines = { STANDARD: "", PHYSICAL: "" }, this.anisotropy = t2.anisotropy, this.anisotropyRotation = t2.anisotropyRotation, this.anisotropyMap = t2.anisotropyMap, this.clearcoat = t2.clearcoat, this.clearcoatMap = t2.clearcoatMap, this.clearcoatRoughness = t2.clearcoatRoughness, this.clearcoatRoughnessMap = t2.clearcoatRoughnessMap, this.clearcoatNormalMap = t2.clearcoatNormalMap, this.clearcoatNormalScale.copy(t2.clearcoatNormalScale), this.dispersion = t2.dispersion, this.ior = t2.ior, this.iridescence = t2.iridescence, this.iridescenceMap = t2.iridescenceMap, this.iridescenceIOR = t2.iridescenceIOR, this.iridescenceThicknessRange = [...t2.iridescenceThicknessRange], this.iridescenceThicknessMap = t2.iridescenceThicknessMap, this.sheen = t2.sheen, this.sheenColor.copy(t2.sheenColor), this.sheenColorMap = t2.sheenColorMap, this.sheenRoughness = t2.sheenRoughness, this.sheenRoughnessMap = t2.sheenRoughnessMap, this.transmission = t2.transmission, this.transmissionMap = t2.transmissionMap, this.thickness = t2.thickness, this.thicknessMap = t2.thicknessMap, this.attenuationDistance = t2.attenuationDistance, this.attenuationColor.copy(t2.attenuationColor), this.specularIntensity = t2.specularIntensity, this.specularIntensityMap = t2.specularIntensityMap, this.specularColor.copy(t2.specularColor), this.specularColorMap = t2.specularColorMap, this;
    }
  };
  var Hl = class extends hn {
    constructor(t2) {
      super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.depthPacking = t2.depthPacking, this.map = t2.map, this.alphaMap = t2.alphaMap, this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this;
    }
  };
  var Gl = class extends hn {
    constructor(t2) {
      super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.map = t2.map, this.alphaMap = t2.alphaMap, this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this;
    }
  };
  function Kl(t2, e2) {
    return t2 && t2.constructor !== e2 ? "number" == typeof e2.BYTES_PER_ELEMENT ? new e2(t2) : Array.prototype.slice.call(t2) : t2;
  }
  function tc(t2) {
    return ArrayBuffer.isView(t2) && !(t2 instanceof DataView);
  }
  var nc = class {
    constructor(t2, e2, i2, s2) {
      this.parameterPositions = t2, this._cachedIndex = 0, this.resultBuffer = void 0 !== s2 ? s2 : new e2.constructor(i2), this.sampleValues = e2, this.valueSize = i2, this.settings = null, this.DefaultSettings_ = {};
    }
    evaluate(t2) {
      const e2 = this.parameterPositions;
      let i2 = this._cachedIndex, s2 = e2[i2], r2 = e2[i2 - 1];
      t: {
        e: {
          let n2;
          i: {
            s: if (!(t2 < s2)) {
              for (let n3 = i2 + 2; ; ) {
                if (void 0 === s2) {
                  if (t2 < r2) break s;
                  return i2 = e2.length, this._cachedIndex = i2, this.copySampleValue_(i2 - 1);
                }
                if (i2 === n3) break;
                if (r2 = s2, s2 = e2[++i2], t2 < s2) break e;
              }
              n2 = e2.length;
              break i;
            }
            if (!(t2 >= r2)) {
              const a2 = e2[1];
              t2 < a2 && (i2 = 2, r2 = a2);
              for (let n3 = i2 - 2; ; ) {
                if (void 0 === r2) return this._cachedIndex = 0, this.copySampleValue_(0);
                if (i2 === n3) break;
                if (s2 = r2, r2 = e2[--i2 - 1], t2 >= r2) break e;
              }
              n2 = i2, i2 = 0;
              break i;
            }
            break t;
          }
          for (; i2 < n2; ) {
            const s3 = i2 + n2 >>> 1;
            t2 < e2[s3] ? n2 = s3 : i2 = s3 + 1;
          }
          if (s2 = e2[i2], r2 = e2[i2 - 1], void 0 === r2) return this._cachedIndex = 0, this.copySampleValue_(0);
          if (void 0 === s2) return i2 = e2.length, this._cachedIndex = i2, this.copySampleValue_(i2 - 1);
        }
        this._cachedIndex = i2, this.intervalChanged_(i2, r2, s2);
      }
      return this.interpolate_(i2, r2, t2, s2);
    }
    getSettings_() {
      return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(t2) {
      const e2 = this.resultBuffer, i2 = this.sampleValues, s2 = this.valueSize, r2 = t2 * s2;
      for (let t3 = 0; t3 !== s2; ++t3) e2[t3] = i2[r2 + t3];
      return e2;
    }
    interpolate_() {
      throw new Error("call to abstract method");
    }
    intervalChanged_() {
    }
  };
  var ac = class extends nc {
    constructor(t2, e2, i2, s2) {
      super(t2, e2, i2, s2), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: Re, endingEnd: Re };
    }
    intervalChanged_(t2, e2, i2) {
      const s2 = this.parameterPositions;
      let r2 = t2 - 2, n2 = t2 + 1, a2 = s2[r2], o2 = s2[n2];
      if (void 0 === a2) switch (this.getSettings_().endingStart) {
        case Ne:
          r2 = t2, a2 = 2 * e2 - i2;
          break;
        case Ve:
          r2 = s2.length - 2, a2 = e2 + s2[r2] - s2[r2 + 1];
          break;
        default:
          r2 = t2, a2 = i2;
      }
      if (void 0 === o2) switch (this.getSettings_().endingEnd) {
        case Ne:
          n2 = t2, o2 = 2 * i2 - e2;
          break;
        case Ve:
          n2 = 1, o2 = i2 + s2[1] - s2[0];
          break;
        default:
          n2 = t2 - 1, o2 = e2;
      }
      const h2 = 0.5 * (i2 - e2), l2 = this.valueSize;
      this._weightPrev = h2 / (e2 - a2), this._weightNext = h2 / (o2 - i2), this._offsetPrev = r2 * l2, this._offsetNext = n2 * l2;
    }
    interpolate_(t2, e2, i2, s2) {
      const r2 = this.resultBuffer, n2 = this.sampleValues, a2 = this.valueSize, o2 = t2 * a2, h2 = o2 - a2, l2 = this._offsetPrev, c2 = this._offsetNext, u2 = this._weightPrev, d2 = this._weightNext, p2 = (i2 - e2) / (s2 - e2), m2 = p2 * p2, y2 = m2 * p2, g2 = -u2 * y2 + 2 * u2 * m2 - u2 * p2, f2 = (1 + u2) * y2 + (-1.5 - 2 * u2) * m2 + (-0.5 + u2) * p2 + 1, x2 = (-1 - d2) * y2 + (1.5 + d2) * m2 + 0.5 * p2, b2 = d2 * y2 - d2 * m2;
      for (let t3 = 0; t3 !== a2; ++t3) r2[t3] = g2 * n2[l2 + t3] + f2 * n2[h2 + t3] + x2 * n2[o2 + t3] + b2 * n2[c2 + t3];
      return r2;
    }
  };
  var oc = class extends nc {
    constructor(t2, e2, i2, s2) {
      super(t2, e2, i2, s2);
    }
    interpolate_(t2, e2, i2, s2) {
      const r2 = this.resultBuffer, n2 = this.sampleValues, a2 = this.valueSize, o2 = t2 * a2, h2 = o2 - a2, l2 = (i2 - e2) / (s2 - e2), c2 = 1 - l2;
      for (let t3 = 0; t3 !== a2; ++t3) r2[t3] = n2[h2 + t3] * c2 + n2[o2 + t3] * l2;
      return r2;
    }
  };
  var hc = class extends nc {
    constructor(t2, e2, i2, s2) {
      super(t2, e2, i2, s2);
    }
    interpolate_(t2) {
      return this.copySampleValue_(t2 - 1);
    }
  };
  var lc = class {
    constructor(t2, e2, i2, s2) {
      if (void 0 === t2) throw new Error("THREE.KeyframeTrack: track name is undefined");
      if (void 0 === e2 || 0 === e2.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t2);
      this.name = t2, this.times = Kl(e2, this.TimeBufferType), this.values = Kl(i2, this.ValueBufferType), this.setInterpolation(s2 || this.DefaultInterpolation);
    }
    static toJSON(t2) {
      const e2 = t2.constructor;
      let i2;
      if (e2.toJSON !== this.toJSON) i2 = e2.toJSON(t2);
      else {
        i2 = { name: t2.name, times: Kl(t2.times, Array), values: Kl(t2.values, Array) };
        const e3 = t2.getInterpolation();
        e3 !== t2.DefaultInterpolation && (i2.interpolation = e3);
      }
      return i2.type = t2.ValueTypeName, i2;
    }
    InterpolantFactoryMethodDiscrete(t2) {
      return new hc(this.times, this.values, this.getValueSize(), t2);
    }
    InterpolantFactoryMethodLinear(t2) {
      return new oc(this.times, this.values, this.getValueSize(), t2);
    }
    InterpolantFactoryMethodSmooth(t2) {
      return new ac(this.times, this.values, this.getValueSize(), t2);
    }
    setInterpolation(t2) {
      let e2;
      switch (t2) {
        case ke:
          e2 = this.InterpolantFactoryMethodDiscrete;
          break;
        case Pe:
          e2 = this.InterpolantFactoryMethodLinear;
          break;
        case Oe:
          e2 = this.InterpolantFactoryMethodSmooth;
      }
      if (void 0 === e2) {
        const e3 = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
        if (void 0 === this.createInterpolant) {
          if (t2 === this.DefaultInterpolation) throw new Error(e3);
          this.setInterpolation(this.DefaultInterpolation);
        }
        return Hi("KeyframeTrack:", e3), this;
      }
      return this.createInterpolant = e2, this;
    }
    getInterpolation() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return ke;
        case this.InterpolantFactoryMethodLinear:
          return Pe;
        case this.InterpolantFactoryMethodSmooth:
          return Oe;
      }
    }
    getValueSize() {
      return this.values.length / this.times.length;
    }
    shift(t2) {
      if (0 !== t2) {
        const e2 = this.times;
        for (let i2 = 0, s2 = e2.length; i2 !== s2; ++i2) e2[i2] += t2;
      }
      return this;
    }
    scale(t2) {
      if (1 !== t2) {
        const e2 = this.times;
        for (let i2 = 0, s2 = e2.length; i2 !== s2; ++i2) e2[i2] *= t2;
      }
      return this;
    }
    trim(t2, e2) {
      const i2 = this.times, s2 = i2.length;
      let r2 = 0, n2 = s2 - 1;
      for (; r2 !== s2 && i2[r2] < t2; ) ++r2;
      for (; -1 !== n2 && i2[n2] > e2; ) --n2;
      if (++n2, 0 !== r2 || n2 !== s2) {
        r2 >= n2 && (n2 = Math.max(n2, 1), r2 = n2 - 1);
        const t3 = this.getValueSize();
        this.times = i2.slice(r2, n2), this.values = this.values.slice(r2 * t3, n2 * t3);
      }
      return this;
    }
    validate() {
      let t2 = true;
      const e2 = this.getValueSize();
      e2 - Math.floor(e2) !== 0 && (Gi("KeyframeTrack: Invalid value size in track.", this), t2 = false);
      const i2 = this.times, s2 = this.values, r2 = i2.length;
      0 === r2 && (Gi("KeyframeTrack: Track is empty.", this), t2 = false);
      let n2 = null;
      for (let e3 = 0; e3 !== r2; e3++) {
        const s3 = i2[e3];
        if ("number" == typeof s3 && isNaN(s3)) {
          Gi("KeyframeTrack: Time is not a valid number.", this, e3, s3), t2 = false;
          break;
        }
        if (null !== n2 && n2 > s3) {
          Gi("KeyframeTrack: Out of order keys.", this, e3, s3, n2), t2 = false;
          break;
        }
        n2 = s3;
      }
      if (void 0 !== s2 && tc(s2)) for (let e3 = 0, i3 = s2.length; e3 !== i3; ++e3) {
        const i4 = s2[e3];
        if (isNaN(i4)) {
          Gi("KeyframeTrack: Value is not a valid number.", this, e3, i4), t2 = false;
          break;
        }
      }
      return t2;
    }
    optimize() {
      const t2 = this.times.slice(), e2 = this.values.slice(), i2 = this.getValueSize(), s2 = this.getInterpolation() === Oe, r2 = t2.length - 1;
      let n2 = 1;
      for (let a2 = 1; a2 < r2; ++a2) {
        let r3 = false;
        const o2 = t2[a2];
        if (o2 !== t2[a2 + 1] && (1 !== a2 || o2 !== t2[0])) if (s2) r3 = true;
        else {
          const t3 = a2 * i2, s3 = t3 - i2, n3 = t3 + i2;
          for (let a3 = 0; a3 !== i2; ++a3) {
            const i3 = e2[t3 + a3];
            if (i3 !== e2[s3 + a3] || i3 !== e2[n3 + a3]) {
              r3 = true;
              break;
            }
          }
        }
        if (r3) {
          if (a2 !== n2) {
            t2[n2] = t2[a2];
            const s3 = a2 * i2, r4 = n2 * i2;
            for (let t3 = 0; t3 !== i2; ++t3) e2[r4 + t3] = e2[s3 + t3];
          }
          ++n2;
        }
      }
      if (r2 > 0) {
        t2[n2] = t2[r2];
        for (let t3 = r2 * i2, s3 = n2 * i2, a2 = 0; a2 !== i2; ++a2) e2[s3 + a2] = e2[t3 + a2];
        ++n2;
      }
      return n2 !== t2.length ? (this.times = t2.slice(0, n2), this.values = e2.slice(0, n2 * i2)) : (this.times = t2, this.values = e2), this;
    }
    clone() {
      const t2 = this.times.slice(), e2 = this.values.slice(), i2 = new (0, this.constructor)(this.name, t2, e2);
      return i2.createInterpolant = this.createInterpolant, i2;
    }
  };
  lc.prototype.ValueTypeName = "", lc.prototype.TimeBufferType = Float32Array, lc.prototype.ValueBufferType = Float32Array, lc.prototype.DefaultInterpolation = Pe;
  var cc = class extends lc {
    constructor(t2, e2, i2) {
      super(t2, e2, i2);
    }
  };
  cc.prototype.ValueTypeName = "bool", cc.prototype.ValueBufferType = Array, cc.prototype.DefaultInterpolation = ke, cc.prototype.InterpolantFactoryMethodLinear = void 0, cc.prototype.InterpolantFactoryMethodSmooth = void 0;
  var uc = class extends lc {
    constructor(t2, e2, i2, s2) {
      super(t2, e2, i2, s2);
    }
  };
  uc.prototype.ValueTypeName = "color";
  var dc = class extends lc {
    constructor(t2, e2, i2, s2) {
      super(t2, e2, i2, s2);
    }
  };
  dc.prototype.ValueTypeName = "number";
  var pc = class extends nc {
    constructor(t2, e2, i2, s2) {
      super(t2, e2, i2, s2);
    }
    interpolate_(t2, e2, i2, s2) {
      const r2 = this.resultBuffer, n2 = this.sampleValues, a2 = this.valueSize, o2 = (i2 - e2) / (s2 - e2);
      let h2 = t2 * a2;
      for (let t3 = h2 + a2; h2 !== t3; h2 += 4) ds.slerpFlat(r2, 0, n2, h2 - a2, n2, h2, o2);
      return r2;
    }
  };
  var mc = class extends lc {
    constructor(t2, e2, i2, s2) {
      super(t2, e2, i2, s2);
    }
    InterpolantFactoryMethodLinear(t2) {
      return new pc(this.times, this.values, this.getValueSize(), t2);
    }
  };
  mc.prototype.ValueTypeName = "quaternion", mc.prototype.InterpolantFactoryMethodSmooth = void 0;
  var yc = class extends lc {
    constructor(t2, e2, i2) {
      super(t2, e2, i2);
    }
  };
  yc.prototype.ValueTypeName = "string", yc.prototype.ValueBufferType = Array, yc.prototype.DefaultInterpolation = ke, yc.prototype.InterpolantFactoryMethodLinear = void 0, yc.prototype.InterpolantFactoryMethodSmooth = void 0;
  var gc = class extends lc {
    constructor(t2, e2, i2, s2) {
      super(t2, e2, i2, s2);
    }
  };
  gc.prototype.ValueTypeName = "vector";
  var vc = class {
    constructor(t2, e2, i2) {
      const s2 = this;
      let r2, n2 = false, a2 = 0, o2 = 0;
      const h2 = [];
      this.onStart = void 0, this.onLoad = t2, this.onProgress = e2, this.onError = i2, this._abortController = null, this.itemStart = function(t3) {
        o2++, false === n2 && void 0 !== s2.onStart && s2.onStart(t3, a2, o2), n2 = true;
      }, this.itemEnd = function(t3) {
        a2++, void 0 !== s2.onProgress && s2.onProgress(t3, a2, o2), a2 === o2 && (n2 = false, void 0 !== s2.onLoad && s2.onLoad());
      }, this.itemError = function(t3) {
        void 0 !== s2.onError && s2.onError(t3);
      }, this.resolveURL = function(t3) {
        return r2 ? r2(t3) : t3;
      }, this.setURLModifier = function(t3) {
        return r2 = t3, this;
      }, this.addHandler = function(t3, e3) {
        return h2.push(t3, e3), this;
      }, this.removeHandler = function(t3) {
        const e3 = h2.indexOf(t3);
        return -1 !== e3 && h2.splice(e3, 2), this;
      }, this.getHandler = function(t3) {
        for (let e3 = 0, i3 = h2.length; e3 < i3; e3 += 2) {
          const i4 = h2[e3], s3 = h2[e3 + 1];
          if (i4.global && (i4.lastIndex = 0), i4.test(t3)) return s3;
        }
        return null;
      }, this.abort = function() {
        return this.abortController.abort(), this._abortController = null, this;
      };
    }
    get abortController() {
      return this._abortController || (this._abortController = new AbortController()), this._abortController;
    }
  };
  var wc = new vc();
  var Mc = class {
    constructor(t2) {
      this.manager = void 0 !== t2 ? t2 : wc, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {};
    }
    load() {
    }
    loadAsync(t2, e2) {
      const i2 = this;
      return new Promise(function(s2, r2) {
        i2.load(t2, s2, e2, r2);
      });
    }
    parse() {
    }
    setCrossOrigin(t2) {
      return this.crossOrigin = t2, this;
    }
    setWithCredentials(t2) {
      return this.withCredentials = t2, this;
    }
    setPath(t2) {
      return this.path = t2, this;
    }
    setResourcePath(t2) {
      return this.resourcePath = t2, this;
    }
    setRequestHeader(t2) {
      return this.requestHeader = t2, this;
    }
    abort() {
      return this;
    }
  };
  Mc.DEFAULT_MATERIAL_NAME = "__DEFAULT";
  var Oc = class extends Er {
    constructor(t2, e2 = 1) {
      super(), this.isLight = true, this.type = "Light", this.color = new nn(t2), this.intensity = e2;
    }
    dispose() {
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.color.copy(t2.color), this.intensity = t2.intensity, this;
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      return e2.object.color = this.color.getHex(), e2.object.intensity = this.intensity, void 0 !== this.groundColor && (e2.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e2.object.distance = this.distance), void 0 !== this.angle && (e2.object.angle = this.angle), void 0 !== this.decay && (e2.object.decay = this.decay), void 0 !== this.penumbra && (e2.object.penumbra = this.penumbra), void 0 !== this.shadow && (e2.object.shadow = this.shadow.toJSON()), void 0 !== this.target && (e2.object.target = this.target.uuid), e2;
    }
  };
  var Rc = class extends Oc {
    constructor(t2, e2, i2) {
      super(t2, i2), this.isHemisphereLight = true, this.type = "HemisphereLight", this.position.copy(Er.DEFAULT_UP), this.updateMatrix(), this.groundColor = new nn(e2);
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.groundColor.copy(t2.groundColor), this;
    }
  };
  var Nc = new dr();
  var Vc = new ps();
  var Fc = new ps();
  var Lc = class {
    constructor(t2) {
      this.camera = t2, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new us(512, 512), this.mapType = Tt, this.map = null, this.mapPass = null, this.matrix = new dr(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new go(), this._frameExtents = new us(1, 1), this._viewportCount = 1, this._viewports = [new Ps(0, 0, 1, 1)];
    }
    getViewportCount() {
      return this._viewportCount;
    }
    getFrustum() {
      return this._frustum;
    }
    updateMatrices(t2) {
      const e2 = this.camera, i2 = this.matrix;
      Vc.setFromMatrixPosition(t2.matrixWorld), e2.position.copy(Vc), Fc.setFromMatrixPosition(t2.target.matrixWorld), e2.lookAt(Fc), e2.updateMatrixWorld(), Nc.multiplyMatrices(e2.projectionMatrix, e2.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Nc, e2.coordinateSystem, e2.reversedDepth), e2.reversedDepth ? i2.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 1, 0, 0, 0, 0, 1) : i2.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), i2.multiply(Nc);
    }
    getViewport(t2) {
      return this._viewports[t2];
    }
    getFrameExtents() {
      return this._frameExtents;
    }
    dispose() {
      this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
    }
    copy(t2) {
      return this.camera = t2.camera.clone(), this.intensity = t2.intensity, this.bias = t2.bias, this.radius = t2.radius, this.autoUpdate = t2.autoUpdate, this.needsUpdate = t2.needsUpdate, this.normalBias = t2.normalBias, this.blurSamples = t2.blurSamples, this.mapSize.copy(t2.mapSize), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      const t2 = {};
      return 1 !== this.intensity && (t2.intensity = this.intensity), 0 !== this.bias && (t2.bias = this.bias), 0 !== this.normalBias && (t2.normalBias = this.normalBias), 1 !== this.radius && (t2.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t2.mapSize = this.mapSize.toArray()), t2.camera = this.camera.toJSON(false).object, delete t2.camera.matrix, t2;
    }
  };
  var Dc = new dr();
  var Wc = new ps();
  var Uc = new ps();
  var Xc = class extends ea {
    constructor(t2 = -1, e2 = 1, i2 = 1, s2 = -1, r2 = 0.1, n2 = 2e3) {
      super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t2, this.right = e2, this.top = i2, this.bottom = s2, this.near = r2, this.far = n2, this.updateProjectionMatrix();
    }
    copy(t2, e2) {
      return super.copy(t2, e2), this.left = t2.left, this.right = t2.right, this.top = t2.top, this.bottom = t2.bottom, this.near = t2.near, this.far = t2.far, this.zoom = t2.zoom, this.view = null === t2.view ? null : Object.assign({}, t2.view), this;
    }
    setViewOffset(t2, e2, i2, s2, r2, n2) {
      null === this.view && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t2, this.view.fullHeight = e2, this.view.offsetX = i2, this.view.offsetY = s2, this.view.width = r2, this.view.height = n2, this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = false), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const t2 = (this.right - this.left) / (2 * this.zoom), e2 = (this.top - this.bottom) / (2 * this.zoom), i2 = (this.right + this.left) / 2, s2 = (this.top + this.bottom) / 2;
      let r2 = i2 - t2, n2 = i2 + t2, a2 = s2 + e2, o2 = s2 - e2;
      if (null !== this.view && this.view.enabled) {
        const t3 = (this.right - this.left) / this.view.fullWidth / this.zoom, e3 = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        r2 += t3 * this.view.offsetX, n2 = r2 + t3 * this.view.width, a2 -= e3 * this.view.offsetY, o2 = a2 - e3 * this.view.height;
      }
      this.projectionMatrix.makeOrthographic(r2, n2, a2, o2, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(t2) {
      const e2 = super.toJSON(t2);
      return e2.object.zoom = this.zoom, e2.object.left = this.left, e2.object.right = this.right, e2.object.top = this.top, e2.object.bottom = this.bottom, e2.object.near = this.near, e2.object.far = this.far, null !== this.view && (e2.object.view = Object.assign({}, this.view)), e2;
    }
  };
  var Yc = class extends Lc {
    constructor() {
      super(new Xc(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
    }
  };
  var Zc = class extends Oc {
    constructor(t2, e2) {
      super(t2, e2), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(Er.DEFAULT_UP), this.updateMatrix(), this.target = new Er(), this.shadow = new Yc();
    }
    dispose() {
      this.shadow.dispose();
    }
    copy(t2) {
      return super.copy(t2), this.target = t2.target.clone(), this.shadow = t2.shadow.clone(), this;
    }
  };
  var du = new dr();
  var pu = new dr();
  var mu = new dr();
  var gu = class extends na {
    constructor(t2 = []) {
      super(), this.isArrayCamera = true, this.isMultiViewCamera = false, this.cameras = t2;
    }
  };
  var xu = new ps();
  var bu = new ds();
  var vu = new ps();
  var wu = new ps();
  var Mu = new ps();
  var Au = new ps();
  var Tu = new ds();
  var zu = new ps();
  var Cu = new ps();
  var Pu = "\\[\\]\\.:\\/";
  var Ou = new RegExp("[" + Pu + "]", "g");
  var Ru = "[^" + Pu + "]";
  var Nu = "[^" + Pu.replace("\\.", "") + "]";
  var Vu = new RegExp("^" + /((?:WC+[\/:])*)/.source.replace("WC", Ru) + /(WCOD+)?/.source.replace("WCOD", Nu) + /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Ru) + /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Ru) + "$");
  var Fu = ["material", "materials", "bones", "map"];
  var Lu = class _Lu {
    constructor(t2, e2, i2) {
      this.path = e2, this.parsedPath = i2 || _Lu.parseTrackName(e2), this.node = _Lu.findNode(t2, this.parsedPath.nodeName), this.rootNode = t2, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
    static create(t2, e2, i2) {
      return t2 && t2.isAnimationObjectGroup ? new _Lu.Composite(t2, e2, i2) : new _Lu(t2, e2, i2);
    }
    static sanitizeNodeName(t2) {
      return t2.replace(/\s/g, "_").replace(Ou, "");
    }
    static parseTrackName(t2) {
      const e2 = Vu.exec(t2);
      if (null === e2) throw new Error("PropertyBinding: Cannot parse trackName: " + t2);
      const i2 = { nodeName: e2[2], objectName: e2[3], objectIndex: e2[4], propertyName: e2[5], propertyIndex: e2[6] }, s2 = i2.nodeName && i2.nodeName.lastIndexOf(".");
      if (void 0 !== s2 && -1 !== s2) {
        const t3 = i2.nodeName.substring(s2 + 1);
        -1 !== Fu.indexOf(t3) && (i2.nodeName = i2.nodeName.substring(0, s2), i2.objectName = t3);
      }
      if (null === i2.propertyName || 0 === i2.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t2);
      return i2;
    }
    static findNode(t2, e2) {
      if (void 0 === e2 || "" === e2 || "." === e2 || -1 === e2 || e2 === t2.name || e2 === t2.uuid) return t2;
      if (t2.skeleton) {
        const i2 = t2.skeleton.getBoneByName(e2);
        if (void 0 !== i2) return i2;
      }
      if (t2.children) {
        const i2 = function(t3) {
          for (let s3 = 0; s3 < t3.length; s3++) {
            const r2 = t3[s3];
            if (r2.name === e2 || r2.uuid === e2) return r2;
            const n2 = i2(r2.children);
            if (n2) return n2;
          }
          return null;
        }, s2 = i2(t2.children);
        if (s2) return s2;
      }
      return null;
    }
    _getValue_unavailable() {
    }
    _setValue_unavailable() {
    }
    _getValue_direct(t2, e2) {
      t2[e2] = this.targetObject[this.propertyName];
    }
    _getValue_array(t2, e2) {
      const i2 = this.resolvedProperty;
      for (let s2 = 0, r2 = i2.length; s2 !== r2; ++s2) t2[e2++] = i2[s2];
    }
    _getValue_arrayElement(t2, e2) {
      t2[e2] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(t2, e2) {
      this.resolvedProperty.toArray(t2, e2);
    }
    _setValue_direct(t2, e2) {
      this.targetObject[this.propertyName] = t2[e2];
    }
    _setValue_direct_setNeedsUpdate(t2, e2) {
      this.targetObject[this.propertyName] = t2[e2], this.targetObject.needsUpdate = true;
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(t2, e2) {
      this.targetObject[this.propertyName] = t2[e2], this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_array(t2, e2) {
      const i2 = this.resolvedProperty;
      for (let s2 = 0, r2 = i2.length; s2 !== r2; ++s2) i2[s2] = t2[e2++];
    }
    _setValue_array_setNeedsUpdate(t2, e2) {
      const i2 = this.resolvedProperty;
      for (let s2 = 0, r2 = i2.length; s2 !== r2; ++s2) i2[s2] = t2[e2++];
      this.targetObject.needsUpdate = true;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(t2, e2) {
      const i2 = this.resolvedProperty;
      for (let s2 = 0, r2 = i2.length; s2 !== r2; ++s2) i2[s2] = t2[e2++];
      this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_arrayElement(t2, e2) {
      this.resolvedProperty[this.propertyIndex] = t2[e2];
    }
    _setValue_arrayElement_setNeedsUpdate(t2, e2) {
      this.resolvedProperty[this.propertyIndex] = t2[e2], this.targetObject.needsUpdate = true;
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(t2, e2) {
      this.resolvedProperty[this.propertyIndex] = t2[e2], this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_fromArray(t2, e2) {
      this.resolvedProperty.fromArray(t2, e2);
    }
    _setValue_fromArray_setNeedsUpdate(t2, e2) {
      this.resolvedProperty.fromArray(t2, e2), this.targetObject.needsUpdate = true;
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(t2, e2) {
      this.resolvedProperty.fromArray(t2, e2), this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _getValue_unbound(t2, e2) {
      this.bind(), this.getValue(t2, e2);
    }
    _setValue_unbound(t2, e2) {
      this.bind(), this.setValue(t2, e2);
    }
    bind() {
      let t2 = this.node;
      const e2 = this.parsedPath, i2 = e2.objectName, s2 = e2.propertyName;
      let r2 = e2.propertyIndex;
      if (t2 || (t2 = _Lu.findNode(this.rootNode, e2.nodeName), this.node = t2), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t2) return void Hi("PropertyBinding: No target node found for track: " + this.path + ".");
      if (i2) {
        let s3 = e2.objectIndex;
        switch (i2) {
          case "materials":
            if (!t2.material) return void Gi("PropertyBinding: Can not bind to material as node does not have a material.", this);
            if (!t2.material.materials) return void Gi("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            t2 = t2.material.materials;
            break;
          case "bones":
            if (!t2.skeleton) return void Gi("PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            t2 = t2.skeleton.bones;
            for (let e3 = 0; e3 < t2.length; e3++) if (t2[e3].name === s3) {
              s3 = e3;
              break;
            }
            break;
          case "map":
            if ("map" in t2) {
              t2 = t2.map;
              break;
            }
            if (!t2.material) return void Gi("PropertyBinding: Can not bind to material as node does not have a material.", this);
            if (!t2.material.map) return void Gi("PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            t2 = t2.material.map;
            break;
          default:
            if (void 0 === t2[i2]) return void Gi("PropertyBinding: Can not bind to objectName of node undefined.", this);
            t2 = t2[i2];
        }
        if (void 0 !== s3) {
          if (void 0 === t2[s3]) return void Gi("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t2);
          t2 = t2[s3];
        }
      }
      const n2 = t2[s2];
      if (void 0 === n2) {
        return void Gi("PropertyBinding: Trying to update property for track: " + e2.nodeName + "." + s2 + " but it wasn't found.", t2);
      }
      let a2 = this.Versioning.None;
      this.targetObject = t2, true === t2.isMaterial ? a2 = this.Versioning.NeedsUpdate : true === t2.isObject3D && (a2 = this.Versioning.MatrixWorldNeedsUpdate);
      let o2 = this.BindingType.Direct;
      if (void 0 !== r2) {
        if ("morphTargetInfluences" === s2) {
          if (!t2.geometry) return void Gi("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          if (!t2.geometry.morphAttributes) return void Gi("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          void 0 !== t2.morphTargetDictionary[r2] && (r2 = t2.morphTargetDictionary[r2]);
        }
        o2 = this.BindingType.ArrayElement, this.resolvedProperty = n2, this.propertyIndex = r2;
      } else void 0 !== n2.fromArray && void 0 !== n2.toArray ? (o2 = this.BindingType.HasFromToArray, this.resolvedProperty = n2) : Array.isArray(n2) ? (o2 = this.BindingType.EntireArray, this.resolvedProperty = n2) : this.propertyName = s2;
      this.getValue = this.GetterByBindingType[o2], this.setValue = this.SetterByBindingTypeAndVersioning[o2][a2];
    }
    unbind() {
      this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
  };
  Lu.Composite = class {
    constructor(t2, e2, i2) {
      const s2 = i2 || Lu.parseTrackName(e2);
      this._targetGroup = t2, this._bindings = t2.subscribe_(e2, s2);
    }
    getValue(t2, e2) {
      this.bind();
      const i2 = this._targetGroup.nCachedObjects_, s2 = this._bindings[i2];
      void 0 !== s2 && s2.getValue(t2, e2);
    }
    setValue(t2, e2) {
      const i2 = this._bindings;
      for (let s2 = this._targetGroup.nCachedObjects_, r2 = i2.length; s2 !== r2; ++s2) i2[s2].setValue(t2, e2);
    }
    bind() {
      const t2 = this._bindings;
      for (let e2 = this._targetGroup.nCachedObjects_, i2 = t2.length; e2 !== i2; ++e2) t2[e2].bind();
    }
    unbind() {
      const t2 = this._bindings;
      for (let e2 = this._targetGroup.nCachedObjects_, i2 = t2.length; e2 !== i2; ++e2) t2[e2].unbind();
    }
  }, Lu.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 }, Lu.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 }, Lu.prototype.GetterByBindingType = [Lu.prototype._getValue_direct, Lu.prototype._getValue_array, Lu.prototype._getValue_arrayElement, Lu.prototype._getValue_toArray], Lu.prototype.SetterByBindingTypeAndVersioning = [[Lu.prototype._setValue_direct, Lu.prototype._setValue_direct_setNeedsUpdate, Lu.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [Lu.prototype._setValue_array, Lu.prototype._setValue_array_setNeedsUpdate, Lu.prototype._setValue_array_setMatrixWorldNeedsUpdate], [Lu.prototype._setValue_arrayElement, Lu.prototype._setValue_arrayElement_setNeedsUpdate, Lu.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [Lu.prototype._setValue_fromArray, Lu.prototype._setValue_fromArray_setNeedsUpdate, Lu.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
  var Du = new Float32Array(1);
  var Hu = new dr();
  var Gu = class {
    constructor(t2, e2, i2 = 0, s2 = 1 / 0) {
      this.ray = new ur(t2, e2), this.near = i2, this.far = s2, this.camera = null, this.layers = new Sr(), this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} };
    }
    set(t2, e2) {
      this.ray.set(t2, e2);
    }
    setFromCamera(t2, e2) {
      e2.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e2.matrixWorld), this.ray.direction.set(t2.x, t2.y, 0.5).unproject(e2).sub(this.ray.origin).normalize(), this.camera = e2) : e2.isOrthographicCamera ? (this.ray.origin.set(t2.x, t2.y, (e2.near + e2.far) / (e2.near - e2.far)).unproject(e2), this.ray.direction.set(0, 0, -1).transformDirection(e2.matrixWorld), this.camera = e2) : Gi("Raycaster: Unsupported camera type: " + e2.type);
    }
    setFromXRController(t2) {
      return Hu.identity().extractRotation(t2.matrixWorld), this.ray.origin.setFromMatrixPosition(t2.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(Hu), this;
    }
    intersectObject(t2, e2 = true, i2 = []) {
      return Qu(t2, this, i2, e2), i2.sort($u), i2;
    }
    intersectObjects(t2, e2 = true, i2 = []) {
      for (let s2 = 0, r2 = t2.length; s2 < r2; s2++) Qu(t2[s2], this, i2, e2);
      return i2.sort($u), i2;
    }
  };
  function $u(t2, e2) {
    return t2.distance - e2.distance;
  }
  function Qu(t2, e2, i2, s2) {
    let r2 = true;
    if (t2.layers.test(e2.layers)) {
      false === t2.raycast(e2, i2) && (r2 = false);
    }
    if (true === r2 && true === s2) {
      const s3 = t2.children;
      for (let t3 = 0, r3 = s3.length; t3 < r3; t3++) Qu(s3[t3], e2, i2, true);
    }
  }
  var rd = new us();
  var ad = new ps();
  var od = new ps();
  var hd = new ps();
  var ld = new ps();
  var cd = new ps();
  var ud = new ps();
  var dd = new ps();
  var md = new ps();
  var gd = new ps();
  var fd = new dr();
  var xd = new dr();
  var Md = new ps();
  var Sd = new nn();
  var _d = new nn();
  var Cd = new ps();
  var Id = new ps();
  var Bd = new ps();
  var Pd = new ps();
  var Od = new ea();
  var Vd = new Es();
  var jd = new ps();
  function Yd(t2, e2, i2, s2) {
    const r2 = (function(t3) {
      switch (t3) {
        case Tt:
        case zt:
          return { byteLength: 1, components: 1 };
        case It:
        case Ct:
        case Ot:
          return { byteLength: 2, components: 1 };
        case Rt:
        case Nt:
          return { byteLength: 2, components: 4 };
        case kt:
        case Bt:
        case Pt:
          return { byteLength: 4, components: 1 };
        case Ft:
        case Lt:
          return { byteLength: 4, components: 3 };
      }
      throw new Error(`Unknown texture type ${t3}.`);
    })(s2);
    switch (i2) {
      case 1021:
        return t2 * e2;
      case qt:
      case Jt:
        return t2 * e2 / r2.components * r2.byteLength;
      case 1030:
      case 1031:
        return t2 * e2 * 2 / r2.components * r2.byteLength;
      case 1022:
        return t2 * e2 * 3 / r2.components * r2.byteLength;
      case Dt:
      case 1033:
        return t2 * e2 * 4 / r2.components * r2.byteLength;
      case 33776:
      case 33777:
        return Math.floor((t2 + 3) / 4) * Math.floor((e2 + 3) / 4) * 8;
      case 33778:
      case 33779:
        return Math.floor((t2 + 3) / 4) * Math.floor((e2 + 3) / 4) * 16;
      case 35841:
      case 35843:
        return Math.max(t2, 16) * Math.max(e2, 8) / 4;
      case 35840:
      case 35842:
        return Math.max(t2, 8) * Math.max(e2, 8) / 2;
      case 36196:
      case 37492:
        return Math.floor((t2 + 3) / 4) * Math.floor((e2 + 3) / 4) * 8;
      case 37496:
      case 37808:
        return Math.floor((t2 + 3) / 4) * Math.floor((e2 + 3) / 4) * 16;
      case 37809:
        return Math.floor((t2 + 4) / 5) * Math.floor((e2 + 3) / 4) * 16;
      case 37810:
        return Math.floor((t2 + 4) / 5) * Math.floor((e2 + 4) / 5) * 16;
      case 37811:
        return Math.floor((t2 + 5) / 6) * Math.floor((e2 + 4) / 5) * 16;
      case 37812:
        return Math.floor((t2 + 5) / 6) * Math.floor((e2 + 5) / 6) * 16;
      case 37813:
        return Math.floor((t2 + 7) / 8) * Math.floor((e2 + 4) / 5) * 16;
      case 37814:
        return Math.floor((t2 + 7) / 8) * Math.floor((e2 + 5) / 6) * 16;
      case 37815:
        return Math.floor((t2 + 7) / 8) * Math.floor((e2 + 7) / 8) * 16;
      case 37816:
        return Math.floor((t2 + 9) / 10) * Math.floor((e2 + 4) / 5) * 16;
      case 37817:
        return Math.floor((t2 + 9) / 10) * Math.floor((e2 + 5) / 6) * 16;
      case 37818:
        return Math.floor((t2 + 9) / 10) * Math.floor((e2 + 7) / 8) * 16;
      case 37819:
        return Math.floor((t2 + 9) / 10) * Math.floor((e2 + 9) / 10) * 16;
      case 37820:
        return Math.floor((t2 + 11) / 12) * Math.floor((e2 + 9) / 10) * 16;
      case 37821:
        return Math.floor((t2 + 11) / 12) * Math.floor((e2 + 11) / 12) * 16;
      case 36492:
      case 36494:
      case 36495:
        return Math.ceil(t2 / 4) * Math.ceil(e2 / 4) * 16;
      case 36283:
      case 36284:
        return Math.ceil(t2 / 4) * Math.ceil(e2 / 4) * 8;
      case 36285:
      case 36286:
        return Math.ceil(t2 / 4) * Math.ceil(e2 / 4) * 16;
    }
    throw new Error(`Unable to determine texture byte length for ${i2} format.`);
  }
  "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: t } })), "undefined" != typeof window && (window.__THREE__ ? Hi("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = t);

  // assets/vendor/three.module.min.js
  function Dn2() {
    let e2 = null, t2 = false, n2 = null, i2 = null;
    function r2(t3, a2) {
      n2(t3, a2), i2 = e2.requestAnimationFrame(r2);
    }
    return { start: function() {
      true !== t2 && null !== n2 && (i2 = e2.requestAnimationFrame(r2), t2 = true);
    }, stop: function() {
      e2.cancelAnimationFrame(i2), t2 = false;
    }, setAnimationLoop: function(e3) {
      n2 = e3;
    }, setContext: function(t3) {
      e2 = t3;
    } };
  }
  function wn2(e2) {
    const t2 = /* @__PURE__ */ new WeakMap();
    return { get: function(e3) {
      return e3.isInterleavedBufferAttribute && (e3 = e3.data), t2.get(e3);
    }, remove: function(n2) {
      n2.isInterleavedBufferAttribute && (n2 = n2.data);
      const i2 = t2.get(n2);
      i2 && (e2.deleteBuffer(i2.buffer), t2.delete(n2));
    }, update: function(n2, i2) {
      if (n2.isInterleavedBufferAttribute && (n2 = n2.data), n2.isGLBufferAttribute) {
        const e3 = t2.get(n2);
        return void ((!e3 || e3.version < n2.version) && t2.set(n2, { buffer: n2.buffer, type: n2.type, bytesPerElement: n2.elementSize, version: n2.version }));
      }
      const r2 = t2.get(n2);
      if (void 0 === r2) t2.set(n2, (function(t3, n3) {
        const i3 = t3.array, r3 = t3.usage, a2 = i3.byteLength, o2 = e2.createBuffer();
        let s2;
        if (e2.bindBuffer(n3, o2), e2.bufferData(n3, i3, r3), t3.onUploadCallback(), i3 instanceof Float32Array) s2 = e2.FLOAT;
        else if ("undefined" != typeof Float16Array && i3 instanceof Float16Array) s2 = e2.HALF_FLOAT;
        else if (i3 instanceof Uint16Array) s2 = t3.isFloat16BufferAttribute ? e2.HALF_FLOAT : e2.UNSIGNED_SHORT;
        else if (i3 instanceof Int16Array) s2 = e2.SHORT;
        else if (i3 instanceof Uint32Array) s2 = e2.UNSIGNED_INT;
        else if (i3 instanceof Int32Array) s2 = e2.INT;
        else if (i3 instanceof Int8Array) s2 = e2.BYTE;
        else if (i3 instanceof Uint8Array) s2 = e2.UNSIGNED_BYTE;
        else {
          if (!(i3 instanceof Uint8ClampedArray)) throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + i3);
          s2 = e2.UNSIGNED_BYTE;
        }
        return { buffer: o2, type: s2, bytesPerElement: i3.BYTES_PER_ELEMENT, version: t3.version, size: a2 };
      })(n2, i2));
      else if (r2.version < n2.version) {
        if (r2.size !== n2.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
        !(function(t3, n3, i3) {
          const r3 = n3.array, a2 = n3.updateRanges;
          if (e2.bindBuffer(i3, t3), 0 === a2.length) e2.bufferSubData(i3, 0, r3);
          else {
            a2.sort((e3, t5) => e3.start - t5.start);
            let t4 = 0;
            for (let e3 = 1; e3 < a2.length; e3++) {
              const n4 = a2[t4], i4 = a2[e3];
              i4.start <= n4.start + n4.count + 1 ? n4.count = Math.max(n4.count, i4.start + i4.count - n4.start) : (++t4, a2[t4] = i4);
            }
            a2.length = t4 + 1;
            for (let t5 = 0, n4 = a2.length; t5 < n4; t5++) {
              const n5 = a2[t5];
              e2.bufferSubData(i3, n5.start * r3.BYTES_PER_ELEMENT, r3, n5.start, n5.count);
            }
            n3.clearUpdateRanges();
          }
          n3.onUploadCallback();
        })(r2.buffer, n2, i2), r2.version = n2.version;
      }
    } };
  }
  var yn2 = { alphahash_fragment: "#ifdef USE_ALPHAHASH\n	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif", alphahash_pars_fragment: "#ifdef USE_ALPHAHASH\n	const float ALPHA_HASH_SCALE = 0.05;\n	float hash2D( vec2 value ) {\n		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n	}\n	float hash3D( vec3 value ) {\n		return hash2D( vec2( hash2D( value.xy ), value.z ) );\n	}\n	float getAlphaHashThreshold( vec3 position ) {\n		float maxDeriv = max(\n			length( dFdx( position.xyz ) ),\n			length( dFdy( position.xyz ) )\n		);\n		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n		vec2 pixScales = vec2(\n			exp2( floor( log2( pixScale ) ) ),\n			exp2( ceil( log2( pixScale ) ) )\n		);\n		vec2 alpha = vec2(\n			hash3D( floor( pixScales.x * position.xyz ) ),\n			hash3D( floor( pixScales.y * position.xyz ) )\n		);\n		float lerpFactor = fract( log2( pixScale ) );\n		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n		float a = min( lerpFactor, 1.0 - lerpFactor );\n		vec3 cases = vec3(\n			x * x / ( 2.0 * a * ( 1.0 - a ) ),\n			( x - 0.5 * a ) / ( 1.0 - a ),\n			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n		);\n		float threshold = ( x < ( 1.0 - a ) )\n			? ( ( x < a ) ? cases.x : cases.y )\n			: cases.z;\n		return clamp( threshold , 1.0e-6, 1.0 );\n	}\n#endif", alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif", alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif", alphatest_fragment: "#ifdef USE_ALPHATEST\n	#ifdef ALPHA_TO_COVERAGE\n	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n	if ( diffuseColor.a == 0.0 ) discard;\n	#else\n	if ( diffuseColor.a < alphaTest ) discard;\n	#endif\n#endif", alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif", aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_CLEARCOAT ) \n		clearcoatSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_SHEEN ) \n		sheenSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif", aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif", batching_pars_vertex: "#ifdef USE_BATCHING\n	#if ! defined( GL_ANGLE_multi_draw )\n	#define gl_DrawID _gl_DrawID\n	uniform int _gl_DrawID;\n	#endif\n	uniform highp sampler2D batchingTexture;\n	uniform highp usampler2D batchingIdTexture;\n	mat4 getBatchingMatrix( const in float i ) {\n		int size = textureSize( batchingTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n	float getIndirectIndex( const in int i ) {\n		int size = textureSize( batchingIdTexture, 0 ).x;\n		int x = i % size;\n		int y = i / size;\n		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n	}\n#endif\n#ifdef USE_BATCHING_COLOR\n	uniform sampler2D batchingColorTexture;\n	vec3 getBatchingColor( const in float i ) {\n		int size = textureSize( batchingColorTexture, 0 ).x;\n		int j = int( i );\n		int x = j % size;\n		int y = j / size;\n		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;\n	}\n#endif", batching_vertex: "#ifdef USE_BATCHING\n	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif", begin_vertex: "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n	vPosition = vec3( position );\n#endif", beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif", bsdfs: "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated", iridescence_fragment: "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif", bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif", clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#ifdef ALPHA_TO_COVERAGE\n		float distanceToPlane, distanceGradient;\n		float clipOpacity = 1.0;\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n			distanceGradient = fwidth( distanceToPlane ) / 2.0;\n			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			if ( clipOpacity == 0.0 ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			float unionClipOpacity = 1.0;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n				distanceGradient = fwidth( distanceToPlane ) / 2.0;\n				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			}\n			#pragma unroll_loop_end\n			clipOpacity *= 1.0 - unionClipOpacity;\n		#endif\n		diffuseColor.a *= clipOpacity;\n		if ( diffuseColor.a == 0.0 ) discard;\n	#else\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			bool clipped = true;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n			}\n			#pragma unroll_loop_end\n			if ( clipped ) discard;\n		#endif\n	#endif\n#endif", clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif", clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif", clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif", color_fragment: "#if defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#elif defined( USE_COLOR )\n	diffuseColor.rgb *= vColor;\n#endif", color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR )\n	varying vec3 vColor;\n#endif", color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	varying vec3 vColor;\n#endif", color_vertex: "#if defined( USE_COLOR_ALPHA )\n	vColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	vColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n	vColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.xyz *= instanceColor.xyz;\n#endif\n#ifdef USE_BATCHING_COLOR\n	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );\n	vColor.xyz *= batchingColor.xyz;\n#endif", common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n	varying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated", cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif", defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n	vec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n	mat3 bm = mat3( batchingMatrix );\n	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n	transformedNormal = bm * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = bm * transformedTangent;\n	#endif\n#endif\n#ifdef USE_INSTANCING\n	mat3 im = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n	transformedNormal = im * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = im * transformedTangent;\n	#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif", displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif", displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif", emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE\n		emissiveColor = sRGBTransferEOTF( emissiveColor );\n	#endif\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif", emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif", colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );", colorspace_pars_fragment: "vec4 LinearTransferOETF( in vec4 value ) {\n	return value;\n}\nvec4 sRGBTransferEOTF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}", envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif", envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	uniform mat3 envMapRotation;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n#endif", envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif", envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif", envmap_physical_pars_fragment: "#ifdef USE_ENVMAP\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	#ifdef USE_ANISOTROPY\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n			#ifdef ENVMAP_TYPE_CUBE_UV\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n	#endif\n#endif", envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif", fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif", fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif", fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif", fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif", gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}", lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif", lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;", lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert", lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n	uniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n	if ( cutoffDistance > 0.0 ) {\n		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n	}\n	return distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif", lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;", lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon", lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;", lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong", lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n	material.dispersion = dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	#ifdef USE_ANISOTROPYMAP\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n	#else\n		vec2 anisotropyV = anisotropyVector;\n	#endif\n	material.anisotropy = length( anisotropyV );\n	if( material.anisotropy == 0.0 ) {\n		anisotropyV = vec2( 1.0, 0.0 );\n	} else {\n		anisotropyV /= material.anisotropy;\n		material.anisotropy = saturate( material.anisotropy );\n	}\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif", lights_physical_pars_fragment: "uniform sampler2D dfgLUT;\nstruct PhysicalMaterial {\n	vec3 diffuseColor;\n	float roughness;\n	vec3 specularColor;\n	float specularF90;\n	float dispersion;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n	#ifdef USE_ANISOTROPY\n		float anisotropy;\n		float alphaT;\n		vec3 anisotropyT;\n		vec3 anisotropyB;\n	#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n		float v = 0.5 / ( gv + gl );\n		return saturate(v);\n	}\n	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n		float a2 = alphaT * alphaB;\n		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n		highp float v2 = dot( v, v );\n		float w2 = a2 / v2;\n		return RECIPROCAL_PI * a2 * pow2 ( w2 );\n	}\n#endif\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = material.clearcoatRoughness;\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColor;\n	float f90 = material.specularF90;\n	float roughness = material.roughness;\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	#ifdef USE_ANISOTROPY\n		float dotTL = dot( material.anisotropyT, lightDir );\n		float dotTV = dot( material.anisotropyT, viewDir );\n		float dotTH = dot( material.anisotropyT, halfDir );\n		float dotBL = dot( material.anisotropyB, lightDir );\n		float dotBV = dot( material.anisotropyB, viewDir );\n		float dotBH = dot( material.anisotropyB, halfDir );\n		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n	#else\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n	#endif\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n	return saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 uv = vec2( roughness, dotNV );\n	return texture2D( dfgLUT, uv ).rg;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\nvec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );\n	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );\n	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;\n	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;\n	float Ess_V = dfgV.x + dfgV.y;\n	float Ess_L = dfgL.x + dfgL.y;\n	float Ems_V = 1.0 - Ess_V;\n	float Ems_L = 1.0 - Ess_L;\n	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;\n	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );\n	float compensationFactor = Ems_V * Ems_L;\n	vec3 multiScatter = Fms * compensationFactor;\n	return singleScatter + multiScatter;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometryNormal;\n		vec3 viewDir = geometryViewDir;\n		vec3 position = geometryPosition;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n	#endif\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n	#else\n		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n	#endif\n	vec3 totalScattering = singleScattering + multiScattering;\n	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n	reflectedLight.indirectSpecular += radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}", lights_fragment_begin: "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n	geometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometryViewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n	}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometryPosition, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometryPosition, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#if defined( USE_LIGHT_PROBES )\n		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif", lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getIBLIrradiance( geometryNormal );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	#ifdef USE_ANISOTROPY\n		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n	#else\n		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n	#endif\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif", lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif", logdepthbuf_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif", logdepthbuf_pars_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif", logdepthbuf_pars_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif", logdepthbuf_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	vFragDepth = 1.0 + gl_Position.w;\n	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif", map_fragment: "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif", map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif", map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif", map_particle_pars_fragment: "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif", metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif", metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif", morphinstance_vertex: "#ifdef USE_INSTANCING_MORPH\n	float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n	}\n#endif", morphcolor_vertex: "#if defined( USE_MORPHCOLORS )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif", morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif", morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	#ifndef USE_INSTANCING_MORPH\n		uniform float morphTargetBaseInfluence;\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	#endif\n	uniform sampler2DArray morphTargetsTexture;\n	uniform ivec2 morphTargetsTextureSize;\n	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n		int y = texelIndex / morphTargetsTextureSize.x;\n		int x = texelIndex - y * morphTargetsTextureSize.x;\n		ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n		return texelFetch( morphTargetsTexture, morphUV, 0 );\n	}\n#endif", morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif", normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal,\n		#if defined( USE_NORMALMAP )\n			vNormalMapUv\n		#elif defined( USE_CLEARCOAT_NORMALMAP )\n			vClearcoatNormalMapUv\n		#else\n			vUv\n		#endif\n		);\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 nonPerturbedNormal = normal;", normal_fragment_maps: "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif", normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif", normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif", normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif", normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif", clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = nonPerturbedNormal;\n#endif", clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif", clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif", iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif", opaque_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );", packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;\nconst float Inv255 = 1. / 255.;\nconst vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );\nconst vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );\nconst vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );\nconst vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );\nvec4 packDepthToRGBA( const in float v ) {\n	if( v <= 0.0 )\n		return vec4( 0., 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec4( 1., 1., 1., 1. );\n	float vuf;\n	float af = modf( v * PackFactors.a, vuf );\n	float bf = modf( vuf * ShiftRight8, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );\n}\nvec3 packDepthToRGB( const in float v ) {\n	if( v <= 0.0 )\n		return vec3( 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec3( 1., 1., 1. );\n	float vuf;\n	float bf = modf( v * PackFactors.b, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec3( vuf * Inv255, gf * PackUpscale, bf );\n}\nvec2 packDepthToRG( const in float v ) {\n	if( v <= 0.0 )\n		return vec2( 0., 0. );\n	if( v >= 1.0 )\n		return vec2( 1., 1. );\n	float vuf;\n	float gf = modf( v * 256., vuf );\n	return vec2( vuf * Inv255, gf );\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors4 );\n}\nfloat unpackRGBToDepth( const in vec3 v ) {\n	return dot( v, UnpackFactors3 );\n}\nfloat unpackRGToDepth( const in vec2 v ) {\n	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;\n}\nvec4 pack2HalfToRGBA( const in vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( const in vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * depth - far );\n}", premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif", project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n	mvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;", dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif", dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif", roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif", roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif", shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );\n		#ifdef USE_REVERSED_DEPTH_BUFFER\n			return step( depth, compare );\n		#else\n			return step( compare, depth );\n		#endif\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return unpackRGBATo2Half( texture2D( shadow, uv ) );\n	}\n	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		#ifdef USE_REVERSED_DEPTH_BUFFER\n			float hard_shadow = step( distribution.x, compare );\n		#else\n			float hard_shadow = step( compare, distribution.x );\n		#endif\n		if ( hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx = texelSize.x;\n			float dy = texelSize.y;\n			vec2 uv = shadowCoord.xy;\n			vec2 f = fract( uv * shadowMapSize + 0.5 );\n			uv -= f * texelSize;\n			shadow = (\n				texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n						  f.x ),\n					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n						  f.x ),\n					 f.y )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		\n		float lightToPositionLength = length( lightToPosition );\n		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {\n			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;\n			vec3 bd3D = normalize( lightToPosition );\n			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n				shadow = (\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n				) * ( 1.0 / 9.0 );\n			#else\n				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n			#endif\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n#endif", shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif", shadowmap_vertex: "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif", shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}", skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif", skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	mat4 getBoneMatrix( const in float i ) {\n		int size = textureSize( boneTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n#endif", skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif", skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif", specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif", specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif", tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif", tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 CineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n	vec3( 1.6605, - 0.1246, - 0.0182 ),\n	vec3( - 0.5876, 1.1329, - 0.1006 ),\n	vec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n	vec3( 0.6274, 0.0691, 0.0164 ),\n	vec3( 0.3293, 0.9195, 0.0880 ),\n	vec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n	vec3 x2 = x * x;\n	vec3 x4 = x2 * x2;\n	return + 15.5 * x4 * x2\n		- 40.14 * x4 * x\n		+ 31.96 * x4\n		- 6.868 * x2 * x\n		+ 0.4298 * x2\n		+ 0.1191 * x\n		- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n	const mat3 AgXInsetMatrix = mat3(\n		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n	);\n	const mat3 AgXOutsetMatrix = mat3(\n		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n	);\n	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;\n	color *= toneMappingExposure;\n	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n	color = AgXInsetMatrix * color;\n	color = max( color, 1e-10 );	color = log2( color );\n	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n	color = clamp( color, 0.0, 1.0 );\n	color = agxDefaultContrastApprox( color );\n	color = AgXOutsetMatrix * color;\n	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n	color = clamp( color, 0.0, 1.0 );\n	return color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n	const float StartCompression = 0.8 - 0.04;\n	const float Desaturation = 0.15;\n	color *= toneMappingExposure;\n	float x = min( color.r, min( color.g, color.b ) );\n	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n	color -= offset;\n	float peak = max( color.r, max( color.g, color.b ) );\n	if ( peak < StartCompression ) return color;\n	float d = 1. - StartCompression;\n	float newPeak = 1. - d * d / ( peak + d - StartCompression );\n	color *= newPeak / peak;\n	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n	return mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }", transmission_fragment: "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif", transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return vec3( 1.0 );\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec4 transmittedLight;\n		vec3 transmittance;\n		#ifdef USE_DISPERSION\n			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n			for ( int i = 0; i < 3; i ++ ) {\n				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n				vec3 refractedRayExit = position + transmissionRay;\n				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n				vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n				refractionCoords += 1.0;\n				refractionCoords /= 2.0;\n				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n				transmittedLight[ i ] = transmissionSample[ i ];\n				transmittedLight.a += transmissionSample.a;\n				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n			}\n			transmittedLight.a /= 3.0;\n		#else\n			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n			vec3 refractedRayExit = position + transmissionRay;\n			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n			vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n			refractionCoords += 1.0;\n			refractionCoords /= 2.0;\n			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n		#endif\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n	}\n#endif", uv_pars_fragment: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif", uv_pars_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif", uv_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif", worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_BATCHING\n		worldPosition = batchingMatrix * worldPosition;\n	#endif\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif", background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}", background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}", backgroundCube_frag: "#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}", cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", depth_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}", depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <logdepthbuf_fragment>\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];\n	#else\n		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;\n	#endif\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#elif DEPTH_PACKING == 3202\n		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );\n	#elif DEPTH_PACKING == 3203\n		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );\n	#endif\n}", distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}", distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}", equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}", equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}", linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}", meshbasic_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}", meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}", meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}", meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}", meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}", meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n	uniform float dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	uniform vec2 anisotropyVector;\n	#ifdef USE_ANISOTROPYMAP\n		uniform sampler2D anisotropyMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n	#endif\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}", points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}", shadow_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}", sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix[ 3 ];\n	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}", sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}" };
  var In2 = { common: { diffuse: { value: new nn(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new gs() }, alphaMap: { value: null }, alphaMapTransform: { value: new gs() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new gs() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new gs() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 }, dfgLUT: { value: null } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new gs() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new gs() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new gs() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new gs() }, normalScale: { value: new us(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new gs() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new gs() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new gs() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new gs() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new nn(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new nn(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new gs() }, alphaTest: { value: 0 }, uvTransform: { value: new gs() } }, sprite: { diffuse: { value: new nn(16777215) }, opacity: { value: 1 }, center: { value: new us(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new gs() }, alphaMap: { value: null }, alphaMapTransform: { value: new gs() }, alphaTest: { value: 0 } } };
  var Nn2 = { basic: { uniforms: $n([In2.common, In2.specularmap, In2.envmap, In2.aomap, In2.lightmap, In2.fog]), vertexShader: yn2.meshbasic_vert, fragmentShader: yn2.meshbasic_frag }, lambert: { uniforms: $n([In2.common, In2.specularmap, In2.envmap, In2.aomap, In2.lightmap, In2.emissivemap, In2.bumpmap, In2.normalmap, In2.displacementmap, In2.fog, In2.lights, { emissive: { value: new nn(0) } }]), vertexShader: yn2.meshlambert_vert, fragmentShader: yn2.meshlambert_frag }, phong: { uniforms: $n([In2.common, In2.specularmap, In2.envmap, In2.aomap, In2.lightmap, In2.emissivemap, In2.bumpmap, In2.normalmap, In2.displacementmap, In2.fog, In2.lights, { emissive: { value: new nn(0) }, specular: { value: new nn(1118481) }, shininess: { value: 30 } }]), vertexShader: yn2.meshphong_vert, fragmentShader: yn2.meshphong_frag }, standard: { uniforms: $n([In2.common, In2.envmap, In2.aomap, In2.lightmap, In2.emissivemap, In2.bumpmap, In2.normalmap, In2.displacementmap, In2.roughnessmap, In2.metalnessmap, In2.fog, In2.lights, { emissive: { value: new nn(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: yn2.meshphysical_vert, fragmentShader: yn2.meshphysical_frag }, toon: { uniforms: $n([In2.common, In2.aomap, In2.lightmap, In2.emissivemap, In2.bumpmap, In2.normalmap, In2.displacementmap, In2.gradientmap, In2.fog, In2.lights, { emissive: { value: new nn(0) } }]), vertexShader: yn2.meshtoon_vert, fragmentShader: yn2.meshtoon_frag }, matcap: { uniforms: $n([In2.common, In2.bumpmap, In2.normalmap, In2.displacementmap, In2.fog, { matcap: { value: null } }]), vertexShader: yn2.meshmatcap_vert, fragmentShader: yn2.meshmatcap_frag }, points: { uniforms: $n([In2.points, In2.fog]), vertexShader: yn2.points_vert, fragmentShader: yn2.points_frag }, dashed: { uniforms: $n([In2.common, In2.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: yn2.linedashed_vert, fragmentShader: yn2.linedashed_frag }, depth: { uniforms: $n([In2.common, In2.displacementmap]), vertexShader: yn2.depth_vert, fragmentShader: yn2.depth_frag }, normal: { uniforms: $n([In2.common, In2.bumpmap, In2.normalmap, In2.displacementmap, { opacity: { value: 1 } }]), vertexShader: yn2.meshnormal_vert, fragmentShader: yn2.meshnormal_frag }, sprite: { uniforms: $n([In2.sprite, In2.fog]), vertexShader: yn2.sprite_vert, fragmentShader: yn2.sprite_frag }, background: { uniforms: { uvTransform: { value: new gs() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: yn2.background_vert, fragmentShader: yn2.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new gs() } }, vertexShader: yn2.backgroundCube_vert, fragmentShader: yn2.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: yn2.cube_vert, fragmentShader: yn2.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: yn2.equirect_vert, fragmentShader: yn2.equirect_frag }, distanceRGBA: { uniforms: $n([In2.common, In2.displacementmap, { referencePosition: { value: new ps() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: yn2.distanceRGBA_vert, fragmentShader: yn2.distanceRGBA_frag }, shadow: { uniforms: $n([In2.lights, In2.fog, { color: { value: new nn(0) }, opacity: { value: 1 } }]), vertexShader: yn2.shadow_vert, fragmentShader: yn2.shadow_frag } };
  Nn2.physical = { uniforms: $n([Nn2.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new gs() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new gs() }, clearcoatNormalScale: { value: new us(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new gs() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new gs() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new gs() }, sheen: { value: 0 }, sheenColor: { value: new nn(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new gs() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new gs() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new gs() }, transmissionSamplerSize: { value: new us() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new gs() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new nn(0) }, specularColor: { value: new nn(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new gs() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new gs() }, anisotropyVector: { value: new us() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new gs() } }]), vertexShader: yn2.meshphysical_vert, fragmentShader: yn2.meshphysical_frag };
  var On2 = { r: 0, b: 0, g: 0 };
  var Fn2 = new Mr();
  var Bn2 = new dr();
  function Gn2(e2, t2, i2, r2, u2, f2, v2) {
    const E2 = new nn(0);
    let S2, T2, M2 = true === f2 ? 0 : 1, x2 = null, A2 = 0, R2 = null;
    function b2(e3) {
      let n2 = true === e3.isScene ? e3.background : null;
      if (n2 && n2.isTexture) {
        n2 = (e3.backgroundBlurriness > 0 ? i2 : t2).get(n2);
      }
      return n2;
    }
    function C2(t3, n2) {
      t3.getRGB(On2, Qn(e2)), r2.buffers.color.setClear(On2.r, On2.g, On2.b, n2, v2);
    }
    return { getClearColor: function() {
      return E2;
    }, setClearColor: function(e3, t3 = 1) {
      E2.set(e3), M2 = t3, C2(E2, M2);
    }, getClearAlpha: function() {
      return M2;
    }, setClearAlpha: function(e3) {
      M2 = e3, C2(E2, M2);
    }, render: function(t3) {
      let n2 = false;
      const i3 = b2(t3);
      null === i3 ? C2(E2, M2) : i3 && i3.isColor && (C2(i3, 1), n2 = true);
      const a2 = e2.xr.getEnvironmentBlendMode();
      "additive" === a2 ? r2.buffers.color.setClear(0, 0, 0, 1, v2) : "alpha-blend" === a2 && r2.buffers.color.setClear(0, 0, 0, 0, v2), (e2.autoClear || n2) && (r2.buffers.depth.setTest(true), r2.buffers.depth.setMask(true), r2.buffers.color.setMask(true), e2.clear(e2.autoClearColor, e2.autoClearDepth, e2.autoClearStencil));
    }, addToRenderList: function(t3, n2) {
      const i3 = b2(n2);
      i3 && (i3.isCubeTexture || i3.mapping === dt) ? (void 0 === T2 && (T2 = new Yn(new Hn(1, 1, 1), new ta({ name: "BackgroundCubeMaterial", uniforms: Gn(Nn2.backgroundCube.uniforms), vertexShader: Nn2.backgroundCube.vertexShader, fragmentShader: Nn2.backgroundCube.fragmentShader, side: d, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), T2.geometry.deleteAttribute("normal"), T2.geometry.deleteAttribute("uv"), T2.onBeforeRender = function(e3, t4, n3) {
        this.matrixWorld.copyPosition(n3.matrixWorld);
      }, Object.defineProperty(T2.material, "envMap", { get: function() {
        return this.uniforms.envMap.value;
      } }), u2.update(T2)), Fn2.copy(n2.backgroundRotation), Fn2.x *= -1, Fn2.y *= -1, Fn2.z *= -1, i3.isCubeTexture && false === i3.isRenderTargetTexture && (Fn2.y *= -1, Fn2.z *= -1), T2.material.uniforms.envMap.value = i3, T2.material.uniforms.flipEnvMap.value = i3.isCubeTexture && false === i3.isRenderTargetTexture ? -1 : 1, T2.material.uniforms.backgroundBlurriness.value = n2.backgroundBlurriness, T2.material.uniforms.backgroundIntensity.value = n2.backgroundIntensity, T2.material.uniforms.backgroundRotation.value.setFromMatrix4(Bn2.makeRotationFromEuler(Fn2)), T2.material.toneMapped = ws.getTransfer(i3.colorSpace) !== Qe, x2 === i3 && A2 === i3.version && R2 === e2.toneMapping || (T2.material.needsUpdate = true, x2 = i3, A2 = i3.version, R2 = e2.toneMapping), T2.layers.enableAll(), t3.unshift(T2, T2.geometry, T2.material, 0, 0, null)) : i3 && i3.isTexture && (void 0 === S2 && (S2 = new Yn(new Bl(2, 2), new ta({ name: "BackgroundMaterial", uniforms: Gn(Nn2.background.uniforms), vertexShader: Nn2.background.vertexShader, fragmentShader: Nn2.background.fragmentShader, side: u, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), S2.geometry.deleteAttribute("normal"), Object.defineProperty(S2.material, "map", { get: function() {
        return this.uniforms.t2D.value;
      } }), u2.update(S2)), S2.material.uniforms.t2D.value = i3, S2.material.uniforms.backgroundIntensity.value = n2.backgroundIntensity, S2.material.toneMapped = ws.getTransfer(i3.colorSpace) !== Qe, true === i3.matrixAutoUpdate && i3.updateMatrix(), S2.material.uniforms.uvTransform.value.copy(i3.matrix), x2 === i3 && A2 === i3.version && R2 === e2.toneMapping || (S2.material.needsUpdate = true, x2 = i3, A2 = i3.version, R2 = e2.toneMapping), S2.layers.enableAll(), t3.unshift(S2, S2.geometry, S2.material, 0, 0, null));
    }, dispose: function() {
      void 0 !== T2 && (T2.geometry.dispose(), T2.material.dispose(), T2 = void 0), void 0 !== S2 && (S2.geometry.dispose(), S2.material.dispose(), S2 = void 0);
    } };
  }
  function Hn2(e2, t2) {
    const n2 = e2.getParameter(e2.MAX_VERTEX_ATTRIBS), i2 = {}, r2 = c2(null);
    let a2 = r2, o2 = false;
    function s2(t3) {
      return e2.bindVertexArray(t3);
    }
    function l2(t3) {
      return e2.deleteVertexArray(t3);
    }
    function c2(e3) {
      const t3 = [], i3 = [], r3 = [];
      for (let e4 = 0; e4 < n2; e4++) t3[e4] = 0, i3[e4] = 0, r3[e4] = 0;
      return { geometry: null, program: null, wireframe: false, newAttributes: t3, enabledAttributes: i3, attributeDivisors: r3, object: e3, attributes: {}, index: null };
    }
    function d2() {
      const e3 = a2.newAttributes;
      for (let t3 = 0, n3 = e3.length; t3 < n3; t3++) e3[t3] = 0;
    }
    function u2(e3) {
      f2(e3, 0);
    }
    function f2(t3, n3) {
      const i3 = a2.newAttributes, r3 = a2.enabledAttributes, o3 = a2.attributeDivisors;
      i3[t3] = 1, 0 === r3[t3] && (e2.enableVertexAttribArray(t3), r3[t3] = 1), o3[t3] !== n3 && (e2.vertexAttribDivisor(t3, n3), o3[t3] = n3);
    }
    function p2() {
      const t3 = a2.newAttributes, n3 = a2.enabledAttributes;
      for (let i3 = 0, r3 = n3.length; i3 < r3; i3++) n3[i3] !== t3[i3] && (e2.disableVertexAttribArray(i3), n3[i3] = 0);
    }
    function m2(t3, n3, i3, r3, a3, o3, s3) {
      true === s3 ? e2.vertexAttribIPointer(t3, n3, i3, a3, o3) : e2.vertexAttribPointer(t3, n3, i3, r3, a3, o3);
    }
    function h2() {
      _2(), o2 = true, a2 !== r2 && (a2 = r2, s2(a2.object));
    }
    function _2() {
      r2.geometry = null, r2.program = null, r2.wireframe = false;
    }
    return { setup: function(n3, r3, l3, h3, _3) {
      let g2 = false;
      const E2 = (function(t3, n4, r4) {
        const a3 = true === r4.wireframe;
        let o3 = i2[t3.id];
        void 0 === o3 && (o3 = {}, i2[t3.id] = o3);
        let s3 = o3[n4.id];
        void 0 === s3 && (s3 = {}, o3[n4.id] = s3);
        let l4 = s3[a3];
        void 0 === l4 && (l4 = c2(e2.createVertexArray()), s3[a3] = l4);
        return l4;
      })(h3, l3, r3);
      a2 !== E2 && (a2 = E2, s2(a2.object)), g2 = (function(e3, t3, n4, i3) {
        const r4 = a2.attributes, o3 = t3.attributes;
        let s3 = 0;
        const l4 = n4.getAttributes();
        for (const t4 in l4) {
          if (l4[t4].location >= 0) {
            const n5 = r4[t4];
            let i4 = o3[t4];
            if (void 0 === i4 && ("instanceMatrix" === t4 && e3.instanceMatrix && (i4 = e3.instanceMatrix), "instanceColor" === t4 && e3.instanceColor && (i4 = e3.instanceColor)), void 0 === n5) return true;
            if (n5.attribute !== i4) return true;
            if (i4 && n5.data !== i4.data) return true;
            s3++;
          }
        }
        return a2.attributesNum !== s3 || a2.index !== i3;
      })(n3, h3, l3, _3), g2 && (function(e3, t3, n4, i3) {
        const r4 = {}, o3 = t3.attributes;
        let s3 = 0;
        const l4 = n4.getAttributes();
        for (const t4 in l4) {
          if (l4[t4].location >= 0) {
            let n5 = o3[t4];
            void 0 === n5 && ("instanceMatrix" === t4 && e3.instanceMatrix && (n5 = e3.instanceMatrix), "instanceColor" === t4 && e3.instanceColor && (n5 = e3.instanceColor));
            const i4 = {};
            i4.attribute = n5, n5 && n5.data && (i4.data = n5.data), r4[t4] = i4, s3++;
          }
        }
        a2.attributes = r4, a2.attributesNum = s3, a2.index = i3;
      })(n3, h3, l3, _3), null !== _3 && t2.update(_3, e2.ELEMENT_ARRAY_BUFFER), (g2 || o2) && (o2 = false, (function(n4, i3, r4, a3) {
        d2();
        const o3 = a3.attributes, s3 = r4.getAttributes(), l4 = i3.defaultAttributeValues;
        for (const i4 in s3) {
          const r5 = s3[i4];
          if (r5.location >= 0) {
            let s4 = o3[i4];
            if (void 0 === s4 && ("instanceMatrix" === i4 && n4.instanceMatrix && (s4 = n4.instanceMatrix), "instanceColor" === i4 && n4.instanceColor && (s4 = n4.instanceColor)), void 0 !== s4) {
              const i5 = s4.normalized, o4 = s4.itemSize, l5 = t2.get(s4);
              if (void 0 === l5) continue;
              const c3 = l5.buffer, d3 = l5.type, p3 = l5.bytesPerElement, h4 = d3 === e2.INT || d3 === e2.UNSIGNED_INT || s4.gpuType === Bt;
              if (s4.isInterleavedBufferAttribute) {
                const t3 = s4.data, l6 = t3.stride, _4 = s4.offset;
                if (t3.isInstancedInterleavedBuffer) {
                  for (let e3 = 0; e3 < r5.locationSize; e3++) f2(r5.location + e3, t3.meshPerAttribute);
                  true !== n4.isInstancedMesh && void 0 === a3._maxInstanceCount && (a3._maxInstanceCount = t3.meshPerAttribute * t3.count);
                } else for (let e3 = 0; e3 < r5.locationSize; e3++) u2(r5.location + e3);
                e2.bindBuffer(e2.ARRAY_BUFFER, c3);
                for (let e3 = 0; e3 < r5.locationSize; e3++) m2(r5.location + e3, o4 / r5.locationSize, d3, i5, l6 * p3, (_4 + o4 / r5.locationSize * e3) * p3, h4);
              } else {
                if (s4.isInstancedBufferAttribute) {
                  for (let e3 = 0; e3 < r5.locationSize; e3++) f2(r5.location + e3, s4.meshPerAttribute);
                  true !== n4.isInstancedMesh && void 0 === a3._maxInstanceCount && (a3._maxInstanceCount = s4.meshPerAttribute * s4.count);
                } else for (let e3 = 0; e3 < r5.locationSize; e3++) u2(r5.location + e3);
                e2.bindBuffer(e2.ARRAY_BUFFER, c3);
                for (let e3 = 0; e3 < r5.locationSize; e3++) m2(r5.location + e3, o4 / r5.locationSize, d3, i5, o4 * p3, o4 / r5.locationSize * e3 * p3, h4);
              }
            } else if (void 0 !== l4) {
              const t3 = l4[i4];
              if (void 0 !== t3) switch (t3.length) {
                case 2:
                  e2.vertexAttrib2fv(r5.location, t3);
                  break;
                case 3:
                  e2.vertexAttrib3fv(r5.location, t3);
                  break;
                case 4:
                  e2.vertexAttrib4fv(r5.location, t3);
                  break;
                default:
                  e2.vertexAttrib1fv(r5.location, t3);
              }
            }
          }
        }
        p2();
      })(n3, r3, l3, h3), null !== _3 && e2.bindBuffer(e2.ELEMENT_ARRAY_BUFFER, t2.get(_3).buffer));
    }, reset: h2, resetDefaultState: _2, dispose: function() {
      h2();
      for (const e3 in i2) {
        const t3 = i2[e3];
        for (const e4 in t3) {
          const n3 = t3[e4];
          for (const e5 in n3) l2(n3[e5].object), delete n3[e5];
          delete t3[e4];
        }
        delete i2[e3];
      }
    }, releaseStatesOfGeometry: function(e3) {
      if (void 0 === i2[e3.id]) return;
      const t3 = i2[e3.id];
      for (const e4 in t3) {
        const n3 = t3[e4];
        for (const e5 in n3) l2(n3[e5].object), delete n3[e5];
        delete t3[e4];
      }
      delete i2[e3.id];
    }, releaseStatesOfProgram: function(e3) {
      for (const t3 in i2) {
        const n3 = i2[t3];
        if (void 0 === n3[e3.id]) continue;
        const r3 = n3[e3.id];
        for (const e4 in r3) l2(r3[e4].object), delete r3[e4];
        delete n3[e3.id];
      }
    }, initAttributes: d2, enableAttribute: u2, disableUnusedAttributes: p2 };
  }
  function Vn2(e2, t2, n2) {
    let i2;
    function r2(t3, r3, a2) {
      0 !== a2 && (e2.drawArraysInstanced(i2, t3, r3, a2), n2.update(r3, i2, a2));
    }
    this.setMode = function(e3) {
      i2 = e3;
    }, this.render = function(t3, r3) {
      e2.drawArrays(i2, t3, r3), n2.update(r3, i2, 1);
    }, this.renderInstances = r2, this.renderMultiDraw = function(e3, r3, a2) {
      if (0 === a2) return;
      t2.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i2, e3, 0, r3, 0, a2);
      let o2 = 0;
      for (let e4 = 0; e4 < a2; e4++) o2 += r3[e4];
      n2.update(o2, i2, 1);
    }, this.renderMultiDrawInstances = function(e3, a2, o2, s2) {
      if (0 === o2) return;
      const l2 = t2.get("WEBGL_multi_draw");
      if (null === l2) for (let t3 = 0; t3 < e3.length; t3++) r2(e3[t3], a2[t3], s2[t3]);
      else {
        l2.multiDrawArraysInstancedWEBGL(i2, e3, 0, a2, 0, s2, 0, o2);
        let t3 = 0;
        for (let e4 = 0; e4 < o2; e4++) t3 += a2[e4] * s2[e4];
        n2.update(t3, i2, 1);
      }
    };
  }
  function zn2(e2, t2, n2, i2) {
    let r2;
    function a2(t3) {
      if ("highp" === t3) {
        if (e2.getShaderPrecisionFormat(e2.VERTEX_SHADER, e2.HIGH_FLOAT).precision > 0 && e2.getShaderPrecisionFormat(e2.FRAGMENT_SHADER, e2.HIGH_FLOAT).precision > 0) return "highp";
        t3 = "mediump";
      }
      return "mediump" === t3 && e2.getShaderPrecisionFormat(e2.VERTEX_SHADER, e2.MEDIUM_FLOAT).precision > 0 && e2.getShaderPrecisionFormat(e2.FRAGMENT_SHADER, e2.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
    }
    let o2 = void 0 !== n2.precision ? n2.precision : "highp";
    const s2 = a2(o2);
    s2 !== o2 && (Hi("WebGLRenderer:", o2, "not supported, using", s2, "instead."), o2 = s2);
    const l2 = true === n2.logarithmicDepthBuffer, c2 = true === n2.reversedDepthBuffer && t2.has("EXT_clip_control"), d2 = e2.getParameter(e2.MAX_TEXTURE_IMAGE_UNITS), u2 = e2.getParameter(e2.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
    return { isWebGL2: true, getMaxAnisotropy: function() {
      if (void 0 !== r2) return r2;
      if (true === t2.has("EXT_texture_filter_anisotropic")) {
        const n3 = t2.get("EXT_texture_filter_anisotropic");
        r2 = e2.getParameter(n3.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      } else r2 = 0;
      return r2;
    }, getMaxPrecision: a2, textureFormatReadable: function(t3) {
      return t3 === Dt || i2.convert(t3) === e2.getParameter(e2.IMPLEMENTATION_COLOR_READ_FORMAT);
    }, textureTypeReadable: function(n3) {
      const r3 = n3 === Ot && (t2.has("EXT_color_buffer_half_float") || t2.has("EXT_color_buffer_float"));
      return !(n3 !== Tt && i2.convert(n3) !== e2.getParameter(e2.IMPLEMENTATION_COLOR_READ_TYPE) && n3 !== Pt && !r3);
    }, precision: o2, logarithmicDepthBuffer: l2, reversedDepthBuffer: c2, maxTextures: d2, maxVertexTextures: u2, maxTextureSize: e2.getParameter(e2.MAX_TEXTURE_SIZE), maxCubemapSize: e2.getParameter(e2.MAX_CUBE_MAP_TEXTURE_SIZE), maxAttributes: e2.getParameter(e2.MAX_VERTEX_ATTRIBS), maxVertexUniforms: e2.getParameter(e2.MAX_VERTEX_UNIFORM_VECTORS), maxVaryings: e2.getParameter(e2.MAX_VARYING_VECTORS), maxFragmentUniforms: e2.getParameter(e2.MAX_FRAGMENT_UNIFORM_VECTORS), vertexTextures: u2 > 0, maxSamples: e2.getParameter(e2.MAX_SAMPLES) };
  }
  function kn2(t2) {
    const n2 = this;
    let i2 = null, r2 = 0, a2 = false, o2 = false;
    const s2 = new uo(), l2 = new gs(), c2 = { value: null, needsUpdate: false };
    function d2(e2, t3, i3, r3) {
      const a3 = null !== e2 ? e2.length : 0;
      let o3 = null;
      if (0 !== a3) {
        if (o3 = c2.value, true !== r3 || null === o3) {
          const n3 = i3 + 4 * a3, r4 = t3.matrixWorldInverse;
          l2.getNormalMatrix(r4), (null === o3 || o3.length < n3) && (o3 = new Float32Array(n3));
          for (let t4 = 0, n4 = i3; t4 !== a3; ++t4, n4 += 4) s2.copy(e2[t4]).applyMatrix4(r4, l2), s2.normal.toArray(o3, n4), o3[n4 + 3] = s2.constant;
        }
        c2.value = o3, c2.needsUpdate = true;
      }
      return n2.numPlanes = a3, n2.numIntersection = 0, o3;
    }
    this.uniform = c2, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e2, t3) {
      const n3 = 0 !== e2.length || t3 || 0 !== r2 || a2;
      return a2 = t3, r2 = e2.length, n3;
    }, this.beginShadows = function() {
      o2 = true, d2(null);
    }, this.endShadows = function() {
      o2 = false;
    }, this.setGlobalState = function(e2, t3) {
      i2 = d2(e2, t3, 0);
    }, this.setState = function(e2, s3, l3) {
      const u2 = e2.clippingPlanes, f2 = e2.clipIntersection, p2 = e2.clipShadows, m2 = t2.get(e2);
      if (!a2 || null === u2 || 0 === u2.length || o2 && !p2) o2 ? d2(null) : (function() {
        c2.value !== i2 && (c2.value = i2, c2.needsUpdate = r2 > 0);
        n2.numPlanes = r2, n2.numIntersection = 0;
      })();
      else {
        const e3 = o2 ? 0 : r2, t3 = 4 * e3;
        let n3 = m2.clippingState || null;
        c2.value = n3, n3 = d2(u2, s3, t3, l3);
        for (let e4 = 0; e4 !== t3; ++e4) n3[e4] = i2[e4];
        m2.clippingState = n3, this.numIntersection = f2 ? this.numPlanes : 0, this.numPlanes += e3;
      }
    };
  }
  function Wn2(e2) {
    let t2 = /* @__PURE__ */ new WeakMap();
    function n2(e3, t3) {
      return t3 === ct ? e3.mapping = ht : t3 === ut && (e3.mapping = lt), e3;
    }
    function i2(e3) {
      const n3 = e3.target;
      n3.removeEventListener("dispose", i2);
      const r2 = t2.get(n3);
      void 0 !== r2 && (t2.delete(n3), r2.dispose());
    }
    return { get: function(r2) {
      if (r2 && r2.isTexture) {
        const a2 = r2.mapping;
        if (a2 === ct || a2 === ut) {
          if (t2.has(r2)) {
            return n2(t2.get(r2).texture, r2.mapping);
          }
          {
            const a3 = r2.image;
            if (a3 && a3.height > 0) {
              const o2 = new la(a3.height);
              return o2.fromEquirectangularTexture(e2, r2), t2.set(r2, o2), r2.addEventListener("dispose", i2), n2(o2.texture, r2.mapping);
            }
            return null;
          }
        }
      }
      return r2;
    }, dispose: function() {
      t2 = /* @__PURE__ */ new WeakMap();
    } };
  }
  var Xn2 = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582];
  var Yn2 = 20;
  var Kn2 = new Xc();
  var qn2 = new nn();
  var jn2 = null;
  var Zn2 = 0;
  var $n2 = 0;
  var Qn2 = false;
  var Jn2 = new ps();
  var ei2 = class {
    constructor(e2) {
      this._renderer = e2, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._sizeLods = [], this._sigmas = [], this._lodMeshes = [], this._backgroundBox = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null;
    }
    fromScene(e2, t2 = 0, n2 = 0.1, i2 = 100, r2 = {}) {
      const { size: a2 = 256, position: o2 = Jn2 } = r2;
      jn2 = this._renderer.getRenderTarget(), Zn2 = this._renderer.getActiveCubeFace(), $n2 = this._renderer.getActiveMipmapLevel(), Qn2 = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(a2);
      const s2 = this._allocateTargets();
      return s2.depthBuffer = true, this._sceneToCubeUV(e2, n2, i2, s2, o2), t2 > 0 && this._blur(s2, 0, 0, t2), this._applyPMREM(s2), this._cleanup(s2), s2;
    }
    fromEquirectangular(e2, t2 = null) {
      return this._fromTexture(e2, t2);
    }
    fromCubemap(e2, t2 = null) {
      return this._fromTexture(e2, t2);
    }
    compileCubemapShader() {
      null === this._cubemapMaterial && (this._cubemapMaterial = ri2(), this._compileMaterial(this._cubemapMaterial));
    }
    compileEquirectangularShader() {
      null === this._equirectMaterial && (this._equirectMaterial = ii2(), this._compileMaterial(this._equirectMaterial));
    }
    dispose() {
      this._dispose(), null !== this._cubemapMaterial && this._cubemapMaterial.dispose(), null !== this._equirectMaterial && this._equirectMaterial.dispose(), null !== this._backgroundBox && (this._backgroundBox.geometry.dispose(), this._backgroundBox.material.dispose());
    }
    _setSize(e2) {
      this._lodMax = Math.floor(Math.log2(e2)), this._cubeSize = Math.pow(2, this._lodMax);
    }
    _dispose() {
      null !== this._blurMaterial && this._blurMaterial.dispose(), null !== this._ggxMaterial && this._ggxMaterial.dispose(), null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose();
      for (let e2 = 0; e2 < this._lodMeshes.length; e2++) this._lodMeshes[e2].geometry.dispose();
    }
    _cleanup(e2) {
      this._renderer.setRenderTarget(jn2, Zn2, $n2), this._renderer.xr.enabled = Qn2, e2.scissorTest = false, ni2(e2, 0, 0, e2.width, e2.height);
    }
    _fromTexture(e2, t2) {
      e2.mapping === ht || e2.mapping === lt ? this._setSize(0 === e2.image.length ? 16 : e2.image[0].width || e2.image[0].image.width) : this._setSize(e2.image.width / 4), jn2 = this._renderer.getRenderTarget(), Zn2 = this._renderer.getActiveCubeFace(), $n2 = this._renderer.getActiveMipmapLevel(), Qn2 = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
      const n2 = t2 || this._allocateTargets();
      return this._textureToCubeUV(e2, n2), this._applyPMREM(n2), this._cleanup(n2), n2;
    }
    _allocateTargets() {
      const e2 = 3 * Math.max(this._cubeSize, 112), t2 = 4 * this._cubeSize, n2 = { magFilter: wt, minFilter: wt, generateMipmaps: false, type: Ot, format: Dt, colorSpace: Ge, depthBuffer: false }, i2 = ti2(e2, t2, n2);
      if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== e2 || this._pingPongRenderTarget.height !== t2) {
        null !== this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = ti2(e2, t2, n2);
        const { _lodMax: i3 } = this;
        ({ lodMeshes: this._lodMeshes, sizeLods: this._sizeLods, sigmas: this._sigmas } = (function(e3) {
          const t3 = [], n3 = [], i4 = [];
          let r2 = e3;
          const a2 = e3 - 4 + 1 + Xn2.length;
          for (let s2 = 0; s2 < a2; s2++) {
            const a3 = Math.pow(2, r2);
            t3.push(a3);
            let l2 = 1 / a3;
            s2 > e3 - 4 ? l2 = Xn2[s2 - e3 + 4 - 1] : 0 === s2 && (l2 = 0), n3.push(l2);
            const c2 = 1 / (a3 - 2), d2 = -c2, u2 = 1 + c2, f2 = [d2, d2, u2, d2, u2, u2, d2, d2, u2, u2, d2, u2], p2 = 6, m2 = 6, h2 = 3, _2 = 2, g2 = 1, v2 = new Float32Array(h2 * m2 * p2), E2 = new Float32Array(_2 * m2 * p2), S2 = new Float32Array(g2 * m2 * p2);
            for (let e4 = 0; e4 < p2; e4++) {
              const t4 = e4 % 3 * 2 / 3 - 1, n4 = e4 > 2 ? 0 : -1, i5 = [t4, n4, 0, t4 + 2 / 3, n4, 0, t4 + 2 / 3, n4 + 1, 0, t4, n4, 0, t4 + 2 / 3, n4 + 1, 0, t4, n4 + 1, 0];
              v2.set(i5, h2 * m2 * e4), E2.set(f2, _2 * m2 * e4);
              const r3 = [e4, e4, e4, e4, e4, e4];
              S2.set(r3, g2 * m2 * e4);
            }
            const T2 = new Nn();
            T2.setAttribute("position", new xn(v2, h2)), T2.setAttribute("uv", new xn(E2, _2)), T2.setAttribute("faceIndex", new xn(S2, g2)), i4.push(new Yn(T2, null)), r2 > 4 && r2--;
          }
          return { lodMeshes: i4, sizeLods: t3, sigmas: n3 };
        })(i3)), this._blurMaterial = (function(e3, t3, n3) {
          const i4 = new Float32Array(Yn2), a2 = new ps(0, 1, 0), o2 = new ta({ name: "SphericalGaussianBlur", defines: { n: Yn2, CUBEUV_TEXEL_WIDTH: 1 / t3, CUBEUV_TEXEL_HEIGHT: 1 / n3, CUBEUV_MAX_MIP: `${e3}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: i4 }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: a2 } }, vertexShader: ai2(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform int samples;\n			uniform float weights[ n ];\n			uniform bool latitudinal;\n			uniform float dTheta;\n			uniform float mipInt;\n			uniform vec3 poleAxis;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			vec3 getSample( float theta, vec3 axis ) {\n\n				float cosTheta = cos( theta );\n				// Rodrigues' axis-angle rotation\n				vec3 sampleDirection = vOutputDirection * cosTheta\n					+ cross( axis, vOutputDirection ) * sin( theta )\n					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n				return bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n			}\n\n			void main() {\n\n				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n				}\n\n				axis = normalize( axis );\n\n				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n				for ( int i = 1; i < n; i++ ) {\n\n					if ( i >= samples ) {\n\n						break;\n\n					}\n\n					float theta = dTheta * float( i );\n					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n				}\n\n			}\n		", blending: m, depthTest: false, depthWrite: false });
          return o2;
        })(i3, e2, t2), this._ggxMaterial = (function(e3, t3, n3) {
          const i4 = new ta({ name: "PMREMGGXConvolution", defines: { GGX_SAMPLES: 256, CUBEUV_TEXEL_WIDTH: 1 / t3, CUBEUV_TEXEL_HEIGHT: 1 / n3, CUBEUV_MAX_MIP: `${e3}.0` }, uniforms: { envMap: { value: null }, roughness: { value: 0 }, mipInt: { value: 0 } }, vertexShader: ai2(), fragmentShader: '\n\n			precision highp float;\n			precision highp int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform float roughness;\n			uniform float mipInt;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			#define PI 3.14159265359\n\n			// Van der Corput radical inverse\n			float radicalInverse_VdC(uint bits) {\n				bits = (bits << 16u) | (bits >> 16u);\n				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);\n				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);\n				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);\n				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);\n				return float(bits) * 2.3283064365386963e-10; // / 0x100000000\n			}\n\n			// Hammersley sequence\n			vec2 hammersley(uint i, uint N) {\n				return vec2(float(i) / float(N), radicalInverse_VdC(i));\n			}\n\n			// GGX VNDF importance sampling (Eric Heitz 2018)\n			// "Sampling the GGX Distribution of Visible Normals"\n			// https://jcgt.org/published/0007/04/01/\n			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {\n				float alpha = roughness * roughness;\n\n				// Section 3.2: Transform view direction to hemisphere configuration\n				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));\n\n				// Section 4.1: Orthonormal basis\n				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;\n				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);\n				vec3 T2 = cross(Vh, T1);\n\n				// Section 4.2: Parameterization of projected area\n				float r = sqrt(Xi.x);\n				float phi = 2.0 * PI * Xi.y;\n				float t1 = r * cos(phi);\n				float t2 = r * sin(phi);\n				float s = 0.5 * (1.0 + Vh.z);\n				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;\n\n				// Section 4.3: Reprojection onto hemisphere\n				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;\n\n				// Section 3.4: Transform back to ellipsoid configuration\n				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));\n			}\n\n			void main() {\n				vec3 N = normalize(vOutputDirection);\n				vec3 V = N; // Assume view direction equals normal for pre-filtering\n\n				vec3 prefilteredColor = vec3(0.0);\n				float totalWeight = 0.0;\n\n				// For very low roughness, just sample the environment directly\n				if (roughness < 0.001) {\n					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);\n					return;\n				}\n\n				// Tangent space basis for VNDF sampling\n				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);\n				vec3 tangent = normalize(cross(up, N));\n				vec3 bitangent = cross(N, tangent);\n\n				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {\n					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));\n\n					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)\n					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);\n\n					// Transform H back to world space\n					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);\n					vec3 L = normalize(2.0 * dot(V, H) * H - V);\n\n					float NdotL = max(dot(N, L), 0.0);\n\n					if(NdotL > 0.0) {\n						// Sample environment at fixed mip level\n						// VNDF importance sampling handles the distribution filtering\n						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);\n\n						// Weight by NdotL for the split-sum approximation\n						// VNDF PDF naturally accounts for the visible microfacet distribution\n						prefilteredColor += sampleColor * NdotL;\n						totalWeight += NdotL;\n					}\n				}\n\n				if (totalWeight > 0.0) {\n					prefilteredColor = prefilteredColor / totalWeight;\n				}\n\n				gl_FragColor = vec4(prefilteredColor, 1.0);\n			}\n		', blending: m, depthTest: false, depthWrite: false });
          return i4;
        })(i3, e2, t2);
      }
      return i2;
    }
    _compileMaterial(e2) {
      const t2 = new Yn(new Nn(), e2);
      this._renderer.compile(t2, Kn2);
    }
    _sceneToCubeUV(e2, t2, n2, i2, r2) {
      const a2 = new na(90, 1, t2, n2), l2 = [1, -1, 1, 1, 1, 1], d2 = [1, 1, 1, -1, -1, -1], u2 = this._renderer, f2 = u2.autoClear, p2 = u2.toneMapping;
      u2.getClearColor(qn2), u2.toneMapping = $, u2.autoClear = false;
      u2.state.buffers.depth.getReversed() && (u2.setRenderTarget(i2), u2.clearDepth(), u2.setRenderTarget(null)), null === this._backgroundBox && (this._backgroundBox = new Yn(new Hn(), new ln({ name: "PMREM.Background", side: d, depthWrite: false, depthTest: false })));
      const m2 = this._backgroundBox, h2 = m2.material;
      let _2 = false;
      const g2 = e2.background;
      g2 ? g2.isColor && (h2.color.copy(g2), e2.background = null, _2 = true) : (h2.color.copy(qn2), _2 = true);
      for (let t3 = 0; t3 < 6; t3++) {
        const n3 = t3 % 3;
        0 === n3 ? (a2.up.set(0, l2[t3], 0), a2.position.set(r2.x, r2.y, r2.z), a2.lookAt(r2.x + d2[t3], r2.y, r2.z)) : 1 === n3 ? (a2.up.set(0, 0, l2[t3]), a2.position.set(r2.x, r2.y, r2.z), a2.lookAt(r2.x, r2.y + d2[t3], r2.z)) : (a2.up.set(0, l2[t3], 0), a2.position.set(r2.x, r2.y, r2.z), a2.lookAt(r2.x, r2.y, r2.z + d2[t3]));
        const o2 = this._cubeSize;
        ni2(i2, n3 * o2, t3 > 2 ? o2 : 0, o2, o2), u2.setRenderTarget(i2), _2 && u2.render(m2, a2), u2.render(e2, a2);
      }
      u2.toneMapping = p2, u2.autoClear = f2, e2.background = g2;
    }
    _textureToCubeUV(e2, t2) {
      const n2 = this._renderer, i2 = e2.mapping === ht || e2.mapping === lt;
      i2 ? (null === this._cubemapMaterial && (this._cubemapMaterial = ri2()), this._cubemapMaterial.uniforms.flipEnvMap.value = false === e2.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = ii2());
      const r2 = i2 ? this._cubemapMaterial : this._equirectMaterial, a2 = this._lodMeshes[0];
      a2.material = r2;
      r2.uniforms.envMap.value = e2;
      const o2 = this._cubeSize;
      ni2(t2, 0, 0, 3 * o2, 2 * o2), n2.setRenderTarget(t2), n2.render(a2, Kn2);
    }
    _applyPMREM(e2) {
      const t2 = this._renderer, n2 = t2.autoClear;
      t2.autoClear = false;
      const i2 = this._lodMeshes.length;
      for (let t3 = 1; t3 < i2; t3++) this._applyGGXFilter(e2, t3 - 1, t3);
      t2.autoClear = n2;
    }
    _applyGGXFilter(e2, t2, n2) {
      const i2 = this._renderer, r2 = this._pingPongRenderTarget, a2 = this._ggxMaterial, o2 = this._lodMeshes[n2];
      o2.material = a2;
      const s2 = a2.uniforms, l2 = n2 / (this._lodMeshes.length - 1), c2 = t2 / (this._lodMeshes.length - 1), d2 = Math.sqrt(l2 * l2 - c2 * c2) * (0.05 + 0.95 * l2), { _lodMax: u2 } = this, f2 = this._sizeLods[n2], p2 = 3 * f2 * (n2 > u2 - 4 ? n2 - u2 + 4 : 0), m2 = 4 * (this._cubeSize - f2);
      s2.envMap.value = e2.texture, s2.roughness.value = d2, s2.mipInt.value = u2 - t2, ni2(r2, p2, m2, 3 * f2, 2 * f2), i2.setRenderTarget(r2), i2.render(o2, Kn2), s2.envMap.value = r2.texture, s2.roughness.value = 0, s2.mipInt.value = u2 - n2, ni2(e2, p2, m2, 3 * f2, 2 * f2), i2.setRenderTarget(e2), i2.render(o2, Kn2);
    }
    _blur(e2, t2, n2, i2, r2) {
      const a2 = this._pingPongRenderTarget;
      this._halfBlur(e2, a2, t2, n2, i2, "latitudinal", r2), this._halfBlur(a2, e2, n2, n2, i2, "longitudinal", r2);
    }
    _halfBlur(e2, t2, n2, i2, r2, a2, o2) {
      const s2 = this._renderer, l2 = this._blurMaterial;
      "latitudinal" !== a2 && "longitudinal" !== a2 && Gi("blur direction must be either latitudinal or longitudinal!");
      const c2 = this._lodMeshes[i2];
      c2.material = l2;
      const d2 = l2.uniforms, u2 = this._sizeLods[n2] - 1, f2 = isFinite(r2) ? Math.PI / (2 * u2) : 2 * Math.PI / 39, p2 = r2 / f2, m2 = isFinite(r2) ? 1 + Math.floor(3 * p2) : Yn2;
      m2 > Yn2 && Hi(`sigmaRadians, ${r2}, is too large and will clip, as it requested ${m2} samples when the maximum is set to 20`);
      const h2 = [];
      let _2 = 0;
      for (let e3 = 0; e3 < Yn2; ++e3) {
        const t3 = e3 / p2, n3 = Math.exp(-t3 * t3 / 2);
        h2.push(n3), 0 === e3 ? _2 += n3 : e3 < m2 && (_2 += 2 * n3);
      }
      for (let e3 = 0; e3 < h2.length; e3++) h2[e3] = h2[e3] / _2;
      d2.envMap.value = e2.texture, d2.samples.value = m2, d2.weights.value = h2, d2.latitudinal.value = "latitudinal" === a2, o2 && (d2.poleAxis.value = o2);
      const { _lodMax: g2 } = this;
      d2.dTheta.value = f2, d2.mipInt.value = g2 - n2;
      const v2 = this._sizeLods[i2];
      ni2(t2, 3 * v2 * (i2 > g2 - 4 ? i2 - g2 + 4 : 0), 4 * (this._cubeSize - v2), 3 * v2, 2 * v2), s2.setRenderTarget(t2), s2.render(c2, Kn2);
    }
  };
  function ti2(e2, t2, n2) {
    const i2 = new Rs(e2, t2, n2);
    return i2.texture.mapping = dt, i2.texture.name = "PMREM.cubeUv", i2.scissorTest = true, i2;
  }
  function ni2(e2, t2, n2, i2, r2) {
    e2.viewport.set(t2, n2, i2, r2), e2.scissor.set(t2, n2, i2, r2);
  }
  function ii2() {
    return new ta({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: ai2(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n\n			#include <common>\n\n			void main() {\n\n				vec3 outputDirection = normalize( vOutputDirection );\n				vec2 uv = equirectUv( outputDirection );\n\n				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n			}\n		", blending: m, depthTest: false, depthWrite: false });
  }
  function ri2() {
    return new ta({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: ai2(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			uniform float flipEnvMap;\n\n			varying vec3 vOutputDirection;\n\n			uniform samplerCube envMap;\n\n			void main() {\n\n				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n			}\n		", blending: m, depthTest: false, depthWrite: false });
  }
  function ai2() {
    return "\n\n		precision mediump float;\n		precision mediump int;\n\n		attribute float faceIndex;\n\n		varying vec3 vOutputDirection;\n\n		// RH coordinate system; PMREM face-indexing convention\n		vec3 getDirection( vec2 uv, float face ) {\n\n			uv = 2.0 * uv - 1.0;\n\n			vec3 direction = vec3( uv, 1.0 );\n\n			if ( face == 0.0 ) {\n\n				direction = direction.zyx; // ( 1, v, u ) pos x\n\n			} else if ( face == 1.0 ) {\n\n				direction = direction.xzy;\n				direction.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n			} else if ( face == 2.0 ) {\n\n				direction.x *= -1.0; // ( -u, v, 1 ) pos z\n\n			} else if ( face == 3.0 ) {\n\n				direction = direction.zyx;\n				direction.xz *= -1.0; // ( -1, v, -u ) neg x\n\n			} else if ( face == 4.0 ) {\n\n				direction = direction.xzy;\n				direction.xy *= -1.0; // ( -u, -1, v ) neg y\n\n			} else if ( face == 5.0 ) {\n\n				direction.z *= -1.0; // ( u, v, -1 ) neg z\n\n			}\n\n			return direction;\n\n		}\n\n		void main() {\n\n			vOutputDirection = getDirection( uv, faceIndex );\n			gl_Position = vec4( position, 1.0 );\n\n		}\n	";
  }
  function oi2(e2) {
    let t2 = /* @__PURE__ */ new WeakMap(), n2 = null;
    function i2(e3) {
      const n3 = e3.target;
      n3.removeEventListener("dispose", i2);
      const r2 = t2.get(n3);
      void 0 !== r2 && (t2.delete(n3), r2.dispose());
    }
    return { get: function(r2) {
      if (r2 && r2.isTexture) {
        const a2 = r2.mapping, o2 = a2 === ct || a2 === ut, s2 = a2 === ht || a2 === lt;
        if (o2 || s2) {
          let a3 = t2.get(r2);
          const l2 = void 0 !== a3 ? a3.texture.pmremVersion : 0;
          if (r2.isRenderTargetTexture && r2.pmremVersion !== l2) return null === n2 && (n2 = new ei2(e2)), a3 = o2 ? n2.fromEquirectangular(r2, a3) : n2.fromCubemap(r2, a3), a3.texture.pmremVersion = r2.pmremVersion, t2.set(r2, a3), a3.texture;
          if (void 0 !== a3) return a3.texture;
          {
            const l3 = r2.image;
            return o2 && l3 && l3.height > 0 || s2 && l3 && (function(e3) {
              let t3 = 0;
              const n3 = 6;
              for (let i3 = 0; i3 < n3; i3++) void 0 !== e3[i3] && t3++;
              return t3 === n3;
            })(l3) ? (null === n2 && (n2 = new ei2(e2)), a3 = o2 ? n2.fromEquirectangular(r2) : n2.fromCubemap(r2), a3.texture.pmremVersion = r2.pmremVersion, t2.set(r2, a3), r2.addEventListener("dispose", i2), a3.texture) : null;
          }
        }
      }
      return r2;
    }, dispose: function() {
      t2 = /* @__PURE__ */ new WeakMap(), null !== n2 && (n2.dispose(), n2 = null);
    } };
  }
  function si2(e2) {
    const t2 = {};
    function n2(n3) {
      if (void 0 !== t2[n3]) return t2[n3];
      const i2 = e2.getExtension(n3);
      return t2[n3] = i2, i2;
    }
    return { has: function(e3) {
      return null !== n2(e3);
    }, init: function() {
      n2("EXT_color_buffer_float"), n2("WEBGL_clip_cull_distance"), n2("OES_texture_float_linear"), n2("EXT_color_buffer_half_float"), n2("WEBGL_multisampled_render_to_texture"), n2("WEBGL_render_shared_exponent");
    }, get: function(e3) {
      const t3 = n2(e3);
      return null === t3 && $i("WebGLRenderer: " + e3 + " extension not supported."), t3;
    } };
  }
  function li2(e2, t2, n2, i2) {
    const r2 = {}, a2 = /* @__PURE__ */ new WeakMap();
    function o2(e3) {
      const s3 = e3.target;
      null !== s3.index && t2.remove(s3.index);
      for (const e4 in s3.attributes) t2.remove(s3.attributes[e4]);
      s3.removeEventListener("dispose", o2), delete r2[s3.id];
      const l2 = a2.get(s3);
      l2 && (t2.remove(l2), a2.delete(s3)), i2.releaseStatesOfGeometry(s3), true === s3.isInstancedBufferGeometry && delete s3._maxInstanceCount, n2.memory.geometries--;
    }
    function s2(e3) {
      const n3 = [], i3 = e3.index, r3 = e3.attributes.position;
      let o3 = 0;
      if (null !== i3) {
        const e4 = i3.array;
        o3 = i3.version;
        for (let t3 = 0, i4 = e4.length; t3 < i4; t3 += 3) {
          const i5 = e4[t3 + 0], r4 = e4[t3 + 1], a3 = e4[t3 + 2];
          n3.push(i5, r4, r4, a3, a3, i5);
        }
      } else {
        if (void 0 === r3) return;
        {
          const e4 = r3.array;
          o3 = r3.version;
          for (let t3 = 0, i4 = e4.length / 3 - 1; t3 < i4; t3 += 3) {
            const e5 = t3 + 0, i5 = t3 + 1, r4 = t3 + 2;
            n3.push(e5, i5, i5, r4, r4, e5);
          }
        }
      }
      const s3 = new (Ei(n3) ? An : Sn)(n3, 1);
      s3.version = o3;
      const l2 = a2.get(e3);
      l2 && t2.remove(l2), a2.set(e3, s3);
    }
    return { get: function(e3, t3) {
      return true === r2[t3.id] || (t3.addEventListener("dispose", o2), r2[t3.id] = true, n2.memory.geometries++), t3;
    }, update: function(n3) {
      const i3 = n3.attributes;
      for (const n4 in i3) t2.update(i3[n4], e2.ARRAY_BUFFER);
    }, getWireframeAttribute: function(e3) {
      const t3 = a2.get(e3);
      if (t3) {
        const n3 = e3.index;
        null !== n3 && t3.version < n3.version && s2(e3);
      } else s2(e3);
      return a2.get(e3);
    } };
  }
  function ci2(e2, t2, n2) {
    let i2, r2, a2;
    function o2(t3, o3, s2) {
      0 !== s2 && (e2.drawElementsInstanced(i2, o3, r2, t3 * a2, s2), n2.update(o3, i2, s2));
    }
    this.setMode = function(e3) {
      i2 = e3;
    }, this.setIndex = function(e3) {
      r2 = e3.type, a2 = e3.bytesPerElement;
    }, this.render = function(t3, o3) {
      e2.drawElements(i2, o3, r2, t3 * a2), n2.update(o3, i2, 1);
    }, this.renderInstances = o2, this.renderMultiDraw = function(e3, a3, o3) {
      if (0 === o3) return;
      t2.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i2, a3, 0, r2, e3, 0, o3);
      let s2 = 0;
      for (let e4 = 0; e4 < o3; e4++) s2 += a3[e4];
      n2.update(s2, i2, 1);
    }, this.renderMultiDrawInstances = function(e3, s2, l2, c2) {
      if (0 === l2) return;
      const d2 = t2.get("WEBGL_multi_draw");
      if (null === d2) for (let t3 = 0; t3 < e3.length; t3++) o2(e3[t3] / a2, s2[t3], c2[t3]);
      else {
        d2.multiDrawElementsInstancedWEBGL(i2, s2, 0, r2, e3, 0, c2, 0, l2);
        let t3 = 0;
        for (let e4 = 0; e4 < l2; e4++) t3 += s2[e4] * c2[e4];
        n2.update(t3, i2, 1);
      }
    };
  }
  function di2(e2) {
    const t2 = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
    return { memory: { geometries: 0, textures: 0 }, render: t2, programs: null, autoReset: true, reset: function() {
      t2.calls = 0, t2.triangles = 0, t2.points = 0, t2.lines = 0;
    }, update: function(n2, i2, r2) {
      switch (t2.calls++, i2) {
        case e2.TRIANGLES:
          t2.triangles += r2 * (n2 / 3);
          break;
        case e2.LINES:
          t2.lines += r2 * (n2 / 2);
          break;
        case e2.LINE_STRIP:
          t2.lines += r2 * (n2 - 1);
          break;
        case e2.LINE_LOOP:
          t2.lines += r2 * n2;
          break;
        case e2.POINTS:
          t2.points += r2 * n2;
          break;
        default:
          Gi("WebGLInfo: Unknown draw mode:", i2);
      }
    } };
  }
  function ui2(e2, n2, i2) {
    const r2 = /* @__PURE__ */ new WeakMap(), a2 = new Ps();
    return { update: function(o2, s2, l2) {
      const c2 = o2.morphTargetInfluences, d2 = s2.morphAttributes.position || s2.morphAttributes.normal || s2.morphAttributes.color, u2 = void 0 !== d2 ? d2.length : 0;
      let f2 = r2.get(s2);
      if (void 0 === f2 || f2.count !== u2) {
        let b2 = function() {
          A2.dispose(), r2.delete(s2), s2.removeEventListener("dispose", b2);
        };
        void 0 !== f2 && f2.texture.dispose();
        const p2 = void 0 !== s2.morphAttributes.position, m2 = void 0 !== s2.morphAttributes.normal, h2 = void 0 !== s2.morphAttributes.color, _2 = s2.morphAttributes.position || [], g2 = s2.morphAttributes.normal || [], v2 = s2.morphAttributes.color || [];
        let E2 = 0;
        true === p2 && (E2 = 1), true === m2 && (E2 = 2), true === h2 && (E2 = 3);
        let S2 = s2.attributes.position.count * E2, T2 = 1;
        S2 > n2.maxTextureSize && (T2 = Math.ceil(S2 / n2.maxTextureSize), S2 = n2.maxTextureSize);
        const x2 = new Float32Array(S2 * T2 * 4 * u2), A2 = new Ns(x2, S2, T2, u2);
        A2.type = Pt, A2.needsUpdate = true;
        const R2 = 4 * E2;
        for (let C2 = 0; C2 < u2; C2++) {
          const L2 = _2[C2], P2 = g2[C2], U2 = v2[C2], D2 = S2 * T2 * 4 * C2;
          for (let w2 = 0; w2 < L2.count; w2++) {
            const y2 = w2 * R2;
            true === p2 && (a2.fromBufferAttribute(L2, w2), x2[D2 + y2 + 0] = a2.x, x2[D2 + y2 + 1] = a2.y, x2[D2 + y2 + 2] = a2.z, x2[D2 + y2 + 3] = 0), true === m2 && (a2.fromBufferAttribute(P2, w2), x2[D2 + y2 + 4] = a2.x, x2[D2 + y2 + 5] = a2.y, x2[D2 + y2 + 6] = a2.z, x2[D2 + y2 + 7] = 0), true === h2 && (a2.fromBufferAttribute(U2, w2), x2[D2 + y2 + 8] = a2.x, x2[D2 + y2 + 9] = a2.y, x2[D2 + y2 + 10] = a2.z, x2[D2 + y2 + 11] = 4 === U2.itemSize ? a2.w : 1);
          }
        }
        f2 = { count: u2, texture: A2, size: new us(S2, T2) }, r2.set(s2, f2), s2.addEventListener("dispose", b2);
      }
      if (true === o2.isInstancedMesh && null !== o2.morphTexture) l2.getUniforms().setValue(e2, "morphTexture", o2.morphTexture, i2);
      else {
        let I2 = 0;
        for (let O2 = 0; O2 < c2.length; O2++) I2 += c2[O2];
        const N2 = s2.morphTargetsRelative ? 1 : 1 - I2;
        l2.getUniforms().setValue(e2, "morphTargetBaseInfluence", N2), l2.getUniforms().setValue(e2, "morphTargetInfluences", c2);
      }
      l2.getUniforms().setValue(e2, "morphTargetsTexture", f2.texture, i2), l2.getUniforms().setValue(e2, "morphTargetsTextureSize", f2.size);
    } };
  }
  function fi2(e2, t2, n2, i2) {
    let r2 = /* @__PURE__ */ new WeakMap();
    function a2(e3) {
      const t3 = e3.target;
      t3.removeEventListener("dispose", a2), n2.remove(t3.instanceMatrix), null !== t3.instanceColor && n2.remove(t3.instanceColor);
    }
    return { update: function(o2) {
      const s2 = i2.render.frame, l2 = o2.geometry, c2 = t2.get(o2, l2);
      if (r2.get(c2) !== s2 && (t2.update(c2), r2.set(c2, s2)), o2.isInstancedMesh && (false === o2.hasEventListener("dispose", a2) && o2.addEventListener("dispose", a2), r2.get(o2) !== s2 && (n2.update(o2.instanceMatrix, e2.ARRAY_BUFFER), null !== o2.instanceColor && n2.update(o2.instanceColor, e2.ARRAY_BUFFER), r2.set(o2, s2))), o2.isSkinnedMesh) {
        const e3 = o2.skeleton;
        r2.get(e3) !== s2 && (e3.update(), r2.set(e3, s2));
      }
      return c2;
    }, dispose: function() {
      r2 = /* @__PURE__ */ new WeakMap();
    } };
  }
  var pi2 = new ks();
  var mi2 = new ph(1, 1);
  var hi2 = new Ns();
  var _i2 = new Fs();
  var gi2 = new ha();
  var vi2 = [];
  var Ei2 = [];
  var Si2 = new Float32Array(16);
  var Ti2 = new Float32Array(9);
  var Mi2 = new Float32Array(4);
  function xi2(e2, t2, n2) {
    const i2 = e2[0];
    if (i2 <= 0 || i2 > 0) return e2;
    const r2 = t2 * n2;
    let a2 = vi2[r2];
    if (void 0 === a2 && (a2 = new Float32Array(r2), vi2[r2] = a2), 0 !== t2) {
      i2.toArray(a2, 0);
      for (let i3 = 1, r3 = 0; i3 !== t2; ++i3) r3 += n2, e2[i3].toArray(a2, r3);
    }
    return a2;
  }
  function Ai2(e2, t2) {
    if (e2.length !== t2.length) return false;
    for (let n2 = 0, i2 = e2.length; n2 < i2; n2++) if (e2[n2] !== t2[n2]) return false;
    return true;
  }
  function Ri2(e2, t2) {
    for (let n2 = 0, i2 = t2.length; n2 < i2; n2++) e2[n2] = t2[n2];
  }
  function bi2(e2, t2) {
    let n2 = Ei2[t2];
    void 0 === n2 && (n2 = new Int32Array(t2), Ei2[t2] = n2);
    for (let i2 = 0; i2 !== t2; ++i2) n2[i2] = e2.allocateTextureUnit();
    return n2;
  }
  function Ci2(e2, t2) {
    const n2 = this.cache;
    n2[0] !== t2 && (e2.uniform1f(this.addr, t2), n2[0] = t2);
  }
  function Li2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y || (e2.uniform2f(this.addr, t2.x, t2.y), n2[0] = t2.x, n2[1] = t2.y);
    else {
      if (Ai2(n2, t2)) return;
      e2.uniform2fv(this.addr, t2), Ri2(n2, t2);
    }
  }
  function Pi2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y && n2[2] === t2.z || (e2.uniform3f(this.addr, t2.x, t2.y, t2.z), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z);
    else if (void 0 !== t2.r) n2[0] === t2.r && n2[1] === t2.g && n2[2] === t2.b || (e2.uniform3f(this.addr, t2.r, t2.g, t2.b), n2[0] = t2.r, n2[1] = t2.g, n2[2] = t2.b);
    else {
      if (Ai2(n2, t2)) return;
      e2.uniform3fv(this.addr, t2), Ri2(n2, t2);
    }
  }
  function Ui2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y && n2[2] === t2.z && n2[3] === t2.w || (e2.uniform4f(this.addr, t2.x, t2.y, t2.z, t2.w), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z, n2[3] = t2.w);
    else {
      if (Ai2(n2, t2)) return;
      e2.uniform4fv(this.addr, t2), Ri2(n2, t2);
    }
  }
  function Di(e2, t2) {
    const n2 = this.cache, i2 = t2.elements;
    if (void 0 === i2) {
      if (Ai2(n2, t2)) return;
      e2.uniformMatrix2fv(this.addr, false, t2), Ri2(n2, t2);
    } else {
      if (Ai2(n2, i2)) return;
      Mi2.set(i2), e2.uniformMatrix2fv(this.addr, false, Mi2), Ri2(n2, i2);
    }
  }
  function wi2(e2, t2) {
    const n2 = this.cache, i2 = t2.elements;
    if (void 0 === i2) {
      if (Ai2(n2, t2)) return;
      e2.uniformMatrix3fv(this.addr, false, t2), Ri2(n2, t2);
    } else {
      if (Ai2(n2, i2)) return;
      Ti2.set(i2), e2.uniformMatrix3fv(this.addr, false, Ti2), Ri2(n2, i2);
    }
  }
  function yi2(e2, t2) {
    const n2 = this.cache, i2 = t2.elements;
    if (void 0 === i2) {
      if (Ai2(n2, t2)) return;
      e2.uniformMatrix4fv(this.addr, false, t2), Ri2(n2, t2);
    } else {
      if (Ai2(n2, i2)) return;
      Si2.set(i2), e2.uniformMatrix4fv(this.addr, false, Si2), Ri2(n2, i2);
    }
  }
  function Ii2(e2, t2) {
    const n2 = this.cache;
    n2[0] !== t2 && (e2.uniform1i(this.addr, t2), n2[0] = t2);
  }
  function Ni2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y || (e2.uniform2i(this.addr, t2.x, t2.y), n2[0] = t2.x, n2[1] = t2.y);
    else {
      if (Ai2(n2, t2)) return;
      e2.uniform2iv(this.addr, t2), Ri2(n2, t2);
    }
  }
  function Oi2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y && n2[2] === t2.z || (e2.uniform3i(this.addr, t2.x, t2.y, t2.z), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z);
    else {
      if (Ai2(n2, t2)) return;
      e2.uniform3iv(this.addr, t2), Ri2(n2, t2);
    }
  }
  function Fi2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y && n2[2] === t2.z && n2[3] === t2.w || (e2.uniform4i(this.addr, t2.x, t2.y, t2.z, t2.w), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z, n2[3] = t2.w);
    else {
      if (Ai2(n2, t2)) return;
      e2.uniform4iv(this.addr, t2), Ri2(n2, t2);
    }
  }
  function Bi2(e2, t2) {
    const n2 = this.cache;
    n2[0] !== t2 && (e2.uniform1ui(this.addr, t2), n2[0] = t2);
  }
  function Gi2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y || (e2.uniform2ui(this.addr, t2.x, t2.y), n2[0] = t2.x, n2[1] = t2.y);
    else {
      if (Ai2(n2, t2)) return;
      e2.uniform2uiv(this.addr, t2), Ri2(n2, t2);
    }
  }
  function Hi2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y && n2[2] === t2.z || (e2.uniform3ui(this.addr, t2.x, t2.y, t2.z), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z);
    else {
      if (Ai2(n2, t2)) return;
      e2.uniform3uiv(this.addr, t2), Ri2(n2, t2);
    }
  }
  function Vi2(e2, t2) {
    const n2 = this.cache;
    if (void 0 !== t2.x) n2[0] === t2.x && n2[1] === t2.y && n2[2] === t2.z && n2[3] === t2.w || (e2.uniform4ui(this.addr, t2.x, t2.y, t2.z, t2.w), n2[0] = t2.x, n2[1] = t2.y, n2[2] = t2.z, n2[3] = t2.w);
    else {
      if (Ai2(n2, t2)) return;
      e2.uniform4uiv(this.addr, t2), Ri2(n2, t2);
    }
  }
  function zi2(e2, t2, n2) {
    const i2 = this.cache, r2 = n2.allocateTextureUnit();
    let a2;
    i2[0] !== r2 && (e2.uniform1i(this.addr, r2), i2[0] = r2), this.type === e2.SAMPLER_2D_SHADOW ? (mi2.compareFunction = xi, a2 = mi2) : a2 = pi2, n2.setTexture2D(t2 || a2, r2);
  }
  function ki2(e2, t2, n2) {
    const i2 = this.cache, r2 = n2.allocateTextureUnit();
    i2[0] !== r2 && (e2.uniform1i(this.addr, r2), i2[0] = r2), n2.setTexture3D(t2 || _i2, r2);
  }
  function Wi2(e2, t2, n2) {
    const i2 = this.cache, r2 = n2.allocateTextureUnit();
    i2[0] !== r2 && (e2.uniform1i(this.addr, r2), i2[0] = r2), n2.setTextureCube(t2 || gi2, r2);
  }
  function Xi2(e2, t2, n2) {
    const i2 = this.cache, r2 = n2.allocateTextureUnit();
    i2[0] !== r2 && (e2.uniform1i(this.addr, r2), i2[0] = r2), n2.setTexture2DArray(t2 || hi2, r2);
  }
  function Yi2(e2, t2) {
    e2.uniform1fv(this.addr, t2);
  }
  function Ki2(e2, t2) {
    const n2 = xi2(t2, this.size, 2);
    e2.uniform2fv(this.addr, n2);
  }
  function qi2(e2, t2) {
    const n2 = xi2(t2, this.size, 3);
    e2.uniform3fv(this.addr, n2);
  }
  function ji(e2, t2) {
    const n2 = xi2(t2, this.size, 4);
    e2.uniform4fv(this.addr, n2);
  }
  function Zi2(e2, t2) {
    const n2 = xi2(t2, this.size, 4);
    e2.uniformMatrix2fv(this.addr, false, n2);
  }
  function $i2(e2, t2) {
    const n2 = xi2(t2, this.size, 9);
    e2.uniformMatrix3fv(this.addr, false, n2);
  }
  function Qi2(e2, t2) {
    const n2 = xi2(t2, this.size, 16);
    e2.uniformMatrix4fv(this.addr, false, n2);
  }
  function Ji2(e2, t2) {
    e2.uniform1iv(this.addr, t2);
  }
  function er2(e2, t2) {
    e2.uniform2iv(this.addr, t2);
  }
  function tr2(e2, t2) {
    e2.uniform3iv(this.addr, t2);
  }
  function nr2(e2, t2) {
    e2.uniform4iv(this.addr, t2);
  }
  function ir2(e2, t2) {
    e2.uniform1uiv(this.addr, t2);
  }
  function rr2(e2, t2) {
    e2.uniform2uiv(this.addr, t2);
  }
  function ar2(e2, t2) {
    e2.uniform3uiv(this.addr, t2);
  }
  function or2(e2, t2) {
    e2.uniform4uiv(this.addr, t2);
  }
  function sr2(e2, t2, n2) {
    const i2 = this.cache, r2 = t2.length, a2 = bi2(n2, r2);
    Ai2(i2, a2) || (e2.uniform1iv(this.addr, a2), Ri2(i2, a2));
    for (let e3 = 0; e3 !== r2; ++e3) n2.setTexture2D(t2[e3] || pi2, a2[e3]);
  }
  function lr2(e2, t2, n2) {
    const i2 = this.cache, r2 = t2.length, a2 = bi2(n2, r2);
    Ai2(i2, a2) || (e2.uniform1iv(this.addr, a2), Ri2(i2, a2));
    for (let e3 = 0; e3 !== r2; ++e3) n2.setTexture3D(t2[e3] || _i2, a2[e3]);
  }
  function cr2(e2, t2, n2) {
    const i2 = this.cache, r2 = t2.length, a2 = bi2(n2, r2);
    Ai2(i2, a2) || (e2.uniform1iv(this.addr, a2), Ri2(i2, a2));
    for (let e3 = 0; e3 !== r2; ++e3) n2.setTextureCube(t2[e3] || gi2, a2[e3]);
  }
  function dr2(e2, t2, n2) {
    const i2 = this.cache, r2 = t2.length, a2 = bi2(n2, r2);
    Ai2(i2, a2) || (e2.uniform1iv(this.addr, a2), Ri2(i2, a2));
    for (let e3 = 0; e3 !== r2; ++e3) n2.setTexture2DArray(t2[e3] || hi2, a2[e3]);
  }
  var ur2 = class {
    constructor(e2, t2, n2) {
      this.id = e2, this.addr = n2, this.cache = [], this.type = t2.type, this.setValue = (function(e3) {
        switch (e3) {
          case 5126:
            return Ci2;
          case 35664:
            return Li2;
          case 35665:
            return Pi2;
          case 35666:
            return Ui2;
          case 35674:
            return Di;
          case 35675:
            return wi2;
          case 35676:
            return yi2;
          case 5124:
          case 35670:
            return Ii2;
          case 35667:
          case 35671:
            return Ni2;
          case 35668:
          case 35672:
            return Oi2;
          case 35669:
          case 35673:
            return Fi2;
          case 5125:
            return Bi2;
          case 36294:
            return Gi2;
          case 36295:
            return Hi2;
          case 36296:
            return Vi2;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return zi2;
          case 35679:
          case 36299:
          case 36307:
            return ki2;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return Wi2;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return Xi2;
        }
      })(t2.type);
    }
  };
  var fr2 = class {
    constructor(e2, t2, n2) {
      this.id = e2, this.addr = n2, this.cache = [], this.type = t2.type, this.size = t2.size, this.setValue = (function(e3) {
        switch (e3) {
          case 5126:
            return Yi2;
          case 35664:
            return Ki2;
          case 35665:
            return qi2;
          case 35666:
            return ji;
          case 35674:
            return Zi2;
          case 35675:
            return $i2;
          case 35676:
            return Qi2;
          case 5124:
          case 35670:
            return Ji2;
          case 35667:
          case 35671:
            return er2;
          case 35668:
          case 35672:
            return tr2;
          case 35669:
          case 35673:
            return nr2;
          case 5125:
            return ir2;
          case 36294:
            return rr2;
          case 36295:
            return ar2;
          case 36296:
            return or2;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return sr2;
          case 35679:
          case 36299:
          case 36307:
            return lr2;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return cr2;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return dr2;
        }
      })(t2.type);
    }
  };
  var pr2 = class {
    constructor(e2) {
      this.id = e2, this.seq = [], this.map = {};
    }
    setValue(e2, t2, n2) {
      const i2 = this.seq;
      for (let r2 = 0, a2 = i2.length; r2 !== a2; ++r2) {
        const a3 = i2[r2];
        a3.setValue(e2, t2[a3.id], n2);
      }
    }
  };
  var mr2 = /(\w+)(\])?(\[|\.)?/g;
  function hr2(e2, t2) {
    e2.seq.push(t2), e2.map[t2.id] = t2;
  }
  function _r2(e2, t2, n2) {
    const i2 = e2.name, r2 = i2.length;
    for (mr2.lastIndex = 0; ; ) {
      const a2 = mr2.exec(i2), o2 = mr2.lastIndex;
      let s2 = a2[1];
      const l2 = "]" === a2[2], c2 = a2[3];
      if (l2 && (s2 |= 0), void 0 === c2 || "[" === c2 && o2 + 2 === r2) {
        hr2(n2, void 0 === c2 ? new ur2(s2, e2, t2) : new fr2(s2, e2, t2));
        break;
      }
      {
        let e3 = n2.map[s2];
        void 0 === e3 && (e3 = new pr2(s2), hr2(n2, e3)), n2 = e3;
      }
    }
  }
  var gr2 = class {
    constructor(e2, t2) {
      this.seq = [], this.map = {};
      const n2 = e2.getProgramParameter(t2, e2.ACTIVE_UNIFORMS);
      for (let i2 = 0; i2 < n2; ++i2) {
        const n3 = e2.getActiveUniform(t2, i2);
        _r2(n3, e2.getUniformLocation(t2, n3.name), this);
      }
    }
    setValue(e2, t2, n2, i2) {
      const r2 = this.map[t2];
      void 0 !== r2 && r2.setValue(e2, n2, i2);
    }
    setOptional(e2, t2, n2) {
      const i2 = t2[n2];
      void 0 !== i2 && this.setValue(e2, n2, i2);
    }
    static upload(e2, t2, n2, i2) {
      for (let r2 = 0, a2 = t2.length; r2 !== a2; ++r2) {
        const a3 = t2[r2], o2 = n2[a3.id];
        false !== o2.needsUpdate && a3.setValue(e2, o2.value, i2);
      }
    }
    static seqWithValue(e2, t2) {
      const n2 = [];
      for (let i2 = 0, r2 = e2.length; i2 !== r2; ++i2) {
        const r3 = e2[i2];
        r3.id in t2 && n2.push(r3);
      }
      return n2;
    }
  };
  function vr2(e2, t2, n2) {
    const i2 = e2.createShader(t2);
    return e2.shaderSource(i2, n2), e2.compileShader(i2), i2;
  }
  var Er2 = 0;
  var Sr2 = new gs();
  function Tr2(e2, t2, n2) {
    const i2 = e2.getShaderParameter(t2, e2.COMPILE_STATUS), r2 = (e2.getShaderInfoLog(t2) || "").trim();
    if (i2 && "" === r2) return "";
    const a2 = /ERROR: 0:(\d+)/.exec(r2);
    if (a2) {
      const i3 = parseInt(a2[1]);
      return n2.toUpperCase() + "\n\n" + r2 + "\n\n" + (function(e3, t3) {
        const n3 = e3.split("\n"), i4 = [], r3 = Math.max(t3 - 6, 0), a3 = Math.min(t3 + 6, n3.length);
        for (let e4 = r3; e4 < a3; e4++) {
          const r4 = e4 + 1;
          i4.push(`${r4 === t3 ? ">" : " "} ${r4}: ${n3[e4]}`);
        }
        return i4.join("\n");
      })(e2.getShaderSource(t2), i3);
    }
    return r2;
  }
  function Mr2(e2, t2) {
    const n2 = (function(e3) {
      ws._getMatrix(Sr2, ws.workingColorSpace, e3);
      const t3 = `mat3( ${Sr2.elements.map((e4) => e4.toFixed(4))} )`;
      switch (ws.getTransfer(e3)) {
        case $e:
          return [t3, "LinearTransferOETF"];
        case Qe:
          return [t3, "sRGBTransferOETF"];
        default:
          return Hi("WebGLProgram: Unsupported color space: ", e3), [t3, "LinearTransferOETF"];
      }
    })(t2);
    return [`vec4 ${e2}( vec4 value ) {`, `	return ${n2[1]}( vec4( value.rgb * ${n2[0]}, value.a ) );`, "}"].join("\n");
  }
  function xr2(e2, t2) {
    let n2;
    switch (t2) {
      case Q:
        n2 = "Linear";
        break;
      case K:
        n2 = "Reinhard";
        break;
      case tt:
        n2 = "Cineon";
        break;
      case et:
        n2 = "ACESFilmic";
        break;
      case st:
        n2 = "AgX";
        break;
      case rt:
        n2 = "Neutral";
        break;
      case it:
        n2 = "Custom";
        break;
      default:
        Hi("WebGLProgram: Unsupported toneMapping:", t2), n2 = "Linear";
    }
    return "vec3 " + e2 + "( vec3 color ) { return " + n2 + "ToneMapping( color ); }";
  }
  var Ar2 = new ps();
  function Rr2() {
    ws.getLuminanceCoefficients(Ar2);
    return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${Ar2.x.toFixed(4)}, ${Ar2.y.toFixed(4)}, ${Ar2.z.toFixed(4)} );`, "	return dot( weights, rgb );", "}"].join("\n");
  }
  function br2(e2) {
    return "" !== e2;
  }
  function Cr2(e2, t2) {
    const n2 = t2.numSpotLightShadows + t2.numSpotLightMaps - t2.numSpotLightShadowsWithMaps;
    return e2.replace(/NUM_DIR_LIGHTS/g, t2.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t2.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t2.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n2).replace(/NUM_RECT_AREA_LIGHTS/g, t2.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t2.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t2.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t2.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t2.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t2.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t2.numPointLightShadows);
  }
  function Lr2(e2, t2) {
    return e2.replace(/NUM_CLIPPING_PLANES/g, t2.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t2.numClippingPlanes - t2.numClipIntersection);
  }
  var Pr2 = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function Ur2(e2) {
    return e2.replace(Pr2, wr2);
  }
  var Dr2 = /* @__PURE__ */ new Map();
  function wr2(e2, t2) {
    let n2 = yn2[t2];
    if (void 0 === n2) {
      const e3 = Dr2.get(t2);
      if (void 0 === e3) throw new Error("Can not resolve #include <" + t2 + ">");
      n2 = yn2[e3], Hi('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t2, e3);
    }
    return Ur2(n2);
  }
  var yr2 = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
  function Ir2(e2) {
    return e2.replace(yr2, Nr2);
  }
  function Nr2(e2, t2, n2, i2) {
    let r2 = "";
    for (let e3 = parseInt(t2); e3 < parseInt(n2); e3++) r2 += i2.replace(/\[\s*i\s*\]/g, "[ " + e3 + " ]").replace(/UNROLLED_LOOP_INDEX/g, e3);
    return r2;
  }
  function Or2(e2) {
    let t2 = `precision ${e2.precision} float;
	precision ${e2.precision} int;
	precision ${e2.precision} sampler2D;
	precision ${e2.precision} samplerCube;
	precision ${e2.precision} sampler3D;
	precision ${e2.precision} sampler2DArray;
	precision ${e2.precision} sampler2DShadow;
	precision ${e2.precision} samplerCubeShadow;
	precision ${e2.precision} sampler2DArrayShadow;
	precision ${e2.precision} isampler2D;
	precision ${e2.precision} isampler3D;
	precision ${e2.precision} isamplerCube;
	precision ${e2.precision} isampler2DArray;
	precision ${e2.precision} usampler2D;
	precision ${e2.precision} usampler3D;
	precision ${e2.precision} usamplerCube;
	precision ${e2.precision} usampler2DArray;
	`;
    return "highp" === e2.precision ? t2 += "\n#define HIGH_PRECISION" : "mediump" === e2.precision ? t2 += "\n#define MEDIUM_PRECISION" : "lowp" === e2.precision && (t2 += "\n#define LOW_PRECISION"), t2;
  }
  function Fr2(e2, t2, n2, i2) {
    const r2 = e2.getContext(), o2 = n2.defines;
    let s2 = n2.vertexShader, l2 = n2.fragmentShader;
    const c2 = (function(e3) {
      let t3 = "SHADOWMAP_TYPE_BASIC";
      return e3.shadowMapType === h ? t3 = "SHADOWMAP_TYPE_PCF" : e3.shadowMapType === l ? t3 = "SHADOWMAP_TYPE_PCF_SOFT" : e3.shadowMapType === c && (t3 = "SHADOWMAP_TYPE_VSM"), t3;
    })(n2), d2 = (function(e3) {
      let t3 = "ENVMAP_TYPE_CUBE";
      if (e3.envMap) switch (e3.envMapMode) {
        case ht:
        case lt:
          t3 = "ENVMAP_TYPE_CUBE";
          break;
        case dt:
          t3 = "ENVMAP_TYPE_CUBE_UV";
      }
      return t3;
    })(n2), u2 = (function(e3) {
      let t3 = "ENVMAP_MODE_REFLECTION";
      e3.envMap && e3.envMapMode === lt && (t3 = "ENVMAP_MODE_REFRACTION");
      return t3;
    })(n2), f2 = (function(e3) {
      let t3 = "ENVMAP_BLENDING_NONE";
      if (e3.envMap) switch (e3.combine) {
        case Z:
          t3 = "ENVMAP_BLENDING_MULTIPLY";
          break;
        case H:
          t3 = "ENVMAP_BLENDING_MIX";
          break;
        case G:
          t3 = "ENVMAP_BLENDING_ADD";
      }
      return t3;
    })(n2), p2 = (function(e3) {
      const t3 = e3.envMapCubeUVHeight;
      if (null === t3) return null;
      const n3 = Math.log2(t3) - 2, i3 = 1 / t3;
      return { texelWidth: 1 / (3 * Math.max(Math.pow(2, n3), 112)), texelHeight: i3, maxMip: n3 };
    })(n2), m2 = (function(e3) {
      return [e3.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", e3.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(br2).join("\n");
    })(n2), h2 = (function(e3) {
      const t3 = [];
      for (const n3 in e3) {
        const i3 = e3[n3];
        false !== i3 && t3.push("#define " + n3 + " " + i3);
      }
      return t3.join("\n");
    })(o2), _2 = r2.createProgram();
    let g2, v2, S2 = n2.glslVersion ? "#version " + n2.glslVersion + "\n" : "";
    n2.isRawShaderMaterial ? (g2 = ["#define SHADER_TYPE " + n2.shaderType, "#define SHADER_NAME " + n2.shaderName, h2].filter(br2).join("\n"), g2.length > 0 && (g2 += "\n"), v2 = ["#define SHADER_TYPE " + n2.shaderType, "#define SHADER_NAME " + n2.shaderName, h2].filter(br2).join("\n"), v2.length > 0 && (v2 += "\n")) : (g2 = [Or2(n2), "#define SHADER_TYPE " + n2.shaderType, "#define SHADER_NAME " + n2.shaderName, h2, n2.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", n2.batching ? "#define USE_BATCHING" : "", n2.batchingColor ? "#define USE_BATCHING_COLOR" : "", n2.instancing ? "#define USE_INSTANCING" : "", n2.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n2.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", n2.useFog && n2.fog ? "#define USE_FOG" : "", n2.useFog && n2.fogExp2 ? "#define FOG_EXP2" : "", n2.map ? "#define USE_MAP" : "", n2.envMap ? "#define USE_ENVMAP" : "", n2.envMap ? "#define " + u2 : "", n2.lightMap ? "#define USE_LIGHTMAP" : "", n2.aoMap ? "#define USE_AOMAP" : "", n2.bumpMap ? "#define USE_BUMPMAP" : "", n2.normalMap ? "#define USE_NORMALMAP" : "", n2.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n2.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n2.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", n2.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n2.anisotropy ? "#define USE_ANISOTROPY" : "", n2.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", n2.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n2.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n2.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n2.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n2.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n2.specularMap ? "#define USE_SPECULARMAP" : "", n2.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n2.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n2.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n2.metalnessMap ? "#define USE_METALNESSMAP" : "", n2.alphaMap ? "#define USE_ALPHAMAP" : "", n2.alphaHash ? "#define USE_ALPHAHASH" : "", n2.transmission ? "#define USE_TRANSMISSION" : "", n2.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n2.thicknessMap ? "#define USE_THICKNESSMAP" : "", n2.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n2.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n2.mapUv ? "#define MAP_UV " + n2.mapUv : "", n2.alphaMapUv ? "#define ALPHAMAP_UV " + n2.alphaMapUv : "", n2.lightMapUv ? "#define LIGHTMAP_UV " + n2.lightMapUv : "", n2.aoMapUv ? "#define AOMAP_UV " + n2.aoMapUv : "", n2.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n2.emissiveMapUv : "", n2.bumpMapUv ? "#define BUMPMAP_UV " + n2.bumpMapUv : "", n2.normalMapUv ? "#define NORMALMAP_UV " + n2.normalMapUv : "", n2.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n2.displacementMapUv : "", n2.metalnessMapUv ? "#define METALNESSMAP_UV " + n2.metalnessMapUv : "", n2.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n2.roughnessMapUv : "", n2.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + n2.anisotropyMapUv : "", n2.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n2.clearcoatMapUv : "", n2.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n2.clearcoatNormalMapUv : "", n2.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n2.clearcoatRoughnessMapUv : "", n2.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n2.iridescenceMapUv : "", n2.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n2.iridescenceThicknessMapUv : "", n2.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n2.sheenColorMapUv : "", n2.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n2.sheenRoughnessMapUv : "", n2.specularMapUv ? "#define SPECULARMAP_UV " + n2.specularMapUv : "", n2.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n2.specularColorMapUv : "", n2.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n2.specularIntensityMapUv : "", n2.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n2.transmissionMapUv : "", n2.thicknessMapUv ? "#define THICKNESSMAP_UV " + n2.thicknessMapUv : "", n2.vertexTangents && false === n2.flatShading ? "#define USE_TANGENT" : "", n2.vertexColors ? "#define USE_COLOR" : "", n2.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n2.vertexUv1s ? "#define USE_UV1" : "", n2.vertexUv2s ? "#define USE_UV2" : "", n2.vertexUv3s ? "#define USE_UV3" : "", n2.pointsUvs ? "#define USE_POINTS_UV" : "", n2.flatShading ? "#define FLAT_SHADED" : "", n2.skinning ? "#define USE_SKINNING" : "", n2.morphTargets ? "#define USE_MORPHTARGETS" : "", n2.morphNormals && false === n2.flatShading ? "#define USE_MORPHNORMALS" : "", n2.morphColors ? "#define USE_MORPHCOLORS" : "", n2.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n2.morphTextureStride : "", n2.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + n2.morphTargetsCount : "", n2.doubleSided ? "#define DOUBLE_SIDED" : "", n2.flipSided ? "#define FLIP_SIDED" : "", n2.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n2.shadowMapEnabled ? "#define " + c2 : "", n2.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n2.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", n2.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", n2.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", "\n"].filter(br2).join("\n"), v2 = [Or2(n2), "#define SHADER_TYPE " + n2.shaderType, "#define SHADER_NAME " + n2.shaderName, h2, n2.useFog && n2.fog ? "#define USE_FOG" : "", n2.useFog && n2.fogExp2 ? "#define FOG_EXP2" : "", n2.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", n2.map ? "#define USE_MAP" : "", n2.matcap ? "#define USE_MATCAP" : "", n2.envMap ? "#define USE_ENVMAP" : "", n2.envMap ? "#define " + d2 : "", n2.envMap ? "#define " + u2 : "", n2.envMap ? "#define " + f2 : "", p2 ? "#define CUBEUV_TEXEL_WIDTH " + p2.texelWidth : "", p2 ? "#define CUBEUV_TEXEL_HEIGHT " + p2.texelHeight : "", p2 ? "#define CUBEUV_MAX_MIP " + p2.maxMip + ".0" : "", n2.lightMap ? "#define USE_LIGHTMAP" : "", n2.aoMap ? "#define USE_AOMAP" : "", n2.bumpMap ? "#define USE_BUMPMAP" : "", n2.normalMap ? "#define USE_NORMALMAP" : "", n2.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n2.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n2.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n2.anisotropy ? "#define USE_ANISOTROPY" : "", n2.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", n2.clearcoat ? "#define USE_CLEARCOAT" : "", n2.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n2.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n2.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n2.dispersion ? "#define USE_DISPERSION" : "", n2.iridescence ? "#define USE_IRIDESCENCE" : "", n2.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n2.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n2.specularMap ? "#define USE_SPECULARMAP" : "", n2.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n2.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n2.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n2.metalnessMap ? "#define USE_METALNESSMAP" : "", n2.alphaMap ? "#define USE_ALPHAMAP" : "", n2.alphaTest ? "#define USE_ALPHATEST" : "", n2.alphaHash ? "#define USE_ALPHAHASH" : "", n2.sheen ? "#define USE_SHEEN" : "", n2.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n2.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n2.transmission ? "#define USE_TRANSMISSION" : "", n2.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n2.thicknessMap ? "#define USE_THICKNESSMAP" : "", n2.vertexTangents && false === n2.flatShading ? "#define USE_TANGENT" : "", n2.vertexColors || n2.instancingColor || n2.batchingColor ? "#define USE_COLOR" : "", n2.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n2.vertexUv1s ? "#define USE_UV1" : "", n2.vertexUv2s ? "#define USE_UV2" : "", n2.vertexUv3s ? "#define USE_UV3" : "", n2.pointsUvs ? "#define USE_POINTS_UV" : "", n2.gradientMap ? "#define USE_GRADIENTMAP" : "", n2.flatShading ? "#define FLAT_SHADED" : "", n2.doubleSided ? "#define DOUBLE_SIDED" : "", n2.flipSided ? "#define FLIP_SIDED" : "", n2.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n2.shadowMapEnabled ? "#define " + c2 : "", n2.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n2.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", n2.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", n2.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", n2.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", n2.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", n2.toneMapping !== $ ? "#define TONE_MAPPING" : "", n2.toneMapping !== $ ? yn2.tonemapping_pars_fragment : "", n2.toneMapping !== $ ? xr2("toneMapping", n2.toneMapping) : "", n2.dithering ? "#define DITHERING" : "", n2.opaque ? "#define OPAQUE" : "", yn2.colorspace_pars_fragment, Mr2("linearToOutputTexel", n2.outputColorSpace), Rr2(), n2.useDepthPacking ? "#define DEPTH_PACKING " + n2.depthPacking : "", "\n"].filter(br2).join("\n")), s2 = Ur2(s2), s2 = Cr2(s2, n2), s2 = Lr2(s2, n2), l2 = Ur2(l2), l2 = Cr2(l2, n2), l2 = Lr2(l2, n2), s2 = Ir2(s2), l2 = Ir2(l2), true !== n2.isRawShaderMaterial && (S2 = "#version 300 es\n", g2 = [m2, "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + g2, v2 = ["#define varying in", n2.glslVersion === Oi ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", n2.glslVersion === Oi ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + v2);
    const T2 = S2 + g2 + s2, M2 = S2 + v2 + l2, x2 = vr2(r2, r2.VERTEX_SHADER, T2), A2 = vr2(r2, r2.FRAGMENT_SHADER, M2);
    function R2(t3) {
      if (e2.debug.checkShaderErrors) {
        const n3 = r2.getProgramInfoLog(_2) || "", i3 = r2.getShaderInfoLog(x2) || "", a2 = r2.getShaderInfoLog(A2) || "", o3 = n3.trim(), s3 = i3.trim(), l3 = a2.trim();
        let c3 = true, d3 = true;
        if (false === r2.getProgramParameter(_2, r2.LINK_STATUS)) if (c3 = false, "function" == typeof e2.debug.onShaderError) e2.debug.onShaderError(r2, _2, x2, A2);
        else {
          const e3 = Tr2(r2, x2, "vertex"), n4 = Tr2(r2, A2, "fragment");
          Gi("THREE.WebGLProgram: Shader Error " + r2.getError() + " - VALIDATE_STATUS " + r2.getProgramParameter(_2, r2.VALIDATE_STATUS) + "\n\nMaterial Name: " + t3.name + "\nMaterial Type: " + t3.type + "\n\nProgram Info Log: " + o3 + "\n" + e3 + "\n" + n4);
        }
        else "" !== o3 ? Hi("WebGLProgram: Program Info Log:", o3) : "" !== s3 && "" !== l3 || (d3 = false);
        d3 && (t3.diagnostics = { runnable: c3, programLog: o3, vertexShader: { log: s3, prefix: g2 }, fragmentShader: { log: l3, prefix: v2 } });
      }
      r2.deleteShader(x2), r2.deleteShader(A2), b2 = new gr2(r2, _2), C2 = (function(e3, t4) {
        const n3 = {}, i3 = e3.getProgramParameter(t4, e3.ACTIVE_ATTRIBUTES);
        for (let r3 = 0; r3 < i3; r3++) {
          const i4 = e3.getActiveAttrib(t4, r3), a2 = i4.name;
          let o3 = 1;
          i4.type === e3.FLOAT_MAT2 && (o3 = 2), i4.type === e3.FLOAT_MAT3 && (o3 = 3), i4.type === e3.FLOAT_MAT4 && (o3 = 4), n3[a2] = { type: i4.type, location: e3.getAttribLocation(t4, a2), locationSize: o3 };
        }
        return n3;
      })(r2, _2);
    }
    let b2, C2;
    r2.attachShader(_2, x2), r2.attachShader(_2, A2), void 0 !== n2.index0AttributeName ? r2.bindAttribLocation(_2, 0, n2.index0AttributeName) : true === n2.morphTargets && r2.bindAttribLocation(_2, 0, "position"), r2.linkProgram(_2), this.getUniforms = function() {
      return void 0 === b2 && R2(this), b2;
    }, this.getAttributes = function() {
      return void 0 === C2 && R2(this), C2;
    };
    let U2 = false === n2.rendererExtensionParallelShaderCompile;
    return this.isReady = function() {
      return false === U2 && (U2 = r2.getProgramParameter(_2, 37297)), U2;
    }, this.destroy = function() {
      i2.releaseStatesOfProgram(this), r2.deleteProgram(_2), this.program = void 0;
    }, this.type = n2.shaderType, this.name = n2.shaderName, this.id = Er2++, this.cacheKey = t2, this.usedTimes = 1, this.program = _2, this.vertexShader = x2, this.fragmentShader = A2, this;
  }
  var Br2 = 0;
  var Gr2 = class {
    constructor() {
      this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
    }
    update(e2) {
      const t2 = e2.vertexShader, n2 = e2.fragmentShader, i2 = this._getShaderStage(t2), r2 = this._getShaderStage(n2), a2 = this._getShaderCacheForMaterial(e2);
      return false === a2.has(i2) && (a2.add(i2), i2.usedTimes++), false === a2.has(r2) && (a2.add(r2), r2.usedTimes++), this;
    }
    remove(e2) {
      const t2 = this.materialCache.get(e2);
      for (const e3 of t2) e3.usedTimes--, 0 === e3.usedTimes && this.shaderCache.delete(e3.code);
      return this.materialCache.delete(e2), this;
    }
    getVertexShaderID(e2) {
      return this._getShaderStage(e2.vertexShader).id;
    }
    getFragmentShaderID(e2) {
      return this._getShaderStage(e2.fragmentShader).id;
    }
    dispose() {
      this.shaderCache.clear(), this.materialCache.clear();
    }
    _getShaderCacheForMaterial(e2) {
      const t2 = this.materialCache;
      let n2 = t2.get(e2);
      return void 0 === n2 && (n2 = /* @__PURE__ */ new Set(), t2.set(e2, n2)), n2;
    }
    _getShaderStage(e2) {
      const t2 = this.shaderCache;
      let n2 = t2.get(e2);
      return void 0 === n2 && (n2 = new Hr2(e2), t2.set(e2, n2)), n2;
    }
  };
  var Hr2 = class {
    constructor(e2) {
      this.id = Br2++, this.code = e2, this.usedTimes = 0;
    }
  };
  function Vr2(e2, t2, n2, i2, r2, o2, s2) {
    const l2 = new Sr(), d2 = new Gr2(), u2 = /* @__PURE__ */ new Set(), f2 = [], h2 = r2.logarithmicDepthBuffer, _2 = r2.vertexTextures;
    let g2 = r2.precision;
    const v2 = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
    function S2(e3) {
      return u2.add(e3), 0 === e3 ? "uv" : `uv${e3}`;
    }
    return { getParameters: function(o3, l3, f3, T2, M2) {
      const x2 = T2.fog, A2 = M2.geometry, R2 = o3.isMeshStandardMaterial ? T2.environment : null, b2 = (o3.isMeshStandardMaterial ? n2 : t2).get(o3.envMap || R2), C2 = b2 && b2.mapping === dt ? b2.image.height : null, L2 = v2[o3.type];
      null !== o3.precision && (g2 = r2.getMaxPrecision(o3.precision), g2 !== o3.precision && Hi("WebGLProgram.getParameters:", o3.precision, "not supported, using", g2, "instead."));
      const P2 = A2.morphAttributes.position || A2.morphAttributes.normal || A2.morphAttributes.color, U2 = void 0 !== P2 ? P2.length : 0;
      let D2, w2, I2, N2, O2 = 0;
      if (void 0 !== A2.morphAttributes.position && (O2 = 1), void 0 !== A2.morphAttributes.normal && (O2 = 2), void 0 !== A2.morphAttributes.color && (O2 = 3), L2) {
        const e3 = Nn2[L2];
        D2 = e3.vertexShader, w2 = e3.fragmentShader;
      } else D2 = o3.vertexShader, w2 = o3.fragmentShader, d2.update(o3), I2 = d2.getVertexShaderID(o3), N2 = d2.getFragmentShaderID(o3);
      const F2 = e2.getRenderTarget(), B2 = e2.state.buffers.depth.getReversed(), H2 = true === M2.isInstancedMesh, V2 = true === M2.isBatchedMesh, z2 = !!o3.map, k2 = !!o3.matcap, W2 = !!b2, X2 = !!o3.aoMap, Y2 = !!o3.lightMap, K2 = !!o3.bumpMap, q2 = !!o3.normalMap, j2 = !!o3.displacementMap, Z2 = !!o3.emissiveMap, $2 = !!o3.metalnessMap, Q2 = !!o3.roughnessMap, J2 = o3.anisotropy > 0, ee2 = o3.clearcoat > 0, te2 = o3.dispersion > 0, ne2 = o3.iridescence > 0, ie2 = o3.sheen > 0, re2 = o3.transmission > 0, ae2 = J2 && !!o3.anisotropyMap, oe2 = ee2 && !!o3.clearcoatMap, se2 = ee2 && !!o3.clearcoatNormalMap, le2 = ee2 && !!o3.clearcoatRoughnessMap, ce2 = ne2 && !!o3.iridescenceMap, de2 = ne2 && !!o3.iridescenceThicknessMap, ue2 = ie2 && !!o3.sheenColorMap, fe2 = ie2 && !!o3.sheenRoughnessMap, pe2 = !!o3.specularMap, ve2 = !!o3.specularColorMap, Ee2 = !!o3.specularIntensityMap, Se2 = re2 && !!o3.transmissionMap, Te2 = re2 && !!o3.thicknessMap, Me2 = !!o3.gradientMap, xe2 = !!o3.alphaMap, Ae2 = o3.alphaTest > 0, Re2 = !!o3.alphaHash, be2 = !!o3.extensions;
      let Ce2 = $;
      o3.toneMapped && (null !== F2 && true !== F2.isXRRenderTarget || (Ce2 = e2.toneMapping));
      const Le2 = { shaderID: L2, shaderType: o3.type, shaderName: o3.name, vertexShader: D2, fragmentShader: w2, defines: o3.defines, customVertexShaderID: I2, customFragmentShaderID: N2, isRawShaderMaterial: true === o3.isRawShaderMaterial, glslVersion: o3.glslVersion, precision: g2, batching: V2, batchingColor: V2 && null !== M2._colorsTexture, instancing: H2, instancingColor: H2 && null !== M2.instanceColor, instancingMorph: H2 && null !== M2.morphTexture, supportsVertexTextures: _2, outputColorSpace: null === F2 ? e2.outputColorSpace : true === F2.isXRRenderTarget ? F2.texture.colorSpace : Ge, alphaToCoverage: !!o3.alphaToCoverage, map: z2, matcap: k2, envMap: W2, envMapMode: W2 && b2.mapping, envMapCubeUVHeight: C2, aoMap: X2, lightMap: Y2, bumpMap: K2, normalMap: q2, displacementMap: _2 && j2, emissiveMap: Z2, normalMapObjectSpace: q2 && o3.normalMapType === Ye, normalMapTangentSpace: q2 && o3.normalMapType === Xe, metalnessMap: $2, roughnessMap: Q2, anisotropy: J2, anisotropyMap: ae2, clearcoat: ee2, clearcoatMap: oe2, clearcoatNormalMap: se2, clearcoatRoughnessMap: le2, dispersion: te2, iridescence: ne2, iridescenceMap: ce2, iridescenceThicknessMap: de2, sheen: ie2, sheenColorMap: ue2, sheenRoughnessMap: fe2, specularMap: pe2, specularColorMap: ve2, specularIntensityMap: Ee2, transmission: re2, transmissionMap: Se2, thicknessMap: Te2, gradientMap: Me2, opaque: false === o3.transparent && o3.blending === y && false === o3.alphaToCoverage, alphaMap: xe2, alphaTest: Ae2, alphaHash: Re2, combine: o3.combine, mapUv: z2 && S2(o3.map.channel), aoMapUv: X2 && S2(o3.aoMap.channel), lightMapUv: Y2 && S2(o3.lightMap.channel), bumpMapUv: K2 && S2(o3.bumpMap.channel), normalMapUv: q2 && S2(o3.normalMap.channel), displacementMapUv: j2 && S2(o3.displacementMap.channel), emissiveMapUv: Z2 && S2(o3.emissiveMap.channel), metalnessMapUv: $2 && S2(o3.metalnessMap.channel), roughnessMapUv: Q2 && S2(o3.roughnessMap.channel), anisotropyMapUv: ae2 && S2(o3.anisotropyMap.channel), clearcoatMapUv: oe2 && S2(o3.clearcoatMap.channel), clearcoatNormalMapUv: se2 && S2(o3.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: le2 && S2(o3.clearcoatRoughnessMap.channel), iridescenceMapUv: ce2 && S2(o3.iridescenceMap.channel), iridescenceThicknessMapUv: de2 && S2(o3.iridescenceThicknessMap.channel), sheenColorMapUv: ue2 && S2(o3.sheenColorMap.channel), sheenRoughnessMapUv: fe2 && S2(o3.sheenRoughnessMap.channel), specularMapUv: pe2 && S2(o3.specularMap.channel), specularColorMapUv: ve2 && S2(o3.specularColorMap.channel), specularIntensityMapUv: Ee2 && S2(o3.specularIntensityMap.channel), transmissionMapUv: Se2 && S2(o3.transmissionMap.channel), thicknessMapUv: Te2 && S2(o3.thicknessMap.channel), alphaMapUv: xe2 && S2(o3.alphaMap.channel), vertexTangents: !!A2.attributes.tangent && (q2 || J2), vertexColors: o3.vertexColors, vertexAlphas: true === o3.vertexColors && !!A2.attributes.color && 4 === A2.attributes.color.itemSize, pointsUvs: true === M2.isPoints && !!A2.attributes.uv && (z2 || xe2), fog: !!x2, useFog: true === o3.fog, fogExp2: !!x2 && x2.isFogExp2, flatShading: true === o3.flatShading && false === o3.wireframe, sizeAttenuation: true === o3.sizeAttenuation, logarithmicDepthBuffer: h2, reversedDepthBuffer: B2, skinning: true === M2.isSkinnedMesh, morphTargets: void 0 !== A2.morphAttributes.position, morphNormals: void 0 !== A2.morphAttributes.normal, morphColors: void 0 !== A2.morphAttributes.color, morphTargetsCount: U2, morphTextureStride: O2, numDirLights: l3.directional.length, numPointLights: l3.point.length, numSpotLights: l3.spot.length, numSpotLightMaps: l3.spotLightMap.length, numRectAreaLights: l3.rectArea.length, numHemiLights: l3.hemi.length, numDirLightShadows: l3.directionalShadowMap.length, numPointLightShadows: l3.pointShadowMap.length, numSpotLightShadows: l3.spotShadowMap.length, numSpotLightShadowsWithMaps: l3.numSpotLightShadowsWithMaps, numLightProbes: l3.numLightProbes, numClippingPlanes: s2.numPlanes, numClipIntersection: s2.numIntersection, dithering: o3.dithering, shadowMapEnabled: e2.shadowMap.enabled && f3.length > 0, shadowMapType: e2.shadowMap.type, toneMapping: Ce2, decodeVideoTexture: z2 && true === o3.map.isVideoTexture && ws.getTransfer(o3.map.colorSpace) === Qe, decodeVideoTextureEmissive: Z2 && true === o3.emissiveMap.isVideoTexture && ws.getTransfer(o3.emissiveMap.colorSpace) === Qe, premultipliedAlpha: o3.premultipliedAlpha, doubleSided: o3.side === p, flipSided: o3.side === d, useDepthPacking: o3.depthPacking >= 0, depthPacking: o3.depthPacking || 0, index0AttributeName: o3.index0AttributeName, extensionClipCullDistance: be2 && true === o3.extensions.clipCullDistance && i2.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (be2 && true === o3.extensions.multiDraw || V2) && i2.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: i2.has("KHR_parallel_shader_compile"), customProgramCacheKey: o3.customProgramCacheKey() };
      return Le2.vertexUv1s = u2.has(1), Le2.vertexUv2s = u2.has(2), Le2.vertexUv3s = u2.has(3), u2.clear(), Le2;
    }, getProgramCacheKey: function(t3) {
      const n3 = [];
      if (t3.shaderID ? n3.push(t3.shaderID) : (n3.push(t3.customVertexShaderID), n3.push(t3.customFragmentShaderID)), void 0 !== t3.defines) for (const e3 in t3.defines) n3.push(e3), n3.push(t3.defines[e3]);
      return false === t3.isRawShaderMaterial && (!(function(e3, t4) {
        e3.push(t4.precision), e3.push(t4.outputColorSpace), e3.push(t4.envMapMode), e3.push(t4.envMapCubeUVHeight), e3.push(t4.mapUv), e3.push(t4.alphaMapUv), e3.push(t4.lightMapUv), e3.push(t4.aoMapUv), e3.push(t4.bumpMapUv), e3.push(t4.normalMapUv), e3.push(t4.displacementMapUv), e3.push(t4.emissiveMapUv), e3.push(t4.metalnessMapUv), e3.push(t4.roughnessMapUv), e3.push(t4.anisotropyMapUv), e3.push(t4.clearcoatMapUv), e3.push(t4.clearcoatNormalMapUv), e3.push(t4.clearcoatRoughnessMapUv), e3.push(t4.iridescenceMapUv), e3.push(t4.iridescenceThicknessMapUv), e3.push(t4.sheenColorMapUv), e3.push(t4.sheenRoughnessMapUv), e3.push(t4.specularMapUv), e3.push(t4.specularColorMapUv), e3.push(t4.specularIntensityMapUv), e3.push(t4.transmissionMapUv), e3.push(t4.thicknessMapUv), e3.push(t4.combine), e3.push(t4.fogExp2), e3.push(t4.sizeAttenuation), e3.push(t4.morphTargetsCount), e3.push(t4.morphAttributeCount), e3.push(t4.numDirLights), e3.push(t4.numPointLights), e3.push(t4.numSpotLights), e3.push(t4.numSpotLightMaps), e3.push(t4.numHemiLights), e3.push(t4.numRectAreaLights), e3.push(t4.numDirLightShadows), e3.push(t4.numPointLightShadows), e3.push(t4.numSpotLightShadows), e3.push(t4.numSpotLightShadowsWithMaps), e3.push(t4.numLightProbes), e3.push(t4.shadowMapType), e3.push(t4.toneMapping), e3.push(t4.numClippingPlanes), e3.push(t4.numClipIntersection), e3.push(t4.depthPacking);
      })(n3, t3), (function(e3, t4) {
        l2.disableAll(), t4.supportsVertexTextures && l2.enable(0);
        t4.instancing && l2.enable(1);
        t4.instancingColor && l2.enable(2);
        t4.instancingMorph && l2.enable(3);
        t4.matcap && l2.enable(4);
        t4.envMap && l2.enable(5);
        t4.normalMapObjectSpace && l2.enable(6);
        t4.normalMapTangentSpace && l2.enable(7);
        t4.clearcoat && l2.enable(8);
        t4.iridescence && l2.enable(9);
        t4.alphaTest && l2.enable(10);
        t4.vertexColors && l2.enable(11);
        t4.vertexAlphas && l2.enable(12);
        t4.vertexUv1s && l2.enable(13);
        t4.vertexUv2s && l2.enable(14);
        t4.vertexUv3s && l2.enable(15);
        t4.vertexTangents && l2.enable(16);
        t4.anisotropy && l2.enable(17);
        t4.alphaHash && l2.enable(18);
        t4.batching && l2.enable(19);
        t4.dispersion && l2.enable(20);
        t4.batchingColor && l2.enable(21);
        t4.gradientMap && l2.enable(22);
        e3.push(l2.mask), l2.disableAll(), t4.fog && l2.enable(0);
        t4.useFog && l2.enable(1);
        t4.flatShading && l2.enable(2);
        t4.logarithmicDepthBuffer && l2.enable(3);
        t4.reversedDepthBuffer && l2.enable(4);
        t4.skinning && l2.enable(5);
        t4.morphTargets && l2.enable(6);
        t4.morphNormals && l2.enable(7);
        t4.morphColors && l2.enable(8);
        t4.premultipliedAlpha && l2.enable(9);
        t4.shadowMapEnabled && l2.enable(10);
        t4.doubleSided && l2.enable(11);
        t4.flipSided && l2.enable(12);
        t4.useDepthPacking && l2.enable(13);
        t4.dithering && l2.enable(14);
        t4.transmission && l2.enable(15);
        t4.sheen && l2.enable(16);
        t4.opaque && l2.enable(17);
        t4.pointsUvs && l2.enable(18);
        t4.decodeVideoTexture && l2.enable(19);
        t4.decodeVideoTextureEmissive && l2.enable(20);
        t4.alphaToCoverage && l2.enable(21);
        e3.push(l2.mask);
      })(n3, t3), n3.push(e2.outputColorSpace)), n3.push(t3.customProgramCacheKey), n3.join();
    }, getUniforms: function(e3) {
      const t3 = v2[e3.type];
      let n3;
      if (t3) {
        const e4 = Nn2[t3];
        n3 = Kn.clone(e4.uniforms);
      } else n3 = e3.uniforms;
      return n3;
    }, acquireProgram: function(t3, n3) {
      let i3;
      for (let e3 = 0, t4 = f2.length; e3 < t4; e3++) {
        const t5 = f2[e3];
        if (t5.cacheKey === n3) {
          i3 = t5, ++i3.usedTimes;
          break;
        }
      }
      return void 0 === i3 && (i3 = new Fr2(e2, n3, t3, o2), f2.push(i3)), i3;
    }, releaseProgram: function(e3) {
      if (0 === --e3.usedTimes) {
        const t3 = f2.indexOf(e3);
        f2[t3] = f2[f2.length - 1], f2.pop(), e3.destroy();
      }
    }, releaseShaderCache: function(e3) {
      d2.remove(e3);
    }, programs: f2, dispose: function() {
      d2.dispose();
    } };
  }
  function zr2() {
    let e2 = /* @__PURE__ */ new WeakMap();
    return { has: function(t2) {
      return e2.has(t2);
    }, get: function(t2) {
      let n2 = e2.get(t2);
      return void 0 === n2 && (n2 = {}, e2.set(t2, n2)), n2;
    }, remove: function(t2) {
      e2.delete(t2);
    }, update: function(t2, n2, i2) {
      e2.get(t2)[n2] = i2;
    }, dispose: function() {
      e2 = /* @__PURE__ */ new WeakMap();
    } };
  }
  function kr2(e2, t2) {
    return e2.groupOrder !== t2.groupOrder ? e2.groupOrder - t2.groupOrder : e2.renderOrder !== t2.renderOrder ? e2.renderOrder - t2.renderOrder : e2.material.id !== t2.material.id ? e2.material.id - t2.material.id : e2.z !== t2.z ? e2.z - t2.z : e2.id - t2.id;
  }
  function Wr2(e2, t2) {
    return e2.groupOrder !== t2.groupOrder ? e2.groupOrder - t2.groupOrder : e2.renderOrder !== t2.renderOrder ? e2.renderOrder - t2.renderOrder : e2.z !== t2.z ? t2.z - e2.z : e2.id - t2.id;
  }
  function Xr2() {
    const e2 = [];
    let t2 = 0;
    const n2 = [], i2 = [], r2 = [];
    function a2(n3, i3, r3, a3, o2, s2) {
      let l2 = e2[t2];
      return void 0 === l2 ? (l2 = { id: n3.id, object: n3, geometry: i3, material: r3, groupOrder: a3, renderOrder: n3.renderOrder, z: o2, group: s2 }, e2[t2] = l2) : (l2.id = n3.id, l2.object = n3, l2.geometry = i3, l2.material = r3, l2.groupOrder = a3, l2.renderOrder = n3.renderOrder, l2.z = o2, l2.group = s2), t2++, l2;
    }
    return { opaque: n2, transmissive: i2, transparent: r2, init: function() {
      t2 = 0, n2.length = 0, i2.length = 0, r2.length = 0;
    }, push: function(e3, t3, o2, s2, l2, c2) {
      const d2 = a2(e3, t3, o2, s2, l2, c2);
      o2.transmission > 0 ? i2.push(d2) : true === o2.transparent ? r2.push(d2) : n2.push(d2);
    }, unshift: function(e3, t3, o2, s2, l2, c2) {
      const d2 = a2(e3, t3, o2, s2, l2, c2);
      o2.transmission > 0 ? i2.unshift(d2) : true === o2.transparent ? r2.unshift(d2) : n2.unshift(d2);
    }, finish: function() {
      for (let n3 = t2, i3 = e2.length; n3 < i3; n3++) {
        const t3 = e2[n3];
        if (null === t3.id) break;
        t3.id = null, t3.object = null, t3.geometry = null, t3.material = null, t3.group = null;
      }
    }, sort: function(e3, t3) {
      n2.length > 1 && n2.sort(e3 || kr2), i2.length > 1 && i2.sort(t3 || Wr2), r2.length > 1 && r2.sort(t3 || Wr2);
    } };
  }
  function Yr2() {
    let e2 = /* @__PURE__ */ new WeakMap();
    return { get: function(t2, n2) {
      const i2 = e2.get(t2);
      let r2;
      return void 0 === i2 ? (r2 = new Xr2(), e2.set(t2, [r2])) : n2 >= i2.length ? (r2 = new Xr2(), i2.push(r2)) : r2 = i2[n2], r2;
    }, dispose: function() {
      e2 = /* @__PURE__ */ new WeakMap();
    } };
  }
  function Kr2() {
    const e2 = {};
    return { get: function(t2) {
      if (void 0 !== e2[t2.id]) return e2[t2.id];
      let i2;
      switch (t2.type) {
        case "DirectionalLight":
          i2 = { direction: new ps(), color: new nn() };
          break;
        case "SpotLight":
          i2 = { position: new ps(), direction: new ps(), color: new nn(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
          break;
        case "PointLight":
          i2 = { position: new ps(), color: new nn(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          i2 = { direction: new ps(), skyColor: new nn(), groundColor: new nn() };
          break;
        case "RectAreaLight":
          i2 = { color: new nn(), position: new ps(), halfWidth: new ps(), halfHeight: new ps() };
      }
      return e2[t2.id] = i2, i2;
    } };
  }
  var qr2 = 0;
  function jr2(e2, t2) {
    return (t2.castShadow ? 2 : 0) - (e2.castShadow ? 2 : 0) + (t2.map ? 1 : 0) - (e2.map ? 1 : 0);
  }
  function Zr2(e2) {
    const n2 = new Kr2(), i2 = /* @__PURE__ */ (function() {
      const e3 = {};
      return { get: function(n3) {
        if (void 0 !== e3[n3.id]) return e3[n3.id];
        let i3;
        switch (n3.type) {
          case "DirectionalLight":
          case "SpotLight":
            i3 = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new us() };
            break;
          case "PointLight":
            i3 = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new us(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        }
        return e3[n3.id] = i3, i3;
      } };
    })(), a2 = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
    for (let e3 = 0; e3 < 9; e3++) a2.probe.push(new ps());
    const o2 = new ps(), s2 = new dr(), l2 = new dr();
    return { setup: function(t2) {
      let r2 = 0, o3 = 0, s3 = 0;
      for (let e3 = 0; e3 < 9; e3++) a2.probe[e3].set(0, 0, 0);
      let l3 = 0, c2 = 0, d2 = 0, u2 = 0, f2 = 0, p2 = 0, m2 = 0, h2 = 0, _2 = 0, g2 = 0, v2 = 0;
      t2.sort(jr2);
      for (let e3 = 0, E3 = t2.length; e3 < E3; e3++) {
        const E4 = t2[e3], S2 = E4.color, T2 = E4.intensity, M2 = E4.distance, x2 = E4.shadow && E4.shadow.map ? E4.shadow.map.texture : null;
        if (E4.isAmbientLight) r2 += S2.r * T2, o3 += S2.g * T2, s3 += S2.b * T2;
        else if (E4.isLightProbe) {
          for (let e4 = 0; e4 < 9; e4++) a2.probe[e4].addScaledVector(E4.sh.coefficients[e4], T2);
          v2++;
        } else if (E4.isDirectionalLight) {
          const e4 = n2.get(E4);
          if (e4.color.copy(E4.color).multiplyScalar(E4.intensity), E4.castShadow) {
            const e5 = E4.shadow, t3 = i2.get(E4);
            t3.shadowIntensity = e5.intensity, t3.shadowBias = e5.bias, t3.shadowNormalBias = e5.normalBias, t3.shadowRadius = e5.radius, t3.shadowMapSize = e5.mapSize, a2.directionalShadow[l3] = t3, a2.directionalShadowMap[l3] = x2, a2.directionalShadowMatrix[l3] = E4.shadow.matrix, p2++;
          }
          a2.directional[l3] = e4, l3++;
        } else if (E4.isSpotLight) {
          const e4 = n2.get(E4);
          e4.position.setFromMatrixPosition(E4.matrixWorld), e4.color.copy(S2).multiplyScalar(T2), e4.distance = M2, e4.coneCos = Math.cos(E4.angle), e4.penumbraCos = Math.cos(E4.angle * (1 - E4.penumbra)), e4.decay = E4.decay, a2.spot[d2] = e4;
          const t3 = E4.shadow;
          if (E4.map && (a2.spotLightMap[_2] = E4.map, _2++, t3.updateMatrices(E4), E4.castShadow && g2++), a2.spotLightMatrix[d2] = t3.matrix, E4.castShadow) {
            const e5 = i2.get(E4);
            e5.shadowIntensity = t3.intensity, e5.shadowBias = t3.bias, e5.shadowNormalBias = t3.normalBias, e5.shadowRadius = t3.radius, e5.shadowMapSize = t3.mapSize, a2.spotShadow[d2] = e5, a2.spotShadowMap[d2] = x2, h2++;
          }
          d2++;
        } else if (E4.isRectAreaLight) {
          const e4 = n2.get(E4);
          e4.color.copy(S2).multiplyScalar(T2), e4.halfWidth.set(0.5 * E4.width, 0, 0), e4.halfHeight.set(0, 0.5 * E4.height, 0), a2.rectArea[u2] = e4, u2++;
        } else if (E4.isPointLight) {
          const e4 = n2.get(E4);
          if (e4.color.copy(E4.color).multiplyScalar(E4.intensity), e4.distance = E4.distance, e4.decay = E4.decay, E4.castShadow) {
            const e5 = E4.shadow, t3 = i2.get(E4);
            t3.shadowIntensity = e5.intensity, t3.shadowBias = e5.bias, t3.shadowNormalBias = e5.normalBias, t3.shadowRadius = e5.radius, t3.shadowMapSize = e5.mapSize, t3.shadowCameraNear = e5.camera.near, t3.shadowCameraFar = e5.camera.far, a2.pointShadow[c2] = t3, a2.pointShadowMap[c2] = x2, a2.pointShadowMatrix[c2] = E4.shadow.matrix, m2++;
          }
          a2.point[c2] = e4, c2++;
        } else if (E4.isHemisphereLight) {
          const e4 = n2.get(E4);
          e4.skyColor.copy(E4.color).multiplyScalar(T2), e4.groundColor.copy(E4.groundColor).multiplyScalar(T2), a2.hemi[f2] = e4, f2++;
        }
      }
      u2 > 0 && (true === e2.has("OES_texture_float_linear") ? (a2.rectAreaLTC1 = In2.LTC_FLOAT_1, a2.rectAreaLTC2 = In2.LTC_FLOAT_2) : (a2.rectAreaLTC1 = In2.LTC_HALF_1, a2.rectAreaLTC2 = In2.LTC_HALF_2)), a2.ambient[0] = r2, a2.ambient[1] = o3, a2.ambient[2] = s3;
      const E2 = a2.hash;
      E2.directionalLength === l3 && E2.pointLength === c2 && E2.spotLength === d2 && E2.rectAreaLength === u2 && E2.hemiLength === f2 && E2.numDirectionalShadows === p2 && E2.numPointShadows === m2 && E2.numSpotShadows === h2 && E2.numSpotMaps === _2 && E2.numLightProbes === v2 || (a2.directional.length = l3, a2.spot.length = d2, a2.rectArea.length = u2, a2.point.length = c2, a2.hemi.length = f2, a2.directionalShadow.length = p2, a2.directionalShadowMap.length = p2, a2.pointShadow.length = m2, a2.pointShadowMap.length = m2, a2.spotShadow.length = h2, a2.spotShadowMap.length = h2, a2.directionalShadowMatrix.length = p2, a2.pointShadowMatrix.length = m2, a2.spotLightMatrix.length = h2 + _2 - g2, a2.spotLightMap.length = _2, a2.numSpotLightShadowsWithMaps = g2, a2.numLightProbes = v2, E2.directionalLength = l3, E2.pointLength = c2, E2.spotLength = d2, E2.rectAreaLength = u2, E2.hemiLength = f2, E2.numDirectionalShadows = p2, E2.numPointShadows = m2, E2.numSpotShadows = h2, E2.numSpotMaps = _2, E2.numLightProbes = v2, a2.version = qr2++);
    }, setupView: function(e3, t2) {
      let n3 = 0, i3 = 0, r2 = 0, c2 = 0, d2 = 0;
      const u2 = t2.matrixWorldInverse;
      for (let t3 = 0, f2 = e3.length; t3 < f2; t3++) {
        const f3 = e3[t3];
        if (f3.isDirectionalLight) {
          const e4 = a2.directional[n3];
          e4.direction.setFromMatrixPosition(f3.matrixWorld), o2.setFromMatrixPosition(f3.target.matrixWorld), e4.direction.sub(o2), e4.direction.transformDirection(u2), n3++;
        } else if (f3.isSpotLight) {
          const e4 = a2.spot[r2];
          e4.position.setFromMatrixPosition(f3.matrixWorld), e4.position.applyMatrix4(u2), e4.direction.setFromMatrixPosition(f3.matrixWorld), o2.setFromMatrixPosition(f3.target.matrixWorld), e4.direction.sub(o2), e4.direction.transformDirection(u2), r2++;
        } else if (f3.isRectAreaLight) {
          const e4 = a2.rectArea[c2];
          e4.position.setFromMatrixPosition(f3.matrixWorld), e4.position.applyMatrix4(u2), l2.identity(), s2.copy(f3.matrixWorld), s2.premultiply(u2), l2.extractRotation(s2), e4.halfWidth.set(0.5 * f3.width, 0, 0), e4.halfHeight.set(0, 0.5 * f3.height, 0), e4.halfWidth.applyMatrix4(l2), e4.halfHeight.applyMatrix4(l2), c2++;
        } else if (f3.isPointLight) {
          const e4 = a2.point[i3];
          e4.position.setFromMatrixPosition(f3.matrixWorld), e4.position.applyMatrix4(u2), i3++;
        } else if (f3.isHemisphereLight) {
          const e4 = a2.hemi[d2];
          e4.direction.setFromMatrixPosition(f3.matrixWorld), e4.direction.transformDirection(u2), d2++;
        }
      }
    }, state: a2 };
  }
  function $r2(e2) {
    const t2 = new Zr2(e2), n2 = [], i2 = [];
    const r2 = { lightsArray: n2, shadowsArray: i2, camera: null, lights: t2, transmissionRenderTarget: {} };
    return { init: function(e3) {
      r2.camera = e3, n2.length = 0, i2.length = 0;
    }, state: r2, setupLights: function() {
      t2.setup(n2);
    }, setupLightsView: function(e3) {
      t2.setupView(n2, e3);
    }, pushLight: function(e3) {
      n2.push(e3);
    }, pushShadow: function(e3) {
      i2.push(e3);
    } };
  }
  function Qr2(e2) {
    let t2 = /* @__PURE__ */ new WeakMap();
    return { get: function(n2, i2 = 0) {
      const r2 = t2.get(n2);
      let a2;
      return void 0 === r2 ? (a2 = new $r2(e2), t2.set(n2, [a2])) : i2 >= r2.length ? (a2 = new $r2(e2), r2.push(a2)) : a2 = r2[i2], a2;
    }, dispose: function() {
      t2 = /* @__PURE__ */ new WeakMap();
    } };
  }
  function Jr2(e2, n2, i2) {
    let r2 = new go();
    const a2 = new us(), s2 = new us(), d2 = new Ps(), u2 = new Hl({ depthPacking: Ue }), f2 = new Gl(), p2 = {}, m2 = i2.maxTextureSize, h2 = { [u]: d, [d]: u, [p]: p }, g2 = new ta({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new us() }, radius: { value: 4 } }, vertexShader: "void main() {\n	gl_Position = vec4( position, 1.0 );\n}", fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( squared_mean - mean * mean );\n	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}" }), v2 = g2.clone();
    v2.defines.HORIZONTAL_PASS = 1;
    const S2 = new Nn();
    S2.setAttribute("position", new xn(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
    const T2 = new Yn(S2, g2), M2 = this;
    this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = h;
    let x2 = this.type;
    function A2(t2, i3) {
      const r3 = n2.update(T2);
      g2.defines.VSM_SAMPLES !== t2.blurSamples && (g2.defines.VSM_SAMPLES = t2.blurSamples, v2.defines.VSM_SAMPLES = t2.blurSamples, g2.needsUpdate = true, v2.needsUpdate = true), null === t2.mapPass && (t2.mapPass = new Rs(a2.x, a2.y)), g2.uniforms.shadow_pass.value = t2.map.texture, g2.uniforms.resolution.value = t2.mapSize, g2.uniforms.radius.value = t2.radius, e2.setRenderTarget(t2.mapPass), e2.clear(), e2.renderBufferDirect(i3, null, r3, g2, T2, null), v2.uniforms.shadow_pass.value = t2.mapPass.texture, v2.uniforms.resolution.value = t2.mapSize, v2.uniforms.radius.value = t2.radius, e2.setRenderTarget(t2.map), e2.clear(), e2.renderBufferDirect(i3, null, r3, v2, T2, null);
    }
    function R2(t2, n3, i3, r3) {
      let a3 = null;
      const o2 = true === i3.isPointLight ? t2.customDistanceMaterial : t2.customDepthMaterial;
      if (void 0 !== o2) a3 = o2;
      else if (a3 = true === i3.isPointLight ? f2 : u2, e2.localClippingEnabled && true === n3.clipShadows && Array.isArray(n3.clippingPlanes) && 0 !== n3.clippingPlanes.length || n3.displacementMap && 0 !== n3.displacementScale || n3.alphaMap && n3.alphaTest > 0 || n3.map && n3.alphaTest > 0 || true === n3.alphaToCoverage) {
        const e3 = a3.uuid, t3 = n3.uuid;
        let i4 = p2[e3];
        void 0 === i4 && (i4 = {}, p2[e3] = i4);
        let r4 = i4[t3];
        void 0 === r4 && (r4 = a3.clone(), i4[t3] = r4, n3.addEventListener("dispose", C2)), a3 = r4;
      }
      if (a3.visible = n3.visible, a3.wireframe = n3.wireframe, a3.side = r3 === c ? null !== n3.shadowSide ? n3.shadowSide : n3.side : null !== n3.shadowSide ? n3.shadowSide : h2[n3.side], a3.alphaMap = n3.alphaMap, a3.alphaTest = true === n3.alphaToCoverage ? 0.5 : n3.alphaTest, a3.map = n3.map, a3.clipShadows = n3.clipShadows, a3.clippingPlanes = n3.clippingPlanes, a3.clipIntersection = n3.clipIntersection, a3.displacementMap = n3.displacementMap, a3.displacementScale = n3.displacementScale, a3.displacementBias = n3.displacementBias, a3.wireframeLinewidth = n3.wireframeLinewidth, a3.linewidth = n3.linewidth, true === i3.isPointLight && true === a3.isMeshDistanceMaterial) {
        e2.properties.get(a3).light = i3;
      }
      return a3;
    }
    function b2(t2, i3, a3, o2, s3) {
      if (false === t2.visible) return;
      if (t2.layers.test(i3.layers) && (t2.isMesh || t2.isLine || t2.isPoints) && (t2.castShadow || t2.receiveShadow && s3 === c) && (!t2.frustumCulled || r2.intersectsObject(t2))) {
        t2.modelViewMatrix.multiplyMatrices(a3.matrixWorldInverse, t2.matrixWorld);
        const r3 = n2.update(t2), l3 = t2.material;
        if (Array.isArray(l3)) {
          const n3 = r3.groups;
          for (let c2 = 0, d3 = n3.length; c2 < d3; c2++) {
            const d4 = n3[c2], u3 = l3[d4.materialIndex];
            if (u3 && u3.visible) {
              const n4 = R2(t2, u3, o2, s3);
              t2.onBeforeShadow(e2, t2, i3, a3, r3, n4, d4), e2.renderBufferDirect(a3, null, r3, n4, t2, d4), t2.onAfterShadow(e2, t2, i3, a3, r3, n4, d4);
            }
          }
        } else if (l3.visible) {
          const n3 = R2(t2, l3, o2, s3);
          t2.onBeforeShadow(e2, t2, i3, a3, r3, n3, null), e2.renderBufferDirect(a3, null, r3, n3, t2, null), t2.onAfterShadow(e2, t2, i3, a3, r3, n3, null);
        }
      }
      const l2 = t2.children;
      for (let e3 = 0, t3 = l2.length; e3 < t3; e3++) b2(l2[e3], i3, a3, o2, s3);
    }
    function C2(e3) {
      e3.target.removeEventListener("dispose", C2);
      for (const t2 in p2) {
        const n3 = p2[t2], i3 = e3.target.uuid;
        if (i3 in n3) {
          n3[i3].dispose(), delete n3[i3];
        }
      }
    }
    this.render = function(t2, n3, i3) {
      if (false === M2.enabled) return;
      if (false === M2.autoUpdate && false === M2.needsUpdate) return;
      if (0 === t2.length) return;
      const o2 = e2.getRenderTarget(), l2 = e2.getActiveCubeFace(), c2 = e2.getActiveMipmapLevel(), u3 = e2.state;
      u3.setBlending(m), true === u3.buffers.depth.getReversed() ? u3.buffers.color.setClear(0, 0, 0, 0) : u3.buffers.color.setClear(1, 1, 1, 1), u3.buffers.depth.setTest(true), u3.setScissorTest(false);
      const f3 = x2 !== c && this.type === c, p3 = x2 === c && this.type !== c;
      for (let o3 = 0, l3 = t2.length; o3 < l3; o3++) {
        const l4 = t2[o3], c3 = l4.shadow;
        if (void 0 === c3) {
          Hi("WebGLShadowMap:", l4, "has no shadow.");
          continue;
        }
        if (false === c3.autoUpdate && false === c3.needsUpdate) continue;
        a2.copy(c3.mapSize);
        const h3 = c3.getFrameExtents();
        if (a2.multiply(h3), s2.copy(c3.mapSize), (a2.x > m2 || a2.y > m2) && (a2.x > m2 && (s2.x = Math.floor(m2 / h3.x), a2.x = s2.x * h3.x, c3.mapSize.x = s2.x), a2.y > m2 && (s2.y = Math.floor(m2 / h3.y), a2.y = s2.y * h3.y, c3.mapSize.y = s2.y)), null === c3.map || true === f3 || true === p3) {
          const e3 = this.type !== c ? { minFilter: gt, magFilter: gt } : {};
          null !== c3.map && c3.map.dispose(), c3.map = new Rs(a2.x, a2.y, e3), c3.map.texture.name = l4.name + ".shadowMap", c3.camera.updateProjectionMatrix();
        }
        e2.setRenderTarget(c3.map), e2.clear();
        const _2 = c3.getViewportCount();
        for (let e3 = 0; e3 < _2; e3++) {
          const t3 = c3.getViewport(e3);
          d2.set(s2.x * t3.x, s2.y * t3.y, s2.x * t3.z, s2.y * t3.w), u3.viewport(d2), c3.updateMatrices(l4, e3), r2 = c3.getFrustum(), b2(n3, i3, c3.camera, l4, this.type);
        }
        true !== c3.isPointLightShadow && this.type === c && A2(c3, i3), c3.needsUpdate = false;
      }
      x2 = this.type, M2.needsUpdate = false, e2.setRenderTarget(o2, l2, c2);
    };
  }
  var ea2 = { [j]: D, [W]: X, [q]: Y, [U]: J, [D]: j, [X]: W, [Y]: q, [J]: U };
  function ta2(e2, t2) {
    const i2 = new function() {
      let t3 = false;
      const n2 = new Ps();
      let i3 = null;
      const r3 = new Ps(0, 0, 0, 0);
      return { setMask: function(n3) {
        i3 === n3 || t3 || (e2.colorMask(n3, n3, n3, n3), i3 = n3);
      }, setLocked: function(e3) {
        t3 = e3;
      }, setClear: function(t4, i4, a3, o3, s3) {
        true === s3 && (t4 *= o3, i4 *= o3, a3 *= o3), n2.set(t4, i4, a3, o3), false === r3.equals(n2) && (e2.clearColor(t4, i4, a3, o3), r3.copy(n2));
      }, reset: function() {
        t3 = false, i3 = null, r3.set(-1, 0, 0, 0);
      } };
    }(), r2 = new function() {
      let n2 = false, i3 = false, r3 = null, a3 = null, o3 = null;
      return { setReversed: function(e3) {
        if (i3 !== e3) {
          const n3 = t2.get("EXT_clip_control");
          e3 ? n3.clipControlEXT(n3.LOWER_LEFT_EXT, n3.ZERO_TO_ONE_EXT) : n3.clipControlEXT(n3.LOWER_LEFT_EXT, n3.NEGATIVE_ONE_TO_ONE_EXT), i3 = e3;
          const r4 = o3;
          o3 = null, this.setClear(r4);
        }
      }, getReversed: function() {
        return i3;
      }, setTest: function(t3) {
        t3 ? W2(e2.DEPTH_TEST) : Y2(e2.DEPTH_TEST);
      }, setMask: function(t3) {
        r3 === t3 || n2 || (e2.depthMask(t3), r3 = t3);
      }, setFunc: function(t3) {
        if (i3 && (t3 = ea2[t3]), a3 !== t3) {
          switch (t3) {
            case j:
              e2.depthFunc(e2.NEVER);
              break;
            case D:
              e2.depthFunc(e2.ALWAYS);
              break;
            case W:
              e2.depthFunc(e2.LESS);
              break;
            case U:
              e2.depthFunc(e2.LEQUAL);
              break;
            case q:
              e2.depthFunc(e2.EQUAL);
              break;
            case J:
              e2.depthFunc(e2.GEQUAL);
              break;
            case X:
              e2.depthFunc(e2.GREATER);
              break;
            case Y:
              e2.depthFunc(e2.NOTEQUAL);
              break;
            default:
              e2.depthFunc(e2.LEQUAL);
          }
          a3 = t3;
        }
      }, setLocked: function(e3) {
        n2 = e3;
      }, setClear: function(t3) {
        o3 !== t3 && (i3 && (t3 = 1 - t3), e2.clearDepth(t3), o3 = t3);
      }, reset: function() {
        n2 = false, r3 = null, a3 = null, o3 = null, i3 = false;
      } };
    }(), a2 = new function() {
      let t3 = false, n2 = null, i3 = null, r3 = null, a3 = null, o3 = null, s3 = null, l3 = null, c2 = null;
      return { setTest: function(n3) {
        t3 || (n3 ? W2(e2.STENCIL_TEST) : Y2(e2.STENCIL_TEST));
      }, setMask: function(i4) {
        n2 === i4 || t3 || (e2.stencilMask(i4), n2 = i4);
      }, setFunc: function(t4, n3, o4) {
        i3 === t4 && r3 === n3 && a3 === o4 || (e2.stencilFunc(t4, n3, o4), i3 = t4, r3 = n3, a3 = o4);
      }, setOp: function(t4, n3, i4) {
        o3 === t4 && s3 === n3 && l3 === i4 || (e2.stencilOp(t4, n3, i4), o3 = t4, s3 = n3, l3 = i4);
      }, setLocked: function(e3) {
        t3 = e3;
      }, setClear: function(t4) {
        c2 !== t4 && (e2.clearStencil(t4), c2 = t4);
      }, reset: function() {
        t3 = false, n2 = null, i3 = null, r3 = null, a3 = null, o3 = null, s3 = null, l3 = null, c2 = null;
      } };
    }(), o2 = /* @__PURE__ */ new WeakMap(), s2 = /* @__PURE__ */ new WeakMap();
    let l2 = {}, d2 = {}, u2 = /* @__PURE__ */ new WeakMap(), f2 = [], p2 = null, m2 = false, h2 = null, _2 = null, g2 = null, v2 = null, E2 = null, S2 = null, T2 = null, M2 = new nn(0, 0, 0), x2 = 0, A2 = false, R2 = null, b2 = null, C2 = null, L2 = null, P2 = null;
    const U2 = e2.getParameter(e2.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    let D2 = false, w2 = 0;
    const y2 = e2.getParameter(e2.VERSION);
    -1 !== y2.indexOf("WebGL") ? (w2 = parseFloat(/^WebGL (\d)/.exec(y2)[1]), D2 = w2 >= 1) : -1 !== y2.indexOf("OpenGL ES") && (w2 = parseFloat(/^OpenGL ES (\d)/.exec(y2)[1]), D2 = w2 >= 2);
    let I2 = null, F2 = {};
    const B2 = e2.getParameter(e2.SCISSOR_BOX), G2 = e2.getParameter(e2.VIEWPORT), H2 = new Ps().fromArray(B2), V2 = new Ps().fromArray(G2);
    function z2(t3, n2, i3, r3) {
      const a3 = new Uint8Array(4), o3 = e2.createTexture();
      e2.bindTexture(t3, o3), e2.texParameteri(t3, e2.TEXTURE_MIN_FILTER, e2.NEAREST), e2.texParameteri(t3, e2.TEXTURE_MAG_FILTER, e2.NEAREST);
      for (let o4 = 0; o4 < i3; o4++) t3 === e2.TEXTURE_3D || t3 === e2.TEXTURE_2D_ARRAY ? e2.texImage3D(n2, 0, e2.RGBA, 1, 1, r3, 0, e2.RGBA, e2.UNSIGNED_BYTE, a3) : e2.texImage2D(n2 + o4, 0, e2.RGBA, 1, 1, 0, e2.RGBA, e2.UNSIGNED_BYTE, a3);
      return o3;
    }
    const k2 = {};
    function W2(t3) {
      true !== l2[t3] && (e2.enable(t3), l2[t3] = true);
    }
    function Y2(t3) {
      false !== l2[t3] && (e2.disable(t3), l2[t3] = false);
    }
    k2[e2.TEXTURE_2D] = z2(e2.TEXTURE_2D, e2.TEXTURE_2D, 1), k2[e2.TEXTURE_CUBE_MAP] = z2(e2.TEXTURE_CUBE_MAP, e2.TEXTURE_CUBE_MAP_POSITIVE_X, 6), k2[e2.TEXTURE_2D_ARRAY] = z2(e2.TEXTURE_2D_ARRAY, e2.TEXTURE_2D_ARRAY, 1, 1), k2[e2.TEXTURE_3D] = z2(e2.TEXTURE_3D, e2.TEXTURE_3D, 1, 1), i2.setClear(0, 0, 0, 1), r2.setClear(1), a2.setClear(0), W2(e2.DEPTH_TEST), r2.setFunc(U), Z2(false), $2(r), W2(e2.CULL_FACE), j2(m);
    const K2 = { [v]: e2.FUNC_ADD, [w]: e2.FUNC_SUBTRACT, [M]: e2.FUNC_REVERSE_SUBTRACT };
    K2[S] = e2.MIN, K2[_] = e2.MAX;
    const q2 = { [A]: e2.ZERO, [T]: e2.ONE, [z]: e2.SRC_COLOR, [I]: e2.SRC_ALPHA, [N]: e2.SRC_ALPHA_SATURATE, [O]: e2.DST_COLOR, [k]: e2.DST_ALPHA, [C]: e2.ONE_MINUS_SRC_COLOR, [B]: e2.ONE_MINUS_SRC_ALPHA, [R]: e2.ONE_MINUS_DST_COLOR, [P]: e2.ONE_MINUS_DST_ALPHA, [V]: e2.CONSTANT_COLOR, [F]: e2.ONE_MINUS_CONSTANT_COLOR, [L]: e2.CONSTANT_ALPHA, [E]: e2.ONE_MINUS_CONSTANT_ALPHA };
    function j2(t3, n2, i3, r3, a3, o3, s3, l3, c2, d3) {
      if (t3 !== m) {
        if (false === m2 && (W2(e2.BLEND), m2 = true), t3 === b) a3 = a3 || n2, o3 = o3 || i3, s3 = s3 || r3, n2 === _2 && a3 === E2 || (e2.blendEquationSeparate(K2[n2], K2[a3]), _2 = n2, E2 = a3), i3 === g2 && r3 === v2 && o3 === S2 && s3 === T2 || (e2.blendFuncSeparate(q2[i3], q2[r3], q2[o3], q2[s3]), g2 = i3, v2 = r3, S2 = o3, T2 = s3), false !== l3.equals(M2) && c2 === x2 || (e2.blendColor(l3.r, l3.g, l3.b, c2), M2.copy(l3), x2 = c2), h2 = t3, A2 = false;
        else if (t3 !== h2 || d3 !== A2) {
          if (_2 === v && E2 === v || (e2.blendEquation(e2.FUNC_ADD), _2 = v, E2 = v), d3) switch (t3) {
            case y:
              e2.blendFuncSeparate(e2.ONE, e2.ONE_MINUS_SRC_ALPHA, e2.ONE, e2.ONE_MINUS_SRC_ALPHA);
              break;
            case g:
              e2.blendFunc(e2.ONE, e2.ONE);
              break;
            case f:
              e2.blendFuncSeparate(e2.ZERO, e2.ONE_MINUS_SRC_COLOR, e2.ZERO, e2.ONE);
              break;
            case x:
              e2.blendFuncSeparate(e2.DST_COLOR, e2.ONE_MINUS_SRC_ALPHA, e2.ZERO, e2.ONE);
              break;
            default:
              Gi("WebGLState: Invalid blending: ", t3);
          }
          else switch (t3) {
            case y:
              e2.blendFuncSeparate(e2.SRC_ALPHA, e2.ONE_MINUS_SRC_ALPHA, e2.ONE, e2.ONE_MINUS_SRC_ALPHA);
              break;
            case g:
              e2.blendFuncSeparate(e2.SRC_ALPHA, e2.ONE, e2.ONE, e2.ONE);
              break;
            case f:
              Gi("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
              break;
            case x:
              Gi("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
              break;
            default:
              Gi("WebGLState: Invalid blending: ", t3);
          }
          g2 = null, v2 = null, S2 = null, T2 = null, M2.set(0, 0, 0), x2 = 0, h2 = t3, A2 = d3;
        }
      } else true === m2 && (Y2(e2.BLEND), m2 = false);
    }
    function Z2(t3) {
      R2 !== t3 && (t3 ? e2.frontFace(e2.CW) : e2.frontFace(e2.CCW), R2 = t3);
    }
    function $2(t3) {
      t3 !== s ? (W2(e2.CULL_FACE), t3 !== b2 && (t3 === r ? e2.cullFace(e2.BACK) : t3 === n ? e2.cullFace(e2.FRONT) : e2.cullFace(e2.FRONT_AND_BACK))) : Y2(e2.CULL_FACE), b2 = t3;
    }
    function Q2(t3, n2, i3) {
      t3 ? (W2(e2.POLYGON_OFFSET_FILL), L2 === n2 && P2 === i3 || (e2.polygonOffset(n2, i3), L2 = n2, P2 = i3)) : Y2(e2.POLYGON_OFFSET_FILL);
    }
    return { buffers: { color: i2, depth: r2, stencil: a2 }, enable: W2, disable: Y2, bindFramebuffer: function(t3, n2) {
      return d2[t3] !== n2 && (e2.bindFramebuffer(t3, n2), d2[t3] = n2, t3 === e2.DRAW_FRAMEBUFFER && (d2[e2.FRAMEBUFFER] = n2), t3 === e2.FRAMEBUFFER && (d2[e2.DRAW_FRAMEBUFFER] = n2), true);
    }, drawBuffers: function(t3, n2) {
      let i3 = f2, r3 = false;
      if (t3) {
        i3 = u2.get(n2), void 0 === i3 && (i3 = [], u2.set(n2, i3));
        const a3 = t3.textures;
        if (i3.length !== a3.length || i3[0] !== e2.COLOR_ATTACHMENT0) {
          for (let t4 = 0, n3 = a3.length; t4 < n3; t4++) i3[t4] = e2.COLOR_ATTACHMENT0 + t4;
          i3.length = a3.length, r3 = true;
        }
      } else i3[0] !== e2.BACK && (i3[0] = e2.BACK, r3 = true);
      r3 && e2.drawBuffers(i3);
    }, useProgram: function(t3) {
      return p2 !== t3 && (e2.useProgram(t3), p2 = t3, true);
    }, setBlending: j2, setMaterial: function(t3, n2) {
      t3.side === p ? Y2(e2.CULL_FACE) : W2(e2.CULL_FACE);
      let o3 = t3.side === d;
      n2 && (o3 = !o3), Z2(o3), t3.blending === y && false === t3.transparent ? j2(m) : j2(t3.blending, t3.blendEquation, t3.blendSrc, t3.blendDst, t3.blendEquationAlpha, t3.blendSrcAlpha, t3.blendDstAlpha, t3.blendColor, t3.blendAlpha, t3.premultipliedAlpha), r2.setFunc(t3.depthFunc), r2.setTest(t3.depthTest), r2.setMask(t3.depthWrite), i2.setMask(t3.colorWrite);
      const s3 = t3.stencilWrite;
      a2.setTest(s3), s3 && (a2.setMask(t3.stencilWriteMask), a2.setFunc(t3.stencilFunc, t3.stencilRef, t3.stencilFuncMask), a2.setOp(t3.stencilFail, t3.stencilZFail, t3.stencilZPass)), Q2(t3.polygonOffset, t3.polygonOffsetFactor, t3.polygonOffsetUnits), true === t3.alphaToCoverage ? W2(e2.SAMPLE_ALPHA_TO_COVERAGE) : Y2(e2.SAMPLE_ALPHA_TO_COVERAGE);
    }, setFlipSided: Z2, setCullFace: $2, setLineWidth: function(t3) {
      t3 !== C2 && (D2 && e2.lineWidth(t3), C2 = t3);
    }, setPolygonOffset: Q2, setScissorTest: function(t3) {
      t3 ? W2(e2.SCISSOR_TEST) : Y2(e2.SCISSOR_TEST);
    }, activeTexture: function(t3) {
      void 0 === t3 && (t3 = e2.TEXTURE0 + U2 - 1), I2 !== t3 && (e2.activeTexture(t3), I2 = t3);
    }, bindTexture: function(t3, n2, i3) {
      void 0 === i3 && (i3 = null === I2 ? e2.TEXTURE0 + U2 - 1 : I2);
      let r3 = F2[i3];
      void 0 === r3 && (r3 = { type: void 0, texture: void 0 }, F2[i3] = r3), r3.type === t3 && r3.texture === n2 || (I2 !== i3 && (e2.activeTexture(i3), I2 = i3), e2.bindTexture(t3, n2 || k2[t3]), r3.type = t3, r3.texture = n2);
    }, unbindTexture: function() {
      const t3 = F2[I2];
      void 0 !== t3 && void 0 !== t3.type && (e2.bindTexture(t3.type, null), t3.type = void 0, t3.texture = void 0);
    }, compressedTexImage2D: function() {
      try {
        e2.compressedTexImage2D(...arguments);
      } catch (e3) {
        e3("WebGLState:", e3);
      }
    }, compressedTexImage3D: function() {
      try {
        e2.compressedTexImage3D(...arguments);
      } catch (e3) {
        e3("WebGLState:", e3);
      }
    }, texImage2D: function() {
      try {
        e2.texImage2D(...arguments);
      } catch (e3) {
        e3("WebGLState:", e3);
      }
    }, texImage3D: function() {
      try {
        e2.texImage3D(...arguments);
      } catch (e3) {
        e3("WebGLState:", e3);
      }
    }, updateUBOMapping: function(t3, n2) {
      let i3 = s2.get(n2);
      void 0 === i3 && (i3 = /* @__PURE__ */ new WeakMap(), s2.set(n2, i3));
      let r3 = i3.get(t3);
      void 0 === r3 && (r3 = e2.getUniformBlockIndex(n2, t3.name), i3.set(t3, r3));
    }, uniformBlockBinding: function(t3, n2) {
      const i3 = s2.get(n2).get(t3);
      o2.get(n2) !== i3 && (e2.uniformBlockBinding(n2, i3, t3.__bindingPointIndex), o2.set(n2, i3));
    }, texStorage2D: function() {
      try {
        e2.texStorage2D(...arguments);
      } catch (e3) {
        e3("WebGLState:", e3);
      }
    }, texStorage3D: function() {
      try {
        e2.texStorage3D(...arguments);
      } catch (e3) {
        e3("WebGLState:", e3);
      }
    }, texSubImage2D: function() {
      try {
        e2.texSubImage2D(...arguments);
      } catch (e3) {
        e3("WebGLState:", e3);
      }
    }, texSubImage3D: function() {
      try {
        e2.texSubImage3D(...arguments);
      } catch (e3) {
        e3("WebGLState:", e3);
      }
    }, compressedTexSubImage2D: function() {
      try {
        e2.compressedTexSubImage2D(...arguments);
      } catch (e3) {
        e3("WebGLState:", e3);
      }
    }, compressedTexSubImage3D: function() {
      try {
        e2.compressedTexSubImage3D(...arguments);
      } catch (e3) {
        e3("WebGLState:", e3);
      }
    }, scissor: function(t3) {
      false === H2.equals(t3) && (e2.scissor(t3.x, t3.y, t3.z, t3.w), H2.copy(t3));
    }, viewport: function(t3) {
      false === V2.equals(t3) && (e2.viewport(t3.x, t3.y, t3.z, t3.w), V2.copy(t3));
    }, reset: function() {
      e2.disable(e2.BLEND), e2.disable(e2.CULL_FACE), e2.disable(e2.DEPTH_TEST), e2.disable(e2.POLYGON_OFFSET_FILL), e2.disable(e2.SCISSOR_TEST), e2.disable(e2.STENCIL_TEST), e2.disable(e2.SAMPLE_ALPHA_TO_COVERAGE), e2.blendEquation(e2.FUNC_ADD), e2.blendFunc(e2.ONE, e2.ZERO), e2.blendFuncSeparate(e2.ONE, e2.ZERO, e2.ONE, e2.ZERO), e2.blendColor(0, 0, 0, 0), e2.colorMask(true, true, true, true), e2.clearColor(0, 0, 0, 0), e2.depthMask(true), e2.depthFunc(e2.LESS), r2.setReversed(false), e2.clearDepth(1), e2.stencilMask(4294967295), e2.stencilFunc(e2.ALWAYS, 0, 4294967295), e2.stencilOp(e2.KEEP, e2.KEEP, e2.KEEP), e2.clearStencil(0), e2.cullFace(e2.BACK), e2.frontFace(e2.CCW), e2.polygonOffset(0, 0), e2.activeTexture(e2.TEXTURE0), e2.bindFramebuffer(e2.FRAMEBUFFER, null), e2.bindFramebuffer(e2.DRAW_FRAMEBUFFER, null), e2.bindFramebuffer(e2.READ_FRAMEBUFFER, null), e2.useProgram(null), e2.lineWidth(1), e2.scissor(0, 0, e2.canvas.width, e2.canvas.height), e2.viewport(0, 0, e2.canvas.width, e2.canvas.height), l2 = {}, I2 = null, F2 = {}, d2 = {}, u2 = /* @__PURE__ */ new WeakMap(), f2 = [], p2 = null, m2 = false, h2 = null, _2 = null, g2 = null, v2 = null, E2 = null, S2 = null, T2 = null, M2 = new nn(0, 0, 0), x2 = 0, A2 = false, R2 = null, b2 = null, C2 = null, L2 = null, P2 = null, H2.set(0, 0, e2.canvas.width, e2.canvas.height), V2.set(0, 0, e2.canvas.width, e2.canvas.height), i2.reset(), r2.reset(), a2.reset();
    } };
  }
  function na2(e2, n2, i2, r2, a2, o2, s2) {
    const l2 = n2.has("WEBGL_multisampled_render_to_texture") ? n2.get("WEBGL_multisampled_render_to_texture") : null, c2 = "undefined" != typeof navigator && /OculusBrowser/g.test(navigator.userAgent), d2 = new us(), u2 = /* @__PURE__ */ new WeakMap();
    let f2;
    const h2 = /* @__PURE__ */ new WeakMap();
    let _2 = false;
    try {
      _2 = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
    } catch (e3) {
    }
    function g2(e3, t2) {
      return _2 ? new OffscreenCanvas(e3, t2) : Wi("canvas");
    }
    function v2(e3, t2, n3) {
      let i3 = 1;
      const r3 = ee2(e3);
      if ((r3.width > n3 || r3.height > n3) && (i3 = n3 / Math.max(r3.width, r3.height)), i3 < 1) {
        if ("undefined" != typeof HTMLImageElement && e3 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e3 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e3 instanceof ImageBitmap || "undefined" != typeof VideoFrame && e3 instanceof VideoFrame) {
          const n4 = Math.floor(i3 * r3.width), a3 = Math.floor(i3 * r3.height);
          void 0 === f2 && (f2 = g2(n4, a3));
          const o3 = t2 ? g2(n4, a3) : f2;
          o3.width = n4, o3.height = a3;
          return o3.getContext("2d").drawImage(e3, 0, 0, n4, a3), Hi("WebGLRenderer: Texture has been resized from (" + r3.width + "x" + r3.height + ") to (" + n4 + "x" + a3 + ")."), o3;
        }
        return "data" in e3 && Hi("WebGLRenderer: Image in DataTexture is too big (" + r3.width + "x" + r3.height + ")."), e3;
      }
      return e3;
    }
    function S2(e3) {
      return e3.generateMipmaps;
    }
    function A2(t2) {
      e2.generateMipmap(t2);
    }
    function R2(t2) {
      return t2.isWebGLCubeRenderTarget ? e2.TEXTURE_CUBE_MAP : t2.isWebGL3DRenderTarget ? e2.TEXTURE_3D : t2.isWebGLArrayRenderTarget || t2.isCompressedArrayTexture ? e2.TEXTURE_2D_ARRAY : e2.TEXTURE_2D;
    }
    function b2(t2, i3, r3, a3, o3 = false) {
      if (null !== t2) {
        if (void 0 !== e2[t2]) return e2[t2];
        Hi("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + t2 + "'");
      }
      let s3 = i3;
      if (i3 === e2.RED && (r3 === e2.FLOAT && (s3 = e2.R32F), r3 === e2.HALF_FLOAT && (s3 = e2.R16F), r3 === e2.UNSIGNED_BYTE && (s3 = e2.R8)), i3 === e2.RED_INTEGER && (r3 === e2.UNSIGNED_BYTE && (s3 = e2.R8UI), r3 === e2.UNSIGNED_SHORT && (s3 = e2.R16UI), r3 === e2.UNSIGNED_INT && (s3 = e2.R32UI), r3 === e2.BYTE && (s3 = e2.R8I), r3 === e2.SHORT && (s3 = e2.R16I), r3 === e2.INT && (s3 = e2.R32I)), i3 === e2.RG && (r3 === e2.FLOAT && (s3 = e2.RG32F), r3 === e2.HALF_FLOAT && (s3 = e2.RG16F), r3 === e2.UNSIGNED_BYTE && (s3 = e2.RG8)), i3 === e2.RG_INTEGER && (r3 === e2.UNSIGNED_BYTE && (s3 = e2.RG8UI), r3 === e2.UNSIGNED_SHORT && (s3 = e2.RG16UI), r3 === e2.UNSIGNED_INT && (s3 = e2.RG32UI), r3 === e2.BYTE && (s3 = e2.RG8I), r3 === e2.SHORT && (s3 = e2.RG16I), r3 === e2.INT && (s3 = e2.RG32I)), i3 === e2.RGB_INTEGER && (r3 === e2.UNSIGNED_BYTE && (s3 = e2.RGB8UI), r3 === e2.UNSIGNED_SHORT && (s3 = e2.RGB16UI), r3 === e2.UNSIGNED_INT && (s3 = e2.RGB32UI), r3 === e2.BYTE && (s3 = e2.RGB8I), r3 === e2.SHORT && (s3 = e2.RGB16I), r3 === e2.INT && (s3 = e2.RGB32I)), i3 === e2.RGBA_INTEGER && (r3 === e2.UNSIGNED_BYTE && (s3 = e2.RGBA8UI), r3 === e2.UNSIGNED_SHORT && (s3 = e2.RGBA16UI), r3 === e2.UNSIGNED_INT && (s3 = e2.RGBA32UI), r3 === e2.BYTE && (s3 = e2.RGBA8I), r3 === e2.SHORT && (s3 = e2.RGBA16I), r3 === e2.INT && (s3 = e2.RGBA32I)), i3 === e2.RGB && (r3 === e2.UNSIGNED_INT_5_9_9_9_REV && (s3 = e2.RGB9_E5), r3 === e2.UNSIGNED_INT_10F_11F_11F_REV && (s3 = e2.R11F_G11F_B10F)), i3 === e2.RGBA) {
        const t3 = o3 ? $e : ws.getTransfer(a3);
        r3 === e2.FLOAT && (s3 = e2.RGBA32F), r3 === e2.HALF_FLOAT && (s3 = e2.RGBA16F), r3 === e2.UNSIGNED_BYTE && (s3 = t3 === Qe ? e2.SRGB8_ALPHA8 : e2.RGBA8), r3 === e2.UNSIGNED_SHORT_4_4_4_4 && (s3 = e2.RGBA4), r3 === e2.UNSIGNED_SHORT_5_5_5_1 && (s3 = e2.RGB5_A1);
      }
      return s3 !== e2.R16F && s3 !== e2.R32F && s3 !== e2.RG16F && s3 !== e2.RG32F && s3 !== e2.RGBA16F && s3 !== e2.RGBA32F || n2.get("EXT_color_buffer_float"), s3;
    }
    function C2(t2, n3) {
      let i3;
      return t2 ? null === n3 || n3 === kt || n3 === Vt ? i3 = e2.DEPTH24_STENCIL8 : n3 === Pt ? i3 = e2.DEPTH32F_STENCIL8 : n3 === It && (i3 = e2.DEPTH24_STENCIL8, Hi("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : null === n3 || n3 === kt || n3 === Vt ? i3 = e2.DEPTH_COMPONENT24 : n3 === Pt ? i3 = e2.DEPTH_COMPONENT32F : n3 === It && (i3 = e2.DEPTH_COMPONENT16), i3;
    }
    function L2(e3, t2) {
      return true === S2(e3) || e3.isFramebufferTexture && e3.minFilter !== gt && e3.minFilter !== wt ? Math.log2(Math.max(t2.width, t2.height)) + 1 : void 0 !== e3.mipmaps && e3.mipmaps.length > 0 ? e3.mipmaps.length : e3.isCompressedTexture && Array.isArray(e3.image) ? t2.mipmaps.length : 1;
    }
    function P2(e3) {
      const t2 = e3.target;
      t2.removeEventListener("dispose", P2), (function(e4) {
        const t3 = r2.get(e4);
        if (void 0 === t3.__webglInit) return;
        const n3 = e4.source, i3 = h2.get(n3);
        if (i3) {
          const r3 = i3[t3.__cacheKey];
          r3.usedTimes--, 0 === r3.usedTimes && D2(e4), 0 === Object.keys(i3).length && h2.delete(n3);
        }
        r2.remove(e4);
      })(t2), t2.isVideoTexture && u2.delete(t2);
    }
    function U2(t2) {
      const n3 = t2.target;
      n3.removeEventListener("dispose", U2), (function(t3) {
        const n4 = r2.get(t3);
        t3.depthTexture && (t3.depthTexture.dispose(), r2.remove(t3.depthTexture));
        if (t3.isWebGLCubeRenderTarget) for (let t4 = 0; t4 < 6; t4++) {
          if (Array.isArray(n4.__webglFramebuffer[t4])) for (let i4 = 0; i4 < n4.__webglFramebuffer[t4].length; i4++) e2.deleteFramebuffer(n4.__webglFramebuffer[t4][i4]);
          else e2.deleteFramebuffer(n4.__webglFramebuffer[t4]);
          n4.__webglDepthbuffer && e2.deleteRenderbuffer(n4.__webglDepthbuffer[t4]);
        }
        else {
          if (Array.isArray(n4.__webglFramebuffer)) for (let t4 = 0; t4 < n4.__webglFramebuffer.length; t4++) e2.deleteFramebuffer(n4.__webglFramebuffer[t4]);
          else e2.deleteFramebuffer(n4.__webglFramebuffer);
          if (n4.__webglDepthbuffer && e2.deleteRenderbuffer(n4.__webglDepthbuffer), n4.__webglMultisampledFramebuffer && e2.deleteFramebuffer(n4.__webglMultisampledFramebuffer), n4.__webglColorRenderbuffer) for (let t4 = 0; t4 < n4.__webglColorRenderbuffer.length; t4++) n4.__webglColorRenderbuffer[t4] && e2.deleteRenderbuffer(n4.__webglColorRenderbuffer[t4]);
          n4.__webglDepthRenderbuffer && e2.deleteRenderbuffer(n4.__webglDepthRenderbuffer);
        }
        const i3 = t3.textures;
        for (let t4 = 0, n5 = i3.length; t4 < n5; t4++) {
          const n6 = r2.get(i3[t4]);
          n6.__webglTexture && (e2.deleteTexture(n6.__webglTexture), s2.memory.textures--), r2.remove(i3[t4]);
        }
        r2.remove(t3);
      })(n3);
    }
    function D2(t2) {
      const n3 = r2.get(t2);
      e2.deleteTexture(n3.__webglTexture);
      const i3 = t2.source;
      delete h2.get(i3)[n3.__cacheKey], s2.memory.textures--;
    }
    let w2 = 0;
    function y2(t2, n3) {
      const a3 = r2.get(t2);
      if (t2.isVideoTexture && (function(e3) {
        const t3 = s2.render.frame;
        u2.get(e3) !== t3 && (u2.set(e3, t3), e3.update());
      })(t2), false === t2.isRenderTargetTexture && true !== t2.isExternalTexture && t2.version > 0 && a3.__version !== t2.version) {
        const e3 = t2.image;
        if (null === e3) Hi("WebGLRenderer: Texture marked for update but no image data found.");
        else {
          if (false !== e3.complete) return void k2(a3, t2, n3);
          Hi("WebGLRenderer: Texture marked for update but image is incomplete");
        }
      } else t2.isExternalTexture && (a3.__webglTexture = t2.sourceTexture ? t2.sourceTexture : null);
      i2.bindTexture(e2.TEXTURE_2D, a3.__webglTexture, e2.TEXTURE0 + n3);
    }
    const I2 = { [pt]: e2.REPEAT, [mt]: e2.CLAMP_TO_EDGE, [yt]: e2.MIRRORED_REPEAT }, O2 = { [gt]: e2.NEAREST, [ft]: e2.NEAREST_MIPMAP_NEAREST, [bt]: e2.NEAREST_MIPMAP_LINEAR, [wt]: e2.LINEAR, [Mt]: e2.LINEAR_MIPMAP_NEAREST, [_t]: e2.LINEAR_MIPMAP_LINEAR }, F2 = { [yi]: e2.NEVER, [Mi]: e2.ALWAYS, [gi]: e2.LESS, [xi]: e2.LEQUAL, [fi]: e2.EQUAL, [wi]: e2.GEQUAL, [bi]: e2.GREATER, [vi]: e2.NOTEQUAL };
    function B2(t2, i3) {
      if (i3.type !== Pt || false !== n2.has("OES_texture_float_linear") || i3.magFilter !== wt && i3.magFilter !== Mt && i3.magFilter !== bt && i3.magFilter !== _t && i3.minFilter !== wt && i3.minFilter !== Mt && i3.minFilter !== bt && i3.minFilter !== _t || Hi("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), e2.texParameteri(t2, e2.TEXTURE_WRAP_S, I2[i3.wrapS]), e2.texParameteri(t2, e2.TEXTURE_WRAP_T, I2[i3.wrapT]), t2 !== e2.TEXTURE_3D && t2 !== e2.TEXTURE_2D_ARRAY || e2.texParameteri(t2, e2.TEXTURE_WRAP_R, I2[i3.wrapR]), e2.texParameteri(t2, e2.TEXTURE_MAG_FILTER, O2[i3.magFilter]), e2.texParameteri(t2, e2.TEXTURE_MIN_FILTER, O2[i3.minFilter]), i3.compareFunction && (e2.texParameteri(t2, e2.TEXTURE_COMPARE_MODE, e2.COMPARE_REF_TO_TEXTURE), e2.texParameteri(t2, e2.TEXTURE_COMPARE_FUNC, F2[i3.compareFunction])), true === n2.has("EXT_texture_filter_anisotropic")) {
        if (i3.magFilter === gt) return;
        if (i3.minFilter !== bt && i3.minFilter !== _t) return;
        if (i3.type === Pt && false === n2.has("OES_texture_float_linear")) return;
        if (i3.anisotropy > 1 || r2.get(i3).__currentAnisotropy) {
          const o3 = n2.get("EXT_texture_filter_anisotropic");
          e2.texParameterf(t2, o3.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(i3.anisotropy, a2.getMaxAnisotropy())), r2.get(i3).__currentAnisotropy = i3.anisotropy;
        }
      }
    }
    function V2(t2, n3) {
      let i3 = false;
      void 0 === t2.__webglInit && (t2.__webglInit = true, n3.addEventListener("dispose", P2));
      const r3 = n3.source;
      let a3 = h2.get(r3);
      void 0 === a3 && (a3 = {}, h2.set(r3, a3));
      const o3 = (function(e3) {
        const t3 = [];
        return t3.push(e3.wrapS), t3.push(e3.wrapT), t3.push(e3.wrapR || 0), t3.push(e3.magFilter), t3.push(e3.minFilter), t3.push(e3.anisotropy), t3.push(e3.internalFormat), t3.push(e3.format), t3.push(e3.type), t3.push(e3.generateMipmaps), t3.push(e3.premultiplyAlpha), t3.push(e3.flipY), t3.push(e3.unpackAlignment), t3.push(e3.colorSpace), t3.join();
      })(n3);
      if (o3 !== t2.__cacheKey) {
        void 0 === a3[o3] && (a3[o3] = { texture: e2.createTexture(), usedTimes: 0 }, s2.memory.textures++, i3 = true), a3[o3].usedTimes++;
        const r4 = a3[t2.__cacheKey];
        void 0 !== r4 && (a3[t2.__cacheKey].usedTimes--, 0 === r4.usedTimes && D2(n3)), t2.__cacheKey = o3, t2.__webglTexture = a3[o3].texture;
      }
      return i3;
    }
    function z2(e3, t2, n3) {
      return Math.floor(Math.floor(e3 / n3) / t2);
    }
    function k2(t2, n3, s3) {
      let l3 = e2.TEXTURE_2D;
      (n3.isDataArrayTexture || n3.isCompressedArrayTexture) && (l3 = e2.TEXTURE_2D_ARRAY), n3.isData3DTexture && (l3 = e2.TEXTURE_3D);
      const c3 = V2(t2, n3), d3 = n3.source;
      i2.bindTexture(l3, t2.__webglTexture, e2.TEXTURE0 + s3);
      const u3 = r2.get(d3);
      if (d3.version !== u3.__version || true === c3) {
        i2.activeTexture(e2.TEXTURE0 + s3);
        const t3 = ws.getPrimaries(ws.workingColorSpace), r3 = n3.colorSpace === Ze ? null : ws.getPrimaries(n3.colorSpace), f3 = n3.colorSpace === Ze || t3 === r3 ? e2.NONE : e2.BROWSER_DEFAULT_WEBGL;
        e2.pixelStorei(e2.UNPACK_FLIP_Y_WEBGL, n3.flipY), e2.pixelStorei(e2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n3.premultiplyAlpha), e2.pixelStorei(e2.UNPACK_ALIGNMENT, n3.unpackAlignment), e2.pixelStorei(e2.UNPACK_COLORSPACE_CONVERSION_WEBGL, f3);
        let m2 = v2(n3.image, false, a2.maxTextureSize);
        m2 = J2(n3, m2);
        const h3 = o2.convert(n3.format, n3.colorSpace), _3 = o2.convert(n3.type);
        let g3, T2 = b2(n3.internalFormat, h3, _3, n3.colorSpace, n3.isVideoTexture);
        B2(l3, n3);
        const M2 = n3.mipmaps, R3 = true !== n3.isVideoTexture, P3 = void 0 === u3.__version || true === c3, U3 = d3.dataReady, D3 = L2(n3, m2);
        if (n3.isDepthTexture) T2 = C2(n3.format === Ut, n3.type), P3 && (R3 ? i2.texStorage2D(e2.TEXTURE_2D, 1, T2, m2.width, m2.height) : i2.texImage2D(e2.TEXTURE_2D, 0, T2, m2.width, m2.height, 0, h3, _3, null));
        else if (n3.isDataTexture) if (M2.length > 0) {
          R3 && P3 && i2.texStorage2D(e2.TEXTURE_2D, D3, T2, M2[0].width, M2[0].height);
          for (let t4 = 0, n4 = M2.length; t4 < n4; t4++) g3 = M2[t4], R3 ? U3 && i2.texSubImage2D(e2.TEXTURE_2D, t4, 0, 0, g3.width, g3.height, h3, _3, g3.data) : i2.texImage2D(e2.TEXTURE_2D, t4, T2, g3.width, g3.height, 0, h3, _3, g3.data);
          n3.generateMipmaps = false;
        } else R3 ? (P3 && i2.texStorage2D(e2.TEXTURE_2D, D3, T2, m2.width, m2.height), U3 && (function(t4, n4, r4, a3) {
          const o3 = t4.updateRanges;
          if (0 === o3.length) i2.texSubImage2D(e2.TEXTURE_2D, 0, 0, 0, n4.width, n4.height, r4, a3, n4.data);
          else {
            o3.sort((e3, t5) => e3.start - t5.start);
            let s4 = 0;
            for (let e3 = 1; e3 < o3.length; e3++) {
              const t5 = o3[s4], i3 = o3[e3], r5 = t5.start + t5.count, a4 = z2(i3.start, n4.width, 4), l5 = z2(t5.start, n4.width, 4);
              i3.start <= r5 + 1 && a4 === l5 && z2(i3.start + i3.count - 1, n4.width, 4) === a4 ? t5.count = Math.max(t5.count, i3.start + i3.count - t5.start) : (++s4, o3[s4] = i3);
            }
            o3.length = s4 + 1;
            const l4 = e2.getParameter(e2.UNPACK_ROW_LENGTH), c4 = e2.getParameter(e2.UNPACK_SKIP_PIXELS), d4 = e2.getParameter(e2.UNPACK_SKIP_ROWS);
            e2.pixelStorei(e2.UNPACK_ROW_LENGTH, n4.width);
            for (let t5 = 0, s5 = o3.length; t5 < s5; t5++) {
              const s6 = o3[t5], l5 = Math.floor(s6.start / 4), c5 = Math.ceil(s6.count / 4), d5 = l5 % n4.width, u4 = Math.floor(l5 / n4.width), f4 = c5, p2 = 1;
              e2.pixelStorei(e2.UNPACK_SKIP_PIXELS, d5), e2.pixelStorei(e2.UNPACK_SKIP_ROWS, u4), i2.texSubImage2D(e2.TEXTURE_2D, 0, d5, u4, f4, p2, r4, a3, n4.data);
            }
            t4.clearUpdateRanges(), e2.pixelStorei(e2.UNPACK_ROW_LENGTH, l4), e2.pixelStorei(e2.UNPACK_SKIP_PIXELS, c4), e2.pixelStorei(e2.UNPACK_SKIP_ROWS, d4);
          }
        })(n3, m2, h3, _3)) : i2.texImage2D(e2.TEXTURE_2D, 0, T2, m2.width, m2.height, 0, h3, _3, m2.data);
        else if (n3.isCompressedTexture) if (n3.isCompressedArrayTexture) {
          R3 && P3 && i2.texStorage3D(e2.TEXTURE_2D_ARRAY, D3, T2, M2[0].width, M2[0].height, m2.depth);
          for (let t4 = 0, r4 = M2.length; t4 < r4; t4++) if (g3 = M2[t4], n3.format !== Dt) if (null !== h3) if (R3) {
            if (U3) if (n3.layerUpdates.size > 0) {
              const r5 = Yd(g3.width, g3.height, n3.format, n3.type);
              for (const a3 of n3.layerUpdates) {
                const n4 = g3.data.subarray(a3 * r5 / g3.data.BYTES_PER_ELEMENT, (a3 + 1) * r5 / g3.data.BYTES_PER_ELEMENT);
                i2.compressedTexSubImage3D(e2.TEXTURE_2D_ARRAY, t4, 0, 0, a3, g3.width, g3.height, 1, h3, n4);
              }
              n3.clearLayerUpdates();
            } else i2.compressedTexSubImage3D(e2.TEXTURE_2D_ARRAY, t4, 0, 0, 0, g3.width, g3.height, m2.depth, h3, g3.data);
          } else i2.compressedTexImage3D(e2.TEXTURE_2D_ARRAY, t4, T2, g3.width, g3.height, m2.depth, 0, g3.data, 0, 0);
          else Hi("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
          else R3 ? U3 && i2.texSubImage3D(e2.TEXTURE_2D_ARRAY, t4, 0, 0, 0, g3.width, g3.height, m2.depth, h3, _3, g3.data) : i2.texImage3D(e2.TEXTURE_2D_ARRAY, t4, T2, g3.width, g3.height, m2.depth, 0, h3, _3, g3.data);
        } else {
          R3 && P3 && i2.texStorage2D(e2.TEXTURE_2D, D3, T2, M2[0].width, M2[0].height);
          for (let t4 = 0, r4 = M2.length; t4 < r4; t4++) g3 = M2[t4], n3.format !== Dt ? null !== h3 ? R3 ? U3 && i2.compressedTexSubImage2D(e2.TEXTURE_2D, t4, 0, 0, g3.width, g3.height, h3, g3.data) : i2.compressedTexImage2D(e2.TEXTURE_2D, t4, T2, g3.width, g3.height, 0, g3.data) : Hi("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : R3 ? U3 && i2.texSubImage2D(e2.TEXTURE_2D, t4, 0, 0, g3.width, g3.height, h3, _3, g3.data) : i2.texImage2D(e2.TEXTURE_2D, t4, T2, g3.width, g3.height, 0, h3, _3, g3.data);
        }
        else if (n3.isDataArrayTexture) if (R3) {
          if (P3 && i2.texStorage3D(e2.TEXTURE_2D_ARRAY, D3, T2, m2.width, m2.height, m2.depth), U3) if (n3.layerUpdates.size > 0) {
            const t4 = Yd(m2.width, m2.height, n3.format, n3.type);
            for (const r4 of n3.layerUpdates) {
              const n4 = m2.data.subarray(r4 * t4 / m2.data.BYTES_PER_ELEMENT, (r4 + 1) * t4 / m2.data.BYTES_PER_ELEMENT);
              i2.texSubImage3D(e2.TEXTURE_2D_ARRAY, 0, 0, 0, r4, m2.width, m2.height, 1, h3, _3, n4);
            }
            n3.clearLayerUpdates();
          } else i2.texSubImage3D(e2.TEXTURE_2D_ARRAY, 0, 0, 0, 0, m2.width, m2.height, m2.depth, h3, _3, m2.data);
        } else i2.texImage3D(e2.TEXTURE_2D_ARRAY, 0, T2, m2.width, m2.height, m2.depth, 0, h3, _3, m2.data);
        else if (n3.isData3DTexture) R3 ? (P3 && i2.texStorage3D(e2.TEXTURE_3D, D3, T2, m2.width, m2.height, m2.depth), U3 && i2.texSubImage3D(e2.TEXTURE_3D, 0, 0, 0, 0, m2.width, m2.height, m2.depth, h3, _3, m2.data)) : i2.texImage3D(e2.TEXTURE_3D, 0, T2, m2.width, m2.height, m2.depth, 0, h3, _3, m2.data);
        else if (n3.isFramebufferTexture) {
          if (P3) if (R3) i2.texStorage2D(e2.TEXTURE_2D, D3, T2, m2.width, m2.height);
          else {
            let t4 = m2.width, n4 = m2.height;
            for (let r4 = 0; r4 < D3; r4++) i2.texImage2D(e2.TEXTURE_2D, r4, T2, t4, n4, 0, h3, _3, null), t4 >>= 1, n4 >>= 1;
          }
        } else if (M2.length > 0) {
          if (R3 && P3) {
            const t4 = ee2(M2[0]);
            i2.texStorage2D(e2.TEXTURE_2D, D3, T2, t4.width, t4.height);
          }
          for (let t4 = 0, n4 = M2.length; t4 < n4; t4++) g3 = M2[t4], R3 ? U3 && i2.texSubImage2D(e2.TEXTURE_2D, t4, 0, 0, h3, _3, g3) : i2.texImage2D(e2.TEXTURE_2D, t4, T2, h3, _3, g3);
          n3.generateMipmaps = false;
        } else if (R3) {
          if (P3) {
            const t4 = ee2(m2);
            i2.texStorage2D(e2.TEXTURE_2D, D3, T2, t4.width, t4.height);
          }
          U3 && i2.texSubImage2D(e2.TEXTURE_2D, 0, 0, 0, h3, _3, m2);
        } else i2.texImage2D(e2.TEXTURE_2D, 0, T2, h3, _3, m2);
        S2(n3) && A2(l3), u3.__version = d3.version, n3.onUpdate && n3.onUpdate(n3);
      }
      t2.__version = n3.version;
    }
    function W2(t2, n3, a3, s3, c3, d3) {
      const u3 = o2.convert(a3.format, a3.colorSpace), f3 = o2.convert(a3.type), p2 = b2(a3.internalFormat, u3, f3, a3.colorSpace), m2 = r2.get(n3), h3 = r2.get(a3);
      if (h3.__renderTarget = n3, !m2.__hasExternalTextures) {
        const t3 = Math.max(1, n3.width >> d3), r3 = Math.max(1, n3.height >> d3);
        c3 === e2.TEXTURE_3D || c3 === e2.TEXTURE_2D_ARRAY ? i2.texImage3D(c3, d3, p2, t3, r3, n3.depth, 0, u3, f3, null) : i2.texImage2D(c3, d3, p2, t3, r3, 0, u3, f3, null);
      }
      i2.bindFramebuffer(e2.FRAMEBUFFER, t2), Q2(n3) ? l2.framebufferTexture2DMultisampleEXT(e2.FRAMEBUFFER, s3, c3, h3.__webglTexture, 0, $2(n3)) : (c3 === e2.TEXTURE_2D || c3 >= e2.TEXTURE_CUBE_MAP_POSITIVE_X && c3 <= e2.TEXTURE_CUBE_MAP_NEGATIVE_Z) && e2.framebufferTexture2D(e2.FRAMEBUFFER, s3, c3, h3.__webglTexture, d3), i2.bindFramebuffer(e2.FRAMEBUFFER, null);
    }
    function X2(t2, n3, i3) {
      if (e2.bindRenderbuffer(e2.RENDERBUFFER, t2), n3.depthBuffer) {
        const r3 = n3.depthTexture, a3 = r3 && r3.isDepthTexture ? r3.type : null, o3 = C2(n3.stencilBuffer, a3), s3 = n3.stencilBuffer ? e2.DEPTH_STENCIL_ATTACHMENT : e2.DEPTH_ATTACHMENT, c3 = $2(n3);
        Q2(n3) ? l2.renderbufferStorageMultisampleEXT(e2.RENDERBUFFER, c3, o3, n3.width, n3.height) : i3 ? e2.renderbufferStorageMultisample(e2.RENDERBUFFER, c3, o3, n3.width, n3.height) : e2.renderbufferStorage(e2.RENDERBUFFER, o3, n3.width, n3.height), e2.framebufferRenderbuffer(e2.FRAMEBUFFER, s3, e2.RENDERBUFFER, t2);
      } else {
        const t3 = n3.textures;
        for (let r3 = 0; r3 < t3.length; r3++) {
          const a3 = t3[r3], s3 = o2.convert(a3.format, a3.colorSpace), c3 = o2.convert(a3.type), d3 = b2(a3.internalFormat, s3, c3, a3.colorSpace), u3 = $2(n3);
          i3 && false === Q2(n3) ? e2.renderbufferStorageMultisample(e2.RENDERBUFFER, u3, d3, n3.width, n3.height) : Q2(n3) ? l2.renderbufferStorageMultisampleEXT(e2.RENDERBUFFER, u3, d3, n3.width, n3.height) : e2.renderbufferStorage(e2.RENDERBUFFER, d3, n3.width, n3.height);
        }
      }
      e2.bindRenderbuffer(e2.RENDERBUFFER, null);
    }
    function Y2(t2, n3) {
      if (n3 && n3.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
      if (i2.bindFramebuffer(e2.FRAMEBUFFER, t2), !n3.depthTexture || !n3.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
      const a3 = r2.get(n3.depthTexture);
      a3.__renderTarget = n3, a3.__webglTexture && n3.depthTexture.image.width === n3.width && n3.depthTexture.image.height === n3.height || (n3.depthTexture.image.width = n3.width, n3.depthTexture.image.height = n3.height, n3.depthTexture.needsUpdate = true), y2(n3.depthTexture, 0);
      const o3 = a3.__webglTexture, s3 = $2(n3);
      if (n3.depthTexture.format === Wt) Q2(n3) ? l2.framebufferTexture2DMultisampleEXT(e2.FRAMEBUFFER, e2.DEPTH_ATTACHMENT, e2.TEXTURE_2D, o3, 0, s3) : e2.framebufferTexture2D(e2.FRAMEBUFFER, e2.DEPTH_ATTACHMENT, e2.TEXTURE_2D, o3, 0);
      else {
        if (n3.depthTexture.format !== Ut) throw new Error("Unknown depthTexture format");
        Q2(n3) ? l2.framebufferTexture2DMultisampleEXT(e2.FRAMEBUFFER, e2.DEPTH_STENCIL_ATTACHMENT, e2.TEXTURE_2D, o3, 0, s3) : e2.framebufferTexture2D(e2.FRAMEBUFFER, e2.DEPTH_STENCIL_ATTACHMENT, e2.TEXTURE_2D, o3, 0);
      }
    }
    function K2(t2) {
      const n3 = r2.get(t2), a3 = true === t2.isWebGLCubeRenderTarget;
      if (n3.__boundDepthTexture !== t2.depthTexture) {
        const e3 = t2.depthTexture;
        if (n3.__depthDisposeCallback && n3.__depthDisposeCallback(), e3) {
          const t3 = () => {
            delete n3.__boundDepthTexture, delete n3.__depthDisposeCallback, e3.removeEventListener("dispose", t3);
          };
          e3.addEventListener("dispose", t3), n3.__depthDisposeCallback = t3;
        }
        n3.__boundDepthTexture = e3;
      }
      if (t2.depthTexture && !n3.__autoAllocateDepthBuffer) {
        if (a3) throw new Error("target.depthTexture not supported in Cube render targets");
        const e3 = t2.texture.mipmaps;
        e3 && e3.length > 0 ? Y2(n3.__webglFramebuffer[0], t2) : Y2(n3.__webglFramebuffer, t2);
      } else if (a3) {
        n3.__webglDepthbuffer = [];
        for (let r3 = 0; r3 < 6; r3++) if (i2.bindFramebuffer(e2.FRAMEBUFFER, n3.__webglFramebuffer[r3]), void 0 === n3.__webglDepthbuffer[r3]) n3.__webglDepthbuffer[r3] = e2.createRenderbuffer(), X2(n3.__webglDepthbuffer[r3], t2, false);
        else {
          const i3 = t2.stencilBuffer ? e2.DEPTH_STENCIL_ATTACHMENT : e2.DEPTH_ATTACHMENT, a4 = n3.__webglDepthbuffer[r3];
          e2.bindRenderbuffer(e2.RENDERBUFFER, a4), e2.framebufferRenderbuffer(e2.FRAMEBUFFER, i3, e2.RENDERBUFFER, a4);
        }
      } else {
        const r3 = t2.texture.mipmaps;
        if (r3 && r3.length > 0 ? i2.bindFramebuffer(e2.FRAMEBUFFER, n3.__webglFramebuffer[0]) : i2.bindFramebuffer(e2.FRAMEBUFFER, n3.__webglFramebuffer), void 0 === n3.__webglDepthbuffer) n3.__webglDepthbuffer = e2.createRenderbuffer(), X2(n3.__webglDepthbuffer, t2, false);
        else {
          const i3 = t2.stencilBuffer ? e2.DEPTH_STENCIL_ATTACHMENT : e2.DEPTH_ATTACHMENT, r4 = n3.__webglDepthbuffer;
          e2.bindRenderbuffer(e2.RENDERBUFFER, r4), e2.framebufferRenderbuffer(e2.FRAMEBUFFER, i3, e2.RENDERBUFFER, r4);
        }
      }
      i2.bindFramebuffer(e2.FRAMEBUFFER, null);
    }
    const q2 = [], Z2 = [];
    function $2(e3) {
      return Math.min(a2.maxSamples, e3.samples);
    }
    function Q2(e3) {
      const t2 = r2.get(e3);
      return e3.samples > 0 && true === n2.has("WEBGL_multisampled_render_to_texture") && false !== t2.__useRenderToTexture;
    }
    function J2(e3, t2) {
      const n3 = e3.colorSpace, i3 = e3.format, r3 = e3.type;
      return true === e3.isCompressedTexture || true === e3.isVideoTexture || n3 !== Ge && n3 !== Ze && (ws.getTransfer(n3) === Qe ? i3 === Dt && r3 === Tt || Hi("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : Gi("WebGLTextures: Unsupported texture color space:", n3)), t2;
    }
    function ee2(e3) {
      return "undefined" != typeof HTMLImageElement && e3 instanceof HTMLImageElement ? (d2.width = e3.naturalWidth || e3.width, d2.height = e3.naturalHeight || e3.height) : "undefined" != typeof VideoFrame && e3 instanceof VideoFrame ? (d2.width = e3.displayWidth, d2.height = e3.displayHeight) : (d2.width = e3.width, d2.height = e3.height), d2;
    }
    this.allocateTextureUnit = function() {
      const e3 = w2;
      return e3 >= a2.maxTextures && Hi("WebGLTextures: Trying to use " + e3 + " texture units while this GPU supports only " + a2.maxTextures), w2 += 1, e3;
    }, this.resetTextureUnits = function() {
      w2 = 0;
    }, this.setTexture2D = y2, this.setTexture2DArray = function(t2, n3) {
      const a3 = r2.get(t2);
      false === t2.isRenderTargetTexture && t2.version > 0 && a3.__version !== t2.version ? k2(a3, t2, n3) : (t2.isExternalTexture && (a3.__webglTexture = t2.sourceTexture ? t2.sourceTexture : null), i2.bindTexture(e2.TEXTURE_2D_ARRAY, a3.__webglTexture, e2.TEXTURE0 + n3));
    }, this.setTexture3D = function(t2, n3) {
      const a3 = r2.get(t2);
      false === t2.isRenderTargetTexture && t2.version > 0 && a3.__version !== t2.version ? k2(a3, t2, n3) : i2.bindTexture(e2.TEXTURE_3D, a3.__webglTexture, e2.TEXTURE0 + n3);
    }, this.setTextureCube = function(t2, n3) {
      const s3 = r2.get(t2);
      t2.version > 0 && s3.__version !== t2.version ? (function(t3, n4, s4) {
        if (6 !== n4.image.length) return;
        const l3 = V2(t3, n4), c3 = n4.source;
        i2.bindTexture(e2.TEXTURE_CUBE_MAP, t3.__webglTexture, e2.TEXTURE0 + s4);
        const d3 = r2.get(c3);
        if (c3.version !== d3.__version || true === l3) {
          i2.activeTexture(e2.TEXTURE0 + s4);
          const t4 = ws.getPrimaries(ws.workingColorSpace), r3 = n4.colorSpace === Ze ? null : ws.getPrimaries(n4.colorSpace), u3 = n4.colorSpace === Ze || t4 === r3 ? e2.NONE : e2.BROWSER_DEFAULT_WEBGL;
          e2.pixelStorei(e2.UNPACK_FLIP_Y_WEBGL, n4.flipY), e2.pixelStorei(e2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n4.premultiplyAlpha), e2.pixelStorei(e2.UNPACK_ALIGNMENT, n4.unpackAlignment), e2.pixelStorei(e2.UNPACK_COLORSPACE_CONVERSION_WEBGL, u3);
          const f3 = n4.isCompressedTexture || n4.image[0].isCompressedTexture, m2 = n4.image[0] && n4.image[0].isDataTexture, h3 = [];
          for (let e3 = 0; e3 < 6; e3++) h3[e3] = f3 || m2 ? m2 ? n4.image[e3].image : n4.image[e3] : v2(n4.image[e3], true, a2.maxCubemapSize), h3[e3] = J2(n4, h3[e3]);
          const _3 = h3[0], g3 = o2.convert(n4.format, n4.colorSpace), T2 = o2.convert(n4.type), M2 = b2(n4.internalFormat, g3, T2, n4.colorSpace), R3 = true !== n4.isVideoTexture, C3 = void 0 === d3.__version || true === l3, P3 = c3.dataReady;
          let U3, D3 = L2(n4, _3);
          if (B2(e2.TEXTURE_CUBE_MAP, n4), f3) {
            R3 && C3 && i2.texStorage2D(e2.TEXTURE_CUBE_MAP, D3, M2, _3.width, _3.height);
            for (let t5 = 0; t5 < 6; t5++) {
              U3 = h3[t5].mipmaps;
              for (let r4 = 0; r4 < U3.length; r4++) {
                const a3 = U3[r4];
                n4.format !== Dt ? null !== g3 ? R3 ? P3 && i2.compressedTexSubImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, r4, 0, 0, a3.width, a3.height, g3, a3.data) : i2.compressedTexImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, r4, M2, a3.width, a3.height, 0, a3.data) : Hi("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : R3 ? P3 && i2.texSubImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, r4, 0, 0, a3.width, a3.height, g3, T2, a3.data) : i2.texImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, r4, M2, a3.width, a3.height, 0, g3, T2, a3.data);
              }
            }
          } else {
            if (U3 = n4.mipmaps, R3 && C3) {
              U3.length > 0 && D3++;
              const t5 = ee2(h3[0]);
              i2.texStorage2D(e2.TEXTURE_CUBE_MAP, D3, M2, t5.width, t5.height);
            }
            for (let t5 = 0; t5 < 6; t5++) if (m2) {
              R3 ? P3 && i2.texSubImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, 0, 0, 0, h3[t5].width, h3[t5].height, g3, T2, h3[t5].data) : i2.texImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, 0, M2, h3[t5].width, h3[t5].height, 0, g3, T2, h3[t5].data);
              for (let n5 = 0; n5 < U3.length; n5++) {
                const r4 = U3[n5].image[t5].image;
                R3 ? P3 && i2.texSubImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, n5 + 1, 0, 0, r4.width, r4.height, g3, T2, r4.data) : i2.texImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, n5 + 1, M2, r4.width, r4.height, 0, g3, T2, r4.data);
              }
            } else {
              R3 ? P3 && i2.texSubImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, 0, 0, 0, g3, T2, h3[t5]) : i2.texImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, 0, M2, g3, T2, h3[t5]);
              for (let n5 = 0; n5 < U3.length; n5++) {
                const r4 = U3[n5];
                R3 ? P3 && i2.texSubImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, n5 + 1, 0, 0, g3, T2, r4.image[t5]) : i2.texImage2D(e2.TEXTURE_CUBE_MAP_POSITIVE_X + t5, n5 + 1, M2, g3, T2, r4.image[t5]);
              }
            }
          }
          S2(n4) && A2(e2.TEXTURE_CUBE_MAP), d3.__version = c3.version, n4.onUpdate && n4.onUpdate(n4);
        }
        t3.__version = n4.version;
      })(s3, t2, n3) : i2.bindTexture(e2.TEXTURE_CUBE_MAP, s3.__webglTexture, e2.TEXTURE0 + n3);
    }, this.rebindTextures = function(t2, n3, i3) {
      const a3 = r2.get(t2);
      void 0 !== n3 && W2(a3.__webglFramebuffer, t2, t2.texture, e2.COLOR_ATTACHMENT0, e2.TEXTURE_2D, 0), void 0 !== i3 && K2(t2);
    }, this.setupRenderTarget = function(t2) {
      const n3 = t2.texture, a3 = r2.get(t2), l3 = r2.get(n3);
      t2.addEventListener("dispose", U2);
      const c3 = t2.textures, d3 = true === t2.isWebGLCubeRenderTarget, u3 = c3.length > 1;
      if (u3 || (void 0 === l3.__webglTexture && (l3.__webglTexture = e2.createTexture()), l3.__version = n3.version, s2.memory.textures++), d3) {
        a3.__webglFramebuffer = [];
        for (let t3 = 0; t3 < 6; t3++) if (n3.mipmaps && n3.mipmaps.length > 0) {
          a3.__webglFramebuffer[t3] = [];
          for (let i3 = 0; i3 < n3.mipmaps.length; i3++) a3.__webglFramebuffer[t3][i3] = e2.createFramebuffer();
        } else a3.__webglFramebuffer[t3] = e2.createFramebuffer();
      } else {
        if (n3.mipmaps && n3.mipmaps.length > 0) {
          a3.__webglFramebuffer = [];
          for (let t3 = 0; t3 < n3.mipmaps.length; t3++) a3.__webglFramebuffer[t3] = e2.createFramebuffer();
        } else a3.__webglFramebuffer = e2.createFramebuffer();
        if (u3) for (let t3 = 0, n4 = c3.length; t3 < n4; t3++) {
          const n5 = r2.get(c3[t3]);
          void 0 === n5.__webglTexture && (n5.__webglTexture = e2.createTexture(), s2.memory.textures++);
        }
        if (t2.samples > 0 && false === Q2(t2)) {
          a3.__webglMultisampledFramebuffer = e2.createFramebuffer(), a3.__webglColorRenderbuffer = [], i2.bindFramebuffer(e2.FRAMEBUFFER, a3.__webglMultisampledFramebuffer);
          for (let n4 = 0; n4 < c3.length; n4++) {
            const i3 = c3[n4];
            a3.__webglColorRenderbuffer[n4] = e2.createRenderbuffer(), e2.bindRenderbuffer(e2.RENDERBUFFER, a3.__webglColorRenderbuffer[n4]);
            const r3 = o2.convert(i3.format, i3.colorSpace), s3 = o2.convert(i3.type), l4 = b2(i3.internalFormat, r3, s3, i3.colorSpace, true === t2.isXRRenderTarget), d4 = $2(t2);
            e2.renderbufferStorageMultisample(e2.RENDERBUFFER, d4, l4, t2.width, t2.height), e2.framebufferRenderbuffer(e2.FRAMEBUFFER, e2.COLOR_ATTACHMENT0 + n4, e2.RENDERBUFFER, a3.__webglColorRenderbuffer[n4]);
          }
          e2.bindRenderbuffer(e2.RENDERBUFFER, null), t2.depthBuffer && (a3.__webglDepthRenderbuffer = e2.createRenderbuffer(), X2(a3.__webglDepthRenderbuffer, t2, true)), i2.bindFramebuffer(e2.FRAMEBUFFER, null);
        }
      }
      if (d3) {
        i2.bindTexture(e2.TEXTURE_CUBE_MAP, l3.__webglTexture), B2(e2.TEXTURE_CUBE_MAP, n3);
        for (let i3 = 0; i3 < 6; i3++) if (n3.mipmaps && n3.mipmaps.length > 0) for (let r3 = 0; r3 < n3.mipmaps.length; r3++) W2(a3.__webglFramebuffer[i3][r3], t2, n3, e2.COLOR_ATTACHMENT0, e2.TEXTURE_CUBE_MAP_POSITIVE_X + i3, r3);
        else W2(a3.__webglFramebuffer[i3], t2, n3, e2.COLOR_ATTACHMENT0, e2.TEXTURE_CUBE_MAP_POSITIVE_X + i3, 0);
        S2(n3) && A2(e2.TEXTURE_CUBE_MAP), i2.unbindTexture();
      } else if (u3) {
        for (let n4 = 0, o3 = c3.length; n4 < o3; n4++) {
          const o4 = c3[n4], s3 = r2.get(o4);
          let l4 = e2.TEXTURE_2D;
          (t2.isWebGL3DRenderTarget || t2.isWebGLArrayRenderTarget) && (l4 = t2.isWebGL3DRenderTarget ? e2.TEXTURE_3D : e2.TEXTURE_2D_ARRAY), i2.bindTexture(l4, s3.__webglTexture), B2(l4, o4), W2(a3.__webglFramebuffer, t2, o4, e2.COLOR_ATTACHMENT0 + n4, l4, 0), S2(o4) && A2(l4);
        }
        i2.unbindTexture();
      } else {
        let r3 = e2.TEXTURE_2D;
        if ((t2.isWebGL3DRenderTarget || t2.isWebGLArrayRenderTarget) && (r3 = t2.isWebGL3DRenderTarget ? e2.TEXTURE_3D : e2.TEXTURE_2D_ARRAY), i2.bindTexture(r3, l3.__webglTexture), B2(r3, n3), n3.mipmaps && n3.mipmaps.length > 0) for (let i3 = 0; i3 < n3.mipmaps.length; i3++) W2(a3.__webglFramebuffer[i3], t2, n3, e2.COLOR_ATTACHMENT0, r3, i3);
        else W2(a3.__webglFramebuffer, t2, n3, e2.COLOR_ATTACHMENT0, r3, 0);
        S2(n3) && A2(r3), i2.unbindTexture();
      }
      t2.depthBuffer && K2(t2);
    }, this.updateRenderTargetMipmap = function(e3) {
      const t2 = e3.textures;
      for (let n3 = 0, a3 = t2.length; n3 < a3; n3++) {
        const a4 = t2[n3];
        if (S2(a4)) {
          const t3 = R2(e3), n4 = r2.get(a4).__webglTexture;
          i2.bindTexture(t3, n4), A2(t3), i2.unbindTexture();
        }
      }
    }, this.updateMultisampleRenderTarget = function(t2) {
      if (t2.samples > 0) {
        if (false === Q2(t2)) {
          const n3 = t2.textures, a3 = t2.width, o3 = t2.height;
          let s3 = e2.COLOR_BUFFER_BIT;
          const l3 = t2.stencilBuffer ? e2.DEPTH_STENCIL_ATTACHMENT : e2.DEPTH_ATTACHMENT, d3 = r2.get(t2), u3 = n3.length > 1;
          if (u3) for (let t3 = 0; t3 < n3.length; t3++) i2.bindFramebuffer(e2.FRAMEBUFFER, d3.__webglMultisampledFramebuffer), e2.framebufferRenderbuffer(e2.FRAMEBUFFER, e2.COLOR_ATTACHMENT0 + t3, e2.RENDERBUFFER, null), i2.bindFramebuffer(e2.FRAMEBUFFER, d3.__webglFramebuffer), e2.framebufferTexture2D(e2.DRAW_FRAMEBUFFER, e2.COLOR_ATTACHMENT0 + t3, e2.TEXTURE_2D, null, 0);
          i2.bindFramebuffer(e2.READ_FRAMEBUFFER, d3.__webglMultisampledFramebuffer);
          const f3 = t2.texture.mipmaps;
          f3 && f3.length > 0 ? i2.bindFramebuffer(e2.DRAW_FRAMEBUFFER, d3.__webglFramebuffer[0]) : i2.bindFramebuffer(e2.DRAW_FRAMEBUFFER, d3.__webglFramebuffer);
          for (let i3 = 0; i3 < n3.length; i3++) {
            if (t2.resolveDepthBuffer && (t2.depthBuffer && (s3 |= e2.DEPTH_BUFFER_BIT), t2.stencilBuffer && t2.resolveStencilBuffer && (s3 |= e2.STENCIL_BUFFER_BIT)), u3) {
              e2.framebufferRenderbuffer(e2.READ_FRAMEBUFFER, e2.COLOR_ATTACHMENT0, e2.RENDERBUFFER, d3.__webglColorRenderbuffer[i3]);
              const t3 = r2.get(n3[i3]).__webglTexture;
              e2.framebufferTexture2D(e2.DRAW_FRAMEBUFFER, e2.COLOR_ATTACHMENT0, e2.TEXTURE_2D, t3, 0);
            }
            e2.blitFramebuffer(0, 0, a3, o3, 0, 0, a3, o3, s3, e2.NEAREST), true === c2 && (q2.length = 0, Z2.length = 0, q2.push(e2.COLOR_ATTACHMENT0 + i3), t2.depthBuffer && false === t2.resolveDepthBuffer && (q2.push(l3), Z2.push(l3), e2.invalidateFramebuffer(e2.DRAW_FRAMEBUFFER, Z2)), e2.invalidateFramebuffer(e2.READ_FRAMEBUFFER, q2));
          }
          if (i2.bindFramebuffer(e2.READ_FRAMEBUFFER, null), i2.bindFramebuffer(e2.DRAW_FRAMEBUFFER, null), u3) for (let t3 = 0; t3 < n3.length; t3++) {
            i2.bindFramebuffer(e2.FRAMEBUFFER, d3.__webglMultisampledFramebuffer), e2.framebufferRenderbuffer(e2.FRAMEBUFFER, e2.COLOR_ATTACHMENT0 + t3, e2.RENDERBUFFER, d3.__webglColorRenderbuffer[t3]);
            const a4 = r2.get(n3[t3]).__webglTexture;
            i2.bindFramebuffer(e2.FRAMEBUFFER, d3.__webglFramebuffer), e2.framebufferTexture2D(e2.DRAW_FRAMEBUFFER, e2.COLOR_ATTACHMENT0 + t3, e2.TEXTURE_2D, a4, 0);
          }
          i2.bindFramebuffer(e2.DRAW_FRAMEBUFFER, d3.__webglMultisampledFramebuffer);
        } else if (t2.depthBuffer && false === t2.resolveDepthBuffer && c2) {
          const n3 = t2.stencilBuffer ? e2.DEPTH_STENCIL_ATTACHMENT : e2.DEPTH_ATTACHMENT;
          e2.invalidateFramebuffer(e2.DRAW_FRAMEBUFFER, [n3]);
        }
      }
    }, this.setupDepthRenderbuffer = K2, this.setupFrameBufferTexture = W2, this.useMultisampledRTT = Q2;
  }
  function ia2(e2, t2) {
    return { convert: function(n2, i2 = Ze) {
      let r2;
      const a2 = ws.getTransfer(i2);
      if (n2 === Tt) return e2.UNSIGNED_BYTE;
      if (n2 === Rt) return e2.UNSIGNED_SHORT_4_4_4_4;
      if (n2 === Nt) return e2.UNSIGNED_SHORT_5_5_5_1;
      if (n2 === Ft) return e2.UNSIGNED_INT_5_9_9_9_REV;
      if (n2 === Lt) return e2.UNSIGNED_INT_10F_11F_11F_REV;
      if (n2 === zt) return e2.BYTE;
      if (n2 === Ct) return e2.SHORT;
      if (n2 === It) return e2.UNSIGNED_SHORT;
      if (n2 === Bt) return e2.INT;
      if (n2 === kt) return e2.UNSIGNED_INT;
      if (n2 === Pt) return e2.FLOAT;
      if (n2 === Ot) return e2.HALF_FLOAT;
      if (n2 === Et) return e2.ALPHA;
      if (n2 === jt) return e2.RGB;
      if (n2 === Dt) return e2.RGBA;
      if (n2 === Wt) return e2.DEPTH_COMPONENT;
      if (n2 === Ut) return e2.DEPTH_STENCIL;
      if (n2 === qt) return e2.RED;
      if (n2 === Jt) return e2.RED_INTEGER;
      if (n2 === Xt) return e2.RG;
      if (n2 === Yt) return e2.RG_INTEGER;
      if (n2 === Ht) return e2.RGBA_INTEGER;
      if (n2 === Gt || n2 === $t || n2 === Qt || n2 === Kt) if (a2 === Qe) {
        if (r2 = t2.get("WEBGL_compressed_texture_s3tc_srgb"), null === r2) return null;
        if (n2 === Gt) return r2.COMPRESSED_SRGB_S3TC_DXT1_EXT;
        if (n2 === $t) return r2.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
        if (n2 === Qt) return r2.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
        if (n2 === Kt) return r2.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
      } else {
        if (r2 = t2.get("WEBGL_compressed_texture_s3tc"), null === r2) return null;
        if (n2 === Gt) return r2.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n2 === $t) return r2.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n2 === Qt) return r2.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n2 === Kt) return r2.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      }
      if (n2 === te || n2 === ee || n2 === ie || n2 === se) {
        if (r2 = t2.get("WEBGL_compressed_texture_pvrtc"), null === r2) return null;
        if (n2 === te) return r2.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n2 === ee) return r2.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n2 === ie) return r2.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n2 === se) return r2.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      }
      if (n2 === re || n2 === ne || n2 === ae) {
        if (r2 = t2.get("WEBGL_compressed_texture_etc"), null === r2) return null;
        if (n2 === re || n2 === ne) return a2 === Qe ? r2.COMPRESSED_SRGB8_ETC2 : r2.COMPRESSED_RGB8_ETC2;
        if (n2 === ae) return a2 === Qe ? r2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r2.COMPRESSED_RGBA8_ETC2_EAC;
      }
      if (n2 === oe || n2 === he || n2 === le || n2 === ce || n2 === ue || n2 === de || n2 === pe || n2 === me || n2 === ye || n2 === ge || n2 === fe || n2 === xe || n2 === be || n2 === ve) {
        if (r2 = t2.get("WEBGL_compressed_texture_astc"), null === r2) return null;
        if (n2 === oe) return a2 === Qe ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r2.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n2 === he) return a2 === Qe ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r2.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n2 === le) return a2 === Qe ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r2.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n2 === ce) return a2 === Qe ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r2.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n2 === ue) return a2 === Qe ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r2.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n2 === de) return a2 === Qe ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r2.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n2 === pe) return a2 === Qe ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r2.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n2 === me) return a2 === Qe ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r2.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n2 === ye) return a2 === Qe ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r2.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n2 === ge) return a2 === Qe ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r2.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n2 === fe) return a2 === Qe ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r2.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n2 === xe) return a2 === Qe ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r2.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n2 === be) return a2 === Qe ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r2.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n2 === ve) return a2 === Qe ? r2.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r2.COMPRESSED_RGBA_ASTC_12x12_KHR;
      }
      if (n2 === we || n2 === Me || n2 === Se) {
        if (r2 = t2.get("EXT_texture_compression_bptc"), null === r2) return null;
        if (n2 === we) return a2 === Qe ? r2.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r2.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n2 === Me) return r2.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n2 === Se) return r2.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      }
      if (n2 === _e || n2 === Ae || n2 === Te || n2 === ze) {
        if (r2 = t2.get("EXT_texture_compression_rgtc"), null === r2) return null;
        if (n2 === _e) return r2.COMPRESSED_RED_RGTC1_EXT;
        if (n2 === Ae) return r2.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n2 === Te) return r2.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n2 === ze) return r2.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      }
      return n2 === Vt ? e2.UNSIGNED_INT_24_8 : void 0 !== e2[n2] ? e2[n2] : null;
    } };
  }
  var ra2 = class {
    constructor() {
      this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
    }
    init(e2, t2) {
      if (null === this.texture) {
        const n2 = new mh(e2.texture);
        e2.depthNear === t2.depthNear && e2.depthFar === t2.depthFar || (this.depthNear = e2.depthNear, this.depthFar = e2.depthFar), this.texture = n2;
      }
    }
    getMesh(e2) {
      if (null !== this.texture && null === this.mesh) {
        const t2 = e2.cameras[0].viewport, n2 = new ta({ vertexShader: "\nvoid main() {\n\n	gl_Position = vec4( position, 1.0 );\n\n}", fragmentShader: "\nuniform sampler2DArray depthColor;\nuniform float depthWidth;\nuniform float depthHeight;\n\nvoid main() {\n\n	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );\n\n	if ( coord.x >= 1.0 ) {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;\n\n	} else {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;\n\n	}\n\n}", uniforms: { depthColor: { value: this.texture }, depthWidth: { value: t2.z }, depthHeight: { value: t2.w } } });
        this.mesh = new Yn(new Bl(20, 20), n2);
      }
      return this.mesh;
    }
    reset() {
      this.texture = null, this.mesh = null;
    }
    getDepthTexture() {
      return this.texture;
    }
  };
  var aa2 = class extends Ki {
    constructor(e2, n2) {
      super();
      const i2 = this;
      let a2 = null, o2 = 1, s2 = null, l2 = "local-floor", c2 = 1, d2 = null, u2 = null, f2 = null, p2 = null, m2 = null, h2 = null;
      const _2 = "undefined" != typeof XRWebGLBinding, g2 = new ra2(), v2 = {}, S2 = n2.getContextAttributes();
      let M2 = null, A2 = null;
      const R2 = [], b2 = [], C2 = new us();
      let L2 = null;
      const P2 = new na();
      P2.viewport = new Ps();
      const U2 = new na();
      U2.viewport = new Ps();
      const D2 = [P2, U2], y2 = new gu();
      let I2 = null, N2 = null;
      function O2(e3) {
        const t2 = b2.indexOf(e3.inputSource);
        if (-1 === t2) return;
        const n3 = R2[t2];
        void 0 !== n3 && (n3.update(e3.inputSource, e3.frame, d2 || s2), n3.dispatchEvent({ type: e3.type, data: e3.inputSource }));
      }
      function B2() {
        a2.removeEventListener("select", O2), a2.removeEventListener("selectstart", O2), a2.removeEventListener("selectend", O2), a2.removeEventListener("squeeze", O2), a2.removeEventListener("squeezestart", O2), a2.removeEventListener("squeezeend", O2), a2.removeEventListener("end", B2), a2.removeEventListener("inputsourceschange", G2);
        for (let e3 = 0; e3 < R2.length; e3++) {
          const t2 = b2[e3];
          null !== t2 && (b2[e3] = null, R2[e3].disconnect(t2));
        }
        I2 = null, N2 = null, g2.reset();
        for (const e3 in v2) delete v2[e3];
        e2.setRenderTarget(M2), m2 = null, p2 = null, f2 = null, a2 = null, A2 = null, W2.stop(), i2.isPresenting = false, e2.setPixelRatio(L2), e2.setSize(C2.width, C2.height, false), i2.dispatchEvent({ type: "sessionend" });
      }
      function G2(e3) {
        for (let t2 = 0; t2 < e3.removed.length; t2++) {
          const n3 = e3.removed[t2], i3 = b2.indexOf(n3);
          i3 >= 0 && (b2[i3] = null, R2[i3].disconnect(n3));
        }
        for (let t2 = 0; t2 < e3.added.length; t2++) {
          const n3 = e3.added[t2];
          let i3 = b2.indexOf(n3);
          if (-1 === i3) {
            for (let e4 = 0; e4 < R2.length; e4++) {
              if (e4 >= b2.length) {
                b2.push(n3), i3 = e4;
                break;
              }
              if (null === b2[e4]) {
                b2[e4] = n3, i3 = e4;
                break;
              }
            }
            if (-1 === i3) break;
          }
          const r2 = R2[i3];
          r2 && r2.connect(n3);
        }
      }
      this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(e3) {
        let t2 = R2[e3];
        return void 0 === t2 && (t2 = new da(), R2[e3] = t2), t2.getTargetRaySpace();
      }, this.getControllerGrip = function(e3) {
        let t2 = R2[e3];
        return void 0 === t2 && (t2 = new da(), R2[e3] = t2), t2.getGripSpace();
      }, this.getHand = function(e3) {
        let t2 = R2[e3];
        return void 0 === t2 && (t2 = new da(), R2[e3] = t2), t2.getHandSpace();
      }, this.setFramebufferScaleFactor = function(e3) {
        o2 = e3, true === i2.isPresenting && Hi("WebXRManager: Cannot change framebuffer scale while presenting.");
      }, this.setReferenceSpaceType = function(e3) {
        l2 = e3, true === i2.isPresenting && Hi("WebXRManager: Cannot change reference space type while presenting.");
      }, this.getReferenceSpace = function() {
        return d2 || s2;
      }, this.setReferenceSpace = function(e3) {
        d2 = e3;
      }, this.getBaseLayer = function() {
        return null !== p2 ? p2 : m2;
      }, this.getBinding = function() {
        return null === f2 && _2 && (f2 = new XRWebGLBinding(a2, n2)), f2;
      }, this.getFrame = function() {
        return h2;
      }, this.getSession = function() {
        return a2;
      }, this.setSession = async function(t2) {
        if (a2 = t2, null !== a2) {
          M2 = e2.getRenderTarget(), a2.addEventListener("select", O2), a2.addEventListener("selectstart", O2), a2.addEventListener("selectend", O2), a2.addEventListener("squeeze", O2), a2.addEventListener("squeezestart", O2), a2.addEventListener("squeezeend", O2), a2.addEventListener("end", B2), a2.addEventListener("inputsourceschange", G2), true !== S2.xrCompatible && await n2.makeXRCompatible(), L2 = e2.getPixelRatio(), e2.getSize(C2);
          if (_2 && "createProjectionLayer" in XRWebGLBinding.prototype) {
            let t3 = null, i3 = null, r2 = null;
            S2.depth && (r2 = S2.stencil ? n2.DEPTH24_STENCIL8 : n2.DEPTH_COMPONENT24, t3 = S2.stencil ? Ut : Wt, i3 = S2.stencil ? Vt : kt);
            const s3 = { colorFormat: n2.RGBA8, depthFormat: r2, scaleFactor: o2 };
            f2 = this.getBinding(), p2 = f2.createProjectionLayer(s3), a2.updateRenderState({ layers: [p2] }), e2.setPixelRatio(1), e2.setSize(p2.textureWidth, p2.textureHeight, false), A2 = new Rs(p2.textureWidth, p2.textureHeight, { format: Dt, type: Tt, depthTexture: new ph(p2.textureWidth, p2.textureHeight, i3, void 0, void 0, void 0, void 0, void 0, void 0, t3), stencilBuffer: S2.stencil, colorSpace: e2.outputColorSpace, samples: S2.antialias ? 4 : 0, resolveDepthBuffer: false === p2.ignoreDepthValues, resolveStencilBuffer: false === p2.ignoreDepthValues });
          } else {
            const t3 = { antialias: S2.antialias, alpha: true, depth: S2.depth, stencil: S2.stencil, framebufferScaleFactor: o2 };
            m2 = new XRWebGLLayer(a2, n2, t3), a2.updateRenderState({ baseLayer: m2 }), e2.setPixelRatio(1), e2.setSize(m2.framebufferWidth, m2.framebufferHeight, false), A2 = new Rs(m2.framebufferWidth, m2.framebufferHeight, { format: Dt, type: Tt, colorSpace: e2.outputColorSpace, stencilBuffer: S2.stencil, resolveDepthBuffer: false === m2.ignoreDepthValues, resolveStencilBuffer: false === m2.ignoreDepthValues });
          }
          A2.isXRRenderTarget = true, this.setFoveation(c2), d2 = null, s2 = await a2.requestReferenceSpace(l2), W2.setContext(a2), W2.start(), i2.isPresenting = true, i2.dispatchEvent({ type: "sessionstart" });
        }
      }, this.getEnvironmentBlendMode = function() {
        if (null !== a2) return a2.environmentBlendMode;
      }, this.getDepthTexture = function() {
        return g2.getDepthTexture();
      };
      const H2 = new ps(), V2 = new ps();
      function z2(e3, t2) {
        null === t2 ? e3.matrixWorld.copy(e3.matrix) : e3.matrixWorld.multiplyMatrices(t2.matrixWorld, e3.matrix), e3.matrixWorldInverse.copy(e3.matrixWorld).invert();
      }
      this.updateCamera = function(e3) {
        if (null === a2) return;
        let t2 = e3.near, n3 = e3.far;
        null !== g2.texture && (g2.depthNear > 0 && (t2 = g2.depthNear), g2.depthFar > 0 && (n3 = g2.depthFar)), y2.near = U2.near = P2.near = t2, y2.far = U2.far = P2.far = n3, I2 === y2.near && N2 === y2.far || (a2.updateRenderState({ depthNear: y2.near, depthFar: y2.far }), I2 = y2.near, N2 = y2.far), y2.layers.mask = 6 | e3.layers.mask, P2.layers.mask = 3 & y2.layers.mask, U2.layers.mask = 5 & y2.layers.mask;
        const i3 = e3.parent, r2 = y2.cameras;
        z2(y2, i3);
        for (let e4 = 0; e4 < r2.length; e4++) z2(r2[e4], i3);
        2 === r2.length ? (function(e4, t3, n4) {
          H2.setFromMatrixPosition(t3.matrixWorld), V2.setFromMatrixPosition(n4.matrixWorld);
          const i4 = H2.distanceTo(V2), r3 = t3.projectionMatrix.elements, a3 = n4.projectionMatrix.elements, o3 = r3[14] / (r3[10] - 1), s3 = r3[14] / (r3[10] + 1), l3 = (r3[9] + 1) / r3[5], c3 = (r3[9] - 1) / r3[5], d3 = (r3[8] - 1) / r3[0], u3 = (a3[8] + 1) / a3[0], f3 = o3 * d3, p3 = o3 * u3, m3 = i4 / (-d3 + u3), h3 = m3 * -d3;
          if (t3.matrixWorld.decompose(e4.position, e4.quaternion, e4.scale), e4.translateX(h3), e4.translateZ(m3), e4.matrixWorld.compose(e4.position, e4.quaternion, e4.scale), e4.matrixWorldInverse.copy(e4.matrixWorld).invert(), -1 === r3[10]) e4.projectionMatrix.copy(t3.projectionMatrix), e4.projectionMatrixInverse.copy(t3.projectionMatrixInverse);
          else {
            const t4 = o3 + m3, n5 = s3 + m3, r4 = f3 - h3, a4 = p3 + (i4 - h3), d4 = l3 * s3 / n5 * t4, u4 = c3 * s3 / n5 * t4;
            e4.projectionMatrix.makePerspective(r4, a4, d4, u4, t4, n5), e4.projectionMatrixInverse.copy(e4.projectionMatrix).invert();
          }
        })(y2, P2, U2) : y2.projectionMatrix.copy(P2.projectionMatrix), (function(e4, t3, n4) {
          null === n4 ? e4.matrix.copy(t3.matrixWorld) : (e4.matrix.copy(n4.matrixWorld), e4.matrix.invert(), e4.matrix.multiply(t3.matrixWorld));
          e4.matrix.decompose(e4.position, e4.quaternion, e4.scale), e4.updateMatrixWorld(true), e4.projectionMatrix.copy(t3.projectionMatrix), e4.projectionMatrixInverse.copy(t3.projectionMatrixInverse), e4.isPerspectiveCamera && (e4.fov = 2 * ss * Math.atan(1 / e4.projectionMatrix.elements[5]), e4.zoom = 1);
        })(e3, y2, i3);
      }, this.getCamera = function() {
        return y2;
      }, this.getFoveation = function() {
        if (null !== p2 || null !== m2) return c2;
      }, this.setFoveation = function(e3) {
        c2 = e3, null !== p2 && (p2.fixedFoveation = e3), null !== m2 && void 0 !== m2.fixedFoveation && (m2.fixedFoveation = e3);
      }, this.hasDepthSensing = function() {
        return null !== g2.texture;
      }, this.getDepthSensingMesh = function() {
        return g2.getMesh(y2);
      }, this.getCameraTexture = function(e3) {
        return v2[e3];
      };
      let k2 = null;
      const W2 = new Dn2();
      W2.setAnimationLoop(function(t2, n3) {
        if (u2 = n3.getViewerPose(d2 || s2), h2 = n3, null !== u2) {
          const t3 = u2.views;
          null !== m2 && (e2.setRenderTargetFramebuffer(A2, m2.framebuffer), e2.setRenderTarget(A2));
          let n4 = false;
          t3.length !== y2.cameras.length && (y2.cameras.length = 0, n4 = true);
          for (let i3 = 0; i3 < t3.length; i3++) {
            const r3 = t3[i3];
            let a3 = null;
            if (null !== m2) a3 = m2.getViewport(r3);
            else {
              const t4 = f2.getViewSubImage(p2, r3);
              a3 = t4.viewport, 0 === i3 && (e2.setRenderTargetTextures(A2, t4.colorTexture, t4.depthStencilTexture), e2.setRenderTarget(A2));
            }
            let o3 = D2[i3];
            void 0 === o3 && (o3 = new na(), o3.layers.enable(i3), o3.viewport = new Ps(), D2[i3] = o3), o3.matrix.fromArray(r3.transform.matrix), o3.matrix.decompose(o3.position, o3.quaternion, o3.scale), o3.projectionMatrix.fromArray(r3.projectionMatrix), o3.projectionMatrixInverse.copy(o3.projectionMatrix).invert(), o3.viewport.set(a3.x, a3.y, a3.width, a3.height), 0 === i3 && (y2.matrix.copy(o3.matrix), y2.matrix.decompose(y2.position, y2.quaternion, y2.scale)), true === n4 && y2.cameras.push(o3);
          }
          const r2 = a2.enabledFeatures;
          if (r2 && r2.includes("depth-sensing") && "gpu-optimized" == a2.depthUsage && _2) {
            f2 = i2.getBinding();
            const e3 = f2.getDepthInformation(t3[0]);
            e3 && e3.isValid && e3.texture && g2.init(e3, a2.renderState);
          }
          if (r2 && r2.includes("camera-access") && _2) {
            e2.state.unbindTexture(), f2 = i2.getBinding();
            for (let e3 = 0; e3 < t3.length; e3++) {
              const n5 = t3[e3].camera;
              if (n5) {
                let e4 = v2[n5];
                e4 || (e4 = new mh(), v2[n5] = e4);
                const t4 = f2.getCameraImage(n5);
                e4.sourceTexture = t4;
              }
            }
          }
        }
        for (let e3 = 0; e3 < R2.length; e3++) {
          const t3 = b2[e3], i3 = R2[e3];
          null !== t3 && void 0 !== i3 && i3.update(t3, n3, d2 || s2);
        }
        k2 && k2(t2, n3), n3.detectedPlanes && i2.dispatchEvent({ type: "planesdetected", data: n3 }), h2 = null;
      }), this.setAnimationLoop = function(e3) {
        k2 = e3;
      }, this.dispose = function() {
      };
    }
  };
  var oa2 = new Mr();
  var sa2 = new dr();
  function la2(e2, t2) {
    function n2(e3, t3) {
      true === e3.matrixAutoUpdate && e3.updateMatrix(), t3.value.copy(e3.matrix);
    }
    function i2(e3, i3) {
      e3.opacity.value = i3.opacity, i3.color && e3.diffuse.value.copy(i3.color), i3.emissive && e3.emissive.value.copy(i3.emissive).multiplyScalar(i3.emissiveIntensity), i3.map && (e3.map.value = i3.map, n2(i3.map, e3.mapTransform)), i3.alphaMap && (e3.alphaMap.value = i3.alphaMap, n2(i3.alphaMap, e3.alphaMapTransform)), i3.bumpMap && (e3.bumpMap.value = i3.bumpMap, n2(i3.bumpMap, e3.bumpMapTransform), e3.bumpScale.value = i3.bumpScale, i3.side === d && (e3.bumpScale.value *= -1)), i3.normalMap && (e3.normalMap.value = i3.normalMap, n2(i3.normalMap, e3.normalMapTransform), e3.normalScale.value.copy(i3.normalScale), i3.side === d && e3.normalScale.value.negate()), i3.displacementMap && (e3.displacementMap.value = i3.displacementMap, n2(i3.displacementMap, e3.displacementMapTransform), e3.displacementScale.value = i3.displacementScale, e3.displacementBias.value = i3.displacementBias), i3.emissiveMap && (e3.emissiveMap.value = i3.emissiveMap, n2(i3.emissiveMap, e3.emissiveMapTransform)), i3.specularMap && (e3.specularMap.value = i3.specularMap, n2(i3.specularMap, e3.specularMapTransform)), i3.alphaTest > 0 && (e3.alphaTest.value = i3.alphaTest);
      const r2 = t2.get(i3), a2 = r2.envMap, o2 = r2.envMapRotation;
      a2 && (e3.envMap.value = a2, oa2.copy(o2), oa2.x *= -1, oa2.y *= -1, oa2.z *= -1, a2.isCubeTexture && false === a2.isRenderTargetTexture && (oa2.y *= -1, oa2.z *= -1), e3.envMapRotation.value.setFromMatrix4(sa2.makeRotationFromEuler(oa2)), e3.flipEnvMap.value = a2.isCubeTexture && false === a2.isRenderTargetTexture ? -1 : 1, e3.reflectivity.value = i3.reflectivity, e3.ior.value = i3.ior, e3.refractionRatio.value = i3.refractionRatio), i3.lightMap && (e3.lightMap.value = i3.lightMap, e3.lightMapIntensity.value = i3.lightMapIntensity, n2(i3.lightMap, e3.lightMapTransform)), i3.aoMap && (e3.aoMap.value = i3.aoMap, e3.aoMapIntensity.value = i3.aoMapIntensity, n2(i3.aoMap, e3.aoMapTransform));
    }
    return { refreshFogUniforms: function(t3, n3) {
      n3.color.getRGB(t3.fogColor.value, Qn(e2)), n3.isFog ? (t3.fogNear.value = n3.near, t3.fogFar.value = n3.far) : n3.isFogExp2 && (t3.fogDensity.value = n3.density);
    }, refreshMaterialUniforms: function(e3, r2, a2, o2, s2) {
      r2.isMeshBasicMaterial || r2.isMeshLambertMaterial ? i2(e3, r2) : r2.isMeshToonMaterial ? (i2(e3, r2), (function(e4, t3) {
        t3.gradientMap && (e4.gradientMap.value = t3.gradientMap);
      })(e3, r2)) : r2.isMeshPhongMaterial ? (i2(e3, r2), (function(e4, t3) {
        e4.specular.value.copy(t3.specular), e4.shininess.value = Math.max(t3.shininess, 1e-4);
      })(e3, r2)) : r2.isMeshStandardMaterial ? (i2(e3, r2), (function(e4, t3) {
        e4.metalness.value = t3.metalness, t3.metalnessMap && (e4.metalnessMap.value = t3.metalnessMap, n2(t3.metalnessMap, e4.metalnessMapTransform));
        e4.roughness.value = t3.roughness, t3.roughnessMap && (e4.roughnessMap.value = t3.roughnessMap, n2(t3.roughnessMap, e4.roughnessMapTransform));
        t3.envMap && (e4.envMapIntensity.value = t3.envMapIntensity);
      })(e3, r2), r2.isMeshPhysicalMaterial && (function(e4, t3, i3) {
        e4.ior.value = t3.ior, t3.sheen > 0 && (e4.sheenColor.value.copy(t3.sheenColor).multiplyScalar(t3.sheen), e4.sheenRoughness.value = t3.sheenRoughness, t3.sheenColorMap && (e4.sheenColorMap.value = t3.sheenColorMap, n2(t3.sheenColorMap, e4.sheenColorMapTransform)), t3.sheenRoughnessMap && (e4.sheenRoughnessMap.value = t3.sheenRoughnessMap, n2(t3.sheenRoughnessMap, e4.sheenRoughnessMapTransform)));
        t3.clearcoat > 0 && (e4.clearcoat.value = t3.clearcoat, e4.clearcoatRoughness.value = t3.clearcoatRoughness, t3.clearcoatMap && (e4.clearcoatMap.value = t3.clearcoatMap, n2(t3.clearcoatMap, e4.clearcoatMapTransform)), t3.clearcoatRoughnessMap && (e4.clearcoatRoughnessMap.value = t3.clearcoatRoughnessMap, n2(t3.clearcoatRoughnessMap, e4.clearcoatRoughnessMapTransform)), t3.clearcoatNormalMap && (e4.clearcoatNormalMap.value = t3.clearcoatNormalMap, n2(t3.clearcoatNormalMap, e4.clearcoatNormalMapTransform), e4.clearcoatNormalScale.value.copy(t3.clearcoatNormalScale), t3.side === d && e4.clearcoatNormalScale.value.negate()));
        t3.dispersion > 0 && (e4.dispersion.value = t3.dispersion);
        t3.iridescence > 0 && (e4.iridescence.value = t3.iridescence, e4.iridescenceIOR.value = t3.iridescenceIOR, e4.iridescenceThicknessMinimum.value = t3.iridescenceThicknessRange[0], e4.iridescenceThicknessMaximum.value = t3.iridescenceThicknessRange[1], t3.iridescenceMap && (e4.iridescenceMap.value = t3.iridescenceMap, n2(t3.iridescenceMap, e4.iridescenceMapTransform)), t3.iridescenceThicknessMap && (e4.iridescenceThicknessMap.value = t3.iridescenceThicknessMap, n2(t3.iridescenceThicknessMap, e4.iridescenceThicknessMapTransform)));
        t3.transmission > 0 && (e4.transmission.value = t3.transmission, e4.transmissionSamplerMap.value = i3.texture, e4.transmissionSamplerSize.value.set(i3.width, i3.height), t3.transmissionMap && (e4.transmissionMap.value = t3.transmissionMap, n2(t3.transmissionMap, e4.transmissionMapTransform)), e4.thickness.value = t3.thickness, t3.thicknessMap && (e4.thicknessMap.value = t3.thicknessMap, n2(t3.thicknessMap, e4.thicknessMapTransform)), e4.attenuationDistance.value = t3.attenuationDistance, e4.attenuationColor.value.copy(t3.attenuationColor));
        t3.anisotropy > 0 && (e4.anisotropyVector.value.set(t3.anisotropy * Math.cos(t3.anisotropyRotation), t3.anisotropy * Math.sin(t3.anisotropyRotation)), t3.anisotropyMap && (e4.anisotropyMap.value = t3.anisotropyMap, n2(t3.anisotropyMap, e4.anisotropyMapTransform)));
        e4.specularIntensity.value = t3.specularIntensity, e4.specularColor.value.copy(t3.specularColor), t3.specularColorMap && (e4.specularColorMap.value = t3.specularColorMap, n2(t3.specularColorMap, e4.specularColorMapTransform));
        t3.specularIntensityMap && (e4.specularIntensityMap.value = t3.specularIntensityMap, n2(t3.specularIntensityMap, e4.specularIntensityMapTransform));
      })(e3, r2, s2)) : r2.isMeshMatcapMaterial ? (i2(e3, r2), (function(e4, t3) {
        t3.matcap && (e4.matcap.value = t3.matcap);
      })(e3, r2)) : r2.isMeshDepthMaterial ? i2(e3, r2) : r2.isMeshDistanceMaterial ? (i2(e3, r2), (function(e4, n3) {
        const i3 = t2.get(n3).light;
        e4.referencePosition.value.setFromMatrixPosition(i3.matrixWorld), e4.nearDistance.value = i3.shadow.camera.near, e4.farDistance.value = i3.shadow.camera.far;
      })(e3, r2)) : r2.isMeshNormalMaterial ? i2(e3, r2) : r2.isLineBasicMaterial ? ((function(e4, t3) {
        e4.diffuse.value.copy(t3.color), e4.opacity.value = t3.opacity, t3.map && (e4.map.value = t3.map, n2(t3.map, e4.mapTransform));
      })(e3, r2), r2.isLineDashedMaterial && (function(e4, t3) {
        e4.dashSize.value = t3.dashSize, e4.totalSize.value = t3.dashSize + t3.gapSize, e4.scale.value = t3.scale;
      })(e3, r2)) : r2.isPointsMaterial ? (function(e4, t3, i3, r3) {
        e4.diffuse.value.copy(t3.color), e4.opacity.value = t3.opacity, e4.size.value = t3.size * i3, e4.scale.value = 0.5 * r3, t3.map && (e4.map.value = t3.map, n2(t3.map, e4.uvTransform));
        t3.alphaMap && (e4.alphaMap.value = t3.alphaMap, n2(t3.alphaMap, e4.alphaMapTransform));
        t3.alphaTest > 0 && (e4.alphaTest.value = t3.alphaTest);
      })(e3, r2, a2, o2) : r2.isSpriteMaterial ? (function(e4, t3) {
        e4.diffuse.value.copy(t3.color), e4.opacity.value = t3.opacity, e4.rotation.value = t3.rotation, t3.map && (e4.map.value = t3.map, n2(t3.map, e4.mapTransform));
        t3.alphaMap && (e4.alphaMap.value = t3.alphaMap, n2(t3.alphaMap, e4.alphaMapTransform));
        t3.alphaTest > 0 && (e4.alphaTest.value = t3.alphaTest);
      })(e3, r2) : r2.isShadowMaterial ? (e3.color.value.copy(r2.color), e3.opacity.value = r2.opacity) : r2.isShaderMaterial && (r2.uniformsNeedUpdate = false);
    } };
  }
  function ca2(e2, t2, n2, i2) {
    let r2 = {}, a2 = {}, o2 = [];
    const s2 = e2.getParameter(e2.MAX_UNIFORM_BUFFER_BINDINGS);
    function l2(e3, t3, n3, i3) {
      const r3 = e3.value, a3 = t3 + "_" + n3;
      if (void 0 === i3[a3]) return i3[a3] = "number" == typeof r3 || "boolean" == typeof r3 ? r3 : r3.clone(), true;
      {
        const e4 = i3[a3];
        if ("number" == typeof r3 || "boolean" == typeof r3) {
          if (e4 !== r3) return i3[a3] = r3, true;
        } else if (false === e4.equals(r3)) return e4.copy(r3), true;
      }
      return false;
    }
    function c2(e3) {
      const t3 = { boundary: 0, storage: 0 };
      return "number" == typeof e3 || "boolean" == typeof e3 ? (t3.boundary = 4, t3.storage = 4) : e3.isVector2 ? (t3.boundary = 8, t3.storage = 8) : e3.isVector3 || e3.isColor ? (t3.boundary = 16, t3.storage = 12) : e3.isVector4 ? (t3.boundary = 16, t3.storage = 16) : e3.isMatrix3 ? (t3.boundary = 48, t3.storage = 48) : e3.isMatrix4 ? (t3.boundary = 64, t3.storage = 64) : e3.isTexture ? Hi("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : Hi("WebGLRenderer: Unsupported uniform value type.", e3), t3;
    }
    function d2(t3) {
      const n3 = t3.target;
      n3.removeEventListener("dispose", d2);
      const i3 = o2.indexOf(n3.__bindingPointIndex);
      o2.splice(i3, 1), e2.deleteBuffer(r2[n3.id]), delete r2[n3.id], delete a2[n3.id];
    }
    return { bind: function(e3, t3) {
      const n3 = t3.program;
      i2.uniformBlockBinding(e3, n3);
    }, update: function(n3, u2) {
      let f2 = r2[n3.id];
      void 0 === f2 && (!(function(e3) {
        const t3 = e3.uniforms;
        let n4 = 0;
        const i3 = 16;
        for (let e4 = 0, r4 = t3.length; e4 < r4; e4++) {
          const r5 = Array.isArray(t3[e4]) ? t3[e4] : [t3[e4]];
          for (let e5 = 0, t4 = r5.length; e5 < t4; e5++) {
            const t5 = r5[e5], a3 = Array.isArray(t5.value) ? t5.value : [t5.value];
            for (let e6 = 0, r6 = a3.length; e6 < r6; e6++) {
              const r7 = c2(a3[e6]), o3 = n4 % i3, s3 = o3 % r7.boundary, l3 = o3 + s3;
              n4 += s3, 0 !== l3 && i3 - l3 < r7.storage && (n4 += i3 - l3), t5.__data = new Float32Array(r7.storage / Float32Array.BYTES_PER_ELEMENT), t5.__offset = n4, n4 += r7.storage;
            }
          }
        }
        const r3 = n4 % i3;
        r3 > 0 && (n4 += i3 - r3);
        e3.__size = n4, e3.__cache = {};
      })(n3), f2 = (function(t3) {
        const n4 = (function() {
          for (let e3 = 0; e3 < s2; e3++) if (-1 === o2.indexOf(e3)) return o2.push(e3), e3;
          return Gi("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
        })();
        t3.__bindingPointIndex = n4;
        const i3 = e2.createBuffer(), r3 = t3.__size, a3 = t3.usage;
        return e2.bindBuffer(e2.UNIFORM_BUFFER, i3), e2.bufferData(e2.UNIFORM_BUFFER, r3, a3), e2.bindBuffer(e2.UNIFORM_BUFFER, null), e2.bindBufferBase(e2.UNIFORM_BUFFER, n4, i3), i3;
      })(n3), r2[n3.id] = f2, n3.addEventListener("dispose", d2));
      const p2 = u2.program;
      i2.updateUBOMapping(n3, p2);
      const m2 = t2.render.frame;
      a2[n3.id] !== m2 && (!(function(t3) {
        const n4 = r2[t3.id], i3 = t3.uniforms, a3 = t3.__cache;
        e2.bindBuffer(e2.UNIFORM_BUFFER, n4);
        for (let t4 = 0, n5 = i3.length; t4 < n5; t4++) {
          const n6 = Array.isArray(i3[t4]) ? i3[t4] : [i3[t4]];
          for (let i4 = 0, r3 = n6.length; i4 < r3; i4++) {
            const r4 = n6[i4];
            if (true === l2(r4, t4, i4, a3)) {
              const t5 = r4.__offset, n7 = Array.isArray(r4.value) ? r4.value : [r4.value];
              let i5 = 0;
              for (let a4 = 0; a4 < n7.length; a4++) {
                const o3 = n7[a4], s3 = c2(o3);
                "number" == typeof o3 || "boolean" == typeof o3 ? (r4.__data[0] = o3, e2.bufferSubData(e2.UNIFORM_BUFFER, t5 + i5, r4.__data)) : o3.isMatrix3 ? (r4.__data[0] = o3.elements[0], r4.__data[1] = o3.elements[1], r4.__data[2] = o3.elements[2], r4.__data[3] = 0, r4.__data[4] = o3.elements[3], r4.__data[5] = o3.elements[4], r4.__data[6] = o3.elements[5], r4.__data[7] = 0, r4.__data[8] = o3.elements[6], r4.__data[9] = o3.elements[7], r4.__data[10] = o3.elements[8], r4.__data[11] = 0) : (o3.toArray(r4.__data, i5), i5 += s3.storage / Float32Array.BYTES_PER_ELEMENT);
              }
              e2.bufferSubData(e2.UNIFORM_BUFFER, t5, r4.__data);
            }
          }
        }
        e2.bindBuffer(e2.UNIFORM_BUFFER, null);
      })(n3), a2[n3.id] = m2);
    }, dispose: function() {
      for (const t3 in r2) e2.deleteBuffer(r2[t3]);
      o2 = [], r2 = {}, a2 = {};
    } };
  }
  var da2 = new Uint16Array([11481, 15204, 11534, 15171, 11808, 15015, 12385, 14843, 12894, 14716, 13396, 14600, 13693, 14483, 13976, 14366, 14237, 14171, 14405, 13961, 14511, 13770, 14605, 13598, 14687, 13444, 14760, 13305, 14822, 13066, 14876, 12857, 14923, 12675, 14963, 12517, 14997, 12379, 15025, 12230, 15049, 12023, 15070, 11843, 15086, 11687, 15100, 11551, 15111, 11433, 15120, 11330, 15127, 11217, 15132, 11060, 15135, 10922, 15138, 10801, 15139, 10695, 15139, 10600, 13012, 14923, 13020, 14917, 13064, 14886, 13176, 14800, 13349, 14666, 13513, 14526, 13724, 14398, 13960, 14230, 14200, 14020, 14383, 13827, 14488, 13651, 14583, 13491, 14667, 13348, 14740, 13132, 14803, 12908, 14856, 12713, 14901, 12542, 14938, 12394, 14968, 12241, 14992, 12017, 15010, 11822, 15024, 11654, 15034, 11507, 15041, 11380, 15044, 11269, 15044, 11081, 15042, 10913, 15037, 10764, 15031, 10635, 15023, 10520, 15014, 10419, 15003, 10330, 13657, 14676, 13658, 14673, 13670, 14660, 13698, 14622, 13750, 14547, 13834, 14442, 13956, 14317, 14112, 14093, 14291, 13889, 14407, 13704, 14499, 13538, 14586, 13389, 14664, 13201, 14733, 12966, 14792, 12758, 14842, 12577, 14882, 12418, 14915, 12272, 14940, 12033, 14959, 11826, 14972, 11646, 14980, 11490, 14983, 11355, 14983, 11212, 14979, 11008, 14971, 10830, 14961, 10675, 14950, 10540, 14936, 10420, 14923, 10315, 14909, 10204, 14894, 10041, 14089, 14460, 14090, 14459, 14096, 14452, 14112, 14431, 14141, 14388, 14186, 14305, 14252, 14130, 14341, 13941, 14399, 13756, 14467, 13585, 14539, 13430, 14610, 13272, 14677, 13026, 14737, 12808, 14790, 12617, 14833, 12449, 14869, 12303, 14896, 12065, 14916, 11845, 14929, 11655, 14937, 11490, 14939, 11347, 14936, 11184, 14930, 10970, 14921, 10783, 14912, 10621, 14900, 10480, 14885, 10356, 14867, 10247, 14848, 10062, 14827, 9894, 14805, 9745, 14400, 14208, 14400, 14206, 14402, 14198, 14406, 14174, 14415, 14122, 14427, 14035, 14444, 13913, 14469, 13767, 14504, 13613, 14548, 13463, 14598, 13324, 14651, 13082, 14704, 12858, 14752, 12658, 14795, 12483, 14831, 12330, 14860, 12106, 14881, 11875, 14895, 11675, 14903, 11501, 14905, 11351, 14903, 11178, 14900, 10953, 14892, 10757, 14880, 10589, 14865, 10442, 14847, 10313, 14827, 10162, 14805, 9965, 14782, 9792, 14757, 9642, 14731, 9507, 14562, 13883, 14562, 13883, 14563, 13877, 14566, 13862, 14570, 13830, 14576, 13773, 14584, 13689, 14595, 13582, 14613, 13461, 14637, 13336, 14668, 13120, 14704, 12897, 14741, 12695, 14776, 12516, 14808, 12358, 14835, 12150, 14856, 11910, 14870, 11701, 14878, 11519, 14882, 11361, 14884, 11187, 14880, 10951, 14871, 10748, 14858, 10572, 14842, 10418, 14823, 10286, 14801, 10099, 14777, 9897, 14751, 9722, 14725, 9567, 14696, 9430, 14666, 9309, 14702, 13604, 14702, 13604, 14702, 13600, 14703, 13591, 14705, 13570, 14707, 13533, 14709, 13477, 14712, 13400, 14718, 13305, 14727, 13106, 14743, 12907, 14762, 12716, 14784, 12539, 14807, 12380, 14827, 12190, 14844, 11943, 14855, 11727, 14863, 11539, 14870, 11376, 14871, 11204, 14868, 10960, 14858, 10748, 14845, 10565, 14829, 10406, 14809, 10269, 14786, 10058, 14761, 9852, 14734, 9671, 14705, 9512, 14674, 9374, 14641, 9253, 14608, 9076, 14821, 13366, 14821, 13365, 14821, 13364, 14821, 13358, 14821, 13344, 14821, 13320, 14819, 13252, 14817, 13145, 14815, 13011, 14814, 12858, 14817, 12698, 14823, 12539, 14832, 12389, 14841, 12214, 14850, 11968, 14856, 11750, 14861, 11558, 14866, 11390, 14867, 11226, 14862, 10972, 14853, 10754, 14840, 10565, 14823, 10401, 14803, 10259, 14780, 10032, 14754, 9820, 14725, 9635, 14694, 9473, 14661, 9333, 14627, 9203, 14593, 8988, 14557, 8798, 14923, 13014, 14922, 13014, 14922, 13012, 14922, 13004, 14920, 12987, 14919, 12957, 14915, 12907, 14909, 12834, 14902, 12738, 14894, 12623, 14888, 12498, 14883, 12370, 14880, 12203, 14878, 11970, 14875, 11759, 14873, 11569, 14874, 11401, 14872, 11243, 14865, 10986, 14855, 10762, 14842, 10568, 14825, 10401, 14804, 10255, 14781, 10017, 14754, 9799, 14725, 9611, 14692, 9445, 14658, 9301, 14623, 9139, 14587, 8920, 14548, 8729, 14509, 8562, 15008, 12672, 15008, 12672, 15008, 12671, 15007, 12667, 15005, 12656, 15001, 12637, 14997, 12605, 14989, 12556, 14978, 12490, 14966, 12407, 14953, 12313, 14940, 12136, 14927, 11934, 14914, 11742, 14903, 11563, 14896, 11401, 14889, 11247, 14879, 10992, 14866, 10767, 14851, 10570, 14833, 10400, 14812, 10252, 14789, 10007, 14761, 9784, 14731, 9592, 14698, 9424, 14663, 9279, 14627, 9088, 14588, 8868, 14548, 8676, 14508, 8508, 14467, 8360, 15080, 12386, 15080, 12386, 15079, 12385, 15078, 12383, 15076, 12378, 15072, 12367, 15066, 12347, 15057, 12315, 15045, 12253, 15030, 12138, 15012, 11998, 14993, 11845, 14972, 11685, 14951, 11530, 14935, 11383, 14920, 11228, 14904, 10981, 14887, 10762, 14870, 10567, 14850, 10397, 14827, 10248, 14803, 9997, 14774, 9771, 14743, 9578, 14710, 9407, 14674, 9259, 14637, 9048, 14596, 8826, 14555, 8632, 14514, 8464, 14471, 8317, 14427, 8182, 15139, 12008, 15139, 12008, 15138, 12008, 15137, 12007, 15135, 12003, 15130, 11990, 15124, 11969, 15115, 11929, 15102, 11872, 15086, 11794, 15064, 11693, 15041, 11581, 15013, 11459, 14987, 11336, 14966, 11170, 14944, 10944, 14921, 10738, 14898, 10552, 14875, 10387, 14850, 10239, 14824, 9983, 14794, 9758, 14762, 9563, 14728, 9392, 14692, 9244, 14653, 9014, 14611, 8791, 14569, 8597, 14526, 8427, 14481, 8281, 14436, 8110, 14391, 7885, 15188, 11617, 15188, 11617, 15187, 11617, 15186, 11618, 15183, 11617, 15179, 11612, 15173, 11601, 15163, 11581, 15150, 11546, 15133, 11495, 15110, 11427, 15083, 11346, 15051, 11246, 15024, 11057, 14996, 10868, 14967, 10687, 14938, 10517, 14911, 10362, 14882, 10206, 14853, 9956, 14821, 9737, 14787, 9543, 14752, 9375, 14715, 9228, 14675, 8980, 14632, 8760, 14589, 8565, 14544, 8395, 14498, 8248, 14451, 8049, 14404, 7824, 14357, 7630, 15228, 11298, 15228, 11298, 15227, 11299, 15226, 11301, 15223, 11303, 15219, 11302, 15213, 11299, 15204, 11290, 15191, 11271, 15174, 11217, 15150, 11129, 15119, 11015, 15087, 10886, 15057, 10744, 15024, 10599, 14990, 10455, 14957, 10318, 14924, 10143, 14891, 9911, 14856, 9701, 14820, 9516, 14782, 9352, 14744, 9200, 14703, 8946, 14659, 8725, 14615, 8533, 14568, 8366, 14521, 8220, 14472, 7992, 14423, 7770, 14374, 7578, 14315, 7408, 15260, 10819, 15260, 10819, 15259, 10822, 15258, 10826, 15256, 10832, 15251, 10836, 15246, 10841, 15237, 10838, 15225, 10821, 15207, 10788, 15183, 10734, 15151, 10660, 15120, 10571, 15087, 10469, 15049, 10359, 15012, 10249, 14974, 10041, 14937, 9837, 14900, 9647, 14860, 9475, 14820, 9320, 14779, 9147, 14736, 8902, 14691, 8688, 14646, 8499, 14598, 8335, 14549, 8189, 14499, 7940, 14448, 7720, 14397, 7529, 14347, 7363, 14256, 7218, 15285, 10410, 15285, 10411, 15285, 10413, 15284, 10418, 15282, 10425, 15278, 10434, 15272, 10442, 15264, 10449, 15252, 10445, 15235, 10433, 15210, 10403, 15179, 10358, 15149, 10301, 15113, 10218, 15073, 10059, 15033, 9894, 14991, 9726, 14951, 9565, 14909, 9413, 14865, 9273, 14822, 9073, 14777, 8845, 14730, 8641, 14682, 8459, 14633, 8300, 14583, 8129, 14531, 7883, 14479, 7670, 14426, 7482, 14373, 7321, 14305, 7176, 14201, 6939, 15305, 9939, 15305, 9940, 15305, 9945, 15304, 9955, 15302, 9967, 15298, 9989, 15293, 10010, 15286, 10033, 15274, 10044, 15258, 10045, 15233, 10022, 15205, 9975, 15174, 9903, 15136, 9808, 15095, 9697, 15053, 9578, 15009, 9451, 14965, 9327, 14918, 9198, 14871, 8973, 14825, 8766, 14775, 8579, 14725, 8408, 14675, 8259, 14622, 8058, 14569, 7821, 14515, 7615, 14460, 7435, 14405, 7276, 14350, 7108, 14256, 6866, 14149, 6653, 15321, 9444, 15321, 9445, 15321, 9448, 15320, 9458, 15317, 9470, 15314, 9490, 15310, 9515, 15302, 9540, 15292, 9562, 15276, 9579, 15251, 9577, 15226, 9559, 15195, 9519, 15156, 9463, 15116, 9389, 15071, 9304, 15025, 9208, 14978, 9023, 14927, 8838, 14878, 8661, 14827, 8496, 14774, 8344, 14722, 8206, 14667, 7973, 14612, 7749, 14556, 7555, 14499, 7382, 14443, 7229, 14385, 7025, 14322, 6791, 14210, 6588, 14100, 6409, 15333, 8920, 15333, 8921, 15332, 8927, 15332, 8943, 15329, 8965, 15326, 9002, 15322, 9048, 15316, 9106, 15307, 9162, 15291, 9204, 15267, 9221, 15244, 9221, 15212, 9196, 15175, 9134, 15133, 9043, 15088, 8930, 15040, 8801, 14990, 8665, 14938, 8526, 14886, 8391, 14830, 8261, 14775, 8087, 14719, 7866, 14661, 7664, 14603, 7482, 14544, 7322, 14485, 7178, 14426, 6936, 14367, 6713, 14281, 6517, 14166, 6348, 14054, 6198, 15341, 8360, 15341, 8361, 15341, 8366, 15341, 8379, 15339, 8399, 15336, 8431, 15332, 8473, 15326, 8527, 15318, 8585, 15302, 8632, 15281, 8670, 15258, 8690, 15227, 8690, 15191, 8664, 15149, 8612, 15104, 8543, 15055, 8456, 15001, 8360, 14948, 8259, 14892, 8122, 14834, 7923, 14776, 7734, 14716, 7558, 14656, 7397, 14595, 7250, 14534, 7070, 14472, 6835, 14410, 6628, 14350, 6443, 14243, 6283, 14125, 6135, 14010, 5889, 15348, 7715, 15348, 7717, 15348, 7725, 15347, 7745, 15345, 7780, 15343, 7836, 15339, 7905, 15334, 8e3, 15326, 8103, 15310, 8193, 15293, 8239, 15270, 8270, 15240, 8287, 15204, 8283, 15163, 8260, 15118, 8223, 15067, 8143, 15014, 8014, 14958, 7873, 14899, 7723, 14839, 7573, 14778, 7430, 14715, 7293, 14652, 7164, 14588, 6931, 14524, 6720, 14460, 6531, 14396, 6362, 14330, 6210, 14207, 6015, 14086, 5781, 13969, 5576, 15352, 7114, 15352, 7116, 15352, 7128, 15352, 7159, 15350, 7195, 15348, 7237, 15345, 7299, 15340, 7374, 15332, 7457, 15317, 7544, 15301, 7633, 15280, 7703, 15251, 7754, 15216, 7775, 15176, 7767, 15131, 7733, 15079, 7670, 15026, 7588, 14967, 7492, 14906, 7387, 14844, 7278, 14779, 7171, 14714, 6965, 14648, 6770, 14581, 6587, 14515, 6420, 14448, 6269, 14382, 6123, 14299, 5881, 14172, 5665, 14049, 5477, 13929, 5310, 15355, 6329, 15355, 6330, 15355, 6339, 15355, 6362, 15353, 6410, 15351, 6472, 15349, 6572, 15344, 6688, 15337, 6835, 15323, 6985, 15309, 7142, 15287, 7220, 15260, 7277, 15226, 7310, 15188, 7326, 15142, 7318, 15090, 7285, 15036, 7239, 14976, 7177, 14914, 7045, 14849, 6892, 14782, 6736, 14714, 6581, 14645, 6433, 14576, 6293, 14506, 6164, 14438, 5946, 14369, 5733, 14270, 5540, 14140, 5369, 14014, 5216, 13892, 5043, 15357, 5483, 15357, 5484, 15357, 5496, 15357, 5528, 15356, 5597, 15354, 5692, 15351, 5835, 15347, 6011, 15339, 6195, 15328, 6317, 15314, 6446, 15293, 6566, 15268, 6668, 15235, 6746, 15197, 6796, 15152, 6811, 15101, 6790, 15046, 6748, 14985, 6673, 14921, 6583, 14854, 6479, 14785, 6371, 14714, 6259, 14643, 6149, 14571, 5946, 14499, 5750, 14428, 5567, 14358, 5401, 14242, 5250, 14109, 5111, 13980, 4870, 13856, 4657, 15359, 4555, 15359, 4557, 15358, 4573, 15358, 4633, 15357, 4715, 15355, 4841, 15353, 5061, 15349, 5216, 15342, 5391, 15331, 5577, 15318, 5770, 15299, 5967, 15274, 6150, 15243, 6223, 15206, 6280, 15161, 6310, 15111, 6317, 15055, 6300, 14994, 6262, 14928, 6208, 14860, 6141, 14788, 5994, 14715, 5838, 14641, 5684, 14566, 5529, 14492, 5384, 14418, 5247, 14346, 5121, 14216, 4892, 14079, 4682, 13948, 4496, 13822, 4330, 15359, 3498, 15359, 3501, 15359, 3520, 15359, 3598, 15358, 3719, 15356, 3860, 15355, 4137, 15351, 4305, 15344, 4563, 15334, 4809, 15321, 5116, 15303, 5273, 15280, 5418, 15250, 5547, 15214, 5653, 15170, 5722, 15120, 5761, 15064, 5763, 15002, 5733, 14935, 5673, 14865, 5597, 14792, 5504, 14716, 5400, 14640, 5294, 14563, 5185, 14486, 5041, 14410, 4841, 14335, 4655, 14191, 4482, 14051, 4325, 13918, 4183, 13790, 4012, 15360, 2282, 15360, 2285, 15360, 2306, 15360, 2401, 15359, 2547, 15357, 2748, 15355, 3103, 15352, 3349, 15345, 3675, 15336, 4020, 15324, 4272, 15307, 4496, 15285, 4716, 15255, 4908, 15220, 5086, 15178, 5170, 15128, 5214, 15072, 5234, 15010, 5231, 14943, 5206, 14871, 5166, 14796, 5102, 14718, 4971, 14639, 4833, 14559, 4687, 14480, 4541, 14402, 4401, 14315, 4268, 14167, 4142, 14025, 3958, 13888, 3747, 13759, 3556, 15360, 923, 15360, 925, 15360, 946, 15360, 1052, 15359, 1214, 15357, 1494, 15356, 1892, 15352, 2274, 15346, 2663, 15338, 3099, 15326, 3393, 15309, 3679, 15288, 3980, 15260, 4183, 15226, 4325, 15185, 4437, 15136, 4517, 15080, 4570, 15018, 4591, 14950, 4581, 14877, 4545, 14800, 4485, 14720, 4411, 14638, 4325, 14556, 4231, 14475, 4136, 14395, 3988, 14297, 3803, 14145, 3628, 13999, 3465, 13861, 3314, 13729, 3177, 15360, 263, 15360, 264, 15360, 272, 15360, 325, 15359, 407, 15358, 548, 15356, 780, 15352, 1144, 15347, 1580, 15339, 2099, 15328, 2425, 15312, 2795, 15292, 3133, 15264, 3329, 15232, 3517, 15191, 3689, 15143, 3819, 15088, 3923, 15025, 3978, 14956, 3999, 14882, 3979, 14804, 3931, 14722, 3855, 14639, 3756, 14554, 3645, 14470, 3529, 14388, 3409, 14279, 3289, 14124, 3173, 13975, 3055, 13834, 2848, 13701, 2658, 15360, 49, 15360, 49, 15360, 52, 15360, 75, 15359, 111, 15358, 201, 15356, 283, 15353, 519, 15348, 726, 15340, 1045, 15329, 1415, 15314, 1795, 15295, 2173, 15269, 2410, 15237, 2649, 15197, 2866, 15150, 3054, 15095, 3140, 15032, 3196, 14963, 3228, 14888, 3236, 14808, 3224, 14725, 3191, 14639, 3146, 14553, 3088, 14466, 2976, 14382, 2836, 14262, 2692, 14103, 2549, 13952, 2409, 13808, 2278, 13674, 2154, 15360, 4, 15360, 4, 15360, 4, 15360, 13, 15359, 33, 15358, 59, 15357, 112, 15353, 199, 15348, 302, 15341, 456, 15331, 628, 15316, 827, 15297, 1082, 15272, 1332, 15241, 1601, 15202, 1851, 15156, 2069, 15101, 2172, 15039, 2256, 14970, 2314, 14894, 2348, 14813, 2358, 14728, 2344, 14640, 2311, 14551, 2263, 14463, 2203, 14376, 2133, 14247, 2059, 14084, 1915, 13930, 1761, 13784, 1609, 13648, 1464, 15360, 0, 15360, 0, 15360, 0, 15360, 3, 15359, 18, 15358, 26, 15357, 53, 15354, 80, 15348, 97, 15341, 165, 15332, 238, 15318, 326, 15299, 427, 15275, 529, 15245, 654, 15207, 771, 15161, 885, 15108, 994, 15046, 1089, 14976, 1170, 14900, 1229, 14817, 1266, 14731, 1284, 14641, 1282, 14550, 1260, 14460, 1223, 14370, 1174, 14232, 1116, 14066, 1050, 13909, 981, 13761, 910, 13623, 839]);
  var ua2 = null;
  var fa2 = class {
    constructor(e2 = {}) {
      const { canvas: t2 = Ui(), context: i2 = null, depth: a2 = true, stencil: o2 = false, alpha: s2 = false, antialias: l2 = false, premultipliedAlpha: d2 = true, preserveDrawingBuffer: u2 = false, powerPreference: m2 = "default", failIfMajorPerformanceCaveat: h2 = false, reversedDepthBuffer: g2 = false } = e2;
      let v2;
      if (this.isWebGLRenderer = true, null !== i2) {
        if ("undefined" != typeof WebGLRenderingContext && i2 instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
        v2 = i2.getContextAttributes().alpha;
      } else v2 = s2;
      const M2 = /* @__PURE__ */ new Set([Ht, Yt, Jt]), x2 = /* @__PURE__ */ new Set([Tt, kt, It, Vt, Rt, Nt]), A2 = new Uint32Array(4), R2 = new Int32Array(4);
      let b2 = null, C2 = null;
      const L2 = [], P2 = [];
      this.domElement = t2, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this.toneMapping = $, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
      const U2 = this;
      let D2 = false;
      this._outputColorSpace = He;
      let w2 = 0, I2 = 0, O2 = null, B2 = -1, z2 = null;
      const k2 = new Ps(), W2 = new Ps();
      let Y2 = null;
      const K2 = new nn(0);
      let q2 = 0, j2 = t2.width, Z2 = t2.height, $2 = 1, Q2 = null, J2 = null;
      const ee2 = new Ps(0, 0, j2, Z2), te2 = new Ps(0, 0, j2, Z2);
      let ne2 = false;
      const ie2 = new go();
      let re2 = false, ae2 = false;
      const oe2 = new dr(), se2 = new ps(), le2 = new Ps(), ce2 = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
      let de2 = false;
      function ue2() {
        return null === O2 ? $2 : 1;
      }
      let fe2, pe2, he2, _e2, ge2, ve2, Se2, Te2, Me2, xe2, Ae2, Re2, be2, Ce2, Le2, Pe2, Ue2, De2, we2, ye2, Ie2, Ne2, Oe2, Fe2, Be2 = i2;
      function Ge2(e3, n2) {
        return t2.getContext(e3, n2);
      }
      try {
        const e3 = { alpha: true, depth: a2, stencil: o2, antialias: l2, premultipliedAlpha: d2, preserveDrawingBuffer: u2, powerPreference: m2, failIfMajorPerformanceCaveat: h2 };
        if ("setAttribute" in t2 && t2.setAttribute("data-engine", `three.js r${t}`), t2.addEventListener("webglcontextlost", ze2, false), t2.addEventListener("webglcontextrestored", ke2, false), t2.addEventListener("webglcontextcreationerror", We2, false), null === Be2) {
          const t3 = "webgl2";
          if (Be2 = Ge2(t3, e3), null === Be2) throw Ge2(t3) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
        }
      } catch (e3) {
        throw e3("WebGLRenderer: " + e3.message), e3;
      }
      function He2() {
        fe2 = new si2(Be2), fe2.init(), Ne2 = new ia2(Be2, fe2), pe2 = new zn2(Be2, fe2, e2, Ne2), he2 = new ta2(Be2, fe2), pe2.reversedDepthBuffer && g2 && he2.buffers.depth.setReversed(true), _e2 = new di2(Be2), ge2 = new zr2(), ve2 = new na2(Be2, fe2, he2, ge2, pe2, Ne2, _e2), Se2 = new Wn2(U2), Te2 = new oi2(U2), Me2 = new wn2(Be2), Oe2 = new Hn2(Be2, Me2), xe2 = new li2(Be2, Me2, _e2, Oe2), Ae2 = new fi2(Be2, xe2, Me2, _e2), we2 = new ui2(Be2, pe2, ve2), Pe2 = new kn2(ge2), Re2 = new Vr2(U2, Se2, Te2, fe2, pe2, Oe2, Pe2), be2 = new la2(U2, ge2), Ce2 = new Yr2(), Le2 = new Qr2(fe2), De2 = new Gn2(U2, Se2, Te2, he2, Ae2, v2, d2), Ue2 = new Jr2(U2, Ae2, pe2), Fe2 = new ca2(Be2, _e2, pe2, he2), ye2 = new Vn2(Be2, fe2, _e2), Ie2 = new ci2(Be2, fe2, _e2), _e2.programs = Re2.programs, U2.capabilities = pe2, U2.extensions = fe2, U2.properties = ge2, U2.renderLists = Ce2, U2.shadowMap = Ue2, U2.state = he2, U2.info = _e2;
      }
      He2();
      const Ve2 = new aa2(U2, Be2);
      function ze2(e3) {
        e3.preventDefault(), Zi("WebGLRenderer: Context Lost."), D2 = true;
      }
      function ke2() {
        Zi("WebGLRenderer: Context Restored."), D2 = false;
        const e3 = _e2.autoReset, t3 = Ue2.enabled, n2 = Ue2.autoUpdate, i3 = Ue2.needsUpdate, r2 = Ue2.type;
        He2(), _e2.autoReset = e3, Ue2.enabled = t3, Ue2.autoUpdate = n2, Ue2.needsUpdate = i3, Ue2.type = r2;
      }
      function We2(e3) {
        Gi("WebGLRenderer: A WebGL context could not be created. Reason: ", e3.statusMessage);
      }
      function Xe2(e3) {
        const t3 = e3.target;
        t3.removeEventListener("dispose", Xe2), (function(e4) {
          (function(e5) {
            const t4 = ge2.get(e5).programs;
            void 0 !== t4 && (t4.forEach(function(e6) {
              Re2.releaseProgram(e6);
            }), e5.isShaderMaterial && Re2.releaseShaderCache(e5));
          })(e4), ge2.remove(e4);
        })(t3);
      }
      function Ye2(e3, t3, n2) {
        true === e3.transparent && e3.side === p && false === e3.forceSinglePass ? (e3.side = d, e3.needsUpdate = true, nt2(e3, t3, n2), e3.side = u, e3.needsUpdate = true, nt2(e3, t3, n2), e3.side = p) : nt2(e3, t3, n2);
      }
      this.xr = Ve2, this.getContext = function() {
        return Be2;
      }, this.getContextAttributes = function() {
        return Be2.getContextAttributes();
      }, this.forceContextLoss = function() {
        const e3 = fe2.get("WEBGL_lose_context");
        e3 && e3.loseContext();
      }, this.forceContextRestore = function() {
        const e3 = fe2.get("WEBGL_lose_context");
        e3 && e3.restoreContext();
      }, this.getPixelRatio = function() {
        return $2;
      }, this.setPixelRatio = function(e3) {
        void 0 !== e3 && ($2 = e3, this.setSize(j2, Z2, false));
      }, this.getSize = function(e3) {
        return e3.set(j2, Z2);
      }, this.setSize = function(e3, n2, i3 = true) {
        Ve2.isPresenting ? Hi("WebGLRenderer: Can't change size while VR device is presenting.") : (j2 = e3, Z2 = n2, t2.width = Math.floor(e3 * $2), t2.height = Math.floor(n2 * $2), true === i3 && (t2.style.width = e3 + "px", t2.style.height = n2 + "px"), this.setViewport(0, 0, e3, n2));
      }, this.getDrawingBufferSize = function(e3) {
        return e3.set(j2 * $2, Z2 * $2).floor();
      }, this.setDrawingBufferSize = function(e3, n2, i3) {
        j2 = e3, Z2 = n2, $2 = i3, t2.width = Math.floor(e3 * i3), t2.height = Math.floor(n2 * i3), this.setViewport(0, 0, e3, n2);
      }, this.getCurrentViewport = function(e3) {
        return e3.copy(k2);
      }, this.getViewport = function(e3) {
        return e3.copy(ee2);
      }, this.setViewport = function(e3, t3, n2, i3) {
        e3.isVector4 ? ee2.set(e3.x, e3.y, e3.z, e3.w) : ee2.set(e3, t3, n2, i3), he2.viewport(k2.copy(ee2).multiplyScalar($2).round());
      }, this.getScissor = function(e3) {
        return e3.copy(te2);
      }, this.setScissor = function(e3, t3, n2, i3) {
        e3.isVector4 ? te2.set(e3.x, e3.y, e3.z, e3.w) : te2.set(e3, t3, n2, i3), he2.scissor(W2.copy(te2).multiplyScalar($2).round());
      }, this.getScissorTest = function() {
        return ne2;
      }, this.setScissorTest = function(e3) {
        he2.setScissorTest(ne2 = e3);
      }, this.setOpaqueSort = function(e3) {
        Q2 = e3;
      }, this.setTransparentSort = function(e3) {
        J2 = e3;
      }, this.getClearColor = function(e3) {
        return e3.copy(De2.getClearColor());
      }, this.setClearColor = function() {
        De2.setClearColor(...arguments);
      }, this.getClearAlpha = function() {
        return De2.getClearAlpha();
      }, this.setClearAlpha = function() {
        De2.setClearAlpha(...arguments);
      }, this.clear = function(e3 = true, t3 = true, n2 = true) {
        let i3 = 0;
        if (e3) {
          let e4 = false;
          if (null !== O2) {
            const t4 = O2.texture.format;
            e4 = M2.has(t4);
          }
          if (e4) {
            const e5 = O2.texture.type, t4 = x2.has(e5), n3 = De2.getClearColor(), i4 = De2.getClearAlpha(), r2 = n3.r, a3 = n3.g, o3 = n3.b;
            t4 ? (A2[0] = r2, A2[1] = a3, A2[2] = o3, A2[3] = i4, Be2.clearBufferuiv(Be2.COLOR, 0, A2)) : (R2[0] = r2, R2[1] = a3, R2[2] = o3, R2[3] = i4, Be2.clearBufferiv(Be2.COLOR, 0, R2));
          } else i3 |= Be2.COLOR_BUFFER_BIT;
        }
        t3 && (i3 |= Be2.DEPTH_BUFFER_BIT), n2 && (i3 |= Be2.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), Be2.clear(i3);
      }, this.clearColor = function() {
        this.clear(true, false, false);
      }, this.clearDepth = function() {
        this.clear(false, true, false);
      }, this.clearStencil = function() {
        this.clear(false, false, true);
      }, this.dispose = function() {
        t2.removeEventListener("webglcontextlost", ze2, false), t2.removeEventListener("webglcontextrestored", ke2, false), t2.removeEventListener("webglcontextcreationerror", We2, false), De2.dispose(), Ce2.dispose(), Le2.dispose(), ge2.dispose(), Se2.dispose(), Te2.dispose(), Ae2.dispose(), Oe2.dispose(), Fe2.dispose(), Re2.dispose(), Ve2.dispose(), Ve2.removeEventListener("sessionstart", qe2), Ve2.removeEventListener("sessionend", je2), Ze2.stop();
      }, this.renderBufferDirect = function(e3, t3, n2, i3, r2, a3) {
        null === t3 && (t3 = ce2);
        const o3 = r2.isMesh && r2.matrixWorld.determinant() < 0, s3 = (function(e4, t4, n3, i4, r3) {
          true !== t4.isScene && (t4 = ce2);
          ve2.resetTextureUnits();
          const a4 = t4.fog, o4 = i4.isMeshStandardMaterial ? t4.environment : null, s4 = null === O2 ? U2.outputColorSpace : true === O2.isXRRenderTarget ? O2.texture.colorSpace : Ge, l4 = (i4.isMeshStandardMaterial ? Te2 : Se2).get(i4.envMap || o4), c3 = true === i4.vertexColors && !!n3.attributes.color && 4 === n3.attributes.color.itemSize, d4 = !!n3.attributes.tangent && (!!i4.normalMap || i4.anisotropy > 0), u4 = !!n3.morphAttributes.position, f3 = !!n3.morphAttributes.normal, p3 = !!n3.morphAttributes.color;
          let m4 = $;
          i4.toneMapped && (null !== O2 && true !== O2.isXRRenderTarget || (m4 = U2.toneMapping));
          const h4 = n3.morphAttributes.position || n3.morphAttributes.normal || n3.morphAttributes.color, _3 = void 0 !== h4 ? h4.length : 0, g3 = ge2.get(i4), v3 = C2.state.lights;
          if (true === re2 && (true === ae2 || e4 !== z2)) {
            const t5 = e4 === z2 && i4.id === B2;
            Pe2.setState(i4, e4, t5);
          }
          let E2 = false;
          i4.version === g3.__version ? g3.needsLights && g3.lightsStateVersion !== v3.state.version || g3.outputColorSpace !== s4 || r3.isBatchedMesh && false === g3.batching ? E2 = true : r3.isBatchedMesh || true !== g3.batching ? r3.isBatchedMesh && true === g3.batchingColor && null === r3.colorTexture || r3.isBatchedMesh && false === g3.batchingColor && null !== r3.colorTexture || r3.isInstancedMesh && false === g3.instancing ? E2 = true : r3.isInstancedMesh || true !== g3.instancing ? r3.isSkinnedMesh && false === g3.skinning ? E2 = true : r3.isSkinnedMesh || true !== g3.skinning ? r3.isInstancedMesh && true === g3.instancingColor && null === r3.instanceColor || r3.isInstancedMesh && false === g3.instancingColor && null !== r3.instanceColor || r3.isInstancedMesh && true === g3.instancingMorph && null === r3.morphTexture || r3.isInstancedMesh && false === g3.instancingMorph && null !== r3.morphTexture || g3.envMap !== l4 || true === i4.fog && g3.fog !== a4 ? E2 = true : void 0 === g3.numClippingPlanes || g3.numClippingPlanes === Pe2.numPlanes && g3.numIntersection === Pe2.numIntersection ? (g3.vertexAlphas !== c3 || g3.vertexTangents !== d4 || g3.morphTargets !== u4 || g3.morphNormals !== f3 || g3.morphColors !== p3 || g3.toneMapping !== m4 || g3.morphTargetsCount !== _3) && (E2 = true) : E2 = true : E2 = true : E2 = true : E2 = true : (E2 = true, g3.__version = i4.version);
          let T2 = g3.currentProgram;
          true === E2 && (T2 = nt2(i4, t4, r3));
          let M3 = false, x3 = false, A3 = false;
          const R3 = T2.getUniforms(), b3 = g3.uniforms;
          he2.useProgram(T2.program) && (M3 = true, x3 = true, A3 = true);
          i4.id !== B2 && (B2 = i4.id, x3 = true);
          if (M3 || z2 !== e4) {
            he2.buffers.depth.getReversed() && true !== e4.reversedDepth && (e4._reversedDepth = true, e4.updateProjectionMatrix()), R3.setValue(Be2, "projectionMatrix", e4.projectionMatrix), R3.setValue(Be2, "viewMatrix", e4.matrixWorldInverse);
            const t5 = R3.map.cameraPosition;
            void 0 !== t5 && t5.setValue(Be2, se2.setFromMatrixPosition(e4.matrixWorld)), pe2.logarithmicDepthBuffer && R3.setValue(Be2, "logDepthBufFC", 2 / (Math.log(e4.far + 1) / Math.LN2)), (i4.isMeshPhongMaterial || i4.isMeshToonMaterial || i4.isMeshLambertMaterial || i4.isMeshBasicMaterial || i4.isMeshStandardMaterial || i4.isShaderMaterial) && R3.setValue(Be2, "isOrthographic", true === e4.isOrthographicCamera), z2 !== e4 && (z2 = e4, x3 = true, A3 = true);
          }
          if (r3.isSkinnedMesh) {
            R3.setOptional(Be2, r3, "bindMatrix"), R3.setOptional(Be2, r3, "bindMatrixInverse");
            const e5 = r3.skeleton;
            e5 && (null === e5.boneTexture && e5.computeBoneTexture(), R3.setValue(Be2, "boneTexture", e5.boneTexture, ve2));
          }
          r3.isBatchedMesh && (R3.setOptional(Be2, r3, "batchingTexture"), R3.setValue(Be2, "batchingTexture", r3._matricesTexture, ve2), R3.setOptional(Be2, r3, "batchingIdTexture"), R3.setValue(Be2, "batchingIdTexture", r3._indirectTexture, ve2), R3.setOptional(Be2, r3, "batchingColorTexture"), null !== r3._colorsTexture && R3.setValue(Be2, "batchingColorTexture", r3._colorsTexture, ve2));
          const L3 = n3.morphAttributes;
          void 0 === L3.position && void 0 === L3.normal && void 0 === L3.color || we2.update(r3, n3, T2);
          (x3 || g3.receiveShadow !== r3.receiveShadow) && (g3.receiveShadow = r3.receiveShadow, R3.setValue(Be2, "receiveShadow", r3.receiveShadow));
          i4.isMeshGouraudMaterial && null !== i4.envMap && (b3.envMap.value = l4, b3.flipEnvMap.value = l4.isCubeTexture && false === l4.isRenderTargetTexture ? -1 : 1);
          i4.isMeshStandardMaterial && null === i4.envMap && null !== t4.environment && (b3.envMapIntensity.value = t4.environmentIntensity);
          void 0 !== b3.dfgLUT && (b3.dfgLUT.value = (null === ua2 && (ua2 = new Ha(da2, 32, 32, Xt, Ot), ua2.minFilter = wt, ua2.magFilter = wt, ua2.wrapS = mt, ua2.wrapT = mt, ua2.generateMipmaps = false, ua2.needsUpdate = true), ua2));
          x3 && (R3.setValue(Be2, "toneMappingExposure", U2.toneMappingExposure), g3.needsLights && (D3 = A3, (P3 = b3).ambientLightColor.needsUpdate = D3, P3.lightProbe.needsUpdate = D3, P3.directionalLights.needsUpdate = D3, P3.directionalLightShadows.needsUpdate = D3, P3.pointLights.needsUpdate = D3, P3.pointLightShadows.needsUpdate = D3, P3.spotLights.needsUpdate = D3, P3.spotLightShadows.needsUpdate = D3, P3.rectAreaLights.needsUpdate = D3, P3.hemisphereLights.needsUpdate = D3), a4 && true === i4.fog && be2.refreshFogUniforms(b3, a4), be2.refreshMaterialUniforms(b3, i4, $2, Z2, C2.state.transmissionRenderTarget[e4.id]), gr2.upload(Be2, it2(g3), b3, ve2));
          var P3, D3;
          i4.isShaderMaterial && true === i4.uniformsNeedUpdate && (gr2.upload(Be2, it2(g3), b3, ve2), i4.uniformsNeedUpdate = false);
          i4.isSpriteMaterial && R3.setValue(Be2, "center", r3.center);
          if (R3.setValue(Be2, "modelViewMatrix", r3.modelViewMatrix), R3.setValue(Be2, "normalMatrix", r3.normalMatrix), R3.setValue(Be2, "modelMatrix", r3.matrixWorld), i4.isShaderMaterial || i4.isRawShaderMaterial) {
            const e5 = i4.uniformsGroups;
            for (let t5 = 0, n4 = e5.length; t5 < n4; t5++) {
              const n5 = e5[t5];
              Fe2.update(n5, T2), Fe2.bind(n5, T2);
            }
          }
          return T2;
        })(e3, t3, n2, i3, r2);
        he2.setMaterial(i3, o3);
        let l3 = n2.index, c2 = 1;
        if (true === i3.wireframe) {
          if (l3 = xe2.getWireframeAttribute(n2), void 0 === l3) return;
          c2 = 2;
        }
        const d3 = n2.drawRange, u3 = n2.attributes.position;
        let f2 = d3.start * c2, p2 = (d3.start + d3.count) * c2;
        null !== a3 && (f2 = Math.max(f2, a3.start * c2), p2 = Math.min(p2, (a3.start + a3.count) * c2)), null !== l3 ? (f2 = Math.max(f2, 0), p2 = Math.min(p2, l3.count)) : null != u3 && (f2 = Math.max(f2, 0), p2 = Math.min(p2, u3.count));
        const m3 = p2 - f2;
        if (m3 < 0 || m3 === 1 / 0) return;
        let h3;
        Oe2.setup(r2, i3, s3, n2, l3);
        let _2 = ye2;
        if (null !== l3 && (h3 = Me2.get(l3), _2 = Ie2, _2.setIndex(h3)), r2.isMesh) true === i3.wireframe ? (he2.setLineWidth(i3.wireframeLinewidth * ue2()), _2.setMode(Be2.LINES)) : _2.setMode(Be2.TRIANGLES);
        else if (r2.isLine) {
          let e4 = i3.linewidth;
          void 0 === e4 && (e4 = 1), he2.setLineWidth(e4 * ue2()), r2.isLineSegments ? _2.setMode(Be2.LINES) : r2.isLineLoop ? _2.setMode(Be2.LINE_LOOP) : _2.setMode(Be2.LINE_STRIP);
        } else r2.isPoints ? _2.setMode(Be2.POINTS) : r2.isSprite && _2.setMode(Be2.TRIANGLES);
        if (r2.isBatchedMesh) if (null !== r2._multiDrawInstances) $i("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), _2.renderMultiDrawInstances(r2._multiDrawStarts, r2._multiDrawCounts, r2._multiDrawCount, r2._multiDrawInstances);
        else if (fe2.get("WEBGL_multi_draw")) _2.renderMultiDraw(r2._multiDrawStarts, r2._multiDrawCounts, r2._multiDrawCount);
        else {
          const e4 = r2._multiDrawStarts, t4 = r2._multiDrawCounts, n3 = r2._multiDrawCount, a4 = l3 ? Me2.get(l3).bytesPerElement : 1, o4 = ge2.get(i3).currentProgram.getUniforms();
          for (let i4 = 0; i4 < n3; i4++) o4.setValue(Be2, "_gl_DrawID", i4), _2.render(e4[i4] / a4, t4[i4]);
        }
        else if (r2.isInstancedMesh) _2.renderInstances(f2, m3, r2.count);
        else if (n2.isInstancedBufferGeometry) {
          const e4 = void 0 !== n2._maxInstanceCount ? n2._maxInstanceCount : 1 / 0, t4 = Math.min(n2.instanceCount, e4);
          _2.renderInstances(f2, m3, t4);
        } else _2.render(f2, m3);
      }, this.compile = function(e3, t3, n2 = null) {
        null === n2 && (n2 = e3), C2 = Le2.get(n2), C2.init(t3), P2.push(C2), n2.traverseVisible(function(e4) {
          e4.isLight && e4.layers.test(t3.layers) && (C2.pushLight(e4), e4.castShadow && C2.pushShadow(e4));
        }), e3 !== n2 && e3.traverseVisible(function(e4) {
          e4.isLight && e4.layers.test(t3.layers) && (C2.pushLight(e4), e4.castShadow && C2.pushShadow(e4));
        }), C2.setupLights();
        const i3 = /* @__PURE__ */ new Set();
        return e3.traverse(function(e4) {
          if (!(e4.isMesh || e4.isPoints || e4.isLine || e4.isSprite)) return;
          const t4 = e4.material;
          if (t4) if (Array.isArray(t4)) for (let r2 = 0; r2 < t4.length; r2++) {
            const a3 = t4[r2];
            Ye2(a3, n2, e4), i3.add(a3);
          }
          else Ye2(t4, n2, e4), i3.add(t4);
        }), C2 = P2.pop(), i3;
      }, this.compileAsync = function(e3, t3, n2 = null) {
        const i3 = this.compile(e3, t3, n2);
        return new Promise((t4) => {
          function n3() {
            i3.forEach(function(e4) {
              ge2.get(e4).currentProgram.isReady() && i3.delete(e4);
            }), 0 !== i3.size ? setTimeout(n3, 10) : t4(e3);
          }
          null !== fe2.get("KHR_parallel_shader_compile") ? n3() : setTimeout(n3, 10);
        });
      };
      let Ke2 = null;
      function qe2() {
        Ze2.stop();
      }
      function je2() {
        Ze2.start();
      }
      const Ze2 = new Dn2();
      function $e2(e3, t3, n2, i3) {
        if (false === e3.visible) return;
        if (e3.layers.test(t3.layers)) {
          if (e3.isGroup) n2 = e3.renderOrder;
          else if (e3.isLOD) true === e3.autoUpdate && e3.update(t3);
          else if (e3.isLight) C2.pushLight(e3), e3.castShadow && C2.pushShadow(e3);
          else if (e3.isSprite) {
            if (!e3.frustumCulled || ie2.intersectsSprite(e3)) {
              i3 && le2.setFromMatrixPosition(e3.matrixWorld).applyMatrix4(oe2);
              const t4 = Ae2.update(e3), r3 = e3.material;
              r3.visible && b2.push(e3, t4, r3, n2, le2.z, null);
            }
          } else if ((e3.isMesh || e3.isLine || e3.isPoints) && (!e3.frustumCulled || ie2.intersectsObject(e3))) {
            const t4 = Ae2.update(e3), r3 = e3.material;
            if (i3 && (void 0 !== e3.boundingSphere ? (null === e3.boundingSphere && e3.computeBoundingSphere(), le2.copy(e3.boundingSphere.center)) : (null === t4.boundingSphere && t4.computeBoundingSphere(), le2.copy(t4.boundingSphere.center)), le2.applyMatrix4(e3.matrixWorld).applyMatrix4(oe2)), Array.isArray(r3)) {
              const i4 = t4.groups;
              for (let a3 = 0, o3 = i4.length; a3 < o3; a3++) {
                const o4 = i4[a3], s3 = r3[o4.materialIndex];
                s3 && s3.visible && b2.push(e3, t4, s3, n2, le2.z, o4);
              }
            } else r3.visible && b2.push(e3, t4, r3, n2, le2.z, null);
          }
        }
        const r2 = e3.children;
        for (let e4 = 0, a3 = r2.length; e4 < a3; e4++) $e2(r2[e4], t3, n2, i3);
      }
      function Qe2(e3, t3, n2, i3) {
        const { opaque: r2, transmissive: a3, transparent: o3 } = e3;
        C2.setupLightsView(n2), true === re2 && Pe2.setGlobalState(U2.clippingPlanes, n2), i3 && he2.viewport(k2.copy(i3)), r2.length > 0 && et2(r2, t3, n2), a3.length > 0 && et2(a3, t3, n2), o3.length > 0 && et2(o3, t3, n2), he2.buffers.depth.setTest(true), he2.buffers.depth.setMask(true), he2.buffers.color.setMask(true), he2.setPolygonOffset(false);
      }
      function Je2(e3, t3, n2, i3) {
        if (null !== (true === n2.isScene ? n2.overrideMaterial : null)) return;
        void 0 === C2.state.transmissionRenderTarget[i3.id] && (C2.state.transmissionRenderTarget[i3.id] = new Rs(1, 1, { generateMipmaps: true, type: fe2.has("EXT_color_buffer_half_float") || fe2.has("EXT_color_buffer_float") ? Ot : Tt, minFilter: _t, samples: 4, stencilBuffer: o2, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: ws.workingColorSpace }));
        const r2 = C2.state.transmissionRenderTarget[i3.id], a3 = i3.viewport || k2;
        r2.setSize(a3.z * U2.transmissionResolutionScale, a3.w * U2.transmissionResolutionScale);
        const s3 = U2.getRenderTarget(), l3 = U2.getActiveCubeFace(), d3 = U2.getActiveMipmapLevel();
        U2.setRenderTarget(r2), U2.getClearColor(K2), q2 = U2.getClearAlpha(), q2 < 1 && U2.setClearColor(16777215, 0.5), U2.clear(), de2 && De2.render(n2);
        const u3 = U2.toneMapping;
        U2.toneMapping = $;
        const f2 = i3.viewport;
        if (void 0 !== i3.viewport && (i3.viewport = void 0), C2.setupLightsView(i3), true === re2 && Pe2.setGlobalState(U2.clippingPlanes, i3), et2(e3, n2, i3), ve2.updateMultisampleRenderTarget(r2), ve2.updateRenderTargetMipmap(r2), false === fe2.has("WEBGL_multisampled_render_to_texture")) {
          let e4 = false;
          for (let r3 = 0, a4 = t3.length; r3 < a4; r3++) {
            const a5 = t3[r3], { object: o3, geometry: s4, material: l4, group: d4 } = a5;
            if (l4.side === p && o3.layers.test(i3.layers)) {
              const t4 = l4.side;
              l4.side = d, l4.needsUpdate = true, tt2(o3, n2, i3, s4, l4, d4), l4.side = t4, l4.needsUpdate = true, e4 = true;
            }
          }
          true === e4 && (ve2.updateMultisampleRenderTarget(r2), ve2.updateRenderTargetMipmap(r2));
        }
        U2.setRenderTarget(s3, l3, d3), U2.setClearColor(K2, q2), void 0 !== f2 && (i3.viewport = f2), U2.toneMapping = u3;
      }
      function et2(e3, t3, n2) {
        const i3 = true === t3.isScene ? t3.overrideMaterial : null;
        for (let r2 = 0, a3 = e3.length; r2 < a3; r2++) {
          const a4 = e3[r2], { object: o3, geometry: s3, group: l3 } = a4;
          let c2 = a4.material;
          true === c2.allowOverride && null !== i3 && (c2 = i3), o3.layers.test(n2.layers) && tt2(o3, t3, n2, s3, c2, l3);
        }
      }
      function tt2(e3, t3, n2, i3, r2, a3) {
        e3.onBeforeRender(U2, t3, n2, i3, r2, a3), e3.modelViewMatrix.multiplyMatrices(n2.matrixWorldInverse, e3.matrixWorld), e3.normalMatrix.getNormalMatrix(e3.modelViewMatrix), r2.onBeforeRender(U2, t3, n2, i3, e3, a3), true === r2.transparent && r2.side === p && false === r2.forceSinglePass ? (r2.side = d, r2.needsUpdate = true, U2.renderBufferDirect(n2, t3, i3, r2, e3, a3), r2.side = u, r2.needsUpdate = true, U2.renderBufferDirect(n2, t3, i3, r2, e3, a3), r2.side = p) : U2.renderBufferDirect(n2, t3, i3, r2, e3, a3), e3.onAfterRender(U2, t3, n2, i3, r2, a3);
      }
      function nt2(e3, t3, n2) {
        true !== t3.isScene && (t3 = ce2);
        const i3 = ge2.get(e3), r2 = C2.state.lights, a3 = C2.state.shadowsArray, o3 = r2.state.version, s3 = Re2.getParameters(e3, r2.state, a3, t3, n2), l3 = Re2.getProgramCacheKey(s3);
        let c2 = i3.programs;
        i3.environment = e3.isMeshStandardMaterial ? t3.environment : null, i3.fog = t3.fog, i3.envMap = (e3.isMeshStandardMaterial ? Te2 : Se2).get(e3.envMap || i3.environment), i3.envMapRotation = null !== i3.environment && null === e3.envMap ? t3.environmentRotation : e3.envMapRotation, void 0 === c2 && (e3.addEventListener("dispose", Xe2), c2 = /* @__PURE__ */ new Map(), i3.programs = c2);
        let d3 = c2.get(l3);
        if (void 0 !== d3) {
          if (i3.currentProgram === d3 && i3.lightsStateVersion === o3) return rt2(e3, s3), d3;
        } else s3.uniforms = Re2.getUniforms(e3), e3.onBeforeCompile(s3, U2), d3 = Re2.acquireProgram(s3, l3), c2.set(l3, d3), i3.uniforms = s3.uniforms;
        const u3 = i3.uniforms;
        return (e3.isShaderMaterial || e3.isRawShaderMaterial) && true !== e3.clipping || (u3.clippingPlanes = Pe2.uniform), rt2(e3, s3), i3.needsLights = (function(e4) {
          return e4.isMeshLambertMaterial || e4.isMeshToonMaterial || e4.isMeshPhongMaterial || e4.isMeshStandardMaterial || e4.isShadowMaterial || e4.isShaderMaterial && true === e4.lights;
        })(e3), i3.lightsStateVersion = o3, i3.needsLights && (u3.ambientLightColor.value = r2.state.ambient, u3.lightProbe.value = r2.state.probe, u3.directionalLights.value = r2.state.directional, u3.directionalLightShadows.value = r2.state.directionalShadow, u3.spotLights.value = r2.state.spot, u3.spotLightShadows.value = r2.state.spotShadow, u3.rectAreaLights.value = r2.state.rectArea, u3.ltc_1.value = r2.state.rectAreaLTC1, u3.ltc_2.value = r2.state.rectAreaLTC2, u3.pointLights.value = r2.state.point, u3.pointLightShadows.value = r2.state.pointShadow, u3.hemisphereLights.value = r2.state.hemi, u3.directionalShadowMap.value = r2.state.directionalShadowMap, u3.directionalShadowMatrix.value = r2.state.directionalShadowMatrix, u3.spotShadowMap.value = r2.state.spotShadowMap, u3.spotLightMatrix.value = r2.state.spotLightMatrix, u3.spotLightMap.value = r2.state.spotLightMap, u3.pointShadowMap.value = r2.state.pointShadowMap, u3.pointShadowMatrix.value = r2.state.pointShadowMatrix), i3.currentProgram = d3, i3.uniformsList = null, d3;
      }
      function it2(e3) {
        if (null === e3.uniformsList) {
          const t3 = e3.currentProgram.getUniforms();
          e3.uniformsList = gr2.seqWithValue(t3.seq, e3.uniforms);
        }
        return e3.uniformsList;
      }
      function rt2(e3, t3) {
        const n2 = ge2.get(e3);
        n2.outputColorSpace = t3.outputColorSpace, n2.batching = t3.batching, n2.batchingColor = t3.batchingColor, n2.instancing = t3.instancing, n2.instancingColor = t3.instancingColor, n2.instancingMorph = t3.instancingMorph, n2.skinning = t3.skinning, n2.morphTargets = t3.morphTargets, n2.morphNormals = t3.morphNormals, n2.morphColors = t3.morphColors, n2.morphTargetsCount = t3.morphTargetsCount, n2.numClippingPlanes = t3.numClippingPlanes, n2.numIntersection = t3.numClipIntersection, n2.vertexAlphas = t3.vertexAlphas, n2.vertexTangents = t3.vertexTangents, n2.toneMapping = t3.toneMapping;
      }
      Ze2.setAnimationLoop(function(e3) {
        Ke2 && Ke2(e3);
      }), "undefined" != typeof self && Ze2.setContext(self), this.setAnimationLoop = function(e3) {
        Ke2 = e3, Ve2.setAnimationLoop(e3), null === e3 ? Ze2.stop() : Ze2.start();
      }, Ve2.addEventListener("sessionstart", qe2), Ve2.addEventListener("sessionend", je2), this.render = function(e3, t3) {
        if (void 0 !== t3 && true !== t3.isCamera) return void Gi("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        if (true === D2) return;
        if (true === e3.matrixWorldAutoUpdate && e3.updateMatrixWorld(), null === t3.parent && true === t3.matrixWorldAutoUpdate && t3.updateMatrixWorld(), true === Ve2.enabled && true === Ve2.isPresenting && (true === Ve2.cameraAutoUpdate && Ve2.updateCamera(t3), t3 = Ve2.getCamera()), true === e3.isScene && e3.onBeforeRender(U2, e3, t3, O2), C2 = Le2.get(e3, P2.length), C2.init(t3), P2.push(C2), oe2.multiplyMatrices(t3.projectionMatrix, t3.matrixWorldInverse), ie2.setFromProjectionMatrix(oe2, Ri, t3.reversedDepth), ae2 = this.localClippingEnabled, re2 = Pe2.init(this.clippingPlanes, ae2), b2 = Ce2.get(e3, L2.length), b2.init(), L2.push(b2), true === Ve2.enabled && true === Ve2.isPresenting) {
          const e4 = U2.xr.getDepthSensingMesh();
          null !== e4 && $e2(e4, t3, -1 / 0, U2.sortObjects);
        }
        $e2(e3, t3, 0, U2.sortObjects), b2.finish(), true === U2.sortObjects && b2.sort(Q2, J2), de2 = false === Ve2.enabled || false === Ve2.isPresenting || false === Ve2.hasDepthSensing(), de2 && De2.addToRenderList(b2, e3), this.info.render.frame++, true === re2 && Pe2.beginShadows();
        const n2 = C2.state.shadowsArray;
        Ue2.render(n2, e3, t3), true === re2 && Pe2.endShadows(), true === this.info.autoReset && this.info.reset();
        const i3 = b2.opaque, r2 = b2.transmissive;
        if (C2.setupLights(), t3.isArrayCamera) {
          const n3 = t3.cameras;
          if (r2.length > 0) for (let t4 = 0, a3 = n3.length; t4 < a3; t4++) {
            Je2(i3, r2, e3, n3[t4]);
          }
          de2 && De2.render(e3);
          for (let t4 = 0, i4 = n3.length; t4 < i4; t4++) {
            const i5 = n3[t4];
            Qe2(b2, e3, i5, i5.viewport);
          }
        } else r2.length > 0 && Je2(i3, r2, e3, t3), de2 && De2.render(e3), Qe2(b2, e3, t3);
        null !== O2 && 0 === I2 && (ve2.updateMultisampleRenderTarget(O2), ve2.updateRenderTargetMipmap(O2)), true === e3.isScene && e3.onAfterRender(U2, e3, t3), Oe2.resetDefaultState(), B2 = -1, z2 = null, P2.pop(), P2.length > 0 ? (C2 = P2[P2.length - 1], true === re2 && Pe2.setGlobalState(U2.clippingPlanes, C2.state.camera)) : C2 = null, L2.pop(), b2 = L2.length > 0 ? L2[L2.length - 1] : null;
      }, this.getActiveCubeFace = function() {
        return w2;
      }, this.getActiveMipmapLevel = function() {
        return I2;
      }, this.getRenderTarget = function() {
        return O2;
      }, this.setRenderTargetTextures = function(e3, t3, n2) {
        const i3 = ge2.get(e3);
        i3.__autoAllocateDepthBuffer = false === e3.resolveDepthBuffer, false === i3.__autoAllocateDepthBuffer && (i3.__useRenderToTexture = false), ge2.get(e3.texture).__webglTexture = t3, ge2.get(e3.depthTexture).__webglTexture = i3.__autoAllocateDepthBuffer ? void 0 : n2, i3.__hasExternalTextures = true;
      }, this.setRenderTargetFramebuffer = function(e3, t3) {
        const n2 = ge2.get(e3);
        n2.__webglFramebuffer = t3, n2.__useDefaultFramebuffer = void 0 === t3;
      };
      const at2 = Be2.createFramebuffer();
      this.setRenderTarget = function(e3, t3 = 0, n2 = 0) {
        O2 = e3, w2 = t3, I2 = n2;
        let i3 = true, r2 = null, a3 = false, o3 = false;
        if (e3) {
          const s3 = ge2.get(e3);
          if (void 0 !== s3.__useDefaultFramebuffer) he2.bindFramebuffer(Be2.FRAMEBUFFER, null), i3 = false;
          else if (void 0 === s3.__webglFramebuffer) ve2.setupRenderTarget(e3);
          else if (s3.__hasExternalTextures) ve2.rebindTextures(e3, ge2.get(e3.texture).__webglTexture, ge2.get(e3.depthTexture).__webglTexture);
          else if (e3.depthBuffer) {
            const t4 = e3.depthTexture;
            if (s3.__boundDepthTexture !== t4) {
              if (null !== t4 && ge2.has(t4) && (e3.width !== t4.image.width || e3.height !== t4.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
              ve2.setupDepthRenderbuffer(e3);
            }
          }
          const l3 = e3.texture;
          (l3.isData3DTexture || l3.isDataArrayTexture || l3.isCompressedArrayTexture) && (o3 = true);
          const c2 = ge2.get(e3).__webglFramebuffer;
          e3.isWebGLCubeRenderTarget ? (r2 = Array.isArray(c2[t3]) ? c2[t3][n2] : c2[t3], a3 = true) : r2 = e3.samples > 0 && false === ve2.useMultisampledRTT(e3) ? ge2.get(e3).__webglMultisampledFramebuffer : Array.isArray(c2) ? c2[n2] : c2, k2.copy(e3.viewport), W2.copy(e3.scissor), Y2 = e3.scissorTest;
        } else k2.copy(ee2).multiplyScalar($2).floor(), W2.copy(te2).multiplyScalar($2).floor(), Y2 = ne2;
        0 !== n2 && (r2 = at2);
        if (he2.bindFramebuffer(Be2.FRAMEBUFFER, r2) && i3 && he2.drawBuffers(e3, r2), he2.viewport(k2), he2.scissor(W2), he2.setScissorTest(Y2), a3) {
          const i4 = ge2.get(e3.texture);
          Be2.framebufferTexture2D(Be2.FRAMEBUFFER, Be2.COLOR_ATTACHMENT0, Be2.TEXTURE_CUBE_MAP_POSITIVE_X + t3, i4.__webglTexture, n2);
        } else if (o3) {
          const i4 = t3;
          for (let t4 = 0; t4 < e3.textures.length; t4++) {
            const r3 = ge2.get(e3.textures[t4]);
            Be2.framebufferTextureLayer(Be2.FRAMEBUFFER, Be2.COLOR_ATTACHMENT0 + t4, r3.__webglTexture, n2, i4);
          }
        } else if (null !== e3 && 0 !== n2) {
          const t4 = ge2.get(e3.texture);
          Be2.framebufferTexture2D(Be2.FRAMEBUFFER, Be2.COLOR_ATTACHMENT0, Be2.TEXTURE_2D, t4.__webglTexture, n2);
        }
        B2 = -1;
      }, this.readRenderTargetPixels = function(e3, t3, n2, i3, r2, a3, o3, s3 = 0) {
        if (!e3 || !e3.isWebGLRenderTarget) return void Gi("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        let l3 = ge2.get(e3).__webglFramebuffer;
        if (e3.isWebGLCubeRenderTarget && void 0 !== o3 && (l3 = l3[o3]), l3) {
          he2.bindFramebuffer(Be2.FRAMEBUFFER, l3);
          try {
            const o4 = e3.textures[s3], l4 = o4.format, c2 = o4.type;
            if (!pe2.textureFormatReadable(l4)) return void Gi("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            if (!pe2.textureTypeReadable(c2)) return void Gi("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            t3 >= 0 && t3 <= e3.width - i3 && n2 >= 0 && n2 <= e3.height - r2 && (e3.textures.length > 1 && Be2.readBuffer(Be2.COLOR_ATTACHMENT0 + s3), Be2.readPixels(t3, n2, i3, r2, Ne2.convert(l4), Ne2.convert(c2), a3));
          } finally {
            const e4 = null !== O2 ? ge2.get(O2).__webglFramebuffer : null;
            he2.bindFramebuffer(Be2.FRAMEBUFFER, e4);
          }
        }
      }, this.readRenderTargetPixelsAsync = async function(e3, t3, n2, i3, r2, a3, o3, s3 = 0) {
        if (!e3 || !e3.isWebGLRenderTarget) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        let l3 = ge2.get(e3).__webglFramebuffer;
        if (e3.isWebGLCubeRenderTarget && void 0 !== o3 && (l3 = l3[o3]), l3) {
          if (t3 >= 0 && t3 <= e3.width - i3 && n2 >= 0 && n2 <= e3.height - r2) {
            he2.bindFramebuffer(Be2.FRAMEBUFFER, l3);
            const o4 = e3.textures[s3], c2 = o4.format, d3 = o4.type;
            if (!pe2.textureFormatReadable(c2)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
            if (!pe2.textureTypeReadable(d3)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
            const u3 = Be2.createBuffer();
            Be2.bindBuffer(Be2.PIXEL_PACK_BUFFER, u3), Be2.bufferData(Be2.PIXEL_PACK_BUFFER, a3.byteLength, Be2.STREAM_READ), e3.textures.length > 1 && Be2.readBuffer(Be2.COLOR_ATTACHMENT0 + s3), Be2.readPixels(t3, n2, i3, r2, Ne2.convert(c2), Ne2.convert(d3), 0);
            const f2 = null !== O2 ? ge2.get(O2).__webglFramebuffer : null;
            he2.bindFramebuffer(Be2.FRAMEBUFFER, f2);
            const p2 = Be2.fenceSync(Be2.SYNC_GPU_COMMANDS_COMPLETE, 0);
            return Be2.flush(), await Qi(Be2, p2, 4), Be2.bindBuffer(Be2.PIXEL_PACK_BUFFER, u3), Be2.getBufferSubData(Be2.PIXEL_PACK_BUFFER, 0, a3), Be2.deleteBuffer(u3), Be2.deleteSync(p2), a3;
          }
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
        }
      }, this.copyFramebufferToTexture = function(e3, t3 = null, n2 = 0) {
        const i3 = Math.pow(2, -n2), r2 = Math.floor(e3.image.width * i3), a3 = Math.floor(e3.image.height * i3), o3 = null !== t3 ? t3.x : 0, s3 = null !== t3 ? t3.y : 0;
        ve2.setTexture2D(e3, 0), Be2.copyTexSubImage2D(Be2.TEXTURE_2D, n2, 0, 0, o3, s3, r2, a3), he2.unbindTexture();
      };
      const st2 = Be2.createFramebuffer(), ct2 = Be2.createFramebuffer();
      this.copyTextureToTexture = function(e3, t3, n2 = null, i3 = null, r2 = 0, a3 = null) {
        let o3, s3, l3, c2, d3, u3, f2, p2, m3;
        null === a3 && (0 !== r2 ? ($i("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), a3 = r2, r2 = 0) : a3 = 0);
        const h3 = e3.isCompressedTexture ? e3.mipmaps[a3] : e3.image;
        if (null !== n2) o3 = n2.max.x - n2.min.x, s3 = n2.max.y - n2.min.y, l3 = n2.isBox3 ? n2.max.z - n2.min.z : 1, c2 = n2.min.x, d3 = n2.min.y, u3 = n2.isBox3 ? n2.min.z : 0;
        else {
          const t4 = Math.pow(2, -r2);
          o3 = Math.floor(h3.width * t4), s3 = Math.floor(h3.height * t4), l3 = e3.isDataArrayTexture ? h3.depth : e3.isData3DTexture ? Math.floor(h3.depth * t4) : 1, c2 = 0, d3 = 0, u3 = 0;
        }
        null !== i3 ? (f2 = i3.x, p2 = i3.y, m3 = i3.z) : (f2 = 0, p2 = 0, m3 = 0);
        const _2 = Ne2.convert(t3.format), g3 = Ne2.convert(t3.type);
        let v3;
        t3.isData3DTexture ? (ve2.setTexture3D(t3, 0), v3 = Be2.TEXTURE_3D) : t3.isDataArrayTexture || t3.isCompressedArrayTexture ? (ve2.setTexture2DArray(t3, 0), v3 = Be2.TEXTURE_2D_ARRAY) : (ve2.setTexture2D(t3, 0), v3 = Be2.TEXTURE_2D), Be2.pixelStorei(Be2.UNPACK_FLIP_Y_WEBGL, t3.flipY), Be2.pixelStorei(Be2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t3.premultiplyAlpha), Be2.pixelStorei(Be2.UNPACK_ALIGNMENT, t3.unpackAlignment);
        const E2 = Be2.getParameter(Be2.UNPACK_ROW_LENGTH), S2 = Be2.getParameter(Be2.UNPACK_IMAGE_HEIGHT), T2 = Be2.getParameter(Be2.UNPACK_SKIP_PIXELS), M3 = Be2.getParameter(Be2.UNPACK_SKIP_ROWS), x3 = Be2.getParameter(Be2.UNPACK_SKIP_IMAGES);
        Be2.pixelStorei(Be2.UNPACK_ROW_LENGTH, h3.width), Be2.pixelStorei(Be2.UNPACK_IMAGE_HEIGHT, h3.height), Be2.pixelStorei(Be2.UNPACK_SKIP_PIXELS, c2), Be2.pixelStorei(Be2.UNPACK_SKIP_ROWS, d3), Be2.pixelStorei(Be2.UNPACK_SKIP_IMAGES, u3);
        const A3 = e3.isDataArrayTexture || e3.isData3DTexture, R3 = t3.isDataArrayTexture || t3.isData3DTexture;
        if (e3.isDepthTexture) {
          const n3 = ge2.get(e3), i4 = ge2.get(t3), h4 = ge2.get(n3.__renderTarget), _3 = ge2.get(i4.__renderTarget);
          he2.bindFramebuffer(Be2.READ_FRAMEBUFFER, h4.__webglFramebuffer), he2.bindFramebuffer(Be2.DRAW_FRAMEBUFFER, _3.__webglFramebuffer);
          for (let n4 = 0; n4 < l3; n4++) A3 && (Be2.framebufferTextureLayer(Be2.READ_FRAMEBUFFER, Be2.COLOR_ATTACHMENT0, ge2.get(e3).__webglTexture, r2, u3 + n4), Be2.framebufferTextureLayer(Be2.DRAW_FRAMEBUFFER, Be2.COLOR_ATTACHMENT0, ge2.get(t3).__webglTexture, a3, m3 + n4)), Be2.blitFramebuffer(c2, d3, o3, s3, f2, p2, o3, s3, Be2.DEPTH_BUFFER_BIT, Be2.NEAREST);
          he2.bindFramebuffer(Be2.READ_FRAMEBUFFER, null), he2.bindFramebuffer(Be2.DRAW_FRAMEBUFFER, null);
        } else if (0 !== r2 || e3.isRenderTargetTexture || ge2.has(e3)) {
          const n3 = ge2.get(e3), i4 = ge2.get(t3);
          he2.bindFramebuffer(Be2.READ_FRAMEBUFFER, st2), he2.bindFramebuffer(Be2.DRAW_FRAMEBUFFER, ct2);
          for (let e4 = 0; e4 < l3; e4++) A3 ? Be2.framebufferTextureLayer(Be2.READ_FRAMEBUFFER, Be2.COLOR_ATTACHMENT0, n3.__webglTexture, r2, u3 + e4) : Be2.framebufferTexture2D(Be2.READ_FRAMEBUFFER, Be2.COLOR_ATTACHMENT0, Be2.TEXTURE_2D, n3.__webglTexture, r2), R3 ? Be2.framebufferTextureLayer(Be2.DRAW_FRAMEBUFFER, Be2.COLOR_ATTACHMENT0, i4.__webglTexture, a3, m3 + e4) : Be2.framebufferTexture2D(Be2.DRAW_FRAMEBUFFER, Be2.COLOR_ATTACHMENT0, Be2.TEXTURE_2D, i4.__webglTexture, a3), 0 !== r2 ? Be2.blitFramebuffer(c2, d3, o3, s3, f2, p2, o3, s3, Be2.COLOR_BUFFER_BIT, Be2.NEAREST) : R3 ? Be2.copyTexSubImage3D(v3, a3, f2, p2, m3 + e4, c2, d3, o3, s3) : Be2.copyTexSubImage2D(v3, a3, f2, p2, c2, d3, o3, s3);
          he2.bindFramebuffer(Be2.READ_FRAMEBUFFER, null), he2.bindFramebuffer(Be2.DRAW_FRAMEBUFFER, null);
        } else R3 ? e3.isDataTexture || e3.isData3DTexture ? Be2.texSubImage3D(v3, a3, f2, p2, m3, o3, s3, l3, _2, g3, h3.data) : t3.isCompressedArrayTexture ? Be2.compressedTexSubImage3D(v3, a3, f2, p2, m3, o3, s3, l3, _2, h3.data) : Be2.texSubImage3D(v3, a3, f2, p2, m3, o3, s3, l3, _2, g3, h3) : e3.isDataTexture ? Be2.texSubImage2D(Be2.TEXTURE_2D, a3, f2, p2, o3, s3, _2, g3, h3.data) : e3.isCompressedTexture ? Be2.compressedTexSubImage2D(Be2.TEXTURE_2D, a3, f2, p2, h3.width, h3.height, _2, h3.data) : Be2.texSubImage2D(Be2.TEXTURE_2D, a3, f2, p2, o3, s3, _2, g3, h3);
        Be2.pixelStorei(Be2.UNPACK_ROW_LENGTH, E2), Be2.pixelStorei(Be2.UNPACK_IMAGE_HEIGHT, S2), Be2.pixelStorei(Be2.UNPACK_SKIP_PIXELS, T2), Be2.pixelStorei(Be2.UNPACK_SKIP_ROWS, M3), Be2.pixelStorei(Be2.UNPACK_SKIP_IMAGES, x3), 0 === a3 && t3.generateMipmaps && Be2.generateMipmap(v3), he2.unbindTexture();
      }, this.initRenderTarget = function(e3) {
        void 0 === ge2.get(e3).__webglFramebuffer && ve2.setupRenderTarget(e3);
      }, this.initTexture = function(e3) {
        e3.isCubeTexture ? ve2.setTextureCube(e3, 0) : e3.isData3DTexture ? ve2.setTexture3D(e3, 0) : e3.isDataArrayTexture || e3.isCompressedArrayTexture ? ve2.setTexture2DArray(e3, 0) : ve2.setTexture2D(e3, 0), he2.unbindTexture();
      }, this.resetState = function() {
        w2 = 0, I2 = 0, O2 = null, he2.reset(), Oe2.reset();
      }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
    get coordinateSystem() {
      return Ri;
    }
    get outputColorSpace() {
      return this._outputColorSpace;
    }
    set outputColorSpace(e2) {
      this._outputColorSpace = e2;
      const t2 = this.getContext();
      t2.drawingBufferColorSpace = ws._getDrawingBufferColorSpace(e2), t2.unpackColorSpace = ws._getUnpackColorSpace();
    }
  };

  // assets/js/rodin-studio.js
  var canvas = document.querySelector("#rodinStudioCanvas");
  var stage = document.querySelector("#rodinStudioStage");
  var scrollShell = document.querySelector("#scrollShell");
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var mobileQuery = window.matchMedia("(max-width: 900px)");
  var renderer;
  var scene;
  var camera;
  var workbench;
  var frameId = 0;
  var inView = true;
  var pageVisible = !document.hidden;
  var destroyed = false;
  var scrollProgress = 0;
  var pointer = new us();
  var targetPointer = new us();
  var interactionPointer = new us();
  var raycaster = new Gu();
  var interactiveCards = [];
  var highlightedCard = null;
  var disposables = [];
  function setStudioState(state) {
    document.body.dataset.studioState = state;
  }
  function supportsWebGL() {
    try {
      const probe = document.createElement("canvas");
      return Boolean(probe.getContext("webgl2") || probe.getContext("webgl"));
    } catch {
      return false;
    }
  }
  function track(resource) {
    disposables.push(resource);
    return resource;
  }
  function createMaterials() {
    return {
      paper: track(new Ul({ color: 16774620, roughness: 0.86, metalness: 0.02 })),
      white: track(new Ul({ color: 16775403, roughness: 0.7, metalness: 0.02 })),
      blueprint: track(new Ul({ color: 16750639, roughness: 0.46, metalness: 0.04 })),
      clay: track(new Ul({ color: 16758607, roughness: 0.62, metalness: 0.01 })),
      mint: track(new Ul({ color: 16769193, roughness: 0.62, metalness: 0.01 })),
      graphite: track(new Ul({ color: 1513757, roughness: 0.52, metalness: 0.12 })),
      glass: track(new ql({
        color: 16766370,
        roughness: 0.12,
        metalness: 0,
        transparent: true,
        opacity: 0.5,
        transmission: 0.42,
        thickness: 0.5
      }))
    };
  }
  function roundedCardGeometry(width = 1.7, height = 1.08, depth = 0.09) {
    return track(new Hn(width, height, depth, 4, 4, 1));
  }
  function createLabelTexture(label, accent, detail) {
    const textureCanvas = document.createElement("canvas");
    textureCanvas.width = 512;
    textureCanvas.height = 320;
    const context = textureCanvas.getContext("2d");
    context.fillStyle = accent;
    context.fillRect(0, 0, textureCanvas.width, textureCanvas.height);
    context.fillStyle = "#17191d";
    context.font = "700 34px monospace";
    context.fillText(detail, 32, 54);
    context.font = "900 86px sans-serif";
    context.fillText(label, 32, 185);
    context.fillStyle = "rgba(23,25,29,.58)";
    context.font = "600 22px monospace";
    context.fillText("RODIN / PROJECT SIGNAL", 32, 278);
    const texture = track(new dh(textureCanvas));
    texture.colorSpace = He;
    texture.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    return texture;
  }
  function createProjectCard(projectId, label, detail, color, position, rotation) {
    const material = track(new Ul({
      map: createLabelTexture(label, color, detail),
      roughness: 0.72,
      metalness: 0.01
    }));
    const card = new Yn(roundedCardGeometry(), material);
    card.position.copy(position);
    card.rotation.set(rotation.x, rotation.y, rotation.z);
    card.userData.baseY = position.y;
    card.userData.projectId = projectId;
    interactiveCards.push(card);
    return card;
  }
  function createWorkbench() {
    const materials = createMaterials();
    const group = new ca();
    group.rotation.set(-0.06, -0.18, 0.02);
    const core = new Yn(track(new Ol(0.42, 32, 32)), materials.glass);
    core.position.set(0, 0.32, 0.4);
    core.userData.baseY = 0.32;
    core.userData.phase = 0;
    group.add(core);
    const halo = new Yn(track(new Nl(0.66, 0.018, 12, 90)), materials.blueprint);
    halo.position.copy(core.position);
    halo.rotation.x = Math.PI / 2.4;
    halo.rotation.y = 0.2;
    group.add(halo);
    const cards = [
      createProjectCard("rscfox-ai", "AI", "AGENT WORKFLOW", "#ffe0a9", new ps(-2.55, 0.22, -0.7), new Mr(-0.16, 0.44, -0.08)),
      createProjectCard("xml-tool", "XML", "0→1 DELIVERY", "#fff8eb", new ps(2.55, 0.34, -0.6), new Mr(-0.16, -0.44, 0.08)),
      createProjectCard("xiaojianggo", "MAP", "UX JOURNEY", "#ff982f", new ps(-2.35, 0.5, 1.35), new Mr(-0.2, 0.36, 0.1)),
      createProjectCard("ejiahu", "CARE", "SERVICE SYSTEM", "#ffd18f", new ps(2.35, 0.45, 1.4), new Mr(-0.2, -0.36, -0.1))
    ];
    cards.forEach((card, index) => {
      card.userData.phase = index * 0.75;
      group.add(card);
    });
    cards.forEach((card) => {
      const from = core.position.clone();
      const to = card.position.clone();
      const mid = from.clone().lerp(to, 0.5);
      mid.y += 0.32;
      const curve = new Rh([from, mid, to]);
      const flow = new Yn(track(new Fl(curve, 40, 0.022, 8, false)), materials.glass);
      group.add(flow);
    });
    const signalGeometry = track(new zl(0.12, 2));
    const signalPositions = [
      [-3.2, 0.85, -0.9], [-2.9, 1.05, 0.9], [-1.6, 1.15, -1.2],
      [1.6, 1.2, -1.1], [2.9, 1.0, 0.8], [3.2, 0.75, -0.7], [0, 1.4, 1.6]
    ];
    signalPositions.forEach((position, index) => {
      const signal = new Yn(signalGeometry, index % 3 === 0 ? materials.clay : materials.blueprint);
      signal.position.set(...position);
      signal.userData.baseY = signal.position.y;
      signal.userData.phase = index * 0.48;
      group.add(signal);
    });
    const namePlate = new Yn(
      track(new Hn(2.8, 0.6, 0.12)),
      track(new Ul({
        map: createLabelTexture("RODIN", "#fff5dc", "PRODUCT × UX"),
        roughness: 0.76
      }))
    );
    namePlate.position.set(0.15, -0.95, 2.2);
    namePlate.rotation.set(-0.98, 0, 0);
    group.add(namePlate);
    return group;
  }
  function resizeRenderer() {
    if (!renderer || !stage || !camera) return;
    const rect = stage.getBoundingClientRect();
    const mobile = mobileQuery.matches;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.25 : 1.75));
    renderer.setSize(Math.max(1, rect.width), Math.max(1, rect.height), false);
    camera.aspect = rect.width / Math.max(1, rect.height);
    camera.position.z = mobile ? 11.4 : 9.4;
    camera.position.y = mobile ? 4.5 : 4.2;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
  }
  function updateScrollProgress() {
    if (!scrollShell || !stage) return;
    const limit = Math.max(1, stage.offsetHeight * 0.95);
    scrollProgress = cs.clamp(scrollShell.scrollTop / limit, 0, 1);
  }
  function updatePointer(event) {
    if (!stage || mobileQuery.matches) return;
    const rect = stage.getBoundingClientRect();
    targetPointer.x = cs.clamp((event.clientX - rect.left) / rect.width * 2 - 1, -1, 1);
    targetPointer.y = cs.clamp(-((event.clientY - rect.top) / rect.height * 2 - 1), -1, 1);
  }
  function cardFromPointer(event) {
    if (!canvas || !camera || !scene) return null;
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return null;
    interactionPointer.x = (event.clientX - rect.left) / rect.width * 2 - 1;
    interactionPointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    scene.updateMatrixWorld(true);
    raycaster.setFromCamera(interactionPointer, camera);
    return raycaster.intersectObjects(interactiveCards, false)[0]?.object || null;
  }
  function setHighlightedCard(card) {
    if (highlightedCard === card) return;
    highlightedCard = card;
    if (canvas) canvas.style.cursor = card ? "pointer" : "default";
    if (reducedMotion) renderFrame(performance.now());
  }
  function handleCardPointerMove(event) {
    setHighlightedCard(cardFromPointer(event));
  }
  function handleCardPointerLeave() {
    setHighlightedCard(null);
  }
  function handleCardClick(event) {
    const card = cardFromPointer(event);
    if (!card?.userData.projectId) return;
    window.dispatchEvent(new CustomEvent("rodin-project-select", {
      detail: { projectId: card.userData.projectId }
    }));
  }
  function handleExternalHighlight(event) {
    const projectId = event.detail?.projectId;
    setHighlightedCard(interactiveCards.find((card) => card.userData.projectId === projectId) || null);
  }
  function updateScene(time) {
    if (!workbench) return;
    pointer.lerp(targetPointer, 0.045);
    workbench.rotation.y = -0.22 + pointer.x * 0.08 + scrollProgress * 0.13;
    workbench.rotation.x = -0.08 - pointer.y * 0.045 + scrollProgress * 0.035;
    workbench.position.y = -scrollProgress * 0.18;
    workbench.position.x = scrollProgress * 0.12;
    workbench.children.forEach((child) => {
      if (child.userData.baseY === void 0) return;
      const selectedLift = child === highlightedCard ? 0.14 : 0;
      const targetScale = child === highlightedCard ? 1.06 : 1;
      child.position.y = child.userData.baseY + selectedLift + Math.sin(time * 65e-5 + child.userData.phase) * 0.055;
      child.scale.x += (targetScale - child.scale.x) * 0.14;
      child.scale.y += (targetScale - child.scale.y) * 0.14;
      child.scale.z += (targetScale - child.scale.z) * 0.14;
    });
  }
  function renderFrame(time = 0) {
    if (!renderer || !scene || !camera || destroyed) return;
    updateScene(time);
    renderer.render(scene, camera);
  }
  function animate(time) {
    if (destroyed || reducedMotion) return;
    if (inView && pageVisible) renderFrame(time);
    frameId = window.requestAnimationFrame(animate);
  }
  function disposeObject(object) {
    object.traverse((child) => {
      child.geometry?.dispose?.();
      if (Array.isArray(child.material)) child.material.forEach((material) => material.dispose?.());
      else child.material?.dispose?.();
    });
  }
  var stageObserver;
  function destroy() {
    if (destroyed) return;
    destroyed = true;
    window.cancelAnimationFrame(frameId);
    window.removeEventListener("resize", resizeRenderer);
    window.removeEventListener("pointermove", updatePointer);
    canvas?.removeEventListener("pointermove", handleCardPointerMove);
    canvas?.removeEventListener("pointerleave", handleCardPointerLeave);
    canvas?.removeEventListener("click", handleCardClick);
    window.removeEventListener("rodin-studio-highlight", handleExternalHighlight);
    document.removeEventListener("visibilitychange", handleVisibilityChange);
    scrollShell?.removeEventListener("scroll", updateScrollProgress);
    stageObserver?.disconnect();
    if (workbench) disposeObject(workbench);
    disposables.forEach((resource) => resource.dispose?.());
    renderer?.dispose();
    window.__rodinStudio = void 0;
  }
  function handleVisibilityChange() {
    pageVisible = !document.hidden;
    if (!pageVisible) setStudioState("paused");
    else {
      setStudioState("ready");
      if (reducedMotion) renderFrame();
    }
  }
  function init() {
    if (!canvas || !stage || !supportsWebGL()) {
      setStudioState("fallback");
      return;
    }
    renderer = new fa2({
      canvas,
      antialias: !mobileQuery.matches,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.outputColorSpace = He;
    renderer.setClearColor(0, 0);
    scene = new ya();
    camera = new na(34, 1, 0.1, 100);
    camera.position.set(0, 4.2, 9.4);
    camera.lookAt(0, -0.15, 0);
    scene.add(new Rc(16777215, 10185530, 2.4));
    const keyLight = new Zc(16777215, 4.8);
    keyLight.position.set(-4, 8, 7);
    scene.add(keyLight);
    const fillLight = new Zc(16758120, 2.1);
    fillLight.position.set(6, 3, -4);
    scene.add(fillLight);
    workbench = createWorkbench();
    scene.add(workbench);
    canvas.dataset.motion = reducedMotion ? "static" : "animated";
    window.addEventListener("resize", resizeRenderer, { passive: true });
    window.addEventListener("pointermove", updatePointer, { passive: true });
    canvas.addEventListener("pointermove", handleCardPointerMove, { passive: true });
    canvas.addEventListener("pointerleave", handleCardPointerLeave, { passive: true });
    canvas.addEventListener("click", handleCardClick);
    window.addEventListener("rodin-studio-highlight", handleExternalHighlight);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    scrollShell?.addEventListener("scroll", updateScrollProgress, { passive: true });
    stageObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (reducedMotion && inView) renderFrame();
    }, { root: scrollShell, threshold: 0.02 });
    stageObserver.observe(stage);
    resizeRenderer();
    updateScrollProgress();
    renderFrame();
    setStudioState("ready");
    window.dispatchEvent(new CustomEvent("rodin-studio-ready"));
    if (!reducedMotion) frameId = window.requestAnimationFrame(animate);
  }
  window.__rodinStudio = {
    destroy,
    get projectIds() {
      return interactiveCards.map((card) => card.userData.projectId);
    }
  };
  try {
    init();
  } catch (error) {
    console.error("Rodin Product Studio failed to initialize", error);
    setStudioState("fallback");
  }
  window.addEventListener("beforeunload", destroy, { once: true });
})();
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
