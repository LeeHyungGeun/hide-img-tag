# HIDE-IMG-TAG
Convert `Image tag` as your component with a src of img tag'

## Usage
``` javascript
converter({html}, {component})
```

## Example
``` javascript
converter('<img src="https://www.leehyunggeun.com" />', '<div>{src}</div>');

// result
<div>https://www.leehyunggeun.com</div>
```