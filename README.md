# Funnels Viewer

The app designed to preview funnels on mobile viewports.

Available at [https://funnels-viewer.vercel.app](https://funnels-viewer.vercel.app/).



https://github.com/yuriyyakym/funnels-viewer/assets/18438911/0ceb957e-d01f-45b5-b41d-f728649db092



### Tech description and notes
Project is built using React + Jotai + Tailwind.\
No memoization is added, as it was considered a premature optimization.\
In order to have a better looking, vertical padding was added to a Page. But it may not be desired in some cases (for example when first block is an image). More details needed.

Some ideas can be found in [Issues](https://github.com/yuriyyakym/funnels-viewer/issues).

### Features
    
- Funnel file validation and defined schema enforcing (all the fields are assumed required),
- Uses [CSS Container Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries) via [tailwindcss-container-queries](https://github.com/tailwindlabs/tailwindcss-container-queries) in order to support responsive blocks media queries without involving an iframe,
- Lazy-loading images with spinner,
- Image aspect-ratio prediction in order to reduce CLS,
- Interactive resizing.
