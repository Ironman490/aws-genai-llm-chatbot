import { useNavigate } from 'react-router-dom';

const SelectionScreen = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <button onClick={() => navigate('/welcome')}>Go to Welcome</button>
      <button onClick={() => navigate('/extraction-workflow')}>Go to Extraction Workflow</button>
    </div>
  );
};

export default SelectionScreen;
