import { Box } from '@mui/material';
import SectionHeading from './SectionHeading';
import SkillCard from './SkillCard';
import { Section, SectionInner } from './common/Section';
import { SKILLS_DATA } from '../data/info';


const Skills = () => {
    return (
        <Section id="skills">
            <SectionInner>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
                    <SectionHeading title="TECH STACK." />
                </Box>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            md: 'repeat(4, 1fr)'
                        },
                        gridAutoRows: 'auto',
                        gridAutoFlow: 'dense',
                        gap: 2.5,
                        mt: 2
                    }}
                >
                    {SKILLS_DATA.map((skill, index) => (
                        <SkillCard
                            key={index}
                            title={skill.title}
                            items={skill.items}
                            color={skill.color}
                            gridColumn={skill.gridColumn as any}
                        />
                    ))}
                </Box>
            </SectionInner>
        </Section>
    );
};

export default Skills;
