// "use client"
// import { Box, Container, Typography, Button, Stack, Avatar } from "@mui/material"
// import { ArrowDownward, Download } from "@mui/icons-material"
// import { keyframes } from "@mui/system"
// import Image from "next/image"
// import profilePic from "./profile.jpg" // Replace with your actual profile image path

// // Define custom animations
// const float = keyframes`
//   0% { transform: translateY(0px); }
//   50% { transform: translateY(-20px); }
//   100% { transform: translateY(0px); }
// `

// const pulse = keyframes`
//   0% { transform: scale(1); opacity: 0.7; }
//   50% { transform: scale(1.05); opacity: 1; }
//   100% { transform: scale(1); opacity: 0.7; }
// `

// const gradientBackground = keyframes`
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// `

// const Hero = () => {
//   const scrollToAbout = () => {
//     document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
//   }

//   const downloadCV = async () => {
//     try {
//       // Create a temporary link element
//       const link = document.createElement('a')
      
//       // Fetch the CV file
//       const response = await fetch('/AnkitPatel_CV.pdf') // Replace with your actual CV path
//       const blob = await response.blob()
//       const url = window.URL.createObjectURL(blob)
      
//       // Set link attributes
//       link.href = url
//       link.download = 'AnkitPatel_CV.pdf'
//       link.setAttribute('target', '_blank')
      
//       // Trigger download
//       document.body.appendChild(link)
//       link.click()
      
//       // Clean up
//       document.body.removeChild(link)
//       window.URL.revokeObjectURL(url)
//     } catch (error) {
//       console.error('Error downloading CV:', error)
//       alert('Failed to download CV. Please try again later.')
//     }
//   }

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         background: "linear-gradient(-45deg, #0f2027, #203a43, #2c5364, #3a7bd5)",
//         backgroundSize: "400% 400%",
//         animation: `${gradientBackground} 15s ease infinite`,
//         color: "white",
//         position: "relative",
//         overflow: "hidden",
//         py: 8,
//       }}
//     >
//       {/* Animated Background Elements */}
//       <Box
//         sx={{
//           position: "absolute",
//           top: "10%",
//           left: "5%",
//           width: "300px",
//           height: "300px",
//           background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
//           borderRadius: "50%",
//           animation: `${float} 8s ease-in-out infinite`,
//         }}
//       />
//       <Box
//         sx={{
//           position: "absolute",
//           bottom: "15%",
//           right: "5%",
//           width: "400px",
//           height: "400px",
//           background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
//           borderRadius: "50%",
//           animation: `${float} 10s ease-in-out infinite reverse`,
//         }}
//       />
      
//       {/* Small floating dots */}
//       {[...Array(10)].map((_, i) => (
//         <Box
//           key={i}
//           sx={{
//             position: "absolute",
//             width: 8,
//             height: 8,
//             background: "rgba(255,255,255,0.6)",
//             borderRadius: "50%",
//             top: `${Math.random() * 100}%`,
//             left: `${Math.random() * 100}%`,
//             animation: `${float} ${4 + Math.random() * 5}s ease-in-out infinite`,
//             animationDelay: `${Math.random() * 5}s`,
//           }}
//         />
//       ))}

//       <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
//         <Stack spacing={5} alignItems="center" textAlign="center" sx={{ pt: 4 }}>
//           {/* Profile Picture with animation */}
//           <Box
//             sx={{
//               width: 200,
//               height: 200,
//               borderRadius: "50%",
//               border: "4px solid rgba(255,255,255,0.3)",
//               boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
//               overflow: "hidden",
//               position: "relative",
//               animation: `${float} 6s ease-in-out infinite`,
//               "&:hover": {
//                 transform: "scale(1.05)",
//                 transition: "transform 0.3s ease",
//               },
//             }}
//           >
//             <Image 
//               src={profilePic} 
//               alt="Ankit Patel" 
//               layout="fill"
//               objectFit="cover"
//               priority
//               quality={100}
//               style={{
//                 filter: "brightness(1.05) contrast(1.05)",
//               }}
//             />
//           </Box>

