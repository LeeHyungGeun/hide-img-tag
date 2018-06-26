function component(strings, src) {
  const str0 = strings[0];
  const str1 = strings[1];
  return `${str0}${src}${str1}`
}
function converter(html, _component) {
  const regexp = /\<img\ ?src=("|')([^\"]*)\1\ ?\/?\>/mig;
  const to = _component.replace('{children}', '$2');
  return html.replace(regexp, component`${to}`);
}