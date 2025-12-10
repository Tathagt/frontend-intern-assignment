# Components Directory

Place your reusable React components here.

## Structure

```
components/
├── ui/              # UI components (buttons, inputs, etc.)
├── layout/          # Layout components (header, footer, etc.)
└── features/        # Feature-specific components
```

## Example Component

```tsx
'use client'

import { motion } from 'framer-motion'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

export default function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-semibold ${
        variant === 'primary' 
          ? 'bg-blue-500 text-white hover:bg-blue-600' 
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      }`}
    >
      {children}
    </motion.button>
  )
}
```

## Best Practices

1. Use TypeScript for type safety
2. Add proper prop types
3. Include accessibility attributes (ARIA)
4. Use Tailwind CSS for styling
5. Add Framer Motion for animations
6. Keep components small and focused
7. Export components as default