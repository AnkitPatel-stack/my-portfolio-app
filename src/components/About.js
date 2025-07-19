"use client"
import { Box, Container, Typography, Grid, Chip, LinearProgress, Paper, Avatar, Stack } from "@mui/material"
import { useRef, useEffect, useState } from "react"
import { Code, Palette, Speed, Lightbulb } from "@mui/icons-material"

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
        { name: "React & Next.js", level: 95, color: "#61DAFB" },
        { name: "JavaScript/TypeScript", level: 90, color: "#F7DF1E" },
        { name: "Material UI & CSS", level: 88, color: "#1976D2" },
        { name: "Node.js & APIs", level: 82, color: "#339933" },
        { name: "Git ", level: 85, color: "#F05032" },
        { name: "UI/UX Design", level: 78, color: "#FF6B6B" },
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
        "Vercel",
        "MERN Stack",
        "Full-stack"
    ]

    const highlights = [
        {
            icon: <Code sx={{ fontSize: 40 }} />,
            title: "Clean Code",
            description: "Writing maintainable, scalable, and well-documented code",
        },
        {
            icon: <Palette sx={{ fontSize: 40 }} />,
            title: "Modern Design",
            description: "Creating beautiful and intuitive user interfaces",
        },
        {
            icon: <Speed sx={{ fontSize: 40 }} />,
            title: "Performance",
            description: "Optimizing applications for speed and efficiency",
        },
        {
            icon: <Lightbulb sx={{ fontSize: 40 }} />,
            title: "Innovation",
            description: "Always learning and implementing latest technologies",
        },
    ]

    return (
        <Box id="about" sx={{ py: { xs: 10, md: 15 }, backgroundColor: "#f8fafc" }}>
            <Container maxWidth="lg">
                <div ref={ref}>
                    <Typography
                        variant="h2"
                        align="center"
                        sx={{
                            mb: 3,
                            background: "linear-gradient(45deg, #1e3c72, #2a5298)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontWeight: 800,
                            fontSize: { xs: "2.5rem", md: "3.5rem" },
                        }}
                    >
                        About Me
                    </Typography>

                    <Typography
                        variant="h6"
                        align="center"
                        color="text.secondary"
                        sx={{ mb: 8, fontSize: "1.2rem", maxWidth: "600px", mx: "auto" }}
                    >
                        Passionate developer with a love for creating exceptional digital experiences
                    </Typography>

                    {/* Highlights Section */}
                    <Grid container spacing={4} sx={{ mb: 8 }}>
                        {highlights.map((highlight, index) => (
                            <Grid item xs={12} sm={6} md={3} key={highlight.title}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        textAlign: "center",
                                        height: "100%",
                                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                        color: "white",
                                        borderRadius: 3,
                                        transition: "transform 0.3s ease",
                                        "&:hover": {
                                            transform: "translateY(-8px)",
                                        },
                                    }}
                                >
                                    <Box sx={{ mb: 2, color: "rgba(255,255,255,0.9)" }}>{highlight.icon}</Box>
                                    <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
                                        {highlight.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                        {highlight.description}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>

                    <Grid container spacing={8} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 5,
                                    backgroundColor: "white",
                                    borderRadius: 4,
                                    border: "1px solid",
                                    borderColor: "divider",
                                    position: "relative",
                                    "&::before": {
                                        content: '""',
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: "4px",
                                        background: "linear-gradient(45deg, #667eea, #764ba2)",
                                        borderRadius: "4px 4px 0 0",
                                    },
                                }}
                            >
                                <Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 4 }}>
                                    <Avatar
                                        sx={{
                                            width: 80,
                                            height: 80,
                                            background: "linear-gradient(45deg, #667eea, #764ba2)",
                                            fontSize: "2rem",
                                            fontWeight: 700,
                                        }}
                                    >
                                        AP
                                    </Avatar>
                                    <Box>
                                        <Typography variant="h5" fontWeight={700} color="primary.main">
                                            Full Stack Developer
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            1+ Years Experience
                                        </Typography>
                                    </Box>
                                </Stack>

                                <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 3 }}>
                                    I'm a dedicated Frontend Developer with 1+ year of hands-on experience in building responsive and user-friendly web applications using React and Next.js. My focus is on delivering clean, maintainable code and visually appealing interfaces.
                                </Typography>

                                <Typography variant="body1" paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8, mb: 3 }}>
                                    I have worked on several real-world projects that demonstrate my ability to solve practical problems with efficient frontend solutions. I continuously strive to improve my skills and stay updated with the latest frontend technologies.
                                </Typography>

                                <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                                    Outside of development, I enjoy exploring new frameworks, enhancing my UI/UX design knowledge, and contributing to personal or collaborative projects that help solve real-world challenges.
                                </Typography>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, color: "primary.main" }}>
                                Skills & Expertise
                            </Typography>

                            <Box sx={{ mb: 5 }}>
                                {skills.map((skill, index) => (
                                    <Box key={skill.name} sx={{ mb: 3 }}>
                                        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                                            <Typography variant="body1" fontWeight={600}>
                                                {skill.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" fontWeight={600}>
                                                {skill.level}%
                                            </Typography>
                                        </Box>
                                        <LinearProgress
                                            variant="determinate"
                                            value={isVisible ? skill.level : 0}
                                            sx={{
                                                height: 10,
                                                borderRadius: 5,
                                                backgroundColor: "rgba(0,0,0,0.1)",
                                                "& .MuiLinearProgress-bar": {
                                                    borderRadius: 5,
                                                    backgroundColor: skill.color,
                                                    transition: "transform 1.5s ease-in-out",
                                                },
                                            }}
                                        />
                                    </Box>
                                ))}
                            </Box>

                            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                                Technologies I Work With
                            </Typography>
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                                {technologies.map((tech, index) => (
                                    <Chip
                                        key={tech}
                                        label={tech}
                                        variant="outlined"
                                        sx={{
                                            borderColor: "primary.main",
                                            color: "primary.main",
                                            fontWeight: 500,
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
