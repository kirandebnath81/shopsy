import { useEffect } from "react";
//icons
import { GrFormAdd } from "react-icons/gr";

//styles
import { Container, AddButton } from "./styles/Address.styles";
import { StyledTitle } from "../../styles/Main.styles";

import { SelectAddress, NewAddress } from "../../components";

import { useModal } from "../../contexts";

const Addresses = () => {
  const { openNewAddress, setOpenNewAddress } = useModal();

  //scroll the page to top
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Container>
      <StyledTitle>My Addresses</StyledTitle>
      <SelectAddress />
      <AddButton onClick={() => setOpenNewAddress(true)}>
        <GrFormAdd /> <span> ADD NEW ADDRESS</span>
      </AddButton>

      {openNewAddress && <NewAddress />}
    </Container>
  );
};

export default Addresses;
