// src/ThemeProvider/theme.js
export const theme = {
    colors: {
        primary: "#7a9af1ff",    // blue
        secondary: "#0ccf8eff",  // green
        accent: "#FBBF24",     // yellow
        background: "#0C1A2C", // dark gray
        backgroundSecondary: "#1e385aff", // dark gray
        textPrimary: "#7a9af1ff",       
        textSecondary: "#131212ff",     
        card: "#1F2937",       // gray
        button: "#2563EB",  
        borderPrimary: "#2563EB"   // another blue for buttons
    },
    fontFamily: {
        sans: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont",
        serif: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
        mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas",
    },
    borderRadius: {
        sm: "0.125rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
    },
    spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
    },
    shadow: {
        sm: "0 1px 2px rgba(0,0,0,0.05)",
        md: "0 4px 6px rgba(0,0,0,0.1)",
        lg: "0 10px 15px rgba(0,0,0,0.15)",
    },
};
