SystemJS.config({
  // meta: {
  //   'typescript': {
  //     "exports": "ts"
  //   }
  // },
  typescriptOptions: {
    // "target": "es5",
    // "module": "commonjs",
    "target": "es2015",
    // "module": "commonjs",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  },
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "app/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12",
      "ts": "github:frankwallis/plugin-typescript@5.0.1",
      "text": "github:systemjs/plugin-text@0.0.8"
    },
    "packages": {
      "github:frankwallis/plugin-typescript@5.0.1": {
        "map": {
          "typescript": "npm:typescript@2.0.0"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "app": {
      "format": "cjs",
      "main": "boot.ts",
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "ts"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "@angular/common": "npm:@angular/common@2.0.0-rc.4",
    "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.4",
    "@angular/core": "npm:@angular/core@2.0.0-rc.4",
    "@angular/forms": "npm:@angular/forms@0.2.0",
    "@angular/http": "npm:@angular/http@2.0.0-rc.4",
    "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.4",
    "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@2.0.0-rc.4",
    "@angular/router": "npm:@angular/router@3.0.0-beta.2",
    "@ngrx/core": "npm:@ngrx/core@1.0.1",
    "@ngrx/router": "npm:@ngrx/router@1.0.0-beta.2",
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "css": "github:systemjs/plugin-css@0.1.23",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "firebase": "npm:firebase@3.1.0",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "json": "github:systemjs/plugin-json@0.1.2",
    "lodash": "npm:lodash@4.13.1",
    "module": "github:jspm/nodelibs-module@0.2.0-alpha",
    "net": "github:jspm/nodelibs-net@0.2.0-alpha",
    "node-uuid": "npm:node-uuid@1.4.7",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "reflect-metadata": "npm:reflect-metadata@0.1.3",
    "require": "npm:require@2.4.20",
    "rxjs": "npm:rxjs@5.0.0-beta.6",
    "rxjs@beta10": "npm:rxjs@5.0.0-beta.10",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "tls": "github:jspm/nodelibs-tls@0.2.0-alpha",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "zone.js": "npm:zone.js@0.6.12"
  },
  packages: {
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "randombytes": "npm:randombytes@2.0.3",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "pbkdf2": "npm:pbkdf2@3.0.4"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "sha.js": "npm:sha.js@2.4.5",
        "cipher-base": "npm:cipher-base@1.0.2",
        "ripemd160": "npm:ripemd160@1.0.1"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "bn.js": "npm:bn.js@4.11.5"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "inherits": "npm:inherits@2.0.1",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "elliptic": "npm:elliptic@6.3.1",
        "bn.js": "npm:bn.js@4.11.5"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "bn.js": "npm:bn.js@4.11.5"
      }
    },
    "npm:pbkdf2@3.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "elliptic": "npm:elliptic@6.3.1",
        "bn.js": "npm:bn.js@4.11.5"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "asn1.js": "npm:asn1.js@4.8.0"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.5",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.1",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.5"
      }
    },
    "npm:elliptic@6.3.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "bn.js": "npm:bn.js@4.11.5",
        "brorand": "npm:brorand@1.0.5",
        "hash.js": "npm:hash.js@1.0.3"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:asn1.js@4.8.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "bn.js": "npm:bn.js@4.11.5",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.7.1"
      }
    },
    "npm:buffer@4.7.1": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.4"
      }
    },
    "npm:readable-stream@2.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31",
        "core-util-is": "npm:core-util-is@1.0.2",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:@ngrx/router@1.0.0-beta.2": {
      "map": {
        "path-to-regexp": "npm:path-to-regexp@1.5.3",
        "query-string": "npm:query-string@4.2.2"
      }
    },
    "npm:faye-websocket@0.9.3": {
      "map": {
        "websocket-driver": "npm:websocket-driver@0.6.5"
      }
    },
    "npm:query-string@4.2.2": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
      }
    },
    "npm:path-to-regexp@1.5.3": {
      "map": {
        "isarray": "npm:isarray@0.0.1"
      }
    },
    "npm:jsonwebtoken@5.7.0": {
      "map": {
        "ms": "npm:ms@0.7.1",
        "xtend": "npm:xtend@4.0.1",
        "jws": "npm:jws@3.1.3"
      }
    },
    "npm:websocket-driver@0.6.5": {
      "map": {
        "websocket-extensions": "npm:websocket-extensions@0.1.1"
      }
    },
    "npm:jws@3.1.3": {
      "map": {
        "jwa": "npm:jwa@1.1.3",
        "base64url": "npm:base64url@1.0.6"
      }
    },
    "npm:jwa@1.1.3": {
      "map": {
        "base64url": "npm:base64url@1.0.6",
        "buffer-equal-constant-time": "npm:buffer-equal-constant-time@1.0.1",
        "ecdsa-sig-formatter": "npm:ecdsa-sig-formatter@1.0.7"
      }
    },
    "npm:base64url@1.0.6": {
      "map": {
        "meow": "npm:meow@2.0.0",
        "concat-stream": "npm:concat-stream@1.4.10"
      }
    },
    "npm:meow@2.0.0": {
      "map": {
        "object-assign": "npm:object-assign@1.0.0",
        "camelcase-keys": "npm:camelcase-keys@1.0.0",
        "indent-string": "npm:indent-string@1.2.2",
        "minimist": "npm:minimist@1.2.0"
      }
    },
    "npm:concat-stream@1.4.10": {
      "map": {
        "readable-stream": "npm:readable-stream@1.1.14",
        "inherits": "npm:inherits@2.0.1",
        "typedarray": "npm:typedarray@0.0.6"
      }
    },
    "npm:ecdsa-sig-formatter@1.0.7": {
      "map": {
        "base64-url": "npm:base64-url@1.3.2"
      }
    },
    "npm:readable-stream@1.1.14": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@0.0.1",
        "stream-browserify": "npm:stream-browserify@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:indent-string@1.2.2": {
      "map": {
        "minimist": "npm:minimist@1.2.0",
        "repeating": "npm:repeating@1.1.3",
        "get-stdin": "npm:get-stdin@4.0.1"
      }
    },
    "npm:camelcase-keys@1.0.0": {
      "map": {
        "map-obj": "npm:map-obj@1.0.1",
        "camelcase": "npm:camelcase@1.2.1"
      }
    },
    "npm:stream-browserify@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@1.1.14"
      }
    },
    "npm:repeating@1.1.3": {
      "map": {
        "is-finite": "npm:is-finite@1.0.1"
      }
    },
    "npm:is-finite@1.0.1": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.0"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "querystring": "npm:querystring@0.2.0",
        "punycode": "npm:punycode@1.3.2"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.3.0"
      }
    },
    "npm:stream-http@2.3.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.4",
        "xtend": "npm:xtend@4.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0"
      }
    },
    "npm:rxjs@5.0.0-beta.10": {
      "map": {
        "symbol-observable": "npm:symbol-observable@1.0.1"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:require@2.4.20": {
      "map": {
        "uglify-js": "npm:uglify-js@2.3.0",
        "std": "npm:std@0.1.40"
      }
    },
    "npm:uglify-js@2.3.0": {
      "map": {
        "source-map": "npm:source-map@0.1.43",
        "optimist": "npm:optimist@0.3.7",
        "async": "npm:async@0.2.10"
      }
    },
    "npm:source-map@0.1.43": {
      "map": {
        "amdefine": "npm:amdefine@1.0.0"
      }
    },
    "npm:optimist@0.3.7": {
      "map": {
        "wordwrap": "npm:wordwrap@0.0.3"
      }
    },
    "npm:firebase@3.1.0": {
      "map": {
        "faye-websocket": "npm:faye-websocket@0.9.3",
        "jsonwebtoken": "npm:jsonwebtoken@5.7.0",
        "rsvp": "npm:rsvp@3.2.1"
      }
    }
  }
});
