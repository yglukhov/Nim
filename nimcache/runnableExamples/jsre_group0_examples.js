/* Generated by the Nim Compiler v1.7.3 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
var NTI134217749 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217751 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217741 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217743 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554435 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI33555813 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI33555171 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555179 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33554450 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI33555178 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33555175 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555176 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217745 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554449 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NNI134217745 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217745.node = NNI134217745;
var NNI33555176 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555176.node = NNI33555176;
NTI33555178.base = NTI33555175;
NTI33555179.base = NTI33555175;
var NNI33555175 = {kind: 2, len: 5, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI33555178, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI33554450, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI33554449, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI33554449, name: "trace", sons: null}, 
{kind: 1, offset: "up", len: 0, typ: NTI33555179, name: "up", sons: null}]};
NTI33555175.node = NNI33555175;
var NNI33555171 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555171.node = NNI33555171;
NTI33555175.base = NTI33555171;
NTI33555176.base = NTI33555175;
NTI134217745.base = NTI33555176;
var NNI33555813 = {kind: 2, len: 3, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI33554450, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI33554435, name: "Field1", sons: null}, 
{kind: 1, offset: "Field2", len: 0, typ: NTI33554450, name: "Field2", sons: null}]};
NTI33555813.node = NNI33555813;
var NNI134217743 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217743.node = NNI134217743;
var NNI134217741 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217741.node = NNI134217741;
NTI134217741.base = NTI33555176;
NTI134217743.base = NTI134217741;
var NNI134217751 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217751.node = NNI134217751;
NTI134217751.base = NTI33555176;
var NNI134217749 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217749.node = NNI134217749;
NTI134217749.base = NTI33555176;

function setConstr() {
        var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

  
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_33557073, src_33557074, ti_33557075) {
  var result_33557084 = null;

    switch (ti_33557075.kind) {
    case 21:
    case 22:
    case 23:
    case 5:
      if (!(isFatPointer_33557064(ti_33557075))) {
      result_33557084 = src_33557074;
      }
      else {
        result_33557084 = [src_33557074[0], src_33557074[1]];
      }
      
      break;
    case 19:
            if (dest_33557073 === null || dest_33557073 === undefined) {
        dest_33557073 = {};
      }
      else {
        for (var key in dest_33557073) { delete dest_33557073[key]; }
      }
      for (var key in src_33557074) { dest_33557073[key] = src_33557074[key]; }
      result_33557084 = dest_33557073;
    
      break;
    case 18:
    case 17:
      if (!((ti_33557075.base == null))) {
      result_33557084 = nimCopy(dest_33557073, src_33557074, ti_33557075.base);
      }
      else {
      if ((ti_33557075.kind == 17)) {
      result_33557084 = (dest_33557073 === null || dest_33557073 === undefined) ? {m_type: ti_33557075} : dest_33557073;
      }
      else {
        result_33557084 = (dest_33557073 === null || dest_33557073 === undefined) ? {} : dest_33557073;
      }
      }
      nimCopyAux(result_33557084, src_33557074, ti_33557075.node);
      break;
    case 4:
    case 16:
            if(ArrayBuffer.isView(src_33557074)) { 
        if(dest_33557073 === null || dest_33557073 === undefined || dest_33557073.length != src_33557074.length) {
          dest_33557073 = new src_33557074.constructor(src_33557074);
        } else {
          dest_33557073.set(src_33557074, 0);
        }
        result_33557084 = dest_33557073;
      } else {
        if (src_33557074 === null) {
          result_33557084 = null;
        }
        else {
          if (dest_33557073 === null || dest_33557073 === undefined || dest_33557073.length != src_33557074.length) {
            dest_33557073 = new Array(src_33557074.length);
          }
          result_33557084 = dest_33557073;
          for (var i = 0; i < src_33557074.length; ++i) {
            result_33557084[i] = nimCopy(result_33557084[i], src_33557074[i], ti_33557075.base);
          }
        }
      }
    
      break;
    case 24:
    case 27:
            if (src_33557074 === null) {
        result_33557084 = null;
      }
      else {
        if (dest_33557073 === null || dest_33557073 === undefined || dest_33557073.length != src_33557074.length) {
          dest_33557073 = new Array(src_33557074.length);
        }
        result_33557084 = dest_33557073;
        for (var i = 0; i < src_33557074.length; ++i) {
          result_33557084[i] = nimCopy(result_33557084[i], src_33557074[i], ti_33557075.base);
        }
      }
    
      break;
    case 28:
            if (src_33557074 !== null) {
        result_33557084 = src_33557074.slice(0);
      }
    
      break;
    default: 
      result_33557084 = src_33557074;
      break;
    }

  return result_33557084;

}

function arrayConstr(len_33557112, value_33557113, typ_33557114) {
        var result = new Array(len_33557112);
    for (var i = 0; i < len_33557112; ++i) result[i] = nimCopy(null, value_33557113, typ_33557114);
    return result;
  

  
}

function mnewString(len_33556826) {
        return new Array(len_33556826);
  

  
}

function addInt(a_33556873, b_33556874) {
        var result = a_33556873 + b_33556874;
    checkOverflowInt(result);
    return result;
  

  
}

function chckRange(i_33557122, a_33557123, b_33557124) {
  var result_33557125 = 0;

  BeforeRet: {
    if (((a_33557123 <= i_33557122) && (i_33557122 <= b_33557124))) {
    result_33557125 = i_33557122;
    break BeforeRet;
    }
    else {
    raiseRangeError();
    }
    
  };

  return result_33557125;

}

function chckIndx(i_33557117, a_33557118, b_33557119) {
  var result_33557120 = 0;

  BeforeRet: {
    if (((a_33557118 <= i_33557117) && (i_33557117 <= b_33557119))) {
    result_33557120 = i_33557117;
    break BeforeRet;
    }
    else {
    raiseIndexError(i_33557117, a_33557118, b_33557119);
    }
    
  };

  return result_33557120;

}

function cstrToNimstr(c_33556734) {
      var ln = c_33556734.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_33556734.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else {
      if (ch < 2048) {
        result[r] = (ch >> 6) | 192;
      }
      else {
        if (ch < 55296 || ch >= 57344) {
          result[r] = (ch >> 12) | 224;
        }
        else {
            ++i;
            ch = 65536 + (((ch & 1023) << 10) | (c_33556734.charCodeAt(i) & 1023));
            result[r] = (ch >> 18) | 240;
            ++r;
            result[r] = ((ch >> 12) & 63) | 128;
        }
        ++r;
        result[r] = ((ch >> 6) & 63) | 128;
      }
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  return result;
  

  
}

function toJSStr(s_33556737) {
  var result_33556738 = null;

    var res_33556772 = newSeq_33556755((s_33556737).length);
    var i_33556773 = 0;
    var j_33556774 = 0;
    Label1: {
        Label2: while (true) {
        if (!(i_33556773 < (s_33556737).length)) break Label2;
          var c_33556775 = s_33556737[i_33556773];
          if ((c_33556775 < 128)) {
          res_33556772[j_33556774] = String.fromCharCode(c_33556775);
          i_33556773 += 1;
          }
          else {
            var helper_33556788 = newSeq_33556755(0);
            Label3: {
                Label4: while (true) {
                if (!true) break Label4;
                  var code_33556789 = c_33556775.toString(16);
                  if ((((code_33556789) == null ? 0 : (code_33556789).length) == 1)) {
                  helper_33556788.push("%0");;
                  }
                  else {
                  helper_33556788.push("%");;
                  }
                  
                  helper_33556788.push(code_33556789);;
                  i_33556773 += 1;
                  if ((((s_33556737).length <= i_33556773) || (s_33556737[i_33556773] < 128))) {
                  break Label3;
                  }
                  
                  c_33556775 = s_33556737[i_33556773];
                }
            };
++excHandler;
            try {
            res_33556772[j_33556774] = decodeURIComponent(helper_33556788.join(""));
--excHandler;
} catch (EXCEPTION) {
 var prevJSError = lastJSError;
 lastJSError = EXCEPTION;
 --excHandler;
            res_33556772[j_33556774] = helper_33556788.join("");
            lastJSError = prevJSError;
            } finally {
            }
          }
          
          j_33556774 += 1;
        }
    };
    if (res_33556772.length < j_33556774) { for (var i = res_33556772.length ; i < j_33556774 ; ++i) res_33556772.push(null); }
               else { res_33556772.length = j_33556774; };
    result_33556738 = res_33556772.join("");

  return result_33556738;

}

function raiseException(e_33556597, ename_33556598) {
    e_33556597.name = ename_33556598;
    if ((excHandler == 0)) {
    unhandledException(e_33556597);
    }
    
    e_33556597.trace = nimCopy(null, rawWriteStackTrace_33556561(), NTI33554449);
    throw e_33556597;

  
}

function makeNimstrLit(c_33556731) {
      var result = [];
  for (var i = 0; i < c_33556731.length; ++i) {
    result[i] = c_33556731.charCodeAt(i);
  }
  return result;
  

  
}

function subInt(a_33556877, b_33556878) {
        var result = a_33556877 - b_33556878;
    checkOverflowInt(result);
    return result;
  

  
}

function eqStrings(a_33556864, b_33556865) {
        if (a_33556864 == b_33556865) return true;
    if (a_33556864 === null && b_33556865.length == 0) return true;
    if (b_33556865 === null && a_33556864.length == 0) return true;
    if ((!a_33556864) || (!b_33556865)) return false;
    var alen = a_33556864.length;
    if (alen != b_33556865.length) return false;
    for (var i = 0; i < alen; ++i)
      if (a_33556864[i] != b_33556865[i]) return false;
    return true;
  

  
}
var F = {procname: "module jsre", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsre.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsre.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsre.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsre.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsre.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsre.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsre.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsre.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsre.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsre.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsre.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsre.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsre.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsre.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsre.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsre.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_1.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function contains_654311469(pattern_654311470, self_654311471) {
  var result_654311472 = false;

  var F = {procname: "jsre.contains", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsre.nim", line: 0};
  framePtr = F;
    F.line = 58;
    result_654311472 = self_654311471.test(pattern_654311470);
  framePtr = F.prev;

  return result_654311472;

}

function isFatPointer_33557064(ti_33557065) {
  var result_33557066 = false;

  BeforeRet: {
    result_33557066 = !((ConstSet1[ti_33557065.base.kind] != undefined));
    break BeforeRet;
  };

  return result_33557066;

}

function nimCopyAux(dest_33557077, src_33557078, n_33557079) {
    switch (n_33557079.kind) {
    case 0:
      break;
    case 1:
            dest_33557077[n_33557079.offset] = nimCopy(dest_33557077[n_33557079.offset], src_33557078[n_33557079.offset], n_33557079.typ);
    
      break;
    case 2:
          for (var i = 0; i < n_33557079.sons.length; i++) {
      nimCopyAux(dest_33557077, src_33557078, n_33557079.sons[i]);
    }
    
      break;
    case 3:
            dest_33557077[n_33557079.offset] = nimCopy(dest_33557077[n_33557079.offset], src_33557078[n_33557079.offset], n_33557079.typ);
      for (var i = 0; i < n_33557079.sons.length; ++i) {
        nimCopyAux(dest_33557077, src_33557078, n_33557079.sons[i][1]);
      }
    
      break;
    }

  
}

function add_33556385(x_33556386, x_33556386_Idx, y_33556387) {
          if (x_33556386[x_33556386_Idx] === null) { x_33556386[x_33556386_Idx] = []; }
      var off = x_33556386[x_33556386_Idx].length;
      x_33556386[x_33556386_Idx].length += y_33556387.length;
      for (var i = 0; i < y_33556387.length; ++i) {
        x_33556386[x_33556386_Idx][off+i] = y_33556387.charCodeAt(i);
      }
    

  
}

function raiseOverflow() {
    raiseException({message: [111,118,101,114,45,32,111,114,32,117,110,100,101,114,102,108,111,119], parent: null, m_type: NTI134217743, name: null, trace: [], up: null}, "OverflowDefect");

  
}

function checkOverflowInt(a_33556871) {
        if (a_33556871 > 2147483647 || a_33556871 < -2147483648) raiseOverflow();
  

  
}

function raiseRangeError() {
    raiseException({message: [118,97,108,117,101,32,111,117,116,32,111,102,32,114,97,110,103,101], parent: null, m_type: NTI134217751, name: null, trace: [], up: null}, "RangeDefect");

  
}

function raiseIndexError(i_33556684, a_33556685, b_33556686) {
    var Temporary1;

    if ((b_33556686 < a_33556685)) {
    Temporary1 = [105,110,100,101,120,32,111,117,116,32,111,102,32,98,111,117,110,100,115,44,32,116,104,101,32,99,111,110,116,97,105,110,101,114,32,105,115,32,101,109,112,116,121];
    }
    else {
    Temporary1 = ([105,110,100,101,120,32] || []).concat(HEX24_352321544(i_33556684) || [],[32,110,111,116,32,105,110,32] || [],HEX24_352321544(a_33556685) || [],[32,46,46,32] || [],HEX24_352321544(b_33556686) || []);
    }
    
    raiseException({message: nimCopy(null, Temporary1, NTI33554449), parent: null, m_type: NTI134217749, name: null, trace: [], up: null}, "IndexDefect");

  
}

function addChars_285212850(result_285212852, result_285212852_Idx, x_285212853, start_285212854, n_285212855) {
  var F = {procname: "addChars.addChars", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 43;
    var old_285212856 = (result_285212852[result_285212852_Idx]).length;
    F.line = 44;
    (result_285212852[result_285212852_Idx].length = chckRange(addInt(old_285212856, n_285212855), 0, 2147483647));
    Label1: {
      F.line = 46;
      var iHEX60gensym4_285212870 = 0;
      F.line = 119;
      var i_637534237 = 0;
      Label2: {
        F.line = 120;
          Label3: while (true) {
          if (!(i_637534237 < n_285212855)) break Label3;
            F.line = 49;
            iHEX60gensym4_285212870 = i_637534237;
            F.line = 49;
            result_285212852[result_285212852_Idx][chckIndx(addInt(old_285212856, iHEX60gensym4_285212870), 0, (result_285212852[result_285212852_Idx]).length - 1)] = x_285212853.charCodeAt(chckIndx(addInt(start_285212854, iHEX60gensym4_285212870), 0, (x_285212853).length - 1));
            F.line = 122;
            i_637534237 = addInt(i_637534237, 1);
          }
      };
    };
  framePtr = F.prev;

  
}

function addChars_285212846(result_285212848, result_285212848_Idx, x_285212849) {
  var F = {procname: "addChars.addChars", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 55;
    addChars_285212850(result_285212848, result_285212848_Idx, x_285212849, 0, ((x_285212849) == null ? 0 : (x_285212849).length));
  framePtr = F.prev;

  
}

function addInt_285212871(result_285212872, result_285212872_Idx, x_285212873) {
  var F = {procname: "digitsutils.addInt", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 113;
    addChars_285212846(result_285212872, result_285212872_Idx, ((x_285212873) + ""));
  framePtr = F.prev;

  
}

function addInt_285212892(result_285212893, result_285212893_Idx, x_285212894) {
  var F = {procname: "digitsutils.addInt", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 117;
    addInt_285212871(result_285212893, result_285212893_Idx, x_285212894);
  framePtr = F.prev;

  
}

function HEX24_352321544(x_352321545) {
  var result_352321546 = [[]];

  var F = {procname: "dollars.$", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/dollars.nim", line: 0};
  framePtr = F;
    F.line = 18;
    addInt_285212892(result_352321546, 0, x_352321545);
  framePtr = F.prev;

  return result_352321546[0];

}

function auxWriteStackTrace_33556486(f_33556487) {
  var result_33556488 = [[]];

    var it_33556496 = f_33556487;
    var i_33556497 = 0;
    var total_33556498 = 0;
    var tempFrames_33556499 = arrayConstr(64, {Field0: null, Field1: 0, Field2: null}, NTI33555813);
    Label1: {
        Label2: while (true) {
        if (!(!((it_33556496 == null)) && (i_33556497 <= 63))) break Label2;
          tempFrames_33556499[i_33556497].Field0 = it_33556496.procname;
          tempFrames_33556499[i_33556497].Field1 = it_33556496.line;
          tempFrames_33556499[i_33556497].Field2 = it_33556496.filename;
          i_33556497 += 1;
          total_33556498 += 1;
          it_33556496 = it_33556496.prev;
        }
    };
    Label3: {
        Label4: while (true) {
        if (!!((it_33556496 == null))) break Label4;
          total_33556498 += 1;
          it_33556496 = it_33556496.prev;
        }
    };
    result_33556488[0] = nimCopy(null, [], NTI33554449);
    if (!((total_33556498 == i_33556497))) {
    result_33556488[0].push.apply(result_33556488[0], [40]);;
    result_33556488[0].push.apply(result_33556488[0], HEX24_352321544((total_33556498 - i_33556497)));;
    result_33556488[0].push.apply(result_33556488[0], [32,99,97,108,108,115,32,111,109,105,116,116,101,100,41,32,46,46,46,10]);;
    }
    
    Label5: {
      var j_33556532 = 0;
      var colontmp__637534229 = 0;
      colontmp__637534229 = (i_33556497 - 1);
      var res_637534231 = colontmp__637534229;
      Label6: {
          Label7: while (true) {
          if (!(0 <= res_637534231)) break Label7;
            j_33556532 = res_637534231;
            result_33556488[0].push.apply(result_33556488[0], cstrToNimstr(tempFrames_33556499[j_33556532].Field2));;
            if ((0 < tempFrames_33556499[j_33556532].Field1)) {
            result_33556488[0].push.apply(result_33556488[0], [40]);;
            addInt_285212892(result_33556488, 0, tempFrames_33556499[j_33556532].Field1);
            if (false) {
            result_33556488[0].push.apply(result_33556488[0], [44,32]);;
            addInt_285212892(result_33556488, 0, 0);
            }
            
            result_33556488[0].push.apply(result_33556488[0], [41]);;
            }
            
            result_33556488[0].push.apply(result_33556488[0], [32,97,116,32]);;
            add_33556385(result_33556488, 0, tempFrames_33556499[j_33556532].Field0);
            result_33556488[0].push.apply(result_33556488[0], [10]);;
            res_637534231 -= 1;
          }
      };
    };

  return result_33556488[0];

}

function rawWriteStackTrace_33556561() {
  var result_33556562 = [];

    if (!((framePtr == null))) {
    result_33556562 = nimCopy(null, ([84,114,97,99,101,98,97,99,107,32,40,109,111,115,116,32,114,101,99,101,110,116,32,99,97,108,108,32,108,97,115,116,41,10] || []).concat(auxWriteStackTrace_33556486(framePtr) || []), NTI33554449);
    }
    else {
      result_33556562 = nimCopy(null, [78,111,32,115,116,97,99,107,32,116,114,97,99,101,98,97,99,107,32,97,118,97,105,108,97,98,108,101,10], NTI33554449);
    }
    

  return result_33556562;

}

function newSeq_33556755(len_33556757) {
  var result_33556758 = [];

  var F = {procname: "newSeq.newSeq", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system.nim", line: 0};
  framePtr = F;
    F.line = 604;
    result_33556758 = new Array(len_33556757); for (var i = 0 ; i < len_33556757 ; ++i) { result_33556758[i] = null; }  framePtr = F.prev;

  return result_33556758;

}

function unhandledException(e_33556593) {
    var buf_33556594 = [[]];
    if (!(((e_33556593.message).length == 0))) {
    buf_33556594[0].push.apply(buf_33556594[0], [69,114,114,111,114,58,32,117,110,104,97,110,100,108,101,100,32,101,120,99,101,112,116,105,111,110,58,32]);;
    buf_33556594[0].push.apply(buf_33556594[0], e_33556593.message);;
    }
    else {
    buf_33556594[0].push.apply(buf_33556594[0], [69,114,114,111,114,58,32,117,110,104,97,110,100,108,101,100,32,101,120,99,101,112,116,105,111,110]);;
    }
    
    buf_33556594[0].push.apply(buf_33556594[0], [32,91]);;
    add_33556385(buf_33556594, 0, e_33556593.name);
    buf_33556594[0].push.apply(buf_33556594[0], [93,10]);;
    buf_33556594[0].push.apply(buf_33556594[0], rawWriteStackTrace_33556561());;
    var cbuf_33556595 = toJSStr(buf_33556594[0]);
    framePtr = null;
      if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_33556595);
  }
  else {
    throw cbuf_33556595;
  }
  

  
}

function raiseAssert_251658262(msg_251658263) {
  var F = {procname: "assertions.raiseAssert", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/assertions.nim", line: 0};
  framePtr = F;
    F.line = 31;
    raiseException({message: nimCopy(null, msg_251658263, NTI33554449), parent: null, m_type: NTI134217745, name: null, trace: [], up: null}, "AssertionDefect");
  framePtr = F.prev;

  
}

function failedAssertImpl_251658292(msg_251658293) {
  var F = {procname: "assertions.failedAssertImpl", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/assertions.nim", line: 0};
  framePtr = F;
    F.line = 41;
    raiseAssert_251658262(msg_251658293);
  framePtr = F.prev;

  
}
var F = {procname: "module jsre_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_1.nim", line: 0};
framePtr = F;
F.line = 53;
var jsregex_637534210 = new RegExp("bc$", "i");
if (!(contains_654311469("abc", jsregex_637534210))) {
F.line = 53;
failedAssertImpl_251658292(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_1.nim(9, 10) `jsregex in r\"abc\"` "));
}

if (!(!(contains_654311469("abcd", jsregex_637534210)))) {
F.line = 53;
failedAssertImpl_251658292(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_1.nim(10, 10) `jsregex notin r\"abcd\"` "));
}

if (!(contains_654311469("xabc", jsregex_637534210))) {
F.line = 53;
failedAssertImpl_251658292(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_1.nim(11, 10) `\"xabc\".contains jsregex` "));
}

framePtr = F.prev;
var F = {procname: "module jsre_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_1.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_1.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre_examples_2", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_2.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function startsWith_654311473(pattern_654311474, self_654311475) {
  var result_654311476 = false;

  var F = {procname: "jsre.startsWith", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsre.nim", line: 0};
  framePtr = F;
    F.line = 61;
    result_654311476 = contains_654311469(pattern_654311474, new RegExp(toJSStr(([94] || []).concat(cstrToNimstr(self_654311475.source) || [])), self_654311475.flags));
  framePtr = F.prev;

  return result_654311476;

}
var F = {procname: "module jsre_examples_2", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_2.nim", line: 0};
framePtr = F;
F.line = 62;
var jsregex_671088642 = new RegExp("abc", "i");
if (!(startsWith_654311473("abcd", jsregex_671088642))) {
F.line = 62;
failedAssertImpl_251658292(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_2.nim(9, 10) `\"abcd\".startsWith jsregex` "));
}

framePtr = F.prev;
var F = {procname: "module jsre_examples_2", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_2.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre_examples_2", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_2.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre_examples_3", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_3.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function endsWith_654311486(pattern_654311487, self_654311488) {
  var result_654311489 = false;

  var F = {procname: "jsre.endsWith", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsre.nim", line: 0};
  framePtr = F;
    F.line = 68;
    result_654311489 = contains_654311469(pattern_654311487, new RegExp(toJSStr((cstrToNimstr(self_654311488.source) || []).concat([36] || [])), self_654311488.flags));
  framePtr = F.prev;

  return result_654311489;

}
var F = {procname: "module jsre_examples_3", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_3.nim", line: 0};
framePtr = F;
F.line = 69;
var jsregex_687865858 = new RegExp("bcd", "i");
if (!(endsWith_654311486("abcd", jsregex_687865858))) {
F.line = 69;
failedAssertImpl_251658292(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_3.nim(9, 10) `\"abcd\".endsWith jsregex` "));
}

framePtr = F.prev;
var F = {procname: "module jsre_examples_3", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_3.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre_examples_3", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_3.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre_examples_4", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_4.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function HEX3DHEX3D_704643084(x_704643086, y_704643087) {
  var result_704643088 = false;

  var F = {procname: "==.==", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/comparisons.nim", line: 0};
  framePtr = F;
  BeforeRet: {
    F.line = 326;
    var sameObject_704643096 = false;
    F.line = 327;
    sameObject_704643096 = x_704643086 === y_704643087
    if (sameObject_704643096) {
    F.line = 328;
    result_704643088 = true;
    break BeforeRet;
    }
    
    if (!(((x_704643086).length == (y_704643087).length))) {
    F.line = 331;
    result_704643088 = false;
    break BeforeRet;
    }
    
    Label1: {
      F.line = 333;
      var i_704643110 = 0;
      F.line = 75;
      var colontmp__704643192 = 0;
      F.line = 333;
      colontmp__704643192 = subInt((x_704643086).length, 1);
      F.line = 90;
      var res_704643194 = 0;
      Label2: {
        F.line = 91;
          Label3: while (true) {
          if (!(res_704643194 <= colontmp__704643192)) break Label3;
            F.line = 333;
            i_704643110 = res_704643194;
            if (!((x_704643086[chckIndx(i_704643110, 0, (x_704643086).length - 1)] == y_704643087[chckIndx(i_704643110, 0, (y_704643087).length - 1)]))) {
            F.line = 335;
            result_704643088 = false;
            break BeforeRet;
            }
            
            F.line = 93;
            res_704643194 = addInt(res_704643194, 1);
          }
      };
    };
    F.line = 337;
    result_704643088 = true;
    break BeforeRet;
  };
  framePtr = F.prev;

  return result_704643088;

}

function HEX24_654311466(self_654311467) {
  var result_654311468 = [];

  var F = {procname: "jsre.$", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsre.nim", line: 0};
  framePtr = F;
    F.line = 49;
    result_654311468 = nimCopy(null, cstrToNimstr(self_654311467.toString()), NTI33554449);
  framePtr = F.prev;

  return result_654311468;

}
var F = {procname: "module jsre_examples_4", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_4.nim", line: 0};
framePtr = F;
F.line = 75;
var jsregex_704643074 = new RegExp("\\s+", "i");
F.line = 75;
jsregex_704643074.compile("\\w+", "i");
if (!(contains_654311469("nim javascript", jsregex_704643074))) {
F.line = 75;
failedAssertImpl_251658292(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_4.nim(10, 10) `\"nim javascript\".contains jsregex` "));
}

if (!(HEX3DHEX3D_704643084((jsregex_704643074.exec("nim javascript") || []), ["nim"]))) {
F.line = 75;
failedAssertImpl_251658292(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_4.nim(11, 10) `jsregex.exec(r\"nim javascript\") == @[\"nim\".cstring]` "));
}

if (!((jsregex_704643074.toString() == "/\\w+/i"))) {
F.line = 75;
failedAssertImpl_251658292(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_4.nim(12, 10) `jsregex.toCstring() == r\"/\\w+/i\"` "));
}

F.line = 75;
jsregex_704643074.compile("[0-9]", "i");
if (!(contains_654311469("0123456789abcd", jsregex_704643074))) {
F.line = 75;
failedAssertImpl_251658292(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_4.nim(14, 10) `\"0123456789abcd\".contains jsregex` "));
}

if (!(eqStrings(HEX24_654311466(jsregex_704643074), [47,91,48,45,57,93,47,105]))) {
F.line = 75;
failedAssertImpl_251658292(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_4.nim(15, 10) `$jsregex == \"/[0-9]/i\"` "));
}

F.line = 75;
jsregex_704643074.compile("abc", "i");
if (!(startsWith_654311473("abcd", jsregex_704643074))) {
F.line = 75;
failedAssertImpl_251658292(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_4.nim(17, 10) `\"abcd\".startsWith jsregex` "));
}

if (!(endsWith_654311486("dabc", jsregex_704643074))) {
F.line = 75;
failedAssertImpl_251658292(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_4.nim(18, 10) `\"dabc\".endsWith jsregex` "));
}

F.line = 75;
jsregex_704643074.compile("\\d", "i");
if (!(HEX3DHEX3D_704643084(("do1ne".split(jsregex_704643074) || []), ["do", "ne"]))) {
F.line = 75;
failedAssertImpl_251658292(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_4.nim(20, 10) `\"do1ne\".split(jsregex) == @[\"do\".cstring, \"ne\".cstring]` "));
}

F.line = 75;
jsregex_704643074.compile("[lw]", "i");
if (!(("hello world".replace(jsregex_704643074, "X") == "heXlo world"))) {
F.line = 75;
failedAssertImpl_251658292(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_4.nim(22, 10) `\"hello world\".replace(jsregex, \"X\") == \"heXlo world\"` "));
}

F.line = 75;
var digitsRegex_704643159 = new RegExp("\\d");
if (!(HEX3DHEX3D_704643084(("foo".match(digitsRegex_704643159) || []), []))) {
F.line = 75;
failedAssertImpl_251658292(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_4.nim(24, 10) `\"foo\".match(digitsRegex) == @[]` "));
}

framePtr = F.prev;
var F = {procname: "module jsre_examples_4", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_4.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre_examples_4", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_examples_4.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsre_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsre_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
