React component example:

```tsx
import Button from '@material-ui/core/Button';
<Button size="large">Push Me</Button>;
```

You can add a custom props to an example wrapper:

```tsx { "props": { "className": "checks" } }
import Button from '@material-ui/core/Button';
<Button>I’m transparent!</Button>;
```

Or add padding between examples in a block by passing the `padded` modifier:

```tsx padded
import Button from '@material-ui/core/Button';
<Button>Push Me</Button>;
<Button>Click Me</Button>;
<Button>Tap Me</Button>;
```

Or disable an editor by passing a `noeditor` modifier:

```tsx noeditor
import Button from '@material-ui/core/Button';
<Button>Push Me</Button>;
```

To render an example as highlighted source code add a `static` modifier:

```tsx static
import React from 'react';
```

Examples with all other languages are rendered only as highlighted source code, not an actual component:

```html
<button size="large">Push Me</button>
```

Any [Markdown](http://daringfireball.net/projects/markdown/) is **allowed** _here_.
