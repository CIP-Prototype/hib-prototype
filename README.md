To install less:
* Download node.js & npm: https://nodejs.org/en/download/
* Install it globally via npm: `npm install less -g`

To compile the less, at the root of the project run (UNIX):
```lessc  new-demo/resources/less/cip_main.less new-demo/resources/css/cip_main.css```

Files:
* `cip_bootstrap_theme.less` = Contains our base customisation of bootstrap. This is a cut down and customised version of  https://github.com/twbs/bootstrap/blob/master/less/variables.less. When changing a style check if its a default bootstrap customisation option before adding custom overrides.
* `cip_cstm_css.less` = Contains all of our bootstrap overrides and custom css classes. As its in less it can make full use of any variables defined in any of the other less files (e.g. some of the colours defined in `cip_colour_palette.less`).
* `cip_main.less` = This is purely used for compiling the css, and allows us to easily reference our own less files as well as any other dependencies (e.g. font-awesome). To include a new less file in the compilation of the css simple add `@import "yourfile.less"` to the file. 
* `gds_colours.less` = A variablized list of the official gds colours, for easy use in other less files.
* `nhs_colours.less` = A variablized list of the official nhs web colours, for easy use in other less files.
* `cip_colour_palette.less` = A variablized list of other colours used in the cip demo screens, for easy use in other less files.
