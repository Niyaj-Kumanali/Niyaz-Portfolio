import { motion } from 'framer-motion';
import {
    Box,
    Typography,
    TextField,
    Button,
    Stack,
    alpha,
    Snackbar,
    Alert
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Github, Linkedin, Mail, MapIcon, Send } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useState } from 'react';
import { Section, SectionInner } from './common/Section';
import { MYINFO } from '../data/info';

const BrutalistInput = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        borderRadius: 0,
        backgroundColor: 'transparent',
        border: '1px solid #333',
        '& fieldset': {
            border: 'none',
        },
        '&:hover': {
            backgroundColor: '#0a0a0a',
        },
        '&.Mui-focused': {
            border: '1px solid #fff',
        }
    },
    '& .MuiInputLabel-root': {
        fontFamily: "'JetBrains Mono', monospace",
        letterSpacing: '0.1em',
        color: 'rgba(255, 255, 255, 0.5)',
    },
    '& .MuiInputBase-input': {
        color: '#fff',
        fontFamily: "'Inter', sans-serif",
    }
});

const SocialButton = styled(motion.a)(({ theme }) => ({
    flex: 1,
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(1.5),
    border: '1px solid #222',
    textDecoration: 'none',
    color: '#fff',
    transition: 'all 0.4s ease',
    '&:hover': {
        backgroundColor: '#fff',
        color: '#000',
        borderColor: '#fff',
    }
}));

const Contact = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [open, setOpen] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xpqypzae", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        } finally {
            setOpen(true);
        }
    };

    return (
        <Section id="contact">
            <SectionInner>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%', mb: 2 }}>
                    <SectionHeading title="GET IN TOUCH." sx={{ mb: 0 }} />
                </Box>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: { xs: 4, lg: 8 } }}>
                    <Box>
                        <Typography variant="h5" sx={{ mb: 4, fontWeight: 300, color: 'rgba(255, 255, 255, 0.6)', fontFamily: "'Inter', sans-serif", fontSize: '1.5rem' }}>
                            Ready to build something scalable? Let's discuss your ecosystem's architecture.
                        </Typography>

                        <Stack direction="row" spacing={0} sx={{ width: '100%', mb: 3 }}>
                            <SocialButton href={MYINFO.GITHUB} target="_blank" whileHover={{ scale: 0.98 }}>
                                <Github size={32} />
                                <Typography variant="caption" sx={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem' }}>GITHUB</Typography>
                            </SocialButton>
                            <SocialButton href={MYINFO.LINKEDIN} target="_blank" whileHover={{ scale: 0.98 }}>
                                <Linkedin size={32} />
                                <Typography variant="caption" sx={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem' }}>LINKEDIN</Typography>
                            </SocialButton>
                            <SocialButton href={`mailto:${MYINFO.EMAIL}`} whileHover={{ scale: 0.98 }}>
                                <Mail size={32} />
                                <Typography variant="caption" sx={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem' }}>EMAIL</Typography>
                            </SocialButton>
                            <SocialButton href={MYINFO.LOCATION_URL} target="_blank" whileHover={{ scale: 0.98 }}>
                                <MapIcon size={32} />
                                <Typography variant="caption" sx={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem' }}>LOCATION</Typography>
                            </SocialButton>
                        </Stack>
                    </Box>

                    <Box>
                        <form onSubmit={handleSubmit}>
                            <Stack spacing={2.5}>
                                <BrutalistInput name="name" required fullWidth label="YOUR NAME" variant="outlined" size="medium" />
                                <BrutalistInput name="email" required type="email" fullWidth label="YOUR EMAIL" variant="outlined" size="medium" />
                                <BrutalistInput name="subject" required fullWidth label="YOUR SUBJECT" variant="outlined" size="medium" />
                                <BrutalistInput name="message" required fullWidth label="YOUR MESSAGE" multiline rows={4} variant="outlined" />

                                <Button
                                    fullWidth
                                    type="submit"
                                    disabled={status === 'loading'}
                                    variant="contained"
                                    endIcon={status === 'loading' ? null : <Send />}
                                    sx={{
                                        py: 1.5,
                                        fontSize: '1.1rem',
                                        fontWeight: 900,
                                        backgroundColor: '#fff',
                                        color: '#000',
                                        borderRadius: 0,
                                        '&:hover': {
                                            backgroundColor: alpha('#fff', 0.9),
                                        },
                                        '&.Mui-disabled': {
                                            backgroundColor: 'rgba(255,255,255,0.3)',
                                            color: 'rgba(0,0,0,0.5)'
                                        }
                                    }}
                                >
                                    {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
                                </Button>
                            </Stack>
                        </form>
                    </Box>
                </Box>
            </SectionInner>

            <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
                <Alert onClose={() => setOpen(false)} severity={status === 'success' ? 'success' : 'error'} sx={{ width: '100%', borderRadius: 0, fontFamily: "'JetBrains Mono', monospace" }}>
                    {status === 'success' ? 'Message sent successfully! I will get back to you soon.' : 'Something went wrong. Please try again later.'}
                </Alert>
            </Snackbar>
        </Section>
    );
};

export default Contact;
