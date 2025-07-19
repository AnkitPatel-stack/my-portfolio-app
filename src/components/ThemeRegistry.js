"use client"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { useServerInsertedHTML } from "next/navigation"
import { CacheProvider } from "@emotion/react"
import createCache from "@emotion/cache"

const theme = createTheme({
    // Your theme configuration (same as before)
    palette: {
        mode: "light",
        primary: {
            main: "#2563eb",
            light: "#3b82f6",
            dark: "#1d4ed8",
        },
        // ... rest of your theme config
    }
})

// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
export default function ThemeRegistry({ children }) {
    const cache = createCache({
        key: "css",
        prepend: true,
    })

    useServerInsertedHTML(() => {
        return (
            <style
                data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
                dangerouslySetInnerHTML={{
                    __html: Object.values(cache.inserted).join(" "),
                }}
            />
        )
    })

    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </CacheProvider>
    )
}