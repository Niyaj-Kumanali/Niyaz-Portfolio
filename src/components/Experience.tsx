import { Box, Typography, Stack, alpha } from '@mui/material';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { Section, SectionInner } from './common/Section';
import { EXPERIENCE_DATA } from '../data/info';


const Experience = () => {
    return (
        <Section id="experience">
            <SectionInner>
                <Box sx={{ mb: 4 }}>
                    <SectionHeading title="JOURNEY." />
                </Box>

                <Box sx={{ position: 'relative', pl: { xs: 2, md: 8 }, py: 4 }}>
                    {/* Timeline Vertical Line */}
                    <Box
                        sx={{
                            position: 'absolute',
                            left: { xs: '16px', md: '40px' },
                            top: 0,
                            bottom: 0,
                            background: `linear-gradient(to bottom, transparent, ${alpha('#20B2AA', 0.5)} 10%, ${alpha('#20B2AA', 0.5)} 90%, transparent)`,
                            width: '2px',
                        }}
                    />

                    <Stack spacing={12}>
                        {EXPERIENCE_DATA.map((exp, index) => (
                            <Box
                                key={index}
                                component={motion.div}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                sx={{
                                    position: 'relative',
                                    display: 'grid',
                                    gridTemplateColumns: { xs: '1fr', lg: '220px 1fr' },
                                    gap: { xs: 4, lg: 8 },
                                    alignItems: 'flex-start',
                                    pl: { xs: 8, md: 10, lg: 0 } // Shift row content on mobile/tablet
                                }}
                            >
                                {/* Timeline Icon Node */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        left: { xs: '16px', md: '40px' },
                                        top: '12px',
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '4px',
                                        backgroundColor: '#000',
                                        border: '1px solid #20B2AA',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        zIndex: 2,
                                        boxShadow: '0 0 15px rgba(32, 178, 170, 0.3)',
                                        transform: 'translateX(-50%)' // Center on the line
                                    }}
                                >
                                    <Briefcase size={14} color="#20B2AA" />
                                </Box>

                                {/* Date Sidebar */}
                                <Box sx={{ pt: 1, pl: { xs: 0, lg: 12 } }}>
                                    <Typography
                                        sx={{
                                            fontFamily: "'JetBrains Mono', monospace",
                                            fontSize: '0.9rem',
                                            color: '#20B2AA',
                                            fontWeight: 700,
                                            letterSpacing: '0.1em'
                                        }}
                                    >
                                        {exp.period}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: 'rgba(255, 255, 255, 0.4)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.2em',
                                            mt: 1,
                                            display: 'block'
                                        }}
                                    >
                                        {exp.location}
                                    </Typography>
                                </Box>

                                {/* Experience Card */}
                                <Box
                                    component={motion.div}
                                    whileHover={{ x: 10, backgroundColor: alpha('#20B2AA', 0.03) }}
                                    sx={{
                                        p: { xs: 3, md: 5 },
                                        background: alpha('#fff', 0.02),
                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                        backdropFilter: 'blur(10px)',
                                        borderRadius: '2px', // Minimalist square edges
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontSize: { xs: '1.8rem', md: '2.5rem' },
                                            fontWeight: 900,
                                            mb: 1,
                                            color: '#fff'
                                        }}
                                    >
                                        {exp.company}
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontSize: { xs: '1.1rem', md: '1.3rem' },
                                            fontWeight: 500,
                                            color: '#20B2AA',
                                            mb: 4,
                                            fontFamily: "'JetBrains Mono', monospace",
                                            letterSpacing: '0.05em'
                                        }}
                                    >
                                        {exp.role}
                                    </Typography>

                                    <Stack spacing={3}>
                                        {exp.highlights.map((h, i) => (
                                            <Box
                                                key={i}
                                                sx={{
                                                    display: 'flex',
                                                    gap: 2,
                                                    alignItems: 'flex-start'
                                                }}
                                            >
                                                <Box sx={{
                                                    width: '6px',
                                                    height: '6px',
                                                    borderRadius: '50%',
                                                    background: '#20B2AA',
                                                    mt: 1.2,
                                                    flexShrink: 0
                                                }} />
                                                <Typography
                                                    variant="body1"
                                                    sx={{
                                                        fontSize: { xs: '0.95rem', md: '1.1rem' },
                                                        lineHeight: 1.6,
                                                        color: 'rgba(255, 255, 255, 0.7)',
                                                        fontFamily: "'Inter', sans-serif"
                                                    }}
                                                >
                                                    {h}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Stack>
                                </Box>
                            </Box>
                        ))}
                    </Stack>
                </Box>
            </SectionInner>
        </Section>
    );
};

export default Experience;
