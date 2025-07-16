"use client"
import { Box, Container, Typography, Button, Stack } from "@mui/material"
import { ArrowDownward, GitHub, LinkedIn } from "@mui/icons-material"

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Animation */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
          animation: "floating 8s ease-in-out infinite",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Typography
            variant="h4"
            sx={{
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 600,
              mb: 2,
            }}
          >
            Hello, I'm
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
              mb: 2,
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            Ankit Patel
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 400,
              fontSize: { xs: "1.5rem", md: "2rem", lg: "2.5rem" },
              mb: 3,
              opacity: 0.9,
            }}
          >
            Frontend Developer
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              maxWidth: "600px",
              mb: 4,
              opacity: 0.8,
              lineHeight: 1.6,
            }}
          >
            Passionate about creating beautiful, responsive, and user-friendly web applications using modern
            technologies like React, Next.js, and Material UI.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems="center">
            <Button
              variant="contained"
              size="large"
              onClick={scrollToAbout}
              sx={{
                background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(254, 107, 139, 0.4)",
                },
              }}
              startIcon={<ArrowDownward />}
            >
              Explore My Work
            </Button>

            <Stack direction="row" spacing={1}>
              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "rgba(255,255,255,0.3)",
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
                startIcon={<GitHub />}
              >
                GitHub
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "rgba(255,255,255,0.3)",
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
                startIcon={<LinkedIn />}
              >
                LinkedIn
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>

      {/* Scroll Indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          cursor: "pointer",
          animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        }}
        onClick={scrollToAbout}
      >
        <ArrowDownward sx={{ fontSize: 40, opacity: 0.7 }} />
      </Box>
    </Box>
  )
}

export default Hero
