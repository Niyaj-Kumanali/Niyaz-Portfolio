import { Box, Typography, Stack, alpha } from '@mui/material';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { Section, SectionInner } from './common/Section';
import { CERTIFICATIONS_DATA } from '../data/info';

const Certifications = () => {

    return (
        <Section id="certifications">
            <SectionInner>
                <Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 4 }}>
                    <SectionHeading title="CERTIFICATIONS." sx={{ mb: 0 }} />
                </Stack>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 3 }}>
                    {CERTIFICATIONS_DATA.map((cert, index) => (
                        <Box
                            key={index}
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                x: 8,
                                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                                borderColor: 'rgba(32, 178, 170, 0.4)'
                            }}
                            sx={{
                                p: 4,
                                border: '1px solid rgba(255,255,255,0.05)',
                                background: 'rgba(255, 255, 255, 0.01)',
                                backdropFilter: 'blur(10px)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '0%',
                                    height: '2px',
                                    background: '#20B2AA',
                                    transition: 'width 0.3s ease'
                                },
                                '&:hover::after': {
                                    width: '100%'
                                }
                            }}
                        >
                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#fff', fontSize: '1.2rem' }}>
                                    {cert.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: alpha('#fff', 0.4), fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem' }}>
                                    {cert.issuer} // {cert.period}
                                </Typography>
                            </Box>
                            <Award size={24} color="#20B2AA" style={{ opacity: 0.6 }} />
                        </Box>
                    ))}
                </Box>
            </SectionInner>
        </Section>
    );
};

export default Certifications;
