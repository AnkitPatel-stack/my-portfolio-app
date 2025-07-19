'use client';
import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function ThankYouPage() {
    return (
        <Container sx={{ py: 10, textAlign: 'center' }}>
            <Typography variant="h3" gutterBottom>
                🎉 Thank You!
            </Typography>
            <Typography variant="h6" color="text.secondary" mb={4}>
                Your message has been sent successfully. I'll get back to you soon.
            </Typography>
            <Button variant="contained" component={Link} href="/" size="large">
                Back to Home
            </Button>
        </Container>
    );
}
