import styled from "styled-components";

const Wrapper = styled.section`
  width: 60%;
`;

const Title = styled.h3`
  margin: 0;
`;

const List = styled.ul`
  list-style: none;
  padding: 1.5rem 0;

  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const Comment = styled.ul`
  list-style: none;
`;

const Date = styled.li`
  font-weight: 500;
`;

export default function Comments({ comments }) {
  return (
    <Wrapper>
      <Title>Comments</Title>
      <List role="list">
        {comments.map((comment, index) => (
          <li key={index}>
            <Comment>
              <Date>{comment.date}</Date>
              <li>
                <q>{comment.text}</q>
              </li>
            </Comment>
          </li>
        ))}
      </List>
    </Wrapper>
  );
}
