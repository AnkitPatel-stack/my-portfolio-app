"use client"
import { Box, Container, Typography, Grid, Chip, LinearProgress, Paper } from "@mui/material"
import { useRef, useEffect, useState } from "react"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "JavaScript", level: 88 },
    { name: "TypeScript", level: 80 },
    { name: "Material UI", level: 85 },
    { name: "CSS/SCSS", level: 90 },
    { name: "Node.js", level: 75 },
    { name: "Git", level: 85 },
  ]

  const technologies = [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Material UI",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "Docker",
    "AWS",
    "Vercel",
  ]

  return (
    <Box id="about" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "background.paper" }}>
      <Container maxWidth="lg">
        <div ref={ref}>
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 6,
              background: "linear-gradient(45deg, #2563eb, #7c3aed)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
            }}
          >
            About Me
          </Typography>

          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  backgroundColor: "white",
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                  I'm a passionate Frontend Developer with over 3 years of experience creating modern, responsive web
                  applications. I love turning complex problems into simple, beautiful, and intuitive solutions.
                </Typography>

                <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                  My expertise lies in React ecosystem, including Next.js, and I'm always eager to learn new
                  technologies and best practices. I believe in writing clean, maintainable code and creating
                  exceptional user experiences.
                </Typography>

                <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or sharing knowledge with the developer community.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                Skills & Expertise
              </Typography>

              <Box sx={{ mb: 4 }}>
                {skills.map((skill, index) => (
                  <Box key={skill.name} sx={{ mb: 2 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                      <Typography variant="body2" fontWeight={600}>
                        {skill.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {skill.level}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={isVisible ? skill.level : 0}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: "rgba(0,0,0,0.1)",
                        "& .MuiLinearProgress-bar": {
                          borderRadius: 4,
                          background: "linear-gradient(45deg, #2563eb, #7c3aed)",
                          transition: "transform 1s ease-in-out",
                        },
                      }}
                    />
                  </Box>
                ))}
              </Box>

              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Technologies I Work With
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    variant="outlined"
                    sx={{
                      borderColor: "primary.main",
                      color: "primary.main",
                      "&:hover": {
                        backgroundColor: "primary.main",
                        color: "white",
                        transform: "scale(1.05)",
                      },
                      transition: "all 0.3s ease-in-out",
                    }}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  )
}

export default About
