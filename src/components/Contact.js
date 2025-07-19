"use client"
import { Box, Container, Typography, Grid, TextField, Button, Paper, Stack, IconButton } from "@mui/material"
import { useRef, useEffect, useState } from "react"
import { Send, Email, Phone, LocationOn, GitHub, LinkedIn, Twitter } from "@mui/icons-material"

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: "", email: "", message: "" })
      alert("Message sent successfully!")
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <Email sx={{ fontSize: 30 }} />,
      title: "Email",
      value: "ankit.patel@example.com",
      link: "mailto:ankit.patel@example.com",
    },
    {
      icon: <Phone sx={{ fontSize: 30 }} />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <LocationOn sx={{ fontSize: 30 }} />,
      title: "Location",
      value: "San Francisco, CA",
      link: "#",
    },
  ]

  const socialLinks = [
    { icon: <GitHub />, url: "https://github.com/ankitpatel", label: "GitHub" },
    { icon: <LinkedIn />, url: "https://linkedin.com/in/ankitpatel", label: "LinkedIn" },
    { icon: <Twitter />, url: "https://twitter.com/ankitpatel", label: "Twitter" },
  ]

  return (
    <Box id="contact" sx={{ py: { xs: 10, md: 15 }, backgroundColor: "white" }}>
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
            Let's Work Together
          </Typography>

          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 8, fontSize: "1.2rem", maxWidth: "600px", mx: "auto" }}
          >
            Have a project in mind? Let's discuss how we can bring your ideas to life!
          </Typography>

          <Grid container spacing={6}>
            <Grid item xs={12} md={8}>
              <Paper
                elevation={0}
                sx={{
                  p: 5,
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  borderRadius: 4,
                  color: "white",
                }}
              >
                <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>
                  Send Me a Message
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: "rgba(255,255,255,0.1)",
                            "& fieldset": {
                              borderColor: "rgba(255,255,255,0.3)",
                            },
                            "&:hover fieldset": {
                              borderColor: "rgba(255,255,255,0.5)",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "white",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "rgba(255,255,255,0.8)",
                          },
                          "& .MuiOutlinedInput-input": {
                            color: "white",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: "rgba(255,255,255,0.1)",
                            "& fieldset": {
                              borderColor: "rgba(255,255,255,0.3)",
                            },
                            "&:hover fieldset": {
                              borderColor: "rgba(255,255,255,0.5)",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "white",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "rgba(255,255,255,0.8)",
                          },
                          "& .MuiOutlinedInput-input": {
                            color: "white",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        multiline
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: "rgba(255,255,255,0.1)",
                            "& fieldset": {
                              borderColor: "rgba(255,255,255,0.3)",
                            },
                            "&:hover fieldset": {
                              borderColor: "rgba(255,255,255,0.5)",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "white",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "rgba(255,255,255,0.8)",
                          },
                          "& .MuiOutlinedInput-input": {
                            color: "white",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={isSubmitting}
                        startIcon={<Send />}
                        sx={{
                          backgroundColor: "white",
                          color: "primary.main",
                          px: 5,
                          py: 2,
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          "&:hover": {
                            backgroundColor: "rgba(255,255,255,0.9)",
                            transform: "translateY(-2px)",
                            boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                          },
                          transition: "all 0.3s ease-in-out",
                        }}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Stack spacing={4}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    backgroundColor: "#f8fafc",
                    borderRadius: 3,
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Typography variant="h5" fontWeight={700} sx={{ mb: 3, color: "primary.main" }}>
                    Get In Touch
                  </Typography>

                  <Stack spacing={3}>
                    {contactInfo.map((info, index) => (
                      <Stack key={info.title} direction="row" spacing={2} alignItems="center">
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: 2,
                            background: "linear-gradient(45deg, #667eea, #764ba2)",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {info.icon}
                        </Box>
                        <Box>
                          <Typography variant="h6" fontWeight={600}>
                            {info.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {info.value}
                          </Typography>
                        </Box>
                      </Stack>
                    ))}
                  </Stack>
                </Paper>

                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    backgroundColor: "#f8fafc",
                    borderRadius: 3,
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Typography variant="h6" fontWeight={700} sx={{ mb: 3, color: "primary.main" }}>
                    Follow Me
                  </Typography>

                  <Stack direction="row" spacing={2}>
                    {socialLinks.map((link) => (
                      <IconButton
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          background: "linear-gradient(45deg, #667eea, #764ba2)",
                          color: "white",
                          "&:hover": {
                            transform: "translateY(-3px) scale(1.1)",
                            boxShadow: "0 8px 25px rgba(102, 126, 234, 0.4)",
                          },
                          transition: "all 0.3s ease-in-out",
                        }}
                      >
                        {link.icon}
                      </IconButton>
                    ))}
                  </Stack>
                </Paper>
              </Stack>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  )
}

export default Contact
