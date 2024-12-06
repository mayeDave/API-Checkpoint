import Card from 'react-bootstrap/Card';

const BlogCard = ({title, body}) => {

    const styles = {
        Card: {
            width: '18rem',
            height: '100%',
            margin: '10px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s ease-in-out',
            cursor: 'pointer',
        }
    }
    
    
  return (
    <Card style={styles.Card}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        
        <Card.Text>
            {body}
        </Card.Text>
        
      </Card.Body>
    </Card>
    
  )
}

export default BlogCard