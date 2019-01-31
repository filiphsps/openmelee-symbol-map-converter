# openmelee-symbol-map-converter
Simple nodejs script to convert `function_80nnnnnn` to a human-readable-name.
Recommended to use [this symbol map](https://github.com/filfat/openmelee-clean-symbolmap), but any will technically do.

## Map file format
```
80nnnnnn FunctionNameHere
80nnnnnn BasicallyAddressFirst
80nnnnnn ThenTheFunctionName
```