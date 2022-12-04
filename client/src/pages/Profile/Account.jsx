//styles
import { Container, Box, ProfileBox } from "./styles/Account.styles";
import { StyledTitle } from "../../styles/Main.styles";

//context
import { useAuth } from "../../contexts";

const Account = () => {
  const { user, userName } = useAuth();

  return (
    <Container>
      <Box>
        <StyledTitle>My Account</StyledTitle>
        <ProfileBox>
          Name : <span>{userName?.name}</span>
        </ProfileBox>
        <ProfileBox>
          Email : <span>{user?.email}</span>
        </ProfileBox>
      </Box>
    </Container>
  );
};

export default Account;
