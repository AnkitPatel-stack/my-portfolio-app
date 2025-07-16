"use client"
import { Box, Container, Typography, Stack, IconButton, Divider } from "@mui/material"
import { GitHub, LinkedIn, Twitter, Email } from "@mui/icons-material"

const Footer = () => {
  const socialLinks = [
    { icon: <GitHub />, url: "https://github.com", label: "GitHub" },
    { icon: <LinkedIn />, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Twitter />, url: "https://twitter.com", label: "Twitter" },
    { icon: <Email />, url: "mailto:ankit.patel@example.com", label: "Email" },
  ]

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        backgroundColor: "primary.main",
        color: "white",
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center">
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Ankit Patel
          </Typography>

          <Typography variant="body1" align="center" sx={{ maxWidth: 600, opacity: 0.9 }}>
            Frontend Developer passionate about creating beautiful and functional web experiences. Let's connect and
            build something amazing together!
          </Typography>

          <Stack direction="row" spacing={2}>
            {socialLinks.map((link) => (
              <IconButton
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "white",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.2)",
                    transform: "translateY(-2px) scale(1.1)",
                  },
                  transition: "all 0.3s ease-in-out",
                }}
                aria-label={link.label}
              >
                {link.icon}
              </IconButton>
            ))}
          </Stack>

          <Divider sx={{ width: "100%", backgroundColor: "rgba(255,255,255,0.2)" }} />

          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} Ankit Patel. All rights reserved. Built with ❤️ using Next.js and Material UI.
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
