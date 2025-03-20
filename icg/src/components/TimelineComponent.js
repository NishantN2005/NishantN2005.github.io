import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

function TimelineComponent() {
  return (
    <Timeline
 // Ensures dot & connector are in the middle, label on the left, content on the right
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
        maxWidth: '70%', paddingTop: '2rem'
      }}
    >
      {/* 1. Initial Consultation */}
      <TimelineItem
        sx={{
          display: 'flex',
          alignItems:'start',
          '&:before': {
            display: 'none', // Remove the extra spacing pseudo-element
          },
        }}
      >
        {/* Left Label */}
        <TimelineOppositeContent
          sx={{
            fontFamily: '"Marcellus", serif',
            paddingTop: '1rem',
            m: '0',      // Centers label vertically
            pr: 2,            // Right padding
            minWidth: 100,    // Consistent space for label
            fontWeight: 'bold',
            textAlign: 'right',
          }}
          color="text.secondary"
        >
          Pre-Project
        </TimelineOppositeContent>

        {/* Dot and Connector */}
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: '#facc15', width: '40px', height: '40px' }} />
          <TimelineConnector sx={{ bgcolor: '#facc15', height:'100px'}} />
        </TimelineSeparator>
        
        {/* Content */}
        <TimelineContent sx={{ px: 2 }}>
          <h2 className="text-3xl font-semibold font-marcellus">Initial Consultation</h2>
          <p className="text-lg text-gray-700 font-marcellus">
            We begin with an initial consultation to learn more about your
            organization, including your mission, operations, and goals. We’ll
            discuss any challenges you’re facing and how we can assist. Upon
            mutual agreement, we’ll proceed with the project.
          </p>
        </TimelineContent>
      </TimelineItem>

      {/* 2. Project Team Introduction */}
      <TimelineItem
        sx={{
          display: 'flex',
          alignItems: 'start',
          '&:before': {
            display: 'none', // Remove the extra spacing pseudo-element
          },
        }}
      >
        <TimelineOppositeContent
          sx={{
            fontFamily: '"Marcellus", serif',
            paddingTop: '1rem',
            m: '0',
            pr: 2,
            minWidth: 100,
            fontWeight: 'bold',
            textAlign: 'right',
          }}
          color="text.secondary"
        >
          Week 1
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: '#facc15', width: '40px', height: '40px' }} />
          <TimelineConnector sx={{ bgcolor: '#facc15', height:'100px' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ px: 2 }}>
          <h2 className="text-2xl font-semibold font-marcellus">Project Team Introduction</h2>
          <p className="text-lg text-gray-700 font-marcellus">
            Meet the team you’ll collaborate with over the next 6-8 weeks. During
            this kickoff call, the team will introduce themselves, discuss your
            pain points, clarify objectives, and draft a tailored project roadmap.
          </p>
        </TimelineContent>
      </TimelineItem>

      {/* 3. Research & Analysis */}
      <TimelineItem
        sx={{
          display: 'flex',
          alignItems: 'start',
          '&:before': {
            display: 'none', // Remove the extra spacing pseudo-element
          },
        }}
      >
        <TimelineOppositeContent
          sx={{
            fontFamily: '"Marcellus", serif',
            paddingTop: '1rem',
            m: '0',
            pr: 2,
            minWidth: 100,
            fontWeight: 'bold',
            textAlign: 'right',
          }}
          color="text.secondary"
        >
          Week 2-4
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: '#facc15', width: '40px', height: '40px' }} />
          <TimelineConnector sx={{ bgcolor: '#facc15', height:'100px' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ px: 2 }}>
          <h2 className="text-2xl font-semibold font-marcellus">Research &amp; Analysis</h2>
          <p className="text-lg text-gray-700 font-marcellus">
            The team dives into research, ideation, and data analysis to develop
            customized recommendations. Progress updates will be shared during
            weekly check-ins to ensure alignment.
          </p>
        </TimelineContent>
      </TimelineItem>

      {/* 4. Mid-Project Review */}
      <TimelineItem
        sx={{
          display: 'flex',
          alignItems: 'start',
          '&:before': {
            display: 'none', // Remove the extra spacing pseudo-element
          },
        }}
      >
        <TimelineOppositeContent
          sx={{
            fontFamily: '"Marcellus", serif',
            paddingTop: '1rem',
            m: '0',
            pr: 2,
            minWidth: 100,
            fontWeight: 'bold',
            textAlign: 'right',
          }}
          color="text.secondary"
        >
          Week 5
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: '#facc15', width: '40px', height: '40px' }} />
          <TimelineConnector sx={{ bgcolor: '#facc15', height:'100px' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ px: 2 }}>
          <h2 className="text-2xl font-semibold font-marcellus">Mid-Project Review</h2>
          <p className="text-lg text-gray-700 font-marcellus">
            We’ll conduct a formal mid-project check-in, providing a presentation
            or written deliverable to confirm we’re on the right path and make
            adjustments if necessary.
          </p>
        </TimelineContent>
      </TimelineItem>

      {/* 5. Final Presentation */}
      <TimelineItem
        sx={{
          display: 'flex',
          alignItems: 'start',
          '&:before': {
            display: 'none', // Remove the extra spacing pseudo-element
          },
        }}
      >
        <TimelineOppositeContent
          sx={{
            fontFamily: '"Marcellus", serif',
            paddingTop: '1rem',
            m: '0',
            pr: 2,
            minWidth: 100,
            fontWeight: 'bold',
            textAlign: 'end',
          }}
          color="text.secondary"
        >
          Week 6-8
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: '#facc15', width: '40px', height: '40px' }} />
          <TimelineConnector sx={{ bgcolor: '#facc15', height:'100px' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ px: 2 }}>
          <h2 className="text-2xl font-semibold font-marcellus">Final Presentation</h2>
          <p className="text-lg text-gray-700 font-marcellus">
            After thorough review by the Director of Consulting and project
            mentor(s), the team will present their findings and actionable
            recommendations in a detailed final presentation.
          </p>
        </TimelineContent>
      </TimelineItem>

      {/* 6. Client Feedback */}
      <TimelineItem
        sx={{
          alignItems: 'start',
        }}
      >
        <TimelineOppositeContent
        className="font-marcellus"
          sx={{
            fontFamily: '"Marcellus", serif',
            paddingTop: '1rem',
            pr: 2,
            minWidth: 100,
            fontWeight: 'bold',
            textAlign: 'right',
            
          }}
          color="text.secondary"
        >
          Post-Project
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: '#facc15', width: '40px', height: '40px' }} />
          {/* No connector if you want the line to end here */}
        </TimelineSeparator>
        <TimelineContent sx={{ px: 2}}>
          <h2 className="text-2xl font-semibold font-marcellus">Client Feedback</h2>
          <p className="text-lg text-gray-700 font-marcellus">
            We conclude by gathering feedback on the team’s performance, onboarding
            process, communication, and the quality of our deliverables to
            continually improve our approach.
          </p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default TimelineComponent;
