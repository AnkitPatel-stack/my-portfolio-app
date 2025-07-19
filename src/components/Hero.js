"use client"
import { Box, Container, Typography, Button, Stack, Avatar } from "@mui/material"
import { ArrowDownward, GitHub, LinkedIn, Download } from "@mui/icons-material"
import { keyframes } from "@mui/system"
import Image from "next/image"
import profilePic from "./profile.jpg" // Replace with your actual profile image path

// Define custom animations
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.7; }
`

const gradientBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  const downloadCV = () => {
    // Replace with your actual CV download logic
    const link = document.createElement('a')
    link.href = '/path-to-your-cv.pdf'
    link.download = 'AnkitPatel_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(-45deg, #0f2027, #203a43, #2c5364, #3a7bd5)",
        backgroundSize: "400% 400%",
        animation: `${gradientBackground} 15s ease infinite`,
        color: "white",
        position: "relative",
        overflow: "hidden",
        py: 8,
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: `${float} 8s ease-in-out infinite`,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "15%",
          right: "5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: `${float} 10s ease-in-out infinite reverse`,
        }}
      />
      
      {/* Small floating dots */}
      {[...Array(10)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            width: 8,
            height: 8,
            background: "rgba(255,255,255,0.6)",
            borderRadius: "50%",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `${float} ${4 + Math.random() * 5}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={5} alignItems="center" textAlign="center" sx={{ pt: 4 }}>
          {/* Profile Picture with animation */}
          <Box
            sx={{
              width: 180,
              height: 180,
              borderRadius: "50%",
              border: "4px solid rgba(255,255,255,0.3)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              overflow: "hidden",
              position: "relative",
              animation: `${float} 6s ease-in-out infinite`,
              "&:hover": {
                transform: "scale(1.05)",
                transition: "transform 0.3s ease",
              },
            }}
          >
            <Image 
              src={profilePic} 
              alt="Ankit Patel" 
              layout="fill"
              objectFit="cover"
              priority
              quality={100}
            />
          </Box>

          <Box sx={{ overflow: "hidden", width: "100%" }}>
            <Typography
              variant="h6"
              sx={{
                background: "linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 600,
                mb: 2,
                fontSize: "1.2rem",
                letterSpacing: "3px",
                textTransform: "uppercase",
                animation: "fadeIn 1s ease-out",
              }}
            >
              Hello, I'm
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2.5rem", md: "4rem", lg: "4.5rem" }, // Reduced font size
                mb: 2,
                textShadow: "3px 3px 10px rgba(0,0,0,0.3)",
                background: "linear-gradient(90deg, #ffffff 0%, #c9d6ff 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1.1,
                animation: "slideIn 0.8s ease-out",
                wordBreak: "break-word", // Prevent overflow
              }}
            >
              Ankit Patel
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 300,
                fontSize: { xs: "1.3rem", md: "1.8rem", lg: "2rem" }, // Reduced font size
                mb: 4,
                opacity: 0.9,
                letterSpacing: "1px",
                animation: "fadeIn 1.2s ease-out",
                "&:after": {
                  content: '"|"',
                  animation: "blink 1s infinite",
                  opacity: 1,
                }
              }}
            >
              <Box component="span" sx={{ fontWeight: 500 }}>Full Stack Developer</Box> & Digital Creator
            </Typography>
          </Box>

          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "1rem", md: "1.2rem" }, // Slightly reduced
              maxWidth: "800px",
              mb: 4,
              opacity: 0.85,
              lineHeight: 1.8,
              fontWeight: 300,
              animation: "fadeIn 1.5s ease-out",
              px: 2, // Add padding on mobile
            }}
          >
            I build exceptional digital experiences with modern web technologies. 
            Specializing in <Box component="span" sx={{ fontWeight: 500 }}>React, Next.js, and Node.js</Box>, 
            I create fast, responsive, and user-friendly applications that make an impact.
          </Typography>

          <Stack 
            direction={{ xs: "column", sm: "row" }} 
            spacing={3} 
            alignItems="center" 
            sx={{ 
              animation: "fadeInUp 1s ease-out",
              mb: 6, // Added margin to separate from social icons
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={scrollToAbout}
              sx={{
                background: "linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%)",
                px: 5,
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: 600,
                borderRadius: 50,
                boxShadow: "0 8px 25px rgba(0, 210, 255, 0.4)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 12px 35px rgba(0, 210, 255, 0.6)",
                },
              }}
              startIcon={<ArrowDownward sx={{ fontSize: 20 }} />}
            >
              View My Work
            </Button>

            <Button
              variant="outlined"
              size="large"
              onClick={downloadCV}
              sx={{
                color: "white",
                borderColor: "rgba(255,255,255,0.4)",
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: 600,
                borderRadius: 50,
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  transform: "translateY(-3px)",
                },
              }}
              startIcon={<Download sx={{ fontSize: 20 }} />}
            >
              Download CV
            </Button>
          </Stack>

          <Stack 
            direction="row" 
            spacing={3} 
            sx={{ 
              animation: "fadeIn 2s ease-out",
              position: "relative",
              zIndex: 2,
              pb: 8, // Added padding to prevent overlap with scroll indicator
            }}
          >
            <Button
              variant="text"
              sx={{
                color: "rgba(255,255,255,0.8)",
                minWidth: "auto",
                p: 1.5,
                borderRadius: "50%",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "white",
                  transform: "scale(1.1) translateY(-3px)",
                },
              }}
              href="https://github.com/ankitpatel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub sx={{ fontSize: 28 }} />
            </Button>
            <Button
              variant="text"
              sx={{
                color: "rgba(255,255,255,0.8)",
                minWidth: "auto",
                p: 1.5,
                borderRadius: "50%",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "white",
                  transform: "scale(1.1) translateY(-3px)",
                },
              }}
              href="https://linkedin.com/in/ankitpatel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn sx={{ fontSize: 28 }} />
            </Button>
          </Stack>
        </Stack>
      </Container>

      {/* Scroll Indicator - positioned absolutely at bottom */}
      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          cursor: "pointer",
          animation: `${pulse} 2s infinite`,
          transition: "all 0.3s ease",
          zIndex: 1,
          "&:hover": {
            transform: "translateX(-50%) translateY(-5px)",
          },
        }}
        onClick={scrollToAbout}
      >
        <ArrowDownward sx={{ fontSize: 40, opacity: 0.8 }} />
      </Box>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateY(-30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </Box>
  )
}

export default Hero