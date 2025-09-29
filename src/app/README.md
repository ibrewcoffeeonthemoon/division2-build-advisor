# Guide

## How to generate icons

Use <https://maskable.app> for generating maskable icons with a safety padding.

use <https://realfavicongenerator.net/> to generate a favicon.ico from image.

## Notes on making PWA and service worker to work

1. go to devtools > Application

2. click on 'Service workers' and make sure sw.js is loaded

3. click on 'Manifest' and make sure it is loaded, if not, hard create the `<link>` tag in the html head

4. check for 'Errors and warnings', see if 'Installable' tag shows any errors

5. see if icons are properly loaded, and see if image resolution is the root problem, and fix them

6. put static assets inside public/ more guarantee assets properly loaded, either the icons or manifest.json
