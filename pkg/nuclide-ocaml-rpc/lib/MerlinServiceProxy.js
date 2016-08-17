"use strict";

let Observable, trackOperationTiming;

module.exports = _client => {
  const remoteModule = {};

  remoteModule.pushDotMerlinPath = function (arg0) {
    return _client.marshalArguments(Array.from(arguments), [{
      name: "path",
      type: {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 44
        },
        kind: "named",
        name: "NuclideUri"
      }
    }]).then(args => {
      return _client.callRemoteFunction("MerlinService/pushDotMerlinPath", "promise", args);
    }).then(value => {
      return _client.unmarshal(value, {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 44
        },
        kind: "nullable",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 44
          },
          kind: "any"
        }
      });
    });
  };

  remoteModule.pushNewBuffer = function (arg0, arg1) {
    return _client.marshalArguments(Array.from(arguments), [{
      name: "name",
      type: {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 49
        },
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "content",
      type: {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 49
        },
        kind: "string"
      }
    }]).then(args => {
      return _client.callRemoteFunction("MerlinService/pushNewBuffer", "promise", args);
    }).then(value => {
      return _client.unmarshal(value, {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 49
        },
        kind: "nullable",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 49
          },
          kind: "any"
        }
      });
    });
  };

  remoteModule.locate = function (arg0, arg1, arg2, arg3) {
    return _client.marshalArguments(Array.from(arguments), [{
      name: "path",
      type: {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 55
        },
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "line",
      type: {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 56
        },
        kind: "number"
      }
    }, {
      name: "col",
      type: {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 57
        },
        kind: "number"
      }
    }, {
      name: "kind",
      type: {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 58
        },
        kind: "string"
      }
    }]).then(args => {
      return _client.callRemoteFunction("MerlinService/locate", "promise", args);
    }).then(value => {
      return _client.unmarshal(value, {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 59
        },
        kind: "nullable",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 59
          },
          kind: "object",
          fields: [{
            location: {
              type: "source",
              fileName: "MerlinService.js",
              line: 60
            },
            name: "file",
            type: {
              location: {
                type: "source",
                fileName: "MerlinService.js",
                line: 60
              },
              kind: "named",
              name: "NuclideUri"
            },
            optional: false
          }, {
            location: {
              type: "source",
              fileName: "MerlinService.js",
              line: 61
            },
            name: "pos",
            type: {
              location: {
                type: "source",
                fileName: "MerlinService.js",
                line: 61
              },
              kind: "object",
              fields: [{
                location: {
                  type: "source",
                  fileName: "MerlinService.js",
                  line: 62
                },
                name: "line",
                type: {
                  location: {
                    type: "source",
                    fileName: "MerlinService.js",
                    line: 62
                  },
                  kind: "number"
                },
                optional: false
              }, {
                location: {
                  type: "source",
                  fileName: "MerlinService.js",
                  line: 63
                },
                name: "col",
                type: {
                  location: {
                    type: "source",
                    fileName: "MerlinService.js",
                    line: 63
                  },
                  kind: "number"
                },
                optional: false
              }]
            },
            optional: false
          }]
        }
      });
    });
  };

  remoteModule.enclosingType = function (arg0, arg1, arg2) {
    return _client.marshalArguments(Array.from(arguments), [{
      name: "path",
      type: {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 75
        },
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "line",
      type: {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 76
        },
        kind: "number"
      }
    }, {
      name: "col",
      type: {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 77
        },
        kind: "number"
      }
    }]).then(args => {
      return _client.callRemoteFunction("MerlinService/enclosingType", "promise", args);
    }).then(value => {
      return _client.unmarshal(value, {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 78
        },
        kind: "nullable",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 78
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "MerlinService.js",
              line: 78
            },
            kind: "named",
            name: "MerlinType"
          }
        }
      });
    });
  };

  remoteModule.complete = function (arg0, arg1, arg2, arg3) {
    return _client.marshalArguments(Array.from(arguments), [{
      name: "path",
      type: {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 84
        },
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "line",
      type: {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 85
        },
        kind: "number"
      }
    }, {
      name: "col",
      type: {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 86
        },
        kind: "number"
      }
    }, {
      name: "prefix",
      type: {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 87
        },
        kind: "string"
      }
    }]).then(args => {
      return _client.callRemoteFunction("MerlinService/complete", "promise", args);
    }).then(value => {
      return _client.unmarshal(value, {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 88
        },
        kind: "any"
      });
    });
  };

  remoteModule.errors = function (arg0) {
    return _client.marshalArguments(Array.from(arguments), [{
      name: "path",
      type: {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 94
        },
        kind: "named",
        name: "NuclideUri"
      }
    }]).then(args => {
      return _client.callRemoteFunction("MerlinService/errors", "promise", args);
    }).then(value => {
      return _client.unmarshal(value, {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 95
        },
        kind: "nullable",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 95
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "MerlinService.js",
              line: 95
            },
            kind: "named",
            name: "MerlinError"
          }
        }
      });
    });
  };

  remoteModule.outline = function (arg0) {
    return _client.marshalArguments(Array.from(arguments), [{
      name: "path",
      type: {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 101
        },
        kind: "named",
        name: "NuclideUri"
      }
    }]).then(args => {
      return _client.callRemoteFunction("MerlinService/outline", "promise", args);
    }).then(value => {
      return _client.unmarshal(value, {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 102
        },
        kind: "nullable",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 102
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "MerlinService.js",
              line: 102
            },
            kind: "named",
            name: "MerlinOutline"
          }
        }
      });
    });
  };

  remoteModule.runSingleCommand = function (arg0, arg1) {
    return _client.marshalArguments(Array.from(arguments), [{
      name: "path",
      type: {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 112
        },
        kind: "named",
        name: "NuclideUri"
      }
    }, {
      name: "command",
      type: {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 113
        },
        kind: "mixed"
      }
    }]).then(args => {
      return _client.callRemoteFunction("MerlinService/runSingleCommand", "promise", args);
    }).then(value => {
      return _client.unmarshal(value, {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 114
        },
        kind: "any"
      });
    });
  };

  return remoteModule;
};

