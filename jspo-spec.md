# jspo spec

*CLARIFICATION: this is more of a mood-board than a usable spec*

Edit-friendly format "jspo"...
```js
PackageName.MeberName = {               // The language package to write to (e.g. languagePack.de_de)
    "Source String": "",                // template (Target = Source)
    "Source String": "Target String",   // direct mapping
    "Context String": [                 // parameterised mapping matching numerical arg
        "Target if arg === 0",
        "Target if arg === 1",
        "Target if arg === 2",
    ],
    "Context String": (arg) => "Target String", // parameterised mapping functioning on arbitrary arg
    "Context String": (arg) => {
        return "Target String";
    },
    "Context": {                    
        "Source String": "Target String"        // direct mapping within context
    },
}
```
... gets compiled to a js object like this (expanded) ...

```js
const PackageName = {
    "global": {
        "Source String": {
            MemberName: "Target String",
            // other members
        },
        "Context String": {
            MemberName: (arg) => "Target String"
        }
    },
    "Context": {
        "Source String": {
            MemberName: "Target String",
            // other members
        },
    }
};
```

.. to be used by js functions with the following signatures ...

```js
/**
 * returns the specified string from global context
 * string is also the default value
 */
function __(string) {};

/**
 * returns the specified string from a specified context
 * string is also the default value
 */
function _x(string, context) {};

/**
 * a string based on at least one parameter
 * should be able to call externally-defined functions with the parameters
 * if the first parameter is numerical, it should be able to match it against an externally provided array
 * 
 * default value? I hadn't thought that far ahead ... tbd
 */
function _p(string, ...parameters) {};
```
or custom HTML elements like the following

```html
<!-- equivalent to __(string) -->
<l-10n>string</l-10n>

<!-- also equivalent to __(string), but applied to the specified attribute -->
<l-10n attr="placeholder">
    <input type="text" placeholder="string" />
</l-10n>

<!-- equivalent to _x(string, context) -->
<l-10n context="context">string</l-10n>
```
