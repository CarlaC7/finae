
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/empresa"
  },
  {
    "renderMode": 2,
    "route": "/empleados"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 430, hash: 'ce776b03639b918a365c819da1b802f4720844944a616ba918d6d134c6db0865', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 943, hash: '914aa3b636ad2ef3f7be2975ca73c31ff84f14e062f4b9d5ef6aa47709be311a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'empresa/index.html': {size: 9195, hash: 'b148fa7c773a9d6a934029f631a208988293db2cde871bc0e7a236de786fec14', text: () => import('./assets-chunks/empresa_index_html.mjs').then(m => m.default)},
    'index.html': {size: 9298, hash: '99b0fdc8706d24735748c308e7e7cf22e6e43ad32e463aaf35a6c4baccec780e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
