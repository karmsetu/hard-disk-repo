# framer-motion notes

# importing framer

```js
import { motion } from "framer-motion";
```

# creating motion element

```js
<motion.< elementName >>
</motion.< elementName >>
```

-   for example:

```jsx
<motion.div></motion.div>
```

# motion props

1. `initial={{}}`: defines initaial state

2. `animate={{}}`: defines animated state
3. `transition={{}}`: defines transition state

# transition prop

```jsx
transition={{
        duration: 1.0,
        type: "spring",
        ease: "anticipate",
    }}
```

<!-- TODO: documentation -->
