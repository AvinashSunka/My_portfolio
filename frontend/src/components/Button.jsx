import Button from '@mui/material/Button';

export default function Button_temp({
  Text,
  fontSize = '16px',
  onClick,
  hover_bg = '#333',
}) {
  return (
    <Button
      variant="contained"
      size="large"
      onClick={onClick}
      sx={{
        background: 'linear-gradient(to right, #f25c05, #f7b733)',
        color: 'white',
        fontWeight: 600,
        fontSize: fontSize,
        borderRadius: '8px',
        paddingX: '20px',
        paddingY: '10px',
        textTransform: 'uppercase',
        transition: 'all 0.3s ease-in-out',
        boxShadow: 'none',
        '&:hover': {
          background: hover_bg,
          color: 'white',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      {Text}
    </Button>
  );
}