Object.defineProperty(module.exports, "inject", {
  value: function () {
    Observable = arguments[0];
    trackOperationTiming = arguments[1];
  }
});
Object.defineProperty(module.exports, "defs", {
  value: new Map([["Object", {
    kind: "alias",
    name: "Object",
    location: {
      type: "builtin"
    }
  }], ["Date", {
    kind: "alias",
    name: "Date",
    location: {
      type: "builtin"
    }
  }], ["RegExp", {
    kind: "alias",
    name: "RegExp",
    location: {
      type: "builtin"
    }
  }], ["Buffer", {
    kind: "alias",
    name: "Buffer",
    location: {
      type: "builtin"
    }
  }], ["fs.Stats", {
    kind: "alias",
    name: "fs.Stats",
    location: {
      type: "builtin"
    }
  }], ["NuclideUri", {
    kind: "alias",
    name: "NuclideUri",
    location: {
      type: "builtin"
    }
  }], ["MerlinPosition", {
    kind: "alias",
    location: {
      type: "source",
      fileName: "MerlinService.js",
      line: 16
    },
    name: "MerlinPosition",
    definition: {
      location: {
        type: "source",
        fileName: "MerlinService.js",
        line: 16
      },
      kind: "object",
      fields: [{
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 17
        },
        name: "line",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 17
          },
          kind: "number"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 18
        },
        name: "col",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 18
          },
          kind: "number"
        },
        optional: false
      }]
    }
  }], ["MerlinType", {
    kind: "alias",
    location: {
      type: "source",
      fileName: "MerlinService.js",
      line: 21
    },
    name: "MerlinType",
    definition: {
      location: {
        type: "source",
        fileName: "MerlinService.js",
        line: 21
      },
      kind: "object",
      fields: [{
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 22
        },
        name: "start",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 22
          },
          kind: "named",
          name: "MerlinPosition"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 23
        },
        name: "end",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 23
          },
          kind: "named",
          name: "MerlinPosition"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 24
        },
        name: "type",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 24
          },
          kind: "string"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 25
        },
        name: "tail",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 25
          },
          kind: "union",
          types: [{
            location: {
              type: "source",
              fileName: "MerlinService.js",
              line: 25
            },
            kind: "string-literal",
            value: "no"
          }, {
            location: {
              type: "source",
              fileName: "MerlinService.js",
              line: 25
            },
            kind: "string-literal",
            value: "position"
          }, {
            location: {
              type: "source",
              fileName: "MerlinService.js",
              line: 25
            },
            kind: "string-literal",
            value: "call"
          }]
        },
        optional: false
      }]
    }
  }], ["MerlinError", {
    kind: "alias",
    location: {
      type: "source",
      fileName: "MerlinService.js",
      line: 28
    },
    name: "MerlinError",
    definition: {
      location: {
        type: "source",
        fileName: "MerlinService.js",
        line: 28
      },
      kind: "object",
      fields: [{
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 29
        },
        name: "start",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 29
          },
          kind: "named",
          name: "MerlinPosition"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 30
        },
        name: "end",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 30
          },
          kind: "named",
          name: "MerlinPosition"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 31
        },
        name: "valid",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 31
          },
          kind: "boolean"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 32
        },
        name: "message",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 32
          },
          kind: "string"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 33
        },
        name: "type",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 33
          },
          kind: "union",
          types: [{
            location: {
              type: "source",
              fileName: "MerlinService.js",
              line: 33
            },
            kind: "string-literal",
            value: "type"
          }, {
            location: {
              type: "source",
              fileName: "MerlinService.js",
              line: 33
            },
            kind: "string-literal",
            value: "parser"
          }, {
            location: {
              type: "source",
              fileName: "MerlinService.js",
              line: 33
            },
            kind: "string-literal",
            value: "env"
          }, {
            location: {
              type: "source",
              fileName: "MerlinService.js",
              line: 33
            },
            kind: "string-literal",
            value: "warning"
          }, {
            location: {
              type: "source",
              fileName: "MerlinService.js",
              line: 33
            },
            kind: "string-literal",
            value: "unknown"
          }]
        },
        optional: false
      }]
    }
  }], ["MerlinOutline", {
    kind: "alias",
    location: {
      type: "source",
      fileName: "MerlinService.js",
      line: 36
    },
    name: "MerlinOutline",
    definition: {
      location: {
        type: "source",
        fileName: "MerlinService.js",
        line: 36
      },
      kind: "object",
      fields: [{
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 37
        },
        name: "start",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 37
          },
          kind: "named",
          name: "MerlinPosition"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 38
        },
        name: "end",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 38
          },
          kind: "named",
          name: "MerlinPosition"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 39
        },
        name: "kind",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 39
          },
          kind: "string"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 40
        },
        name: "name",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 40
          },
          kind: "string"
        },
        optional: false
      }, {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 41
        },
        name: "children",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 41
          },
          kind: "array",
          type: {
            location: {
              type: "source",
              fileName: "MerlinService.js",
              line: 41
            },
            kind: "named",
            name: "MerlinOutline"
          }
        },
        optional: false
      }]
    }
  }], ["pushDotMerlinPath", {
    kind: "function",
    name: "pushDotMerlinPath",
    location: {
      type: "source",
      fileName: "MerlinService.js",
      line: 44
    },
    type: {
      location: {
        type: "source",
        fileName: "MerlinService.js",
        line: 44
      },
      kind: "function",
      argumentTypes: [{
        name: "path",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 44
          },
          kind: "named",
          name: "NuclideUri"
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 44
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 44
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "MerlinService.js",
              line: 44
            },
            kind: "any"
          }
        }
      }
    }
  }], ["pushNewBuffer", {
    kind: "function",
    name: "pushNewBuffer",
    location: {
      type: "source",
      fileName: "MerlinService.js",
      line: 49
    },
    type: {
      location: {
        type: "source",
        fileName: "MerlinService.js",
        line: 49
      },
      kind: "function",
      argumentTypes: [{
        name: "name",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 49
          },
          kind: "named",
          name: "NuclideUri"
        }
      }, {
        name: "content",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 49
          },
          kind: "string"
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 49
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 49
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "MerlinService.js",
              line: 49
            },
            kind: "any"
          }
        }
      }
    }
  }], ["locate", {
    kind: "function",
    name: "locate",
    location: {
      type: "source",
      fileName: "MerlinService.js",
      line: 54
    },
    type: {
      location: {
        type: "source",
        fileName: "MerlinService.js",
        line: 54
      },
      kind: "function",
      argumentTypes: [{
        name: "path",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 55
          },
          kind: "named",
          name: "NuclideUri"
        }
      }, {
        name: "line",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 56
          },
          kind: "number"
        }
      }, {
        name: "col",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 57
          },
          kind: "number"
        }
      }, {
        name: "kind",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 58
          },
          kind: "string"
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 59
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 59
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "MerlinService.js",
              line: 59
            },
            kind: "object",
            fields: [{
              location: {
                type: "source",
                fileName: "MerlinService.js",
                line: 60
              },
              name: "file",
              type: {
                location: {
                  type: "source",
                  fileName: "MerlinService.js",
                  line: 60
                },
                kind: "named",
                name: "NuclideUri"
              },
              optional: false
            }, {
              location: {
                type: "source",
                fileName: "MerlinService.js",
                line: 61
              },
              name: "pos",
              type: {
                location: {
                  type: "source",
                  fileName: "MerlinService.js",
                  line: 61
                },
                kind: "object",
                fields: [{
                  location: {
                    type: "source",
                    fileName: "MerlinService.js",
                    line: 62
                  },
                  name: "line",
                  type: {
                    location: {
                      type: "source",
                      fileName: "MerlinService.js",
                      line: 62
                    },
                    kind: "number"
                  },
                  optional: false
                }, {
                  location: {
                    type: "source",
                    fileName: "MerlinService.js",
                    line: 63
                  },
                  name: "col",
                  type: {
                    location: {
                      type: "source",
                      fileName: "MerlinService.js",
                      line: 63
                    },
                    kind: "number"
                  },
                  optional: false
                }]
              },
              optional: false
            }]
          }
        }
      }
    }
  }], ["enclosingType", {
    kind: "function",
    name: "enclosingType",
    location: {
      type: "source",
      fileName: "MerlinService.js",
      line: 74
    },
    type: {
      location: {
        type: "source",
        fileName: "MerlinService.js",
        line: 74
      },
      kind: "function",
      argumentTypes: [{
        name: "path",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 75
          },
          kind: "named",
          name: "NuclideUri"
        }
      }, {
        name: "line",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 76
          },
          kind: "number"
        }
      }, {
        name: "col",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 77
          },
          kind: "number"
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 78
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 78
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "MerlinService.js",
              line: 78
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "MerlinService.js",
                line: 78
              },
              kind: "named",
              name: "MerlinType"
            }
          }
        }
      }
    }
  }], ["complete", {
    kind: "function",
    name: "complete",
    location: {
      type: "source",
      fileName: "MerlinService.js",
      line: 83
    },
    type: {
      location: {
        type: "source",
        fileName: "MerlinService.js",
        line: 83
      },
      kind: "function",
      argumentTypes: [{
        name: "path",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 84
          },
          kind: "named",
          name: "NuclideUri"
        }
      }, {
        name: "line",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 85
          },
          kind: "number"
        }
      }, {
        name: "col",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 86
          },
          kind: "number"
        }
      }, {
        name: "prefix",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 87
          },
          kind: "string"
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 88
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 88
          },
          kind: "any"
        }
      }
    }
  }], ["errors", {
    kind: "function",
    name: "errors",
    location: {
      type: "source",
      fileName: "MerlinService.js",
      line: 93
    },
    type: {
      location: {
        type: "source",
        fileName: "MerlinService.js",
        line: 93
      },
      kind: "function",
      argumentTypes: [{
        name: "path",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 94
          },
          kind: "named",
          name: "NuclideUri"
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 95
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 95
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "MerlinService.js",
              line: 95
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "MerlinService.js",
                line: 95
              },
              kind: "named",
              name: "MerlinError"
            }
          }
        }
      }
    }
  }], ["outline", {
    kind: "function",
    name: "outline",
    location: {
      type: "source",
      fileName: "MerlinService.js",
      line: 100
    },
    type: {
      location: {
        type: "source",
        fileName: "MerlinService.js",
        line: 100
      },
      kind: "function",
      argumentTypes: [{
        name: "path",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 101
          },
          kind: "named",
          name: "NuclideUri"
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 102
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 102
          },
          kind: "nullable",
          type: {
            location: {
              type: "source",
              fileName: "MerlinService.js",
              line: 102
            },
            kind: "array",
            type: {
              location: {
                type: "source",
                fileName: "MerlinService.js",
                line: 102
              },
              kind: "named",
              name: "MerlinOutline"
            }
          }
        }
      }
    }
  }], ["runSingleCommand", {
    kind: "function",
    name: "runSingleCommand",
    location: {
      type: "source",
      fileName: "MerlinService.js",
      line: 111
    },
    type: {
      location: {
        type: "source",
        fileName: "MerlinService.js",
        line: 111
      },
      kind: "function",
      argumentTypes: [{
        name: "path",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 112
          },
          kind: "named",
          name: "NuclideUri"
        }
      }, {
        name: "command",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 113
          },
          kind: "mixed"
        }
      }],
      returnType: {
        location: {
          type: "source",
          fileName: "MerlinService.js",
          line: 114
        },
        kind: "promise",
        type: {
          location: {
            type: "source",
            fileName: "MerlinService.js",
            line: 114
          },
          kind: "any"
        }
      }
    }
  }]])
});