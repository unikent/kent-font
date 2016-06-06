# Kent-Font
Icon webfont for use in kent sites and applications

## Usage
Please refer to the current [brand guidelines](https://www.kent.ac.uk/brand) for use of the existing brand.

To include in your site or project you can download from [github](https://github.com/unikent/kent-font/archive/master.zip) or install via bower or composer.

Assets are in the `public` directory and should be retained in this folder structure as the css will look for the fonts in the fonts folder relative to itself.

Then simply include the css for the version you want in your webpage. *see below*

To display an icon add the approriate `.kf-{icon name}` class to a `<span>` or `<i>` tag.
  
For a list of available icons and further examples including various utility classes please see the demo pages in the `public` directory.

## Versions

### Kentfont

The full Kentfont, includes all currently available icons.

`/public/css/kentfont.css`


### Kentfont-lite

A reduced subset of the kentfont including just core kent logos, service icons and a handful of frequently used icons.

`/public/css/kentfont-lite.css`


### Kentfont-extra-lite

A version of Kentfont-lite where all font files are inlined into teh css as data-uri's.

**Note this version is not compatible with IE8**
 
`/public/css/kentfont-extra-lite.css`


## Building

The font assets are pre-built however there is a grunt task to rebuild if developing or adding new icons.

1. Install Node.js - this includes npm by default.

2. Install Grunt globally - its quite useful! `npm install -g grunt` or `npm install -g grunt-cli` for the cli version. 

4. Install the dependencies of our Grunt task - `npm install` from the root directory.

3. Run Grunt - `grunt` from the root to rebuild all assets or `grunt lite` for just *kentfont-light* or `grunt build` for just *kentfont*.


## Adding Icons

1. Add an appropriate single colour svg file to:
    - `/build/svg/core` for inclusion in both versions
    - `/build/svg/extended/` for just in *kentfont*.
2. The file should be named using only the characters `a-z` and `-`. The file name will determine the class name for this icon. For example `my-shiny-icon.svg` could be used as `.kf-my-shiny-icon`.
3. An appropriate *codepoint* value should be set for the character mapping for the icon in the `kent_codepoints` array in `gruntfile.js`. These values must be in the Unicode private use area. As a standard we have used the same codepoints as FontAwesome for icons taken directly from that font or have chosen a close approximation for similar icons. For the Kent logos and other fairly unique icons we have started sequential numbering from `0xE001`.
4. Rebuild the font and css assets using the instructions above.