//           <Box sx={{ overflow: "hidden", width: "100%" }}>
//             <Typography
//               variant="h6"
//               sx={{
//                 background: "linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%)",
//                 backgroundClip: "text",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 fontWeight: 600,
//                 mb: 2,
//                 fontSize: "1.2rem",
//                 letterSpacing: "3px",
//                 textTransform: "uppercase",
//                 animation: "fadeIn 1s ease-out",
//               }}
//             >
//               Hello, I'm
//             </Typography>

//             <Typography
//               variant="h1"
//               sx={{
//                 fontWeight: 800,
//                 fontSize: { xs: "2.8rem", md: "4.5rem", lg: "5rem" },
//                 mb: 2,
//                 textShadow: "3px 3px 10px rgba(0,0,0,0.3)",
//                 background: "linear-gradient(90deg, #ffffff 0%, #c9d6ff 100%)",
//                 backgroundClip: "text",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 lineHeight: 1.1,
//                 animation: "slideIn 0.8s ease-out",
//                 wordBreak: "break-word",
//               }}
//             >
//               Ankit Patel
//             </Typography>

//             <Typography
//               variant="h3"
//               sx={{
//                 fontWeight: 300,
//                 fontSize: { xs: "1.5rem", md: "2rem", lg: "2.2rem" },
//                 mb: 4,
//                 opacity: 0.9,
//                 letterSpacing: "1px",
//                 animation: "fadeIn 1.2s ease-out",
//                 "&:after": {
//                   content: '"|"',
//                   animation: "blink 1s infinite",
//                   opacity: 1,
//                 }
//               }}
//             >
//               <Box component="span" sx={{ fontWeight: 500 }}>Full Stack Developer</Box> & Digital Creator
//             </Typography>
//           </Box>

//           <Typography
//             variant="h6"
//             sx={{
//               fontSize: { xs: "1.1rem", md: "1.3rem" },
//               maxWidth: "800px",
//               mb: 4,
//               opacity: 0.85,
//               lineHeight: 1.8,
//               fontWeight: 300,
//               animation: "fadeIn 1.5s ease-out",
//               px: 2,
//             }}
//           >
//             I build exceptional digital experiences with modern web technologies. 
//             Specializing in <Box component="span" sx={{ fontWeight: 500 }}>React, Next.js, and Node.js</Box>, 
//             I create fast, responsive, and user-friendly applications that make an impact.
//           </Typography>

//           <Stack 
//             direction={{ xs: "column", sm: "row" }} 
//             spacing={3} 
//             alignItems="center" 
//             sx={{ 
//               animation: "fadeInUp 1s ease-out",
//               mb: 6,
//             }}
//           >
//             <Button
//               variant="contained"
//               size="large"
//               onClick={scrollToAbout}
//               sx={{
//                 background: "linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%)",
//                 px: 5,
//                 py: 1.5,
//                 fontSize: "1.1rem",
//                 fontWeight: 600,
//                 borderRadius: 50,
//                 boxShadow: "0 8px 25px rgba(0, 210, 255, 0.4)",
//                 transition: "all 0.3s ease",
//                 "&:hover": {
//                   transform: "translateY(-3px)",
//                   boxShadow: "0 12px 35px rgba(0, 210, 255, 0.6)",
//                 },
//               }}
//               startIcon={<ArrowDownward sx={{ fontSize: 20 }} />}
//             >
//               View My Work
//             </Button>

//             <Button
//               variant="outlined"
//               size="large"
//               onClick={downloadCV}
//               sx={{
//                 color: "white",
//                 borderColor: "rgba(255,255,255,0.4)",
//                 px: 4,
//                 py: 1.5,
//                 fontSize: "1.1rem",
//                 fontWeight: 600,
//                 borderRadius: 50,
//                 transition: "all 0.3s ease",
//                 "&:hover": {
//                   borderColor: "white",
//                   backgroundColor: "rgba(255,255,255,0.1)",
//                   transform: "translateY(-3px)",
//                 },
//               }}
//               startIcon={<Download sx={{ fontSize: 20 }} />}
//             >
//               Download CV
//             </Button>
//           </Stack>
//         </Stack>
//       </Container>

