import { Container } from '@mui/material';

function About() {
  return (
    <Container>
      <h2>About App</h2>
      <p>
        This app allows someone to search for users on GitHub. When they search
        they will be able to:
      </p>
      <ul>
        <li>Search for users and see a paginated list of results</li>
        <li>
          Navigate through the next and previous pages of the paginated results
        </li>
        <li>See the total count of search results</li>
        <li>
          See notable information for each search result, such as the
          description, star/follower count, and profile pictures
        </li>
        <li>
          Select a search result and be taken to the applicable page on
          github.com API
        </li>
      </ul>
    </Container>
  );
}

export default About;
