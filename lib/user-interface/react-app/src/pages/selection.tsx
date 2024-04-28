import { useNavigate } from 'react-router-dom';
import { Button, Container, Box, Header } from '@cloudscape-design/components';

const SelectionScreen = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header variant="h1">Select Your Path</Header>
      <Box padding="l">
          <Button onClick={() => navigate('/welcome')}>
            Welcome Page
          </Button>
          <Button onClick={() => navigate('/extraction-workflow')}>
            Extraction Workflow
          </Button>
      </Box>
    </Container>
  );
};

export default SelectionScreen;


