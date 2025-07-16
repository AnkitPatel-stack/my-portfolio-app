"use client"
import { Box, Container, Typography, Grid, TextField, Button, Paper, Stack } from "@mui/material"
import { useRef, useEffect, useState } from "react"
import { Send, Email, Phone, LocationOn } from "@mui/icons-material"

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
      icon: <Email />,
      title: "Email",
      value: "ankit.patel@example.com",
      link: "mailto:ankit.patel@example.com",
    },
    {
      icon: <Phone />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <LocationOn />,
      title: "Location",
      value: "San Francisco, CA",
      link: "#",
    },
  ]

  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "background.paper" }}>
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
            Get In Touch
          </Typography>

          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6, fontSize: "1.2rem" }}>
            Have a project in mind? Let's work together to bring your ideas to life!
          </Typography>

          <Grid container spacing={6}>
            <Grid item xs={12} md={8}>
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
                          background: "linear-gradient(45deg, #2563eb, #7c3aed)",
                          px: 4,
                          py: 1.5,
                          fontSize: "1.1rem",
                          "&:hover": {
                            background: "linear-gradient(45deg, #1d4ed8, #6d28d9)",
                            transform: "translateY(-2px)",
                            boxShadow: "0 8px 25px rgba(37, 99, 235, 0.4)",
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
              <Stack spacing={3}>
                {contactInfo.map((info, index) => (
                  <Paper
                    key={info.title}
                    elevation={0}
                    sx={{
                      p: 3,
                      backgroundColor: "white",
                      borderRadius: 3,
                      border: "1px solid",
                      borderColor: "divider",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                      },
                    }}
                  >
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: 2,
                          background: "linear-gradient(45deg, #2563eb, #7c3aed)",
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
                  </Paper>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  )
}

export default Contact
