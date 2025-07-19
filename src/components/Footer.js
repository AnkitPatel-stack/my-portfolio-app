"use client"
import { Box, Container, Typography, Stack, IconButton, Divider, Grid } from "@mui/material"
import { GitHub, LinkedIn, Twitter, Email, FavoriteOutlined } from "@mui/icons-material"

const Footer = () => {
  const socialLinks = [
    { icon: <GitHub />, url: "https://github.com/ankitpatel", label: "GitHub" },
    { icon: <LinkedIn />, url: "https://linkedin.com/in/ankitpatel", label: "LinkedIn" },
    { icon: <Twitter />, url: "https://twitter.com/ankitpatel", label: "Twitter" },
    { icon: <Email />, url: "mailto:ankit.patel@example.com", label: "Email" },
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        color: "white",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                mb: 2,
                background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Ankit Patel
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.9, lineHeight: 1.7 }}>
              Frontend Developer passionate about creating beautiful and functional web experiences. Always excited to
              work on new projects and challenges.
            </Typography>
            <Stack direction="row" spacing={2}>
              {socialLinks.map((link) => (
                <IconButton
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.2)",
                      transform: "translateY(-3px) scale(1.1)",
                    },
                    transition: "all 0.3s ease-in-out",
                  }}
                  aria-label={link.label}
                >
                  {link.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
              Quick Links
            </Typography>
            <Stack spacing={2}>
              {quickLinks.map((link) => (
                <Typography
                  key={link.name}
                  component="a"
                  href={link.href}
                  sx={{
                    color: "rgba(255,255,255,0.8)",
                    textDecoration: "none",
                    "&:hover": {
                      color: "white",
                      textDecoration: "underline",
                    },
                    transition: "color 0.3s ease",
                  }}
                >
                  {link.name}
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
              Let's Connect
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              📧 ankit.patel@example.com
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              📱 +1 (555) 123-4567
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              📍 San Francisco, CA
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: "rgba(255,255,255,0.2)" }} />

        <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems="center" spacing={2}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} Ankit Patel. All rights reserved.
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Made with
            </Typography>
            <FavoriteOutlined sx={{ color: "#FF6B6B", fontSize: 16 }} />
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              using Next.js & Material UI
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
