# PhishGuard Theme System - Quick Reference

## 🎨 Color Palette

### Light Mode (Default: Off-White & Red)
```css
Background:     hsl(0, 0%, 98%)    /* Off-white */
Foreground:     hsl(0, 0%, 10%)    /* Near-black */
Primary:        hsl(0, 65%, 45%)   /* Burgundy */
Border:         hsl(0, 0%, 88%)    /* Light gray */
Muted Text:     hsl(0, 0%, 45%)    /* Medium gray */
Destructive:    hsl(0, 70%, 50%)   /* Crimson red */
```

### Dark Mode (Black & Muted Red)
```css
Background:     hsl(0, 0%, 8%)     /* Deep black */
Foreground:     hsl(0, 0%, 95%)    /* Off-white */
Primary:        hsl(0, 55%, 50%)   /* Muted red */
Border:         hsl(0, 0%, 18%)    /* Dark gray */
Muted Text:     hsl(0, 0%, 60%)    /* Light gray */
Destructive:    hsl(0, 60%, 45%)   /* Dark red */
```

## 🔄 Dark Mode Toggle

### Location
**Navbar** - Top right corner, next to navigation links

### Usage
```tsx
import { useTheme } from "next-themes";

const { theme, setTheme } = useTheme();

<Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
  Toggle Theme
</Button>
```

### Features
- ✅ Automatic localStorage persistence
- ✅ No flash on page load
- ✅ Smooth 250ms transitions
- ✅ System preference detection
- ✅ SSR-safe implementation

## 🎯 Risk Score Colors

### Usage Pattern
```tsx
const getRiskColor = (score: number) => {
  if (score >= 70) return 'text-destructive';  // Red
  if (score >= 50) return 'text-primary';      // Burgundy
  return 'text-foreground';                     // Default
};

<div className={getRiskColor(score)}>{score}</div>
```

### Visual Indicators
- **High Risk (≥70)**: Bright red - immediate attention needed
- **Medium Risk (50-69)**: Burgundy - caution advised
- **Low Risk (<50)**: Default color - likely safe

## 🔧 Technical Details

### Theme Provider Configuration
```tsx
<ThemeProvider
  attribute="class"
  defaultTheme="dark"
  enableSystem
>
  {children}
</ThemeProvider>
```

### Global Transitions
All theme changes animate smoothly:
```css
* {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 250ms;
}
```

### Custom Properties
Theme colors are defined as CSS custom properties in `globals.css`:
- Edit `:root` for light mode
- Edit `.dark` for dark mode
- Changes apply globally

## 📱 Components Using Theme

### Fully Theme-Aware
- ✅ Navbar
- ✅ Footer
- ✅ All buttons
- ✅ Cards and borders
- ✅ Text and headings
- ✅ Input fields
- ✅ Risk indicators
- ✅ Progress bars

### Auto-Transitioning
All components automatically transition when theme changes - no additional code needed.

## 🎨 Customization

### To Change Primary Color
Edit in `app/globals.css`:
```css
:root {
  --primary: 0 65% 45%;  /* Light mode burgundy */
}

.dark {
  --primary: 0 55% 50%;  /* Dark mode muted red */
}
```

### To Adjust Transition Speed
Edit in `app/globals.css`:
```css
* {
  transition-duration: 250ms;  /* Change this value */
}
```

### To Change Default Theme
Edit in `app/layout.tsx`:
```tsx
<ThemeProvider defaultTheme="light">  /* or "dark" or "system" */
```

## 🐛 Troubleshooting

### Theme Not Persisting
- Ensure localStorage is enabled in browser
- Check that `next-themes` is installed
- Verify ThemeProvider wraps entire app

### Flash on Load
- Ensure `suppressHydrationWarning` is on `<html>` tag
- Verify `next-themes` is configured correctly
- Check that `attribute="class"` is set

### Colors Not Changing
- Verify components use Tailwind color classes
- Check that custom properties are defined
- Ensure `.dark` selector is present

## 📚 Resources

- **next-themes**: [https://github.com/pacocoursey/next-themes](https://github.com/pacocoursey/next-themes)
- **Tailwind CSS**: [https://tailwindcss.com/docs/dark-mode](https://tailwindcss.com/docs/dark-mode)
- **WCAG Contrast**: [https://webaim.org/resources/contrastchecker/](https://webaim.org/resources/contrastchecker/)

## ✅ Best Practices

1. **Always use theme-aware colors**: Use Tailwind utility classes
2. **Test both themes**: Verify UI in light and dark mode
3. **Check contrast ratios**: Ensure text is readable
4. **Avoid hardcoded colors**: Use CSS custom properties
5. **Test persistence**: Clear localStorage and verify default
