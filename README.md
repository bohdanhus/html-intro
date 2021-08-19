# html-intro
Create a simple page "My resume"
/*! 
 * Primitive UI | MIT License
 *
 * A minimalist front-end design toolkit built with Sass for developing 
 * responsive, browser-consistent web apps.
 *
 * Author: Tania Rascia <hello@taniarascia.com>
 * Source: https://github.com/taniarascia/primitive
 * Documentation: https://taniarascia.github.io/primitive
 */
/**
 * Variables
 *
 * The majority of the configuration for the toolkit.
 */
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
/* Document
   ========================================================================== */
/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */
html {
  line-height: 1.15;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
}

/* Sections
   ========================================================================== */
/**
 * Remove the margin in all browsers.
 */
body {
  margin: 0;
}

/**
 * Render the `main` element consistently in IE.
 */
main {
  display: block;
}

/**
 * Correct the font size and margin on `h1` elements within `section` and
 * `article` contexts in Chrome, Firefox, and Safari.
 */
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */
/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
hr {
  box-sizing: content-box;
  /* 1 */
  height: 0;
  /* 1 */
  overflow: visible;
  /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */
pre {
  font-family: monospace, monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}

/* Text-level semantics
   ========================================================================== */
/**
 * Remove the gray background on active links in IE 10.
 */
a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
  border-bottom: none;
  /* 1 */
  text-decoration: underline;
  /* 2 */
  text-decoration: underline dotted;
  /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */
code,
kbd,
samp {
  font-family: monospace, monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 80%;
}

/**
 * Prevent `sub` and `sup` elements from affecting the line height in
 * all browsers.
 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */
/**
 * Remove the border on images inside links in IE 10.
 */
img {
  border-style: none;
}

/* Forms
   ========================================================================== */
/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  line-height: 1.15;
  /* 1 */
  margin: 0;
  /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */
button,
input {
  /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
button,
select {
  /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */
button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */
button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */
button:-moz-focusring,
[type='button']:-moz-focusring,
[type='reset']:-moz-focusring,
[type='submit']:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */
fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from `fieldset` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    `fieldset` elements in all browsers.
 */
legend {
  box-sizing: border-box;
  /* 1 */
  color: inherit;
  /* 2 */
  display: table;
  /* 1 */
  max-width: 100%;
  /* 1 */
  padding: 0;
  /* 3 */
  white-space: normal;
  /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */
textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */
[type='checkbox'],
[type='radio'] {
  box-sizing: border-box;
  /* 1 */
  padding: 0;
  /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
[type='search'] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to `inherit` in Safari.
 */
::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/* Interactive
   ========================================================================== */
/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */
details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */
summary {
  display: list-item;
}

/* Misc
   ========================================================================== */
/**
 * Add the correct display in IE 10+.
 */
template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */
[hidden] {
  display: none;
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

figure {
  margin: 0;
}

/**
 * Scaffolding
 */
html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font: normal normal normal 1rem/1.6 -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
}

body {
  color: #404040;
  background: white;
  font-size: 1rem;
}

p,
ol,
ul,
dl,
table {
  margin: 0 0 1.5rem 0;
}

ul li ul {
  margin-bottom: 0;
}

ol li ol {
  margin-bottom: 0;
}

h1,
h2,
h3,
h4,
h5 {
  margin: 1.5rem 0;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: 1.2;
  color: #404040;
}

h1:not(:first-child),
h2:not(:first-child),
h3:not(:first-child),
h4:not(:first-child),
h5:not(:first-child) {
  margin: 1.5rem 0;
}

h1:not(:first-child),
h2:not(:first-child),
h3:not(:first-child) {
  margin-top: 2rem;
}

h1 {
  font-size: 1.75rem;
}

h2 {
  font-size: 1.5rem;
}

h3 {
  font-size: 1.25rem;
}

h4 {
  font-size: 1.1rem;
}

h5 {
  font-size: 1rem;
}

@media (min-width: 600px) {
  h1:not(:first-child),
  h2:not(:first-child),
  h3:not(:first-child) {
    margin-top: 2.5rem;
  }
  h1 {
    font-size: 2.25rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1.5rem;
  }
  h5 {
    font-size: 1.25rem;
  }
}

a {
  color: #0366ee;
  text-decoration: none;
}

a:hover, a:active, a:focus {
  color: #0246a2;
  text-decoration: underline;
}

mark {
  background: #ffeea8;
  padding: 0 0.2rem;
}

blockquote {
  margin: 0 0 1.5rem 0;
  border-left: 16px solid #f0f0f0;
  padding: 0 1.5rem;
  font-size: 1.5rem;
}

blockquote cite {
  display: block;
  margin-top: 1.5rem;
  font-size: 1rem;
  text-align: right;
}

pre {
  border: 0;
  border-radius: 4px;
  background: transparent;
  padding: 1rem;
  tab-size: 2;
  color: #404040;
  font-family: Menlo, monospace;
  font-size: 14px;
  margin: 0 0 1.5rem 0;
}

pre code {
  font-family: Menlo, monospace;
  line-height: 1.2;
}

kbd {
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), 0 0 0 2px #fff inset;
  color: #333;
  display: inline-block;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
  line-height: 1.4;
  margin: 0 0.1em;
  padding: 0.1em 0.6em;
  text-shadow: 0 1px 0 #fff;
}

:not(pre) > code {
  color: #404040;
  background: transparent;
  font-family: Menlo, monospace;
  font-size: 14px;
  padding: 0 0.2rem;
  border: 1px solid #dedede;
  border-radius: 4px;
}

hr {
  height: 0;
  border: 0;
  border-top: 1px solid #dedede;
}

dt {
  font-weight: 600;
}

dd {
  margin-bottom: 0.5rem;
}

.full-container {
  max-width: 100%;
  padding: 0 1rem;
}

.container, .small-container, .medium-container {
  max-width: 1200px;
  padding: 0 1rem;
  margin-left: auto;
  margin-right: auto;
}

.small-container {
  max-width: 800px;
}

.medium-container {
  max-width: 1000px;
}

.content-section {
  padding: 30px 0;
}

@media (min-width: 600px) {
  .content-section {
    padding: 60px 0;
  }
}

/**
 * Grid
 */
.flex-small,
.flex-large {
  padding-left: 1rem;
  padding-right: 1rem;
}

.flex-row {
  margin-left: -1rem;
  margin-right: -1rem;
}

.flex-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.flex-small,
.flex-large {
  flex-basis: 100%;
  margin-bottom: 1rem;
}

/* Small screen breakpoint */
@media (min-width: 600px) {
  .flex-small {
    flex: 1;
    margin-bottom: 0;
  }
  .flex-small.half {
    flex: 0 0 calc(1 / 2 * 100%);
  }
  .flex-small.one-fourth {
    flex: 0 0 calc(1 / 4 * 100%);
  }
  .flex-small.three-fourths {
    flex: 0 0 calc(3 / 4 * 100%);
  }
  .flex-small.one-third {
    flex: 0 0 calc(1 / 3 * 100%);
  }
  .flex-small.two-thirds {
    flex: 0 0 calc(2 / 3 * 100%);
  }
}

/* Large screen breakpoint */
@media (min-width: 1000px) {
  .flex-large {
    flex: 1;
    margin-bottom: 0;
  }
  .flex-large.half {
    flex: 0 0 calc(1 / 2 * 100%);
  }
  .flex-large.one-fourth {
    flex: 0 0 calc(1 / 4 * 100%);
  }
  .flex-large.three-fourths {
    flex: 0 0 calc(3 / 4 * 100%);
  }
  .flex-large.one-third {
    flex: 0 0 calc(1 / 3 * 100%);
  }
  .flex-large.two-thirds {
    flex: 0 0 calc(2 / 3 * 100%);
  }
}

/**
 * Helpers
 */
.clearfix::before,
.clearfix::after {
  content: ' ';
  display: block;
}

.clearfix:after {
  clear: both;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.text-center {
  text-align: center;
}

.text-justify {
  text-align: justify;
}

.block {
  display: block;
}

.inline-block {
  display: inline-block;
}

.inline {
  display: inline;
}

.vertical-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.responsive-image {
  max-width: 100%;
  height: auto;
}

.show {
  display: block !important;
}

.hide {
  display: none !important;
}

.invisible {
  visibility: hidden;
}

.no-padding-top {
  padding-top: 0;
}

.no-padding-bottom {
  padding-bottom: 0;
}

.padding-top {
  padding-top: 2rem;
}

.padding-bottom {
  padding-bottom: 2rem;
}

.no-margin-top {
  margin-top: 0;
}

.no-margin-bottom {
  margin-bottom: 0;
}

.margin-top {
  margin-top: 2rem;
}

.margin-bottom {
  margin-bottom: 2rem;
}

.alternate-background {
  background: #fafafa;
  color: #404040;
}

.space-between {
  justify-content: space-between;
}

.justify-center {
  justify-content: center;
}

.align-center {
  align-items: center;
}

.screen-reader-text {
  clip: rect(1px, 1px, 1px, 1px);
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
}

/**
 * Buttons
 */
.button, a.button, button, [type=submit], [type=reset], [type=button] {
  -webkit-appearance: none;
  display: inline-block;
  border: 1px solid #0366ee;
  border-radius: 4px;
  background: #0366ee;
  color: #ffffff;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  text-transform: none;
  padding: 0.75rem 1.25rem;
  margin: 0 0 0.5rem 0;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  line-height: 1;
}

.button:hover, a.button:hover, button:hover, [type=submit]:hover, [type=reset]:hover, [type=button]:hover {
  border: 1px solid #0250bc;
  background: #0250bc;
  color: #ffffff;
  text-decoration: none;
}

.button:focus, .button:active, a.button:focus, a.button:active, button:focus, button:active, [type=submit]:focus, [type=submit]:active, [type=reset]:focus, [type=reset]:active, [type=button]:focus, [type=button]:active {
  border: 1px solid #0250bc;
  background: #0250bc;
  color: #ffffff;
  text-decoration: none;
}

.button::-moz-focus-inner, a.button::-moz-focus-inner, button::-moz-focus-inner, [type=submit]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=button]::-moz-focus-inner {
  border: 0;
  padding: 0;
}

.accent-button,
a.accent-button {
  color: #ffffff;
  border: 1px solid #29de7d;
  background: #29de7d;
}

.accent-button:hover, .accent-button:focus, .accent-button:active,
a.accent-button:hover,
a.accent-button:focus,
a.accent-button:active {
  color: #ffffff;
  border: 1px solid #1cb864;
  background: #1cb864;
}

.muted-button,
a.muted-button {
  background: transparent;
  border: 1px solid #cdcdcd;
  color: #4e4e4e;
}

.muted-button:hover, .muted-button:focus, .muted-button:active,
a.muted-button:hover,
a.muted-button:focus,
a.muted-button:active {
  color: #4e4e4e;
  border: 1px solid #818181;
  background: transparent;
}

.round-button,
a.round-button {
  border-radius: 40px;
}

.square-button,
a.square-button {
  border-radius: 0;
}

.full-button,
a.full-button {
  display: block;
  width: 100%;
}

/**
 * Forms
 */
[type=color], [type=date], [type=datetime], [type=datetime-local], [type=email], [type=month], [type=number], [type=password], [type=search], [type=tel], [type=text], [type=url], [type=week], [type=time], select, textarea {
  display: block;
  border: 1px solid #dedede;
  border-radius: 4px;
  padding: 0.75rem;
  outline: none;
  background: transparent;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  width: 100%;
  max-width: 100%;
  line-height: 1;
}

[type=color]:hover, [type=date]:hover, [type=datetime]:hover, [type=datetime-local]:hover, [type=email]:hover, [type=month]:hover, [type=number]:hover, [type=password]:hover, [type=search]:hover, [type=tel]:hover, [type=text]:hover, [type=url]:hover, [type=week]:hover, [type=time]:hover, select:hover, textarea:hover {
  border: 1px solid #c5c5c5;
}

[type=color]:focus, [type=color]:active, [type=date]:focus, [type=date]:active, [type=datetime]:focus, [type=datetime]:active, [type=datetime-local]:focus, [type=datetime-local]:active, [type=email]:focus, [type=email]:active, [type=month]:focus, [type=month]:active, [type=number]:focus, [type=number]:active, [type=password]:focus, [type=password]:active, [type=search]:focus, [type=search]:active, [type=tel]:focus, [type=tel]:active, [type=text]:focus, [type=text]:active, [type=url]:focus, [type=url]:active, [type=week]:focus, [type=week]:active, [type=time]:focus, [type=time]:active, select:focus, select:active, textarea:focus, textarea:active {
  border: 1px solid #0366ee;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1), 0 0 6px #8cbcfe;
}

textarea {
  overflow: auto;
  height: auto;
}

fieldset {
  border: 1px solid #dedede;
  border-radius: 4px;
  padding: 1rem;
  margin: 1.5rem 0;
}

legend {
  padding: 0 0.5rem;
  font-weight: 600;
}

select {
  color: #404040;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAYAAAA/33wPAAAAvklEQVQoFY2QMQqEMBBFv7ERa/EMXkGw11K8QbDXzuN4BHv7QO6ifUgj7v4UAdlVM8Uwf+b9YZJISnlqrfEUZVlinucnBGKaJgghbiHOyLyFKIoCbdvecpyReYvo/Ma2bajrGtbaC58kCdZ1RZ7nl/4/4d5EsO/7nzl7IUtodBexMMagaRrs+06JLMvcNWmaOv2W/C/TMAyD58dxROgSmvxFFMdxoOs6lliWBXEcuzokXRbRoJRyvqqqQvye+QDMDz1D6yuj9wAAAABJRU5ErkJggg==) right center no-repeat;
  line-height: 1;
}

select::-ms-expand {
  display: none;
}

[type='range'] {
  width: 100%;
}

label {
  font-weight: 600;
  max-width: 100%;
  display: block;
  margin: 1rem 0 0.5rem;
}

@media (min-width: 600px) {
  .split-form label {
    text-align: right;
    padding: 0 0.5rem;
    margin-bottom: 1rem;
  }
}

input.has-error, input.has-error:hover, input.has-error:focus, input.has-error:active,
select.has-error,
select.has-error:hover,
select.has-error:focus,
select.has-error:active,
textarea.has-error,
textarea.has-error:hover,
textarea.has-error:focus,
textarea.has-error:active {
  border: 1px solid #d33c40;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1), 0 0 6px #f4cecf;
}

input.is-success, input.is-success:hover, input.is-success:focus, input.is-success:active,
select.is-success,
select.is-success:hover,
select.is-success:focus,
select.is-success:active,
textarea.is-success,
textarea.is-success:hover,
textarea.is-success:focus,
textarea.is-success:active {
  border: 1px solid #29de7d;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1), 0 0 6px #97efc0;
}

::-webkit-input-placeholder,
::-moz-placeholder,
:-moz-placeholder,
:-ms-input-placeholder {
  color: #9a9a9a;
}

/**
 * Tables
 */
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  max-width: 100%;
}

thead th {
  border-bottom: 2px solid #dedede;
}

tfoot th {
  border-top: 2px solid #dedede;
}

td {
  border-bottom: 1px solid #dedede;
}

th,
td {
  text-align: left;
  padding: 0.5rem;
}

caption {
  padding: 1rem 0;
  caption-side: bottom;
  color: #ababab;
}

.striped-table tbody tr:nth-child(odd) {
  background-color: #f8f8f8;
}

.contain-table {
  overflow-x: auto;
}

@media (min-width: 600px) {
  .contain-table {
    width: 100%;
  }
}

/*
 * Navigation
 */
/**
 * Layout
 */

/*# sourceMappingURL=data:application/json;base64,ewoJInZlcnNpb24iOiAzLAoJImZpbGUiOiAiZGlzdC9jc3MvbWFpbi5jc3MiLAoJInNvdXJjZXMiOiBbCgkJInNyYy9zY3NzL21haW4uc2NzcyIsCgkJInNyYy9zY3NzL2Jhc2UvX3ZhcmlhYmxlcy5zY3NzIiwKCQkic3JjL3Njc3MvYmFzZS9fbWl4aW5zLnNjc3MiLAoJCSJzcmMvc2Nzcy9iYXNlL19ub3JtYWxpemUuc2NzcyIsCgkJInNyYy9zY3NzL2Jhc2UvX3Jlc2V0LnNjc3MiLAoJCSJzcmMvc2Nzcy9jb21wb25lbnRzL19zY2FmZm9sZGluZy5zY3NzIiwKCQkic3JjL3Njc3MvY29tcG9uZW50cy9fZ3JpZC5zY3NzIiwKCQkic3JjL3Njc3MvY29tcG9uZW50cy9faGVscGVycy5zY3NzIiwKCQkic3JjL3Njc3MvY29tcG9uZW50cy9fYnV0dG9ucy5zY3NzIiwKCQkic3JjL3Njc3MvY29tcG9uZW50cy9fZm9ybXMuc2NzcyIsCgkJInNyYy9zY3NzL2NvbXBvbmVudHMvX3RhYmxlcy5zY3NzIiwKCQkic3JjL3Njc3MvY29tcG9uZW50cy9fbmF2aWdhdGlvbi5zY3NzIiwKCQkic3JjL3Njc3MvY29tcG9uZW50cy9fbGF5b3V0LnNjc3MiCgldLAoJInNvdXJjZXNDb250ZW50IjogWwoJCSIvKiEgXG4gKiBQcmltaXRpdmUgVUkgfCBNSVQgTGljZW5zZVxuICpcbiAqIEEgbWluaW1hbGlzdCBmcm9udC1lbmQgZGVzaWduIHRvb2xraXQgYnVpbHQgd2l0aCBTYXNzIGZvciBkZXZlbG9waW5nIFxuICogcmVzcG9uc2l2ZSwgYnJvd3Nlci1jb25zaXN0ZW50IHdlYiBhcHBzLlxuICpcbiAqIEF1dGhvcjogVGFuaWEgUmFzY2lhIDxoZWxsb0B0YW5pYXJhc2NpYS5jb20+XG4gKiBTb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS90YW5pYXJhc2NpYS9wcmltaXRpdmVcbiAqIERvY3VtZW50YXRpb246IGh0dHBzOi8vdGFuaWFyYXNjaWEuZ2l0aHViLmlvL3ByaW1pdGl2ZVxuICovXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDb25maWd1cmF0aW9uXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5AaW1wb3J0ICdiYXNlL3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdiYXNlL21peGlucyc7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSZXNldFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuQGltcG9ydCAnYmFzZS9ub3JtYWxpemUnO1xuQGltcG9ydCAnYmFzZS9yZXNldCc7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDb21wb25lbnRzXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5AaW1wb3J0ICdjb21wb25lbnRzL3NjYWZmb2xkaW5nJztcbkBpbXBvcnQgJ2NvbXBvbmVudHMvZ3JpZCc7XG5AaW1wb3J0ICdjb21wb25lbnRzL2hlbHBlcnMnO1xuQGltcG9ydCAnY29tcG9uZW50cy9idXR0b25zJztcbkBpbXBvcnQgJ2NvbXBvbmVudHMvZm9ybXMnO1xuQGltcG9ydCAnY29tcG9uZW50cy90YWJsZXMnO1xuQGltcG9ydCAnY29tcG9uZW50cy9uYXZpZ2F0aW9uJztcbkBpbXBvcnQgJ2NvbXBvbmVudHMvbGF5b3V0JztcbiIsCgkJIi8qKlxuICogVmFyaWFibGVzXG4gKlxuICogVGhlIG1ham9yaXR5IG9mIHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUgdG9vbGtpdC5cbiAqL1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ29udGFpbmVyc1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuJHgtc21hbGw6IDYwMHB4ICFkZWZhdWx0O1xuJHNtYWxsOiA4MDBweCAhZGVmYXVsdDtcbiRtZWRpdW06IDEwMDBweCAhZGVmYXVsdDtcbiRsYXJnZTogMTIwMHB4ICFkZWZhdWx0O1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQnJlYWtwb2ludHNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiRtb2JpbGU6ICR4LXNtYWxsICFkZWZhdWx0O1xuJHRhYmxldDogJHNtYWxsICFkZWZhdWx0O1xuJGRlc2t0b3A6ICRtZWRpdW0gIWRlZmF1bHQ7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBHbG9iYWwgQ29sb3JzXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4kYmFja2dyb3VuZDogd2hpdGUgIWRlZmF1bHQ7XG4kcHJpbWFyeS1jb2xvcjogIzAzNjZlZSAhZGVmYXVsdDtcbiRzZWNvbmRhcnktY29sb3I6ICMyOWRlN2QgIWRlZmF1bHQ7XG4kYWNjZW50LWNvbG9yOiAjY2RjZGNkICFkZWZhdWx0O1xuJGFsdGVybmF0ZS1iYWNrZ3JvdW5kOiAjZmFmYWZhICFkZWZhdWx0O1xuJGFsdGVybmF0ZS1jb2xvcjogIzQwNDA0MCAhZGVmYXVsdDtcbiRsaW5rLWNvbG9yOiAkcHJpbWFyeS1jb2xvciAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWNvbG9yOiBkYXJrZW4oJGxpbmstY29sb3IsIDE1JSkgIWRlZmF1bHQ7XG4kaGlnaGxpZ2h0OiAjZmZlZWE4ICFkZWZhdWx0O1xuJGVycm9yOiAjZDMzYzQwICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICMyOWRlN2QgIWRlZmF1bHQ7XG4kYnEtYm9yZGVyOiAxNnB4IHNvbGlkICNmMGYwZjAgIWRlZmF1bHQ7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBUeXBvZ3JhcGh5XG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBCb2R5XG4kZm9udC1zaXplOiAxcmVtICFkZWZhdWx0O1xuJGJvZHktZm9udC1zaXplOiAxcmVtICFkZWZhdWx0O1xuJGZvbnQtc3R5bGU6IG5vcm1hbCAhZGVmYXVsdDtcbiRmb250LXZhcmlhbnQ6IG5vcm1hbCAhZGVmYXVsdDtcbiRmb250LXdlaWdodDogbm9ybWFsICFkZWZhdWx0O1xuJGZvbnQtY29sb3I6ICM0MDQwNDAgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQ6IDEuNiAhZGVmYXVsdDtcblxuLy8gSGVhZGluZ3NcbiRoZWFkaW5nLWZvbnQtY29sb3I6ICM0MDQwNDAgIWRlZmF1bHQ7XG4kaGVhZGluZy1mb250LXdlaWdodDogNjAwICFkZWZhdWx0O1xuJGhlYWRpbmctZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsXG4gIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XG4kaGVhZGluZy1saW5lLWhlaWdodDogMS4yICFkZWZhdWx0O1xuXG4kaDEtbW9iaWxlOiAxLjc1cmVtICFkZWZhdWx0O1xuJGgyLW1vYmlsZTogMS41cmVtICFkZWZhdWx0O1xuJGgzLW1vYmlsZTogMS4yNXJlbSAhZGVmYXVsdDtcbiRoNC1tb2JpbGU6IDEuMXJlbSAhZGVmYXVsdDtcbiRoNS1tb2JpbGU6IDFyZW0gIWRlZmF1bHQ7XG5cbiRoMTogMi4yNXJlbSAhZGVmYXVsdDtcbiRoMjogMnJlbSAhZGVmYXVsdDtcbiRoMzogMS43NXJlbSAhZGVmYXVsdDtcbiRoNDogMS41cmVtICFkZWZhdWx0O1xuJGg1OiAxLjI1cmVtICFkZWZhdWx0O1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU3BhY2luZ1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuJHBhZGRpbmc6IDFyZW0gIWRlZmF1bHQ7XG4kbWFyZ2luczogMS41cmVtICFkZWZhdWx0O1xuJGNvbnRlbnQtcGFkZGluZzogNjBweCAwICFkZWZhdWx0O1xuJGNvbnRlbnQtcGFkZGluZy1tb2JpbGU6IDMwcHggMCAhZGVmYXVsdDtcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJvcmRlcnNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiRib3JkZXItd2lkdGg6IDFweCAhZGVmYXVsdDtcbiRib3JkZXItc3R5bGU6IHNvbGlkICFkZWZhdWx0O1xuJGJvcmRlci1jb2xvcjogI2RlZGVkZSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzOiA0cHggIWRlZmF1bHQ7XG4kYm9yZGVyczogJGJvcmRlci13aWR0aCAkYm9yZGVyLXN0eWxlICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBCdXR0b25zXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4kYnV0dG9uLWJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yICFkZWZhdWx0O1xuJGJ1dHRvbi1iYWNrZ3JvdW5kLWhvdmVyOiBkYXJrZW4oJGJ1dHRvbi1iYWNrZ3JvdW5kLCAxMCUpICFkZWZhdWx0O1xuJGJ1dHRvbi1jb2xvcjogI2ZmZmZmZiAhZGVmYXVsdDtcbiRidXR0b24tZm9udC13ZWlnaHQ6IDYwMCAhZGVmYXVsdDtcbiRidXR0b24tZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XG4kYnV0dG9uLWZvbnQtc2l6ZTogMXJlbSAhZGVmYXVsdDtcbiRidXR0b24tYm9yZGVyLXdpZHRoOiAxcHggIWRlZmF1bHQ7XG4kYnV0dG9uLWJvcmRlci1zdHlsZTogc29saWQgIWRlZmF1bHQ7XG4kYnV0dG9uLWJvcmRlci1jb2xvcjogJGJ1dHRvbi1iYWNrZ3JvdW5kICFkZWZhdWx0O1xuJGJ1dHRvbi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRidXR0b24tdGV4dC10cmFuc2Zvcm06IG5vbmUgIWRlZmF1bHQ7XG5cbi8vIEFjY2VudCBidXR0b25zXG4kYWNjZW50LWJ1dHRvbi1iYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5LWNvbG9yICFkZWZhdWx0O1xuJGFjY2VudC1idXR0b24tY29sb3I6ICNmZmZmZmYgIWRlZmF1bHQ7XG4kYWNjZW50LWJ1dHRvbi1jb2xvci1ob3ZlcjogI2ZmZmZmZiAhZGVmYXVsdDtcblxuLy8gTXV0ZWQgQnV0dG9uc1xuJG11dGVkLWJvcmRlcjogMXB4IHNvbGlkICRhY2NlbnQtY29sb3IgIWRlZmF1bHQ7XG4kbXV0ZWQtYm9yZGVyLWhvdmVyOiAxcHggc29saWQgZGFya2VuKCRhY2NlbnQtY29sb3IsIDMwJSkgIWRlZmF1bHQ7XG4kbXV0ZWQtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kbXV0ZWQtYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kbXV0ZWQtY29sb3I6IGRhcmtlbigkYWNjZW50LWNvbG9yLCA1MCUpICFkZWZhdWx0O1xuJG11dGVkLWNvbG9yLWhvdmVyOiBkYXJrZW4oJGFjY2VudC1jb2xvciwgNTAlKSAhZGVmYXVsdDtcblxuLy8gUm91bmQgQnV0dG9uc1xuJHJvdW5kLWJ1dHRvbnM6IDQwcHggIWRlZmF1bHQ7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBGb3Jtc1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuJGZvcm1zOiAoXG4gICdbdHlwZT1jb2xvcl0sIFt0eXBlPWRhdGVdLCBbdHlwZT1kYXRldGltZV0sIFt0eXBlPWRhdGV0aW1lLWxvY2FsXSwgW3R5cGU9ZW1haWxdLCAgICAgICAgW3R5cGU9bW9udGhdLCBbdHlwZT1udW1iZXJdLCBbdHlwZT1wYXNzd29yZF0sIFt0eXBlPXNlYXJjaF0sIFt0eXBlPXRlbF0sIFt0eXBlPXRleHRdLCBbdHlwZT11cmxdLCBbdHlwZT13ZWVrXSwgW3R5cGU9dGltZV0sIHNlbGVjdCwgdGV4dGFyZWEnXG4pICFkZWZhdWx0O1xuJGJ1dHRvbnM6ICgnLmJ1dHRvbiwgYS5idXR0b24sIGJ1dHRvbiwgW3R5cGU9c3VibWl0XSwgW3R5cGU9cmVzZXRdLCBbdHlwZT1idXR0b25dJykgIWRlZmF1bHQ7XG4kaW5wdXQtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kcGxhY2Vob2xkZXI6IGRhcmtlbigkYWNjZW50LWNvbG9yLCAyMCUpICFkZWZhdWx0O1xuJGZvcm0tYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWJvcmRlci1ob3ZlcjogMXB4IHNvbGlkIGRhcmtlbigkYm9yZGVyLWNvbG9yLCAxMCUpICFkZWZhdWx0O1xuJGZvcm0tYm9yZGVyLWZvY3VzOiAxcHggc29saWQgJGxpbmstY29sb3IgIWRlZmF1bHQ7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBUYWJsZXNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiRzdHJpcGVzOiAjZjhmOGY4ICFkZWZhdWx0O1xuJGNhcHRpb246ICNhYmFiYWIgIWRlZmF1bHQ7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDb2RlXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4kY29kZS1jb2xvcjogJGZvbnQtY29sb3IgIWRlZmF1bHQ7XG4kY29kZS1zaXplOiAxNHB4ICFkZWZhdWx0O1xuJGNvZGUtZmFtaWx5OiBNZW5sbywgbW9ub3NwYWNlICFkZWZhdWx0O1xuJGNvZGUtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kY29kZS1ib3JkZXJzOiAkYm9yZGVycyAhZGVmYXVsdDtcbiIsCgkJIi8vIE1lZGlhIHF1ZXJ5IGZvciBtb2JpbGUgZmlyc3QgbGF5b3V0XG5AbWl4aW4gc21hbGwtYnJlYWtwb2ludCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRtb2JpbGV9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gQnJlYWsgb24gdGFibGV0XG5AbWl4aW4gbWVkaXVtLWJyZWFrcG9pbnQge1xuICBAbWVkaWEgKG1pbi13aWR0aDogI3skdGFibGV0fSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIEJyZWFrIG9uIGRlc2t0b3BcbkBtaXhpbiBsYXJnZS1icmVha3BvaW50IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGRlc2t0b3B9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiIsCgkJIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cblxuLyogRG9jdW1lbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4gKi9cblxuaHRtbCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLyogMiAqL1xufVxuXG4vKiBTZWN0aW9uc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyoqXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cbiAqL1xuXG5tYWluIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cbiAqL1xuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW46IDAuNjdlbSAwO1xufVxuXG4vKiBHcm91cGluZyBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cbiAqL1xuXG5ociB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAvKiAxICovXG4gIGhlaWdodDogMDtcbiAgLyogMSAqL1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxucHJlIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xuICAvKiAxICovXG4gIGZvbnQtc2l6ZTogMWVtO1xuICAvKiAyICovXG59XG5cbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cbiAqL1xuXG5hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qKlxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXG4gKi9cblxuYWJiclt0aXRsZV0ge1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICAvKiAxICovXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAvKiAyICovXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4gKi9cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5jb2RlLFxua2JkLFxuc2FtcCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcbiAgLyogMSAqL1xuICBmb250LXNpemU6IDFlbTtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbi8qKlxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXG4gKiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc3ViLFxuc3VwIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuLyogRW1iZWRkZWQgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxuICovXG5cbmltZyB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLyogRm9ybXNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXG4gKi9cblxuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIC8qIDEgKi9cbiAgZm9udC1zaXplOiAxMDAlO1xuICAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAvKiAxICovXG4gIG1hcmdpbjogMDtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cbiAqL1xuXG5idXR0b24sXG5pbnB1dCB7XG4gIC8qIDEgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXG4gKi9cblxuYnV0dG9uLFxuc2VsZWN0IHtcbiAgLyogMSAqL1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICovXG5cbmJ1dHRvbixcblt0eXBlPSdidXR0b24nXSxcblt0eXBlPSdyZXNldCddLFxuW3R5cGU9J3N1Ym1pdCddIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAqL1xuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT0nYnV0dG9uJ106Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT0ncmVzZXQnXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPSdzdWJtaXQnXTo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cblxuLyoqXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXG4gKi9cblxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9J2J1dHRvbiddOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9J3Jlc2V0J106LW1vei1mb2N1c3JpbmcsXG5bdHlwZT0nc3VibWl0J106LW1vei1mb2N1c3Jpbmcge1xuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxuICovXG5cbmZpZWxkc2V0IHtcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5sZWdlbmQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0O1xuICAvKiAyICovXG4gIGRpc3BsYXk6IHRhYmxlO1xuICAvKiAxICovXG4gIG1heC13aWR0aDogMTAwJTtcbiAgLyogMSAqL1xuICBwYWRkaW5nOiAwO1xuICAvKiAzICovXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIC8qIDEgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxuICovXG5cbnByb2dyZXNzIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxuICovXG5cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXG4gKi9cblxuW3R5cGU9J2NoZWNrYm94J10sXG5bdHlwZT0ncmFkaW8nXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC8qIDEgKi9cbiAgcGFkZGluZzogMDtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cbiAqL1xuXG5bdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5bdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiAqL1xuXG5bdHlwZT0nc2VhcmNoJ10ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgLyogMSAqL1xuICBvdXRsaW5lLW9mZnNldDogLTJweDtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbiAqL1xuXG5bdHlwZT0nc2VhcmNoJ106Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cbiAqL1xuXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gIC8qIDEgKi9cbiAgZm9udDogaW5oZXJpdDtcbiAgLyogMiAqL1xufVxuXG4vKiBJbnRlcmFjdGl2ZVxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXG4gKi9cblxuZGV0YWlscyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnN1bW1hcnkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG5cbi8qIE1pc2NcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxuICovXG5cbnRlbXBsYXRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cbiAqL1xuXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iLAoJCSIvLyBSZXNldCBib3ggc2l6aW5nIHRvIGJvcmRlciBib3hcbmh0bWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG4vLyBSZW1vdmUgZmlndXJlIG1hcmdpblxuZmlndXJlIHtcbiAgbWFyZ2luOiAwO1xufVxuIiwKCQkiLyoqXG4gKiBTY2FmZm9sZGluZ1xuICovXG5cbi8vIEhUTUwgYmFzZVxuaHRtbCB7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBmb250OiAkZm9udC1zdHlsZSAkZm9udC12YXJpYW50ICRmb250LXdlaWdodCAjeyRmb250LXNpemV9LyN7JGxpbmUtaGVpZ2h0fSAkZm9udC1mYW1pbHk7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbn1cblxuLy8gQm9keSBiYXNlXG5ib2R5IHtcbiAgY29sb3I6ICRmb250LWNvbG9yO1xuICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgZm9udC1zaXplOiAkYm9keS1mb250LXNpemU7XG59XG5cbnAsXG5vbCxcbnVsLFxuZGwsXG50YWJsZSB7XG4gIG1hcmdpbjogMCAwICRtYXJnaW5zIDA7XG59XG5cbi8vIFJlbW92ZSBleHRyYSBtYXJnaW4gZm9yIG5lc3RlZCBsaXN0c1xudWwgbGkgdWwge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5vbCBsaSBvbCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi8vIEhlYWRpbmdzXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1IHtcbiAgbWFyZ2luOiAkbWFyZ2lucyAwO1xuICBmb250LXdlaWdodDogJGhlYWRpbmctZm9udC13ZWlnaHQ7XG4gIGZvbnQtZmFtaWx5OiAkaGVhZGluZy1mb250LWZhbWlseTtcbiAgbGluZS1oZWlnaHQ6ICRoZWFkaW5nLWxpbmUtaGVpZ2h0O1xuICBjb2xvcjogJGhlYWRpbmctZm9udC1jb2xvcjtcblxuICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBtYXJnaW46IDEuNXJlbSAwO1xuICB9XG59XG5cbi8vIEluY3JlYXNlZCBtYXJnaW4gb24gYWRkaXRpb25hbCBoZWFkaW5nc1xuaDE6bm90KDpmaXJzdC1jaGlsZCksXG5oMjpub3QoOmZpcnN0LWNoaWxkKSxcbmgzOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLy8gSGVhZGluZyBpbmRpdmlkdWFsIHN0eWxlc1xuaDEge1xuICBmb250LXNpemU6ICRoMS1tb2JpbGU7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAkaDItbW9iaWxlO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogJGgzLW1vYmlsZTtcbn1cblxuaDQge1xuICBmb250LXNpemU6ICRoNC1tb2JpbGU7XG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiAkaDUtbW9iaWxlO1xufVxuXG5AaW5jbHVkZSBzbWFsbC1icmVha3BvaW50IHtcbiAgLy8gSW5jcmVhc2VkIG1hcmdpbiBvbiBhZGRpdGlvbmFsIGhlYWRpbmdzXG4gIGgxOm5vdCg6Zmlyc3QtY2hpbGQpLFxuICBoMjpub3QoOmZpcnN0LWNoaWxkKSxcbiAgaDM6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgfVxuXG4gIC8vIEhlYWRpbmcgZGVza3RvcCBpbmRpdmlkdWFsIHN0eWxlc1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAkaDE7XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAkaDI7XG4gIH1cblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAkaDM7XG4gIH1cblxuICBoNCB7XG4gICAgZm9udC1zaXplOiAkaDQ7XG4gIH1cblxuICBoNSB7XG4gICAgZm9udC1zaXplOiAkaDU7XG4gIH1cbn1cblxuLy8gTGluayBzdHlsaW5nXG5hIHtcbiAgY29sb3I6ICRsaW5rLWNvbG9yO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgJjpob3ZlcixcbiAgJjphY3RpdmUsXG4gICY6Zm9jdXMge1xuICAgIGNvbG9yOiAkbGluay1ob3Zlci1jb2xvcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxufVxuXG4vLyBIaWdobGlnaHRcbm1hcmsge1xuICBiYWNrZ3JvdW5kOiAkaGlnaGxpZ2h0O1xuICBwYWRkaW5nOiAwIDAuMnJlbTtcbn1cblxuLy8gQmxvY2txdW90ZVxuYmxvY2txdW90ZSB7XG4gIG1hcmdpbjogMCAwICRtYXJnaW5zIDA7XG4gIGJvcmRlci1sZWZ0OiAkYnEtYm9yZGVyO1xuICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG5cbiAgY2l0ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogJG1hcmdpbnM7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59XG5cbi8vIENvZGUgYmxvY2sgc3R5bGluZ1xucHJlIHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgYmFja2dyb3VuZDogJGNvZGUtYmFja2dyb3VuZDtcbiAgcGFkZGluZzogMXJlbTtcbiAgdGFiLXNpemU6IDI7XG4gIGNvbG9yOiAkY29kZS1jb2xvcjtcbiAgZm9udC1mYW1pbHk6ICRjb2RlLWZhbWlseTtcbiAgZm9udC1zaXplOiAkY29kZS1zaXplO1xuICBtYXJnaW46IDAgMCAkbWFyZ2lucyAwO1xuXG4gIGNvZGUge1xuICAgIGZvbnQtZmFtaWx5OiAkY29kZS1mYW1pbHk7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgfVxufVxuXG4vLyBLZXlib2FyZCBpbnB1dFxua2JkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAwIDAgMnB4ICNmZmYgaW5zZXQ7XG4gIGNvbG9yOiAjMzMzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIG1hcmdpbjogMCAwLjFlbTtcbiAgcGFkZGluZzogMC4xZW0gMC42ZW07XG4gIHRleHQtc2hhZG93OiAwIDFweCAwICNmZmY7XG59XG5cbi8vIElubGluZSBjb2RlIHN0eWxpbmdcbjpub3QocHJlKSA+IGNvZGUge1xuICBjb2xvcjogJGNvZGUtY29sb3I7XG4gIGJhY2tncm91bmQ6ICRjb2RlLWJhY2tncm91bmQ7XG4gIGZvbnQtZmFtaWx5OiAkY29kZS1mYW1pbHk7XG4gIGZvbnQtc2l6ZTogJGNvZGUtc2l6ZTtcbiAgcGFkZGluZzogMCAwLjJyZW07XG4gIGJvcmRlcjogJGJvcmRlcnM7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xufVxuXG4vLyBMaW5lIGJyZWFrXG5ociB7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItdG9wOiAkYm9yZGVycztcbn1cblxuLy8gRGVmaW5pdGlvbiBsaXN0XG5kdCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmRkIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4vLyBGdWxsIGNvbnRhaW5lclxuLmZ1bGwtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDFyZW07XG59XG5cbi8vIENvbnRhaW5lclxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogJGxhcmdlO1xuICBwYWRkaW5nOiAwICRwYWRkaW5nO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4vLyBTbWFsbCBjb250YWluZXJcbi5zbWFsbC1jb250YWluZXIge1xuICBAZXh0ZW5kIC5jb250YWluZXI7XG4gIG1heC13aWR0aDogJHNtYWxsO1xufVxuXG4vLyBNZWRpdW0gY29udGFpbmVyXG4ubWVkaXVtLWNvbnRhaW5lciB7XG4gIEBleHRlbmQgLmNvbnRhaW5lcjtcbiAgbWF4LXdpZHRoOiAkbWVkaXVtO1xufVxuXG4vLyBDb250ZW50XG4uY29udGVudC1zZWN0aW9uIHtcbiAgcGFkZGluZzogJGNvbnRlbnQtcGFkZGluZy1tb2JpbGU7XG59XG5cbkBpbmNsdWRlIHNtYWxsLWJyZWFrcG9pbnQge1xuICAuY29udGVudC1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAkY29udGVudC1wYWRkaW5nO1xuICB9XG59XG4iLAoJCSIvKipcbiAqIEdyaWRcbiAqL1xuXG4kY29sdW1uLXBhZGRpbmc6IDFyZW07XG4kbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuLy8gVGhlIHJvd3MgaGF2ZSBhIG5lZ2F0aXZlIG1hcmdpbiAgd2hpY2ggYXJlIG9mZnNldCBieSB0aGUgcGFkZGluZyBvbiB0aGUgY29sdW1ucy5cbiVjb2x1bW4tcGFkZGluZyB7XG4gIHBhZGRpbmctbGVmdDogJGNvbHVtbi1wYWRkaW5nO1xuICBwYWRkaW5nLXJpZ2h0OiAkY29sdW1uLXBhZGRpbmc7XG59XG5cbiVyb3ctbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IC0kY29sdW1uLXBhZGRpbmc7XG4gIG1hcmdpbi1yaWdodDogLSRjb2x1bW4tcGFkZGluZztcbn1cblxuLy8gRmxleCByb3dcbi5mbGV4LXJvdyB7XG4gIEBleHRlbmQgJXJvdy1tYXJnaW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmZsZXgtc21hbGwsXG4uZmxleC1sYXJnZSB7XG4gIEBleHRlbmQgJWNvbHVtbi1wYWRkaW5nO1xuICBmbGV4LWJhc2lzOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAkbWFyZ2luLWJvdHRvbTtcbn1cblxuLyogU21hbGwgc2NyZWVuIGJyZWFrcG9pbnQgKi9cblxuQGluY2x1ZGUgc21hbGwtYnJlYWtwb2ludCB7XG4gIC5mbGV4LXNtYWxsIHtcbiAgICBmbGV4OiAxO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgJi5oYWxmIHtcbiAgICAgIGZsZXg6IDAgMCBjYWxjKDEgLyAyICogMTAwJSk7XG4gICAgfVxuICAgICYub25lLWZvdXJ0aCB7XG4gICAgICBmbGV4OiAwIDAgY2FsYygxIC8gNCAqIDEwMCUpO1xuICAgIH1cbiAgICAmLnRocmVlLWZvdXJ0aHMge1xuICAgICAgZmxleDogMCAwIGNhbGMoMyAvIDQgKiAxMDAlKTtcbiAgICB9XG4gICAgJi5vbmUtdGhpcmQge1xuICAgICAgZmxleDogMCAwIGNhbGMoMSAvIDMgKiAxMDAlKTtcbiAgICB9XG4gICAgJi50d28tdGhpcmRzIHtcbiAgICAgIGZsZXg6IDAgMCBjYWxjKDIgLyAzICogMTAwJSk7XG4gICAgfVxuICB9XG59XG5cbi8qIExhcmdlIHNjcmVlbiBicmVha3BvaW50ICovXG5cbkBpbmNsdWRlIGxhcmdlLWJyZWFrcG9pbnQge1xuICAuZmxleC1sYXJnZSB7XG4gICAgZmxleDogMTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICYuaGFsZiB7XG4gICAgICBmbGV4OiAwIDAgY2FsYygxIC8gMiAqIDEwMCUpO1xuICAgIH1cbiAgICAmLm9uZS1mb3VydGgge1xuICAgICAgZmxleDogMCAwIGNhbGMoMSAvIDQgKiAxMDAlKTtcbiAgICB9XG4gICAgJi50aHJlZS1mb3VydGhzIHtcbiAgICAgIGZsZXg6IDAgMCBjYWxjKDMgLyA0ICogMTAwJSk7XG4gICAgfVxuICAgICYub25lLXRoaXJkIHtcbiAgICAgIGZsZXg6IDAgMCBjYWxjKDEgLyAzICogMTAwJSk7XG4gICAgfVxuICAgICYudHdvLXRoaXJkcyB7XG4gICAgICBmbGV4OiAwIDAgY2FsYygyIC8gMyAqIDEwMCUpO1xuICAgIH1cbiAgfVxufVxuIiwKCQkiLyoqXG4gKiBIZWxwZXJzXG4gKi9cblxuLy8gQ2xhc3NpYyBjbGVhcmZpeFxuLmNsZWFyZml4OjpiZWZvcmUsXG4uY2xlYXJmaXg6OmFmdGVyIHtcbiAgY29udGVudDogJyAnO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNsZWFyZml4OmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi8vIFRleHQgYWxpZ25tZW50XG4udGV4dC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dC1qdXN0aWZ5IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLy8gRGlzcGxheVxuLmJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pbmxpbmUtYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5pbmxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi8vIFZlcnRpY2FsIGNlbnRlclxuLnZlcnRpY2FsLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vLyBSZXNwb25zaXZlIGltYWdlc1xuLnJlc3BvbnNpdmUtaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLy8gRGlzcGxheSBTdGF0ZVxuLnNob3cge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmludmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLy8gUGFkZGluZ1xuLm5vLXBhZGRpbmctdG9wIHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5uby1wYWRkaW5nLWJvdHRvbSB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4ucGFkZGluZy10b3Age1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbn1cblxuLnBhZGRpbmctYm90dG9tIHtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG59XG5cbi8vIE1hcmdpbnNcbi5uby1tYXJnaW4tdG9wIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm5vLW1hcmdpbi1ib3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubWFyZ2luLXRvcCB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5tYXJnaW4tYm90dG9tIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLy8gQmFja2dyb3VuZHNcbi5hbHRlcm5hdGUtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6ICRhbHRlcm5hdGUtYmFja2dyb3VuZDtcbiAgY29sb3I6ICRhbHRlcm5hdGUtY29sb3I7XG59XG5cbi5zcGFjZS1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uanVzdGlmeS1jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFsaWduLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8vIFNjcmVlbiByZWFkZXIgdGV4dCBmb3IgYWNjZXNzaWJpbGl0eVxuLnNjcmVlbi1yZWFkZXItdGV4dCB7XG4gIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIiwKCQkiLyoqXG4gKiBCdXR0b25zXG4gKi9cblxuLy8gTWFpbiBidXR0b24gc3R5bGluZ1xuJWJ1dHRvbnMge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAkYnV0dG9uLWJvcmRlci13aWR0aCAkYnV0dG9uLWJvcmRlci1zdHlsZSAkYnV0dG9uLWJvcmRlci1jb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogJGJ1dHRvbi1ib3JkZXItcmFkaXVzO1xuICBiYWNrZ3JvdW5kOiAkYnV0dG9uLWJhY2tncm91bmQ7XG4gIGNvbG9yOiAkYnV0dG9uLWNvbG9yO1xuICBmb250LXdlaWdodDogJGJ1dHRvbi1mb250LXdlaWdodDtcbiAgZm9udC1mYW1pbHk6ICRidXR0b24tZm9udC1mYW1pbHk7XG4gIGZvbnQtc2l6ZTogJGJ1dHRvbi1mb250LXNpemU7XG4gIHRleHQtdHJhbnNmb3JtOiAkYnV0dG9uLXRleHQtdHJhbnNmb3JtO1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XG4gIG1hcmdpbjogMCAwIDAuNXJlbSAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLy8gQnV0dG9ucyBvbiBob3ZlclxuJWJ1dHRvbnMtaG92ZXIge1xuICBib3JkZXI6ICRidXR0b24tYm9yZGVyLXdpZHRoICRidXR0b24tYm9yZGVyLXN0eWxlIGRhcmtlbigkYnV0dG9uLWJvcmRlci1jb2xvciwgMTAlKTtcbiAgYmFja2dyb3VuZDogJGJ1dHRvbi1iYWNrZ3JvdW5kLWhvdmVyO1xuICBjb2xvcjogJGJ1dHRvbi1jb2xvcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vLyBCdXR0b25zIG9uIGZvY3VzXG4lYnV0dG9ucy1mb2N1cyB7XG4gIGJvcmRlcjogJGJ1dHRvbi1ib3JkZXItd2lkdGggJGJ1dHRvbi1ib3JkZXItc3R5bGUgZGFya2VuKCRidXR0b24tYm9yZGVyLWNvbG9yLCAxMCUpO1xuICBiYWNrZ3JvdW5kOiBkYXJrZW4oJGJ1dHRvbi1iYWNrZ3JvdW5kLCAxMCUpO1xuICBjb2xvcjogJGJ1dHRvbi1jb2xvcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vLyBBcHBseSBzdHlsZXMgdG8gLmJ1dHRvbiBjbGFzcywgYnV0dG9uIGVsZW1lbnQsIGFuZCBidXR0b24tYmFzZWQgaW5wdXRzXG4jeyRidXR0b25zfSB7XG4gIEBleHRlbmQgJWJ1dHRvbnM7XG5cbiAgJjo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBAZXh0ZW5kICVidXR0b25zLWhvdmVyO1xuICB9XG5cbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUge1xuICAgIEBleHRlbmQgJWJ1dHRvbnMtZm9jdXM7XG4gIH1cbn1cblxuLy8gU2Vjb25kYXJ5IGJ1dHRvbiBjb2xvclxuLmFjY2VudC1idXR0b24sXG5hLmFjY2VudC1idXR0b24ge1xuICBjb2xvcjogJGFjY2VudC1idXR0b24tY29sb3I7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRhY2NlbnQtYnV0dG9uLWJhY2tncm91bmQ7XG4gIGJhY2tncm91bmQ6ICRhY2NlbnQtYnV0dG9uLWJhY2tncm91bmQ7XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUge1xuICAgIGNvbG9yOiAkYWNjZW50LWJ1dHRvbi1jb2xvci1ob3ZlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJGFjY2VudC1idXR0b24tYmFja2dyb3VuZCwgMTAlKTtcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJGFjY2VudC1idXR0b24tYmFja2dyb3VuZCwgMTAlKTtcbiAgfVxufVxuXG4vLyBNdXRlZCBidXR0b25zXG4ubXV0ZWQtYnV0dG9uLFxuYS5tdXRlZC1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAkbXV0ZWQtYmFja2dyb3VuZDtcbiAgYm9yZGVyOiAkbXV0ZWQtYm9yZGVyO1xuICBjb2xvcjogJG11dGVkLWNvbG9yO1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMsXG4gICY6YWN0aXZlIHtcbiAgICBjb2xvcjogJG11dGVkLWNvbG9yLWhvdmVyO1xuICAgIGJvcmRlcjogJG11dGVkLWJvcmRlci1ob3ZlcjtcbiAgICBiYWNrZ3JvdW5kOiAkbXV0ZWQtYmFja2dyb3VuZC1ob3ZlcjtcbiAgfVxufVxuXG4vLyBSb3VuZCBidXR0b25zXG4ucm91bmQtYnV0dG9uLFxuYS5yb3VuZC1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAkcm91bmQtYnV0dG9ucztcbn1cblxuLy8gU3F1YXJlIGJ1dHRvbnNcbi5zcXVhcmUtYnV0dG9uLFxuYS5zcXVhcmUtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLy8gRnVsbCB3aWR0aCBidXR0b25zIChibG9jayBsZXZlbClcbi5mdWxsLWJ1dHRvbixcbmEuZnVsbC1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG4iLAoJCSIvKipcbiAqIEZvcm1zXG4gKi9cblxuLy8gRGlzcGxheSBmb3IgYWxsIGlucHV0IGZpZWxkcyAoZXhjZXB0IGJ1dHRvbnMgYW5kIGNoZWNrYm94KVxuJWZvcm1zIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogJGZvcm0tYm9yZGVyO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogJGlucHV0LWJhY2tncm91bmQ7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLy8gSW5wdXQgZmllbGRzIG9uIGhvdmVyXG4lZm9ybXMtaG92ZXIge1xuICBib3JkZXI6ICRmb3JtLWJvcmRlci1ob3Zlcjtcbn1cblxuLy8gSW5wdXQgZmllbGRzIG9uIGZvY3VzXG4lZm9ybXMtZm9jdXMge1xuICBib3JkZXI6ICRmb3JtLWJvcmRlci1mb2N1cztcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAwIDZweCBsaWdodGVuKCRsaW5rLWNvbG9yLCAzMCUpO1xufVxuXG4vLyBWYXJpYWJsZSBjb250YWluaW5nIGFsbCBpbnB1dCBmaWVsZHNcbiN7JGZvcm1zfSB7XG4gIEBleHRlbmQgJWZvcm1zO1xuXG4gICY6aG92ZXIge1xuICAgIEBleHRlbmQgJWZvcm1zLWhvdmVyO1xuICB9XG5cbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUge1xuICAgIEBleHRlbmQgJWZvcm1zLWZvY3VzO1xuICB9XG59XG5cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn1cblxuZmllbGRzZXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgcGFkZGluZzogJHBhZGRpbmc7XG4gIG1hcmdpbjogJG1hcmdpbnMgMDtcbn1cblxubGVnZW5kIHtcbiAgcGFkZGluZzogMCAwLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi8vIEZpeCBpc3N1ZXMgd2l0aCBzZWxlY3RcbnNlbGVjdCB7XG4gIGNvbG9yOiAkZm9udC1jb2xvcjtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJJQUFBQUpDQVlBQUFBLzMzd1BBQUFBdmtsRVFWUW9GWTJRTVFxRU1CQkZ2N0VSYS9FTVhrR3cxMUs4UWJEWHp1TjRCSHY3UU82aWZVZ2o3djRVQWRsVk04VXdmK2I5WVpKSVNubHFyZkVVWlZsaW51Y25CR0thSmdnaGJpSE95THlGS0lvQ2JkdmVjcHlSZVl2by9NYTJiYWpyR3RiYUM1OGtDZFoxUlo3bmwvNC80ZDVFc08vN256bDdJVXRvZEJleE1NYWdhUnJzKzA2SkxNdmNOV21hT3YyVy9DL1RNQXlENThkeFJPZ1NtdnhGRk1keG9PczZsbGlXQlhFY3V6b2tYUmJSb0pSeXZxcXFRdnllK1FETUR6MUQ2eXVqOXdBQUFBQkpSVTVFcmtKZ2dnPT0pXG4gICAgcmlnaHQgY2VudGVyIG5vLXJlcGVhdDtcbiAgbGluZS1oZWlnaHQ6IDE7IC8vIGVuc3VyZXMgdGV4dCBkb2Vzbid0IGdldCBjdXQgb2ZmXG59XG5cbnNlbGVjdDo6LW1zLWV4cGFuZCB7XG4gIGRpc3BsYXk6IG5vbmU7IC8vIGRyb3Bkb3duIGljb24gZml4IGZvciBJRVxufVxuXG4vLyBNYWtlIHJhbmdlIGZ1bGwgd2lkdGhcblt0eXBlPSdyYW5nZSddIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8vIExhYmVsc1xubGFiZWwge1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDFyZW0gMCAwLjVyZW07XG59XG5cbkBpbmNsdWRlIHNtYWxsLWJyZWFrcG9pbnQge1xuICAuc3BsaXQtZm9ybSB7XG4gICAgLy8gU3BsaXQgZm9ybXMgaGF2ZSByaWdodCBhbGlnbmVkIGxhYmVscyBhbmQgbWFyZ2lucyBvbiB0aGUgY29sdW1uXG4gICAgbGFiZWwge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuICB9XG59XG5cbi8vIEZvcm0gdmFsaWRhdGlvblxuaW5wdXQsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gICYuaGFzLWVycm9yIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkZXJyb3I7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAwIDZweCBsaWdodGVuKCRlcnJvciwgMzUlKTtcbiAgfVxuXG4gICYuaXMtc3VjY2VzcyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHN1Y2Nlc3M7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAwIDZweCBsaWdodGVuKCRzdWNjZXNzLCAyNSUpO1xuICB9XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUge1xuICAgICYuaGFzLWVycm9yIHtcbiAgICAgIEBleHRlbmQgLmhhcy1lcnJvcjtcbiAgICB9XG5cbiAgICAmLmlzLXN1Y2Nlc3Mge1xuICAgICAgQGV4dGVuZCAuaXMtc3VjY2VzcztcbiAgICB9XG4gIH1cbn1cblxuLy8gUGxhY2Vob2xkZXIgVGV4dFxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLFxuOjotbW96LXBsYWNlaG9sZGVyLFxuOi1tb3otcGxhY2Vob2xkZXIsXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICRwbGFjZWhvbGRlcjtcbn1cbiIsCgkJIi8qKlxuICogVGFibGVzXG4gKi9cblxuLy8gVGFibGUgZXhwYW5kcyB0byBmdWxsIHdpZHRoIG9mIGNvbnRhaW5pbmcgZWxlbWVudFxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLy8gRXh0cmEgYm9yZGVyIHVuZGVybmVhdGggaGVhZGVyXG50aGVhZCB0aCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xufVxuXG4vLyBFeHRyYSBib3JkZXIgYWJvdmUgZm9vdGVyXG50Zm9vdCB0aCB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xufVxuXG50ZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xufVxuXG50aCxcbnRkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG5jYXB0aW9uIHtcbiAgcGFkZGluZzogJHBhZGRpbmcgMDtcbiAgY2FwdGlvbi1zaWRlOiBib3R0b207XG4gIGNvbG9yOiAkY2FwdGlvbjtcbn1cblxuLnN0cmlwZWQtdGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3RyaXBlcztcbn1cblxuLy8gQ29udGFpbmVyIGZvciByZXNwb25zaXZlIHRhYmxlc1xuLmNvbnRhaW4tdGFibGUge1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG5AaW5jbHVkZSBzbWFsbC1icmVha3BvaW50IHtcbiAgLmNvbnRhaW4tdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iLAoJCSIvKlxuICogTmF2aWdhdGlvblxuICovXG4iLAoJCSIvKipcbiAqIExheW91dFxuICovXG4iCgldLAoJIm5hbWVzIjogW10sCgkibWFwcGluZ3MiOiAiQUFBQTs7Ozs7Ozs7O0dBU0c7QUNUSDs7OztHQUlHO0FFSkgsNEVBQTRFO0FBRTVFO2dGQUNnRjtBQUVoRjs7O0dBR0c7QUFFSCxBQUFBLElBQUksQ0FBQztFQUNILFdBQVcsRUFBRSxJQUFJO0VBQ2pCLE9BQU87RUFDUCx3QkFBd0IsRUFBRSxJQUFJO0VBQzlCLE9BQU87Q0FDUjs7QUFFRDtnRkFDZ0Y7QUFFaEY7O0dBRUc7QUFFSCxBQUFBLElBQUksQ0FBQztFQUNILE1BQU0sRUFBRSxDQUFDO0NBQ1Y7O0FBRUQ7O0dBRUc7QUFFSCxBQUFBLElBQUksQ0FBQztFQUNILE9BQU8sRUFBRSxLQUFLO0NBQ2Y7O0FBRUQ7OztHQUdHO0FBRUgsQUFBQSxFQUFFLENBQUM7RUFDRCxTQUFTLEVBQUUsR0FBRztFQUNkLE1BQU0sRUFBRSxRQUFRO0NBQ2pCOztBQUVEO2dGQUNnRjtBQUVoRjs7O0dBR0c7QUFFSCxBQUFBLEVBQUUsQ0FBQztFQUNELFVBQVUsRUFBRSxXQUFXO0VBQ3ZCLE9BQU87RUFDUCxNQUFNLEVBQUUsQ0FBQztFQUNULE9BQU87RUFDUCxRQUFRLEVBQUUsT0FBTztFQUNqQixPQUFPO0NBQ1I7O0FB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 */
