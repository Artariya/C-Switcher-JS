<h3 align="center">C-Switcher JS</h3>

<p align="center">
  This script helps you to switch between specific classes
  <br>
  <br>
  <a href="https://github.com/Artariya/C-Switcher-JS/issues/new?assignees=-&labels=bug&template=bug_report.yml">Report bug</a>
  ·
  <a href="https://github.com/Artariya/C-Switcher-JS/issues/new?assignees=&labels=feature&template=feature_request.yml">Request feature</a>
</p>

# C-Switcher JS

c-switcher allows you to define various modes as attributes and provides functions to easily switch between them.

## Table of contents

- [Install](#installing)
    - [cdn](#cdn)
- [Examples](#examples)
- [Documents](#documents)

## Quick start

### installing

Using npm:

```bash
$ npm install c-switcher-js
```

Once the package is installed, you can import the library using `import` or `require` approach:

```js
import {CSW} from 'c-switcher-js';
```

### cdn

Using jsDelivr CDN:

```html

<script src="https://cdn.jsdelivr.net/npm/c-switcher-js@1.0.0/dist/cswitcher.min.js"></script>
```

Using unpkg CDN:

```html

<script src="https://unpkg.com/c-switcher-js@1.0.0/dist/cswitcher.min.js"></script>
```

## Examples

Switching between custom modes

```html

<nav class="navbar" id="navbar" data-csm-floating="bg-white" data-csm-fixed="bg-transparent"></nav>
```

```js
CSW.switch({
    element: document.getElementById('navbar'),
    mode: 'fixed', // Switching to 'fixed' mode
    switch_children: false // Enables switching for navbar children elements which have data-csm attributes.
})
```

After calling switch:

```html

<nav class="navbar bg-transparent" id="navbar" data-csm-floating="bg-white" data-csm-fixed="bg-transparent"></nav>
```

check out the full example in `tests/sticky-header` directory

## Documents

### switch

switching between modes

```ts
CSW.switch({
    element: HTMLElement,
    mode: string,
    switch_children: boolean
})
```