//       {/* Scroll Indicator */}
//       {/* <Box
//         sx={{
//           position: "absolute",
//           bottom: 30,
//           left: "50%",
//           transform: "translateX(-50%)",
//           cursor: "pointer",
//           animation: `${pulse} 2s infinite`,
//           transition: "all 0.3s ease",
//           zIndex: 1,
//           "&:hover": {
//             transform: "translateX(-50%) translateY(-5px)",
//           },
//         }}
//         onClick={scrollToAbout}
//       >
//         <ArrowDownward sx={{ 
//           fontSize: 40, 
//           opacity: 0.8,
//           filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
//         }} />
//       </Box> */}

//       {/* Global styles for animations */}
//       <style jsx global>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes fadeInUp {
//           from { 
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to { 
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes slideIn {
//           from { 
//             opacity: 0;
//             transform: translateY(-30px);
//           }
//           to { 
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
//       `}</style>
//     </Box>
//   )
// }

// export default Hero




"use client"
import { Box, Container, Typography, Button, Stack } from "@mui/material"
import { ArrowDownward, Download } from "@mui/icons-material"
import { keyframes } from "@mui/system"
import Image from "next/image"
import profilePic from "./profile.jpg"

// Enhanced animations
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

// New particle animation
const particleMove = keyframes`
  0% { transform: translate(0, 0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translate(var(--random-x), var(--random-y)); opacity: 0; }
`

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  const downloadCV = async () => {
    try {
      const link = document.createElement('a')
      const response = await fetch('/ANKITPATEL.pdf')
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      
      link.href = url
      link.download = 'ANKITPATEL.pdf'
      link.setAttribute('target', '_blank')
      
      document.body.appendChild(link)
      link.click()
      
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error downloading CV:', error)
      alert('Failed to download CV. Please try again later.')
    }
  }

  // Generate random particles
  const particles = Array.from({ length: 20 }).map((_, i) => {
    const size = Math.random() * 6 + 2
    const duration = Math.random() * 15 + 10
    const delay = Math.random() * 5
    const x = (Math.random() - 0.5) * 200
    const y = (Math.random() - 0.5) * 200
    
    return (
      <Box
        key={i}
        sx={{
          position: "absolute",
          width: size,
          height: size,
          background: "rgba(255,255,255,0.6)",
          borderRadius: "50%",
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          '--random-x': `${x}px`,
          '--random-y': `${y}px`,
          animation: `${particleMove} ${duration}s linear ${delay}s infinite`,
          filter: "blur(1px)",
        }}
      />
    )
  })

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: `
          linear-gradient(135deg, 
            rgba(15,32,39,0.9) 0%, 
            rgba(32,58,67,0.9) 30%, 
            rgba(44,83,100,0.9) 60%, 
            rgba(58,123,213,0.9) 100%),
          url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")
        `,
        backgroundSize: "400% 400%, auto",
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
      
      {/* Animated particles */}
      {particles}

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={5} alignItems="center" textAlign="center" sx={{ pt: 4 }}>
          {/* Profile Picture with animation */}
          <Box
            sx={{
              width: 200,
              height: 200,
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
              style={{
                filter: "brightness(1.05) contrast(1.05)",
              }}
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
                fontSize: { xs: "2.8rem", md: "4.5rem", lg: "5rem" },
                mb: 2,
                textShadow: "3px 3px 10px rgba(0,0,0,0.3)",
                background: "linear-gradient(90deg, #ffffff 0%, #c9d6ff 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1.1,
                animation: "slideIn 0.8s ease-out",
                wordBreak: "break-word",
              }}
            >
              Ankit Patel
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 300,
                fontSize: { xs: "1.5rem", md: "2rem", lg: "2.2rem" },
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
              <Box component="span" sx={{ fontWeight: 500 }}>Full Stack Developer</Box>
            </Typography>
          </Box>

          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              maxWidth: "800px",
              mb: 4,
              opacity: 0.85,
              lineHeight: 1.8,
              fontWeight: 300,
              animation: "fadeIn 1.5s ease-out",
              px: 2,
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
              mb: 6,
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
        </Stack>
      </Container>

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