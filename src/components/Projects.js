"use client"
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
} from "@mui/material"
import { useRef, useEffect, useState } from "react"
import { GitHub, Launch } from "@mui/icons-material"

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive admin dashboard for e-commerce management with real-time analytics, inventory management, and order tracking.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Next.js", "Material UI", "Chart.js"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "TypeScript", "Firebase", "Material UI"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Weather Forecast App",
      description:
        "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "OpenWeather API", "Framer Motion", "Tailwind"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing projects and skills with smooth animations and modern design.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "Material UI", "Framer Motion", "Vercel"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Social Media Dashboard",
      description:
        "A social media analytics dashboard with data visualization, engagement metrics, and content scheduling features.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Recipe Finder App",
      description:
        "A recipe discovery application with search functionality, meal planning, and nutritional information.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Recipe API", "Material UI", "Local Storage"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ]

  return (
    <Box id="projects" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "background.default" }}>
      <Container maxWidth="lg">
        <div ref={ref}>
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 2,
              background: "linear-gradient(45deg, #2563eb, #7c3aed)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 700,
            }}
          >
            Featured Projects
          </Typography>

          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6, fontSize: "1.2rem" }}>
            Here are some of my recent projects that showcase my skills and experience
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={project.title}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.6 }}>
                      {project.description}
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          variant="outlined"
                          sx={{
                            borderColor: "primary.main",
                            color: "primary.main",
                            fontSize: "0.75rem",
                          }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button size="small" startIcon={<GitHub />} href={project.githubUrl} sx={{ mr: 1 }}>
                      Code
                    </Button>
                    <Button size="small" startIcon={<Launch />} href={project.liveUrl} variant="contained">
                      Live Demo
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </Box>
  )
}

export default Projects
