function component(strings, src) {
  const str0 = strings[0];
  const str1 = strings[1];
  return `${str0}${src}${str1}`;
}
function converter(html, _component) {
  const regexp = /\<img([^src]+)src=("|')([^\"]*)\2(.*)\/?\>/mig;
  const to = _component.replace('{src}', '$3');
  return html.replace(regexp, component`${to}`);
}