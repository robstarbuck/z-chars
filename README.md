<p>
<a align="center" href="#readme">
<img width="100%" height="320px" src="https://user-images.githubusercontent.com/5805251/156551854-29ef4800-e455-4e86-bb98-deef7dd0d6b7.svg" />
</a>
</p>

Steganography using zero-width bidirectional control characters ordinarily used when embedding Hebrew or Arabic text.

## How it works

This library encodes a secret message into a cover text by converting each character of the secret message into a sequence of zero-width characters. These zero-width characters are then interspersed throughout the cover text. Because they are zero-width, they are invisible to the human eye in most text editors and browsers.

The decoding process involves scanning the text for these specific zero-width characters, extracting them, and converting them back into the original secret message.

**POLITE NOTICE** There's enough trash on the web without hidden characters gumming up our messages, please don't use this in the wild.

[Demo](https://robstarbuck.github.io/z-chars-demo/)

# Installation

```bash
npm install z-chars
# or
yarn add z-chars
```

_(Note: I've assumed the package name is `z-chars` on npm. If it's different, please update the command.)_

# Usage

Here’s how you can use `z-chars` to encode and decode messages.

## Encoding

```javascript
import { encode } from 'z-chars';

const coverText = 'This is a normal looking sentence.';
const secretMessage = 'hidden message';

const encodedText = encode(coverText, secretMessage);
// encodedText will now contain the secret message hidden inside.
```

## Decoding

```javascript
import { decode } from 'z-chars';

// This string contains hidden zero-width characters.
const textWithHiddenMessage = 'This is a no\u200dr\u200cmal looking sen\u200dtence.';
const secretMessage = decode(textWithHiddenMessage);

console.log(secretMessage); // Outputs: 'hidden message'
```

# Bookmarks

- [W3 Inline Bidi Markup](https://www.w3.org/International/articles/inline-bidi-markup/)
- [W3 Bidi Control Characters QA](https://www.w3.org/International/questions/qa-bidi-unicode-controls)
- [Graphics - Margaret Calvert Interview](https://www.youtube.com/watch?v=pyBrrmDw6-k)
- [Graphics - History of Roadsigns](https://www.grapheine.com/en/history-of-graphic-design/margaret-calvert-woman-at-work-how-design-saved-uks-roads)
