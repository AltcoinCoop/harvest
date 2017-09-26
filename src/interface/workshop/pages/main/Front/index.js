/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import MediaQuery from 'react-responsive'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Flex, Box, Grid} from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */


import assets from 'assets'
import { 
 BackgroundImage, BackgroundGradient,
 Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
 Blockquote, HorizontalRule, Shape, Responsive } from 'atomic'

// Developer Docs: https://github.com/ballercat/wasm-loader
/**
 * The WASM Loader was disabled, because it was causing issues.
 * For now we're doing a simple fetch to the static asset, instead
 * of loading the ArrayBuffer in Javascript.
 */

import harvest from 'foundryCode/harvest/harvestSlim.wasm'
import factorial from 'foundryCode/harvest/factorial.wasm'


function fetchAndInstantiate(url, importObject) {
  return fetch(url).then(response =>
    response.arrayBuffer()
  ).then(bytes =>
    window.WebAssembly.instantiate(bytes, importObject)
  ).then(results =>
    results.instance
  );
}


let importObject = {}
fetchAndInstantiate(harvest, importObject).then(function(instance) {
  // Store the WebAssembly functions in "t"
  const t = instance.exports
  console.log(t)
})

fetchAndInstantiate(factorial, importObject).then(function(instance) {
  // Store the WebAssembly functions in "t"
  const t = instance.exports
  const factorial = instance.exports._Z4facti;

  console.log(factorial(1)); // 1
  console.log(factorial(2)); // 2
  console.log(factorial(3)); // 6
})
/* ------------------------------- Component -------------------------------- */
export default props => (
  <div>

  </div>
)


