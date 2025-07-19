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
  IconButton,
  Tooltip,
} from "@mui/material"
import { useRef, useEffect, useState } from "react"
import { GitHub, Launch, Visibility, Code } from "@mui/icons-material"

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
        "A comprehensive admin dashboard for e-commerce management with real-time analytics, inventory management, and order tracking. Built with modern React patterns and responsive design.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Next.js", "Material UI", "Chart.js", "MongoDB"],
      githubUrl: "https://github.com/ankitpatel/ecommerce-dashboard",
      liveUrl: "https://ecommerce-dashboard-demo.vercel.app",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with drag-and-drop functionality, real-time updates, and team collaboration features. Includes Kanban boards and time tracking.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "TypeScript", "Firebase", "Material UI", "Framer Motion"],
      githubUrl: "https://github.com/ankitpatel/task-manager",
      liveUrl: "https://task-manager-pro.netlify.app",
      featured: true,
    },
    {
      title: "Weather Forecast App",
      description:
        "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics. Features 7-day forecasts and weather alerts.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "OpenWeather API", "Tailwind CSS", "Mapbox"],
      githubUrl: "https://github.com/ankitpatel/weather-app",
      liveUrl: "https://weather-forecast-pro.vercel.app",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing projects and skills with smooth animations and modern design. Built with Next.js and Material UI.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "Material UI", "CSS Animations", "Vercel"],
      githubUrl: "https://github.com/ankitpatel/portfolio",
      liveUrl: "https://ankitpatel-portfolio.vercel.app",
      featured: false,
    },
    {
      title: "Social Media Dashboard",
      description:
        "A comprehensive social media analytics dashboard with data visualization, engagement metrics, and content scheduling features. Supports multiple platforms.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "D3.js", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/ankitpatel/social-dashboard",
      liveUrl: "https://social-media-analytics.herokuapp.com",
      featured: true,
    },
    {
      title: "Recipe Finder App",
      description:
        "A recipe discovery application with search functionality, meal planning, and nutritional information. Features ingredient-based search and cooking timers.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Recipe API", "Material UI", "Local Storage"],
      githubUrl: "https://github.com/ankitpatel/recipe-finder",
      liveUrl: "https://recipe-finder-app.netlify.app",
      featured: false,
    },
  ]

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 10, md: 15 },
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <div ref={ref}>
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 3,
              color: "white",
              fontWeight: 800,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            Featured Projects
          </Typography>

          <Typography
            variant="h6"
            align="center"
            sx={{
              mb: 8,
              color: "rgba(255,255,255,0.9)",
              fontSize: "1.3rem",
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Explore my latest work and creative solutions
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={project.title}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: 4,
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      transform: "translateY(-12px) scale(1.02)",
                      boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                    },
                    "&::before": project.featured
                      ? {
                          content: '"Featured"',
                          position: "absolute",
                          top: 16,
                          right: -30,
                          background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
                          color: "white",
                          padding: "4px 40px",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          transform: "rotate(45deg)",
                          zIndex: 2,
                        }
                      : {},
                  }}
                >
                  <Box sx={{ position: "relative", overflow: "hidden" }}>
                    <CardMedia
                      component="img"
                      height="220"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        transition: "transform 0.6s ease",
                        "&:hover": {
                          transform: "scale(1.1)",
                        },
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "linear-gradient(45deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8))",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                    >
                      <Stack direction="row" spacing={2}>
                        <Tooltip title="View Live Demo">
                          <IconButton
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              backgroundColor: "rgba(255,255,255,0.2)",
                              color: "white",
                              "&:hover": {
                                backgroundColor: "rgba(255,255,255,0.3)",
                                transform: "scale(1.1)",
                              },
                            }}
                          >
                            <Launch />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="View Source Code">
                          <IconButton
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              backgroundColor: "rgba(255,255,255,0.2)",
                              color: "white",
                              "&:hover": {
                                backgroundColor: "rgba(255,255,255,0.3)",
                                transform: "scale(1.1)",
                              },
                            }}
                          >
                            <GitHub />
                          </IconButton>
                        </Tooltip>
                      </Stack>
                    </Box>
                  </Box>

                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        color: "primary.main",
                        mb: 2,
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                      sx={{
                        lineHeight: 1.7,
                        fontSize: "0.95rem",
                        mb: 3,
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            background: "linear-gradient(45deg, #667eea, #764ba2)",
                            color: "white",
                            fontSize: "0.75rem",
                            fontWeight: 500,
                            "&:hover": {
                              transform: "scale(1.05)",
                            },
                            transition: "transform 0.2s ease",
                          }}
                        />
                      ))}
                    </Stack>
                  </CardContent>

                  <CardActions sx={{ p: 3, pt: 0, gap: 1 }}>
                    <Button
                      variant="contained"
                      startIcon={<Visibility />}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        background: "linear-gradient(45deg, #667eea, #764ba2)",
                        flex: 1,
                        py: 1,
                        fontWeight: 600,
                        "&:hover": {
                          background: "linear-gradient(45deg, #5a6fd8, #6a4190)",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      Live Demo
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<Code />}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        borderColor: "primary.main",
                        color: "primary.main",
                        flex: 1,
                        py: 1,
                        fontWeight: 600,
                        "&:hover": {
                          backgroundColor: "primary.main",
                          color: "white",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      Source
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
